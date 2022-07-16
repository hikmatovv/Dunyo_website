import React from "react";
import db from "./db.json";
import "./index.css";
import { Box, Grid, Paper, List, Typography,Button, CardMedia, Card } from "@mui/material";
import Forward5Icon from '@mui/icons-material/Forward5';
import Card1 from "./Card/index"
const PulA = () => {
  
  return (
    <>
    {db.map((val)=> {
    return <Card1 text={val.text} desc={val.desc} img={val.img} val={val.val}/>
  }
    )}
          <Box className="example" sx={{mt:"1%",mb:"1%",textAlign:"center",border:"1px solid red"}}>
            <Button className="example" sx={{width:"100%",height:"4rem",color:"black"}}><Forward5Icon /> Ko'proq yangiliklarni yuklash</Button>
          </Box>
          <Card sx={{ width:"99%",mt:"2%",mb:"1%"}}>
      <CardMedia
        component="img"
        height="100"
        image="https://avatars.mds.yandex.net/get-adfox-content/2367573/220530_adfox_1924201_5303361.a625bb5080f7bf17c99939fda2a6afae.jpg/optimize.webp"
      />
      </Card>

          </>
  );
};

export default PulA;
