import { render } from "@testing-library/react";
import { Foot } from "../../Components/Foot";
import "@testing-library/jest-dom";

describe("Foot Component", () => {
  it("should render copyright text correctly", () => {
    const { getByText } = render(<Foot />);
    const copyrightText = getByText(/Copyright © 2023/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
