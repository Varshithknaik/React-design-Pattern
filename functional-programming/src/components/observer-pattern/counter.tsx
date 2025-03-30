import { useEffect, useState } from "react";
import { emitter } from "../../App";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onIncrementCounter = () => {
      setCount((prev) => prev + 1);
    };

    const onDecrementCounter = () => {
      setCount((prev) => prev - 1);
    };

    emitter.on("increment", onIncrementCounter);
    emitter.on("decrement", onDecrementCounter);

    return () => {
      emitter.off("increment", onIncrementCounter);
      emitter.off("decrement", onDecrementCounter);
    };
  }, []);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return <div>#: {count}</div>;
};

export default Counter;
