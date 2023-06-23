import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingForm from './components/BookingForm';


test ('Renders booking form headings', () => {
  render(<BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />);

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

test('Initilises available times correctly', () => {
  render(<BrowserRouter><App /></BrowserRouter>);

  const reserveElement = screen.getByText("Reserve table");

  expect(reserveElement).toBeInTheDocument();

  fireEvent.click(reserveElement);

  const dateElement = screen.getByText("Choose date");

  expect(dateElement).toBeInTheDocument();

  const timeSelect = screen.getByLabelText("Choose time");

  const timeSelectChildren = timeSelect.children;

  const timeOptions = Array.from(timeSelectChildren)
    .map(obj => obj.textContent);

  expect(timeOptions).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

  const homeLogo = screen.getByAltText("Little lemon logo");
  fireEvent.click(homeLogo);

})

test('Updates available times correctly based on selected date', () => {

  render(<BrowserRouter><App /></BrowserRouter>);

  const reserveElement = screen.getByText("Reserve table");

  expect(reserveElement).toBeInTheDocument();

  fireEvent.click(reserveElement);

  var today = new Date();
  var tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1)
  tomorrow = tomorrow.toISOString().substring(0,10);
  today = today.toISOString().substring(0,10);

  const dateSelect = screen.getByLabelText("Choose date");

  fireEvent.change(dateSelect, { target: { value: tomorrow}})

  var timeSelect = screen.getByLabelText("Choose time");

  var timeSelectChildren = timeSelect.children;

  var timeOptions = Array.from(timeSelectChildren)
    .map(obj => obj.textContent);

  expect(timeOptions).toStrictEqual(["17:00"])

  fireEvent.change(dateSelect, { target: { value: today}})

  var timeSelect = screen.getByLabelText("Choose time");

  var timeSelectChildren = timeSelect.children;

  var timeOptions = Array.from(timeSelectChildren)
    .map(obj => obj.textContent);

  expect(timeOptions).toStrictEqual(["16:00", "17:00"])

  const homeLogo = screen.getByAltText("Little lemon logo");
  fireEvent.click(homeLogo);
})