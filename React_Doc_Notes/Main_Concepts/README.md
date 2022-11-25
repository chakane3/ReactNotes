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

Components allow us to reuse our code. Our components can accept "props" which stand for properties we may want to pass to our components. Think of a twitter page, there are many pieces of the user interface in which have the same look, but different data. Theres 2 ways we can look at this. We could have a component that looks like this:

```javascript
function App() {
    return (
        <div className="contacts">
            <Contact 
                img="./images/mr-whiskerson.png" 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
        </div>
    )
}
```

What we have here is a component called Contact which has data we want to add. We can repeat Contact to add in different data for each instance. At this point we have properties for the Contact component. Our contact component will have the jsx to render our page using the props we see above.<br>



## .map()
This method creates a new array. Heres some examples of how we use them.

```javascript
const arr1 = [2, 3, 4]
const map1 = arr1.map(x => x+1)
// map1 -> [3, 4, 5]
```

```javascript
const names = ["chakane", "chris", "mike"]
const namesMapCapitalized names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})
```

```javascript
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const pokemonMap = pokemon.map(x => `<p>${x}</p>`)

// or we can do
const pokeminMap = pokemon.map((x) => {
    return `<p>${x}</p>`
})
```

# Mapping Components
Another way of doing this is by using the map method. Think of how in ios development where we have some json data either locally or via an API. We have to parse through the JSON to fill in our cells. The JS map method will allow us to do the same. 


Heres an example of what this may look like.

```javascript
export default function App() {
    const peopleElements = People.map(person => {
        return <Person
                name={person.name}
                age={person.age}
                town={person.town}
                state={person.state}
                />
    })
    return (
        <div>
            {peopleElements}
        </div>
    )
}
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

Heres a basic example of using state in action (note that this is works only for function components):

```javascript
export default function App() {

    // isImportant is the value our state holds
    const [isImportant, setIsImportant] = React.useState("Yes")

    // 2nd example
    const = [number, setNumber] React.useState(0)
    const plusOne = () => {
        setNumber(number+1)
    }
    const minusOne = () => {
        setNumber(number-1)
    }

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

            // 2nd example 
            <button classNAme="some-name" onClick={minusOne}>-</button>
            <div className="counter--count">
                <h1>{number}</h1>
            </div>
            <button className="counter-plus" onClick={plusOne}>+</button>
        </div>
    )
}

```

