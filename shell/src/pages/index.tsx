// container/pages/index.tsx

import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Header = dynamic(() => import("header/Header"), { ssr: false });
const GameScreen = dynamic(() => import("chessboard/Chessboard"), {
  ssr: false,
});
const Leaderboard = dynamic(() => import("leaderboard/Leaderboard"), {
  ssr: false,
});
const UserRegistration = dynamic(
  () => import("registration/Registration"),
  { ssr: false },
);

const Shell: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("registration");
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const handleUserRegistered = (event: CustomEvent<string>) => {
      setIsRegistered(true);
      setUsername(event.detail);
      setCurrentPage("chessboard");
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

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div style={{ backgroundColor: "#F5FFFA", minHeight: "100vh" }}>
      <Header onNavigate={handleNavigation} />
      <div style={{ padding: "20px" }}>
        <h1>Chess Tournament</h1>
        {currentPage === "registration" && !isRegistered && (
          <UserRegistration onRegister={() => {}} />
        )}
        {currentPage === "chessboard" && isRegistered && <GameScreen />}
        {currentPage === "leaderboard" && <Leaderboard />}
      </div>
    </div>
  );
};

export default Shell;
