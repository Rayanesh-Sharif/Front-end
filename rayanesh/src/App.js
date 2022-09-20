import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import NotFound from "./pages/notFound/NotFound";
import Blogs from "./pages/blogs/Blogs";
import NavbarSection from "./components/NavbarSection";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import WriteBlog from "./pages/writeBlog/WriteBlog";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {prefixer} from "stylis";

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
        </CacheProvider>
    )
}

export default App;
