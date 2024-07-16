import { Avatar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React from 'react'



const UserInfoDialog = () => {
  const handleUpdate=(params) => {
    alert("updated")
  }

  const handleCLose=(params) => {
    alert("bhaad m jao")
  }
  
  
  return (
    <Dialog>
      <DialogTitle sx={{ textAlign: "center", fontSize: "30px" }}>Edit Profile</DialogTitle>
      <DialogContent sx={{
        padding:"10px 39px",
        textAlign: "center"
      }} >
        <Stack spacing={"1rem"} sx={{ justifyContent: "center", alignItems: "center", blockSize: "lg" }}>
          <Avatar sx={{ width: "8rem", height: "8rem" }}></Avatar>
          <TextField fullWidth label="name" />
          <TextField fullWidth label="profession" />
          <TextField fullWidth label="experience in years" />
          <TextField fullWidth label="Interest (mention multiple using comma)" />
        </Stack>
      </DialogContent>
    <DialogActions sx={{
        gap:"1rem",
        padding:"10px 79px",
        justifyContent:"center",
        margin:"0.5rem"
      }}>
      <Button color="primary" variant='contained' onClick={handleUpdate}>Update</Button>
      <Button color="error" onClick={handleCLose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UserInfoDialog;