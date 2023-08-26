import { useState } from 'react'
import Nav from './components/nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/main/Main';
import About from './components/commons/About';
import Footer from './components/commons/Footer';
import VideoPlayerLayout from './components/main/VideoPlayerLayout';
import SearchIndex from './components/main/SearchIndex';

/**
 * App()
 * ------------------------------------------
 * ToDo: need to create routes after finishing components.
 * @returns 
 */
function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />
        <Routes >
          <Route path="/" element={<Main />} />
          <Route path="/search/:query" element={<SearchIndex />} />
          <Route path="/about" element={<About />}/>
          <Route path="/show/:id" element={<VideoPlayerLayout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
