import { useState, useEffect } from "react";
import { Client, query as q } from "faunadb";
import Accordion from "./Accordion";
import { trackLinkClick } from "../utils/Analytics";

const faunaClient = new Client({
  secret: import.meta.env.VITE_FAUNA_ADMIN_KEY,
});

export default function OnlineCourses() {
  const [courses, setCourses] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const fetchOnlineCourses = async () => {
      try {
        const result = await faunaClient.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("online_courses"))),
            q.Lambda("doc", q.Get(q.Var("doc")))
          )
        );
  
        const onlineCoursesData = result.data.map((item) => ({
          school: item.data.school,
          course: item.data.course,
          skills: item.data.skills,
          status: item.data.status,
        }));
  
        // Reverse the order of the array
        const reversedCourses = onlineCoursesData.reverse();
  
        setCourses(reversedCourses);
      } catch (error) {
        console.error("Error fetching online courses data:", error.message);
        // Handle the error or set an error state
      }
    };
  
    fetchOnlineCourses();
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    trackLinkClick("Online courses accordion");
  };

  return (
    <div className="z-50 text-gray-300 font-outfit tracking-wide">
      {courses.map((item, index) => (
        <Accordion
          key={index}
          title={item.school}
          content={
            <div>
              <div className="flex items-baseline my-5 justify-between">
                <p className="text-2xl">{item.course}</p>
                <p className="font-bold text-brown">{item.status}</p>
              </div>
              <p>{item.skills}</p>
            </div>
          }
        />
      ))}
    </div>
  );
}
