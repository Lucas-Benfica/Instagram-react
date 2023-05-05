const sugestoes = [
    {
        user: 'Tobi_akatsuki',
        img: 'https://nerdhits.com.br/wp-content/uploads/2022/09/naruto-shippuden-quem-e-tobi-768x432.jpg',
        segue: 'sim'
    },
    {
        user: 'Hidan',
        img: 'https://criticalhits.com.br/wp-content/uploads/2021/08/Hidan_Perfil-910x614.png',
        segue: 'nao'
    },
    {
        user: 'Temari',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLx_ETkzbCRirR0n1JFhfQtz_lp8Hbue7tbA&usqp=CAU',
        segue: 'sim'
    },
    {
        user: 'Teuchi-Ichiraku',
        img: 'https://pm1.narvii.com/6367/11db8844f6b805e06c73602761d3e310ae858f8a_hq.jpg',
        segue: 'sim'
    },
    {
        user: 'Akamaru_dog',
        img: 'http://2.bp.blogspot.com/-KweBf870j8w/TiKaFcU8OAI/AAAAAAAAAf8/0EtGh9_t8wQ/w1200-h630-p-k-no-nu/akamaru.JPG',
        segue: 'nao'
    }  
];

export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugestoes.map( (sgt) => <Suggestion userImg={sgt.img} user={sgt.user} txt={sgt.segue} />  )}

        </div>
    );
}

// userImg='assets/img/adorable_animals.svg' user='adorable_animals' txt='Segue você'
function Suggestion(sug) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={sug.userImg} alt={sug.user} />
                <div class="texto">
                    <div class="nome">{sug.user}</div>
                    <div class="razao">{(sug.txt === 'sim') ? 'Segue você' : 'Novo no Instagram'}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}