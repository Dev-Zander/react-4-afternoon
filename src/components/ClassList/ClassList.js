import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state ={

        students : [],
    }
    
  }
  componentDidMount(){
   console.log(this.props)
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
  
    .then(res => {
      this.setState({students:res.data})
      console.log(res)
    })
  }

  render() {



    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
       {this.state.students.map(( e,i ) => {
         return <Link key={i} to={`/student/${e.id}`}><h3>{`${e.first_name} ${e.last_name}`}</h3></Link>
       })}
      </div>
    )
  }
}