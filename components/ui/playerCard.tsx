import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, ListItem, ListItemText } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import fetchAccount from "../valorantAPI/fetchAccount/fetchAccount";
import { fetchMatches } from "../valorantAPI";
import "@fontsource/roboto/400.css";
import fetchMMR from "../valorantAPI/fetchMMR/fetchMMR";
import { List } from "@mui/material";
import { MMRDetails } from "../valorantAPI/types/mmrDetails";
import { AccountDetails, PlayerCardProps } from "../valorantAPI/types/accDetails";
import { UserContext } from "../UserContext";


export default function PlayerCard({playerInfo}: PlayerCardProps) {

  const { 
    error, 
    setError,
  } = useContext(UserContext);

  const [mmrInfo, setmmrInfo] = useState<MMRDetails>();
  
  useEffect(() => {
    
    //TODO: change region to dynamic
    fetchMMR("v1", "ap", playerInfo?.name, playerInfo?.tag).then(
      (mmrDetails: MMRDetails) => {
        setmmrInfo(mmrDetails)
      }).catch((err: Error) => {
        console.log("error", err)
        setError!(err)
      })

  }, [])

  const card = playerInfo?.card?.large;

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={card}
          alt="player card picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {playerInfo?.name}#{playerInfo?.tag}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <List>
              <ListItemText>Region: {playerInfo?.region}</ListItemText>
              <ListItemText>
                Account Level: {playerInfo?.account_level}
              </ListItemText>
              <ListItemText>Rank: {mmrInfo?.currenttierpatched}</ListItemText>
              <ListItemText>
                Elo: {mmrInfo?.elo} (
                <Typography display="inline" color= {
                  mmrInfo?.mmr_change_to_last_game && mmrInfo?.mmr_change_to_last_game < 0 ? "red" : "green"}>{
                  mmrInfo?.mmr_change_to_last_game}</Typography>)
              </ListItemText>
            </List>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
