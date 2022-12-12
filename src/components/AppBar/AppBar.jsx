import { Navigation } from '../Navigation/Navigation'; 
import { UserMenu } from '../UserMenu/UserMenu'; 
import { AuthNav } from '../AuthNav/AuthNav'; 
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

export const AppBar = () => {
 const logged =  useSelector(selectIsLoggedIn);

  return (
    <header >
      <Navigation />
      {logged ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
