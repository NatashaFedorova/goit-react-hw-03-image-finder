import styled from 'styled-components';

export const List = styled.ul`
  margin: ${props => props.theme.spacing(0)} auto;
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(5)};
`;
