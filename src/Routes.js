import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './components/navbar/Menu'
import Home from './core/Home'
import MenuList from './core/MenuList'
import Blog from './core/Blog'

const Routes = () => {

  return(
    <>
 <BrowserRouter>
 

 <Menu/> 
 

 <Switch>
     <Route path='/' exact component={ Home } />
     
     <Route path='/menu' component={ MenuList } />
     <Route path='/blog' component={ Blog } />
  </Switch>
 
 
 </BrowserRouter>
    </>
   )

 }

export default Routes