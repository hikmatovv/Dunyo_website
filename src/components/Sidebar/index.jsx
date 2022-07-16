import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import News from "./data.jsx";
import ResponsiveDriwer from "./ResponsiveDrawer";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ClearIcon from "@mui/icons-material/Clear";
import Navbar from '../Navbar'
import Toolbar from '@mui/material/Toolbar';


function ResponsiveDrawer(props) {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const drawerWidth = mobileOpen ? "100%" : 350;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Grid position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,width:'100%' }}>
       

          <Navbar/>
      
      </Grid>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 9 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Item sx={{ fontSize: "13px" }}>
                <MenuOpenIcon
                  sx={{
                    fontSize: "38px",
                    color: "gray",
                  }}
                />{" "}
                MENU
              </Item>
            </Grid>
            <Grid item xs>
              <Item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    display: { sm: "none", md: "none" },
                    position: "relative",
                    // bottom: "4px",
                    ":hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <ClearIcon />
                </IconButton>
              </Item>
            </Grid>
          </Grid>
          <ResponsiveDriwer />{" "}
          {/* bu yerda responsive paytida yangiliklar import boladi */}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#f1f1f1",
            },
          }}
          open
        >
          <Toolbar />
          <Toolbar />
          <h4
            style={{
              // borderBottom: "1px solid #ccc",
              padding: "0px 0px 0px 48px",
              fontWeight: "600",
              color: "#3e3e3e",
              // position: "relative",
              // top: "20px",
              // width: "80%",
              // fontSize: "25px",
            }}
          >
            So`nggi yangiliklar
          </h4>
          <News /> {/* bu yerda yangiliklar import boladi  */}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { xs: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
