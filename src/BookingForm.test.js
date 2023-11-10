import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

//TODO fix tests

describe("BookingForm", () => {
  it("renders BookingForm component", () => {
    render(<BookingForm />);
    // Check if the form elements are rendered
    expect(screen.getByLabelText("Full Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose Time:")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of Guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion:")).toBeInTheDocument();
    expect(screen.getByText("Complete Reservation!")).toBeInTheDocument();
  });

  it("submits form when submit button is clicked", () => {
    const mockSubmitForm = jest.fn();
    render(<BookingForm submitForm={mockSubmitForm} />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText("Full Name*"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Choose Date"), {
      target: { value: "2023-14-10" },
    });
    fireEvent.change(screen.getByLabelText("Choose Time:"), {
      target: { value: "12:00 PM" },
    });
    fireEvent.change(screen.getByLabelText("Number of Guests"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText("Occasion:"), {
      target: { value: "Birthday" },
    });

    // Trigger form submission
    fireEvent.click(screen.getByText("Complete Reservation!"));

    // Check if the submit function is called with the correct arguments
    expect(mockSubmitForm).toHaveBeenCalledWith(expect.anything());
  });
});
