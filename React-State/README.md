# React State

Because we have a choice in using functional or class components in React, theres 2 ways to use state in each option.

### Function Component
```javascript
import React from 'react'

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState('img/placeholder')

    const getMemeImage = (event) => {
        // logic to grab a new image from json wether locally or via API endpoint
        event.preventDefault()
    }

    return (
        // JSX
    )
}
```

### Class Component 
We strongly prefer using class components when implementing state.
```javascript
import { Component } from 'react'

class Hello extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        const {count} = this.state
        return (
            // JSX
            <div>
                <button onClick={this.handleClick}></button>
                <p>Clicked {count} times</p>
            </div>
        )
    }
}
```

## Passing State
Sibling Components cannot pass state over to eachother. What can only happen is that Your state needs to be stored in a parent component and only the parent can pass data via props. 
