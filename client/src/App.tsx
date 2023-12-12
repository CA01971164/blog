import React, { useEffect } from "react";
import axios from "axios";

import { useState } from "react";
import { Head } from "./Components/Head";
import { Foot } from "./Components/Foot";

type Post = {
  id: number;
  title: string;
  content: string;
  time: Date;
};

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = axios.get("http://localhost:3001/posts");
        console.log((await response).data);
        const arr = (await response).data;
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

        <article className="blog-post">
          <header>
            <h2>タイトル2</h2>
            <time dateTime="2023-12-11">2023-12-11</time>
          </header>
          <p>本文2</p>
        </article>

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
