import { Link } from "react-router-dom";
interface Props {
  src: string;
  destination: string;
  onclose: React.Dispatch<React.SetStateAction<boolean>>;
  to: string;
}
const MenuLink = ({ src, destination, onclose, to }: Props) => {
  return (
    <Link className="flex flex-col items-center gap-2" to={to} onClick={() => onclose(false)}>
      <div className=" bg-darkHover h-12 w-12 flex items-center justify-center rounded-full rounded-tl-none">
        <img className="h-6 w-6" src={src} alt="menu" />
      </div>
      <span className=" whitespace-nowrap">{destination}</span>
    </Link>
  );
};

export default MenuLink;
