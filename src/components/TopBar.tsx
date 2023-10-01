import { useState } from "react";
import PageName from "../atoms/PageName";
import SearchBar from "../molecules/SearchBar";
import Settings from "../molecules/Settings";
import {FaArrowLeft} from "react-icons/fa";
const TopBar = () => {
  const [search,setSearch] = useState<boolean>(false);
  return (
    <div>
      <div className={`flex justify-between items-center font-actor ${ search ? "hidden md:flex":""}`}>
      <PageName Pagename="Dashboard" />
      <SearchBar width="w-[40%] hidden md:flex" />
      <Settings setSearch = {setSearch}/>
    </div>
    <div className={`md:hidden ${ search ? "flex items-center gap-3":"hidden"}`}>
      <div onClick={()=>setSearch(false)} className="text-textColor hoverEffect w-8 h-8 flex items-center justify-center">
        <FaArrowLeft/>
      </div>
      <SearchBar width="w-full flex md:hidden"/>
    </div>
    </div>
    
  );
};
export default TopBar;
