import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ token }) => {
    const user = useSelector(state => state.user.user);

    return (
        user?.token ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default PrivateRoute;