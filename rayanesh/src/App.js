import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import NavbarSection from "./components/NavbarSection";
import SignUp from "./pages/signUp/SignUp";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import Blogs from "./pages/blogs/Blogs";
import ReadBlog from "./pages/BlogViewer/ReadBlog";
import WriteBlog from "./pages/BlogViewer/WriteBlog";
import NotFound from "./pages/notFound/NotFound";

const cacheRtl = createCache({
    key: "muirtl",
    // prefixer is the only stylis plugin by default, so when
    // overriding the plugins you need to include it explicitly
    // if you want to retain the auto-prefixing behavior.
    stylisPlugins: [prefixer, rtlPlugin]
});

const theme = createTheme({
    direction: 'rtl',
    typography: {
        fontFamily: [
            'IRANSans',
            'Vaazir'
        ].join(','),
    },
});

function App() {
    React.useLayoutEffect(() => {
        document.body.setAttribute("dir", "rtl");
    }, []);
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Router>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<LandingPage/>}/>
                            <Route path="/blogs" element={<Blogs/>}/>
                            <Route path="/blogs/:id" element={<ReadBlog/>}/>
                            <Route path="/blogs/write" element={<WriteBlog/>}/>
                            <Route path="*" element={<NotFound/>}/>
                            <Route path="/signup" element={<SignUp/>}/>
                        </Routes>
                    </div>
                </Router>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default App;
