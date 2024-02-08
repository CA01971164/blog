import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import BlogPost from "../../Components/BlogPost"; 
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

// axios のモックを Jest で設定
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("BlogPost Component", () => {
  it("fetches and displays the blog post", async () => {
    // axios.get のモック実装
    mockedAxios.get.mockResolvedValue({
      data: { title: "Test Title", fullText: "Test content of the blog post." },
    });

    // MemoryRouter を使用して、動的なパラメータを持つルートをテスト
    const { getByText } = render(
      <MemoryRouter initialEntries={["/blogs/1"]}>
        <Routes>
          <Route path="/blogs/:id" element={<BlogPost />} />
        </Routes>
      </MemoryRouter>
    );

    // waitFor を使用して、非同期の処理が完了するのを待つ
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
      expect(getByText("Test Title")).toBeInTheDocument();
      expect(getByText("Test content of the blog post.")).toBeInTheDocument();
    });
  });
});
