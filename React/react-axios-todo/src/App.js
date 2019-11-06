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
    Axios.get('https://api.vschool.io/jax_clark/todo/').then(res => {
      this.setState({todos: res.data.reverse()})
    })
  }

  handleDelete = (id) => {
    Axios.delete('https://api.vschool.io/jax_clark/todo/' + id).then(res => {
      this.setState(prev => {
        const todos = prev.todos.filter(todo => {
          return todo._id !== id
        })
        return {todos} //same as todos: todos
      })
    })
  }

  handleSubmit = (todo) => {
    Axios.post('https://api.vschool.io/jax_clark/todo/', todo).then(res => {
      this.setState(prev => {
        return {todos: [res.data, ...prev.todos]}
      })
    })
  }

  handleSave = (updates, id) => {
    Axios.put('https://api.vschool.io/jax_clark/todo/' + id, updates).then(response => {
      this.setState(prev => {
        const todos = [...prev.todos]
        const index = todos.findIndex(todo => {
          return todo._id === id
        })
        todos[index] = response.data

        return {todos}
      })
    })
  }

  render(){
    const style = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }
    return (
      <div className="app" style={style}>
        <Form handleSubmit={this.handleSubmit} />
        <TodoContainer handleDelete={this.handleDelete} handleSave={this.handleSave} todos={this.state.todos} />
      </div>
    )

  }
}

export default App