/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";
import PlayerCard from '../components/ui/playerCard';
import { Container, Grid } from '@mui/material';
import { MatchTable } from '../components/ui';


const Home: NextPage = () => {
  
  return (
 
      <main className={styles.main}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <PlayerCard userName={"Kaizen"} tag={"sage"} /> 
            </Grid>
            <Grid item xs={8}>
              <MatchTable/>
            </Grid>
            <Grid item xs={4}>
              <PlayerCard userName={"Kaiserin"} tag={"9988"}  />
            </Grid>

          </Grid>
          
        </Container>
        

      </main>

  )
}

export default Home
