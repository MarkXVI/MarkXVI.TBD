import {React, useState} from 'react';

import { Window } from "@progress/kendo-react-dialogs";
import '@progress/kendo-theme-default/dist/all.css';

import CV from '../../cv/cv.component.jsx';
import Start from '../../start/start.component.jsx';
import Contact from '../../contact/contact.component.jsx';
import Terminal from '../../terminal/terminal.component.jsx';

const WindowComponent = (title) => {

  const [visible, setVisible] = useState(false);
  const toggleDialog = () => {
    setVisible(!visible);
  };

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
      <div>
        <button
          className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
          onClick={toggleDialog}
        >
          {title.title}
        </button>
        {visible && (
          <Window 
            title={title.title} 
            onClose={toggleDialog} 
            initialHeight={400}
            initialWidth={600}
            initialLeft={100}
            initialTop={300}
          >
            {getComponent(title.title)}
          </Window>
        )}
      </div>
    );
};

export default WindowComponent;