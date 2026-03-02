import { BrowserRouter as Router, Routes, Route } from "react-router";
import News from "../../pages/News";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";

// Layout
import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import AdminLayout from "../../layouts/AdminLayout";
import PostDetail from "../../pages/PostDetail";
import UseState from "../../pages/UseState";

// Components
import ScrollToTop from "../../components/ScrollToTop";
import Cleanup from "../../pages/Cleanup";
import Cleanup2 from "../../pages/Cleanup2";
import Hooks from "../../pages/Hooks";
import HOC from "../../pages/HOC";
import RenderProps from "../../pages/RenderProps";
import CustomHook from "../../pages/CustomHook";

function AppRoutes() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />}></Route>
                </Route>

                {/* Default layout pages */}
                <Route element={<DefaultLayout />}>
                    <Route path="news" element={<News />}></Route>
                    <Route path="news/:id" element={<PostDetail />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="cleanup" element={<Cleanup />}></Route>
                </Route>

                {/* Sidebar layout pages */}
                <Route element={<SidebarLayout />}>
                    <Route path="/contact" element={<Contact />}></Route>
                </Route>

                {/* No layout */}
                <Route index element={<Home />}></Route>
                <Route path="use-state" element={<UseState />}></Route>
                <Route path="cleanup2" element={<Cleanup2 />}></Route>
                <Route path="hooks" element={<Hooks />}></Route>
                <Route path="hoc" element={<HOC />}></Route>
                <Route path="render-props" element={<RenderProps />}></Route>
                <Route path="custom-hook" element={<CustomHook />}></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;
