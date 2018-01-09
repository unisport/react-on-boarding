## React by Example

* Stateless app
* Stateless app with properties
* Container and component app

### Simple react app

The simplest version of a React app is simply a function that returns HTML markup, the only requirement is that React has been imported.

**Example**
```javascript
import React from 'react'

const App = () => (
    <div>Hello Kitty!</div>
)
```

Properties can be passed to components simply by assigning them as you would with HTML tag attributes

**Example**
```javascript
const App = ({color, name}) => (
    <div>Hello {name}, you are {color}!</div>
)

<App name="Pussy" color="white" />
```
The order in which they are passed is not important, they are passed by name and not by order

We follow the pattern of Containers and Components where it makes sence. Containers should represent your app logic and make use of the component lifecycle, GET data from the backend and POST data to the backend whereas components ...

A simple example of a Container that imports a Component

**Example**
```javascript
import Kitty from './components/Kitty'

class Container extends React.Component {
    render() {
        return <div>
                <Kitty />
            </div>
    }
}
```

