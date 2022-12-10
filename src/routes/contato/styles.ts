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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: calc(100% - ${ContainerSideMargin * 2}px);

  img {
    width: 25rem;

    @media screen and (max-width: 720px) {
      width: calc(100% - calc(${ContainerSideMarginMobile * 2}px));
    }
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
      gap: 2rem;
      margin-bottom: 2rem;
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

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    width: 100%;

    @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
      gap: 2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: auto;

      div {
        display: flex;
        flex-direction: row;
        gap: 0.375rem;
        
        width: 100%;
        input {
          width: 100%;
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
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