/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useContext, useState } from "react";
import PlayerCard from "../components/ui/playerCard";
import { Container, Grid, Typography } from "@mui/material";
import {
  ExtendedMatchTable,
  MatchTable,
  MatchTable2,
  PlayerFields,
  SnackBar,
} from "../components/ui";
import { MatchContext, UserContext } from "../components/UserContext";

const Home: NextPage = () => {
  const { playerInfo, setPlayerInfo, error, setError } =
    useContext(UserContext);

  const [matchID, setMatchID] = useState<string>();

  const containerRef = React.useRef(null);

  return (
    <main className={styles.main}>
      <MatchContext.Provider value={{ matchID, setMatchID }}>
        <Container>
          <SnackBar />
          <Grid container spacing={1}>
            <Grid item xs={3.5} ref={containerRef}>
              <PlayerFields />
              {playerInfo?.name && <PlayerCard playerInfo={playerInfo} />}
            </Grid>
            <Grid item xs={8}>
              <Grid item xs marginBottom={2}>
                {playerInfo?.name && <MatchTable playerInfo={playerInfo} />}
              </Grid>
              <Grid item xs>
                {matchID && <ExtendedMatchTable />}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </MatchContext.Provider>
    </main>
  );
};

export default Home;
