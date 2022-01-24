/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { fetchMatches } from '../components/valorantAPI'
import { fetchAccount } from '../components/valorantAPI/'
import React, { useEffect, useState } from "react";
import { AccountDetails } from '../components/valorantAPI/fetchAccount/fetchAccount';
import PlayerCard from '../components/ui/playerCard';


const Home: NextPage = () => {
  
  return (
    
      <main className={styles.main}>
        <PlayerCard />
        <>
          <p>Nice one dong</p>
          
        </>
      </main>

  )
}

export default Home
