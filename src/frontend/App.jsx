import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CV from './components/cv/cv.component.jsx';
import OS from './components/os/os.component.jsx';
import Start from './components/start/start.component.jsx';
import Contact from './components/contact/contact.component.jsx';
import Loading from './components/loading/loading.component.jsx';
import Terminal from './components/terminal/terminal.component.jsx';
import ThreeCV from './components/threeCV/threeCV.component.jsx';
import ThreeStart from './components/threeStart/threeStart.component.jsx';

import Header from './components/header/header.component.jsx';

import './stylesheets/main.stylesheet.css';

function App() {
  const [activePanel, setActivePanel] = useState('start');

  const setCurrentPage = () => {

    switch (activePanel) {
      case 'loading':
        return < Loading />
        case 'cv':
          return (
            <div>
              < Header setActivePanel={setActivePanel} />
              < CV />              
            </div>
          )
        case 'start':
          return (
            <div>
              < Header setActivePanel={setActivePanel} />
              < Start />              
            </div>
          )
        case 'contact':
          return (
            <div>
              < Header setActivePanel={setActivePanel} />
              < Contact />              
            </div>
          )
        case '3dcv':
          return (
            <div>
              < Header setActivePanel={setActivePanel} />
              < ThreeCV />              
            </div>
          )
        case '3dstart':
          return (
            <div>
              < Header setActivePanel={setActivePanel} />
              < ThreeStart />              
            </div>
          )
    }

  }

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" exact element={setCurrentPage()} />
        <Route path="terminal" element={< Terminal setActivePanel={setActivePanel} />} />
        <Route path="os" element={< OS />} />
        
        <Route path="*" element={setCurrentPage()} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
