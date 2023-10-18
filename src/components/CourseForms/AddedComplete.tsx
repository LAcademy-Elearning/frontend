import React from "react";
import AddCourseArea from "../../atoms/AddCourseArea";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
interface Props {
  addAnother: () => void;
}
const AddedComplete = ({ addAnother }: Props) => {
  return (
    <AddCourseArea>
      <div className="flex justify-end items-center">
        <Link to={"/courses"}>
          <div className="text-lg hoverEffect flex items-center justify-center rounded-full h-8 w-8">
            <FaXmark />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <img className="h-40" src="./Illustrations.svg" alt="Done" />
      </div>
      <div>
        <h3 className="text-center mt-3 ">
          You have successfully created your course with topics
        </h3>
      </div>
      <Link to={"#"} className="text-center mt-3 text-textColor">
        view topics
      </Link>
      <div className="text-center mt-7">
        <button
          onClick={addAnother}
          className="bg-orange w-[40%]  rounded-xl py-4"
        >
          Add another course
        </button>
      </div>
    </AddCourseArea>
  );
};

export default AddedComplete;
