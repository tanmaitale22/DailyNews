import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import React, { Component } from 'react'
import { News } from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>
      <div>
        <Navbar title="DailyDrama" home="Home"about="About"/>
        <News/>
        <Footer/>
      </div>
      </>
    )
  }
}
