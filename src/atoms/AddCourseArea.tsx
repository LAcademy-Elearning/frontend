import React from "react";
interface Props {
  children: React.ReactNode;
}
const AddCourseArea = ({ children }: Props) => {
  return (
    <div className=" flex flex-col justify-between bg-addCourseAreaDark bg-opacity-60 border border-orange rounded-lg p-7">
      {children}
    </div>
  );
};

export default AddCourseArea;
