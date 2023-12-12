import React, { useEffect } from "react";
import axios from "axios";

import { useState } from "react";
import { Head } from "./Components/Head";
import { Foot } from "./Components/Foot";

// josoデータで受け取る型の指定
type Post = {
  id: number;
  title: string;
  content: string;
  time: Date;
};

//投稿した記事を表示させる仕組み
const Article: React.FC<{ posts: Record<number, Post> }> = ({ posts }) => {
  return (
    <>
      {Object.values(posts).map((post) => (
        <article key={post.id} className="blog-post">
          <header>
            <h2>{post.title}</h2>
          </header>
          <p>{post.content}</p>
        </article>
      ))}
    </>
  );
};

// 全体を見せる表示
const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        console.log(response.data);
        const arr = response.data;
        setPosts(arr);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head />
      <main>
        <p>POST</p>

        <Article posts={posts} />
        <nav>
          <ul>
            <li>
              <a href="page1.html">1</a>
            </li>
            <li>
              <a href="page2.html">2</a>
            </li>
            <li>
              <a href="page3.html">3</a>
            </li>
            <li>
              <a href="page4.html">4</a>
            </li>
            <li>
              <a href="page12.html">12</a>
            </li>
          </ul>
        </nav>
      </main>
      <Foot />
    </>
  );
};

export default App;
