// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ScaleExample from './pages/Content/ScaleExample';
import FormatterDemo from './pages/Content/FormaterDemo';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='main d-flex'>
          <div className='sidebarWrapper'>
            <Sidebar />
          </div>
          <div className='content'>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/orderGraph" exact={true} element={<ScaleExample />} />
              <Route path="/orderGraphDemo" exact={true} element={<FormatterDemo />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </>
  )
}
export default App;
