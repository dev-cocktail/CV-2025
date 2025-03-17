import React from "react";
import { Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Exp from "./Exp/Exp";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        p: { xs: 0, md: 2 },
      }}
    >
      <Paper
        elevation={2}
        sx={{
          overflow: "hidden",
          pt: { xs: 0, md: 2 },
          background:
            "linear-gradient(to bottom right, Gainsboro -25%, white 25%)",
          borderRadius: { xs: 0, md: 1 },
          position: "relative",
        }}
      >
        {/* Верхний блок */}
        <Grid container size={12}>
          <Main />
        </Grid>
        <Grid container sx={{ px: { md: 2 } }}>
          <Grid size={{ xs: 12, md: 8 }} sx={{ order: { xs: 2, md: 1 } }}>
            {/* Секция с опытом и портфолио */}
            <Exp />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} sx={{ order: { xs: 1, md: 2 } }}>
            {/* Секция с навыками и образованием */}
            <Skills />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
