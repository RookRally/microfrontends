import dynamic from "next/dynamic";
import React from "react";

const UserRegistration = dynamic(() => import("registration/Registration"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5FFFA",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Chess Tournament Registration</h1>
      <UserRegistration />
    </div>
  );
};

export default Home;
