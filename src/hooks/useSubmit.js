import { useAlertContext } from "../context/alertContext";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
    const { onOpen, onFetching } = useAlertContext();

  const postReserve = async (url, data) => {

    onFetching();

    await wait(2000);

    const random = Math.random();

    if (random < 0.9) {
      const bookedDate = new Date(data.date);
      onOpen("success", `You have booked a table for ${data.guests} 
                ${data.guests === 1 ? "person" : "people"} on ${bookedDate.getMonth()}/${bookedDate.getDate()} at ${data.time}.
                We look forward to welcoming you!`);
      return("success");
    } else {
      onOpen("error", "Something has gone wrong in our system, please try again or give us a call on 123456789.");
      return("error");
    }
  }

  return { postReserve };
};

export default useSubmit;