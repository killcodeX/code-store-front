import React from "react";
import { CgMoveRight } from "react-icons/cg";
import { SideModalWrapper, ModalHeader, CloseIconWrapper, ModalBody } from "./style";
import { useDispatch } from "react-redux";

export default function Modal({ display, close, children }) {
  const dispatch = useDispatch();

  return (
    <SideModalWrapper open={display}>
      <ModalHeader>
        <CloseIconWrapper onClick={() => dispatch(close())}>
          <CgMoveRight />
        </CloseIconWrapper>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </SideModalWrapper>
  );
}
