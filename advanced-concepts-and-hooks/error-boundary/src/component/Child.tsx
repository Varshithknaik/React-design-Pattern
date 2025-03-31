import { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    fetch("/").then(() => {
      throw new Error("Error in component");
    });
  }, []);
  return <h1>Child Component</h1>;
};

export default Child;
