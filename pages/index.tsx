/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useContext, useState } from "react";
import PlayerCard from "../components/ui/playerCard";
import { Container, Grid } from "@mui/material";
import { ExtendedMatchTable, extendedMatchTable, MatchTable, MatchTable2, PlayerFields, SnackBar } from "../components/ui";
import { MatchContext, UserContext } from "../components/UserContext";

const Home: NextPage = () => {
  const { 
    playerInfo, 
    setPlayerInfo, 
    error, 
    setError
  } = useContext(UserContext);

  const [matchID, setMatchID] = useState<string>()

  return (
    <main className={styles.main}>
      <MatchContext.Provider value={{matchID, setMatchID}}>
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
                <Grid item xs={4}> <Grid/>
                </Grid>
                { matchID &&
                  <Grid item xs={12}> 
                    <ExtendedMatchTable />
                   </Grid>
                  }

              </Grid>
            
          )}
        </Container>
      </MatchContext.Provider>
    </main>
  );
};

export default Home;
