import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import Profile from './screens/profile/Profile';

const App = () => (//routing between different pages like login, home, profile
  <Switch>
    <Route exact path='/' render={({history}, props) => <Login {...props} history={history}/>} />
    <Route exact path='/home' render={({history}, props) => <Home {...props} history={history}/>} />
    <Route exact path='/profile' render={({history}, props) => <Profile {...props} history={history}/>}/>
  </Switch>
)

export default App;