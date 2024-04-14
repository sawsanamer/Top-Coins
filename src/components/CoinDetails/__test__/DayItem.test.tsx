import { render, fireEvent } from "@testing-library/react";
import DayItem from "../DayItem";

describe("DayItem", () => {
  it("renders the day label", () => {
    const { getByText } = render(
      <DayItem dayLabel="1d" selected={false} onClick={() => {}} />,
    );
    expect(getByText("1d")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <DayItem dayLabel="1d" selected={false} onClick={mockOnClick} />,
    );
    const dayItem = getByTestId("day-item-1d");
    fireEvent.click(dayItem);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("has the correct styles when selected", () => {
    const { getByTestId } = render(
      <DayItem dayLabel="1d" selected={true} onClick={() => {}} />,
    );
    const dayItem = getByTestId("day-item-1d");
    expect(dayItem).toHaveStyle({
      fontWeight: 700,
    });
  });

  it("has the correct styles when not selected", () => {
    const { getByTestId } = render(
      <DayItem dayLabel="1d" selected={false} onClick={() => {}} />,
    );
    const dayItem = getByTestId("day-item-1d");
    expect(dayItem).toHaveStyle({
      fontWeight: 500,
    });
  });
});
