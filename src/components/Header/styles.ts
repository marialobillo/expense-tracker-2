import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${props => props.theme['gray-400']};
  color: ${props => props.theme['yellow-200']};
  padding: 2rem 0 7rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 2rem;

  > img {
    max-height: 45px;
  }
  > div {
    display: flex;
    gap: 2rem;
  }
`

export const NewExpenseButton = styled.button`
  background-color: ${props => props.theme['yellow-500']};
  color: ${props => props.theme['gray-900']};

  padding: 1rem 2rem;
  border: 0;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    background-color: ${props => props.theme['yellow-800']};
    transition: background-color 0.2s;
  }

`
