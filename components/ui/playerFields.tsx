import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Grid, InputAdornment } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { AccountDetails, UserInfo } from '../valorantAPI/types/accDetails';
import { UserContext } from '../UserContext';
import { fetchAccount } from '../valorantAPI';

import { LoadingButton } from '@mui/lab';
import SendIcon from '@mui/icons-material/Send';

export default function FormPropsTextFields() {
 
  const { 
    playerInfo,
    setPlayerInfo,
    error, 
    setError,
    sbOpen,
    setSbOpen,
    sbErrorOpen,
    setSbErrorOpen
  } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState<string>()
  const [userTag, setUserTag] = useState<string>()

  function handleClick() {
    if(userName && userTag){
      setLoading(true);
      fetchAccount(userName, userTag).then(
        (accountDetails: AccountDetails) => {
          setPlayerInfo!(accountDetails)
          setSbOpen!(true)
          setLoading(false)
        }).catch((err: Error) => {
          setError!(err);
          setSbErrorOpen!(true)
          setLoading(false)
        })
    }
  }

  const handleChangeName = (event:any) => {
    setUserName(event.target.value)
  }

  const handleChangeTag = (event:any) => {
    setUserTag(event.target.value)
  }

  return (
    
      <Grid container spacing={2}
      component="form"
      noValidate
      autoComplete="off" 
      sx={{
        '& .MuiTextField-root': { marginBottom: 1},
      }}
      >
        <Grid item xs>
          <TextField
            required
            id="outlined-required"
            label="Player Name"
            value={userName}
            onChange={handleChangeName}
            sx={{ width: '22ch'}}
          />
        </Grid>
        <Grid item xs>
        <TextField
          required
          label="Player Tag"
          value={userTag}
          onChange={handleChangeTag}
          id="outlined-start-adornment"
          sx={{ width: '12ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">#</InputAdornment>,
          }}
        />
        </Grid>
          <Grid item xs>
          <LoadingButton
            onClick={handleClick}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            sx={{ width: '39.5ch', height: '7ch', marginTop: -2, marginBottom: 1}}
          >
          Find Player
        </LoadingButton>
        </Grid>
      </Grid>

  );
}