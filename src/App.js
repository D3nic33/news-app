import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import General from './Pages/General';
import Category from './Pages/Category';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;