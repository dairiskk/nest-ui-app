// src/components/HomeScreen.js
"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import Settings from "@mui/icons-material/Settings";
import Post from "../components/post/page";

const HomeScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, onClick: toggleMenu },
    { text: "About", icon: <InfoIcon />, onClick: toggleMenu },
    { text: "Settings", icon: <SettingsIcon />, onClick: toggleMenu },
    // Add more menu items as needed
  ];

  const posts = [
    // Array of post objects
    {
      username: "JohnDoe",
      avatar: "https://source.unsplash.com/50x50/?portrait",
      photoUrl: "https://source.unsplash.com/600x400/?nature",
      likes: 15,
      comments: ["Great photo!", "Love it!"],
    },
    {
      username: "JohnDoe2",
      avatar: "https://source.unsplash.com/50x50/?portrait",
      photoUrl: "https://source.unsplash.com/600x400/?nature",
      likes: 15,
      comments: ["Great photo!", "Love it!"],
    },
    {
      username: "JohnDoe3",
      avatar: "https://source.unsplash.com/50x50/?portrait",
      photoUrl: "https://source.unsplash.com/600x400/?nature",
      likes: 15,
      comments: ["Great photo!", "Love it!"],
    },
    // Add more posts as needed
  ];

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            Your App Name
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Add client name and photo */}
            <Avatar alt="Client Name" src="/path-to-client-photo.jpg" />
            <Typography
              variant="body1"
              sx={{ marginLeft: "8px", color: "white" }}
            >
              Client Name
            </Typography>
            {/* Add gear icon for settings */}
            <IconButton color="inherit">
              <Settings />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={toggleMenu}
        ModalProps={{ keepMounted: true }}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "black" } }}
      >
        <div style={{ width: "250px" }}>
          {/* Add your header or logo in the side menu */}
          <div
            style={{
              padding: "16px",
              textAlign: "center",
              backgroundColor: "#000000",
              color: "white",
            }}
          >
            <Typography variant="h6">Your Logo</Typography>
          </div>
          {/* Add a divider */}
          <hr style={{ margin: "0", borderColor: "rgba(0, 0, 0, 0.12)" }} />
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={item.onClick}>
                <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "white" }} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      {/* Add your main content here */}
      <div
        style={{
          padding: "80px 16px 16px",
          marginLeft: "250px",
          color: "black",
        }}
      >
        {/* Your main content goes here
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Screen!
        </Typography>
        <Typography variant="body1">
          Customize this area with your content.
        </Typography> */}
      </div>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default HomeScreen;
