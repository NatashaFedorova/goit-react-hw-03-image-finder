import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  display: block;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  margin: ${props => props.theme.spacing(0)} auto;
  margin-top: ${props => props.theme.spacing(8)};
  border: ${props => `1px solid ${props.theme.colors.accent}`};
  border-radius: ${props => props.theme.radii.normal};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.accent};
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.accent};
  }
`;
