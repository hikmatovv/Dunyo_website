import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Box"
import Container from "@mui/material/Box"
import Typography from "@mui/material/Box"
import VisibilityIcon from '@mui/icons-material/Visibility';
import RefreshIcon from '@mui/icons-material/Refresh';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import data from "./mahalliy.json"
import "./index.css"

export default () => {
  return (
    <div style={{marginTop:'7%'}}>
      {data.map((val, index) =>
        <Box sx={{ width: "100%", height: "40%", border: "1px solid #E4E4E4", }} className="box">
          <Box sx={{ width: "100%", height: "100%" }}>
            <Grid container spacing={3} key={index} sx={{ display: "flex", justifyContent: "space-between" }}>
              <Grid xs={12} md={12} sm={12} lg={12} sx={{ padding: "1%", }}>
                <Grid xs={10} md={10} lg={10} sm={10}>
                  <Typography sx={{ fontFamily: "sans-serif", fontWeight: "300", color: "#A0A0A4", borderLeft: "4px solid #99FFFF", paddingLeft: "0.8%", letterSpacing: "3px" }}>
                    {val.name}
                  </Typography>
                  <Typography sx={{ fontFamily: "sans-serif", fontWeight: "700", color: "#000000", paddingTop: "1.5%", width: "100%" }} className="title">
                    <a href="#">
                      {val.title}
                    </a>
                  </Typography>
                </Grid>
                <Grid xs={12} md={12} lg={12} sm={12} sx={{ display: "flex", paddingTop: "4%", justifyContent: "space-between" }}>
                  <Grid xs={6} md={6} lg={6} sm={6}>
                    <Typography sx={{ fontFamily: "sans-serif", fontWeight: "200", color: "#A0A0A4", letterSpacing: "3px", paddingTop: "15%", width: "100%" }}>
                      {val.time}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} md={12} sm={12} lg={12} sx={{ display: "flex", paddingLeft: "2%", }}>
                <Box sx={{ display: "flex", alignItems: "flex-end", width: "100%", }}>
                  <Box sx={{ marginBottom: "8%", display: "flex", justifContent: "space-between", alignItems: "center", paddingRight: "0%", paddingLeft: "-10%" }}>
                    <VisibilityIcon sx={{ color: "#A0A0A4", display: "flex", paddingRight: "5%" }} />
                    <Typography sx={{ fontFamily: "sans-serif", fontWeight: "300", color: "#A0A0A4", letterSpacing: "3px", paddingTop: "0.8%", paddingLeft: "10%" }}>
                      {val.eye}
                    </Typography>
                    <Box sx={{ width: "50px" }}>

                    </Box>
                  </Box>
                  <img src={val.imgSrc} alt="dataImg" style={{ width: "38vh", height: "150px", paddingLeft: "0%" }} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
      <Box sx={{ width: "100%", height: "100px", border: "1px solid #E4E4E4", display: "flex", alignItems: "center", justifyContent: "center", ":hover": { backgroundColor: "black", color: "white" }, transition: "0.5s" }}>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row", width: "25%", }}>
          <RefreshIcon />
          <Typography sx={{ fontFamily: "sans-serif", fontWeight: "500", color: "#FFFFF", paddingLeft: "5%", width: "100%" }}>
            KO'PROQ YANGILIKLARNI YUKLASH
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
