import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import NavbarInstance from './components/navbar';
import Main from './components/main';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavbarInstance />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
