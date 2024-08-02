import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import  {Container}  from '@mui/material';
import BannerImage from "../images/img2.png";
import VectorImage from "../images/Vector 9.png";

export default function AddBannerImage() {
  return (
    <>
    <Container>
      <Box sx={{ flexGrow: 1, background: "#F4F6F5", borderRadius:"32px" }}>
        <Grid
          container
          spacing={0}
          sx={{
            marginLeft: 5,
            display: "flex",
            justifyContent: "center",
            transform: "rotate(-1deg)",
          }}
          maxWidth="xl"
        >
          <Grid item  lg={6}>
            <Typography variant="h2" gutterBottom sx={{ fontSize:"96px", fontWeight:900}}>
              Let's
            </Typography>

            <Typography variant="h2" gutterBottom sx={{ fontSize:"96px", fontWeight:900}}>
              Explore
            </Typography>

            <Typography
              variant="h2"
              gutterBottom
              
              sx={{ background: "#EBD96B", display: "inline-block", fontSize:"96px", fontWeight:900}}
            >
              Unique
            </Typography>

            <Typography variant="h2" gutterBottom sx={{ fontSize:"96px", fontWeight:900}}>
              Clothes
            </Typography>

            <Typography variant="h6" gutterBottom>
              Live for Influential and Innovative fashion!
            </Typography>
            <img className="m-2" src={VectorImage} alt="img" />

            <Button
              variant="contained"
              sx={{ color: "white", backgroundColor: "black" }}
            >
              Shop Now
            </Button>
          </Grid>
          <Grid item  lg={6} md={6} sx={{ display:'flex', justifyContent:'end'}}   >
            <img   src={BannerImage}  alt='BannerImage' />
          </Grid>
        </Grid>
      </Box>
    </Container>
    </>
  );
}
