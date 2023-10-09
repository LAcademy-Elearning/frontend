import React from "react";
interface Props {
  children: React.ReactNode;
}
const AddCourseArea = ({ children }: Props) => {
  return (
    <div className=" bg-addCourseAreaDark bg-opacity-60 border border-orange rounded-lg p-7 h-[450px]">
      {children}
    </div>
  );
};

export default AddCourseArea;
