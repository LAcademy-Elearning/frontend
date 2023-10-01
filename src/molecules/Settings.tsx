import { FaSearch } from "react-icons/fa";
import Menu from "../atoms/Menu";
import Notifications from "../atoms/Notifications";
import Profile from "../atoms/Profile";
import ToggleTheme from "../atoms/ToggleTheme";
interface Props{
  setSearch:React.Dispatch<React.SetStateAction<boolean>>;
}
const Settings = ({setSearch}:Props) => {
  return (
    <div className=" text-lg md:text-xl text-textColor flex items-center justify-evenly w-[60%] md:w-[25%]">
      <div onClick={()=>setSearch(true)} className="text-xl hoverEffect w-8 h-8  flex justify-center items-center md:hidden">
        <FaSearch/>
      </div>
      <ToggleTheme />
      <Menu />
      <Notifications />
      <Profile />
    </div>
  );
};

export default Settings;
