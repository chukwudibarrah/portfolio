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
          const year = moment(post.fields.published).format('YYYY');
          const month = moment(post.fields.published).format('MMMM');

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
    <div className="min-h-screen w-screen overscroll-none bg-charcoal">
      <SEO
        title="Journal | Chukwudi Barrah"
        description="I write about some of my more civil thoughts and experiences."
        name="@cbarrah"
        type="website"
        imageUrl="https://example.com/path/to/your/default/journal-image.jpg"
        url="https://chukwudibarrah.com/journal"
      />

      <div className="font-outfit py-32 justify-items-center cursor-pointer md:mx-28 mx-4">
        {Object.keys(groupedPosts)
          .sort((a, b) => b - a) // Sort by latest year first
          .map((year) => (
            <div key={year}>
              <h3 className="text-sienna font-outfit text-md md:text-xl uppercase pb-2 pt-10">{year}</h3>

              {Object.keys(groupedPosts[year])
                .sort((a, b) => moment(b, 'MMMM') - moment(a, 'MMMM')) // Sort months in reverse order
                .map((month) => (
                  <div key={month}>
                    <h4 className="uppercase text-sienna font-outfit text-xl md:text-2xl font-semibold">{month}</h4>

                    <ul className="list-disc list-inside text-gray-200 text-2xl md:text-4xl font-outfit font-thin">
                      {groupedPosts[year][month].map((post) => (
                        <NavLink
                          reloadDocument
                          key={post.sys.id}
                          to={`/journal/${post.fields.slug}`}
                          onClick={handleLinkClick}
                        >
                          <li className="py-7">{post.fields.title}</li>
                        </NavLink>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
      </div>
    </div>
  );
}
