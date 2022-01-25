import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { createContext, useContext, useEffect, useState, useMemo} from 'react'
import { fetchAccount } from '../components/valorantAPI';
import { AccountDetails } from '../components/valorantAPI/types/accDetails';
import { UserContext } from '../components/UserContext';

const userInfo = {
  name: "Kaiserin",
  tag: "9988s"
}

function MyApp({ Component, pageProps }: AppProps) {

  const [playerInfo, setPlayerInfoState] = useState<AccountDetails>(Object);
  const [error, setError] = useState<Error>();
  const [isPlayerInfoValid, setIsPlayerInfoValid] = useState<boolean>(false);

  const setPlayerInfo = (acctDetails: AccountDetails) => {
    setPlayerInfoState(acctDetails);
    setIsPlayerInfoValid(true);
  }

  useEffect(() => {
    fetchAccount(userInfo.name, userInfo.tag).then(
      (accountDetails: AccountDetails) => {
        setPlayerInfo(accountDetails)
      }).catch((err: Error) => {
        console.log("error", err);
        setError(error);
      })

  }, []);

  return (
    <UserContext.Provider value={{playerInfo, setPlayerInfo, error, isPlayerInfoValid}}>
      <Component {...pageProps} /> 
    </UserContext.Provider>
  )
}

export default MyApp

