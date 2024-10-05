import React from "react";

interface Leader {
  name: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const leaders: Leader[] = [
    { name: "Player 1", score: 100 },
    { name: "Player 2", score: 90 },
    { name: "Player 3", score: 80 },
  ];

  return (
    <div
      style={{
        backgroundColor: "#F0F8FF",
        border: "2px solid #3FC1C9",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h2>Leaderboard</h2>
      <ol>
        {leaders.map((leader, index) => (
          <li key={index}>
            {leader.name}: {leader.score} points
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
