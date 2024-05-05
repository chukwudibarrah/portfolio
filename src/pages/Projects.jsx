import FetchProjects from "../components/FetchProjects";
import SEO from "../utils/SEO";

export default function Projects() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center overscroll-none bg-charcoal pt-32">
      <SEO
        title="Projects | Chukwudi Barrah"
        description="A compilation of some of my past and ongoing works"
        name="@cbarrah"
        type="website"
        imageUrl="https://raw.githubusercontent.com/chukwudibarrah/portfolio/main/public/uploads/chukwudibarrah.webp"
        url="https://chukwudibarrah.com/projects"
      />
      <h1 className="fixed bottom-36 -z-0 text-[160px] leading-[120px] md:text-[400px] md:leading-[300px] opacity-5 text-gray-200/40 font-extrabold select-none">
        pro
        <br />
        jects
      </h1>
      <div className="md:text-7xl text-5xl font-zilla text-brown md:px-32 px-11 tracking-wide py-20 z-10">
        <h2>
          A selection of past and ongoing projects
        </h2>
      </div>
      <FetchProjects />
    </div>
  );
}
