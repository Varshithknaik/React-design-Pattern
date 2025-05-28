import { useState } from "react";
import DatePicker from "./date-picker";

const WrapperComponent = (props) => {
  const [date, setDate] = useState();
  return (
    <DatePicker
      label="Select the Payment Date"
      value={date?.toString()}
      onChange={(date) => date && setDate(date)}
    />
  );
};
export default WrapperComponent;
