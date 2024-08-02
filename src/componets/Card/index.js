import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EastIcon from "@mui/icons-material/East";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import { CardActionArea } from "@mui/material";
import BackgroundImage from "../images/Vector 9.png";
import CardImg1 from "../images/img3.png";
import CardImg2 from "../images/img3.png";
import CardImg3 from "../images/img3.png";

export default function BasicGrid() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              margin: 5,
              fontSize: "48px",
              fontWeight: 900,
              backgroundImage: `url(${BackgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "250px",
              backgroundPositionY: "25px",
            }}
          >
            NEW ARRIVALS
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={4} sm={12}>
                <Card sx={{ boxShadow: "none" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src={CardImg1}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Box
                        lg={4}
                        md={3}
                        sm={12}
                        xs={12}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ marginTop: 2 }}
                          >
                            Hoodies & Sweetshirt
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            Explore Now
                          </Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                          <EastIcon />
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item lg={4} md={4} sm={12}>
                <Card sx={{ boxShadow: "none" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src={CardImg2}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ marginTop: 2 }}
                          >
                            Coats & Parkas
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            Explore Now
                          </Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                          <EastIcon />
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item lg={4} md={4} sm={12}>
                <Card sx={{ boxShadow: "none" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      src={CardImg3}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ marginTop: 2 }}
                          >
                            Tees & T-Shirt
                          </Typography>

                          <Typography variant="body2" color="text.secondary">
                            Explore Now
                          </Typography>
                        </Box>
                        <Box sx={{ marginTop: 3 }}>
                          <EastIcon />
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
}
