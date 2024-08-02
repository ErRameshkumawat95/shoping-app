import * as React from 'react';
import Grid from "@mui/material/Grid";
import  {Container}  from '@mui/material';
import ListImage1 from "../images/img14.png";
import ListImage2 from "../images/img15.png";
import ListImage3 from "../images/img16.png";
import ListImage4 from "../images/img17.png";
import ListImage5 from "../images/img18.png";
import ListImage6 from "../images/img21.png";

export default function AddList(){
    return(
        <>
        <Container>
            <Grid container spacing={0} sx={{ marginTop:5,  display:"flex",justifyContent:"center", backgroundColor:'#EBD96B' }} maxWidth="xl">
            <Grid item lg={2} sm={3} xs={6} sx={{padding:4, marginTop:2}} >
            <img src={ListImage1}   alt='ListImage1'/>
            </Grid>
    
            <Grid item lg={2} sm={3} xs={6} sx={{padding:4, marginTop:2}}>
            <img src={ListImage2}  alt='ListImage2' />
            </Grid>
    
            <Grid item lg={2} sm={3} xs={6} sx={{padding:4, marginTop:2}}>
            <img src={ListImage3}  alt='ListImage3' />
            </Grid>
            
            <Grid item lg={2} sm={3} xs={6} sx={{padding:4, marginTop:2}}>
            <img src={ListImage4}  alt='ListImage4' />
            </Grid>
    
            <Grid item lg={2} sm={3} xs={6} sx={{padding:4, marginTop:2}}>
            <img src={ListImage5}  alt='ListImage5'  />
            </Grid>
            
            <Grid item lg={2} sm={3} xs={6} sx={{padding:4, marginTop:2}}>
            <img src={ListImage6}  alt='ListImage6' />
            </Grid>
    
            </Grid>
        </Container>
        </>
        )
    }