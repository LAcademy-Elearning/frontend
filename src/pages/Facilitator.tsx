import { useParams } from "react-router-dom";
import { Facilitors } from "../utils/Facilitators";
import FacilitatorInfo from "../molecules/FacilitatorInfo";
const Facilitator = () => {
  const { id } = useParams();
  const ExtractFacilitator = Facilitors.filter(
    (facilitator) => id && facilitator.id === parseInt(id)
  );
  const facilitator = ExtractFacilitator[0];

  return (
    <div className="text-white p-7 h-full bg-darkPrimary-dark">
      <div className="  xl:w-[80%] mx-auto h-full bg-[#211F47] rounded-lg shadow-xl py-14 px-10 flex flex-col md:flex-row md:gap-3 lg:gap-0 ">
        <div className="flex flex-col items-center md:w-[50%]">
          <img className="w-[100px] md:w-[140px]" src={facilitator.profile} alt="profile" />
          <div className="text-center mt-3">
            <h4 className="text-lg">{facilitator.name}</h4>
            <p className="text-textColor">{facilitator.course}</p>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="h-14 w-14 bg-darkHover p-2"></div>
            <div className="h-14 w-14 bg-darkHover p-2"></div>
            <div className="h-14 w-14 bg-darkHover p-2"></div>
          </div>
        </div>
        {/* about */}
        <div className="md:w-[50%]">
          <h4 className="text-orange font-semibold">About</h4>
          <p>{facilitator.description}</p>
          <div className="mt-10 flex justify-between flex-wrap">
            <FacilitatorInfo title="Age" content={facilitator.age} />
            <FacilitatorInfo title="Gender" content={facilitator.gender} />
            <FacilitatorInfo title="Email" content={facilitator.emailAdress} />
            <FacilitatorInfo title="Address" content={facilitator.address} />
          </div>
          <div className="mt-10">
            <h4 className="text-orange font-semibold">facilitated students</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilitator;
