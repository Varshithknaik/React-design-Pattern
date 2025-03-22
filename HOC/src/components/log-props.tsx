/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType } from "react";

const logProps = (Component: ComponentType) => {
  return (props: any) => {
    console.log("Props: ", props);
    return <Component {...props} />;
  };
};

export default logProps;
// Compare this snippet from HOC/src/components/log-props.tsx:
