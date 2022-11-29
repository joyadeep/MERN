import { Box } from '@mui/material'
import React from 'react'
import Scale from '../assets/images/scale.jpg'

const ListItem = () => {
  return (
    <>
    <img src={Scale} width="200px" height="150px" style={{borderRadius:'7px',objectFit:"cover"}} />
   
    </>
  )
}

export default ListItem