import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AbcIcon from '@mui/icons-material/Abc';


const Footer = () => {
  return (
    <>
      <Container
        sx={{ background: "black", color: "#555", mt: "6%", mb: "3%" }}
      >
        <Grid container spacing={2}>
          <Grid
            md={3}
            sm={6}
            xs={12}
            sx={{ padding: "2%", gap: "1rem", pb: "10%" }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Daryo{" "}
            </Typography>
            <hr></hr>
            <Typography>Internet - Nashr </Typography>
            <Typography>Tahririyat haqida </Typography>
            <Typography>Aloqa ma'lumotlari </Typography>
            <Typography>Foydalanish shartlari </Typography>
            <Typography>Maxfiylik Siyosati</Typography>
            <Typography>Yangiliklar arxivi </Typography>
          </Grid>
          <Grid md={3} sm={6} xs={12} sx={{ padding: "2%", gap: "1rem" }}>
            <Typography variant="h5" sx={{ color: "white" }}>
              Reklama
            </Typography>
            <hr></hr>
            <Typography>Reklama joylashtirish </Typography>
            <Typography>Reklama materiallariga </Typography>
            <Typography>qo'yiladigan texnik talablar </Typography>
          </Grid>
          <Grid md={3} sm={6} xs={12} sx={{ padding: "2%", gap: "1rem" }}>
            <Typography variant="h5" sx={{ color: "white" }}>
              Ijtimoiy Tarmoqlar
            </Typography>
            <hr></hr>
            <Typography>Instagramm | Rasmiy </Typography>
            <Typography>Instagramm | Lifestyle </Typography>
            <Typography>Instagramm | Sport </Typography>
            <Typography>Facebook | Rasmiy </Typography>
            <Typography>Ok | Rasmiy </Typography>
            <Typography>YouTube</Typography>
          </Grid>
          <Grid
            md={3}
            sm={6}
            xs={12}
            sx={{ padding: "2%", gap: "1rem", pb: "5%" }}
          >
            <Typography variant="h5" sx={{ color: "white" }}>
              Telegramm - Kanallar
            </Typography>
            <hr></hr>
            <Typography variant="body2">
              Daryo - Daryo” internet-nashrining matbuot va axborot agentligi{" "}
            </Typography>
            <Typography variant="body2">
              Daryo - Daryo” internet-nashrining matbuot va axborot agentligi{" "}
            </Typography>
            <Typography variant="body2">
              Daryo - Daryo” internet-nashrining matbuot va axborot agentligi{" "}
            </Typography>
            <Typography variant="body2">
              Daryo - Daryo” internet-nashrining matbuot va axborot agentligi{" "}
            </Typography>
            <Typography variant="body2">
              Daryo - Daryo” internet-nashrining matbuot va axborot agentligi{" "}
            </Typography>
            <Typography variant="body2">
              Daryo - Daryo” internet-nashrining matbuot va axborot agentligi{" "}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        sx={{ background: "black", color: "#555", mt: "6%", mb: "3%" }}
      >
        <Grid container spacing={2}>
          <Grid
            md={8}
            sm={6}
            xs={12}
            sx={{ padding: "2%", gap: "1rem", pb: "1%" }}
          >
            <Typography variant="body2">
              “Daryo” internet-nashrining (O‘zbekiston matbuot va axborot
              agentligi (O‘zMAA, hozirgi O‘zbekiston Respublikasi Prezidenti
              Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar
              agentligi) tomonidan 13.03.2015 yil sanasida 0944-sonli guvohnoma
              bilan ommaviy axborot vositasi sifatida ro‘yxatga olingan. Matnli
              materiallarni to‘liq ko‘chirish yoki qisman iqtibos keltirishga,
              shuningdek, fotografik, grafik, audio va/yoki videomateriallaridan
              foydalanishga “daryo.uz” saytiga giperhavola mavjud bo‘lgan
              va/yoki “Daryo” internet-nashrining muallifligini ko‘rsatuvchi
              yozuv ilova qilingan taqdirda yo‘l qo‘yiladi. Chop etiladigan
              ba’zi ma’lumotlar 18 yoshga to‘lmagan foydalanuvchilarga
              mo‘ljallanmagan bo‘lishi mumkin. Info@daryo.uz
            </Typography><br /><br /><br /><br /><br /><br />
            <Typography sx={{color:"white"}}>
            © «Simple Networking Solutions» MChJ, 2013–2022

            </Typography>
          </Grid>
          <Grid md={4} sm={6} xs={12} sx={{ padding: "2%", gap: "1rem" }}>
            <Box sx={{ width: "100%", maxWidth: 360 }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          background: "white",
                          borderRadius: "100%",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems:"center",
                          height:"30px",
                          width:"30px"

                        }}
                      >
                        <AddCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary="Yosh bo'yicha cheklov" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          background: "white",
                          borderRadius: "100%",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems:"center",
                          height:"30px",
                          width:"30px"

                        }}
                      >
                        <MobileScreenShareIcon />
                      </ListItemIcon>
                      <ListItemText primary="  Soddalashtirilgan Ko'rinish" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          background: "white",
                          borderRadius: "100%",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems:"center",
                          height:"30px",
                          width:"30px"

                        }}
                      >
                        <FingerprintIcon />
                      </ListItemIcon>
                      <ListItemText primary="Yangilik haqida xabar berish" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          background: "white",
                          borderRadius: "100%",
                          textAlign: "center",
                          justifyContent: "center",
                          alignItems:"center",
                          height:"30px",
                          width:"30px"

                        }}
                      >
                        <AbcIcon />
                      </ListItemIcon>
                      <ListItemText primary="Xato topdinggizmi" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
              <Divider />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
