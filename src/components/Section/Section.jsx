import { SectionEl, Container } from './Section.styled';

const Section = ({ children }) => {
  return (
    <SectionEl>
      <Container>{children}</Container>
    </SectionEl>
  );
};

export default Section;
