import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { createContext, useContext, useEffect, useState, useMemo} from 'react'
import { fetchAccount } from '../components/valorantAPI';
import { AccountDetails, UserInfo } from '../components/valorantAPI/types/accDetails';
import { UserContext } from '../components/UserContext';


function MyApp({ Component, pageProps }: AppProps) {

  const [playerInfo, setPlayerInfoState] = useState<AccountDetails>(Object)
  const [error, setError] = useState<Error>()
  const [isPlayerInfoValid, setIsPlayerInfoValid] = useState<boolean>(false)
  const [sbOpen, setSbOpen] = useState<boolean>()

  const setPlayerInfo = (acctDetails: AccountDetails) => {
    setPlayerInfoState(acctDetails)
    setIsPlayerInfoValid(true)
  }

  return (
    <UserContext.Provider value={{
        playerInfo, 
        setPlayerInfo, 
        error, 
        setError, 
        sbOpen,
        setSbOpen,
        isPlayerInfoValid 
      }}>
      <Component {...pageProps} /> 
    </UserContext.Provider>
  )
}

export default MyApp

