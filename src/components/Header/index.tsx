import * as Dialog from "@radix-ui/react-dialog";
import { HeaderContainer, HeaderContent, NewExpenseButton } from "./styles";

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <h2>Expenses</h2>

                    <Dialog.Root>
                        <NewExpenseButton>New Expense</NewExpenseButton>

                        <Dialog.Portal>
                            <Dialog.Overlay />

                            <Dialog.Content>
                              <Dialog.Title>New Expense</Dialog.Title>
                              
                              <Dialog.Close />
                            </Dialog.Content>
                        </Dialog.Portal>

                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>
        </div>
    );
};

export default Header;
