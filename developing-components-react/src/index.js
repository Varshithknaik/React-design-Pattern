import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { GlobalStyles, darkTheme, primaryTheme } from "./style";
import { ThemeProvider } from "styled-components";
import { RegisterModal } from "./components/RegisterModal";

const App = () => {
  const [useDarkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <button
        style={{
          margin: "0 18px 26px",
          padding: "10px",
          background: "none",
          cursor: "pointer",
          border: "3px solid #FFFF",
        }}
        onClick={() => setDarkTheme(false)}
      >
        Light
      </button>
      <button
        style={{
          margin: "0 18px 26px",
          padding: "10px",
          background: "none",
          cursor: "pointer",
          border: "3px solid #FFFF",
        }}
        onClick={() => setDarkTheme(true)}
      >
        Dark
      </button>
      <ThemeProvider theme={useDarkTheme ? darkTheme : primaryTheme}>
        <div
          style={{
            background: useDarkTheme
              ? primaryTheme.primaryColor
              : darkTheme.primaryColor,
            position: "absolute",
            left: "0",
            width: "100vw",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <PrimaryButton className="large">Click me!</PrimaryButton>
          <SecondaryButton>Click me too!</SecondaryButton>
          <GlobalStyles />
        </div>
        <RegisterModal />
        <PrimaryButton>Click mttttttttttttttttttte!</PrimaryButton>
      </ThemeProvider>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
