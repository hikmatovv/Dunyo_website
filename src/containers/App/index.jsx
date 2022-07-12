import React from "react";

import { useRoutes } from "react-router-dom";
import { routes } from "../../routes/routes";

import Sidebar from "../../components/Sidebar/index";
import { Container } from "@mui/material";

export default () => {
  const content = useRoutes(routes);
  return (
    <>
      {/* <Container maxWidth="lg"> */}
      <Sidebar />
      {content}
      {/* </Container> */}
    </>
  );
};
