import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class Nav extends Component {
    render() {

        // const nav = this.props.nav
        const {nav} = this.props

        return (
            <ul>
                {/* { Object.keys(nav).map(item => <li><a href={nav[item]}>{item}</a></li>) } */}
                <li><NavLink to="/home" className="test">home</NavLink></li>
                <li><NavLink to="/about">about</NavLink></li>
                {/* exact -- ігнорування усіх додаткових параметрів в адресному рядку */}
                <li><NavLink exact to="/contacts">contacts</NavLink></li>
            </ul>
        )
    }
}
