import { getColorAndIcon } from "../utils/courseMapping";
import { courses } from "../utils/courses"
import CourseLayout from "./CourseLayout";
const HightlightedCourses = () => {
  return (
    <div className="grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {courses &&
            courses.slice(0,8).map((course, index) => {
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
  )
}

export default HightlightedCourses