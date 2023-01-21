import React from "react";
import '../../stylesheets/os.stylesheet.css';

import Window from '../small_components/window/window.component.jsx';

const OS = () => {

    const buttons = [
        { title: "Terminal", img: "https://via.placeholder.com/300x200" },
        { title: "CV", img: "https://via.placeholder.com/300x200" },
        { title: "Home", img: "https://via.placeholder.com/300x200" },
        { title: "Contact", img: "https://via.placeholder.com/300x200" },
    ];    

    return (
        <div>
            <h1>MarkXVI-OS!</h1>
            {buttons.map((btn, index) => (
                <Window key={index} title={btn.title}/>
            ))}
        </div>

    );
}

export default OS