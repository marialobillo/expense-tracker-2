import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewExpense from './components/NewExpense';
import ExpenseList from './components/ExpenseList';


class App extends Component{
  state = {
    expenses: []
  }

  // when the component is mounted
  componentDidMount(){
    const expenseslocalS = localStorage.getItem('expenses');
    if(expenseslocalS){
      this.setState({
        expenses: JSON.parse(expenseslocalS)
      });
    }
  }

  componentDidUpdate(){
    localStorage.setItem('expenses', JSON.stringify(this.state.expenses));
  }

  deleteExpense = id => {
    const currentExpenses = [...this.state.expenses];

    const expenses = currentExpenses.filter(expense => {
      return expense.id !== id;
    });

    // udpate the state
    this.setState({
      expenses
    });
  }

  createNewExpense = data => {
    console.log(data);

    // copy the current state
    const expenses = [...this.state.expenses, data];
    // update the state and add the new expense 
    this.setState({
      expenses
    });
  }

  render(){
    return (
      <div className="">
        
        <Header title="Expense Tracker App" />

        <div className="row">
          <div className="col-md-8 mx-auto">
            <NewExpense createNewExpense={this.createNewExpense} />
          </div>
        </div>

        <div className="mt-5 col-md-10 mx-auto">
            <ExpenseList 
              expenses={this.state.expenses}
              deleteExpense={this.deleteExpense}
            />
        </div>
      
      </div>
    );
  }

}


export default App;
