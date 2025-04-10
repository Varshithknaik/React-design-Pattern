import { useDeferredValue, useState } from "react";
import HeavyComponent from "./comps/HeavyComponent";

const UseDeferredValueComp = () => {
  const [keyWord, setKeyWord] = useState<string>("");
  const deferredValue = useDeferredValue(keyWord);

  console.log("keyword:", keyWord);
  console.log("deferredValue:", deferredValue);
  return (
    <>
      <input value={keyWord} onChange={(e) => setKeyWord(e.target.value)} />
      <HeavyComponent keyword={deferredValue} />
    </>
  );
};

export default UseDeferredValueComp;
