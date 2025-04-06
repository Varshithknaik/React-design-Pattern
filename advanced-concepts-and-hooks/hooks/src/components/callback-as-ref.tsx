import { useCallback, useState } from "react";

const CallbackAsRef = () => {
  const [showInput, setShowInput] = useState<boolean>(false);

  const inputRef = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (input: any) => {
      if (input === null) return;
      input.focus();
    },
    []
  );
  return (
    <>
      <button onClick={() => setShowInput((s) => !s)}>Switch</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
};

export default CallbackAsRef;
