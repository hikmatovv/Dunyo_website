import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Madaniyat from "../Madaniyat";
import Navbar from "../Navbar";
import HomeNews from "../Homenews";
import Kommunistlar from "../Kommunistlar";
import Mahalliy from "../Mahalliy";

// import Weather from "./Weather";
import News from "./data.jsx";
import ResponsiveDriwer from "./ResponsiveDrawer";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ClearIcon from "@mui/icons-material/Clear";

// const drawerWidthLeft = 350;

function ResponsiveDrawer(props) {
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
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
          p: 3,
          width: { xs: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Madaniyat />
        <Navbar />
        <HomeNews />
        <Kommunistlar />
        <Mahalliy />
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
