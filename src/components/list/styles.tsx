import styled from 'styled-components';

interface ListProps {
  spanColor: string;
  iconColor: string;
}

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;
  gap: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    font-size: 1.125rem;
    opacity: 0.75;
  }


  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: ${({spanColor}:ListProps) => spanColor};
    border-radius: 50%;

    svg {
      color: ${({iconColor}:ListProps) => iconColor};
    }
  }
`;