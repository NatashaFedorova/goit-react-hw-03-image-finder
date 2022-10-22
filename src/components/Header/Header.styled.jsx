import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: ${props => props.theme.spacing(0)} auto;
  padding: 20px 0;
  background-color: ${props => props.theme.colors.header};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
