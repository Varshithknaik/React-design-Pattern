/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { useState } from "react";

interface ChildProps {
  goNext: (dataFromStep: any) => void;
}

interface IProps {
  children: ReactNode;
  onDone: (data: any) => void;
}

export const UncontrolledFlow = ({ children, onDone }: IProps) => {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = (dataFromStep: any) => {
    const nextSetpIndex = currentStepIndex + 1;

    const newData = {
      ...data,
      ...dataFromStep,
    };

    console.log(newData);

    if (nextSetpIndex < React.Children.toArray(children).length) {
      setCurrentStepIndex(nextSetpIndex);
    } else {
      onDone(newData);
    }
    setData(newData);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement<ChildProps>(currentChild)) {
    return React.cloneElement<ChildProps>(currentChild, { goNext });
  }
  return currentChild;
};
