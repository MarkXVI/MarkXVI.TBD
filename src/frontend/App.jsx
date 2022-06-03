import React, { useState } from 'react';

import logo from './assets/MarkXVI_LOGO.svg';

import Login from './components/login/login.component.jsx';
import CV from './components/cv/cv.component.jsx';
import Start from './components/start/start.component.jsx';
import Terminal from './components/terminal/terminal.component.jsx';
import ThreeCV from './components/threeCV/threeCV.component.jsx';
import ThreeStart from './components/threeStart/threeStart.component.jsx';
import './stylesheets/loading.stylesheet.css';

function App() {

  const [activePanel, setActivePanel] = useState('loading');

  const setCurrentPage = () => {

    switch (activePanel) {
      case 'loading':
        return (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        )
        case 'login':
          return (<Login/>)
        case 'cv':
          return (<CV/>)
        case 'start':
          return (<Start/>)
        case 'terminal':
          return (<Terminal/>)
        case '3dcv':
          return (<ThreeCV/>)
        case '3dstart':
          return (<ThreeStart/>)
    }

  }

  return (
    <div className="App">
      {setCurrentPage()}
    </div>
  )
}

export default App
