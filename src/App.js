import React from 'react';
import { ReactDOM } from 'react';
import { 
  Route,
  Routes
  } from 'react-router-dom';
import NavBar from './components/nav/navBar'
import './App.css';
import HomePage from './pages/home';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/post/:id' element={<div>Post</div>}/>
        <Route path='/sub/:name' element={<div>SubReddit</div>}/>
        <Route path='*' element={<div>404 Not Found</div>}/>
      </Routes>
    </>
  );
}

export default App;
