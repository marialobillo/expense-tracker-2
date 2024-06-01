import { styled } from "styled-components";

export const ExpensesContainer = styled.section`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 2rem;


`;

export const ExpensesTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 2rem;

  td {
    padding: 1rem 2rem;
    background: ${props => props.theme['gray-600']};

    &:first-child {
      border-radius: 0.25rem 0 0 0.25rem;
    }

    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  }
`;

interface PriceHightlightProps {
  variant?: 'income' | 'outcome' | 'total';
}

export const PriceHightlight = styled.span<PriceHightlightProps>`
  color: ${props => props.variant === 'income' ? props.theme['green-500'] : props.variant === 'outcome' ? props.theme['red-500'] : props.theme['yellow-200']};
`;  

