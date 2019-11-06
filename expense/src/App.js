import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Expense Tracker
        </a>
      </header>
    </div>
    
  );

  function form () {
    return (
      <form>
<label id="title">Expense Type
  <div id="title">
    <span>Expense_Type:</span> 
      <select name="type" class="expensetype">
          <option value="cashless">Cashless</option>
          <option value="cash">Cash</option>
        </select>
  </div>
  </label>
  <label id="category"> Category
  <select name="category" class="expensetype">
                                    <option value="fixed">Fixed</option>
                                    <option value="variable">Variable</option>
                                    </select>
                                    </label>
 
   
  <input type="text" name="subcategory" placeholder="subcategory" class="expensetype">
  
  <div>
    <span>Date:</span> <input type="date" name="date" class="expensetype">
  </div>
  
  <div>
    <span>Amount:</span> <input type="number" name="amount" placeholder="$20" class="expensetype">
  </div>
  
<form>
</div>


    )
  }
}

export default App;
