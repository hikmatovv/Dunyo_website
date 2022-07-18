import React from "react";
import dbs from "./dbs.json";
import "./index.css";
import { Box, Grid, Paper, Button, CardMedia, Card, Container ,Typography} from "@mui/material";
import Forward5Icon from '@mui/icons-material/Forward5';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Card1 from "./Card/index"


const Lyfstyle = () => {
  
  return (
    <>
    <Grid sx={{ mt: "5%" }}>
    {dbs.map((val)=> {
    return <Card1 text={val.text} desc={val.desc} img={val.img} val={val.val}/>
  }
    )}
    </Grid>
          <Box className="example" sx={{mt:"1%",mb:"1%",textAlign:"center",border:"1px solid red"}}>
            <Button className="example" sx={{width:"100%",height:"4rem",color:"black"}}><Forward5Icon /> Ko'proq yangiliklarni yuklash</Button>
          </Box>
          <Card sx={{ width:"99%",mt:"2%",mb:"1%"}}>
      <CardMedia
        component="img"
        height="100"
        image="img.jpg1.webp"
      />
      </Card>

          </>
  );
};

export default Lyfstyle;
