import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineTwoToneIcon from '@material-ui/icons/ChatBubbleOutlineTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
const Post = () => {
    return (
        <div className="post">
                <div className="postHead">
                    <Avatar style={{width:"25px",height:"25px"}}/>
                    <h5 style={{marginLeft:"10px"}}>Rishikesh</h5>
                    <p style={{marginLeft:"10px"}}>5 min ago</p>
                 </div>
                 <div className="postImg">
                     <img src="https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg" alt="img" />
                 </div>   
                 <div className="postFooter">
                    <FavoriteBorderIcon />
                    <ChatBubbleOutlineTwoToneIcon />
                    <ShareTwoToneIcon />
                </div>         
        </div>
    )
}

export default Post
