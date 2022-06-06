import React, { useState } from 'react';

import Login from './components/login/login.component.jsx';
import CV from './components/cv/cv.component.jsx';
import Start from './components/start/start.component.jsx';
import Loading from './components/loading/loading.component.jsx';
import Terminal from './components/terminal/terminal.component.jsx';
import ThreeCV from './components/threeCV/threeCV.component.jsx';
import ThreeStart from './components/threeStart/threeStart.component.jsx';

import './stylesheets/main.stylesheet.css';

function App() {

  const [activePanel, setActivePanel] = useState('terminal');

  const setCurrentPage = () => {

    switch (activePanel) {
      case 'loading':
        return <Loading />
        case 'login':
          return <Login />
        case 'cv':
          return <CV />
        case 'start':
          return <Start />
        case 'terminal':
          return <Terminal />
        case '3dcv':
          return <ThreeCV />
        case '3dstart':
          return <ThreeStart />
    }

  }

  return (
    <div className="App">
      {setCurrentPage()}
    </div>
  )
}

export default App
