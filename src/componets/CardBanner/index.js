import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import  {Container } from '@mui/material';
import EastIcon from "@mui/icons-material/East";
import  BackgroundImage from "../images/Vector 9.png"
import CardImg1 from "../images/img8.png";
import CardImg2 from "../images/img9.png";

const Item = styled(Paper)(({ theme }) => ({}));

export default function BasicGrid() {
  return (
    <>
    <Container>

    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" sx={{ margin: 4,  fontSize:"48px", fontWeight:900, backgroundImage: `url(${BackgroundImage})`, backgroundRepeat:'no-repeat', backgroundPositionX:"280px", backgroundPositionY:"25px" }}>
        Young's Favroute
      </Typography>

      <Grid container spacing={2}>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
         
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Item sx={{ marginTop: 2, boxShadow: "none" }}>
            <img src={CardImg1} className="img" alt="CardImg1"/>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ marginTop: 2 }}
                >
                  Trading on Instragram
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Explore Now
                </Typography>
              </Box>

              <Box sx={{ marginTop: 3 }}>
                <EastIcon />
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Item sx={{ marginTop: 2, boxShadow: "none" }}>
            <img src={CardImg2} alt="CardImg"/>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ marginTop: 2 }}
                >
                  All under $40
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Explore Now
                </Typography>
              </Box>

              <Box sx={{ marginTop: 3 }}>
                <EastIcon />
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </>
  );
}


