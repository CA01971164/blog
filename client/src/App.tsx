import React from "react";
import { Article } from "./Components/Article";
import { Head } from "./Components/Head";
import { Foot } from "./Components/Foot";

import usePostData from "./Hooks/usePostData";

// 全体を見せる表示
const App: React.FC = () => {
  // カスタムフックの使用
  const { posts } = usePostData();

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
