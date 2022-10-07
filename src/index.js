import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './Navbar'
import Route from './context'
import Link from './context'
import UserContext from './context'
import HashRouter from './context'
import Home from './home'
import AllData from './alldata'
import CreateAccount from  './createaccount'
import Login from './login'
import Deposit from './deposit'
import Withdraw from './withdraw'
import Balance from './balance'
import './context'



function Spa(){
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{users:[{name:'micah', email:'mica1898@gmail.com', password:'secret', balance: 100}]}}>
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  )
}


ReactDOM.render(
  <Spa />,
  document.getElementById('root')
)

