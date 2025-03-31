import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";

import "./App.css";

function App() {
  const [show, setShow] = useState<boolean>(true);

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show
        <br />
        Click it to close
      </Alert>
    </div>
  );
}

const Alert = ({
  children,
  onClose,
  show,
}: {
  children: ReactNode;
  onClose: () => void;
  show: boolean;
}) => {
  if (!show) return null;

  return createPortal(
    <div className="alert" onClick={onClose}>
      {children}
    </div>,
    document.body
  );
};

export default App;
