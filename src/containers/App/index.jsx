/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";
import Sidebar from "../../components/Sidebar/index";
import Grid from "@mui/material/Grid";

export default () => {
  const content = useRoutes(routes);
  return (
    <>
      <Grid
        className="w-75 mx-auto"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Grid>
          <Sidebar />
        </Grid>
        <Grid>{content}</Grid>
      </Grid>
    </>
  );
};
