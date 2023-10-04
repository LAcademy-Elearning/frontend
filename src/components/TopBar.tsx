import { useState } from "react";
import PageName from "../atoms/PageName";
import SearchBar from "../molecules/SearchBar";
import Settings from "../molecules/Settings";
import {FaArrowLeft, FaBars} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6"

interface Props{
  setIsBelowMedium:React.Dispatch<React.SetStateAction<boolean>>,
  isBelowMedium:boolean,
}
const TopBar = ({setIsBelowMedium,isBelowMedium}:Props) => {
  const [search,setSearch] = useState<boolean>(false);
  return (
    <div className="pb-4 sticky top-0 bg-inherit">
      <div className={`flex justify-between items-center font-actor ${ search ? "hidden md:flex":""}`}>
        <div className="flex items-center gap-3">
          <div onClick={()=>setIsBelowMedium(prev=>!prev)} className=" flex items-center justify-center md:hidden text-xl text-textColor h-8 w-8 hoverEffect">
            { isBelowMedium ? <FaBars/> : <FaXmark/> }
          </div>
         <PageName pagename="Dashboard" /> 
        </div>
      <SearchBar width="w-[40%] hidden md:flex" />
      <Settings setSearch = {setSearch}/>
    </div>
    <div className={`md:hidden ${ search ? "flex items-center gap-3":"hidden"}`}>
      <div onClick={()=>setSearch(false)} className="text-textColor hoverEffect w-8 h-8 flex items-center justify-center">
        <FaArrowLeft/>
      </div>
      <SearchBar width="w-full flex md:hidden"/>
    </div>
     <div className="mt-4 text-white">
      <h3 className="font-medium text-[18px]">{"Welcome castella"}</h3>
      <p className=" text-xs font-light">get all courses down here</p>
     </div>
    </div>
    
  );
};
export default TopBar;
