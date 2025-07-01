import { Outlet, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <span>
        <Button variant='outlined' onClick={() => navigate("/")}>Logout</Button>
      </span>
      <ul>
        <li>
          <a href="/dashboard/profile">Perfil</a>
        </li>
        <li>
          <a href="dashboard/settings">Configurações</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Dashboard;
    