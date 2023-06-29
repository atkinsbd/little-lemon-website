import React, { useEffect } from "react";
import "./style.css"
import { fetchAPI } from '../../../services/api';
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Box,
    Text,
    Flex,
    Spacer,
    Button
} from "@chakra-ui/react";
import { Rate } from "antd";
import { UserOutlined } from '@ant-design/icons';
import useSubmit from "../../../hooks/useSubmit";
import { useAlertContext } from "../../../context/alertContext";


const BookingForm = () => {
    const { postReserve } = useSubmit();
    const { isLoading } = useAlertContext();

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

    const [availableTimes, dispatch] = React.useReducer(updateTimes, [], initialiseTimes);

    const today = new Date();
    const fourWeeksAway = new Date();
    fourWeeksAway.setDate(today.getDate() + 28);

    const formik = useFormik({
        initialValues: {
            date: today.toISOString().substring(0, 10),
            time: availableTimes[0],
            guests: 1,
            occasion: ""
        },
        onSubmit: async (values, helpers) => { 
            const confirmed = await postReserve("", values);
            if (confirmed === "success") {
                helpers.resetForm();
            };
        },
        validationSchema: Yup.object({
            date: Yup.date()
                .required("Required")
                .max(fourWeeksAway.toISOString().substring(0, 10), "Call us to book more than 4 weeks in advance")
                .min(today.toISOString().substring(0, 10), "You can't eat in the past!"),
            time: Yup.string().required("Required"),
            guests: Yup.number().required("Required")
            .min(1, "Must be at least 1 guest")
            // .max(10, "For bookings of more than 10, please call us")
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
                <FormLabel htmlFor="date">Choose date</FormLabel>
                <Input
                    type="date"
                    id="date"
                    name="date"
                    {...formik.getFieldProps("date")}
                    size='lg'
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="time">Choose time</FormLabel>
                <Select
                    id="time"
                    name="time"
                    {...formik.getFieldProps("time")}
                    size='lg'
                >
                    {availableTimes.map((time, i) =>
                        <option key={i}>{time}</option>
                    )}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Flex align={"center"}>
                    <Rate
                        id="guests"
                        name="guests"
                        character={<UserOutlined />}
                        count={6}
                        defaultValue={formik.values.guests}
                        onChange={(value) => formik.setFieldValue("guests", value)}
                        style={{ fontSize: 36 }}
                        value={formik.values.guests}
                    // {...formik.getFieldProps("guests")}
                    />
                    <Spacer />
                    <Box><Text role="numberguest" fontSize="3xl" fontWeight="bold">{formik.values.guests}</Text></Box>
                </Flex>
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.occasion && formik.touched.occcasion}>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select
                    id="occasion"
                    name="occasion"
                    {...formik.getFieldProps("occasion")}
                    size='lg'
                >
                    <option>Select occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>
            <Button type="submit" 
                size='lg' 
                isDisabled={!formik.isValid}
                isLoading={isLoading}
            >
            Confirm booking
            </Button>
        </form>
    );
};

export default BookingForm;