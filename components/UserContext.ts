import { createContext } from "react";
import { AccountDetails } from "./valorantAPI/types/accDetails";

interface UserContextProps  {
  playerInfo?: AccountDetails
  setPlayerInfo?(acctDetails: AccountDetails): void
  error?: Error
  isPlayerInfoValid?: boolean
}

export const UserContext = createContext<UserContextProps>({});
