import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: [ReactNode, ReactNode];
  leftWidth?: any;
  rightWidth?: any;
}

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${(p) => p.flex};
`;

const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }: Props) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

export default SplitScreen;
