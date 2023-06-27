import React, { useEffect, useState } from "react";
import "./style.css"
import { fetchAPI, submitAPI } from '../../../services/api';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    FormControl,
    FormErrorMessage,
    Input
} from "@chakra-ui/react";
import {useAlertContext} from "../../../context/alertContext";


const BookingForm = () => {
    const { onOpen } = useAlertContext();

    // const [isOpen, setIsOpen] = useState(false);
    // const cancelRef = React.useRef();
    // const [submitted, setSubmitted] = useState(false);
    // const [message, setMessage] = useState("");

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
            onOpen("success", "Success!");
            // setSubmitted(true);
            // setMessage("Booking confirmed!");
        } else {
            onOpen("error", "Uh oh!");
            // setSubmitted(false);
            // setMessage("Something went wrong, try again.");
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
        onSubmit: (values) => { submitForm(values) },
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
                <FormControl isInvalid={formik.errors.date}>
                    <label htmlFor="date">Choose date</label>
                    <Input
                        type="date"
                        id="date"
                        name="date"
                        {...formik.getFieldProps("date")}
                    />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                    <label htmlFor="time">Choose time</label>
                    <select
                        id="time"
                        name="time"
                        {...formik.getFieldProps("time")}
                    >
                        {availableTimes.map((time, i) =>
                            <option key={i}>{time}</option>
                        )}
                    </select>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type={"number"}
                        id="guests"
                        name="guests"
                        {...formik.getFieldProps("guests")}
                    />
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={formik.errors.occasion && formik.touched.occcasion}>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        name="occasion"
                        {...formik.getFieldProps("occasion")}
                    >
                        <option>Select occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                </FormControl>
                <input type="submit" value="Confirm booking" />
            </form>
    );
};

export default BookingForm;