import { Link } from "react-router-dom";
import { Facilitors } from "../utils/Facilitators";
import { useState } from "react";
const Facilitators = () => {
  const [facilitators, setFacilitators] = useState(Facilitors);
  return (
    <div className="text-white p-4 bg-darkPrimary-lessDark h-full">
      {facilitators.length === 0 && (
        <div className=" bg-darkPrimary-lessDark p-2 h-full">
          <div className=" bg-[#3B3786] p-10 h-full md:w-[75%] mx-auto">
            <div className="flex justify-center">
              <img
                className="w-[400px]"
                src="/notification.svg"
                alt="notification"
              />
            </div>
            <div className="text-center mt-5">
              <h2 className=" text-xl font-semibold">
                No facilitator yet at this time
              </h2>
              <p className="mt-3 text-sm">
                Teachers will appear here after they enroll in your school.{" "}
              </p>
            </div>
          </div>
        </div>
      )}
      {facilitators && (
        <div>
          <table className="w-[90%] mx-auto border-separate border-spacing-y-2">
            <thead className="text-orange">
              <tr>
                <td>Profile</td>
                <td>Name</td>
                <td>Course</td>
                <td>Class</td>
                <td>Email address</td>
                <td>Gender</td>
              </tr>
            </thead>
            <tbody className=" mt-2 text-[14px]">
              {facilitators.map((facilitator, index) => (
                <tr
                  key={index}
                  className="bg-[#585889] cursor-pointer group hover:bg-[#DA5B3B] transition-all"
                >
                  <td className="py-1 pl-2">
                    <img
                      className="h-9 w-9  rounded-full overflow-hidden"
                      src={facilitator.profile}
                      alt="profileImage"
                    />
                  </td>
                  <td>
                    <Link to={`/facilitator/${facilitator.id}`}>
                      {facilitator.name}
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <Link to={`/facilitator/${facilitator.id}`}>
                      {facilitator.course}
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <Link to={`/facilitator/${facilitator.id}`}>
                      {facilitator.class}
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <Link to={`/facilitator/${facilitator.id}`}>
                      {facilitator.emailAdress}
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <Link to={`/facilitator/${facilitator.id}`}>
                      {facilitator.gender}
                    </Link>
                  </td>
                  <td className="absolute right-[5%] top-[10%] opacity-0 group-hover:opacity-100 transition-opacity delay-200  min-h-[300px] w-[200px] bg-modals  bg-opacity-[95%]  drop-shadow-lg p-4">
                    <div className="flex justify-center items-center">
                      <img
                        className="h-10 w-10 rounded-full overflow-hidden"
                        src={facilitator.profile}
                        alt="Profile"
                      />
                    </div>
                    <div className=" mt-2 text-[12px] text-center">
                      <h2>
                        <Link to={`/facilitator/${facilitator.id}`}>
                          {facilitator.name}
                        </Link>
                      </h2>
                      <p className=" text-textColor">
                        {" "}
                        <Link to={`/facilitator/${facilitator.id}`}>
                          {facilitator.course} teacher
                        </Link>
                      </p>
                    </div>
                    <div className="text-start">
                      <h4 className="mt-3 text-orange font-semibold">About</h4>
                      <div className="text-xs">
                        <p className=" font-light ">
                          <span className="font-semibold">Email: </span>
                          {facilitator.emailAdress}
                        </p>
                        <p className=" font-light py-1">
                          <span className="font-semibold">Phone No: </span>
                          {facilitator.phoneNo}
                        </p>
                        <p className=" font-light ">
                          <span className="font-semibold">Address: </span>
                          {facilitator.address}
                        </p>
                      </div>
                    </div>
                    <div className="text-start flex justify-between mt-1 text-xs">
                      <div>
                        <h4 className="text-orange font-semibold">Age</h4>
                        <p className="mt-1">{facilitator.age}</p>
                      </div>
                      <div>
                        <h4 className="text-orange font-semibold">Gender</h4>
                        <p className="mt-1">{facilitator.gender}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-orange text-xs font-semibold text-start mt-1">
                        Facilitated students
                      </h4>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Facilitators;
