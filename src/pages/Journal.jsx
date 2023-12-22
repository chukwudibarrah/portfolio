import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as contentful from 'contentful';

export default function Journal() {
  const [posts, setPosts] = useState([]);

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    previewAccessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (posts.length === 0) {
          const response = await client.getEntries({
            content_type: "journal",
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
      <div className="grid lg:grid-cols-2 gap-10 font-outfit py-32 justify-items-center cursor-pointer md:mx-28 mx-4">
        {posts.map((post) => (
          <Link key={post.sys.id} to={`/journal/${post.fields.slug}`}>
            {post.fields.featuredImage && (
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt="Thumbnail"
                className=""
              />
            )}
            <h3 className="text-gray-200 text-2xl md:text-4xl tracking-wide font-outfit my-5">
              {post.fields.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
