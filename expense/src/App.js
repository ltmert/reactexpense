import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <a class="App-header">
          Expense_Tracker
        </a>
        <form>
        <div id="title">
          <span>Expense_Type:</span> 
            <select name="type" class="expensetype">
                <option value="cashless">Cashless</option>
                <option value="cash">Cash</option>
              </select>
    </div>
    <div>
    <span>Category:</span> 
    <select name="category" class="expensetype">
                                    <option value="fixed">Fixed</option>
                                    <option value="variable">Variable</option> </select>
    </div>
    
  <input type="text" name="subcategory" placeholder="subcategory" class="expensetype"></input>
  
  <div>
    <span>Date:</span> <input type="date" name="date" class="expensetype"></input>
  </div>
  <div>
  <span>Amount:</span> <input type="number" name="amount" placeholder="$20" class="expensetype"></input>
</div>
    
    </form>
    <div id="button" class="button"><span>Add a new expense</span></div>

    <table class="table">
      <tr>
        <th id="type" class="center">type</th>
        <th>name</th>
        <th id="date">date</th>
        <th style="text-align: right" id="amount">amount</th>
      </tr>
      <tr id="if-empty">
        <td colspan="4"><span>Your added items will show up here!</span></td>
      </tr>
    
    </table>



    </div>
    
  );

 
}

export default App;
