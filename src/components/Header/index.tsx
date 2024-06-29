import * as Dialog from "@radix-ui/react-dialog";
import { HeaderContainer, HeaderContent, NewExpenseButton } from "./styles";
import NewExpenseModal from "../NewExpenseModal";

const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <h2>Expenses</h2>

                    <Dialog.Root>
                        <NewExpenseButton>New Expense</NewExpenseButton>

                        <NewExpenseModal />

                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>
        </div>
    );
};

export default Header;
