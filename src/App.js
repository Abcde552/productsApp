import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Curdhome from './Curdhome';
import Crudcreate from './Crudcreate';
import Curdupdate from './Curdupdate';
import Curdread from './Curdread';

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Curdhome />} />
          <Route path="/create" element={<Crudcreate />} />
          <Route path="/read/:id" element={<Curdread />} />
          <Route path="update/:id" element={<Curdupdate />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App
