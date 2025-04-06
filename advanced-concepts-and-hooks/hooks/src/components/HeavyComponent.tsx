import React from "react";

const HeavyComponent = ({ keyword }: { keyword: string }) => {
  const now = performance.now();
  while (performance.now() - now < 100) {
    //
  }
  return (
    <>
      <h2>I am a slow component</h2>
      {keyword}
    </>
  );
};

export default HeavyComponent;
