import * as Dialog from "@radix-ui/react-dialog";
import { Overlay, Content } from './styles';

const NewExpenseModal = () => {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>New Expense</Dialog.Title>

                <form action="">
                  <input type="text" placeholder="description" />
                  <input type="number" placeholder="amount" />
                  <input type="text" placeholder="category" />

                  <button type="button">Record</button>
                </form>

                <Dialog.Close />
            </Content>
        </Dialog.Portal>
    );
};

export default NewExpenseModal;
