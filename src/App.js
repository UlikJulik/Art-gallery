import React, { useState } from 'react';
import Menu from './Menu.js'
import MainPage from './MainPage.js';
import Museum from './Museum';
import PersonLogin from './PersonLogin.js';

function App() {
  return (
    <Museum />
  );
}
/*
function App() {

  const [posts, setPost] = useState([
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript 2', body: 'Description'}
  ])

  return (
    <div className='App'>
      <form>
        <input type='text' placeholder='Name of post' />
        <input type='text' placeholder='discr of post' />
        <button>Create post</button>

      </form>
      <PostList posts={posts} title={'Posts of JS'} />
    </div>
  );
}
*/
export default App;
/*
props
state
*/