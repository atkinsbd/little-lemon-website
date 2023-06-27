import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import AlertMessage from "../AlertMessage";
import BookingForm from "./BookingForm";

const Reservation = () => {
    return (
        <main>
            <ChakraProvider>
                <BookingForm />
                <AlertMessage />
            </ChakraProvider>
        </main>
    );
};

export default Reservation;