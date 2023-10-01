import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: ReactNode;
  position: string;
  isopen: boolean;
  onclose: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ children, position, isopen,onclose }: Props) => {
  const handleClose = (e:React.MouseEvent<HTMLElement>)=>{
    if(e.target.id === "container") onclose(false)
  }
  if (!isopen) return null;
  return ReactDOM.createPortal(
    <div
      id="container"
      onClick={handleClose}
      className={`fixed transition-all inset-0 bg-black bg-opacity-20 backdrop-blur-[1px]   ${position}`}
    >
      {children}
    </div>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
