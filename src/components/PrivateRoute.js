import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/selectorsAuth';
export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const logged = useSelector(selectIsLoggedIn);
  const refreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !logged && !refreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
