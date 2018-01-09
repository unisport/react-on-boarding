## React by Example

* Stateless app
* Stateless app with properties
* Container and component app

### Simple react app

The simplest version of a React app is simply a function that returns HTML markup, the only requirement is that React has been imported

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

### Containers and Components

We follow the pattern of Containers and Components where it makes sence. Containers should represent your app state and make use of the component lifecycle to handle your app logic, GET data from the backend and POST data to the backend whereas components more jibber jabber to come

An example of a Container that imports a Component

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
An example of a Container that has state and imports a Component to display the data

**Example**
```javascript
class KittySwitcher extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: props.data,
            randKitty: Math.floor(Math.random() * props.data.length)
        }
    }

    render() {
        return <div>
                <KittyComp img={ this.state.data[this.state.randKitty] } />
            </div>
    }
}

// Kitty Component
const KittyComp = ({img}) => (
    <img src={img} />
)
```
Here the Container has a property called data containing the kitty images. Inside the Component we make use of the constructor to set the application state as well as pick a random image path and pass it to the stateless KittyComponent


