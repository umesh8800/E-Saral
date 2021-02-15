import React from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';
import Courses from './Courses';
import Insidecourse from './Insidecourse';
function App() {
  return (
    <div className="App"  >
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/course' component={Courses} />
        {/* <Route path ='/inside' component={Insidecourse}/> */}
      </Switch>
      {/* <Main /> */}
      
    </div>
  );
}

export default App;
