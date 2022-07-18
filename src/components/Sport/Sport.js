import React from "react";
import dba from "./dba.json";
import "./index.css";
import {
  Box,
  Grid,
  Paper,
  Button,
  CardMedia,
  Card,
  Container,
  Typography,
  Stack
} from "@mui/material";
import Forward5Icon from "@mui/icons-material/Forward5";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Footer from "../Footer/Footer";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import TelegramIcon from '@mui/icons-material/Telegram';
import Card1 from "./Card/index"

import "./index.css"
const Sport = () => {
  return (
    <>
          <Container sx={{mt:"8%"}}

>
  <Stack spacing={2} sx={{width:"100%",border:"1px solid blue" ,height:"4rem"}}>
    <Box sx={{display:"flex",padding:"2%"}}>
      <Box sx={{display:"flex",  justifyContent: "flex-start",width:"100%",gap:"3%"}}>
        <Typography>USD 10887.87 ^</Typography>
        <Typography>RUB 168.84 </Typography>
        <Typography>EUR 11131.76 </Typography>
      </Box>
      <Box sx={{display:"flex",  justifyContent: "flex-start",width:"100%",gap:"3%"}}
      ml={{lg:"10%",md:"35%",sm:"0%",xs:"0%"}}
      pl={{lg:"5%",md:"35%",sm:"0%",xs:"0%"}}
      >
        <Button>
          <GoogleIcon />{" "} Google Play
        </Button>
        <Button>
          <AppleIcon />{" "} App Store
        </Button>
        <Button>
          <TelegramIcon />{" "} Telegram
        </Button>
      </Box>
    </Box>
  </Stack>

  <Card sx={{ width:"99%",mt:"2%",mb:"1%"}}>
<CardMedia
  component="img"
  height="100"
  image="img.png"
/>
</Card>

</Container>

      <Grid sx={{ mt: "5%" }}>
      {dba.map((val)=> {
    return <Card1 text={val.text} desc={val.desc} img={val.img} val={val.val}/>
  }
    )}
      
      </Grid>
      <Box
        className="example"
        sx={{
          mt: "1%",
          mb: "1%",
          textAlign: "center",
          border: "1px solid red",
        }}
      >
        <Button
          className="example"
          sx={{ width: "100%", height: "4rem", color: "black" }}
        >
          <Forward5Icon /> Ko'proq yangiliklarni yuklash
        </Button>
      </Box>
      <Card sx={{ width: "99%", mt: "2%", mb: "1%" }}>
        <CardMedia component="img" height="100" image="img.jpg1.webp" />
      </Card>
      <Footer />

    </>
  );
};

export default Sport;
