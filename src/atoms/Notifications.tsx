import { FaBell } from "react-icons/fa";
import Modal from "../components/Modal";
import { useState } from "react";
const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date();
  const hours = date.getHours();

  
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
  ];
  return (
    <div className=" relative text-2xl hoverEffect w-8 h-8 md:w-9 md:h-9 flex justify-center items-center">
      <div onClick={() => setIsOpen(true)}>
        <FaBell />
      </div>
      <Modal position="flex justify-end" isopen={isOpen} onclose={setIsOpen}>
        <div className="text-white h-[60%] min-w-[400px] mr-10 mt-16 bg-darkPrimary-dark bg-opacity-90 backdrop-blur-xl rounded-[10px] p-3">
          <h3>Notifications</h3>
          <div className="flex flex-col gap-3">
            {notifications.slice(0,3).map(((notification,index)=>(
              <div className="flex items-center" key={index}>
                <div>
                  <img src={notification.userProfile} alt="profile" />
                </div>
                <div>
                  <div>
                    <h3>{notification.username}</h3>
                    <p>{"sent you a message"}</p>
                  </div>
                  <p>{notification.message}</p>
                  <p>{hours} hours ago</p>
                </div>
              </div>
            )))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Notifications;
