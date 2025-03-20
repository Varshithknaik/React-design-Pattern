/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";

interface ChildProps {
  goNext: (dataFromStep: any) => void;
}

interface IProps {
  children: ReactNode;
  onDone: (data: any) => void;
  currentIndex: number;
  onNext: (dataFromStep: any) => void;
}

const ControlledFlow = ({ children, onNext, currentIndex }: IProps) => {
  const currentChild = React.Children.toArray(children)[currentIndex];

  const goNext = (dataFromStep: any) => {
    onNext(dataFromStep);
  };
  if (React.isValidElement<ChildProps>(currentChild)) {
    return React.cloneElement<ChildProps>(currentChild, { goNext });
  }
  return currentChild;
};

export default ControlledFlow;
