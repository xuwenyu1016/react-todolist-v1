import React, { Component, Fragment } from 'react';

class TodoListUI extends Component {
  constructor (props) {
    super (props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  render () {
    const { value } = this.props;
    return (
      <Fragment>
        <div onClick={this.handleDelete}>{value}</div>  
      </Fragment>
    )
  }

  handleDelete () {
    const { handleDelete, index } = this.props;
    handleDelete(index)
  }
}

export default TodoListUI;