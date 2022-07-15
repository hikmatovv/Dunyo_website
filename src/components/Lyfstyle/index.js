import React from "react";
import { Box, Container, Stack, Typography,Button,CardMedia,Card } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from "../Footer/Footer";
import "./index.css"
import Lyfstyle from "./Lyfstyle";

export default () => {
  return (
    <>
      <Container sx={{mt:"5%"}}

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
        <Lyfstyle />
      <Footer />
      </Container>
    </>
  );
};
