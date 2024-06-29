import * as Dialog from "@radix-ui/react-dialog"
import styled from "styled-components"
import * as RadioGroup from "@radix-ui/react-radio-group"


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.64);
`

export const Content = styled(Dialog.Content)`
  min-width: 500px;
  border-radius: 0.5rem;
  padding: 2.5rem 3rem;
  background-color: ${props => props.theme['gray-600']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${props => props.theme['gray-800']};
      color: ${props => props.theme['gray-300']};
      padding: 1rem 1.5rem;

      &::placeholder {
        color: ${props => props.theme['gray-500']};
      }
    }

    button[type="submit"] {
      height: 3rem;
      border: 0;
      background-color: ${props => props.theme['green-700']};
      color: ${props => props.theme.white};
      font-weight: bold;
      padding: 0 1.5rem;
      border-radius: 6px;
      margin-top: 1rem;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme['gray-500']};
  `

export const ExpenseType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface ExpenseTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const ExpenseTypeButton = styled(RadioGroup.Item)<ExpenseTypeButtonProps>`
  background-color: ${props => props.theme['gray-700']};
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${props => props.theme['gray-300']};

  svg {
    color: ${props => props.variant === 'income' ? props.theme['green-700'] : props.theme['red-500']};
  }

  &[data-state="unchecked"]:hover {
    transform: background-color 1.05;
    background-color: ${props => [props.theme['gray-500']]};
  }

  &[data-state="checked"] { 
    color: ${props => props.theme.white};
    background-color: ${props => props.variant === 'income' ? props.theme['green-700'] : props.theme['red-600']};

    svg {
      color: ${props => props.theme.white};
    }
  }
`