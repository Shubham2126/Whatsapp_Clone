import {AppBar,Toolbar, styled, Box} from "@mui/material"
import Log from "./Account/LoginDialog"
import Chat from "./Chat/chatDialog"
import { useContext } from "react"
import { Accountcontext } from "./context/Accountprovider"

const Component = styled(Box)`
Height : 100vh;
overflow : none;
background-color : #dcdcdc`
const LoginHeader = styled(AppBar)`
Height : 180px;
background-color : 	#00bfa5;
box-shadow : none;`
const Header = styled(AppBar)`
Height : 120px;
background-color : 	#00bfa5;
box-shadow : none;`
const Messenger = () => {
    const {account} = useContext(Accountcontext)
    return(
      <Component>
        {
            account ? 
            <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <Chat /> 
            </>:
            <>
            <LoginHeader>
                <Toolbar>

                 </Toolbar>
            </LoginHeader>

            <Log />
             </> 
        }
      </Component>  
    )
}
export default Messenger;