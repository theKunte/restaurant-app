import React from "react";

// In the Main component, set
// up a function named submitForm that accepts the form data
// as a parameter and will submit it to the submitAPI (formData) API set up in the previous exercise.
// If the submitAPI(formData)
//  API call returns true, navigate to the booking confirmed page.

// Tip: You can use the  useNavigate() hookto navigate via code.
const ConfirmedBooking = () => {
  return (
    <div className="confirm">
      <div>
        <h1> Booking has been successful!</h1>
        {/* Pass the submitForm function to the BookingFrom component via props 
         Update the button  submit event handler to call the submitForm function 
        */}
      </div>
    </div>
  );
};

export default ConfirmedBooking;
