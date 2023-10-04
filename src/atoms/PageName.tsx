interface Props{
  pagename: string
}
const PageName = ({pagename}:Props) => {
  return (
    <div>
      <h1 className=" text-xl text-white font-bold">{pagename}</h1>
      {/* <p className=" text-textColor">{description}</p> */}
    </div>
  );
};

export default PageName;
