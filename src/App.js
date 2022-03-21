import React, {Component} from 'react'
import Table from './Table'
class App extends Component {
    render() {
        const characters = [
            {
                name: 'Tucker',
                job: 'Student'
            },
            {
                name: 'Tonja',
                job: 'Professor & Mother'
            },
            {
                name: 'Martin',
                job: 'CTO & Father'
            }
        ]
        return (
            <div className="container">
                <h1>Hello, React!</h1>
                <Table characterData={characters} />
            </div>
        )
    }
}

export default App