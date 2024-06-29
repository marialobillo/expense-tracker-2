import * as Dialog from "@radix-ui/react-dialog"
import styled from "styled-components"


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.64);
`

export const Content = styled(Dialog.Content)`

`