import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Head } from "../../Components/Head";
import "@testing-library/jest-dom";

describe("Head Component", () => {
  it("renders without crashing", () => {
    const { container } = render(<Head />, { wrapper: BrowserRouter });
    expect(container).toBeInTheDocument();
  });

  it("contains the HomeIcon component", () => {
    const { getByTestId } = render(<Head />, { wrapper: BrowserRouter });
    const homeIcon = getByTestId("home-icon");
    expect(homeIcon).toBeInTheDocument();
  });
});
