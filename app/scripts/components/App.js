import React, { PropTypes } from 'react';

import { changeName, loadGithubFollowers } from '../actions';

function renderUsers(users) {
  if (!users) return;
  return (
    <ul>{ users.map((user, index) =>
      <li key={index}>{user} <button onClick={() => changeName(user)} >{user}</button></li>) }
    </ul>
  );
}

export default function App(props) {
  const { isLoading, name, users, error } = props;
  return (
    <div>
      { isLoading ?
        <p>Loading...</p> :
        <h1>Github followers</h1> }
      <h2>{ error }</h2>
      <h1>{ name }</h1>
      { renderUsers(users) }
      <button onClick={() => changeName('cgarciae')} >cgarciae</button>
      <button onClick={() => changeName('--chimpinano')} >--chimpinano</button>
      <br />
      <button className="button primary" onClick={()=>loadGithubFollowers(name)} > Load Followers</button>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  users: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};
