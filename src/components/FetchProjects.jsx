import { useState, useEffect } from "react";
import { Client, query as q } from "faunadb";
import { trackLinkClick } from "../utils/Analytics";

const faunaClient = new Client({
  secret: import.meta.env.VITE_FAUNA_ADMIN_KEY,
});

export default function FetchProjects() {
  const [projects, setProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [allProjects, setAllProjects] = useState([]);
  const [projectIndex, setProjectIndex] = useState(0);

  const projectsPerPage = 5;  // Number of projects to show per page

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const result = await faunaClient.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("projects")), { size: 100000 }),  // Large size to simulate fetching all
            q.Lambda("doc", q.Get(q.Var("doc")))
          )
        );
        setAllProjects(
          result.data.map((doc) => ({
            id: doc.ref.id,
            title: doc.data.title,
            url: doc.data.url,
            category: doc.data.category,
            description: doc.data.description,
          }))
        );
      } catch (error) {
        console.error("Error fetching all projects:", error);
      }
    };

    fetchAllProjects();
  }, []);

  useEffect(() => {
    setProjects(
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter((project) => project.category === selectedCategory)
    );
    setProjectIndex(0);  // Reset index when category changes
  }, [selectedCategory, allProjects]);

  useEffect(() => {
    // Update displayed projects when projects or projectIndex changes
    setDisplayedProjects(projects.slice(0, projectIndex + projectsPerPage));
  }, [projects, projectIndex]);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value || event.target.textContent;
    setSelectedCategory(newCategory);
  };

  const loadMoreProjects = () => {
    if (projectIndex + projectsPerPage < projects.length) {
      setProjectIndex(projectIndex + projectsPerPage);
    }
  };

  return (
    <div className="w-screen min-h-screen pb-32 md:px-32 px-11 z-10">
      <div className="text-gray-200 font-outfit font-thin">
        <p className="text-lg">Filter projects</p>
        <div className="hidden max-w-full pt-10 pb-24 md:flex space-x-2 md:space-x-7 lg:space-x-12">
          {["All", "Editing and copywriting", "Podcasting", "Web development", "Web editing"].map((category) => (
            <button key={category} onClick={handleCategoryChange} className={`px-3 py-2 rounded-md ${selectedCategory === category ? "text-sienna font-semibold" : "text-gray-200"}`}>
              {category}
            </button>
          ))}
        </div>
        <div className="block md:hidden max-w-full pt-7 pb-20">
          <select id="skill" name="skill" onChange={handleCategoryChange} value={selectedCategory} className="bg-transparent outline-sienna ring-sienna border-gray-200 border-2 rounded-md" required>
            <option value="" disabled>Select</option>
            {["All", "Editing and copywriting", "Podcasting", "Web development", "Web editing"].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      {displayedProjects.map((project, index) => (
        <div key={index}>
          <ul className="list-disc list-inside text-gray-200 text-2xl md:text-[39px] font-outfit leading-loose font-thin">
            <li className="group">
              <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-700 ease-out hover:text-sienna" 
              onClick={() => trackLinkClick("Projects link clicked")}>
                {project.title}
              </a>
            </li>
          </ul>
        </div>
      ))}
      {projectIndex + projectsPerPage < projects.length && (
        <div className="flex justify-center my-32 group">
          <button onClick={loadMoreProjects} className="font-outfit text-xl md:text-2xl font-extralight text-gray-200 bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_8px] bg-no-repeat group-hover:bg-[length:0%_8px] transition-all duration-700 ease-out hover:text-sienna">
            Load more...
          </button>
        </div>
      )}
    </div>
  );
}
