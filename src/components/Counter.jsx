import React, { Component } from 'react'

class Counter extends Component {

    state = {
        counter: 0
    }

    // click = () => {
    //     this.setState(item => ({
    //             counter: item.counter++
    //     }))
    // }

    click = () => {
        this.setState(({counter}) => ({
            counter: ++counter
        }))
    }

    experiment = 100

    render() {

        const {counter} = this.state;

        const test = 'lorem ipsum'

        return (
            <>
                <p>{counter}</p>
                <p><button onClick={this.click}>+1</button></p>
                <p>{test}</p>
                <p>experiment: {this.experiment}</p>
            </>
        )
    }
}

export default Counter
