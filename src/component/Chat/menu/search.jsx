import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Box, styled } from '@mui/material';
const Container = styled(Box)`
height:55px;
width:100%;
display:flex;
align-items:center;
border-bottom: 2px solid #f2f2f2;`
const Wrapper = styled(Box)`
background-color:#f0f2f5;
width:100%;
margin: 6px;
border-radius:10px`

const Icon = styled(Box)`
position:absolute;
height: auto;
color:#919191;
padding: 4px;
`
const InputField = styled(InputBase)`
width:100%;
padding: 18px;
padding-left:50px;
height: 12px;
`
 const searchbar = () =>{
    return(
        <Container>
            <Wrapper>
               <Icon>
                <SearchIcon/>
               </Icon>
                <InputField
                 placeholder='Search or start new chat'/>
            </Wrapper>
        </Container>
    )
 }
 export default searchbar;