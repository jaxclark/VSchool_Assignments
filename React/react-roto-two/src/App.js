import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Product from './Product';
import ProductList from './ProductList';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About} />
                <Route exact path='/products' component={ProductList} />
                <Route path='/products/:_id' component={Product} />
            </Switch> 
        </div>
    )
}

export default App;
