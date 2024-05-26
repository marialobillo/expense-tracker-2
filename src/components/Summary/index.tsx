import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer, SummaryCard } from './styles'

const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Incomes</span>
          <ArrowCircleUp size={24} color="#00B37E"/>
        </header>

        <strong>$ 18.349</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Payments</span>
          <ArrowCircleDown size={24} color="#FFD700"/>
        </header>

        <strong>$ 18.349</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Balance</span>
          <CurrencyDollar size={24} color="#FFFFFF"/>
        </header>

        <strong>$ 18.349</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

export default Summary
