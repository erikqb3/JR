import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { About } from './pages/about.js';
import { Gallery } from './pages/gallery.js';
import { Home } from './pages/home.js';
import { NoPage } from './pages/noPage.js'
import { Videos } from './pages/videos.js';

import { Nav } from './pages/index.js';

function App(){
  return (
    <>
    <h1>MY WORKING APP!</h1>
    <h2>PLEASE WORK</h2>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Nav/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="videos" element={<Videos/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
