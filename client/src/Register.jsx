import { useState } from "react";

import axios from 'axios';
import { UserContext } from "./UserContext";
//
export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister]=useState('register')
    const {setUsername:setLoggedInusername,setId}= useContext(UserContext)
    //w3
    async function register(ev){
        ev.preventDefault();
        const {data} = await axios.post('/register', {username,password})
        setLoggedInusername(username);
        setId(data.id);
    }
    return(
      <div className="bg-blue-50 h-screen flex items-center">
        <form className="w-64 mx-auto mb-12" onSubmit={register}> 
            <input value={username} onChange = { ev => setUsername(ev.target.value)} type="text" placeholder="Username" className="block w-full rounded-sm p-2 mb-2"/>
            <input value={password} onChange = { ev => setPassword(ev.target.value)} type="password" placeholder="Password" className="block w-full rounded-sm p-2 mb-2"/>
            <button className="bg-blue-500 text-white block w-full rounded-sm p-1 mb-1">Register</button>
            <div className="test-center mt-2">
            Already a member? <button onClick={() => setIsLoginOrRegister('login')}>Login here</button></div>
            
        </form>
        </div>  
    );
}