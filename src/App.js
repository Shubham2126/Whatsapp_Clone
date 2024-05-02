
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './component/messenger.jsx'
import Accountprovider from './component/context/Accountprovider';
function App() {
  // const clientId="983871723859-adkv4akup4addumr2f8h5stftqsg3989.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId="983871723859-adkv4akup4addumr2f8h5stftqsg3989.apps.googleusercontent.com">
    <Accountprovider>
       <Messenger />
    </Accountprovider>  
    
    </GoogleOAuthProvider>
  );
}

export default App;
