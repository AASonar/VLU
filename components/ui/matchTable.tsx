import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MatchDetails, Metadata } from '../valorantAPI/types/matchDetails';
import { useEffect, useState } from 'react';
import { fetchMatches } from '../valorantAPI';
import fetchMatch from '../valorantAPI/fetchMatch/fetchMatch';

interface MatchTableProps {
    userName: string,
    tag: string
  }
  
/*
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}
*/

const getMatchMetaData = async (
    key: number,
    matchInfo: MatchDetails
): Promise<Metadata> => {

    return {
            matchid: matchInfo[key].metadata.matchid,
            map : matchInfo[key].metadata.map,
            mode : matchInfo[key].metadata.mode,
            rounds_played: matchInfo[key].metadata.rounds_played,
            cluster: matchInfo[key].metadata.cluster
        }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function BasicTable() {

    const [matchInfo, setmatchInfo] = useState<MatchDetails>()
    const [moreInfo, setmoreInfo] = useState<Metadata>()
    let rows: any = []

    useEffect(() => {
  
     //TODO: change region to dynamic
     fetchMatches("ap", "Kaiserin", "9988", "3", null).then((matchDetails: MatchDetails) => {
         setmatchInfo(matchDetails)
       })

    /*fetchMatch("5bd043d9-b79b-4685-8acd-37ed28521e1b") */
    
    delay(300).then(() => { getMatchMetaData(0, matchInfo!).then((moreInfo: Metadata) => {
        setmoreInfo(moreInfo)
        })}) 

    },[])
     
    if (matchInfo) {
        console.log(moreInfo)
    }

    if (matchInfo) {
    rows = [
        moreInfo!
        ]
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
          {rows.map((row) => (
            <TableRow
              key={row.matchid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {}
              </TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function timeout(arg0: () => void, timeout: any) {
    throw new Error('Function not implemented.');
}
