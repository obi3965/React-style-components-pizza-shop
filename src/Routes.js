import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from './components/navbar/Menu'
import Home from './core/Home'

import TvSeries from './core/TvSeries'
import MenuList from './core/MenuList'

import GlobalStyle from './globalStyle';
import Blog from './core/Blog'



const Routes = () => {

 
  return(
    <>
 <BrowserRouter>
 <GlobalStyle />
 <Menu/>

 <Switch>
     <Route path='/' exact component={ Home } />
     <Route path='/blog' component={ Blog } />
     <Route path='/Tv-series' component={ TvSeries } />
     <Route path='/menu' component={ MenuList } />
    
  </Switch>
 </BrowserRouter>
    </>
   )

 }

export default Routes