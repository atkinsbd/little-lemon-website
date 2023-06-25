import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';
import { fetchAPI } from './services/api';


test ('Renders booking form headings', () => {
  render(<BrowserRouter><BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} /></BrowserRouter>);

  const dateElement = screen.getByText("Choose date");
  const timeElement = screen.getByText("Choose time");
  const guestsElement = screen.getByText("Number of guests");
  const occasionElement = screen.getByText("Occasion");
  const bookElement = screen.getByText("Confirm booking");

  expect(dateElement).toBeInTheDocument();
  expect(timeElement).toBeInTheDocument();
  expect(guestsElement).toBeInTheDocument();
  expect(occasionElement).toBeInTheDocument();
  expect(bookElement).toBeInTheDocument();
})

test('Initilises and updates available times correctly', () => {
  render(<BrowserRouter><App /></BrowserRouter>);

  const reserveElement = screen.getByText("Reserve table");

  expect(reserveElement).toBeInTheDocument();

  fireEvent.click(reserveElement);

  const dateElement = screen.getByLabelText("Choose date");

  expect(dateElement).toBeInTheDocument();

  const possibleBookingTimes = ["17:00", "17:30", "18:00", "18:30", "19:00",
    "19:30", "20:00", "20:30", "21:00", "21:30",
    "22:00", "22:30"]

  let bookedTimes = fetchAPI(new Date());

  let availableTimes = possibleBookingTimes.filter(function (item) {
    return bookedTimes.indexOf(item) < 0;
  });

  let timeSelect = screen.getByLabelText("Choose time");

  let timeSelectChildren = timeSelect.children;

  let timeOptions = Array.from(timeSelectChildren)
    .map(obj => obj.textContent);

  expect(timeOptions).toStrictEqual(availableTimes);


  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1)

  fireEvent.change(dateElement, { target: { value: tomorrow.toISOString().substring(0,10)}})

  bookedTimes = fetchAPI(tomorrow);

  availableTimes = possibleBookingTimes.filter(function (item) {
    return bookedTimes.indexOf(item) < 0;
  });

  timeSelect = screen.getByLabelText("Choose time");

  timeSelectChildren = timeSelect.children;

  timeOptions = Array.from(timeSelectChildren)
    .map(obj => obj.textContent);

  

  expect(timeOptions).toStrictEqual(availableTimes);

  const homeLogo = screen.getByAltText("Little lemon logo");
  fireEvent.click(homeLogo);

})