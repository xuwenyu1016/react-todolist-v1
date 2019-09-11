import React, { Component, Fragment } from 'react';
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor (props) {
    super (props)

    this.state = {
      inputValue: '',
      list: [1,2,3]
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  render () {
    return (
      <Fragment>
        <input
          type='text'
          placeholder='To do something'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />  
        <button onClick={this.handleButtonClick}>Submit</button>
        <ul>
          {this.todolist()}
        </ul>
        
      </Fragment>
    )
  }

  todolist () {
    return (
      this.state.list.map(
        (value, index) => {
          return (
            <li key={index}>
              <TodoListUI index={index} value={value} handleDelete={this.handleDelete.bind(this) }/>
            </li>
          )
        }
      )
    )
  }

  handleInputChange (e) {
    const value = e.target.value
    this.setState(
      () => {
        return {
          inputValue: value
        }
      }
    )
  }

  handleButtonClick () {
    this.setState(
      (prevState) => {
        return {
          list: [...prevState.list, prevState.inputValue],
          inputValue: ''
        }
      }
    )
  }

  handleDelete (index) {
    this.setState(
      (prevState) => {
        const list = [...prevState.list];
        list.splice(index,1);
        return {
          list
        }
      }
    )
  }
}

export default TodoList;
