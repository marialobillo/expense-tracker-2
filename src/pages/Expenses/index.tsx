import Header from '../../components/Header'
import Summary from '../../components/Summary'
import { ExpensesContainer, ExpensesTable, PriceHightlight } from './styles'

const Expenses = () => {
  return (
    <div>
      <Header />
      <Summary />

      <ExpensesContainer>
        <ExpensesTable>
          <tbody>
            <tr>
              <td width="40%">Site Implementation</td>
              <td>
                <PriceHightlight variant="income">$ 3000</PriceHightlight>
              </td>
              <td>Sell</td>
              <td>13/04/2024</td>
            </tr>

            <tr>
              <td width="40%">Hamburguer meal</td>
              <td>
              <PriceHightlight variant="outcome">$ 250</PriceHightlight>
              </td>
              <td>Buy</td>
              <td>17/04/2024</td>
            </tr>

            <tr>
              <td width="40%">Site Implementation</td>
              <td>
              <PriceHightlight variant="income">$ 1000</PriceHightlight>
              </td>
              <td>Sell</td>
              <td>09/04/2024</td>
            </tr>
          </tbody>
        </ExpensesTable>
      </ExpensesContainer>
    </div>
  )
}

export default Expenses
