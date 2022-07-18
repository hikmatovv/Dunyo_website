import "./index.css";
import React from "react";
import { Box, Container, Stack, Typography,Button,CardMedia,Card } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PulA from "./PulA";
import Footer from "../Footer/Footer";

export default () => {
  return (
    <>

        <Stack spacing={2} sx={{width:"90%",border:"1px solid blue" ,height:"4rem"}}>
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
        image="img.jpg"
      />
      </Card>

      <PulA />
      <Footer />
      {/* Rustama  aka sizniki shet footer bilan
    madaniyat lifstayl sport ham sizga hammasi bir xil faqat datasi boshqa  */}
    </>
  );
};
