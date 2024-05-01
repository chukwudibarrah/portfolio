import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import moment from "moment"; // For date formatting
import SEO from "../utils/SEO";
import { trackLinkClick } from "../utils/Analytics";

export default function Journal() {
  const [groupedPosts, setGroupedPosts] = useState({});

  const handleLinkClick = () => {
    trackLinkClick("Journal links");
  };

  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    previewAccessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: "journal",
          order: "fields.published", // Sort by published date
        });

        // Grouping posts by year and month of publication
        const groupedPostsByYear = response.items.reduce((acc, post) => {
          const year = moment(post.fields.published).format("YYYY");
          const month = moment(post.fields.published).format("MMMM");

          if (!acc[year]) {
            acc[year] = {};
          }

          if (!acc[year][month]) {
            acc[year][month] = [];
          }

          acc[year][month].push(post);

          return acc;
        }, {});

        setGroupedPosts(groupedPostsByYear);
      } catch (error) {
        console.error("Error fetching Contentful entries:", error);
      }
    };

    fetchPosts();
  }, [client]);

  return (
    <div className="flex min-h-screen w-screen overscroll-none bg-charcoal justify-center">
      <SEO
        title="Journal | Chukwudi Barrah"
        description="I write about some of my more civil thoughts and experiences."
        name="@cbarrah"
        type="website"
        imageUrl="/me me me.webp"
        url="https://chukwudibarrah.com/journal"
      />

      <h1 className="fixed pt-64 -z-0 text-[200px] leading-[150px] md:text-[400px] md:leading-[300px] opacity-5 text-gray-200/40 font-extrabold">
        jour
        <br />
        nal
      </h1>

      <div className="py-32 justify-items-center md:mx-28 mx-4 z-10">
        {Object.keys(groupedPosts)
          .sort((a, b) => b - a) // Sort by latest year first
          .map((year) => (
            <div key={year} className="pb-10">
              {" "}
              {/* Group for each year */}
              <h3 className="text-sienna font-outfit text-md md:text-xl uppercase pb-2 pt-10">
                {year}
              </h3>
              <div className="grid grid-cols-3">
                {" "}
                {/* Year and month column */}
                <div className="">
                  {Object.keys(groupedPosts[year])
                    .sort((a, b) => moment(b, "MMMM") - moment(a, "MMMM")) // Sort months in reverse order
                    .map((month) => (
                      <div key={month} className="pb-12 xl:pb-5">
                        <h4 className="uppercase text-sienna font-outfit text-md md:text-2xl font-semibold">
                          {month}
                        </h4>
                      </div>
                    ))}
                </div>
                {/* Posts column */}
                <div className="col-span-2">
                  {Object.keys(groupedPosts[year])
                    .sort((a, b) => moment(b, "MMMM") - moment(a, "MMMM"))
                    .map((month) => (
                      <ul
                        key={month}
                        className="list-disc list-inside text-gray-200 text-xl md:text-4xl font-outfit font-thin"
                      >
                        {groupedPosts[year][month].map((post) => (
                          <li className="pb-4 group" key={post.sys.id}>
                            <NavLink
                              reloadDocument
                              to={`/journal/${post.fields.slug}`}
                              onClick={handleLinkClick}
                              className="bg-left-bottom bg-gradient-to-r from-sienna to-sienna bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-700 ease-out hover:text-sienna"
                            >
                              {post.fields.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
