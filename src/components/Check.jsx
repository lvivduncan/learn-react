import React, { Component } from 'react'

export default class Check extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		checked: true,
	// 	};
    // };
    
    state = {
        checked: true
    };

    handleCheck = () => {
        this.setState({checked: !this.state.checked})
    }

    render() {
        let message;

        this.state.checked ? message = 'yes' : message = 'no'
         
        return (
            <label>
               <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} /> {message} 
               &nbsp; 
               <input type="text" placeholder={message} />
            </label>
        )
    }
}
