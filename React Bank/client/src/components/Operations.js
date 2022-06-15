import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Operations extends Component {

    constructor() {
        super();
        this.state = {
            amount: "",
            vendor: "",
            category: "",
        }
    }
    saveNewOperations = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    addAction = async (event) => {
        let name = event.target.name;
        let amount = this.state.amount * 1
        let vendor = this.state.vendor
        let category = this.state.category
        let newOperation
        if (name === "deposit") {
            newOperation = { amount, vendor, category }
            await this.props.addAction(newOperation)
        } else if (name === "withdraw") {
            amount = amount * -1;
            newOperation = { amount, vendor, category }
            await this.props.addAction(newOperation)
        }
    }

    render() {
        return (
            <div className='operation-container'>
                <br></br>
                <div className='iput-div'>
                    <div>
                        <label>Amount :</label>
                        <input type="text" placeholder='Enter Amount....' name='amount' value={this.state.amount} onChange={this.saveNewOperations} />
                    </div>
                    <br></br>
                    <div>
                        <label>Vendor :</label>
                        <input type="text" placeholder='Enter Vendor....' name='vendor' value={this.state.vendor} onChange={this.saveNewOperations} />
                    </div>
                    <br></br>
                    <div>
                        <label>Category :</label>
                        <input type="text" placeholder='Enter Category....' name='category' value={this.state.category} onChange={this.saveNewOperations} />
                    </div>
                    <br></br>
                </div>
                <br></br>
                <span>
                    <button className='depositbtn' name='deposit' onClick={this.pushNewOperation}>Deposit</button>
                    <button className='withdrowbtn' name='withdraw' onClick={this.pushNewOperation}>Withdraw</button>
                </span>

            </div>)
    }
}


export default Operations