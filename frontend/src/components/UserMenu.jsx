import { Logout, Settings } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../redux/user/userSlice";

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const dispatch=useDispatch();
    const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };
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
