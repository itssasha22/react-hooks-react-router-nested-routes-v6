import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const userId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/users/${userId}`)
    .then(r => r.json())
    .then(data => {
      setUser(data);
      setLoading(false);
    })
    .catch(error => {
      console.error(error);
      setError("Failed to load user profile");
      setLoading(false);
    });
  }, [userId]);

  if (loading) {
    return <h1>Loading user profile...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!user.name) {
    return <h1>User not found</h1>;
  }

  return(
    <aside>
      <h1>{user.name}</h1>
    </aside>
  );
};

export default UserProfile;
