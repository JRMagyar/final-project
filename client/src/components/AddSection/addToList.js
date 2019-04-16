import React from 'react'

function ExpenseList (props){
   
        return(
            <div>
                <h3>Name: {props.name}</h3>
                <h3>Amount: {props.amount}</h3>
                <h3>Description: {props.description}</h3>
                <h3>Due Date: {props.calStart}</h3>

            </div>
           
        )
    }
export default ExpenseList
