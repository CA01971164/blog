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
    </>
  );
};

export default App;
