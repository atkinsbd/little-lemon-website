import React, { useEffect } from "react";
import "../styles/bookingform.css"
import { fetchAPI, submitAPI } from '../services/api';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';


const BookingForm = () => {

    const possibleBookingTimes = ["17:00", "17:30", "18:00", "18:30", "19:00",
        "19:30", "20:00", "20:30", "21:00", "21:30",
        "22:00", "22:30"]


    const updateTimes = (state, action) => {

        const bookedTimes = fetchAPI(new Date(action.type));

        const availableTimes = possibleBookingTimes.filter(function (item) {
            return bookedTimes.indexOf(item) < 0;
        });

        return availableTimes;
    }

    const initialiseTimes = () => {

        const bookedTimes = fetchAPI(new Date());

        const availableTimes = possibleBookingTimes.filter(function (item) {
            return bookedTimes.indexOf(item) < 0;
        });

        return availableTimes;
    }

    const navigate = useNavigate();

    const submitForm = (formData) => {

        const submitted = submitAPI(formData);

        if (submitted) {
            navigate("/Confirmed booking");
        } else {
            console.log("Not submitted");
        }
    }

    const [availableTimes, dispatch] = React.useReducer(updateTimes, [], initialiseTimes);

    const today = new Date();
    const fourWeeksAway = new Date();
    fourWeeksAway.setDate(today.getDate() + 28);

    const formik = useFormik({
        initialValues: {
            date: today.toISOString().substring(0, 10),
            time: availableTimes[0],
            guests: "1",
            occasion: ""
        },
        onSubmit: (values) => {submitForm(values)},
        validationSchema: Yup.object({
            date: Yup.date()
                .required("Required")
                .max(fourWeeksAway.toISOString().substring(0, 10), "Call us to book more than 4 weeks in advance")
                .min(today.toISOString().substring(0, 10), "You can't eat in the past!"),
            time: Yup.string().required("Required"),
            guests: Yup.number().required("Required")
                .min(1, "Must be at least 1 guest")
                .max(10, "For bookings of more than 10, please call us")
        }),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        formik.handleSubmit();
    }

    useEffect(() => { dispatch({ type: formik.values.date }) }, [formik.values.date]);


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.date && formik.touched.date ? <div>{formik.errors.date}</div> : null}
            <label htmlFor="time">Choose time</label>
            <select
                id="time"
                name="time"
                value={formik.values.time}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                {availableTimes.map((time, i) =>
                    <option key={i}>{time}</option>
                )}
            </select>
            {formik.errors.time && formik.touched.time ? <div>{formik.errors.time}</div> : null}
            <label htmlFor="guests">Number of guests</label>
            <input
                type={"number"}
                id="guests"
                name="guests"
                value={formik.values.guests}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.guests && formik.touched.guests ? <div>{formik.errors.guests}</div> : null}
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                name="occasion"
                value={formik.values.occasion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            >
                <option>Select occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
            </select>
            {formik.errors.occasion && formik.touched.occcasion ? <div>{formik.errors.occasion}</div> : null}
            <input type="submit" value="Confirm booking" />
        </form>
    );
};

export default BookingForm;