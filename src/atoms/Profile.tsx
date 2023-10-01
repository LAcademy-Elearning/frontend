// interface Props{
//     username:string,
//     role:string

import { useState } from "react";
import Modal from "../components/Modal";

// }{username,role}:Props
const Profile = () => {
  const username = "Cinta castella";
  const role = "Admin";
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center gap-1">
      <img
        onClick={() => setIsOpen(true)}
        className="hoverEffect w-10 h-10"
        src="/student.svg"
        alt="profile picture"
      />
      <div className="text-textColor hidden leading-4 lg:block">
        <h2 className=" text-base font-medium whitespace-nowrap ">
          {username}
        </h2>
        <p className="text-sm">{role}</p>
      </div>
      <Modal position="flex justify-end" isopen={isOpen} onclose={setIsOpen}>
        <div className=" text-textColor transition-all  min-w-[300px] mr-3 mt-16 bg-darkPrimary-complimentary">
          this is the profile modal
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
