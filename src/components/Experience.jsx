import { useState, useEffect } from "react";
import { Client, query as q } from "faunadb";
import Accordion from "./Accordion";

const faunaClient = new Client({
  secret: import.meta.env.VITE_FAUNA_ADMIN_KEY,
});

export default function Experience() {
  const [experience, setExperience] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const result = await faunaClient.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("experience"))),
            q.Lambda("doc", q.Get(q.Var("doc")))
          )
        );
  
        const experienceData = result.data.map((work) => ({
          company: work.data.company,
          position: work.data.position,
          year: work.data.year,
          skills: work.data.skills,
        }));
  
        // Reverse the order of the array
        const reversedExperience = experienceData.reverse();
  
        setExperience(reversedExperience);
      } catch (error) {
        console.error("Error fetching experience data:", error.message);
        // Handle the error or set an error state
      }
    };
  
    fetchExperience();
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="z-50 text-gray-300 font-outfit tracking-wide">
      {experience.map((item, index) => (
        <Accordion
          key={index}
          title={item.position}
          content={
            <div>
              <div className="flex items-baseline my-5 justify-between">
                <p className="text-2xl">{item.company}</p>
                <p className="font-bold text-brown">{item.year}</p>
              </div>
              <p>{item.skills}</p>
            </div>
          }
        />
      ))}
    </div>
  );
}
