import React from 'react'

// перевірка функції та класу

function LessonFunction(){
    return <h1>lesson function</h1>
}

class LessonClass extends React.Component {
    render() {
        return (
            <div>
                lessons class component
            </div>
        )
    }
}

function Lesson(){
    return(
            <div className="test" id="id-name">
                <LessonFunction />
                <LessonClass />
            </div>
        )
}

export default Lesson