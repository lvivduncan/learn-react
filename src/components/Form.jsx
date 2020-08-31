import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            content: '',
            test: ''
        }

        this.view = this.view.bind(this)
    }

    // маловживаний метод 
    static getDerivedStateFromProps(props,state){
        return {test: props.test_state}
    }

    view(e){
        this.setState({ content: e.target.value })
    }

    render() {
        return (
            <div>
                <p><input onChange={this.view} /></p>
                <p>{this.state.content}</p>
                <p>getDerivedStateFromProps: {this.state.test}</p>
            </div>
        )
    }
}
