import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const Lobby = dynamic(() => import("lobby/Lobby"), { ssr: false });

const Chessboard: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [activePlayers, setActivePlayers] = useState<string[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleOpponentSelected = (event: CustomEvent<string[]>) => {
      setActivePlayers(event.detail);
    };

    window.addEventListener("opponentSelected" as any, handleOpponentSelected);

    return () => {
      window.removeEventListener(
        "opponentSelected" as any,
        handleOpponentSelected,
      );
    };
  }, []);

  useEffect(() => {
    const storedUsername = localStorage.getItem("chessUsername");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      router.push("/");
    }
  }, [router]);

  if (!username) {
    return null; // or a loading indicator
  }

  return (
    <div
      style={{
        backgroundColor: "#F0FFF0", // Light mint green background
        border: "2px solid #3FC1C9",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h2>Chess Game</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Lobby />
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid #3FC1C9",
            padding: "10px",
            backgroundColor: "white", // Keep the inner game area white
          }}
        >
          {activePlayers && activePlayers.length === 2 ? (
            <>
              <p>Current players:</p>
              <ul>
                {activePlayers.map((player, index) => (
                  <li key={index}>{player}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>No active game</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chessboard;
