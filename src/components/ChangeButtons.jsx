import React, { Component } from 'react'

export default class ChangeButtons extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             number: 0
        }

        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
        this.reset = this.reset.bind(this)
    }

    plus(){
        this.setState(state => ({
            number: state.number + 1
        }))
    }
    minus(){
        this.setState(state => ({
            number: state.number - 1
        }))
    }
    reset(){
        this.setState(state => ({
            number: 0
        }))
    }
    
    render() {
        return (
            <div>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
                <button onClick={this.reset}>0</button>
                <p>Number: {this.state.number}</p>
            </div>
        )
    }
}
