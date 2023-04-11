//import Register from "./Register";
import axios from "axios";
import Routes from  "./Routes"
import { UserContextProvider } from "./UserContext";
function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.withCredentials = true;
  //const username
  return (<UserContextProvider>
    <Routes />
    </UserContextProvider>
  )
}

export default App
