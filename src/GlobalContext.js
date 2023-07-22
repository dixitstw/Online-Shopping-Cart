import { createContext } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = (props)=> {
    return <GlobalContext.Provider value={{'name': 'Kishor', 'address': 'Kathmandu'}}>
        {props.children}
    </GlobalContext.Provider>
}