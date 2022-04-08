import React, {Component} from 'react'
import Table from './Table'
class App extends Component {
    state = {
        characters: [
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
        ],
    }
    removeCharacter = (index) => {
        const {characters} = this.state 

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    render() {

        const { characters } = this.state 
        return (
            <div className="container">
                <h1>Hello, React!</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

export default App