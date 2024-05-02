import { Dialog, Box, styled } from "@mui/material";
import { qrCodeImage } from "../../constant/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { addUser } from "../../Service/API";
import { useContext } from "react";
import { Accountcontext } from "../context/Accountprovider";
const dialogstyle = {
    marginTop : '8%',
    height : '90%',
    width : '60%',
    maxWidth : '100%',
    maxHeigth : '100%',
    borderShadow : 'none'
}
const Component = styled(Box)`
display:flex;
margin-top:50px;
justify-content:space-around;`
const Title = styled('p')({
    fontSize:'26px',
    color:'grey',
    fontWeight:'100'

})
const Points = styled('ol')({
    paddingLeft: '20px',
})
const Pointitem =styled('li')({
    marginTop:'10px'
})
const QRcode = styled('img')({

    height:'200px',
    width:'200px'
})
const Login = () => {
    const {setaccount} = useContext(Accountcontext);
    const onLoginSucces = async(res) =>{
        const decoded=jwtDecode(res.credential);
        setaccount(decoded);
        console.log(decoded);
        addUser(decoded);

    }
    const onLoginErrr = (res) =>{

    }
    return(
        <Dialog
            open={true}
            PaperProps={{ sx : dialogstyle}}
            hideBackdrop={true}
        >
         <Component>
            <Box>
                <Title>Use WhatsApp on your computer</Title>
                <Points>
                    <Pointitem>Open WhatsApp on your phone</Pointitem>
                    <Pointitem>Tap Menu or Settings and select Linked Devices </Pointitem>
                    <Pointitem>Point your phone to this screen to capture the QR code</Pointitem>
                </Points>
            </Box>
            <Box>
                <QRcode src={qrCodeImage} alt="QR Code" />
                <Box>
                    <GoogleLogin 
                    onSuccess={onLoginSucces}
                    onError={onLoginErrr}/>
                </Box>
            </Box>
         </Component>
        </Dialog>
    )
}
export default Login;