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
import { fetchMatches } from '../valorantAPI';
import fetchMatch from '../valorantAPI/fetchMatch/fetchMatch';
import { PlayerCardProps } from '../valorantAPI/types/accDetails';
import { MatchContext, UserContext } from '../UserContext';

export default function BasicTable({playerInfo}: PlayerCardProps) {

    const { setError } = useContext(UserContext);
    const { matchID, setMatchID } = useContext(MatchContext)

    const [matchDetails, setMatchDetails] = useState<MatchDetails>([]);

    useEffect(() => {
      if(!playerInfo?.name) {
        return;
      }
      console.log(playerInfo);
      
     //TODO: change region to dynamic
     fetchMatches("ap", playerInfo?.name, playerInfo?.tag).then((matchDetails: MatchDetails) => {
        console.log(matchDetails)
        setMatchDetails(matchDetails)
       }).catch((err: Error) => {
          setError!(err)

       })

    /*fetchMatch("5bd043d9-b79b-4685-8acd-37ed28521e1b") */
 
    },[playerInfo, setError])


    function handleClick(matchid:string) {
      setMatchID!(matchid)
      if(matchID) {
        fetchMatch(matchID).then((matchDetailsData:MatchDetailsData) => {
          console.log(matchDetailsData)
          
        })
        //fetchMatch(matchID)
    }
    }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Match ID #</TableCell>
            <TableCell align="right">Map</TableCell>
            <TableCell align="right">Mode</TableCell>
            <TableCell align="right">Rounds Played</TableCell>
            <TableCell align="right">Cluster</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matchDetails.map(({metadata: {matchid, map, mode, rounds_played, cluster}}) => (
            <TableRow
              key={matchid}
              onClick={() => {handleClick(matchid)}}
              hover={true}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, 
                    '&:hover': {cursor: 'pointer'}, }}
            >
              <TableCell component="th" scope="row"
              sx={{maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis"}}>
                {matchid}
              </TableCell>
              <TableCell align="right">{map}</TableCell>
              <TableCell align="right">{mode}</TableCell>
              <TableCell align="right">{rounds_played}</TableCell>
              <TableCell align="right">{cluster}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
