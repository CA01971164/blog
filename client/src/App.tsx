import React, { useEffect } from "react";
import axios from "axios";
import { Article } from "./Components/Article";

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
      </main>
      <Foot />
    </>
  );
};

export default App;
