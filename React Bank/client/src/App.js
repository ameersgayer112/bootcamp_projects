import React, { Component } from 'react';
import Transcations from './components/Transcations';
import Operations from './components/Operations';
import Categories from './components/Categories';
import axios from "axios";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      actions: [
        { amount: 3200, vendor: "Elevation", category: "Salary" },
        { amount: -7, vendor: "Runescape", category: "Entertainment" },
        { amount: -20, vendor: "Subway", category: "Food" },
        { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],

      balance: 0
    }
  }

  calculateBalance(actions) {
    let newBalance = 0
    actions.forEach(action => {
      newBalance += action.amount

    });
    return newBalance;

  }




  //method for react

  delleteAction = (action) => {
    let newActions = [...this.state.actions]
    let indexOfObject = newActions.findIndex(op => {
      return op.amount === action.amount &&
        op.category === action.category &&
        op.vendor === action.vendor
    })
    newActions.splice(indexOfObject,1);
    this.setState({
      actions:newActions
    })


  }
  componentDidMount = async () => {
    const actions = await axios.get("http://localhost:3030/transactions");
    this.setState({ transactions: actions.data });
  };

  addAction = async (newTransaction) => {
    await axios.post("http://localhost:4200/transaction", newTransaction);
  };

  componentDidUpdate = async () => {
    const actions = await axios.get("http://localhost:3030/transactions");
    this.setState({ actions: actions.data });
  };

  delleteOperation = async (actionID) => {
    await axios.delete(`http://localhost:3030/transaction/${actionID}`);
  };



  render() {
    const state = this.state
    let newBalnce = this.calculateBalance(this.state.actions)
    return (
      <Router>
        <div className="App">
          <div id="home-background"></div><div id="main-links">
            <h3 className="balanceTitle">Balance : {newBalnce}</h3>
            <Link to="/">Home</Link>
            <Link to="/operations">Operation</Link>
            <Link to="/category">Categories</Link>

          </div>


          <Route path="/" exact render={() => <Transcations actions={state.actions} delleteOperation={this.delleteOperation} />} />
          <Route path="/operations" exact render={() => <Operations addAction={this.addAction} />} />
          <Router path='/category' exact render={() => <Categories actions={state.actions}/>}/>



        </div>
      </Router>
    );
  }
}

export default App;
