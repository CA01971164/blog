import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Article } from "../../Components/Article";
import { BrowserRouter } from "react-router-dom";

// テスト用のユーティリティ関数でコンポーネントをラップする
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("Article Component", () => {
  it("should render posts correctly", () => {
    const dummyPosts = [
      { _id: "1", title: "Post 1", summary: "Summary of post 1" },
      { _id: "2", title: "Post 2", summary: "Summary of post 2" },
    ];

    const { getByText } = renderWithRouter(<Article posts={dummyPosts} />);

    // ポストのタイトルとサマリーが表示されるかを確認
    expect(getByText("Post 1")).toBeInTheDocument();
    expect(getByText("Summary of post 1")).toBeInTheDocument();
    expect(getByText("Post 2")).toBeInTheDocument();
    expect(getByText("Summary of post 2")).toBeInTheDocument();
  });

  it('should navigate to the post detail when "Read More" is clicked', () => {
    const dummyPosts = [
      { _id: "1", title: "Post 1", summary: "Summary of post 1" },
    ];

    const { getByText } = renderWithRouter(<Article posts={dummyPosts} />);

    fireEvent.click(getByText("Read More"));

    // "Read More"をクリックした後のパスが期待通りかを確認
    expect(window.location.pathname).toBe("/blogs/1");
  });
});
function expect(arg0: HTMLElement) {
  throw new Error("Function not implemented.");
}
