import dynamic from "next/dynamic";
import React from "react";

const Leaderboard = dynamic(() => import("leaderboard/Leaderboard"), {
  ssr: false,
});

const LeaderboardPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5FFFA",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Leaderboard</h1>
      <Leaderboard />
    </div>
  );
};

export default LeaderboardPage;
