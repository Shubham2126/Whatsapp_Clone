import Drawer from '@mui/material/Drawer'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box,styled,Typography } from '@mui/material';
import Profile from './profile';

const Header = styled(Box)`
height:88px;
background-color: #008069;
color:#ffffff;
display:flex;
& > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
}`;
const Component = styled(Box)`
background: #ededed;
height: 85%;`;

const DrawerStyle = {
    left : 30,
    top :  32,
    width : '29%',
    height : '90%'

}
const InfoDrawer=(e) => {
  const handleClose =() =>{
    e.setOpen(null);
  }

    return(
        <div>
            <Drawer
      
      open={e.open}
      onClose={handleClose}
      PaperProps={{sx : DrawerStyle}}
      style={{zIndex : 1500}}
    >
        <Header>
         <ArrowBackIcon onClick={() => e.setOpen(false)}/>
         <Typography>Profile</Typography>
        </Header>
        <Component>
          <Profile/>
        </Component>
        </Drawer>
    </div>
    )
}
export default InfoDrawer;