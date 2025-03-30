import { emitter } from "../../App";

const Buttons = () => {
  const onIncrementCounter = () => {
    emitter.emit("increment");
  };

  const onDecrementCounter = () => {
    emitter.emit("decrement");
  };
  return (
    <div>
      <button onClick={onIncrementCounter}>Increment</button>
      <button onClick={onDecrementCounter}>Decrement</button>
    </div>
  );
};

export default Buttons;
