import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;

  input {
    flex: 1;
    border-radius: 0.25rem;
    border: 0;
    background-color: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-200']};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    background-color: ${props => props.theme['green-700']};
    color: ${props => props.theme['gray-900']};
    flex: 0.25;
    direction: row;
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
      background-color: ${props => props.theme['green-700']};
      transition: background-color 0.5s color 0.5s border-color 0.5s;
      border-color: ${props => props.theme['gray-700']};
      color: ${props => props.theme.white};
    }
  }
`;
