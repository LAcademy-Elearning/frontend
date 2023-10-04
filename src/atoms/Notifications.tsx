import { FaBell } from "react-icons/fa";
import Modal from "../components/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date();
  const hours = date.getHours();
  const [isViewAll, setrIsViewAll] = useState(false);
  const notifications = [
    {
      username: "prince Rukundo",
      userProfile: "/student.svg",
      message: "hello teacher can you help me",
    },
    {
      username: "prince Rukundo",
      userProfile: "/student.svg",
      message: "hello teacher can you help me",
    },
    {
      username: "prince Rukundo",
      userProfile: "/student.svg",
      message: "hello teacher can you help me",
    },
    {
      username: "prince Rukundo",
      userProfile: "/student.svg",
      message: "hello teacher can you help me",
    },
    {
      username: "prince Rukundo",
      userProfile: "/student.svg",
      message: "hello teacher can you help me",
    },
    {
      username: "prince Rukundo",
      userProfile: "/student.svg",
      message: "hello teacher can you help me",
    },
  ];
  return (
    <div className=" relative text-2xl hoverEffect w-8 h-8 md:w-9 md:h-9 flex justify-center items-center">
      <div onClick={() => setIsOpen(true)}>
        <FaBell />
      </div>
      <Modal
        position="flex justify-end items-start"
        isopen={isOpen}
        onclose={setIsOpen}
      >
        <div className="text-white  h-fit  min-w-[28%] mr-4 md:mr-10 mt-16 bg-darkPrimary-dark bg-opacity-80 backdrop-blur-xl rounded-[10px] p-3 transition-all">
          <h3>Notifications</h3>
          <div className="flex flex-col gap-3 mt-5">
            {notifications
              .slice(0, isViewAll ? notifications.length : 4)
              .map((notification, index) => (
                <div
                  className="flex items-center py-1 text-textColor hover:bg-darkPrimary-dark transition-all duration-100"
                  key={index}
                >
                  <div>
                    <img src={notification.userProfile} alt="profile" />
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <h3 className="font-semibold">{notification.username}</h3>
                      <p>{"sent you a message"}</p>
                    </div>
                    <p className="text-sm">{notification.message}</p>
                    <p className="text-sm">{hours} hours ago</p>
                  </div>
                </div>
              ))}
            <Link
              className="text-center hover:underline text-[#70B2FF]"
              to={"#"}
              onClick={() => setrIsViewAll(prev=>!prev)}
            >
              View All
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Notifications;
