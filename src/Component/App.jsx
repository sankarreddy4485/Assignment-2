import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import About from './About';
import SharedLayout from './SharedLayout';
import Questions from './Question';
import SingleQuestion from './SingleQuestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route path="/home"  element={<Home />} />
         
          <Route  path='/questions' index  element={<Questions/>}>
          {/* <Route path=':questionId' element={<SingleQuestion />} /> */}
         
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
