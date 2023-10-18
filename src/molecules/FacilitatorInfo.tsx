interface Props {
  title: string;
  content: string | number;
}
const FacilitatorInfo = ({ title, content }: Props) => {
  return (
    <div className="text-[14px]">
      <h4 className="text-orange font-semibold">{title}</h4>
      <p className="mt-1">{content}</p>
    </div>
  );
};

export default FacilitatorInfo;
