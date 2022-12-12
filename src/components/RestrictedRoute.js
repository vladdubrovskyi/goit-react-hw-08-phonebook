import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectorsAuth';
export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const logged = useSelector(selectIsLoggedIn);
  return logged ? <Navigate to={redirectTo} /> : Component;
};
