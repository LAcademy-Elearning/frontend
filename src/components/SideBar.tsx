import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import MenuItem from "../atoms/MenuItem";
import {
  FaEnvelope,
  FaBriefcase,
  FaBookReader,
  FaGraduationCap,
  FaTable,
  FaReceipt,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
interface Props {
  isBelowMedium: boolean;
}
const SideBar = ({ isBelowMedium }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className={`${
        isOpen ? " absolute xl:relative w-[250px]" : "w-[60px] xl:w-[70px]"
      } sidebar min-h-screen ${
        isBelowMedium ? "hidden" : "flex"
      } transition-all `}
    >
      <div className="">
        <img className="w-full h-32" src="/Logo.svg" alt="logo" />
      </div>
      <ul className={`w-full flex flex-col pl-3`}>
        <MenuItem
          to="/"
          name="Dashbord"
          icon={<AiFillHome />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/courses"
          name="Courses"
          icon={<FaEnvelope />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/documents"
          name="Documents"
          icon={<FaBriefcase />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/students"
          name="Students"
          icon={<FaBookReader />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/facilitators"
          name="Facilitators"
          icon={<FaGraduationCap />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/statistics"
          name="Statistics"
          icon={<FaTable />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/#"
          name="students"
          icon={<FaReceipt />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/#"
          name="Dashbord"
          icon={<AiFillHome />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/#"
          name="Dashbord"
          icon={<AiFillHome />}
          isOpen={isOpen}
        />
        <MenuItem
          to="/#"
          name="Dashbord"
          icon={<AiFillHome />}
          isOpen={isOpen}
        />
      </ul>
      <button
        onClick={handleClick}
        className="text-2xl text-textColor my-3 p-2 rounded-full bg-darkPrimary-complimentary
        bounceEffect"
      >
        {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
      </button>
    </div>
  );
};

export default SideBar;
