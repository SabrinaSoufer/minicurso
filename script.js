const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector ('#nome');
const especie = document.querySelector ('#especie');
const condicao = document.querySelector ('#status');


traduzirCondicao  =  ( data )  =>  {
    if ( data . status  ==  'desconhecido' ) {
        return  'Não sei' ;
    } else  if ( data . status  ==  'Alive' ) {
        return  'Sim' ;
    } else  {
        return  'Não. Está morto' ;
    }
}

pegarPersonagem = .() => {
    return fetch(`https://rickandmortyapi.com/api/character/3`, {
        method: 'GET',
        headers {
            Accept: 'aplication/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.especie;
        condicao.innerHTML = traduzirCondicao(data);
        
    });
}
botao.onclick = pegarPersonagem;
