import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingChart from "../LoadingChart";

describe("LoadingChart", () => {
  it("renders CircularProgress", () => {
    render(<LoadingChart />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders CircularProgress with correct size and thickness", () => {
    render(<LoadingChart />);
    const circularProgress = screen.getByRole("progressbar");
    expect(circularProgress).toHaveAttribute(
      "style",
      "width: 250px; height: 250px;"
    );
  });
});
