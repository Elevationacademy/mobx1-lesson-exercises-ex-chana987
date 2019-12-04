import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let location = prompt("Enter location")
    this.props.store.editItem(this.props.item.name, location)
  }
  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? "crossed" : null}>
        <button className="editButton" onClick={this.editItem}>Edit</button>
        <button className="deleteButton" onClick={this.deleteItem}>Delete</button>
        <input type="checkbox" value={item.name} onClick={this.checkItem} />
        <span className="name">{item.name}</span> - <span className="location">{item.location}</span>
      </div>
    )
  }
}

export default Item