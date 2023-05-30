import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";

export function Nav(){
  return(
    <>
    <nav>
      <ul>
        <li>NAV</li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/gallery'>Gallery</Link>
        </li>
        <li>
          <Link to='/videos'>Videos</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
    <Outlet/>
    </>
  )
}