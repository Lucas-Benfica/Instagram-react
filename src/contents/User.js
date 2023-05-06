import { useState } from 'react'

export default function User() {
    let [nome, setNome] = useState('Seu nome');
    let [imagem, setImagem] = useState('https://www.meupositivo.com.br/doseujeito/wp-content/uploads/2020/02/navegacao-em-modo-anonimo.jpg')

    function trocarNome() {
        let nome = prompt("Qual o seu userName?");
        if (nome) {
            setNome(nome);
        }
    }
    function trocarImg(){
        let img = prompt("Link da nova foto de perfil:");
        if(img){
            setImagem(img);
        }
    }

    return (
        <div class="usuario">
            <img src={imagem} alt="imagem de perfil" onClick={trocarImg} data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon data-test="edit-name" name="pencil" onClick={trocarNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}

