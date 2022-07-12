import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CssBaseline } from "@mui/material";

const New = () => {
  const data = [
    {
      id: 1,
      type: "SPORT",
      new: "Paulo Dibala faoliyatini APLda davom ettirishi mumkin. Angliya grandi futbolchi bilan muzokaralarni boshladi",
      date: "Bugun, 09:41",
    },
    {
      id: 2,
      type: "RETSEPTLAR",
      new: "Malina qo`shib tayyorlanadigan shokoladli pirog retsepti",
      date: "Bugun, 09:29",
    },
    {
      id: 3,
      type: "MAHALLIY",
      new: "Andijonda 17 kishi fastfuddan zaharlandi",
      date: "Bugun, 09:11",
    },
    {
      id: 4,
      type: "DUNYO",
      new: "Zelenskiy Ukrainaga boshqa aviatsiya yetkazmalari olib kelinmasligini ma’lum qildi",
      date: "Bugun, 08:50",
    },
    {
      id: 4,
      type: "MAHALLIY",
      new: "O‘zbekiston birinchi marta YUNESKOning madaniyat sohasidagi nufuzli boshqaruv organiga saylandi",
      date: "Bugun, 08:10",
    },
    {
      id: 4,
      type: "MAHALLIY",
      new: "O‘zbekistonda 2022-yilning 6 oyida qancha bola tug‘ilgani ma’lum bo‘ldi",
      date: "Bugun, 07:55",
    },
    {
      id: 4,
      type: "MAHALLIY",
      new: "Navoiy davlat pedagogika instituti o‘qituvchisi o‘qishga kiritib qo‘yishni va’da qilib fuqarodan pul talab qildi",
      date: "Bugun, 07:38",
    },
    {
      id: 4,
      type: "MAHALLIY",
      new: "Parkentda fermer xo‘jaligiga tegishli yerni sotib yubormoqchi bo‘lgan shaxs ushlandi",
      date: "Bugun, 07:24",
    },
    {
      id: 4,
      type: "MAHALLIY",
      new: "Surxondaryoda ikki valyutafurush dollar sotayotganida qo‘lga tushdi",
      date: "Bugun, 07:09",
    },
  ];

  return (
    <div>
      <div>
        {data.map((val) => {
          return (
            <div style={{}}>
              {/* <h1>{val.type}</h1>
              <h1>{val.new}</h1>
            <h1>{val.date}</h1> */}
              <React.Fragment>
                {/* <hr style={{ width: "90%", textAlign: "center" }} /> */}
                <CardContent
                  sx={{
                    ":hover": {
                      backgroundColor: "white",
                      transition: "0.4s ease",
                      // boxShadow: "0px 0px 0px 1px gray",
                    },
                    borderTop: "1px solid #ccc",
                  }}
                  className="mx-auto"
                >
                  <div className="" style={{ paddingLeft: "30px" }}>
                    <Typography
                      sx={{
                        fontSize: 14,
                        borderLeft: "3px solid red",
                        padding: "4px",
                        lineHeight: "30px",
                        ":hover": {
                          cursor: "pointer",
                          color: "red",
                          transition: "0.5s ease",
                        },
                        fontWeight: "400",
                        color: "gray",
                      }}
                      gutterBottom
                    >
                      {val.type}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        fontSize: "15px",
                        fontFamily: "Georgia Bookman Old Style",
                        lineHeight: "24px",
                        ":hover": {
                          cursor: "pointer",
                        },
                        paddingTop: "16px",
                        color: "black",
                        fontWeight: "300",
                      }}
                    >
                      {val.new}
                    </Typography>
                    <Typography
                      sx={{
                        mb: 1.5,
                        fontSize: 13,
                        paddingTop: "16px",
                        color: "gray",
                      }}
                      color="text.secondary"
                    >
                      {val.date}
                    </Typography>
                  </div>
                </CardContent>
              </React.Fragment>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default New;
