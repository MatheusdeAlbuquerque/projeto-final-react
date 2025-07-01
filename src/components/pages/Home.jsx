import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

const Home = () =>{
    const navigate = useNavigate();

    return(
        <>
            <h1>Seja Bem Vindo!</h1>
            <Button variant="contained" onClick={() => navigate("/dashboard")}>Login</Button>
        </>
    )

}

export default Home;