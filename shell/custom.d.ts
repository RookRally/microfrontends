declare module "header/Header" {
  import { FC } from "react";

  interface HeaderProps {
    onNavigate: (page: string) => void;
  }

  const Header: FC<HeaderProps>;
  export default Header;
}

declare module "chessboard/Chessboard" {
  import { FC } from "react";

  const GameScreen: FC;
  export default GameScreen;
}

declare module "leaderboard/Leaderboard" {
  import { FC } from "react";

  const Leaderboard: FC;
  export default Leaderboard;
}

declare module "registration/Registration" {
  import { FC } from "react";

  interface UserRegistrationProps {
    onRegister: () => void;
  }

  const UserRegistration: FC<UserRegistrationProps>;
  export default UserRegistration;
}
