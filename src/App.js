import React from 'react';
import { Provider } from 'react-redux';

import './styles/styles.css';

import store from './store';
import Players from './components/players/players';
import SelectedTeam from './components/selectedTeam/selectedTeam';

import Posts from './components/posts/posts'

import PostForm from './components/postForm/post-form'


function App() {
  return (
      <Provider store={store}>
          <main>
              <h1>DT Manager</h1>
              <Players/>
              <SelectedTeam/>
          </main>
           <hr/> 
            <h3>posting app</h3>
          <PostForm />
          <Posts/>
      </Provider>
  );
}

export default App;
