import { useContext } from "react";
import { Accountcontext } from "../context/Accountprovider";
import { Box, styled, Typography } from "@mui/material";

const Dpcontainer = styled(Box)`
display: flex;
justify-content: center;
padding: 30px 0px;`;

const Dp = styled('img')({
    width: '160px',
    height: 'auto',
    borderRadius: '50%'
})

const Info = styled(Box)`
background: #fff;
box-Shadow: 0px 1px 3px rgba(0,0,0,0.08);
padding: 8px 30px;
& :first-child{
    font-size: 13px;
    color: #009688;
    font-weight: 200;
}
& :last-child{
    margin:8px 0px;
    color: #4a4a4a;
}
`
const Description = styled(Box)`
padding:15px 20px 28px 30px;
& > p{
    font-size: 12px;
    color: #8696a0;
}`

const Profile = () => {
    const {account} = useContext(Accountcontext);
    return(
        <>
           <Dpcontainer>
               <Dp src={account.picture} alt="dp" />
           </Dpcontainer>
           <Info>
            <Typography>Your Name:</Typography>
            <Typography>{account.name}</Typography>
           </Info>
           <Description>
            <Typography>
            This is not your username or pin. This name will be visible to your WhatsApp contacts.
            </Typography>
           </Description>
           <Info>
            <Typography>  About </Typography>
            <Typography>Hey Whatsapp!</Typography>
           </Info>
        </>
    )
}
export default Profile;