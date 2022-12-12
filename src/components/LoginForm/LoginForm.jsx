import { useDispatch } from 'react-redux';
import { logIn } from "../../redux/auth/operationsAuth"
import {StyledForm} from "../ContactForm/ContactForm.styled"
import { StyledLabel } from '../CommonStyled/Label.styled';
import { StyledInput } from '../CommonStyled/Input.styled';
import { StyledBtn } from '../CommonStyled/Btn.styled';
import { StyledSection } from '../Section/Section.styled';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledSection>
<StyledForm  onSubmit={handleSubmit} >
      <StyledLabel >
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <StyledBtn type="submit">Let's go</StyledBtn>
    </StyledForm>
    </StyledSection>  
  );
};

