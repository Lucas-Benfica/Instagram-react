import { useState } from 'react'

const feed = [
    {
        nome: 'barked',
        imagem: 'assets/img/dog.svg',
        userImg: 'assets/img/barked.svg',
        likeImg: 'assets/img/adorable_animals.svg',
        likeUser: 'adorable_animals',
        likeNum: 99159
    },
    {
        nome: 'meowed',
        imagem: 'assets/img/gato-telefone.svg',
        userImg: 'assets/img/meowed.svg',
        likeImg: 'assets/img/respondeai.svg',
        likeUser: 'respondeai',
        likeNum: 101523
    },
    {
        nome: 'Naruto_Uzumaki',
        imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d384b936-aedb-4963-927d-a881368dd34e/d97sxo6-48d2fb78-2648-4106-9d7f-9a5a436d47d5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzODRiOTM2LWFlZGItNDk2My05MjdkLWE4ODEzNjhkZDM0ZVwvZDk3c3hvNi00OGQyZmI3OC0yNjQ4LTQxMDYtOWQ3Zi05YTVhNDM2ZDQ3ZDUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.knbIO9LTmnB3nM-kT7lAimBKybTA9RjS6xYiWiuz1Io',
        userImg: 'https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg',
        likeImg: 'https://steamuserimages-a.akamaihd.net/ugc/940557915491259968/CA7F35BFA4C07EC5B13D81E40ADDDAE3BFC59026/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=trueassets/img/',
        likeUser: 'Sasuke_Uchiha',
        likeNum: 985987
    },
    {
        nome: 'Sasuke_Uchiha',
        imagem: 'https://i.pinimg.com/originals/c8/e0/af/c8e0afa3847eb1fc0c67ce238e889636.jpg',
        userImg: 'https://steamuserimages-a.akamaihd.net/ugc/940557915491259968/CA7F35BFA4C07EC5B13D81E40ADDDAE3BFC59026/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        likeImg: 'https://pbs.twimg.com/media/EZNOQlRXkAEpNP2.jpg',
        likeUser: 'InoYamanaka',
        likeNum: 798865
    },
    {
        nome: 'SakuraHaruno',
        imagem: 'https://pbs.twimg.com/media/CMeZFFPUEAAIFKY.png',
        userImg: 'https://uploads.spiritfanfiction.com/historias/capitulos/202011/minha-vida-como-sakura-haruno--naruto-fanfiction-21088164-281120202323.jpg',
        likeImg: 'http://pm1.narvii.com/6486/4cae0412bab5116068d7b810c6a9876e104e855d_00.jpg',
        likeUser: 'Hinata_Hiuuga',
        likeNum: 101523
    }
];

export default function Posts() {

    return (
        <div class="posts">
            {feed.map((publi) => <Post key={publi.imagem} userImg={publi.userImg} user={publi.nome} imagem={publi.imagem} likeImg={publi.likeImg} likeUser={publi.likeUser} likeNum={publi.likeNum} />)}
        </div>
    );
}

function Post(post) {
    let [like, setLike] = useState('heart-outline');
    let [save, setSave] = useState('bookmark-outline');
    let [cor, setCor] = useState('black');
    let [curtidas, setCurtidas] = useState(post.likeNum);

    function salvar(){
        let troca = '';
        if(save === 'bookmark-outline'){
            troca = 'bookmark';
            setSave(troca);
        }
        if(save === 'bookmark'){
            troca = 'bookmark-outline';
            setSave(troca);
        }
    }
    function curtir(where){
        let trocar = '';
        let curtiu = 0;
        console.log()
        if(where === 'img'){
            if(cor === 'black'){
                curtiu = curtidas + 1; 
                setCurtidas(curtiu);
            }
            setLike('heart');
            setCor('red');   
        }
        if(where === 'button'){
            if(like === 'heart-outline'){
                trocar = 'heart';
                setLike(trocar);
                setCor('red');
                curtiu = curtidas + 1; 
                setCurtidas(curtiu);
            }
            if(like === 'heart'){
                trocar = 'heart-outline';
                setLike(trocar);
                setCor('black');
                curtiu = curtidas - 1; 
                setCurtidas(curtiu);
            }
        }
    }

    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={post.userImg} alt={post.user} />
                    {post.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" onDoubleClick={() => curtir('img')} src={post.imagem} alt="" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon data-test="like-post" class={cor} onClick={() => curtir('button')} name={like}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div >
                        <ion-icon data-test="save-post" onClick={salvar} name={save}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={post.likeImg} alt={post.likeUser} />
                    <div class="texto">
                        Curtido por <strong>{post.likeUser}</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}