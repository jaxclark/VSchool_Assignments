import React, {Component} from 'react';
import TodoContainer from './TodoContainer'
import Form from './Form'
import Axios from 'axios'

class App extends Component {
  constructor(){
    super()

    this.state = {
      todos: [],
    }
  }

  componentDidMount(){
    Axios.get('https://api.vschool.io/bob/todo').then(res => {
      this.setState({todos: res.data.reverse()})
    })
  }

  handleSubmit = (todo) => {
    Axios.post('https://api.vschool.io/bob/todo', todo).then(res => {
      this.setState(prev => {
        return {todos: [res.data, ...prev.todos]}
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Form handleSubmit={this.handleSubmit} />
        <TodoContainer todos={this.state.todos}/>
      </div>
    )

  }
}

export default App
