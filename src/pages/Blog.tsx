import React from "react";
import getPosts, { Post } from "./api/listPosts";
import Navbar from "../components/navbar";
import "./Blog.css"

import Markdown from "marked-react";
import hljs from "highlight.js";

const renderer = {
  code: (code: string, language: string) => {
    const validLanguage = hljs.getLanguage(language)
      ? language
      : "plaintext";
    return <div className = "code" dangerouslySetInnerHTML={{ __html: hljs.highlight(validLanguage, code).value}} />;
  }
}



export default function Blog() {

  const [posts, setPosts] = React.useState<Post[]>([]);
  const [post, setPost] = React.useState<Post>();

  React.useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  React.useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const post = posts.find((post) => post.path === hash);
      if (post) {
        setPost(post);
      }
    }
  }, [posts]);


  if (!posts) {
    return (
      <div>
        <Navbar />
        <h1>Blog</h1>
        <p> Loading... </p>
      </div>
    );
  }

  if (post) {
    return (
      <div>
        <Navbar />
        <br />
        <h1 style={{ color: "var(--a-color)" }}>{post.meta.title ? post.meta.title : "Blog post"}</h1>
        <p>Created/Updated at {post.meta.created ? post.meta.created : "Unknown"}</p>
        <br />
        <Markdown value = {post.content} renderer={renderer}/> 
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <br />
      <h1>Blog Posts</h1>
      <br />

      <div className="blog-posts">
        {posts.map((post) => (
          <a className="blog-post" key={post.path} href = {`/blog#${post.path}`} onClick = {() => {
            window.location.hash = post.path;
            setPost(post);
          }} >
            <h2>{post.meta.title ? post.meta.title : "Blog post"}</h2>
            <p>Created/Updated at {post.meta.created ? post.meta.created : "Unknown"}</p>
          </a>
        ))}
      </div>
    </div>
  )
}