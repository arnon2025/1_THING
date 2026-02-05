import React from "react";
import { Navigate } from "react-router-dom";

const AuthProtected = (props: any) => {
    // Add authentication logic here (e.g., check token in localStorage or Redux)
    // For now, assume authenticated
    const isAuth = true;

    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }: any) => {
    return (
        <AuthProtected>
            <Component {...rest} />
        </AuthProtected>
    );
};

export { AuthProtected, AccessRoute };
