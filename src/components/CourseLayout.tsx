import { FaBookOpen, FaFile, FaUsersGear } from "react-icons/fa6";

interface Props {
  name: string;
  enroledStudents: number;
  notes: number;
  topics: number;
  bgColor: string;
  enrollColor: string;
  icon: string;
}

const CourseLayout = ({
  name,
  enroledStudents,
  notes,
  topics,
  bgColor,
  enrollColor,
  icon,
}: Props) => {
  return (
    <div
      className="max-w-[18%] min-w-[19%] flex flex-col justify-between rounded-xl p-4"
      style={{ backgroundColor: bgColor }}
    >
      <div className=" h-14 w-14 bg-[#ffffff1f] rounded-full flex items-center justify-center">
        <img className="w-10 h-10" src={icon} alt={`${name}Icon`} />
      </div>
      <div className="my-2">
        <h3 className="text-[16px]">{name}</h3>
      </div>
      <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: enrollColor }}>
        <div className="flex items-center gap-3 text-[#0009]">
          <div className="text-xl ">
            <FaBookOpen />
          </div>
          <p>{topics}</p>
        </div>
        <div className="flex items-center gap-3 text-[#0009]">
          <div className="text-xl">
            <FaFile />
          </div>
          <p>{notes}</p>
        </div>
        <div className="flex items-center gap-3 text-[#0009]">
          <div className="text-xl">
            <FaUsersGear />
          </div>
          <p>{enroledStudents}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
