import { useState } from "react";
import {FaMoon,FaSun} from "react-icons/fa";
const ToggleTheme = () => {
    const [theme,setTheme] = useState<string>("dark");
  return (
    <div className="hoverEffect w-8 h-8 md:w-9 md:h-9 flex justify-center items-center">
        { theme === "dark" ? <FaMoon/> : <FaSun/>} 
    </div>
  )
}

export default ToggleTheme