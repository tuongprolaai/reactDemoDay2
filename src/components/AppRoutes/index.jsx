import { BrowserRouter as Router, Routes, Route } from "react-router";
import News from "../../pages/News";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Dashboard from "../../pages/Dashboard";

import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";
import AdminLayout from "../../layouts/AdminLayout";
import PostDetail from "../../pages/PostDetail";
import UseState from "../../pages/UseState";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>

        <Route element={<DefaultLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="use-state" element={<UseState />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="news/:id" element={<PostDetail />}></Route>
        </Route>

        <Route element={<SidebarLayout />}>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
