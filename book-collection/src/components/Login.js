import { Button, Box,  Checkbox, FormControlLabel, FormLabel, TextField  } from '@mui/material';
import React from 'react'

const Login = () => {

  return (
    <form >
      <Box 
      display="flex" 
      flexDirection="column" 
      justifyContent={"center"} 
      maxWidth={700}
      alignContent={"center"}
      alignSelf={"center"}
      marginLeft={"auto"}
      marginRight={"auto"}
      marginTop={1}
      >
      <FormLabel>Name</FormLabel>
      <TextField   margin="normal" fullWidth variant="outlined" name="name" />
      <FormLabel>Email</FormLabel>
      <TextField margin="normal" fullWidth variant="outlined" name="email" />

      
      <FormLabel>Password</FormLabel>
      <TextField   margin="normal" fullWidth variant="outlined" name="password" />
     <Button variant="contained" type="submit">Login</Button>
      </Box>
    </form>
  );
};

export default Login;
