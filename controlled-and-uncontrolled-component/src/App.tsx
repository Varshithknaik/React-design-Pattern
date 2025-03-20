/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import UncontrolledForm from "./components/uncontrolled-form";
import ControlledModal from "./components/controlled-modal";
import { UncontrolledFlow } from "./components/uncontrolled-flow";

const StepOne = ({ goNext }: { goNext?: (dataFromStep: any) => void }) => (
  <>
    <h1>Step #1: Enter your name</h1>
    <button onClick={() => goNext?.({ name: "MyName" })}>Next</button>
  </>
);
const StepTwo = ({ goNext }: { goNext?: (dataFromStep: any) => void }) => (
  <>
    <h1> Step #2: Enter your age: </h1>
    <button onClick={() => goNext?.({ age: 23 })}>Next</button>
  </>
);
const StepThree = ({ goNext }: { goNext?: (dataFromStep: any) => void }) => (
  <>
    <h1>Step #3: Enter your country: </h1>
    <button onClick={() => goNext?.({ country: "India" })}>Next</button>
  </>
);

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <>
      <UncontrolledForm />
      <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <span>Show mw </span>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Display Modal"}
      </button>

      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert(JSON.stringify(data));
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
