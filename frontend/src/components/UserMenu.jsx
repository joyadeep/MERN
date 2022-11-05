import { Logout, Settings } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../redux/user/userSlice";
import axios from 'axios'

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const userId=useSelector((state)=>state.user.currentUser);
  const dispatch=useDispatch();
    const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };
  const handleAuth=async()=>{
    try {
      const res=await axios.get('http://localhost:5000/user/me',{
        withCredentials:true
      })
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        {userId?.name}
      </MenuItem>
      <MenuItem onClick={()=>{
        handleAuth()
      }}>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem onClick={()=>dispatch(logout())}>
        <ListItemIcon >
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
