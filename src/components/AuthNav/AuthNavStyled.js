import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: #b393d3;
  margin-left: 20px;
  margin-right: 20px;
  &:hover {
    color: #b3b3b3;
  }
  &.active {
    color: #553c9a;
    border-bottom: 1px solid #553c9a;
    &:hover {
      color: #b3b3b3;
    }
  }
`;
