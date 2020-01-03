import React from 'react';

function NewExpense (props){
    return (
        <div className="">
            <form onSubmit={props.handleSubmit}>

                <div className="form-group row">
                    <span>Date:</span>
                    <input 
                        className="form-control" 
                        type="date" 
                        name="date" 
                        onChange={props.handleChange}
                        value={props.expense.date}
                    />
                </div>
                
                <div className="form-group row">
                    <span>Description:</span>
                    <input 
                        className="form-control"
                        placeholder="Expense Name" 
                        type="text" 
                        name="name"
                        onChange={props.handleChange}
                        value={props.expense.name}    
                    />
                </div>

               
                <div className="form-group row">
                    <span>Amount:</span>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Expense Amount"
                        name="amount" 
                        onChange={props.handleChange}  
                        value={props.expense.amount}  
                    />
                </div>
                <div className="form-group row">
                   
                        <label>Type:</label>
                    <select 
                        className="form-control" 
                        name="type"
                        onChange={props.handleChange}
                        value={props.expense.type}
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

export default NewExpense;