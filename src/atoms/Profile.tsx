// interface Props{
//     username:string,
//     role:string

import { useState } from "react";
import Modal from "../components/Modal";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// }{username,role}:Props
const Profile = () => {
  const username = "Cinta castella";
  const role = "Admin";
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState(new Date());
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
        <div className=" overflow-auto text-textColor transition-all  w-[300px] mr-3 mt-16 bg-darkPrimary-dark p-3 rounded-[10px]">
          <div>
            <div
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 hoverEffect flex items-center justify-center my-1"
            >
              <FaXmark />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Profile</span>
              <Link to={"#"} onClick={() => setIsOpen(false)}>
                <img src="/editProfile.svg" alt="edit" />
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center overflow-hidden my-4 w-20 h-20 rounded-full border border-orange">
                <img className="" src="/student.svg" alt="user_Profile" />
              </div>
              <div>
                <h2 className=" text-base font-medium whitespace-nowrap ">
                  {username}
                </h2>
                <p className="text-sm text-center">{role}</p>
              </div>
            </div>
            <div>
              <h2>calendar</h2>
              <div>
               
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
