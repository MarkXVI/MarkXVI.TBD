import React from "react";
import '../../stylesheets/start.stylesheet.css';

import Card from "../small_components/card/card.component.jsx";



const Start = () => {

    const cards = [
        { title: "Card 1", content: "Card 1 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 2", content: "Card 2 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 3", content: "Card 3 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 4", content: "Card 4 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 5", content: "Card 5 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 6", content: "Card 6 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 7", content: "Card 7 Content", img: "https://via.placeholder.com/300x200" },
      ];

    return (
      <div>
        <div className="intro">
          <h1>Hello World!</h1>
          <p className="command"><strong>Artistic Developer (Software Developer / Artist)</strong></p>
          <p className="index">My name is Mark Harvey and I am a software developer and an artistic person in love with my craft. I am based out of Helsingborg, Sweden and I am soon to graduate with a Bachelor degree for software developement from Kristianstad University.</p>
          <p>I believe that I would be a great fit for any team because I play well with others, I can adapt quickly to resolve many situations and I am very willing to work to get any job done. I am also a creative, fast learning programmer that is eager for new way and better ways to improve.</p>
          <p className="color2">I am most experienced with writing code in Java, Python and JavaScript, although I am quick at picking up new languages to work with.</p>
          <br></br>
        </div>
        <div className="projects">
          <h1>Projects</h1>
          <div className="cards">
              {cards.map((card, index) => (
                  <Card key={index} title={card.title} content={card.content} img={card.img} />
              ))}
          </div>
        </div>
        <div className="tools" >
          <h2>Languages and Tools</h2>
          <img className="language"  title="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />

          <img className="language"  title="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />

          <img className="language"  title="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

          <img  title="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />

          <img  title="ThreeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" />

          <img  title="NodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />

          <img  title="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"/>

          <img  title="Heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"/>

          <br /><br />

          <img className="language"  title="Java"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"/>

          <img  title="JetBrains" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg"/>

          <img  title="AndroidStudio" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"/>

          <br /><br />

          <img className="language"  title="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />

          <img  title="VScode" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />

          <img  title="Anaconda" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg"/>

          <br /><br />

          <img className="language"  title="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />

          <img  title="GitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />

          <br /><br />
        </div>
        <div className="stats" >
          <h2>Statistics</h2>
          <img src="https://github-readme-stats.vercel.app/api?username=MarkXVI&show_icons=true&theme=gruvbox"  alt="MarkXVI&#39;s GitHub stats"></img>
        </div>

      </div>
    );
}

export default Start