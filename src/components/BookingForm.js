import React, { useState } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [times, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();
    props.SubmitForm(e);
  };

  // add handleSubmit if guest are more than 6 people
  /* if (Number(guests) >=6 ) alert("A service charge of 18% will be added") return"*/
  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* DATE */}
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>
            {/* TIME */}
            <div>
              <label htmlFor="book-time">Choose Time</label>
              <select
                id="book-time"
                value={times}
                type="string"
                required
                onChange={(e) => setTime(e.target.value)}
              >
                {/* The options in the booking time field should be displayed from a list of available times.
                For now, create a stateful array in the component named 
                availableTimes and use this state variable to populate the time select field options. */}
                {/*
                TODO: Change the available time to use a reducer
                Pass down the state and state changing functions from the Main component to 
                the BookingForm component using props in order to make state work across different components.
                 Move the availableTimes useState hook from the BookingForm component into the Main component */}
                <option value="">Select Time</option>
                {/* <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option> */}
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return (
                    <option key={availableTimes}>{availableTimes} </option>
                  );
                })}
              </select>
            </div>
            {/* GUESTS */}
            <div>
              <label htmlFor="book-guest">Number of Guests</label>
              <input
                id="book-guest"
                value={guest}
                type="int"
                required
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>

            {/* OCCATION */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>

            {/* Add email? */}

            <div className="btnReceive">
              <input
                arial-label="on Click"
                type="submit"
                value={"Complete Reservation!"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
}

export default BookingForm;
