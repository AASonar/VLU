import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { createContext, useContext, useEffect, useState, useMemo} from 'react'
import { fetchAccount } from '../components/valorantAPI';
import { AccountDetails, UserInfo } from '../components/valorantAPI/types/accDetails';
import { UserContext } from '../components/UserContext';


function MyApp({ Component, pageProps }: AppProps) {

  const [playerInfo, setPlayerInfoState] = useState<AccountDetails>(Object)
  const [error, setError] = useState<Error>()
  const [sbOpen, setSbOpen] = useState<boolean>(false)
  const [sbErrorOpen, setSbErrorOpen] = useState<boolean>(false)

  const setPlayerInfo = (acctDetails: AccountDetails) => {
    setPlayerInfoState(acctDetails)
  }

  return (
    <UserContext.Provider value={{
        playerInfo, 
        setPlayerInfo, 
        error, 
        setError, 
        sbOpen,
        setSbOpen,
        sbErrorOpen,
        setSbErrorOpen
      }}>
      <Component {...pageProps} /> 
    </UserContext.Provider>
  )
}

export default MyApp

