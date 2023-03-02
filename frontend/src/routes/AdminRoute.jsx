import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = ({ token, role }) => {
    return (
        token && role ? <Outlet /> : <Navigate to="/not_found" />
    )
}

export default AdminRoute;