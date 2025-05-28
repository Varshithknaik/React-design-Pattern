import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props) => {
  const { label, ...otherProps } = props;
  return (
    <div>
      {label && <label>{label}</label>}
      <div>
        <ReactDatePicker {...otherProps} />
      </div>
    </div>
  );
};
export default DatePicker;
