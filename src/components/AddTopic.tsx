import React from "react";
import { FaXmark } from "react-icons/fa6";
import AddCourseArea from "../atoms/AddCourseArea";
import { Link } from "react-router-dom";

const AddTopic:React.FC<Props> = ({setPage}) => {
  return (
    <AddCourseArea>
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg">Add topics</h2>
            <Link to={"/courses"}>
              <div className="text-lg hoverEffect flex items-center justify-center rounded-full h-8 w-8">
                <FaXmark />
              </div>
            </Link>
          </div>
          <div className="mt-5 justify-self-start ">
            <textarea
              className="w-full outline-none rounded-lg text-black px-4  pt-4"
              placeholder="type your course topic "
              name=""
            ></textarea>
          </div>
        </div>
        <div className=" self-center">
          <button onClick={()=>setPage(prev=> prev+1)} className="bg-orange px-14 rounded-xl py-4">proceed</button>
        </div>
      </div>
    </AddCourseArea>
  );
};

export default AddTopic;
