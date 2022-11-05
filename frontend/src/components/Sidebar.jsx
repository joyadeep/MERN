import { Close, Inbox } from '@mui/icons-material'
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'

const Sidebar = ({setDrawerMenu}) => {
  return (
    <Box>
        <Typography align="right">
        <IconButton onClick={()=>setDrawerMenu(false)}>
            <Close/>
        </IconButton>
        </Typography>
        <Divider/>
        <List sx={{minWidth:'250px',maxWidth:'400px'}}>
            <ListItem disablePadding>
                <ListItemButton 
                onClick={()=>{
                    axios.get("http://localhost:5000/user/me",{
                        withCredentials:true
                    }).then((user)=>{
                        console.log(user)
                    }).catch((err)=>{
                        console.log(err)
                    })
                }}
                >
                    <ListItemIcon>
                        <Inbox/>
                    </ListItemIcon>
                <ListItemText primary="User"/>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Inbox/>
                    </ListItemIcon>
                <ListItemText primary="Inbox"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Inbox/>
                    </ListItemIcon>
                <ListItemText primary="Inbox"/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Inbox/>
                    </ListItemIcon>
                <ListItemText primary="Inbox"/>
                </ListItemButton>
            </ListItem>

        </List>
    </Box>
  )
}

export default Sidebar