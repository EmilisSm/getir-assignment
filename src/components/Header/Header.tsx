import { HeaderStyled } from './Header.styled';
import Logo from '../../assets/Logo.png';

export const Header: React.FC = () => (
  <HeaderStyled>
    <img src={Logo} alt="Page main logo" />
  </HeaderStyled>
);
