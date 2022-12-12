import { Navigation } from '../Navigation/Navigation'; 
import { UserMenu } from '../UserMenu/UserMenu'; 
import { AuthNav } from '../AuthNav/AuthNav'; 
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';
import { HeaderAppStyled } from './HeaderAppStyled';

export const AppBar = () => {
 const logged =  useSelector(selectIsLoggedIn);

  return (
    <HeaderAppStyled >
      <Navigation />
      {logged ? <UserMenu /> : <AuthNav />}
    </HeaderAppStyled>
  );
};
