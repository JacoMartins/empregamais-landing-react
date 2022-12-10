import { Container, Logo, LogoContainer, Main, Nav, NavButton } from "./styles"
import logoSvg from '../../assets/images/logo.svg';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SetStateAction, useState } from "react";
import { List } from "phosphor-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: any;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const customColors = currentPage === 'home' ? '#5FB69A' : '#2A5FBA';
  const [navMobile, setNavMobile] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(0);
  setTimeout(() => {
    setHeaderHeight(document.getElementById('header')?.clientHeight || 0);
  }, 0);

  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY);
  });

  function handleNavClick(path: string) {
    setCurrentPage(path);
    setNavMobile(false);
    window.scrollTo(0, 0);
  }

  function handleNavMobile() {
    setNavMobile(!navMobile);
  }

  return (
    <Main id="header" scrollY={scrollY}>
      <Container>
        <LogoContainer>
          <Logo src={logoSvg} alt="Logomarca Portal Emprega+" />
        </LogoContainer>

        <Nav navMobile={navMobile} headerHeight={headerHeight}>
          <ul>
            <li>
              <Link to='/'>
                <NavButton color='#5FB69A' isSelected={currentPage === 'home'} onClick={() => handleNavClick('home')}>Para você</NavButton>
              </Link>
            </li>
            <li>
              <Link to='/empresa'>
                <NavButton className="navButton" color='#43A0F5' isSelected={currentPage === 'empresa'} onClick={() => handleNavClick('empresa')}>Para empresas</NavButton>
              </Link>
            </li>
            <li>
              <Link to='/instituicoes'>
                <NavButton className="navButton" color='#2A5FBA' isSelected={currentPage === 'instituicoes'} onClick={() => handleNavClick('instituicoes')}>Para instituições de ensino</NavButton>
              </Link>
            </li>
            <li>
              <Link to='/contato'>
                <NavButton className="navButton" color='#2A5FBA' isSelected={currentPage === 'contato'} onClick={() => handleNavClick('contato')}>Contato</NavButton>
              </Link>
            </li>
          </ul>
          
          <NavButton className='mobileNavToggle' color={customColors} onClick={handleNavMobile} isSelected={navMobile}><List size={32} weight='regular' /></NavButton>
        </Nav>
      </Container>
    </Main>
  )
}