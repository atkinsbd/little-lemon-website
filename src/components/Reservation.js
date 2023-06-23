import React from "react";
import BookingForm from "./BookingForm";

const Reservation = (props) => {
    return (
        <main>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}/>
        </main>
    );
};

export default Reservation;