import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth';

export const Navigation = () => {
  const logged =  useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">
       Home
      </NavLink>
      {logged && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
