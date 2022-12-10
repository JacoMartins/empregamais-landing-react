import styled from 'styled-components';
import { ContainerSideMargin, ContainerSideMarginMobile } from "../styles/global";

interface PageProps {
  headerHeight?: number;
}

export const Main = styled.main`
`;

export const BannerSection = styled.section`
  display: flex;
  padding: calc(4rem + ${({ headerHeight }: PageProps) => headerHeight ?? headerHeight}px) 0 4rem 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--green-500);
`;

export const ContainerInBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: calc(100% - ${ContainerSideMargin * 2}px);

  img {
    width: 20rem;

    @media screen and (max-width: 720px) {
      width: calc(100% - calc(${ContainerSideMarginMobile * 2}px));
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    
    > div {
      margin-top: 2.5rem;
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      height: auto;
    }
  }

  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    color: #fff;
  }

  h1 {
    font-weight: 700;
    font-size: 3rem;
    color: #fff;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    width: calc(100% - ${ContainerSideMarginMobile * 2}px);
    > div {
      text-align: center;
      
      > div {
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 720px) {
    > div {
      > div {
        flex-direction: column;
        justify-content: center;
      }
    }
  }
`;

export const SearchInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  border: 2px solid white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: transparent;
  color: white;
  outline: none;
  transition: 0.1s;

  &:has(input:focus) {
    outline: solid 2px rgba(255, 255, 255, 0.45);
  }
  
  input {
    border: 0;
    padding: 0;
    color: white;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 600;
    }
  }

  @media screen and (max-width: 720px) {
    justify-content: left;
  }
`;

export const InformationSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  width: 100%;
`;

export const ContainerInInformation = styled.div`
  width: calc(100% - ${ContainerSideMargin * 2}px);
  display: flex;
  flex-direction: row-reverse;
  gap: 5rem;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: right;
    text-align: right;

    gap: 2rem;

    margin-bottom: 5rem;

    h1 {
      font-size: 2rem;
    }

    img {
      height: 10rem;
    }

    @media screen and (max-width: 720px) {
      flex-direction: column;
      
      img{
        height: 12rem;
      }

      h1 {
        font-size: 2rem;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media screen and (max-width: 992px){
    width: calc(100% - ${ContainerSideMarginMobile * 2}px);

    flex-direction: column;
    gap: 1.5rem;

    > div:nth-child(1) {
      text-align: center;
    }
  }
`;

export const BlockSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  width: 100%;
  background-color: var(--green-250);
`;

export const ContainerBlockSection = styled.div`
  width: calc(100% - ${ContainerSideMargin * 2}px);

  > div:nth-child(1) {
    color: white;

    h2 {
      font-size: 1.5rem;
      font-weight: 400;
    }

    h1{
      font-size: 2.5rem;
    }
    
    margin-bottom: 3rem;
  }

  > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
    justify-content: left;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
  }

  > button {
    width: 100%;
    text-align: left;
    background: var(--green-150);
    border: 0;
    padding: 1rem 1.5rem;
    color: white;
    

    h2 {
      font-weight: 600;
    }

    span {
      opacity: 0.75;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 720px){
    width: calc(100% - ${ContainerSideMarginMobile * 2}px);
  }
`;

export const Block = styled.a`
  background: white;
  border-radius: 0.5rem;
  outline: solid 0px rgba(255, 255, 255, 0.45);

  font-size: 1.5rem;
  font-weight: 600;
  height: 10rem;
  width: auto;
  padding: 2rem;

  box-shadow: 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.4);
  text-decoration: none;
  color: black;
  transition: 0.25s;

  &:hover {
    filter: brightness(0.90);
  }

  &:active {
    outline: solid 2px rgba(255, 255, 255, 0.45);
    filter: brightness(1);
  }
`;