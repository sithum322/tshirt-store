import { useState } from "react";
import API from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Success");
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">
        Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 max-w-md"
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-3"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-3"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="bg-black text-white p-3"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;