import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import * as contentful from "contentful";
import SEO from "../utils/SEO";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    previewAccessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  });

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug || !isFetching) {
        return;
      }
      try {
        const response = await client.getEntries({
          content_type: "journal",
          "fields.slug": slug,
        });

        if (response.items.length > 0) {
          setPost(response.items[0]);
          setError(null);
        } else {
          setError("Post not found");
        }
      } catch (error) {
        setError("Error fetching Contentful entry");
      } finally {
        setIsFetching(false);
      }
    };

    fetchPost();
  }, [client, slug, isFetching]);

  // useEffect(() => {
  //   if (post && post.fields && post.fields.content) {
  //     console.log("Related:", post.fields.related);
  //   }
  // }, [post]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-UK",
      options
    );
    return formattedDate;
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => (
        <img
          key={node.data.target.sys.id}
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.description}
        />
      ),
      "heading-4": (node) => (
        <h4 className="text-2xl md:text-4xl font-zilla">
          {node.content.map((item, index) => (
            <span key={index}>{documentToReactComponents(item, options)}</span>
          ))}
        </h4>
      ),
      paragraph: (node) => (
        <p className="leading-normal text-base lg:text-xl font-zilla my-7">
          {node.content.map((item, index) => (
            <span key={index}>{documentToReactComponents(item, options)}</span>
          ))}
        </p>
      ),
      hyperlink: (node) => (
        <a
          href={node.data.uri}
          target="_blank"
          rel="noopener noreferrer"
          id="animate"
          // className="underline text-blue-500 hover:text-blue-700"
        >
          {node.content[0].value}
        </a>
      ),
    },
  };

  return (
    <article>
      <SEO
        title={`${post.fields.title} | Chukwudi Barrah`}
        description={post.fields.description}
        name="@cbarrah"
        type="article"
        imageUrl={post.fields.featuredImage.fields.file.url}
        url={`https://chukwudibarrah.com/journal/${slug}`}
      />
      <div>
        <img
          src={post.fields.featuredImage.fields.file.url}
          alt="Post Thumbnail"
        />
      </div>
      <div className="md:mx-28 mx-4 my-16">
        <h1 className="text-4xl md:text-6xl font-outfit">
          {post.fields.title}
        </h1>
        <p className="my-4 font-outfit hidden">
          Published on {formatDate(post.fields.published)}
        </p>
        <div className="my-16">
          {documentToReactComponents(post.fields.content, options)}
        </div>
        <hr />

        {/* Related Articles Section */}
        <div>
          <h3 className="text-4xl font-outfit mt-20 mb-12">Related articles</h3>
        </div>
        <div className="related-articles grid grid-cols-1 lg:grid-cols-2 gap-10">
          {post.fields.related &&
            post.fields.related.map((relatedPost) => (
              <NavLink
                reloadDocument
                key={relatedPost.sys.id}
                to={`/journal/${relatedPost.fields.slug}`}
                className="related-article-card"
              >
                <img
                  src={relatedPost.fields.featuredImage.fields.file.url}
                  alt={relatedPost.fields.title}
                  className="max-w-full h-auto hover:scale-95 transition-all duration-700 ease-in-out overflow-hidden"
                />
                <h4 className="text-3xl font-outfit mt-2">
                  {relatedPost.fields.title}
                </h4>
                <p className="mt-1 font-zilla md:text-2xl font-light">
                  {relatedPost.fields.description}
                </p>
              </NavLink>
            ))}
        </div>
      </div>
    </article>
  );
}
