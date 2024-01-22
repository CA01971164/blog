import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Article } from "./Components/Article";
import { Head } from "./Components/Head";
import { Foot } from "./Components/Foot";
import BlogPost from "./Components/BlogPost"; //ブログポストの詳細を表示するコンポーネント
import usePostData from "./Hooks/usePostData";

// 全体を見せる表示
const App: React.FC = () => {
  // カスタムフックの使用
  const { posts } = usePostData();

  return (
    <Router>
      <Head />
      <main>
        <Routes>
          <Route path="/" element={<Article posts={posts} />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <Foot />
    </Router>
  );
};

export default App;
