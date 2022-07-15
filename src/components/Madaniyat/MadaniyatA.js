import React from "react";
import db from "./db.json";
import "./index.css";
import { Box, Grid, Paper, List, Typography,Button, CardMedia, Card } from "@mui/material";
import Forward5Icon from '@mui/icons-material/Forward5';
const MadaniyatA = () => {
  
  return (
    <>
    <Paper sx={{ mt: "5%" }}>
        {db &&
          db.map((dbs) => {
            return (
              <Grid container rowSpacing={4} mt='5%'>
                <Grid md={6} sm={5} xs={12}><br /><br /><br />
                  <h1>{dbs.text}</h1>
                  <p>{dbs.desc}</p>
                  <p>{dbs.val}</p>
                </Grid>
                <Grid md={6} sm={5} xs={12} sx={{pl:"10%"}}><br /><br />

                  <img src={dbs.img}  />
                </Grid>
              </Grid>
            );
          })}
    </Paper>
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

export default MadaniyatA;
