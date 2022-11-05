import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, Menu, NotificationsRounded } from "@mui/icons-material";
import { useSelector,useDispatch } from "react-redux";
import {openAuth} from '../redux/user/userSlice'
import UserMenu from "./UserMenu";
import { useState } from "react";
import Auth from "./Auth";
import Sidebar from "./Sidebar";
const Header = () => {
  const [anchorUserMenu,setAnchorUserMenu]=useState(null)
  const [drawerMenu,setDrawerMenu]=useState(false);
  const dispatch=useDispatch()
  const user = useSelector((state) => state.user.currentUser);
  return (
    <AppBar elevation={1} position='static' sx={{ bgcolor: "white", color: "black" }}>
      <Toolbar>
        <Drawer anchor="left" open={drawerMenu} onClose={()=>setDrawerMenu(false)}>
         <Sidebar setDrawerMenu={setDrawerMenu}/>
        </Drawer>
        <IconButton onClick={()=>setDrawerMenu(true)}>
          <Menu/>
        </IconButton>
        <Typography variant="h4" marginRight={"auto"} sx={{letterSpacing:"-2px",fontWeight:'medium',fontFamily:"monospace"}}>Trip-Share</Typography>
        <Stack flexDirection={"row"} columnGap={3} alignItems="center">
          {user ? (
            <>
              <Badge badgeContent={1} color="secondary">
                <NotificationsRounded />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
              <IconButton onClick={(e)=>{setAnchorUserMenu(e.currentTarget)}}>
              <Avatar sx={{bgcolor:'blue'}}>
                {
                  user.photoURL?<img src={user.photoURL} width='48px' height='48px' sx={{objectFit:'cover'}} />:<Typography variant='h5' sx={{textTransform:'capitalize'}}>j</Typography>
                }
              </Avatar>
              </IconButton>
            </>
          ) : (
            <>
             
              <Button
                variant="contained"
                disableElevation
                onClick={()=>dispatch(openAuth())}
                sx={{
                  textTransform: "none",
                  fontSize: 16,
                  letterSpacing: "-1px",
                }}
              >
                Login
              </Button>
            </>
          )}
        </Stack>
        <UserMenu {...{anchorUserMenu,setAnchorUserMenu}}/>
        {/* <Auth/> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
