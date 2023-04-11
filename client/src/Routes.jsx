import Register from "./Register"
import {useContext} from "react";
//export const UserContext = createContext();
import {useContext} from './UserContext.jsx'
export default function Routes(){

        const{ userName, id} = useContext(userContext);
        if(username){
            return 'logged in!' + username;//after log in "logged in" show korbe but refresh korla abar chola jabe
        }
        return(
            <Register />
        )
    

}