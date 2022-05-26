function createCard(productItem) {

  const cardList = document.querySelector('.cardList');
  const cardItem = document.createElement('li');
  cardItem.classList.add('card');
  const cardImage = document.createElement('img');
  const cardTitle = document.createElement('h3');
  const CardPrice = document.createElement('p');
  const cardSecao = document.createElement('span');
  
  cardImage.src = productItem.img;
  cardTitle.innerText = productItem.nome;
  CardPrice.innerText = productItem.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  cardSecao.innerText = productItem.secao;
  
  cardItem.append(cardImage, cardTitle, cardSecao, CardPrice);
  cardList.append(cardItem);

}

function createCardAssembleData(productsData) {
  
  document.getElementById('cardList').innerHTML = ''

  const tagSpan = document.getElementById('totalSum');

  let productSum = 0;

  for(let count = 0; count < productsData.length; count++) {
    const productItem = productsData[count];
    productSum += productsData[count].preco;
    
    createCard(productItem);
      
  }

    tagSpan.innerText = productSum.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});

}
createCardAssembleData(produtos);


const buttonFilterAll = document.getElementById('mostrarTodos');
buttonFilterAll.addEventListener('click', function(){

    let allProducts = [];

    produtos.forEach((element) => {
      allProducts.push(element);
    });
    
    createCardAssembleData(allProducts);

  });


const buttonFilterHortifruti = document.getElementById('hortifruti');
buttonFilterHortifruti.addEventListener('click', function() {

    let produtosHortifruti = [];

    produtos.forEach((element) => {
      if(element.secao === 'Hortifruti') {
        produtosHortifruti.push(element);
      }
    });
    
    createCardAssembleData(produtosHortifruti);

});


const buttonFilterLaticinios = document.getElementById('laticínio');
buttonFilterLaticinios.addEventListener('click', function() {

    let produtosLaticinios = [];

    produtos.forEach((element) => {
      if(element.secao === 'Laticínio') {
        produtosLaticinios.push(element);
      }
    });
    
    createCardAssembleData(produtosLaticinios);

});


const buttonFilterPanificadora = document.getElementById('panificadora');
buttonFilterPanificadora.addEventListener('click', function() {

  let produtosPanificadora = [];

  produtos.forEach((element) => {
    if(element.secao === 'Panificadora') {
      produtosPanificadora.push(element);
    }
  });

    createCardAssembleData(produtosPanificadora);

});


const inputSearchBytName = document.querySelector('.campoBuscaPorNome');
inputSearchBytName.addEventListener('keyup', filterByName)

function filterByName() {
 
    let value = '';

    value = inputSearchBytName.value;

    let filtro = [];
    let newStr = '';

    for(let i = 0; i < produtos.length; i++){
      newStr = produtos[i].nome.toLowerCase();
      if(newStr.includes(value)){
        filtro.push(produtos[i]);
      }
    }

    createCardAssembleData(filtro);

}