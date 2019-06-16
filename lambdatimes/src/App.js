import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login'

const App = () => {
  return (
    <div className="App">
      <Login />
      {/* <TopBar /> */}
      <Header />
      <Content />
    </div>
  );
}

export default App;
