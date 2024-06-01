import { MagnifyingGlass } from "phosphor-react"
import { SearchFormContainer } from "./styles"

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search by expenses" />
      <button type="submit">
        <MagnifyingGlass size={22} />
        Search
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm