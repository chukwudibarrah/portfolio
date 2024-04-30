import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as contentful from "contentful";
import moment from "moment"; // New import for date formatting
import SEO from "../utils/SEO";
import { trackLinkClick } from "../utils/Analytics";

export default function Journal() {
  const [posts, setPosts] = useState([]);

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
        if (posts.length === 0) {
          const response = await client.getEntries({
            content_type: "journal",
            order: 'fields.published', // Sort by published date
          });

          setPosts(response.items);
        }
      } catch (error) {
        console.error("Error fetching Contentful entries:", error);
      }
    };

    fetchPosts();
  }, [client, posts]);

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

      <div className="grid lg:grid-cols-2 gap-10 font-outfit py-32 justify-items-center cursor-pointer md:mx-28 mx-4">
        {posts.map((post) => (
          <NavLink
            reloadDocument
            key={post.sys.id}
            to={`/journal/${post.fields.slug}`}
            onClick={handleLinkClick}
          >
            {post.fields.featuredImage && (
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt="Thumbnail"
                className="hover:scale-95 transition-all duration-700"
              />
            )}
            <h3 className="text-gray-200 text-2xl md:text-4xl tracking-wide font-outfit my-5">
              {post.fields.title}
            </h3>
            {/* <p className="text-gray-400"> 
              {moment(post.fields.published).format('D MMMM YYYY')}
            </p> */}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
