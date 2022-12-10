import styled from 'styled-components';
import { ContainerSideMargin, ContainerSideMarginMobile } from "../../styles/global";

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
  background: var(--blue-250);
`;

export const ContainerInBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: calc(100% - ${ContainerSideMargin * 2}px);

  img {
    width: 27.5rem;

    @media screen and (max-width: 900px) {
      margin-left: -12.5%;
    }

    @media screen and (max-width: 720px) {
      width: calc(100% - ${ContainerSideMargin}px);
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    
    > div {
      margin-top: 1rem;
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      height: 2.6875rem;

      button {
        background: var(--blue-500);
        color: white;
        border: none;
      }
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
  flex-direction: row;
  gap: 5rem;
  align-items: center;
  justify-content: center;

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 40%;

    h2 {
      font-weight: 400;
      margin-bottom: 0rem;
      font-size: 1.25rem;
      opacity: 0.75;
    }

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: center;

      gap: 2rem;

      margin-bottom: 1.5rem;

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
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    h2 {
      font-weight: 400;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 720px){
    width: calc(100% - ${ContainerSideMarginMobile * 2}px);

    flex-direction: column;

    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
    }
  }
`;