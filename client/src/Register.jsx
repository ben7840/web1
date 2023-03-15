import { useState } from "react";
export default function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return(
      <div className="bg-blue-50 h-screen flex items-center">
        <form className="w-64 mx-auto mb-12">
            <input value={username} onChange = { ev => setUsername(ev.target.value)} type="text" placeholder="Username" className="block w-full rounded-sm p-2 mb-2"/>
            <input value={password} onChange = { ev => setPassword(ev.target.value)} type="password" placeholder="Password" className="block w-full rounded-sm p-2 mb-2"/>
            <button className="bg-blue-500 text-white block w-full rounded-sm p-1 mb-1">Register</button>
        </form>
        </div>  
    );
}