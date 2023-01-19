import React from 'react';

import { Window } from "@progress/kendo-react-dialogs";
import '@progress/kendo-theme-default/dist/all.css';

const WindowComponent = (window) => {
    return (
        <Window
          title={'Terminal'}
          onClose={() => setShowWindow(false)}
          initialHeight={400}
          initialWidth={600}
        >
          {window}
        </Window>
      );
};

export default WindowComponent;