import styled from 'styled-components';

export const SectionEl = styled.section`
  padding-top: ${props => props.theme.spacing(35)};
  padding-bottom: ${props => props.theme.spacing(8)};
`;
export const Container = styled.div`
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  margin: ${props => props.theme.spacing(0)} auto;
`;
