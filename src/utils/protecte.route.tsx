import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({
    token,
    children,
}: {
    token: string | undefined;
    children: ReactElement;
}) => {
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
