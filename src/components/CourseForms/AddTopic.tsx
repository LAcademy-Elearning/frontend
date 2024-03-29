import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import AddCourseArea from "../../atoms/AddCourseArea";
import { Link } from "react-router-dom";

const AddTopic: React.FC<Props> = ({ setPage }) => {
  const [text, setText] = useState("");
  const maxCharacters = 100;
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= maxCharacters) {
      setText(newText);
    }
  };
  return (
    <AddCourseArea>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg">Add topics</h2>
          <Link to={"/courses"}>
            <div className="text-lg hoverEffect flex items-center justify-center rounded-full h-8 w-8">
              <FaXmark />
            </div>
          </Link>
        </div>
        <div className="mt-5 flex flex-col ">
          <textarea
            value={text}
            onChange={handleTextChange}
            maxLength={maxCharacters}
            className="w-full outline-none rounded-lg text-black px-4  pt-4"
            placeholder="type your course topic "
            name=""
          ></textarea>
          <span className=" self-end mt-2 text-xs">
            {text.length}/{maxCharacters}
          </span>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="bg-orange px-14 rounded-xl py-4"
        >
          Back
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-orange px-14 rounded-xl py-4"
        >
          proceed
        </button>
      </div>
    </AddCourseArea>
  );
};

export default AddTopic;
