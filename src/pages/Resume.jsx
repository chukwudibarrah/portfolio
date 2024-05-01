import Experience from "../components/Experience";
import Education from "../components/Education";
import OnlineCourses from "../components/OnlineCourses";

export default function Resume() {
  return (
    <div className="min-h-screen w-screen overscroll-none flex flex-col md:flex-row md:items-baseline md:pt-24 justify-center bg-charcoal">
      <p className="fixed z-0 text-[180px] leading-[200px] md:text-[400px] md:leading-[400px] opacity-5 text-gray-200 font-extrabold lg:mt-52 select-none">
        résumé
      </p>

      {/* Render work experience details */}

      <div className="mx-12 md:mt-0 md:m-20 md:p-10 md:w-7/12 z-20">
        <div>
          <h2 className="text-5xl md:text-6xl my-14 text-gray-300 font-outfit">
            Experience
          </h2>
        </div>
        <Experience />
      </div>

      {/* Render academic details */}

      <div className="mx-12 mt-16 md:mt-0 md:m-20 md:p-10 z-20">
        <div>
          <h2 className="text-5xl md:text-6xl my-14 text-gray-300 font-outfit">
            Education
          </h2>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl my-14 text-gray-300 font-outfit">
            Formal education
          </h3>
          <Education />
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl my-14 text-gray-300 font-outfit">
            Online courses
          </h3>
          <OnlineCourses />
        </div>
      </div>

    </div>
  );
}
