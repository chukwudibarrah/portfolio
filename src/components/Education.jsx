import { useState, useEffect } from "react";
import { Client, query as q } from "faunadb";
import Accordion from "./Accordion";
import { trackLinkClick } from "../utils/Analytics";

const faunaClient = new Client({
  secret: import.meta.env.VITE_FAUNA_ADMIN_KEY,
});

export default function Education() {
  const [education, setEducation] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const result = await faunaClient.query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("education"))),
            q.Lambda("doc", q.Get(q.Var("doc")))
          )
        );

        const educationData = result.data.map((item) => ({
          school: item.data.school,
          course: item.data.course,
          year: item.data.year,
        }));

        setEducation(educationData);
      } catch (error) {
        console.error("Error fetching education data:", error.message);
        // Handle the error or set an error state
      }
    };

    fetchEducation();
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    trackLinkClick("Education accordion clicked");
  };

  return (
    <div className="z-50 text-gray-300 font-outfit tracking-wide">
      {education.map((item, index) => (
        <Accordion
          key={index}
          title={item.school}
          content={
            <div>
              <div className="flex items-baseline my-5 justify-between">
                <p className="text-2xl">{item.course}</p>
                <p className="font-bold text-brown">{item.year}</p>
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
}
