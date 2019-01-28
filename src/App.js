import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Aside from './component/aside/Aside';
import Hometab from './component/hometab/Hometab';

class App extends Component {
  render() {
    return (
        <div>

          <Header></Header>
          <Hometab/>
          {/*<Aside/>*/}
        </div>


    );
  }
}

export default App;
