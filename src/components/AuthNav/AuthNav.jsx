// import { NavLink } from 'react-router-dom';
import { AuthNavStyled } from './AuthNavStyled';


export const AuthNav = () => {
  return (
    <div>
      <AuthNavStyled to="/register">
        Register
      </AuthNavStyled>

      <AuthNavStyled  to="/login">
        Log In
      </AuthNavStyled>
    </div>
  );
};
