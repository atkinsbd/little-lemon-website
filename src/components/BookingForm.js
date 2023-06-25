import React, { useEffect } from "react";
import "../styles/bookingform.css"
import { fetchAPI, submitAPI } from '../services/api';
import { useNavigate } from "react-router-dom";

const BookingForm = () => {

    const updateTimes = (state, action) => {

        const possibleBookingTimes = ["17:00", "17:30", "18:00", "18:30", "19:00", 
                                    "19:30", "20:00", "20:30", "21:00", "21:30",
                                     "22:00", "22:30"]

        const bookedTimes = fetchAPI(new Date(action.type));

        const availableTimes = possibleBookingTimes.filter(function(item) {
            return bookedTimes.indexOf(item) < 0;
        });

        return availableTimes;
    }

    const navigate = useNavigate();

    const submitForm = (formData) => {

        const submitted = submitAPI(formData);

        if (submitted) {
            navigate("/Confirmed booking");
        }
    }

    const today = new Date();

    const [availableTimes, dispatch] = React.useReducer(updateTimes, []);

    const [date, setDate] = React.useState(today.toISOString().substring(0, 10));
    const [time, setTime] = React.useState(availableTimes[0]);
    const [guests, setGuests] = React.useState("1");
    const [occasion, setOccasion] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(e);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    useEffect(() => dispatch({ type: date }), [date])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
            />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map((time, i) =>
                    <option key={i}>{time}</option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type={"number"} id="guests" value={guests} min="1" max="10" onChange={(e) => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Select occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
            <input type="submit" value="Confirm booking" />
        </form>
    );
};

export default BookingForm;