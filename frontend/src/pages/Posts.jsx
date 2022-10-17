import { Box, Stack } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getAllPost } from '../api/Post-api'
import PostItem from '../components/PostItem'

const Posts = () => {
  const[posts,setPosts]=useState([])
  useEffect(()=>{
    getAllPost().then((data)=>setPosts(data)).catch((err)=>console.log(err))
  },[])
  return (
    <>
    
      <Stack gap={2} sx={{py:4}}>
       {
        posts.map((item,index)=>(
          <PostItem key={index} title={item.title} description={item.description} location={item.location} date={item.date} id={item._id} user={item.user._id} name={item.user.name} />
        ))
       }
      </Stack>
    </>
  )
}

export default Posts