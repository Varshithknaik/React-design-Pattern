import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const submitHandler = () => {
    console.log(name, age);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(+e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ControlledForm;
