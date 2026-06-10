import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <p>Loading profile...</p>;
    if (!isAuthenticated || !user) {
        return <p>Please log in.</p>;
    } 

    return (
        <div>
            <h1>Profile</h1>

            {user.picture && (
                <img src={user.picture} alt="User profile" className="rounded mb-3" width="120" />
            )}

            <p><strong>Name:</strong> {user?.name || user?.nickname || "No name available"}</p>
            <p><strong>Email:</strong> {user?.email || "No email available"}</p>
            <p><strong>Username:</strong> {user?.nickname || "No username available" }</p>

        </div>
    );
}

export default Profile;