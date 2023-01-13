# React State
Recall, previously that props are data we pass to a component. Props are immutable; passing one to a component to change its value is inefficient. State however allows you to pass data to components which will likely change. <br>

Because we have a choice in using functional or class components in React, theres 2 ways to use state in each option.

### Function Component
```javascript
import React from 'react'

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState('img/placeholder')

    const getMemeImage = (event) => {
        // grab a new image from json locally or via API endpoint
        setMemeImage(memeImage...path/to /some /img)
        event.preventDefault()
    }

    // Side Note: If we ever need the old value of state to 
    //            determine the new value of state we can pass 
    //            functions in setMemeImage.
    const divideBy8 = () => {
        setNumber(function(oldValue) {
            return oldValue / 8;
        })
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
Sibling Components cannot pass state over to each other. What can only happen is that Your state needs to be stored in a parent component and only the parent can pass data via props. 
