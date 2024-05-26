import styled, { css } from "styled-components"
import Summary from './index';

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -7rem;
`

interface SummaryCardProps {
  variant?: 'green';

}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme['gray-600']};
  margin-top: 1rem;
  font-family: 'Calibri', sans-serif;
  padding: 1.5rem 2rem;
  border-radius: 6px;
  color: ${props => props.theme['yellow-200']};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  ${props => props.variant === 'green' && css`
    background-color: ${props.theme['green-700']};
  `}
`;