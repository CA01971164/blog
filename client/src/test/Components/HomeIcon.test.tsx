import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HomeIcon } from "../../Components/HomeIcon";
import "@testing-library/jest-dom";

// useNavigate フックのモック
const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // 実際の react-router-dom の他のエクスポートを保持
  useNavigate: () => mockedNavigate, // useNavigate をモック関数に置き換え
}));

describe("HomeIcon Component", () => {
  it("navigates to home on click", () => {
    const { getByTestId } = render(<HomeIcon />, { wrapper: BrowserRouter });
    const icon = getByTestId("home-icon");
    fireEvent.click(icon);
    expect(mockedNavigate).toHaveBeenCalledWith("/");
  });
});
