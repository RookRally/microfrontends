import React, { useState } from "react";
import { useRouter } from "next/router";

const Registration: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("chessUsername", username);
    window.dispatchEvent(
      new CustomEvent("userRegistered", { detail: username }),
    );
    router.push("/chessboard");
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFAFA",
        border: "2px solid #3FC1C9",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
