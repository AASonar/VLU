import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MatchDetails, MatchDetailsData, Metadata } from '../valorantAPI/types/matchDetails';
import { useEffect, useState, useContext } from 'react';
import fetchMatch from '../valorantAPI/fetchMatch/fetchMatch';
import { PlayerCardProps } from '../valorantAPI/types/accDetails';
import { MatchContext, UserContext } from '../UserContext';
import Image from 'next/image';

export default function BasicTable() {

    const { 
      error, 
      setError,
    } = useContext(UserContext);

    const {
        matchID,
        setMatchID
      } = useContext(MatchContext)
      
    const [matchDetailsData, setMatchDetailsData] = useState<MatchDetailsData>(Object)

    useEffect(() => {
        
        if(matchID) {
            fetchMatch(matchID).then((matchDetailsData:MatchDetailsData) => {
              //console.log(matchDetailsData)
              setMatchDetailsData(matchDetailsData)
            }).catch((err: Error) => {
                setError!(err)
             })
        }
    },[])


  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, margin:0, padding: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Username</TableCell>
            <TableCell align="right">Character</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Score</TableCell>
            <TableCell align="right">K/D/A</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matchDetailsData?.players?.all_players?.map(({name,tag,character,currenttier_patched,stats,assets, team}) => (
            <TableRow
              key={name}
              onClick={() => {alert(`${name} #${tag}`)}}
              hover={true}
              background-color={team = "blue" ? "blue": "red" }
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, 
                    '&:hover': {cursor: 'pointer'} }}
            >
            <TableCell component="th" scope="row">
                <Image
                    src={assets.agent.small}
                    alt="character icon"
                    width="75"
                    height="75"
                />
              </TableCell>

              <TableCell component="th" scope="row"
              sx={{maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis"}}>
                {name} #{tag}
              </TableCell>
              <TableCell align="right">{character}</TableCell>
              <TableCell align="right">{currenttier_patched}</TableCell>
              <TableCell align="right"> {stats.score} </TableCell>
              <TableCell align="right">{stats.kills} / {stats.deaths} / {stats.assists}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
