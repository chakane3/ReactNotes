# Components And Props
Components are just javascript functions. They can accept some input (props) and return React elements which render on our screens. Always start component names with a capital letter.

## Function And Class Components
Theres 2 ways to define a react component:

```javascript
function HelloWorld(props) {
    return <h1>Hello, {props.name}</h1>
}
```

Below uses an ES6 class:
```javascript
class Welcome extends React.Components {
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```

## Rendering A Component
We know that react elements represent DOM tags.

```javascript
const element = <div/>
```

We can also use react elements to represent user defined components

```javascript
const element = <HelloWorld name="Chakane"/>
```

When we have one of these user defined components, we can pass an attribute (typically comes from props) to this component.

```javascript
function HelloWorld(props) {
    return <h1>Hello, {props.name}</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// here we render a HelloWorld component and pass 'Chakane' as name
const element = <HelloWorld name="Chakane"/>
root.render(element)
```

Typically, react apps and a single <b>App</b> component. In which we then throw in our own components that make up the entire product. Inside our on components may alot be other smaller components. Consider this code:

```javascript
function Comment(props) {
    return (
        <div className="Comment">

            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name} 
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>

            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
```
This Comment can accept a <b>author (obj)</b>, <b>text (str)</b>, <b>date (date obj)</b> as props and describes a comment on a social media website. therefore we can refactor this code block into this.

```javascript
function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    )
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
```

## Props Are Read-Only
We do not modify our props inside our components. All react components are "pure" functions with respect to their props. State will be introduced as a workaround this this idea. In short, state allows react components to change their output over time in response to user actions, network responses, and whatever else. 


