import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ token }) => {
    return (
        token ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default PrivateRoutes;