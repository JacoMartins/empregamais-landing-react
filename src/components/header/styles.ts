import styled from "styled-components";
import { ContainerSideMargin } from "../../styles/global";

interface NavUl {
  isSelected?: boolean;
  color: string;
}

interface Nav {
  navMobile: boolean;
  headerHeight: number;
}

interface MainProps {
  scrollY?: number;
}

export const Main = styled.header`
  position: fixed;
  z-index: 9999;
  display: flex;
  animation: ${({ scrollY }: MainProps) => scrollY? 'headerScroll 0.25s ease-in-out' : 'none'};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ scrollY }: MainProps) => scrollY === 0 ? 'white' : 'rgba(255, 255, 255, 0.75)'};
  backdrop-filter: blur(30px);
  height: 7.5rem;
  width: 100%;
  /* border-bottom: 1px solid black; */

  @keyframes headerScroll {
    0% {
      top: -4.625rem;
    }
    100%{
      top: 0rem;
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  max-width: 1120px;
  width: 1120px;
  min-width: auto;

  @media screen and (min-width: 1120px) {
    max-width: calc(100% - ${ContainerSideMargin * 2}px);
    width: calc(100% - ${ContainerSideMargin * 2}px);
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1120px) {
    margin: 0 3rem;
  }
`;

export const Logo = styled.img`
  width: 9.5rem;
  height: 2rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1120px) {
    margin: 0 3rem;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .mobileNavToggle {
    display: none;
  }

  ul {
    display: flex;
  }

  @media screen and (max-width: 1024px){
    .mobileNavToggle {
      display: block;
    }

    ul {
      position: absolute;
      top: ${({headerHeight}: Nav) => headerHeight}px;
      left: 0;
      display: ${({ navMobile }: Nav) => navMobile ? 'flex' : 'none'};
      flex-direction: column;
      gap: 1rem;
      height: 100vh;
      width: 100% ;
      background: rgba(255, 255, 255, 0.75);
      padding: 2rem;

      a {
        display: flex;
      }
    }
  }
`;

export const NavButton = styled.span`
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  color: black;
  font-size: 1.125rem;
  font-weight: ${({ isSelected }: NavUl) => isSelected ? "600" : "400"};
  border-bottom: 0.1875rem solid ${({ isSelected, color }: NavUl) => isSelected ? color : "transparent"};
  cursor: pointer;

  svg {
    margin-top: 0.25rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 1rem 1rem;
    width: 100%;
  }

  &:hover {
    transition: 0.25s;
    background-color: rgba(0,0,0, 0.08);
    border-radius: 0.25rem;
  }
`;