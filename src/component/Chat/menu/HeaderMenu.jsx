import styled from '@emotion/styled';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

const MenuOption = styled(MenuItem)`
color:#4a4a4a;
font-size:14px;
padding:15px 60px 5px 24px`


const HeaderMenu = ({setOpenDrawer}) =>{
    const [open,setOpen] = useState(null);
    const handleClose=() => {
        setOpen(null);
    }
    const handleClick=(e) =>{
        setOpen(e.currentTarget);
    }
    return(
        <>
        <MoreVertIcon onClick={handleClick}  />
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
        >
        <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
      </Menu>
       </>
    )
}
export default HeaderMenu;