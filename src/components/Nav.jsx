import React, { Component } from 'react'

export default class Nav extends Component {
    render() {

        // const nav = this.props.nav
        const {nav} = this.props

        return (
            <ul>
                { Object.keys(nav).map(item => <li><a href={nav[item]}>{item}</a></li>) }
            </ul>
        )
    }
}
