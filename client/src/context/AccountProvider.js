import { createContext, useContext, useState } from "react"

const AccountContext = createContext();

const AccountProvider = ({children}) =>{

    const [account , setAccount] = useState();

    return(
        <AccountContext.Provider value={{account , setAccount}}>
            {children}
        </AccountContext.Provider>
    )
}

const useAccountState = () => {
    return useContext(AccountContext);
}

export {AccountContext , AccountProvider , useAccountState};