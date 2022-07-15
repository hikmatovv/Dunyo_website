
import React from "react";
import db from "./db.json";
// import "./index.css";
import { Box, Grid, Paper, List, Typography,Button, CardMedia, Card } from "@mui/material";
import Forward5Icon from '@mui/icons-material/Forward5';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export default () => {
  
  return (
    <>
    <Grid sx={{ mt: "10%" }} >
        {db &&
          db.map((dbs) => {
            return (
              <>
              <Card container rowSpacing={4} sx={{marginTop:'4%'}} >
                <Grid sx={{display:'flex',flexDirection:'row'}}>

                <Grid pr='2%' pb='1%' pl='2%' pt='2%'md={6} sm={5} xs={12} sx={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>

                  <Typography sx={{fontFamily:'Montserrat',fontSize:'25px'}}>{dbs.text}</Typography>

                  <Typography sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                   <Typography sx={{fontFamily:'Montserrat',fontSize:'15px'}} >
                    
                    {dbs.time}
                   </Typography>
                  <Typography>
                    <RemoveRedEyeIcon/> {""}
                    {dbs.view}
                  </Typography>
                  </Typography>
                  
                </Grid>
                <Grid md={6} sm={5} xs={12} >

                  <img src={dbs.img}  />
                </Grid>
                </Grid>
              </Card>
              <Card  sx={{ padding:'2% 2% 2% 2%',backgroundColor:'#F1F1F1',marginTop:'3%'}}>
                <Typography sx={{fontFamily:'Montserrat',fontSize:'15px'}}>
                  {dbs.text1}
                </Typography>

              </Card>
              </>
            );
          })}
    </Grid>
       

          </>
  );
};

