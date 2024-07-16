import {
    Box,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import React from 'react';
import PrevConnectionCard from "../shared/PrevConnectionCard";
const PreviousConnCard = () => {
  return (
    <Stack >
              <Paper
                elevation={3}
                sx={{
                  margin: "0 1rem",
                  padding: "0 1rem",
                  borderRadius: "10px",
                  maxHeight: "42vh",
                  overflowY: "auto",
                  flexGrow:1
                }}
              >
                <Typography variant="h7" sx={{ fontWeight: 500, padding:"1rem" }}>
                  Previous Connections:
                </Typography>
                <Box
                  sx={{
                    gap: "1rem",
                  }}
                >
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                  <PrevConnectionCard
                    name={"divya"}
                    username={"@diivvyyaa__"}
                  />
                </Box>
              </Paper>
            </Stack>
  )
}

export default PreviousConnCard