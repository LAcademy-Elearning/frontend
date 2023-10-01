import { Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Documents from "../pages/Documents";
import Students from "../pages/Students";
import Facilitators from "../pages/Facilitators";
import Statistics from "../pages/Statistics";

const PageRouter = () => {
  return (
    <Routes>
      <Route  path="/" element={<Layout/>} >
        <Route  path="/"  element={<Dashboard/>}/>
        <Route path="/courses" element={<Courses/>} />
        <Route path="/documents" element={<Documents/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/facilitators" element={<Facilitators/>}/>
        <Route  path="/statistics" element={<Statistics/>} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
