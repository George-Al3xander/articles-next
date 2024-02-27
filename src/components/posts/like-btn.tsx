"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grow, IconButton,  Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import {  useRouter } from 'next/navigation';
import { likePost } from '../../../lib/actions';


const LikeBtn =  ({postId,isLiked, likesCount,authStatus}:{postId:  number, likesCount: number,isLiked: boolean, authStatus: boolean}) => {
   
    const [count, setCount] = useState(likesCount);
    const [likeStatus, setLikeStatus] = useState(isLiked);    
    const {push} = useRouter()


    const handleClick = async (e:  SyntheticEvent) => {
        e.preventDefault();         
        if(authStatus) {
            if(likeStatus) {
                setCount(prev => prev - 1)
            } else {
                setCount(prev => prev + 1)
            }
            setLikeStatus(prev => !prev)
            const likeRes =  await likePost({postId,likesCount, likeStatus});
            console.log(likeRes)
            setCount(likeRes.likesCount)
            setLikeStatus(likeRes.likeStatus)
        } else {
            push('/api/auth/login')
        }      
    }
   
    
    return(<IconButton onClick={handleClick} sx={{alignSelf:"center"}} color="error"  aria-label='like button'>
        {likeStatus 
            ? <FavoriteIcon />
            : <FavoriteBorderIcon />
        }   
        <Grow  
            mountOnEnter 
            unmountOnExit
            in={count > 0}
            style={{ transformOrigin: '0 0 0' }} 
            {...(count > 0 ? { timeout: 700 } : {})}
        >
            <Typography ml={0.3} my="auto" color={"black"}>{count > 0 ? count : ""}</Typography>
        </Grow>  
    </IconButton>)
}

export default LikeBtn

