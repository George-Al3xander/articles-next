import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getPostLikesCount, isCurrUserLiked } from '../../../lib/db/methods';
import { Button, Grow, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';


const LikeBtn = async ({postId}:{postId:  number}) => {
   

    const likes = await getPostLikesCount(postId);
    const isLiked = await isCurrUserLiked()

   
  
    
    return(<IconButton sx={{alignSelf:"center"}} color="error"  aria-label='like button'>
        {isLiked 
            ? <FavoriteIcon />
            : <FavoriteBorderIcon />
        }   
        {/* <Grow {...(likes > 0 ? { timeout: 700 } : {})} mountOnEnter unmountOnExit in={isLiked}><FavoriteIcon /></Grow>
        <Grow {...(likes <= 0 ? { timeout: 1400 } : {})} mountOnEnter unmountOnExit in={!isLiked}><FavoriteBorderIcon /></Grow> */}
        <Grow  
            mountOnEnter 
            unmountOnExit
            in={likes > 0}
            style={{ transformOrigin: '0 0 0' }} 
            {...(likes > 0 ? { timeout: 700 } : {})}
        >
            <Typography ml={0.3} my="auto" color={"black"}>{likes > 0 ? likes : ""}</Typography>
        </Grow>  
    </IconButton>)
}

export default LikeBtn

