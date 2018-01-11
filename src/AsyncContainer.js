/**
 *
 */
import { render } from 'react-dom'
import React, { Component } from 'react'
import axios from 'axios'

import Product from './components/Product'

class AsyncContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get(this.props.endpoint)
            .then(resp => this.setState({products: resp.data.products}))
            .catch(error => console.log(error))
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        let products = this.state.products.map((product, i) =>
            <Product {...product} key={i} />
        )
        return <div>
                {products}
            </div>
    }
}

render(
    <AsyncContainer endpoint="/sample.json" />,
    document.getElementById('root')
)
