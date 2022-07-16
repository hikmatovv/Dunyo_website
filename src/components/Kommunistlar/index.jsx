import React from "react";
import db from "./db.json";
import {
  Box,
  Grid,
  Paper,
  List,
  Typography,
  Button,
  CardMedia,
  Card,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import RefreshIcon from "@mui/icons-material/Refresh";
import { styled } from "@mui/material/styles";
import Footer from '../Footer/Footer'


export default () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid sx={{ mt: "7%" }}>
        {db &&
          db.map((dbs) => {
            return (
              <>
                <Card container rowSpacing={4} sx={{ marginTop: "4%" }}>
                  <Grid sx={{ display: "flex", flexDirection: "row" }}>
                    <Grid
                      pr="2%"
                      pb="1%"
                      pl="2%"
                      pt="2%"
                      md={6}
                      sm={5}
                      xs={12}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{ fontFamily: "Montserrat", fontSize: "25px" }}
                      >
                        {dbs.text}
                      </Typography>

                      <Typography
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
                        >
                          {dbs.time}
                        </Typography>
                        <Typography>
                          <RemoveRedEyeIcon /> {""}
                          {dbs.view}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid md={6} sm={5} xs={12}>
                      <img src={dbs.img} />
                    </Grid>
                  </Grid>
                </Card>
                <Card
                  sx={{
                    padding: "2% 2% 2% 2%",
                    backgroundColor: "#F1F1F1",
                    marginTop: "3%",
                  }}
                >
                  <Typography
                    sx={{ fontFamily: "Montserrat", fontSize: "15px" }}
                  >
                    {dbs.text1}
                  </Typography>
                </Card>
              </>
            );
          })}
      </Grid>
      <Grid container mt='3%'>
        <Grid xs={12}>
          <Item
            sx={{
              justifyContent: "center",
              display: "flex",
              padding: "0px",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "100%",
                height: "80px",
                backgroundColor: "white",
                color: "black",
                ":hover": { backgroundColor: "black", color: "white" },
              }}
            >
              {" "}
              <RefreshIcon /> KO‘PROQ YANGILIKLARNI YUKLASH
            </Button>
          </Item>
        </Grid>
      </Grid>
      <Footer/>
    </>
  );
};
