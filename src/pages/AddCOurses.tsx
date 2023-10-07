import { useState } from "react";

const AddCourses = () => {
  const [page, setPage] = useState(0);
  const pageTitles = ["Add Course", "Add Topics", "Add content", "Complete"];
  return (
    <div className="h-full text-white p-5">
      <div>
        <h1 className="text-2xl">{pageTitles[page]}</h1>
      </div>
      <div className=" md:w-[80%] mx-auto">
        <p>
          <span>{page <= 2 ? page + 1 : 3}</span>/3 steps
        </p>
        <div className="bg-white h-2 rounded-md">
          <div
          className="bg-orange rounded-md h-2 transition-all"
            style={{
              width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AddCourses;
