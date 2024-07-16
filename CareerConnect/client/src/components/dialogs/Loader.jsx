import { Container, Stack, Typography } from "@mui/material";
import React from "react";
const Loader = () => {
  return (
    <>
      <Container component={"body"} sx={{ width: "100vw", height: "100vh",justifyContent:"center", alignItems:"center" }}>
        <Stack sx={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center", gap:"3rem"}}>
        <video controls={false} autoPlay loop muted src="/video/icons8-loading-infinity.mp4"/>
        <Typography variant="h5" fontWeight={700} sx={{color:"grey",fontStyle:"italic" }}>Almost there... grabbing some digital snacks!</Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Loader;
