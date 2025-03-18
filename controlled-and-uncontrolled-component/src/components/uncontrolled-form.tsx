import React, { FormEvent } from "react";

const UncontrolledForm = () => {
  const nameInputRef = React.createRef<HTMLInputElement>();
  const ageInputRef = React.createRef<HTMLInputElement>();
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value);
    console.log(ageInputRef.current?.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
      <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
