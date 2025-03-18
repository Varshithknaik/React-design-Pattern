import { ReactElement } from "react";
import { styled } from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;

interface IProps {
  shouldDisplay: boolean;
  onClose: () => void;
  children: ReactElement;
}

const ControlledModal = ({ children, shouldDisplay, onClose }: IProps) => {
  return (
    <>
      {shouldDisplay && (
        <ModalBackground onClick={onClose}>
          <ModalContent
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              e.stopPropagation()
            }
          >
            <button onClick={onClose}>Hide Modal</button>
            {children}
          </ModalContent>
        </ModalBackground>
      )}
    </>
  );
};

export default ControlledModal;
