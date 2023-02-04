import React from "react";
import '../../stylesheets/cv.stylesheet.css';

import CVimg from '../../assets/CVdocs/CV_MarkHarvey.jpg';
import CVpdf from '../../assets/CVdocs/CV_MarkHarvey.pdf';

const CV = () => {

    return (
        <div>
            <h1>CV</h1>
            <div className= "CVContainer">
                <div className= "wrapper">
                    <div class="marquee">
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                    </div>
                </div>
                <a href={CVpdf} name="CV_MarkHarvey"><img src={CVimg} /></a>
                <div className= "wrapper">
                    <div class="marquee">
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                        <p>Press on the CV to view as a PDF -&nbsp;</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV