import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
interface Props {
  to: string;
  icon: ReactNode;
  name: string;
  isOpen: boolean;
}
const MenuItem = ({ to, icon, name, isOpen }: Props) => {
  const location = useLocation();
  return (
    <li>
      <Link
        to={to}
        className={`relative flex items-center py-2 pl-2 my-1 group ${
          location.pathname === to ? " border-r-4 border-orange" : ""
        }`}
      >
        <div
          className={`text-2xl  ${
            location.pathname === to ? "text-orange" : "text-white"
          }`}
        >
          {icon}
        </div>
        <span
          className={`ml-3 transition-all text-textColor ${
            isOpen ? "" : "hidden"
          }`}
        >
          {name}
        </span>
        {!isOpen && (
          <div
            className={`absolute left-full rounded-md px-2 py-1 ml-4
         bg-darkPrimary-complimentary text-textColor invisible opacity-20 -translate-x-3 transition-all delay-150
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
          >
            {name}
          </div>
        )}
      </Link>
    </li>
  );
};

export default MenuItem;
