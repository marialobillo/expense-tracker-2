import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content, CloseButton } from './styles';
import { X } from "phosphor-react";

const NewExpenseModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>New Expense</Dialog.Title>

                <CloseButton >
                  <X size={24} />
                </CloseButton>

                <form action="">
                  <input type="text" placeholder="description" />
                  <input type="number" placeholder="amount" />
                  <input type="text" placeholder="category" />

                  <button type="submit">
                    Record
                  </button>
                </form>

            </Content>
        </Dialog.Portal>
    );
};

export default NewExpenseModal;
