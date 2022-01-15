const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector ('#nome');
const especie = document.querySelector ('#especie');
const condicao = document.querySelector ('#status');


pegarPersonagem = .() => {
    return fetch(`https://rickandmortyapi.com/api/character/`, {
        method: 'GET',
        headers {
            Accept: 'aplication/jeson',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.especie;
    });
}Teste greg
botao.onclick = pegarPersonagem;
