import { ReactElement } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
import Login from '../pages/login';

export const ProtectedRoute = ({
    token,
    children,
}: {
    token: string | undefined;
    children: ReactElement;
}) => {
    if (!token) {
        return <Login></Login>;
        // return <Navigate to="/login" replace />;
    }
    return children;
};
