import React, {Component} from 'react';
import './App.css';
import {Button} from 'tiny-ui';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button title="Click" type="primary"/>
            </div>
        );
    }
}

export default App;
