import React,{Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NewExpense from './components/NewExpense';
import ExpenseList from './components/ExpenseList';


class App extends Component{
  state = {
    expenses: [],
    expense: {
      type: '',
      name: '',
      date: '',
      amount: 0,
    }
  }

  componentDidMount(){
    const savedExpenses = localStorage.getItem('expenses');
    if(savedExpenses){
      this.setState({
        expenses: JSON.parse(savedExpenses)
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
    const expenses = [...this.state.expenses, data];

    this.setState({
      expenses
    });
  }

  handleChange = e => {
    this.setState({
        expense: {
            ...this.state.expense, 
            [e.target.name] : e.target.value
        }
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const {type, name, date, amount} = this.state.expense;

    if(type === '' || name === '' || date === '' || amount === ''){
        return;
    }

    const newExpense = {...this.state.expense};
    newExpense.id = Date.now();

    this.createNewExpense(newExpense);
    
    this.setState({
        expense: {
            type: 'Choose one...',
            name: '',
            date: '',
            amount: 0,
        }
    });
  }

  render(){
    return (
      <div className="">
        
        <Header title="Expense Tracker App" />

        <div className="row">
          <div className="col-md-8 mx-auto">
            <NewExpense
              expense={this.state.expense} 
              createNewExpense={this.createNewExpense} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}  
            />
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
