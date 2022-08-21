import React from "react"

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            aCount: 0
        }
    }

    handleNumberChange = () => {
        const {aCount} = this.state
        this.setState({
            aCount: aCount + 1
        })
        console.log(aCount) 

    }

    render() {
        return(
            <div className="document-counter">
                <h1>Prompt user for the amount of people</h1>
                <input onChange={this.handleNumberChange} type="number" min="0" max="12" />
            </div>
        )
    }
}