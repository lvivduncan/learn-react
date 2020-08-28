import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            content: ''
        }

        this.view = this.view.bind(this)
    }

    view(e){
        this.setState({ content: e.target.value})
    }

    render() {
        return (
            <div>
                <p><input onChange={this.view} /></p>
                <p>{this.state.content}</p>
            </div>
        )
    }
}
