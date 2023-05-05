import {useState} from 'react'

const allStory = [
    {
        user: 'Sakura',
        img: 'https://uploads.spiritfanfiction.com/historias/capitulos/202011/minha-vida-como-sakura-haruno--naruto-fanfiction-21088164-281120202323.jpg'
    },
    {
        user: 'Gamabunta',
        img: 'https://i.pinimg.com/736x/32/ff/2b/32ff2bbeefbdea11110c15473fd0ad22.jpg'
    },
    {
        user: 'Sasuke',
        img: 'https://steamuserimages-a.akamaihd.net/ugc/940557915491259968/CA7F35BFA4C07EC5B13D81E40ADDDAE3BFC59026/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    },
    {
        user: 'Hinata',
        img: 'http://pm1.narvii.com/6486/4cae0412bab5116068d7b810c6a9876e104e855d_00.jpg'
    },
    {
        user: 'Naruto',
        img: 'https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg'
    },
    {
        user: 'Gaara',
        img: 'https://criticalhits.com.br/wp-content/uploads/2021/04/Gaara-Kazekage.jpg'
    },
    {
        user: 'KillerBee',
        img: 'https://images2.alphacoders.com/644/644173.jpg'
    },
    {
        user: 'Naruto',
        img: 'https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg'
    },
    {
        user: 'Sasuke',
        img: 'https://steamuserimages-a.akamaihd.net/ugc/940557915491259968/CA7F35BFA4C07EC5B13D81E40ADDDAE3BFC59026/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'
    }
];

export default function Stories() {
    return (
        <div class="stories">

            {allStory.map((str) =>  <Story imagem={str.img} user={str.user}/> )}         

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Story(story) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={story.imagem} alt={story.user} />
            </div>
            <div class="usuario">
                {story.user}
            </div>
        </div>
    );
}