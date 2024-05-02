import { useContext} from "react";
import { Accountcontext } from "../../context/Accountprovider";
import { Box, styled } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../Profile/Accountinfo";
import { useState } from "react";

const Container = styled(Box)`
display: flex;
justify-content:space-between;
align-items: center;
height:50px;
background:#ededed;
padding: 15px 18px;`
 const Image = styled('img')({
    heigth: 50,
    width: 50,
    borderRadius: '50%'
 })
 const Wrapper = styled(Box)`
 & > * {
    padding:14px;
 }`
 const Header = ()=>{
    const { account } = useContext(Accountcontext);

    const [open,setOpenDrawer] = useState(null);

    const toggledrawe = () =>{
      setOpenDrawer(true);
    }

    return(
        <>
          <Container>

             <Image src={account.picture} alt="dp" onClick={() => toggledrawe()} />
            <Wrapper>
                <ChatIcon />
                <HeaderMenu setOpenDrawer={setOpenDrawer}/>
            </Wrapper>
          </Container>
          <InfoDrawer open={open} setOpen={setOpenDrawer}/>
        </>
    )
 }
 export default Header;