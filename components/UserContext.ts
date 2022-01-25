import { createContext } from "react";
import { AccountDetails, UserInfo } from "./valorantAPI/types/accDetails";

interface UserContextProps  {
  playerInfo?: AccountDetails
  setPlayerInfo?(acctDetails: AccountDetails): void
  error?: Error
  setError?(error:Error): void
  sbOpen?: boolean
  setSbOpen?(sbOpen:boolean): void
  sbErrorOpen?: boolean
  setSbErrorOpen?(sbErrorOpen:boolean): void
}

export const UserContext = createContext<UserContextProps>({});
