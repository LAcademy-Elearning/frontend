import { courses } from "../utils/courses";
import { getColorAndIcon } from "../utils/courseMapping";
import CourseLayout from "../components/CourseLayout";
import { ScaleLoader } from "react-spinners";
const Courses = () => {
 let isLoading = false;
 let fetchedCourses = null;
  return (
    <div className="text-white p-5 bg-[#1C1755] h-full flex justify-center">
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-4 h-full">
        {isLoading && <div className="h-full flex items-center" >
          <ScaleLoader color="#EC502C" />
          </div>}
        {courses && courses.map((course, index) => {
          const { bgColor, enrollColor, icon } = getColorAndIcon(course.name);
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
  );
};

export default Courses;
