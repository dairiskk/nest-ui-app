// src/components/Post.js
"use client";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SendIcon from "@mui/icons-material/Send";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Post = ({ username, avatar, photoUrl, likes, comments }) => {
  const [showComments, setShowComments] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleMoreOptionsClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreOptionsClose = () => {
    setAnchorEl(null);
  };

  const openMoreOptions = Boolean(anchorEl);
  const id = openMoreOptions ? "more-options-popover" : undefined;

  return (
    <Card
      style={{
        backgroundColor: "#333",
        color: "white",
        maxWidth: 600,
        margin: "auto",
        marginBottom: 20,
      }}
    >
      <CardHeader
        avatar={<Avatar alt={username} src={avatar} />}
        action={
          <>
            <IconButton
              aria-label="settings"
              onClick={handleMoreOptionsClick}
              style={{ color: "white" }}
            >
              <MoreHorizIcon />
            </IconButton>
            <Popover
              id={id}
              open={openMoreOptions}
              anchorEl={anchorEl}
              onClose={handleMoreOptionsClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <List style={{ backgroundColor: "#333" }}>
                <ListItem onClick={handleMoreOptionsClose}>
                  <ListItemText primary="Follow" style={{ color: "white" }} />
                </ListItem>
                <ListItem onClick={handleMoreOptionsClose}>
                  <ListItemText primary="Unfollow" style={{ color: "white" }} />
                </ListItem>
              </List>
            </Popover>
          </>
        }
        title={username}
      />
      <CardMedia
        component="img"
        height="auto"
        image={photoUrl}
        alt="Post Photo"
        style={{ maxHeight: 600 }}
      />
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="primary"
            aria-label="like"
            style={{ marginLeft: -12, color: "white" }}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="comment"
            style={{ marginLeft: -12, color: "white" }}
          >
            <CommentIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="send"
            style={{ marginLeft: "auto", color: "white" }}
          >
            <SendIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="bookmark"
            onClick={handleToggleComments}
            style={{ color: "white" }}
          >
            <BookmarkBorderIcon />
          </IconButton>
        </div>
        <Typography
          variant="subtitle1"
          component="div"
          style={{ color: "white" }}
        >
          {likes} likes
        </Typography>
      </CardContent>
      {showComments && (
        <>
          <Divider style={{ backgroundColor: "white" }} />
          <CardContent>
            {comments.map((comment, index) => (
              <Typography
                key={index}
                variant="body2"
                component="div"
                style={{ color: "white" }}
              >
                <strong>{username}</strong> {comment}
              </Typography>
            ))}
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default Post;
