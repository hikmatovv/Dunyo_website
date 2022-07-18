import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
export default  (props)=> {
    const theme = useTheme();

  return (
    <div>
 <Card sx={{ display: 'flex',marginTop:"20px" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
            
          <Typography component="div" sx={{fontWeight:"500"}}  color="text.secondary" >
           <Box sx={{width:"4px",height:"12px",backgroundColor:"orange",display:"inline-block"}}></Box> {props.text}
          </Typography>
          <Typography variant="subtitle1"component="div" sx={{fontWeight:"700"}}>
            {props.desc}
          </Typography>
          <Typography mt='5%' component="div" sx={{fontWeight:"700",fontSize:"12px",}}  color="text.secondary" >
         {props.val}
          </Typography>
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 251 }}
        image={props.img}
        alt="Live from space album cover"
      />
    </Card>
    </div>
  )
}
