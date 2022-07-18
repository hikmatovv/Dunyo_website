import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";
import Sidebar from "../../components/Sidebar/index";
import Grid from '@mui/material/Grid'
import { Container } from "@mui/material";

export default () => {
  const content = useRoutes(routes);
  return (
    <>
    <Container maxWidth='xl'>
      
    <Grid sx={{display:'flex',flexDirection:'row'}}>
        <Grid >
          <Sidebar />
        </Grid>
        <Grid>{content}</Grid>
      </Grid>
    </Container>
    </>
  );
};
