/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext } from "react";

const Context = createContext<any | null>(null);

const Header = ({ children }: { children: ReactNode }) => {
  const { test } = useContext(Context);
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: "0.5rem",
        marginBottom: "0.5rem",
      }}
    >
      {children}
      {test}
    </div>
  );
};

const Footer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        padding: "0.5rem",
        marginTop: "0.5rem",
      }}
    >
      {children}
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  return <div style={{ padding: "1rem" }}>{children}</div>;
};

export const Card = ({
  children,
  test,
}: {
  children: ReactNode;
  test: string;
}) => {
  return (
    <Context.Provider value={{ test }}>
      <div style={{ border: "1px solid black" }}>{children}</div>
    </Context.Provider>
  );
};

Card.Header = Header;
Card.Footer = Footer;
Card.Body = Body;

export default Card;
