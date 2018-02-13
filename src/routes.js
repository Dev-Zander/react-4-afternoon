import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

// import MyFirstRoute from './components/MyFirstRoute';
// import MySecondRoute from './components/MySecondRoute';
// import MyThirdRoute from './components/MyThirdRoute';


export default (
    <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/about' component={About}/>
        <Route path='/classlist/:class' component={ClassList}/>'
        <Route path='/student/:id' component ={Student}/>
    </Switch>
)

// export default (

//     <Switch>
//     <Route path='/'component={ MyFirstRoute } exact />
//     <Route path='/second'component={ MySecondRoute }/> 
//     <Route path='/third/:foodItem'component ={ MyThirdRoute } />
//     </Switch>

// )