import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

function Main(props) {
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      s = (s * a) % m;
      return s / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getTime()); // Use getTime() to get a numeric seed
    for (let i = 15; i <= 22; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

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
