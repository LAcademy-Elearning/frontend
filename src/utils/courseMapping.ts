interface CourseMetadata {
  bgColor: string;
  enrollColor: string;
  icon: string;
}
export const getColorAndIcon = (courseName: string) => {
  const words = courseName.split(" ");
  let result: string = "";
  for (const word of words) {
    if (word.length > 1) {
      result += word[0].toUpperCase();
    } else {
      result += word;
    }
  }

  const courseMappings: Record<string, CourseMetadata> = {
    HAC: {
      bgColor: "#6E73D9",
      enrollColor: "#353297",
      icon: "/html&css.svg",
    },
    GUI: { bgColor: "#59588D", enrollColor: "#FFD5BE", icon: "/Gui.svg" },
    FOPUCL: { bgColor: "#727FA0", enrollColor: "#49982e80", icon: "/Fop.svg" },
  };
  const defaultMapping: Record<string, string> = {
    bgColor: "#5A499C",
    enrollColor: "#35329780",
    icon: "/Gui.svg",
  };
  return courseMappings[result] || defaultMapping;
};
