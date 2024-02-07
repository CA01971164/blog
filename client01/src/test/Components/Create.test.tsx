import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import { Create } from "../../Components/Create";
import { act } from "react-dom/test-utils";

// axios のモック
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Create Component", () => {
  it("should open and close the dialog", async () => {
    render(<Create />);

    // アカウント作成ボタンをクリック
    fireEvent.click(screen.getByText("アカウントを作成"));
    expect(screen.getByText("アカウントを登録")).toBeInTheDocument();

    // キャンセルボタンをクリック
    fireEvent.click(screen.getByText("キャンセル"));

    // Dialogが非表示になるのを待つ
    await waitFor(() =>
      expect(screen.queryByText("アカウントを登録")).not.toBeInTheDocument()
    );
  });

  it("updates the username and password inputs correctly", () => {
    render(<Create />);

    fireEvent.click(screen.getByText("アカウントを作成"));

    const usernameInput = screen.getByLabelText(
      "登録するユーザー名"
    ) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(
      "登録するパスワード"
    ) as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("password123");
  });

  it("calls the API to create an account on submit", async () => {
    mockedAxios.post.mockResolvedValue({
      data: { message: "アカウント作成成功" },
    });

    render(<Create />);

    fireEvent.click(screen.getByText("アカウントを作成"));

    const usernameInput = screen.getByLabelText("登録するユーザー名");
    const passwordInput = screen.getByLabelText("登録するパスワード");
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    await act(async () => {
      fireEvent.click(screen.getByText("アカウント作成"));
    });

    expect(mockedAxios.post).toHaveBeenCalledWith(
      "http://localhost:5000/api/users/register",
      {
        username: "testuser",
        password: "password123",
      }
    );
  });
});
