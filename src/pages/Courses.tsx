import { courses } from "../utils/courses";
import { getColorAndIcon } from "../utils/courseMapping";
import CourseLayout from "../components/CourseLayout";
import { ScaleLoader } from "react-spinners";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Courses = () => {
  const isLoading = false;
  // let fetchedCourses = null;
  return (
    <div className="p-5 pt-2 bg-[#1C1755] h-full">
      <div className=" mb-4 px-4 text-white flex items-center justify-end sm:justify-between ">
        <div className="hidden sm:block">
          <h3 className="font-medium text-[18px]">{"Welcome castella"}</h3>
          <p className=" text-xs font-light">get all courses down here</p>
        </div>
        <div>
          <Link to={"/add_courses"}>
          <button className=" flex items-center justify-center gap-2 bg-orange p-3 rounded-lg self-end">
            <FaPlus/>
            <span> Add new courses</span>
          </button>
          </Link>
        </div>
      </div>
      <div className="text-white flex justify-center">
        <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 h-full">
          {isLoading && (
            <div className="h-full flex items-center">
              <ScaleLoader color="#EC502C" />
            </div>
          )}
          {courses &&
            courses.map((course, index) => {
              const { bgColor, enrollColor, icon } = getColorAndIcon(
                course.name
              );
              return (
                <CourseLayout
                  key={index}
                  name={course.name}
                  enroledStudents={course.enroledStudents}
                  notes={course.notes}
                  topics={course.topics}
                  bgColor={bgColor}
                  enrollColor={enrollColor}
                  icon={icon}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
