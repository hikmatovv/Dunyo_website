import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
  opasity: "2",
  backgroundColor: "none",
};
const style1 = {
  position: 'absolute' ,
  
  // width: "100%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 4,
};
export default () => {

 
  const [anchorElNav1, setAnchorElNav1] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav1(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav1(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen(true);
  const handleClose1 = () => setOpen(false);
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          border: "1px solid #EEE",
          color: "black",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <img
                src="https://daryo.uz/logo/logo.svg"
                alt="beta logo bor"
                style={{ width: "170px" }}
              />
            </Box>

            <Box sx={{ marginLeft: "100px", display: "flex" }}>
              {" "}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Box
                  sx={{
                    width: "3px",
                    height: "12px",
                    backgroundColor: "#66CCFF",
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: "10px",
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    MAHALIY
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", ml: "15px" },
                }}
              >
                <Box
                  sx={{
                    width: "3px",
                    height: "12px",
                    backgroundColor: "#99FFFF",
                    ml: "20px",
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: "10px",
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    DUNYO
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", ml: "15px" },
                }}
              >
                <Box
                  sx={{
                    width: "3px",
                    height: "12px",
                    backgroundColor: "#FF9900",
                    ml: "20px",
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: "10px",
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    PUL
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", ml: "15px" },
                }}
              >
                <Box
                  sx={{
                    width: "3px",
                    height: "12px",
                    backgroundColor: "yellow",
                    ml: "20px",
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: "10px",
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    MADANIYAT
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", ml: "15px" },
                }}
              >
                <Box
                  sx={{
                    width: "3px",
                    height: "12px",
                    backgroundColor: "#CC99FF",
                    ml: "20px",
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: "10px",
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    LAYFSTAYL
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", ml: "15px" },
                }}
              >
                <Box
                  sx={{
                    width: "3px",
                    height: "12px",
                    backgroundColor: "#FF6699",
                    ml: "20px",
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: "10px",
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    SPORT
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", ml: "15px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#8e8e8e",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: "10px",
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "#8e8e8e", textDecoration: "none" }}
                  >
                    MULTIMEIA
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", ml: "15px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#8e8e8e",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: "10px",
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "#8e8e8e", textDecoration: "none" }}
                  >
                    KOLUMNISTLAR
                  </Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", ml: "15px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#8e8e8e",
                    fontSize: "11px",
                    fontWeight: "600",
                    ml: `550%`,
                  }}
                >
                  <Link
                    to=""
                    style={{ color: "#8e8e8e", textDecoration: "none" }}
                  >
                    O`ZB
                  </Link>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", ml: "150px" },
              }}
            >
              <Box
                sx={{
                  marginTop: "5px",
                  width: "3px",
                  height: "15px",
                  backgroundColor: "#8e8e8e",
                  ml: "160px",
                }}
              ></Box>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "11px",
                  fontWeight: "600",
                  ml: "10px",
                  marginTop: "5px",
                }}
              >
                <Link
                  to=""
                  style={{ color: "#8e8e8e", textDecoration: "none" }}
                >
                  <SearchIcon onClick={handleOpen} />
                </Link>
                {/* <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{ opasity: "0" }}
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{
                        color: "white",
                        textAlign: "center",
                        fontSize: "35px",
                      }}
                    >
                      Nimani qidiramiz?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2,textAlign:"center" }}>
                    <TextField id="standard-basic"  variant="standard" />
                    </Typography>
                  </Box>
                </Modal> */}
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Modal
  open={open}
  onClose={handleClose1}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Grid container >
<Grid item md={3} sm={4} xs={4}>
  <Box sx={style1}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
  </Grid>
  <Grid item md={3} sm={12} xs={12}>
    1
  </Grid>

  </Grid>

</Modal>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
