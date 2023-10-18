import { useState } from "react";
import AddCourse from "../components/CourseForms/AddCourse";
import AddTopic from "../components/CourseForms/AddTopic";
import AddContent from "../components/CourseForms/AddContent";
import AddedComplete from "../components/CourseForms/AddedComplete";
const AddCourses = () => {
  const [page, setPage] = useState(0);
  const [courseData, setCourseData] = useState({
    courseName: "",
    topics: [],
    courseContent: "",
  });
  const PageDisplay = () => {
    if (page === 0) {
      return <AddCourse setPage={setPage} />;
    } else if (page === 1) {
      return <AddTopic setPage={setPage} />;
    } else if (page === 2) {
      return <AddContent setPage={setPage} />;
    } else {
      return <AddedComplete addAnother={()=>setPage(0)}/>;
    }
  };

  const pageTitles = ["Add Course", "Add Topics", "Add content", "Complete"];
  return (
    <div className="h-full text-white p-5">
      <div>
        <h1 className="text-2xl">{pageTitles[page]}</h1>
      </div>
      <div className=" md:w-[85%] mx-auto my-2">
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
      <div className="mt-4 py-3 md:px-5 lg:w-[84%] mx-auto min-h-[400px]">
        {PageDisplay()}
      </div>
    </div>
  );
};

export default AddCourses;
