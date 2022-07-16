import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DataBase from './data'
import Button from '@mui/material/Button';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import Footer from '../Footer/Footer'
import "./style.css"


const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: "none"
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,

}));

export default () => {
  return (
    <div>
      <Box mt='8%'>
        <Grid container>
          <Grid xs={12}>
            <Item sx={{ padding: "0px" }}>
              <Grid container >
                <Grid xs={12} sm={9} >
                  <Item2>
                    <Item2 sx={{ paddingLeft: "1%", background: "none" }}><span style={{ borderLeft: "4px solid #66CCFF", paddingLeft: "10px" }}>MAHALLIY</span></Item2>
                    <Item2 sx={{ fontSize: "140%", wordSpacing: "5px", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" }, background: "none" }}>Kosondagi to‘yxonada yong‘in chiqqani aytilmoqda (video)</Item2>
                  </Item2>
                </Grid>
                <Grid xs={12} sm={3}>
                  <Item2 sx={{ padding: "0px" }}><img style={{ width: "100%" }} src="https://daryo.uz/static/2022/07/thumb-photo_2022-07-11_07-12-59.jpg" alt="" /></Item2>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{marginTop:"1%"}}>
        <Grid container>
          <Grid item xs={12} sm={4} md={4}>
            <Item sx={{ padding: "0px" }}>
              <Item2 sx={{ padding: "0px" }}><img src="https://daryo.uz/static/2022/07/thumb-gm.png" style={{ width: "100%", height: "40vh" }} alt="" /></Item2>
              <Item2 sx={{ paddingLeft: "3%" }}><span style={{ borderLeft: "4px solid #66CCFF", paddingLeft: "10px" }}>MAHALLIY</span></Item2>
              <Item2 sx={{ fontSize: { md: "140%", sm: "100%" }, height:"20vh", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" } }}>Sirdaryodagi yana bir xonadon tomorqasida ko‘knori yetishtirilayotgani aniqlandi</Item2>
              <Item2>
                <Grid container>
                  <Grid xs={6}>
                    <Item2>Kecha, 23:53</Item2>
                  </Grid>
                  <Grid xs={6}>
                    <Item2 sx={{ display: "flex", alignItems: "center", justifyContent: "right" }}> <RemoveRedEyeOutlinedIcon /> 19813</Item2>
                  </Grid>
                </Grid>
              </Item2>
            </Item>
          </Grid>
          <Grid  xs={12} sm={8} md={8} sx={{width:"100%",height:{md:"81vh",sm:"40"}}}>
            <Item >
            <Item2 sx={{ paddingLeft: "3%" }}><span style={{ borderLeft: "4px solid #66CCFF", paddingLeft: "10px" }}>DUNYO </span></Item2>
            <Item2 sx={{ fontSize: { md: "140%", sm: "100%" }, height: { md: "58vh", sm: "58vh" }, wordSpacing: "5px", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" } }}>"Oziq-ovqat tanqisligi: o‘g‘it narxlarining balandligi sabab Osiyoda guruch hosili xavf ostida" <div style={{fontWeight:"500",}}> Osiyoda guruchning eng katta qismi yetishtiriladi va iste’mol qilinadi. Shu tufayli u mintaqadagi siyosiy va iqtisodiy barqarorlik uchun muhim </div></Item2>
            <Item2>
                      <Grid container>
                        <Grid xs={6}>
                          <Item2>Kecha, 20:50</Item2>
                        </Grid>
                        <Grid xs={6}>
                          <Item2 sx={{ display: "flex", alignItems: "center", justifyContent: "right" }}> <RemoveRedEyeOutlinedIcon /> 30966</Item2>
                        </Grid>
                      </Grid>
                    </Item2>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: "1%" }}>
        <Grid container spacing={2}>
          {
            DataBase.map((val) => {
              return (
                <Grid item xs={12} sm={4} md={4}>
                  <Item sx={{ padding: "0px" }}>
                    <Item2 sx={{ padding: "0px" }}><img src={val.img} style={{ width: "100%", height: "40vh" }} alt="" /></Item2>
                    <Item2 sx={{ paddingLeft: "3%" }}><span style={{ borderLeft: "4px solid #66CCFF", paddingLeft: "10px" }}>{val.type}</span></Item2>
                    <Item2 sx={{ fontSize: { md: "140%", sm: "100%" }, height: { md: "20vh", sm: "100px" }, wordSpacing: "5px", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" } }}>{val.comment}</Item2>
                    <Item2>
                      <Grid container>
                        <Grid xs={6}>
                          <Item2>{val.data}</Item2>
                        </Grid>
                        <Grid xs={6}>
                          <Item2 sx={{ display: "flex", alignItems: "center", justifyContent: "right" }}> <RemoveRedEyeOutlinedIcon /> {val.view}</Item2>
                        </Grid>
                      </Grid>
                    </Item2>
                  </Item>
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
      <Box sx={{marginTop:"2%"}}>
        <Grid container>
          <Grid xs={12}>
            <Item sx={{ padding: "0px" }}>
              <Grid container >
                <Grid xs={12} sm={3}>
                  <Item2 sx={{ padding: "0px" }}><img style={{ width: "100%" }} src="https://daryo.uz/static/2022/07/thumb-photo_2022-07-10_17-52-24.jpg" alt="" /></Item2>
                </Grid>
                <Grid xs={12} sm={9} >
                  <Item2>
                    <Item2 sx={{ paddingLeft: "1%", background: "none" }}><span style={{ borderLeft: "4px solid #66CCFF", paddingLeft: "10px" }}>MAHALLIY</span></Item2>
                    <Item2 sx={{ fontSize: "140%", wordSpacing: "5px", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" }, background: "none" }}>Buxoroda odamlarning qo‘yini bo‘g‘izlab ketayotgani aytilgan chupakabra o‘ldirildi</Item2>
                  </Item2>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{marginTop:"2%"}}>
        <Grid container>
          <Grid xs={12}>
            <Item sx={{ padding: "0px" }}>
              <Grid container >
                <Grid xs={12} sm={9} >
                  <Item2>
                    <Item2 sx={{ paddingLeft: "1%", background: "none" }}><span style={{ borderLeft: "4px solid red", paddingLeft: "10px" }}>SPORT</span></Item2>
                    <Item2 sx={{ fontSize: "140%", wordSpacing: "5px", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" }, background: "none" }}>“Bavariya” Harri Keynni Robert Levandovskiga o‘rinbosar sifatida ko‘rmoqda</Item2>
                  </Item2>
                </Grid>
                <Grid xs={12} sm={3}>
                  <Item2 sx={{ padding: "0px" }}><img style={{ width: "100%" }} src="https://daryo.uz/cache/2022/07/thumb-gettyimages-1403906603-2048x2048-2048x1506.jpg" alt="" /></Item2>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{marginTop:"2%"}}>
        <Grid container>
          <Grid xs={12}>
            <Item sx={{ padding: "0px" }}>
              <Grid container >
                <Grid xs={12} sm={9} >
                  <Item2>
                    <Item2 sx={{ paddingLeft: "1%", background: "none" }}><span style={{ borderLeft: "4px solid #66CCFF", paddingLeft: "10px" }}>MAHALLIY</span></Item2>
                    <Item2 sx={{ fontSize: "140%", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" }, background: "none" }}>Toshkentda 2022-yilning birinchi yarmida qancha ayol farzandini uyida dunyoga keltirgani ma’lum qilindi<div style={{fontWeight:"500",}}> Bu vaqt davomida “103” xizmatiga tug‘uruq va homiladorlik patologiyalari bo‘yicha 21 143 ta chaqiriq kelib tushgan</div></Item2>
                  </Item2>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{marginTop:"1%"}}>
        <Grid container>
          <Grid  xs={12} sm={8} md={8} sx={{width:"100%",height:{md:"81vh",sm:"40"}}}>
            <Item >
            <Item2 sx={{ paddingLeft: "3%" }}><span style={{ borderLeft: "4px solid red", paddingLeft: "10px" }}>SPORT </span></Item2>
            <Item2 sx={{ fontSize: { md: "140%", sm: "100%" }, height: { md: "58vh", sm: "58vh" }, wordSpacing: "5px", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" } }}>Serxio Buskets 2023-yilda Amerikaga yo‘l olishi mumkin. Yarim himoyachiga MLS klublaridan qiziqish bor <div style={{fontWeight:"500",}}> Ispaniyalik futbolchi 2022/23-yilgi mavsumni “Barselona” tarkibida o‘tkazadi </div></Item2>
            <Item2>
                      <Grid container>
                        <Grid xs={6}>
                          <Item2>Kecha, 20:50</Item2>
                        </Grid>
                        <Grid xs={6}>
                          <Item2 sx={{ display: "flex", alignItems: "center", justifyContent: "right" }}> <RemoveRedEyeOutlinedIcon /> 30966</Item2>
                        </Grid>
                      </Grid>
                    </Item2>
            </Item>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Item sx={{ padding: "0px" }}>
              <Item2 sx={{ padding: "0px" }}><img src="https://daryo.uz/static/2022/07/medium-iibbbb.png" style={{ width: "100%", height: "40vh" }} alt="" /></Item2>
              <Item2 sx={{ paddingLeft: "3%" }}><span style={{ borderLeft: "4px solid #66CCFF", paddingLeft: "10px" }}>MAHALLIY</span></Item2>
              <Item2 sx={{ fontSize: { md: "140%", sm: "100%" }, height:"20vh", color: "black", fontWeight: "700", ":hover": { color: "#66CCFF", transition: "0.3s" } }}>Toshkentda avtomobil olib qochish bilan bog‘liq jinoyat fosh etildi</Item2>
              <Item2>
                <Grid container>
                  <Grid xs={6}>
                    <Item2>Kecha, 23:53</Item2>
                  </Grid>
                  <Grid xs={6}>
                    <Item2 sx={{ display: "flex", alignItems: "center", justifyContent: "right" }}> <RemoveRedEyeOutlinedIcon /> 19813</Item2>
                  </Grid>
                </Grid>
              </Item2>
            </Item>
          </Grid>
        </Grid>
      <Grid container >
        <Grid xs={12}>
          <Item sx={{justifyContent:"center",display:"flex",padding:"0px",alignItems:"center"}}>
          <Button variant="contained" sx={{width:"100%", height:"80px", backgroundColor:"white",color:"black",":hover":{backgroundColor:"black",color:"white"}}}> <RefreshIcon/> KO‘PROQ YANGILIKLARNI YUKLASH</Button>
          </Item>
        </Grid>
      </Grid>
      </Box>
      <Footer/>
    </div>
  );
};
