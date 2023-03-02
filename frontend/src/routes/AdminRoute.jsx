import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ token, role }) => {
    const user = useSelector(state => state.user.user);

    return (
        user?.token && user?.role === 'admin' ? <Outlet /> : <Navigate to="/not_found" />
    )
}

export default AdminRoute;