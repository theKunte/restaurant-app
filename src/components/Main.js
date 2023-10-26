import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import seedrandom from "seedrandom"; // Import the seedrandom library

// Define the fetchAPI function before using it.
function fetchAPI(date) {
  let result = [];
  const seedRandom = seedrandom(date.getDate());
  for (let i = 12; i <= 23; i++) {
    if (seedRandom() < 0.5) {
      result.push(i + ":00");
    }
    if (seedRandom() > 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

function Main(props) {
  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
