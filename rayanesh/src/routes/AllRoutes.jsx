import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import Blogs from "../pages/blogs/Blogs";
import ReadBlog from "../pages/BlogViewer/ReadBlog";
import WriteBlog from "../pages/BlogViewer/WriteBlog";
import NotFound from "../pages/notFound/NotFound";
import Signup from "../pages/signupLogin/Signup";
import Login from "../pages/signupLogin/Login";
import React from "react";


function AllRoutes() {
    return (
        <Router>

            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/blogs/:id" element={<ReadBlog/>}/>
                <Route path="/blogs/write" element={<WriteBlog/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

        </Router>
    );
}

export default AllRoutes;
