import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ token }) => {
    return (
        token ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default PrivateRoute;