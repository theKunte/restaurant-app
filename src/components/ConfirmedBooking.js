import React from "react";

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
