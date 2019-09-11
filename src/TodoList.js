import React, { Component, Fragment } from 'react';

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
          {this.state.list.map(
            (value, index) => {
              return (
                <li key={index} onClick={this.handleDelete.bind(this,index)}>{value}</li>
              )
            }
          )}
        </ul>
      </Fragment>
    )
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleButtonClick () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleDelete (index) {
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list
    })
  }
}

export default TodoList;
