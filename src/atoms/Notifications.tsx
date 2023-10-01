import { FaBell } from "react-icons/fa";
import Modal from "../components/Modal";
import { useState } from "react";
const Notifications = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    
      <div className=" relative text-2xl hoverEffect w-8 h-8 md:w-9 md:h-9 flex justify-center items-center">
        <div onClick={(()=>setIsOpen(true))}>
          <FaBell/>
        </div>
        <Modal position="flex justify-end" isopen={isOpen} onclose={setIsOpen}>
          <div className=" text-textColor h-[40%] min-w-[20%] mr-3 mt-16 bg-darkPrimary-complimentary">
            this is the notification model
          </div>
        </Modal>
      </div>
    
  );
};

export default Notifications;
