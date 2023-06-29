import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import AlertMessage from "../AlertMessage";
import BookingForm from "./BookingForm";
import theme from '../../theme';
import './style.css';

const Reservation = () => {
    return (
        <main className="reservation">
            <ChakraProvider theme={theme}>
                <BookingForm />
                <AlertMessage />
            </ChakraProvider>
        </main>
    );
};

export default Reservation;