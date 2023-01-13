# Quick Guide to starting
React is a javascript library which allows us to create web applications more efficiently making making more obvious use of components.

## Getting Started
You should be able to create a react app using ```npx create-creact-app myProject```. This will setup a template react app for you. You will have a file structure like this:

<ul>
    <li>node_modules</li>
    <li>public</li>
    <li>reports</li>
    <li>src</li>
</ul>

Inside the /src folder is where we do most of your work. We will also have to touch some things in public because it includes our index.html file. However, with react everything(content) starts at the "root" div in index.html. 

We can delete everything inside /src folder and keep these two files as clean slate for a project. 

index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
```

app.js
```javascript
function App() {
  return (
    <div className="main">
    </div>
  );
}
export default App;
```

Inside App.js we will throw in the components we want for the website.

## Basic Things To Understand
Know the difference between using ```functional or class components```, ```passing state up and down the DOM tree```, 