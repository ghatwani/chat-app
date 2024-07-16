import { Edit } from "@mui/icons-material";
import {
    Avatar,
    IconButton,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import React from 'react';
const handleEdit = () => {
    alert("edit")
}

const UserInfo = () => {
  return (
    <Stack
    sx={{
      height: "37vh",
      margin: "1rem",
    }}
    >
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        backgroundColor: "#fafafa",
        borderRadius: "10px",
        gap: "1rem",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          // justifyContent:"space-between",
          padding: " 0.5rem 1rem",
          gap: "1rem",
        }}
      >
        <Avatar></Avatar>
        <Typography>Name</Typography>
      </Stack>
      <Stack
        sx={{
          height: "30%",
          margin: "0.5rem 1rem",
          backgroundColor: "black",
          borderRadius: "1rem",
          gap: "1rem",
          color:"white"
        }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          margin={"0 0.5rem"}
          p={"0.5rem"}
        >
          <Typography variant="h7" sx={{ fontWeight: 600 }}>
            Experience
          </Typography>
          <IconButton onClick={handleEdit}>
            <Edit
              sx={{
                fontSize: 15,
                color:"white"
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: "40%",
          margin: " 0 1rem",
          backgroundColor: "black",
          borderRadius: "1rem",
          padding: "0.5rem",
          color:"white"
        }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          margin={"0 0.5rem"}
        >
          <Typography variant="h7" sx={{ fontWeight: 600 }}>
            Interest
          </Typography>
          <IconButton onClick={handleEdit}>
            <Edit
              sx={{
                fontSize: 15,
                color:"white"
              }}
            />
          </IconButton>
        </Stack>
          {/* {content} */}
    
      </Stack>
    </Paper>
    </Stack>
  )
}

export default UserInfo
