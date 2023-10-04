import { Course } from "../utils/courses";

interface CourseMetadata {
  color: string;
  icon: string;
}

const Courses = () => {
  const getColorAndIcon = (courseName: string) => {
    const words = courseName.split(" ");
    let result: string = "";
    for (const word of words) {
      if (word.length > 1) {
        result += word[0];
      } else {
        result += word;
      }
    }
    const courseMappings: Record<string, CourseMetadata> = {
      javascript: { color: "blue", icon: "math-icon.png" },
      GUI: { color: "green", icon: "history-icon.png" },
      FOP: { color: "red", icon: "science-icon.png" },
    };
    console.log(result);
    return courseMappings[result];
  };

  return <div className="text-white"></div>;
};

export default Courses;
