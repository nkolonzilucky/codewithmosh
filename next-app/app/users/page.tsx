import React from 'react'

interface User {
 id: number;
 name: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' }
        
    );
    const users: User[] = await res.json();
  return (
    <div>
      <h1>UsersPage</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(({id, name}) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  )
}

export default UsersPage
