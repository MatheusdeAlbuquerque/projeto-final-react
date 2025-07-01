import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) =>{
    const isAuthenticated = true; //aqui se ficar true a rota fica aberta para entrar em dashboard, mas se estiver false a rota fica fechada.
    return isAuthenticated ? children : <Navigate to="/home" />
}

export default PrivateRoute;