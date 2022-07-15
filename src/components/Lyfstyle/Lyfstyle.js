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

const Lyfstyle = () => {
  
  return (
    <>
    <Paper sx={{ mt: "5%" }}>
        {dbs &&
          dbs.map((dbs) => {
            return (
                <Paper elevation={4}>
                    <Container>
              <Grid container rowSpacing={4}>
                <Grid md={6} sm={5} xs={12}><br />
                  <Typography variant="h5" sx={{color:"orange"}}>| {dbs.text}</Typography>
                  <p>{dbs.desc}</p>
                  <p>{dbs.val}</p>
                </Grid>
                <Grid md={6} sm={5} xs={12}>

                <Card sx={{ width:"70%",mt:"2%",mb:"1%",ml:"25%"}}
                ml={{lg:"15rem",md:"11rem",sm:"8rem"}}
                >
      <CardMedia
        component="img"
        height="150"
        image={dbs.img}
        />
      </Card>
      <List>
                  <ListItem >
                      <ListItemIcon>
                        <RemoveRedEyeOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="1924" />
                  </ListItem>
</List>


                </Grid>
              </Grid>
              </Container>
              </Paper>
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

export default Lyfstyle;
