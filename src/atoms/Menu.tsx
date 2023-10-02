import { useState } from "react";
import Modal from "../components/Modal";
import MenuLink from "./MenuLink";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hoverEffect w-8 h-8 md:w-9 md:h-9 flex justify-center items-center">
      <img
        onClick={() => setIsOpen(true)}
        className=" w-4 h-4 md:w-5 md:h-5"
        src="/icn.svg"
        alt="menuIcon"
      />
      <Modal position="flex justify-end" isopen={isOpen} onclose={setIsOpen}>
        <div className=" text-white grid grid-cols-3 h-[40%] min-w-[20%] backdrop-blur-sm mr-3 mt-16 bg-darkPrimary-dark rounded-[10px] p-3">
          <MenuLink src="/Invoice.svg" destination="Add Courses" onclose={setIsOpen}/>
          <MenuLink src="/studentReader.svg" destination="Students" onclose={setIsOpen}/>
          <MenuLink src="/dna.svg" destination="Facilitators" onclose={setIsOpen}/>
          <MenuLink src="/Lol_light.svg" destination="help" onclose={setIsOpen}/>
          <MenuLink  src="/Vector.svg" destination="View Projects" onclose={setIsOpen}/>
        </div>
      </Modal>
    </div>
  );
};

export default Menu;
