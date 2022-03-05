import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import General from './Pages/General';
import Category from './Pages/Category';
import Search from './Pages/Search';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;