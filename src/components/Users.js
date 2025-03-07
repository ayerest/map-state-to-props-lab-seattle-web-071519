import React, { Component } from 'react';
import {connect} from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    })
    return (
      <div>
        {users.length}
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)
