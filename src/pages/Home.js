import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";

function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    fetch("http://localhost:4000/users")
      .then(r => r.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading users...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const userList = users.map(user =>{
    return <UserCard key={user.id} user={user}/>;
  });

  return (
    <>
      <h1>Home!</h1>
      {userList}
    </>
  );
};

export default Home;
