import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import {Container}  from '@mui/material';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
    <Container>
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <Grid
        container
        spacing={0}
        columns={12}
        sx={{ backgroundColor: "black", color: "white", padding: 5 }}
      >
        <Grid item lg={3} md={6} sm={12} xs={12} sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Typography variant="h4">FASHION</Typography>

          <Typography sx={{ color: "#8E8E8E" }}>
            Complete your style with awesome clothes from us.
          </Typography>

          <Box sx={{ color: "yellow" }}>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <LinkedInIcon />
          </Box>
        </Grid>

        <Grid item  lg={3} md={6} sm={12} xs={12}  sx={{display:'flex', flexDirection:'column', justifyContent:'center',  alignItems:'center'}}>
          <Typography variant="h5">Company</Typography>

          <Box sx={{ color: "#8E8E8E", varient: "h6" }}>
            <Typography >About</Typography>
            <Typography>Contact Us</Typography>
            <Typography>Support</Typography>
            <Typography>Careers</Typography>
          </Box>

        </Grid>

        <Grid item lg={3} md={6} sm={12} xs={12}  sx={{display:'flex', flexDirection:'column', justifyContent:'center',  alignItems:'center'}}>
          <Typography variant="h5">Quick Link</Typography>

          <Box sx={{ color: "#8E8E8E", varient: "h6" }}>
            <Typography>Share Location</Typography>
            <Typography>Order Tracking</Typography>
            <Typography>Size Guide</Typography>
            <Typography>FAQs</Typography>
          </Box>
          
        </Grid>

        <Grid item lg={3} md={6} sm={12} xs={12}  sx={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'  }}>
          <Typography variant="h5">Legal</Typography>

          <Box sx={{ color: "#8E8E8E", varient: "h6" }}>
            <Typography>Terms & conditions </Typography>
            <Typography>Privacy Policy</Typography>
            
          </Box>
          
        </Grid>

      </Grid>
    </Box>
    </Container>
    </>
  );
}
