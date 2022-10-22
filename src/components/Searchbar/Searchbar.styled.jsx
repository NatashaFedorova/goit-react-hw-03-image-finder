import styled from 'styled-components';
import { Field, Form } from 'formik';
import { ImSearch } from 'react-icons/im';

export const SearchForm = styled(Form)`
  display: flex;
`;

export const Input = styled(Field)`
  width: 350px;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  border: ${props => props.theme.borders.none};
  color: ${props => props.theme.colors.dark};
  background-color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.normal};
  font-weight: ${props => props.theme.fontWeight.normal};
`;

export const Btn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: ${props => props.theme.borders.none};
  background-color: ${props => props.theme.colors.light};
  margin: 0;
  padding: 0;

  &:hover svg,
  &:focus svg {
    fill: ${props => props.theme.colors.accent};
  }
`;

export const Icon = styled(ImSearch)`
  fill: ${props => props.theme.colors.searchIcon};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
