import React, { Component } from 'react'

export default class Properties extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name} - {this.props.age}</p>                
            </div>
        )
    }
}
// дефолтний текст
Component.defaultProps = {name: 'текст, який відображається по дефолту'}