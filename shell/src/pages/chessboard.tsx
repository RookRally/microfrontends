import dynamic from "next/dynamic";
import React from "react";

const Chessboard = dynamic(() => import("chessboard/Chessboard"), {
  ssr: false,
});

const ChessboardPage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#F5FFFA",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Chess Game</h1>
      <Chessboard />
    </div>
  );
};

export default ChessboardPage;
