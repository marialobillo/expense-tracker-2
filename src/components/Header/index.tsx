import { HeaderContainer, HeaderContent, NewExpenseButton } from "./styles"


const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <h2>Expenses</h2>
          <NewExpenseButton>New Expense</NewExpenseButton>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}

export default Header
