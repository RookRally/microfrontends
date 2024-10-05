import React, { useState, useEffect } from "react";

const Lobby: React.FC = () => {
  const [opponents] = useState<string[]>(["Player 1", "Player 2", "Player 3"]);
  const [selectedOpponent, setSelectedOpponent] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("chessUsername");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const selectOpponent = () => {
    if (selectedOpponent && username) {
      window.dispatchEvent(
        new CustomEvent("opponentSelected", {
          detail: [username, selectedOpponent],
        }),
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#E6FFFD",
        border: "2px solid #3FC1C9",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h2>Lobby</h2>
      {username && (
        <div
          style={{
            backgroundColor: "#3FC1C9",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Welcome to the Chess Lobby, {username}! 👋♟️
        </div>
      )}
      <p>Select an opponent to start a game:</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {opponents.map((opponent, index) => (
          <li
            key={index}
            onClick={() => setSelectedOpponent(opponent)}
            style={{
              cursor: "pointer",
              padding: "8px",
              margin: "5px 0",
              backgroundColor:
                selectedOpponent === opponent ? "#BFF0F0" : "transparent",
              borderRadius: "4px",
              transition: "background-color 0.3s",
            }}
          >
            {opponent} {selectedOpponent === opponent && "✓"}
          </li>
        ))}
      </ul>
      <button
        onClick={selectOpponent}
        disabled={!selectedOpponent}
        style={{
          backgroundColor: selectedOpponent ? "#3FC1C9" : "#ccc",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: selectedOpponent ? "pointer" : "not-allowed",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        Select Opponent
      </button>
    </div>
  );
};

export default Lobby;
