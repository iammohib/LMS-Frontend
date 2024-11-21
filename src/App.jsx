import "./App.css";

import { Route, Routes } from "react-router-dom";

import RequireAuth from "./components/Auth/RequireAuth";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import CourseDescription from "./pages/Course/CourseDescription";
import CourseList from "./pages/Course/CourseList";
import CreateCourse from "./pages/Course/CreateCourse";
import Denied from "./pages/Denied";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import SignUp from "./pages/SignUp";
import User from "./pages/User/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/course/description" element={<CourseDescription />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/denied" element={<Denied />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>

        <Route path="/user/profile" element={<User />} />
        <Route
          element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}
        ></Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
