import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Album(props) {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ marginTop: "0px" }}>
        {/* Hero unit */}

        <Container sx={{ py: 8 }} maxWidth='md'>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {props.cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  <CardMedia
                    style={{ paddingTop: "0.25%" }}
                    component='img'
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image='https://source.unsplash.com/random'
                    alt='random'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {card.title}
                    </Typography>
                    <Typography>{card.description}</Typography>
                    <Typography>{card.brand}</Typography>
                    <Typography>{card.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Explore</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component='footer'></Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
