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
      <footer>
        <a href="">Privacy policy</a>
        <a href="">著作権情報</a>
        <a href="">サイトの所有者情報</a>
      </footer>
    </>
  );
};

export default App;
