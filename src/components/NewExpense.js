import React, {Component} from 'react';

class NewExpense extends Component{
    state = {
        expense: {
            type: '',
            name: '',
            date: '',
            amount: 0,
        }
    }

    handleChange = e => {
        // console.log(e.target.name + ': ' e.target.value);

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

        // here the data
        this.props.createNewExpense(newExpense);
        // reset the form 
        this.setState({
            expense: {
                type: 'Choose one...',
                name: '',
                date: '',
                amount: 0,
            }
        })
    }

    render(){
        return (
            <div className="">
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group row">
                        <span>Date:</span>
                        <input 
                            className="form-control" 
                            type="date" 
                            name="date" 
                            onChange={this.handleChange}
                            value={this.state.expense.date}
                        />
                    </div>
                    
                    <div className="form-group row">
                        <span>Description:</span>
                        <input 
                            className="form-control"
                            placeholder="Expense Name" 
                            type="text" 
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.expense.name}    
                        />
                    </div>

                   
                    <div className="form-group row">
                        <span>Amount:</span>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Expense Amount"
                            name="amount" 
                            onChange={this.handleChange}  
                            value={this.state.expense.amount}  
                        />
                    </div>
                    <div className="form-group row">
                       
                            <label>Type:</label>
                        <select 
                            className="form-control" 
                            name="type"
                            onChange={this.handleChange}
                            value={this.state.expense.type}
                            >
                            <option value="chooseOne">Choose one...</option>
                            <option value="card">Card</option>
                            <option value="cash">Cash</option>
                            <option value="cryptocoin">Cryptocoin</option>
                            <option value="other">Other</option>
                        </select>

                        
                    </div>
                    <div className="form-group row">
                        <button 
                            type="submit" 
                            className="btn btn-block btn-success">
                                Add Expense
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewExpense;