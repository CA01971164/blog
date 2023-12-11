import React from "react";
const App: React.FC = () => {
  return (
    <>
      <header>
        <button>home</button>
        <form>
          <label>検索:</label>
          <input type="search"></input>
          <input type="submit" value="検索" />
        </form>
        <form>
          <select name="言語" id="">
            <option value="日本語">日本語</option>
            <option value="English">English</option>
          </select>
        </form>
        <button>カテゴリ</button>
        <button>ログイン</button>
      </header>
      <main>
        <p>POST</p>
        <div>
          <h3>Hello</h3>
          <p>Are you super man?</p>
          <a href="">Read more </a>
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
        </div>
      </main>
      <footer>
        <a href="">Privacy policy</a>
        <a href="">著作権情報</a>
        <a href="">サイトの所有者情報</a>
      </footer>
    </>
  );
};

export default App;
