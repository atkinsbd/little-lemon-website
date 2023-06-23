import React from "react";
import "../styles/bookingform.css"

const BookingForm = (props) => {

    const today = new Date();

    const [date, setDate] = React.useState(today.toISOString().substring(0,10));
    const [time, setTime] = React.useState(props.availableTimes[0]);
    const [guests, setGuests] = React.useState("1");
    const [occasion, setOccasion] = React.useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    }


    const handleDateChange = (e) => {
        setDate(e.target.value)
        props.dispatch({type: e.target.value})
    }

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
                {props.availableTimes.map((time, i) =>
                    <option key={i}>{time}</option>
                )}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type={"number"} id="guests" value={guests} min="1" max="10" onChange={(e) => setGuests(e.target.value)}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Select occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
            <input type="submit" value="Confirm booking"/>
        </form>
    );
};

export default BookingForm;