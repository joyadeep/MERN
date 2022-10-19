import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, NotificationsRounded } from "@mui/icons-material";
import { useSelector,useDispatch } from "react-redux";
import {login,openAuth} from '../redux/user/userSlice'
import UserMenu from "./UserMenu";
import { useState } from "react";
import Auth from "./Auth";
const Header = () => {
  const [anchorUserMenu,setAnchorUserMenu]=useState(null)
  const dispatch=useDispatch()
  const loginStatus = useSelector((state) => state.user.isLoggedin);
  // const loginStatus=true;
  return (
    <AppBar elevation={1} sx={{ bgcolor: "white", color: "black" }}>
      <Toolbar>
        <Typography variant="h4" marginRight={"auto"} sx={{letterSpacing:"-2px",fontWeight:'medium',fontFamily:"monospace"}}>Trip-Share</Typography>
        <Stack flexDirection={"row"} columnGap={3} alignItems="center">
          {loginStatus ? (
            <>
              <Badge badgeContent={1} color="secondary">
                <NotificationsRounded />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <Mail />
              </Badge>
              <IconButton onClick={(e)=>{setAnchorUserMenu(e.currentTarget)}}>
              <Avatar>J</Avatar>
              </IconButton>
            </>
          ) : (
            <>
              {/* if not logged in  */}
              <Button
                variant="outlined"
                onClick={()=>dispatch(login())}
                sx={{
                  textTransform: "none",
                  fontSize: 16,
                  letterSpacing: "-1px",
                }}
              >
                Login
              </Button>
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
                Signup
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
