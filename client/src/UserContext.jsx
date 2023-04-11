import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext({});
export function UserContextProvider({children}){
    const [username, setUsername]=useState(null);
    const [id, setId] = useState(null)
    useEffect(() => { //1hr
        axios.get('/profile', {withCredentials:true}).then(response=>{
            setId(response.data.userId);
            setUsername(response.data.username);
        })
    }, [])
    return(
        <UserContext.Provider value={{username, SetUsername, id, setId}}>{children}</UserContext.Provider>
    )
}