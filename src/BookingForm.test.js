import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

//TODO fix tests

describe("BookingForm Component", () => {
  it("renders without crashing", () => {
    render(<BookingForm />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("updates date state when date input changes", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Choose Date");
    fireEvent.change(dateInput, { target: { value: "2023-11-15" } });
    expect(dateInput).toHaveValue("2023-11-15");
  });
});
