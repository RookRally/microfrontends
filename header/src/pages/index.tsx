import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem("chessUsername");
    if (storedUsername) {
      setIsRegistered(true);
      setUsername(storedUsername);
    }

    const handleUserRegistered = (event: CustomEvent<string>) => {
      setIsRegistered(true);
      setUsername(event.detail);
      router.push("/chessboard");
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
  }, [router]);

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
              <Link
                href="/chessboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                Chessboard
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link
                href="/leaderboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                Leaderboard
              </Link>
            </li>
          </>
        ) : (
          <>
            <li style={{ margin: "0 10px" }}>
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                Registration
              </Link>
            </li>
            <li style={{ margin: "0 10px" }}>
              <Link
                href="/leaderboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                Leaderboard
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;
