import { PersonAdd } from '@mui/icons-material'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { blueColor } from '../constants/color'

const PrevConnectionCard = ({avatar, name, username}) => {
  const handleAddConnection = () => {
    alert("added")
  }
  return (
    <Stack sx={{
        flexDirection:"row",
        backgroundColor:"black",
        padding:"0.5rem",
        borderRadius:"0.5rem",
        gap:"1rem",
        position:"relative",
        alignItems:"center",
        margin:"0.2rem 0"
    }}>
        <Avatar avatar={avatar}/>
        <Box sx={{
            display:"flex",
            flexDirection:"column"
        }}>
            <Typography variant='h7' color={"white"}>{name}</Typography>
            <Typography variant='caption' color={"grey"}>{username}</Typography>
        </Box>
        <IconButton sx={{
            position:"absolute",
            right:"0.5rem",
            backgroundColor: blueColor,
            color: "white",
            textAlign: "center",
            ':hover': {
                bgcolor: "blue"
            }
        }}
        onClick={handleAddConnection}>
            <PersonAdd/>
        </IconButton>
    </Stack>
  )
}

export default PrevConnectionCard
