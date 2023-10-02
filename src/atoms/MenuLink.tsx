import { Link } from "react-router-dom";
interface Props {
  src: string;
  destination: string;
  onclose: React.Dispatch<React.SetStateAction<boolean>>;
  to?: string;
}
const MenuLink = ({ src, destination, onclose, to }: Props) => {
  return (
    <Link className="flex flex-col items-center gap-2" to={"#"} onClick={() => onclose(false)}>
      <div className=" bg-darkHover h-16 w-16 flex items-center justify-center rounded-full rounded-tl-none">
        <img className="h-8 w-8" src={src} alt="menu" />
      </div>
      <span className=" whitespace-nowrap">{destination}</span>
    </Link>
  );
};

export default MenuLink;
