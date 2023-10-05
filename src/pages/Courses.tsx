import { courses } from "../utils/courses";
import { getColorAndIcon } from "../utils/courseMapping";
import CourseLayout from "../components/CourseLayout";
import { ScaleLoader } from "react-spinners";
const Courses = () => {
 let isLoading = false;
 let fetchedCourses = null;
  return (
    <div className="text-white p-5 bg-[#1C1755] h-full">
      <div className="flex flex-wrap gap-4  justify-center h-full">
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
