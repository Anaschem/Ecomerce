
  import React, { useState } from 'react';
  import Login from '../login';

export default function app() {
  return (
const [token, setToken] = useState();
if(!token) {
    return <Login setToken={setToken} />
  }
    )
}
