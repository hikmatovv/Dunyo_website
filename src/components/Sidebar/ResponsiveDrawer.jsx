import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
// import Container from '@mui/material/Container'

import NewspaperIcon from "@mui/icons-material/Newspaper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: "0px",
  boxShadow: "none",
  ":hover": { cursor: "pointer" },
}));

export default function AutoGrid({ handleDrawerToggle }) {
  const [mobileClose, setMobileClose] = React.useState(false);

  handleDrawerToggle = () => {
    setMobileClose(!mobileClose);
  };

  return (
    // <Container>
      <Box  className="w-75 mx-auto xs">
        {/* <Grid container spacing={3}>
        <Grid item xs={6}>
          <Item>MENU</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 0, display: { sm: "none", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Item>
        </Grid>
      </Grid> */}
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item sx={{ fontSize: "11.5px", color: "black" }}>
              <NewspaperIcon /> &nbsp; SO`NGI YANGILIKLAR
            </Item>
            <Item sx={{ fontSize: "11.5px", color: "black" }}>
              <NewspaperIcon /> &nbsp; ASOSIY YANGILIKLAR
            </Item>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item
              sx={{
                margin: "5px 0px",
                borderLeft: "3px solid #66CCFF",
                fontSize: "11px",
                color: "black",
                ":hover": { color: "#66ccff", transition: "0.4s ease" },
              }}
            >
              MAHALIY
            </Item>
            <Item
              sx={{
                margin: "5px 0px",
                borderLeft: "3px solid #99FFFF",
                fontSize: "11px",
                color: "black",
                ":hover": { color: "#99ffff", transition: "0.4s ease" },
              }}
            >
              DUNYO
            </Item>
            <Item
              sx={{
                margin: "5px 0px",
                borderLeft: "3px solid #FF9900",
                fontSize: "11px",
                color: "black",
                ":hover": { color: "#ff9900", transition: "0.4s ease" },
              }}
            >
              PUL
            </Item>
            <Item
              sx={{
                margin: "5px 0px",
                borderLeft: "3px solid #FFFF00",
                fontSize: "11px",
                color: "black",
                ":hover": { color: "#ffff00", transition: "0.4s ease" },
              }}
            >
              MADANIYAT
            </Item>
            <Item
              sx={{
                margin: "5px 0px",
                borderLeft: "3px solid #CC99FF",
                fontSize: "11px",
                color: "black",
                ":hover": { color: "#cc99ff", transition: "0.4s ease" },
              }}
            >
              LAYFSTAYL
            </Item>
            <Item
              sx={{
                margin: "5px 0px",
                borderLeft: "3px solid #FF6699",
                fontSize: "11px",
                color: "black",
                ":hover": { color: "#ff6699", transition: "0.4s ease" },
              }}
            >
              SPORT
            </Item>
            <Item
              sx={{
                margin: "5px 0px",
                fontSize: "12px",
                ":hover": { color: "gray" },
              }}
            >
              MULTIMEDIA
            </Item>
            <Item
              sx={{
                margin: "5px 0px",
                fontSize: "12px",
                ":hover": { color: "gray" },
              }}
            >
              KOLUMNISTLAR
            </Item>
          </Grid>
        </Grid>
      </Box>
    // </Container>
  );
}
