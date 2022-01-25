import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {

const { 
    error, 
    isPlayerInfoValid
    } = useContext(UserContext);
    

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  return (
    <Stack spacing={2} sx={{ width: '100%' }}>

    { isPlayerInfoValid && 
     <Snackbar open={isPlayerInfoValid} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Player Info Confirmed!
        </Alert>
      </Snackbar> 
      }

    { error && 
     <Snackbar open={!isPlayerInfoValid} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Encountered error: {error}
        </Alert>
      </Snackbar> 
      }

    </Stack>
  );
}