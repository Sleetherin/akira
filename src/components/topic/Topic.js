import React, { Component } from 'react'

export class Topic extends Component {
  render() {
    const { display_name} = this.props.topic;
    return (
      <div>
         <p>{display_name}</p>
      </div>
    )
  }
}

export default Topic
