import React from "react";
import '../../stylesheets/start.stylesheet.css';

import Card from "../small_components/card/card.component.jsx";



const Start = () => {

    const cards = [
        { title: "Card 1", content: "Card 1 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 2", content: "Card 2 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 3", content: "Card 3 Content", img: "https://via.placeholder.com/300x200" },
        { title: "Card 4", content: "Card 4 Content", img: "https://via.placeholder.com/300x200" },
      ];

    return (
    <div>
        <h1>Start</h1>
        <div name="cards">
            {cards.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} img={card.img} />
            ))}
        </div>
      </div>
    );
}

export default Start