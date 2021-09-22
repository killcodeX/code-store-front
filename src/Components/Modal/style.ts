import styled from "styled-components";

export const SideModalWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: ${(props) => (props.open ? "95%" : "0")};
  background: ${(props) => props.theme.cardBackground};
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
  opacity: ${(props) => (props.open ? "1" : "0")};
  overflow-y: scroll;
`;

export const ModalHeader = styled.div`
  border-bottom: 1px solid #f2f2f5;
`;

export const CloseIconWrapper = styled.div`
  color: ${(props) => props.theme.cardText};
  font-size: 35px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 25px 35px;
  height: 100%;
  margin-bottom: 200px;

  @media(max-width:480px){
    padding:25px 20px;
  }
`;
