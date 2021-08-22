/*Iniciando array de objetos contendo dados dos animais*/
const listadeFelinos = [
  {
    title: 'O tigre',
    imgUrl: './img/tigre.jpg',
    description: 'O Tigre (Panthera tigris) é uma das espécies da subfamília dos panterinos (família Felidae) pertencente ao gênero Panthera. Só é encontrado no continente asiático; É um predador carnívoro e é a maior espécie de felino do mundo, junto com o leão, podendo ambos atingir um tamanho comparável ao dos maiores fósseis de felinos.',
    createdAt: '2021-06-01T23:12:11.837Z'
  },
  {
    title: 'O leão',
    imgUrl: './img/leao.jpg',
    description: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felídeos que é uma das cinco espécies do gênero Panthera. Leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África Subsaariana (com exceção das regiões de selva da costa atlântica e da Bacia do Congo) e em uma pequena área do noroeste da Índia',
    createdAt: '2021-05-05T23:12:11.837Z'
  },
  {
    title: 'O leopardo',
    imgUrl: './img/leopardo.jpg',
    description: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felídeos. Como três dos outros gatos do gênero Panthera: o leão, o tigre e a onça, eles se caracterizam por uma modificação no osso hióide que lhes permite rugir. É também conhecida como pantera marrom e, quando tem a pelagem totalmente escura, como pantera negra (melânica).',
    createdAt: '2021-05-05T23:12:11.837Z'
  },
  {
    title: 'A pantera negra',
    imgUrl: './img/pantera-negra.jpg',
    description: 'A pantera negra é uma variação negra (melanismo) de várias espécies de grandes felinos, principalmente o leopardo (Panthera pardus) e a onça pintada (Panthera onca). Mas deve-se ressaltar que não é uma espécie nova, nem mesmo uma subespécie, é simplesmente uma variação negra desses animais.',
    createdAt: '2021-04-09T23:12:11.837Z'
  },
  {
    title: 'O jaguar',
    imgUrl: './img/jaguar.jpg',
    description: 'O jaguar, jaguar ou yaguareté (Panthera onca) é um felino carnívoro da subfamília dos Panterinos e gênero Panthera. É a única das cinco espécies atuais desse gênero encontradas na América. É também o maior felino da América e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
    createdAt: '2021-05-18T23:12:11.837Z'
  },
  {
    title: 'O guepardo',
    imgUrl: './img/chita.jpg',
    description: 'A chita (Acinonyx jubatus) 1 é um membro atípico da família dos felídeos. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido, atingindo velocidade máxima de 115 km / h em corridas de até quatrocentos ou quinhentos metros.',
    createdAt: '2021-05-22T23:12:11.837Z'
  },
];

/*Armazenando elementos do DOM para manipulação*/
let counter = 0;
let body = document.querySelector('body');
let checkbox = document.querySelector("input[type=checkbox]");
let lista = document.getElementById('lista-animais');
let card = document.querySelectorAll('li');
let buttons = document.querySelectorAll('button');


//Função que recarrega a página
const reload = () => {
  window.location.reload();
}

//Função para alterar estilos de cores no modo escuro/ claro
const definirCor = (item) => {
    //Condicionais ternárias que aplicam estilos do modo de cor que está ativo
    checkbox.checked ? item.forEach(item => {item.style.backgroundColor="#ccc";}) : item.forEach(item => {item.style.backgroundColor="rgb(51, 37, 0)";});
    checkbox.checked ? item.forEach(item => {item.style.color="#000";}) : item.forEach(item => {item.style.color="#ccc";});
    checkbox.checked ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
    checkbox.checked ? buttons.forEach(item => {item.style.backgroundColor="#fff";}) : buttons.forEach(item => {item.style.backgroundColor="#a0512d";});
}


/*Escutador de eventos - aguarda o botão modo escuro ser acionado para ativar estilos com cores diferentes*/
checkbox.addEventListener('change', () => {
  //Atualizando lista de cards renderizados
  card = document.querySelectorAll('li');
  definirCor(card);
});

//Função que renderiza um novo card
function gerarCard(){

  //Verifica se o contador de cliques atingiu o limite de animais do array listadeFelinos
  if(counter < listadeFelinos.length) {

    //Cria novo elemento list-item
    let itemLista = document.createElement('LI');

  //adiciona novo item de lista antes da posição 0, com os dados do animal conforme o contador
    itemLista.innerHTML =  `<h2>${listadeFelinos[counter].title}</h2>
                            \n<img src="${listadeFelinos[counter].imgUrl}">
                            \n<p>${listadeFelinos[counter].description}</p>
                            \n<p>Criado em: ${(listadeFelinos[counter].createdAt).slice(0,10)}</p>`;

    lista.insertBefore(itemLista, lista.childNodes[0]);
    
    //Atualiza lista de animais e aplica estilos do modo de cor que está ativo
    card = document.querySelectorAll('li');
    definirCor(card);

    //Incrementa valor 1, para constar que um novo card foi adicionado
    counter+=1;
  } else {

    //Retorna limite de adiçaõ de cards conforme quantidade de animais no array listadeFelinos
    alert("Limite de animais atingido");
  }
}