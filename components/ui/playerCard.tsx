import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, ListItem, ListItemText } from '@mui/material';
import React, { useEffect, useState } from "react";
import fetchAccount from '../valorantAPI/fetchAccount/fetchAccount';
import { fetchMatches } from '../valorantAPI';
import '@fontsource/roboto/400.css';
import fetchMMR from '../valorantAPI/fetchMMR/fetchMMR';
import { List } from '@mui/material';
import { MMRDetails } from '../valorantAPI/types/mmrDetails';
import { AccountDetails } from '../valorantAPI/types/accDetails';

interface PlayerCardProps {
  userName: string,
  tag: string
}


export default function PlayerCard(props: PlayerCardProps) {

    const accInfo = [props.userName, props.tag]
  
    const [playerInfo, setplayerInfo] = useState<AccountDetails>()
    const [mmrInfo, setmmrInfo] = useState<MMRDetails>()
  
    useEffect( () => {
      fetchAccount(accInfo[0], accInfo[1]).then((accountDetails: AccountDetails) => {
        setplayerInfo(accountDetails)
      })
  
      //TODO: change region to dynamic
      fetchMMR("v1", "ap", accInfo[0], accInfo[1]).then((mmrDetails: MMRDetails) => {
        setmmrInfo(mmrDetails)
      })

    }, [])

    const card  = playerInfo?.card?.large
    
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image= {card}
          alt="player card picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {playerInfo?.name}#{playerInfo?.tag}
          </Typography>
          <Typography display="block" variant="body2" color="text.secondary">
            <List>
              <ListItemText>Region: {playerInfo?.region}</ListItemText>
              <ListItemText>Account Level: {playerInfo?.account_level}</ListItemText>
              <ListItemText>Rank: {mmrInfo?.currenttierpatched}</ListItemText>
              <ListItemText>Elo: {mmrInfo?.elo} ({mmrInfo?.mmr_change_to_last_game}) </ListItemText>
            </List>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}