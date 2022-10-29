import React from 'react';
import './Post.css'

import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  // CardActions,
  // Collapse,
  // IconButton,
  Typography,
  // red,
  Grid,
  Box, Divider
}
  from '@material-ui/core';



// import { ThumbUp, ChatBubbleOutline, AccountCircle, NearMe, ExpandMoreOutlined } from '@material-ui/icons';

const Post = ({ profilePic, image, username, timestamp, message }) => {
  return (

    <Grid container  >

      <Grid item sm={0} md={3} ></Grid>


      <Grid item sm={12} md={6} >

        <Card  className="post">
          <CardHeader
            avatar={
              <Avatar src={profilePic} className="postAvatar">
                {username.charAt(0)}
              </Avatar>
            }
            title={username}
            subheader={new Date(timestamp?.toDate()).toUTCString()}
          />
          <CardContent>
            <Typography variant="body" color="text.secondary">
              {message}
            </Typography>
          </CardContent>

          {image ? (
            <CardMedia
              component="img"
              // height="494"
              width="494"
              image={image}
            />
          ) : (<div> </div>)}

          {/* <CardMedia
        component="img"
        height="494"
        image={image}
      />   */}


        </Card>
      </Grid>
      <Grid item sm={0} md={3}  ></Grid>
      <Divider />


    </Grid>



    // <div className="post">
    //     <div className="postTop">
    //         <Avatar src={profilePic} className="postAvatar" />

    //         <div className="postTopInfo">
    //             <h3>{username}</h3>
    //             {/* <p>time</p> */}
    //             {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
    //             <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
    //         </div>
    //     </div>

    //     <div className="postBottom">
    //         <p>{message}</p>
    //     </div>

    //     <div className="postImage">
    //         <img src={image} alt=""/>
    //     </div>

    //     <div className="postOptions">
    //         {/* <div className="postOption">
    //             <ThumbUp />
    //             <p>Like</p>
    //         </div> */}

    //         {/* <div className="postOption">
    //             <ChatBubbleOutline />
    //             <p>Comment</p>
    //         </div>

    //         <div className="postOption">
    //             <NearMe />
    //             <p>Save</p>
    //         </div>

    //         <div className="postOption">
    //             <AccountCircle />
    //             <ExpandMoreOutlined />
    //         </div> */}
    //     </div>
    // </div>
  )
}

export default Post;
