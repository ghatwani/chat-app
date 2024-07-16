import { Edit } from "@mui/icons-material";
import { useMediaQuery } from '@mui/material';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography
} from "@mui/material";
import React from "react";
import UserInfo from "../partials/UserInfo";
import AfterLoginHeader from "../partials/AfterLoginHeader";
import PreviousConnCard from "../partials/PreviousConnCard";
import UserInfoDialog from "../dialogs/UserInfoDialog";

const Home = () => {
  const handleMentor = () => {
    alert("mentor")
  }

  const handleMentee = () => {
    alert("mentee")
  }
  

  const isLargeScreen = useMediaQuery('(min-width:1000px)');
  return (
    <>
    <UserInfoDialog/>
      <AfterLoginHeader />
      <Grid container direction={"row"}>
        <Grid item sm={6.5} lg={4} display={{
          xs:"none",
          sm:"block"
        }}>
          <Stack width={"60%"} margin={"0 1rem"}>
          <UserInfo/>
          <PreviousConnCard/>
          </Stack>
        </Grid>
        <Grid xs={12} sm={3.5} lg={7.5}>
          <Stack
          flexGrow={
            {
              sm:1
            }
          }
            direction={ {xs:"column", lg:"row"} }
            spacing={{
              xs:"1rem",
              lg:"7rem"
            }}
            sx={{
              height: "85vh",
              alignItems: "center",
              justifyContent: "center",

            }}
          >
             <Tooltip title="Find a Mentor" arrow placement="top" disableHoverListener={isLargeScreen}>
            <Box
              sx={{
                width: {
                  xs:"35vh",
                  sm:"30vw",
                  lg:"45vh"
                },
                height: {
                  xs:"35vh",
                  sm:"30vw",
                  lg:"45vh"
                },
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center"
              }}
            >
             
              <IconButton sx={{ height:"100%", width: "100%", backgroundColor: "rgb(0, 0, 0, 0.8)", "&:hover": {bgcolor: "black"}}} onClick={handleMentor}>
                <img src="/img/mentor.svg" alt="" style={{height: "100%", width: "100%", padding: "3rem"}} />
              </IconButton>
            

              <Typography variant="h3" color="grey" margin="0.5rem" sx={{
                display:{
                  xs:"none",
                  lg:"block"
                }
              }}>MENTOR</Typography>
            </Box>
            </Tooltip>
            <Tooltip title="Find a Mentee" arrow placement="top" disableHoverListener={isLargeScreen}>
            <Box
              sx={{
                width: {
                  xs:"35vh",
                  sm:"30vw",
                  lg:"45vh"
                },
                height: {
                  xs:"35vh",
                  sm:"30vw",
                  lg:"45vh"
                },
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                textAlign:"center"
              }}
            >
              <IconButton sx={{ height:"100%", width: "100%", backgroundColor: "rgb(0, 0, 0, 0.8)", "&:hover": {bgcolor: "black"}}} onClick={handleMentee}>
                <img src="/img/mentee.svg" alt="" style={{height: "100%", width: "100%", padding: "3rem"}} />
              </IconButton>
              <Typography variant="h3" color="grey" margin="0.5rem" sx={{
                display:{
                  xs:"none",
                  lg:"block"
                }
              }}>MENTEE</Typography>
            </Box>
            </Tooltip>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
