import React from 'react';
import './App.css';
import MainNav from './components/Navbar/MainNav';
import Sidebar from './components/SidebarNav/Sidebar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <MainNav />
      <Sidebar />
    </div>
    </BrowserRouter>
  );
}

export default App;
