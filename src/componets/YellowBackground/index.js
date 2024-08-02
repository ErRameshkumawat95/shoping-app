import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Container } from "@mui/material";

export default function YellowBackground() {
  return (
    <>
    <Container>
      <Box sx={{ flexGrow: 1, backgroundColor: "#EBD96B" }}>
        <Grid
          container
          spacing={0}
          sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}
          maxWidth="xl"
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              textAlign:'center'
            }}
          >
            <Typography variant="h4" gutterBottom color={"white"} >
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </Typography>

            <Typography variant="h6" gutterBottom color={"white"} >
              Type your email down below and be young wild generation
            </Typography>

            <TextField
            sx={{outline:'none', background:'#fff'}}
              label="Add your Email Here"
              InputProps={{
               
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      sx={{ color: "white", backgroundColor: "black" }}
                    >
                      Send
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
}
