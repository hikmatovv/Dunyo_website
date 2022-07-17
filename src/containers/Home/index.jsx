import React from 'react';
import Sidebar from '../../components/Sidebar';
// import Content from '../../components/Content';
import Madaniyat from '../../components/Madaniyat';
import  Navbar from '../../components/Navbar';
import HomeNews from '../../components/Homenews';
import Kommunistlar from '../../components/Kommunistlar';
import Mahalliy from '../../components/Mahalliy';
import Pul from '../../components/Pul';
import Dunyo from '../../components/Dunyo';
import Kolumnist from '../../components/Kommunistlar';
import Box from "@mui/material/Box"
export default () => (
  <div>
    <Navbar/>
    <Madaniyat/>
    <HomeNews/>
    <Kommunistlar/>
    <Sidebar />
    <Dunyo />
    <Box sx={{width:"100%",border:"2px solid red"}}>

    </Box>
    <Mahalliy/>
    <Box sx={{width:"100%",border:"2px solid red"}}>

    </Box>
    <Kolumnist/>
    <Box sx={{width:"100%",border:"2px solid red"}}>

    </Box>    
    <Pul />
    {/* <Content /> */}
  </div>
);
