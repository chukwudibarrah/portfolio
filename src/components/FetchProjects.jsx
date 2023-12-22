import { useState, useEffect } from "react";
import { Client, query as q, errors } from "faunadb";

const faunaClient = new Client({
  secret: import.meta.VITE_FAUNA_ADMIN_KEY,
});

export default function FetchProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await faunaClient.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("projects"))),
            q.Lambda("doc", q.Get(q.Var("doc")))
          )
        );

        const projectData = result.data.map((project) => ({
          company: project.data.company,
          media: project.data.media,
          role: project.data.role,
          image: project.data.image,
          url: project.data.url,
          title: project.data.title,
          description: project.data.description,
        }));

        setProjects(projectData);
      } catch (error) {
        if (error instanceof errors.FaunaHTTPError) {
          console.error("FaunaDB HTTP error:", error.message, error.errors);
        } else {
          console.error("Error fetching project data:", error.message);
        }
        // Handle the error or set an error state
      }
    };

    fetchProjects();
  }, []); // Run once on component mount

  return (
    <div className="grid lg:grid-cols-2 gap-16 pb-32 md:mx-28 mx-4">
      {projects.map((project, index) => (
        <div key={index}>
          <div className="">
            <a href={project.url}>
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="cursor-pointer"
                />
              </div>
            </a>
            <div>
              <a href={project.url}>
                <h2 className="text-3xl text-gray-200 md:text-[39px] font-outfit my-4">
                  {project.title}
                </h2>
              </a>
            </div>
            <div className="text-gray-600">
              <p className="font-extralight text-lg text-saffron font-zilla my-3">
                {project.description}
              </p>
              <p className="text-xl text-gray-200 font-zilla">Company: {project.company}</p>
              <p className="text-xl text-gray-200 font-zilla">Media: {project.media}</p>
              <p className="text-xl text-gray-200 font-zilla">Role: {project.role}</p>
              <div className="my-5">
                <a
                  href={project.url}
                  id="animate"
                  className="font-zilla text-gray-200 text-xl hover:text-sienna"
                >
                  See project
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
