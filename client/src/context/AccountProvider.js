import { createContext, useContext, useState } from "react"

const AccountContext = createContext();

const AccountProvider = ({children}) =>{

    const [account , setAccount] = useState();
    const [person , setPerson] = useState({});
    const [text , setText] = useState("");

    return(
        <AccountContext.Provider value={{account ,person,setPerson,text,setText, setAccount}}>
            {children}
        </AccountContext.Provider>
    )
}

const useAccountState = () => {
    return useContext(AccountContext);
}

export {AccountContext , AccountProvider , useAccountState};