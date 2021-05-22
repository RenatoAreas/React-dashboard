import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Login from './views/Login';

class App extends React.Component {

  render(){
    return (
      <HashRouter>
        <Route path="/" component={Login}/>
      </HashRouter>
    )
  }
}

export default App;
