import React, {Component} from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Tucker</td>
                <td>Student</td>
            </tr>
            <tr>
                <td>Tonja</td>
                <td>Professor & Mother</td>
            </tr>
            <tr>
                <td>Martin</td>
                <td>CTO & Father</td>
            </tr>
        </tbody>
    )
}

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader />
                <TableBody />
            </table>
        )
    }
}

export default Table