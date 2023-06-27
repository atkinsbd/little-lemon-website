import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import AlertMessage from "../AlertMessage";
import BookingForm from "./BookingForm";
import theme from '../../theme';

const Reservation = () => {
    return (
        <main>
            <ChakraProvider theme={theme}>
                <BookingForm />
                <AlertMessage />
            </ChakraProvider>
        </main>
    );
};

export default Reservation;