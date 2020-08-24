import React, { Component } from 'react'

export default class Buttons extends Component {
    click = () => {
        alert(this.props.children)
    }

    render() {
        return (
            <span> 
                <button onClick={this.click}>{this.props.children}</button> 
            </span>
        )
    }
}
