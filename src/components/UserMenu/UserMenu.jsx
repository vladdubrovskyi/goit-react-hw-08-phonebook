import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operationsAuth'; 
import { selectUser } from '../../redux/auth/selectorsAuth';
import { StyledBtn } from '../CommonStyled/Btn.styled';
import { StyledText } from '../CommonStyled/StyledText';
import { UserMenuStyled } from './UserMenuStyled';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user =  useSelector(selectUser);


  return (
    <UserMenuStyled>
      <StyledText>Welcome, {user.name}</StyledText>
      <StyledBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledBtn>
    </UserMenuStyled>
  );
};
