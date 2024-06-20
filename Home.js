
import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'

const Home = () => {
  const handleSubmit = () => {};
  return (

 
 
    <div>
    <form onSubmit={handleSubmit}>
    <Box 
    marginLeft="auto"
    marginRight="auto"
    width={300}
    display="flex"
    flexDirection={"column"}
    justifyContent="center"
    alignItems="center"
    >
 
      

  <Typography variant="h2">Signup</Typography>

  <TextField variant="outlined" placeholder="Name" margin="normal" />
  <TextField variant="outlined" placeholder="Email" margin="normal" />
  <TextField variant="outlined" placeholder="Password" margin="normal" />
  <Button  variant="contained" type="submit">Signup</Button>

  
</Box>
      </form>
    </div>
  )
};

export default Home;
