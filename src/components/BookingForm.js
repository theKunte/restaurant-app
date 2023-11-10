import React, { useState, useEffect } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [times, setTime] = useState("");
  const [guest, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };
  useEffect(() => {
    // Calculate the minimum allowed date as the next day
    const today = new Date();
    today.setDate(today.getDate() + 1);

    // Format the date as "YYYY-MM-DD" (compatible with the date input)
    const minDate = today.toISOString().split("T")[0];

    // Set the minimum date for the input field
    document.getElementById("book-date").min = minDate;
  }, []);

  // add handleSubmit if guest are more than 6 people
  /* if (Number(guests) >=6 ) alert("A service charge of 18% will be added") return"*/
  const handleChange = (e) => {
    // console.log(props);
    setDate(e.target.value);
    setTime(e.target.value);

    props.dispatch(e);
  };

  // For each form input field, consider what HTML5 validation can be applied.
  //  For example, the user should not be able to reserve a table for less than one person.

  //  -  the submit button should be disabled if the form input fields are invalid.
  //  - Use events to detect field changes and submit button clicks.

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* Name */}
            <div>
              <label htmlFor="guest-name">Full Name*</label>
              <input
                id="guest-name"
                value={name}
                type="text"
                required
                pattern="^[A-Za-z\s]+$"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/*Email */}
            <div>
              <label htmlFor="book-email">Email:</label>
              <input
                id="book-email"
                key={email}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            {/* DATE */}
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={handleChange}
                type="date"
                required
              />
            </div>
            {/* TIME */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="">Select Time</option>

                {props.availableTimes?.availableTimes.map((availableTimes) => {
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
                type="number"
                required
                min="1"
                onChange={(e) => setGuest(e.target.value)}
              />
            </div>

            {/* OCCASION */}
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
