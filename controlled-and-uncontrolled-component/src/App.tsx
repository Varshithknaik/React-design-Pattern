import { useState } from "react";
import "./App.css";
import UncontrolledForm from "./components/uncontrolled-form";
import ControlledModal from "./components/controlled-modal";

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
    </>
  );
}

export default App;
