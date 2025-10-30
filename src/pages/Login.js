import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic - in a real app, this would authenticate with a server
    console.log("Login attempt:", formData);
    alert(`Welcome, ${formData.username}!`);
    // Reset form
    setFormData({ username: "", password: "" });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Login;
