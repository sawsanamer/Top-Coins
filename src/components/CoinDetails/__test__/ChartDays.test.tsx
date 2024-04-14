import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ChartDays from "../ChartDays";
import { chartDaysConfig } from "../../../config/chartDaysConfig";

describe("ChartDays", () => {
  it("renders the correct number of DayItems", () => {
    const { queryAllByTestId } = render(
      <ChartDays days={1} onChange={() => {}} />,
    );
    const dayItems = queryAllByTestId((testId) =>
      testId.startsWith("day-item-"),
    );

    expect(dayItems.length).toBe(chartDaysConfig.length);
  });

  it("calls onChange with the correct value when a DayItem is clicked", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <ChartDays days={1} onChange={mockOnChange} />,
    );
    const button = getByTestId(`day-item-${chartDaysConfig[0].label}`);
    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalledWith(chartDaysConfig[0].value);
  });
});
