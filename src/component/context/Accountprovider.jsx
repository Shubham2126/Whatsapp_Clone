import { createContext, useState } from "react";
 
export const Accountcontext = createContext(null);

const Accountprovider = ({children}) =>{
    const [account,setaccount] = useState();
    return(
        <Accountcontext.Provider value={{
            account,
            setaccount
        }}>
            {children}
        </Accountcontext.Provider>
    )
}
export default Accountprovider;