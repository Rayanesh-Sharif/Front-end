import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import NotFound from "./pages/notFound/NotFound";
import Blogs from "./pages/blogs/Blogs";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default App;
