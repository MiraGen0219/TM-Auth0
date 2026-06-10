import type { ReactNode } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface ProtectedRouteProps {
    children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated, isLoading } = useAuth0();

    if(isLoading) {
        return <p>Loading...</p>;
    }

    if(!isAuthenticated) {
        return <p>Please log in to access this page.</p>
    }

    return <>{children}</>;
}

export default ProtectedRoute