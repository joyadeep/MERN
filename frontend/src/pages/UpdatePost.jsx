import { Box, Button, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostByID, updatePost } from '../api/Post-api'

const UpdatePost = () => {
    const [inputs,setInputs]=useState({
    title:'',
    description:'',
    image:'',
    location:''
  })
  const {id}=useParams()
  
  const handleChange = (e) => {
    setInputs((preval) => ({
      ...preval,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    updatePost(id,inputs).then((res)=>console.log(res))
    console.log(inputs)
  }
    useEffect(()=>{
        getPostByID(id).then((res)=>setInputs({
            title:res.title,
            description:res.description,
            location:res.location,
            image:res.image,
        }))
    },[id])
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
    <Paper sx={{ width: "40%", pt: 2 }} elevation={1}>
      <form onSubmit={handleSubmit}>
        <Typography
          align="center"
          variant="h4"
          fontWeight="bold"
          letterSpacing="-2px"
        >
          Update Post
        </Typography>
        <Box px={3} py={3}>
              <InputLabel>Title</InputLabel>
              <TextField
                type="text"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                size="medium"
                margin="normal"
                fullWidth
              />
              <InputLabel>Image URL</InputLabel>
              <TextField
                type="text"
                name="image"
                value={inputs.image}
                onChange={handleChange}
                size="medium"
                margin="normal"
                fullWidth
              />
          <InputLabel>Description</InputLabel>
          <TextField
          multiline
          rows={4}
            type="text"
            name="description"
            value={inputs.description}
            onChange={handleChange}
            size="medium"
            margin="normal"
            fullWidth
          />
          <InputLabel>Location</InputLabel>
          <TextField
            type="text"
            name="location"
            value={inputs.location}
            onChange={handleChange}
            size="medium"
            margin="normal"
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            px={1}
            py={2}
            sx={{ fontSize: "16px", textTransform: "none", mt: 2 }}
            disableElevation
            fullWidth
          >Update
          </Button>
        </Box>
      </form>
    </Paper>
  </Box>
  )
}

export default UpdatePost