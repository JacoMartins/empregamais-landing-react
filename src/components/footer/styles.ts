import styled from "styled-components";

interface NavUl {
  isSelected?: boolean;
  color: string;
}

export const Main = styled.footer`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  gap: 2.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  
  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    width: 20%;

    @media screen and (max-width: 720px) {
      width: 100%;
    }
    
    .logoContainer {
      display: flex;
      flex-direction: column;
      width: auto;

      gap: 0.5rem;

      img {
        width: 8rem;
      }

      p {
        font-size: 0.875rem;
        color: rgba(0, 0, 0, 0.75)
      }

      @media screen and (max-width: 992px) {
        p {
          font-size: 1rem;
        }
      }
    }
  }

  > div:nth-child(2) {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    gap: 2.5rem;
    width: 100%;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    }

    .col {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      a {
        text-decoration: none;
      }

      .topic {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        div {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      }
    }
  }
`;

export const NavButton = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.375rem;
  padding: 0;
  color: ${({ isSelected, color }: NavUl) => isSelected ? color : 'rgba(0, 0, 0, 0.75)'};
  font-size: 1.125rem;
  font-weight: ${({ isSelected }: NavUl) => isSelected ? "600" : "400"};
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ isSelected, color }: NavUl) => isSelected ? color : 'rgba(0, 0, 0, 0.75)'};
  }

  svg {
    height: 1rem;
    width: 1rem;
  }
`;