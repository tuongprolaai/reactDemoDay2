import { Outlet } from "react-router";

function AdminLayout() {
  return (
    <div>
      <h1>Layout admin</h1>
      <Outlet />
    </div>
  );
}

export default AdminLayout;
