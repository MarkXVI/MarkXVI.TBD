import React from "react";
import '../../stylesheets/cv.stylesheet.css';

import CVimg from '../../assets/CVdocs/CV_MarkHarvey.jpg';
import CVpdf from '../../assets/CVdocs/CV_MarkHarvey.pdf';

const CV = () => {

    return (
        <div>
            <h1>CV</h1>
            <div class= "CVContainer">
                <a href={CVpdf} name="CV_MarkHarvey"><img src={CVimg} /></a>
                <p>Press on the CV to view as a PDF</p>
            </div>
        </div>
    );
}

export default CV