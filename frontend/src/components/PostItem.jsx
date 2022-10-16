import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import {Edit,Delete} from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { deletePost } from '../api/Post-api'

const PostItem = ({title,description,location,date,id,user,name}) => {
const [isCreator,setIsCreator]=useState(false);
  
useEffect(()=>{
  localStorage.getItem("userId")===user?setIsCreator(true):setIsCreator(false)
},[])

  return (
    <Card sx={{ width: '40%',mx:'auto' }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'Highlight',textTransform:'capitalize' }} aria-label="recipe">
          {name[0]}
        </Avatar>
      }
      title={name}
      subheader={`${date} | ${location}`}
      
    />
    <CardMedia
      component="img"
      height="194"
      image="https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant='h6'>{title}</Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    {
      isCreator && <CardActions disableSpacing sx={{display:'flex',justifyContent:'end'}} >
      <IconButton LinkComponent={Link} to={`/post/${id}`} aria-label="edit">
        <Edit color='secondary'/>
      </IconButton>
      <IconButton aria-label="delete" onClick={()=>deletePost(id)}>
        <Delete color="error" />
      </IconButton>
    </CardActions>
    }
   
  </Card>
  )
}

export default PostItem