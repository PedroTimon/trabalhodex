let currentPokemonId = 1; // ID do Pokémon atual

function fetchPokemon(idOrName = null) {
    const input = idOrName || document.getElementById('pokemon-input').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
    const pokemonInfoDiv = document.getElementById('pokemon-info');
    const errorMessage = document.getElementById('error-message');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado');
            }
            return response.json();
        })
        .then(data => {
            errorMessage.textContent = ''; // Limpa a mensagem de erro
            document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
            document.getElementById('pokemon-id').textContent = data.id;
            document.getElementById('pokemon-image').src = data.sprites.front_default;

            const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            document.getElementById('pokemon-types').textContent = types;

            // Atualiza o ID atual
            currentPokemonId = data.id;

            // Muda o fundo de acordo com o tipo do Pokémon
            changeBackgroundColor(data.types[0].type.name);

            pokemonInfoDiv.style.display = 'block'; // Exibe as informações
        })
        .catch(error => {
            pokemonInfoDiv.style.display = 'none'; // Esconde as informações
            document.getElementById('pokemon-image').src = ''; // Limpa imagem
            errorMessage.textContent = error.message;
        });
}

function changePokemon(step) {
    currentPokemonId += step;
    fetchPokemon(currentPokemonId);
}

function changeBackgroundColor(type) {
    const body = document.body;
    switch (type) {
        case 'normal':
            body.style.backgroundColor = '#d3dae3';
            break;
        case 'fire':
            body.style.backgroundColor = '#d9670f';
            break;
        case 'water':
            body.style.backgroundColor = '#1c599e';
            break;
        case 'grass':
            body.style.backgroundColor = 'green';
            break;
        case 'electric':
            body.style.backgroundColor = '#d4c00d';
            break;
        case 'ice':
            body.style.backgroundColor = 'lightblue';
            break;
        case 'fighting':
            body.style.backgroundColor = '#731515';
            break;
        case 'poison':
            body.style.backgroundColor = '#51228a';
            break;
        case 'ground':
            body.style.backgroundColor = '#996015';
            break;
        case 'flying':
            body.style.backgroundColor = 'skyblue';
            break;
        case 'psychic':
            body.style.backgroundColor = '#cc25cc';
            break;
        case 'bug':
            body.style.backgroundColor = '#8fd124';
            break;
        case 'rock':
            body.style.backgroundColor = '#7a5d27';
            break;
        case 'ghost':
            body.style.backgroundColor = '#2f1e45';
            break;
        case 'dragon':
            body.style.backgroundColor = '#2f1787';
            break;
        case 'dark':
            body.style.backgroundColor = '#27232e';
            break;
        case 'steel':
            body.style.backgroundColor = '#c4c4c4';
            break;
        case 'fairy':
            body.style.backgroundColor = 'lightpink';
            break;
        default:
            body.style.backgroundColor = 'white';
    }
}