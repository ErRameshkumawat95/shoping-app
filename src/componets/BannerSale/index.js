import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import  {Container}  from '@mui/material';
import BannerImage from "../images/img7.png";

export default function BannerSale() {
  return (
    <>
    <Container>
      <Box sx={{ flexGrow: 1,backgroundColor: '#EBD96B'}}>
        <Grid
          container
          spacing={0}
          sx={{marginTop:4,
            padding:"60px",
            display: "flex",
            justifyContent: "center",
          }}
          maxWidth="xl"
        >
          <Grid item lg={6}  md={12} sm={12} xs={12} sx={{display:'flex', justifyContent:'center'}}>
            <img src={BannerImage} alt="BannerImage" />
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={6} sx={{ display:'flex', flexDirection:'column', marginTop:5, justifyContent:'center'}}>
            <Typography variant="h2" gutterBottom 
             sx={{ background: "#FFFFFF", display: "inline-block",  fontSize:"48px", fontWeight:900 }}>
              PAY DAY
            </Typography>

            <Typography variant="h2" gutterBottom sx={{ fontSize:"48px", fontWeight:900}}>
              SALE NOW
            </Typography>

            <Typography
              variant="h5" gutterBottom
            >
             Spend minimal $100 get 30% off voucher code for your next purchase
            </Typography>

            <Typography variant="h4" gutterBottom>
            1 June - 10 June 2021
            </Typography>

            <Typography variant="h6" gutterBottom>
            *Terms & Conditions apply
            </Typography>
            

            <Button
              variant="contained"
              sx={{ color: "white", backgroundColor: "black" }}
            >
              Shop Now
            </Button>
          </Grid>
        </Grid>
      </Box>
      </Container>
    </>
  );
}
