import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operationsAuth'; 
import { selectUser } from '../../redux/auth/selectorsAuth';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const user =  useSelector(selectUser);


  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
