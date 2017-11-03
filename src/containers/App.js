import React, {Component} from 'react';
import './App.css';
// import {Button} from 'tiny-ui';
import HomePage from "./Home/HomePage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <HomePage/>
            </div>
        );
    }
}

export default App;
