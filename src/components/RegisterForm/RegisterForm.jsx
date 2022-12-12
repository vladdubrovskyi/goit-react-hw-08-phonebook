import { useDispatch } from 'react-redux';
import { register } from "../../redux/auth/operationsAuth";
import {StyledForm} from "../ContactForm/ContactForm.styled"
import { StyledLabel } from '../CommonStyled/Label.styled';
import { StyledInput } from '../CommonStyled/Input.styled';
import { StyledBtn } from '../CommonStyled/Btn.styled';
import { StyledSection } from '../Section/Section.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledSection>
<StyledForm onSubmit={handleSubmit} >
      <StyledLabel>
        Username
        <StyledInput type="text" name="name" />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <StyledBtn type="submit">Register</StyledBtn>
    </StyledForm>
    </StyledSection>
    
  );
};