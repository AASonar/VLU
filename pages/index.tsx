/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useContext } from "react";
import PlayerCard from "../components/ui/playerCard";
import { Container, Grid } from "@mui/material";
import { MatchTable, MatchTable2, PlayerFields, SnackBar } from "../components/ui";
import { UserContext } from "../components/UserContext";

const Home: NextPage = () => {
  const { 
    playerInfo, 
    setPlayerInfo, 
    error, 
    setError,
    isPlayerInfoValid
  } = useContext(UserContext);

  return (
    <main className={styles.main}>
      <Container>
        <SnackBar  />
        <PlayerFields />
        {playerInfo?.name &&(
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <PlayerCard playerInfo={playerInfo} />
              </Grid>
              <Grid item xs={8}>
                <MatchTable playerInfo={playerInfo} />
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
          
        )}
      </Container>

    </main>
  );
};

export default Home;
