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

    // тут викликаєш анонімну функцію, яка присвоює по 1
    // plus(){
    //     this.setState(state => ({
    //         number: state.number++
    //     }))
    // }

    // тут просто присвоюєш значення: 1
    plus(){
        this.setState({number: 1})
    }

    view(e){
        this.setState({ content: e.target.value })
    }

    minus(){
        this.setState(state => ({
            number: state.number--
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
