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

# Class Components 
Heres a basic template for a React class component:

```javascript   
    class HelloWorld extends React.Component {
        constructor(props) {
            super(props)

            // the constructor is the only place we can use this.state
            // in all other methods, we need to use this.setState()
            this.state = {counter: 0}
            this.handleClick = this.handleClick.bind(this)
        }
        render() {
            return <h1>Hello, {this.props.name}</h1>
        }
    }
```

Recall, that our constructor is how our class will be inialized. Remember to never use props inside this.state(). The <b>Render</b> method is the only required method inside a class component. The render functions should be "pure" meaning that it doesnt modify component state nor does it interact directly with the browser. ** render() will not be invokes if <b>shouldComponentUpdate()</b> is false.


# Props vs State
Props - This refers to the properties being passed into a component in order for it "work". This is similar to how a function get passed arguments. However, a component cannot modify the probs being passed in. Theyre immutable.<br><br>
State - Refers tp values that are managed by the component. Think of variables declared inside a function. At any time you have changing values that should be saved/displayed, we should be using state.<br>

Heres a basic example of using state in action:

```javascript
export default function App() {

    // isImportant is the value our state holds
    const [isImportant, setIsImportant] = React.useState("Yes")

    function handleClick() {
        // setIsImportant is the useState function that'll allows us the change our state

        /*
            If you ever need the old value of state
            to help determine the new value of state,
            you should pass a callback function to your 
            state setter function instead of using state directly. 
            This callback function will receive the old value of 
            state as its parameter, which you can then use to 
            determine your new value of state
        */
        setIsImportant(previsImportant => isImportant = "nope")
    }

    return (
        <div>
            <h1 className="state--title">Is state importsnt to know?</h1>
            <div className="state--value" onClick={isImportant}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

```
In this code block. Whenever the user clicks inside div:state--value, the state of our app is changed and React re-renders the page with the update to the value


<!-- com.adobe.granite.workflow,version=[1.1,2) -- Cannot be resolved
com.day.cq.dam.api,version=[1.28,2) -- Cannot be resolved
com.day.cq.dam.commons.util,version=[1.60,2) -- Cannot be resolved
com.day.cq.personalization,version=[7.3,8) -- Cannot be resolved
com.day.cq.wcm.api,version=[1.29,2) -- Cannot be resolved
com.fasterxml.jackson.databind,version=[2.11,3) -- Cannot be resolved
org.apache.commons.lang3,version=[3.10,4) -- Cannot be resolved
org.apache.commons.lang3.time,version=[3.10,4) -- Cannot be resolved
org.apache.sling.api.resource,version=[2.12,3) -- Cannot be resolved
org.apache.sling.api.scripting,version=[2.5,3) -- Cannot be resolved
org.apache.sling.api.servlets,version=[2.3,3) -- Cannot be resolved -->