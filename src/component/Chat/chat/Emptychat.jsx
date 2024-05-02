import { Box, Typography, styled } from '@mui/material';
import {emptyChatImage} from '../../../constant/data';
import Divider from '@mui/material/Divider';


const Container = styled(Box)`
background-color: #f8f9fa;
padding: 30px 150px;
height: 100vh;
overflow: none;
text-align: center;
`
const Image = styled('img')({
    width:400,
    marginTop:100
})
const  Title = styled(Typography)`
font-size:28px;
margin-top:25px;
font-weight:300;
color:#41525d;
font-family:inherit;`

const Subtitle = styled(Typography)`
font-size:14px;
font-weight:400;
font-family:inherit;
color:#667781;`
const StyleDivider = styled(Divider)`
margin: 20px 0px;
opacity: 0.4;`

const Emptychat = () =>{
    return(
        <Container>
            
                 <Image src={emptyChatImage} alt="Chat" />
                 <Title>WhatsApp Web</Title>
                 <Subtitle>Now send and recieve message without keeping ypour phone online.</Subtitle>
                 <Subtitle>Use WhatsApp on up to  4 linked devices and 1 phone at the same time.</Subtitle>
                 <StyleDivider />
        </Container>
    )
}
export default Emptychat;