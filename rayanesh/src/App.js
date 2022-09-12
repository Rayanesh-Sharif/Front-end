import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import NotFound from "./pages/notFound/NotFound";
import Blogs from "./pages/blogs/Blogs";
import NavbarSection from "./components/NavbarSection";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import WriteBlog from "./pages/writeBlog/WriteBlog";

const theme = createTheme({
    typography: {
        fontFamily: [
            'IRANSans',
            'Vaazir'
        ].join(','),
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <NavbarSection loggedIn={false}/>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/blogs" element={<Blogs/>}/>
                        <Route path="/blogs/write" element={<WriteBlog/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App;
