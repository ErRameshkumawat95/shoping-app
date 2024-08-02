import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import  {Container}  from '@mui/material';
import CardImg1 from "../images/img12.png";
import Image1 from '../images/img19.png';
import Image2 from '../images/img11.png';

const Item = styled(Paper)(({ theme }) => ({}));

export default function Mobile() {
  return (
    <>
    <Container>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display:'flex', alignItems:'center', justifyContent: 'center' }}
        >
          <Item sx={{  padding:5, boxShadow: "none", display:'flex',   flexDirection:'column', justifyContent:'center' }}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontSize:"48px", fontWeight:900, lineHeight:"72px"}}
            >
              DOWNLOAD APP & GET THE VOUCHER!
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </Typography>

        <Grid>

            <img src={Image1}  alt="Image1"/>
            <img src={Image2}  alt="Image2"/>
        </Grid>

          </Item>
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ display: "flex", alignItems:'center', justifyContent: "center" }}
        >
          <Item sx={{ marginTop: 2, boxShadow: "none" }}>
            <img src={CardImg1} alt="CardImg1"/>
          </Item>
        </Grid>
      </Grid>
    </Box>

    </Container>
    </>
  );
}
