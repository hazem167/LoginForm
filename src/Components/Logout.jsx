import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { LogoutDelete } from '../redux/LoginApiSlice';

export default function Logout() {
    const dispatch = useDispatch();

    function handelLogoutClick() {
        dispatch(LogoutDelete());
    }
  return (
    <div style={{display:"flex",gap:"10px"}}>
          <h1>Welcome</h1>
        <Button variant="contained" color="error" onClick={handelLogoutClick}>Logout</Button>
          
    </div>
  )
}
