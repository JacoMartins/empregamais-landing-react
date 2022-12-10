import { Main, NavButton } from "./styles";
import logo from '../../assets/images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import { SetStateAction, useState } from "react";
import { Bank, Buildings, Detective, Envelope, Heart, Info, Keyhole, Money, Pen, Phone, TrademarkRegistered, User, UsersThree } from "phosphor-react";

interface FooterProps {
  currentPage: string;
  setCurrentPage: any;
}

export default function Footer({ currentPage, setCurrentPage }: FooterProps) {
  const [scrollY, setScrollY] = useState(0);

  window.addEventListener('scroll', () => {
    setScrollY(window.scrollY);
  });

  function handleNavClick(path: string) {
    setCurrentPage(path);
    window.scrollTo(0, 0);
  }

  return (
    <Main>
      <div>
        <div className="logoContainer">
          <img src={logo} width='60px' />
          <p>A sua próxima oportunidade no mercado de trabalho está aqui</p>
        </div>
      </div>

      <div>
        <div className="col">
          <div className="topic">
            <h3>Menu</h3>

            <div>
              <Link to='/'>
                <NavButton color='var(--green-250)' isSelected={currentPage === 'home'} onClick={() => handleNavClick('home')}><User size={16} weight='fill' /><a>Para você</a></NavButton>
              </Link>
              <Link to='/empresa'>
                <NavButton color='var(--blue-500)' isSelected={currentPage === 'empresa'} onClick={() => handleNavClick('empresa')}><Buildings size={16} weight='fill' /><a>Para empresas</a></NavButton>
              </Link>
              <Link to='/instituicoes'>
                <NavButton color='var(--blue-250)' isSelected={currentPage === 'instituicoes'} onClick={() => handleNavClick('instituicoes')}><Bank size={16} weight='fill' /><a>Para instituições de ensino</a></NavButton>
              </Link>
              <Link to='/contato'>
                <NavButton color='var(--blue-250)' isSelected={currentPage === 'contato'} onClick={() => handleNavClick('contato')}><UsersThree size={16} weight='fill' /><a>Contato</a></NavButton>
              </Link>
            </div>
          </div>

          <div className="topic">
            <h3>Marketing</h3>
            <div>
              <NavButton color='black'><TrademarkRegistered size={16} weight='fill' /><a href='#'>Manual de Marca</a></NavButton>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="topic">
            <h3>Nossas políticas</h3>

            <div>
              <NavButton color='black'><Keyhole size={16} weight='fill' /><a href='#'>Política de Segurança da Informação</a></NavButton>
              <NavButton color='black'><Detective size={16} weight='fill' /><a href='#'>Política de Privacidade</a></NavButton>
              <NavButton color='black'><Info size={16} weight='fill' /><a href='#'>Política de Uso</a></NavButton>
              <NavButton color='black'><Pen size={16} weight='fill' /><a href='#'>Termo de Consentimento</a></NavButton>
              <NavButton color='black'><Heart size={16} weight='fill' /><a href='#'>Política de Diversidade e Inclusão</a></NavButton>
              <NavButton color='black'><Money size={16} weight='fill' /><a href='#'>Política de Combate à Corrupção e Suborno</a></NavButton>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="topic">
            <h3>Fale Conosco</h3>

            <div>
              <NavButton color='black'><Phone size={16} weight='fill' /><a>+55 (85) ...</a></NavButton>
              <NavButton color='black'><Envelope size={16} weight='fill' /><a>empregamais.me@contato.com</a></NavButton>
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}