import React from "react";

interface GameExitProps {
  onExitGame: () => void;
}

const GameExit: React.FC<GameExitProps> = ({ onExitGame }) => {
  return (
    <div>
      <h2>Game Exit</h2>
      <button onClick={onExitGame}>Exit Game</button>
    </div>
  );
};

export default GameExit;
