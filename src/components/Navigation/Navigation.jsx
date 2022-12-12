
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';
import { AuthNavStyled } from '../AuthNav/AuthNavStyled';
export const Navigation = () => {
  const logged =  useSelector(selectIsLoggedIn);
  return (
    <nav>
      <AuthNavStyled to="/">
       Home
      </AuthNavStyled>
      {logged && (
        <AuthNavStyled to="/contacts">
          Contacts
        </AuthNavStyled>
      )}
    </nav>
  );
};
