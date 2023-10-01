interface Props {
  placeHolder: string;
}
const Button = ({ placeHolder }: Props) => {
  return (
    <button className="bg-orange text-darkPrimary-lessDark h-full font-medium rounded-[10px] w-20">
      {placeHolder}
    </button>
  );
};

export default Button;
