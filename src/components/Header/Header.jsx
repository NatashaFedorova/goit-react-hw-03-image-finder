import { HeaderBox, HeaderContainer } from './Header.styled';

const Header = ({ children }) => {
  return (
    <HeaderBox>
      <HeaderContainer>{children}</HeaderContainer>
    </HeaderBox>
  );
};

export default Header;
