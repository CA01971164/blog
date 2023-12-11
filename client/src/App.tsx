import React from "react";
import { useState } from "react";
import { Head } from "./Components/Head";
import { Foot } from "./Components/Foot";


const App: React.FC = () => {
  return (
    <>
      <Head />
      <main>
        <p>POST</p>

        <article className="blog-post">
          <header>
            <h2>タイトル１</h2>
            <time dateTime="2023-12-11">2023-12-11</time>
          </header>
          <p>本文１</p>
        </article>
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
