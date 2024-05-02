 import { Dialog, Box, styled } from "@mui/material";
 import Menu from "./menu/Menu";
 import Emptychat from "./chat/Emptychat";

 const dialogstyle = {
    height : '95%',
    width : '100%',
    margin: '30px',
    maxWidth : '100%',
    maxHeigth : '100%',
    borderRadius: '0',
    borderShadow : 'none',
    overflow : 'hidden'
}
const Container = styled(Box)`
display: flex;`
const Leftcontainer =styled(Box)`
min-width:400px;
heigth:100%`
const Rightcontainer = styled(Box)`
width:100%;
min-width:300px;
border-left:2px solid #ededed;`

 const chatDialog = () => {
    return(
    
        <Dialog
        open={true}
        PaperProps={{ sx : dialogstyle}}
        hideBackdrop={true}
        >
     <Container>
        <Leftcontainer>
         <Menu />
        </Leftcontainer>
        <Rightcontainer>
          <Emptychat />
        </Rightcontainer>
     </Container>
        
    </Dialog>
            
    )
 }
 export default chatDialog;