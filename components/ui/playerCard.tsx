import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useEffect, useState } from "react";
import fetchAccount, { AccountDetails } from '../valorantAPI/fetchAccount/fetchAccount';
import { fetchMatches } from '../valorantAPI';

export default function PlayerCard() {

    const accInfo = ["FrozenSonar", "8838"]
    const accInfo2 = ["FrozenSonar", "8838"]
  
    const [playerInfo, setplayerInfo] = useState<AccountDetails>()
    const [matchesInfo, setmatchInfo] = useState<any>()
  
    useEffect( () => {
      fetchAccount(accInfo2[0], accInfo2[1]).then((accountDetails: AccountDetails) => {
        setplayerInfo(accountDetails)
      })
  
     fetchMatches("ap", "FrozenSonar", "8838", "10", null).then((matchDetails: any) => {
        setmatchInfo(matchDetails)
      })
  
    }, [])

    const card  = playerInfo?.card?.large
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {card}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {playerInfo?.name}
          </Typography>
          <Typography display="block" variant="body2" color="text.secondary">
            Player Tag:#{playerInfo?.tag}
            Region: {playerInfo?.region}
            Account Level: {playerInfo?.account_level}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}