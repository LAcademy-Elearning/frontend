import Button from "../atoms/Button";
import SearchInput from "../atoms/SearchInput";
import {FaSearch} from "react-icons/fa";
interface Props{
  width: string,
}
const   SearchBar = ({width}:Props) => {
  return (
    <div className={`items-center h-[35px]  lg:h-[40px] ${width} rounded-xl bg-search`}>
        <div className="text-xl text-slate-300 w-10 flex justify-center items-center">
            <FaSearch/>
        </div>
        <SearchInput/>
        <Button placeHolder="Search"/>
    </div>
  )
}

export default SearchBar