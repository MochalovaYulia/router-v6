import { useLocation, Navigate } from 'react-router-dom';
import { UseAuth } from '../hook/UseAuth';


export const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = UseAuth();

    if (!user) {
        return <Navigate to='/login' state={{from: location}} />
    }

  return children;
}