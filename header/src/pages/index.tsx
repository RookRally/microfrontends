import React, { useState, useEffect } from "react";

interface HeaderProps {
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const handleUserRegistered = (event: CustomEvent<string>) => {
      setIsRegistered(true);
      setUsername(event.detail);
    };

    window.addEventListener(
      "userRegistered",
      handleUserRegistered as EventListener,
    );

    return () => {
      window.removeEventListener(
        "userRegistered",
        handleUserRegistered as EventListener,
      );
    };
  }, []);

  return (
    <nav
      style={{
        backgroundColor: "#3FC1C9",
        padding: "10px",
        marginBottom: "20px",
        color: "white",
        border: "2px solid #2E8B8B",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          padding: 0,
          margin: 0,
        }}
      >
        {isRegistered ? (
          <>
            <li style={{ margin: "0 10px" }}>Welcome, {username}!</li>
            <li style={{ margin: "0 10px" }}>
              <button
                onClick={() => onNavigate("chessboard")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Chessboard
              </button>
            </li>
            <li style={{ margin: "0 10px" }}>
              <button
                onClick={() => onNavigate("leaderboard")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Leaderboard
              </button>
            </li>
          </>
        ) : (
          <>
            <li style={{ margin: "0 10px" }}>
              <button
                onClick={() => onNavigate("registration")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Registration
              </button>
            </li>
            <li style={{ margin: "0 10px" }}>
              <button
                onClick={() => onNavigate("leaderboard")}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                Leaderboard
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
