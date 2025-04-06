import { useState, useTransition } from "react";
import { StyledButton } from "./comps/styled-elements";
import Cover from "./comps/Cover";
import Reviews from "./comps/Reviews";
import Writer from "./comps/Writer";

const UseTransitionComp = () => {
  const [section, setSection] = useState<string>("Cover");

  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec: string) => {
    console.log("before", sec);
    startTransition(() => {
      setSection(sec);
      console.log("inside", sec);
    });

    console.log("after");
  };
  return (
    <>
      <Button onClick={() => sectionHandler("Cover")}>Cover</Button>
      <Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
      <Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>
      {isPending && <div>Loading...</div>}
      {section === "Cover" ? (
        <Cover />
      ) : section === "Reviews" ? (
        <Reviews />
      ) : (
        <Writer />
      )}
    </>
  );
};

const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  // const [isPending, startTransition] = useTransition();

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default UseTransitionComp;
