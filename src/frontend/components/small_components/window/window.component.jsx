import React from 'react';

import { Window } from "@progress/kendo-react-dialogs";
import '@progress/kendo-theme-default/dist/all.css';

import CV from '../../cv/cv.component.jsx';
import Start from '../../start/start.component.jsx';
import Contact from '../../contact/contact.component.jsx';
import Terminal from '../../terminal/terminal.component.jsx';

const WindowComponent = (title) => {
  console.log(title.title);

  const getComponent = (name) => {

    switch (name) {
        case 'CV':
            return < CV />              
        case 'Home':
            return < Start />              
        case 'Contact':
            return < Contact />
        case 'Terminal':
            return < Terminal />
    }
}

  return(
      <Window
        title={title.title}
        onClose={() => setVisible(false)}
        // onMove={() => }}
        minimizeButton={false}
        initialHeight={400}
        initialWidth={600}
      >
        {getComponent(title.title)}
      </Window>
    );
};

export default WindowComponent;