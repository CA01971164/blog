import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import usePostData from "../../Hooks/usePostData"; 
import '@testing-library/jest-dom';



// axios のモック
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// テスト用のヘルパーコンポーネント
const TestComponent = () => {
  const { posts } = usePostData();

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>{post.title}</div>
      ))}
    </div>
  );
};

describe("usePostData custom hook", () => {
  it("fetches and sets posts data correctly", async () => {
    // モックデータ
    const posts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];

    // axios.get のモック実装
    mockedAxios.get.mockResolvedValue({ data: posts });

    // コンポーネントをレンダリング
    const { getByText } = render(<TestComponent />);

    // APIから取得したデータがUIに正しく表示されるかを検証
    await waitFor(() => {
      expect(getByText("Post 1")).toBeInTheDocument();
      expect(getByText("Post 2")).toBeInTheDocument();
    });
  });
});
