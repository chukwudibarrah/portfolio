import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as contentful from 'contentful';
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

  useEffect(() => {
    if (post && post.fields && post.fields.content) {
      console.log("Content:", post.fields.content);
    }
  }, [post]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-UK', options);
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
            <span key={index}>
              {documentToReactComponents(item, options)}
            </span>
          ))}
        </h4>
      ),
      "paragraph": (node) => (
        <p className="leading-normal text-base lg:text-xl font-zilla my-7">
          {node.content.map((item, index) => (
            <span key={index}>
              {documentToReactComponents(item, options)}
            </span>
          ))}
        </p>
      ),
      "hyperlink": (node) => (
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
    <div>
      <div>
        <img
          src={post.fields.featuredImage.fields.file.url}
          alt="Post Thumbnail"
        />
      </div>
      <div className="md:mx-28 mx-4 my-16">
        <h1 className="text-4xl md:text-6xl font-outfit">{post.fields.title}</h1>
        <p className="my-4 font-outfit">Published on {formatDate(post.fields.published)}</p>
        <div className="my-16">
          {documentToReactComponents(post.fields.content, options)}
        </div>
        {/* <div>{post.fields.related}</div> */}
      </div>
    </div>
  );
}
