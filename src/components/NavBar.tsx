import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
            <Link className="navbar-brand" to="/">Task Manager App</Link>

            <div className="navbar-nav">
                <Link className="nav-link" to="/">Home</Link>

                <Link className="nav-link" to="/tasks">Tasks</Link>

                <Link className="nav-link" to="/profile">Profile</Link>
            </div>

            {isAuthenticated ? (
                <button className="btn btn-outline-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin,},
                })
              }
            >Log Out</button>
        ) : (
            <button className="btn btn-outline-light" onClick={() => loginWithRedirect()}
            >Log In</button>
        )}
      </nav>
    );
}

export default NavBar