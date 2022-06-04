function createCard(productItem) {

  const cardList          = document.querySelector('.cardList');

  const cardItem          = document.createElement('li');
  cardItem.classList.add('card');

  const cardImage         = document.createElement('img');
  const cardTitle         = document.createElement('h3');
  const cardSecao         = document.createElement('span');
  const cardPrice         = document.createElement('p');
  cardPrice.classList.add('card__price');

  const cardButton        = document.createElement('button');
  cardButton.classList.add('card__button');
  cardButton.addEventListener('click', (event) => {
    createCheckoutCard(productItem);
    addTotalAndCount(event);
  }); 

  const cardNutrients     = document.createElement('div');
  cardNutrients.classList.add('card__nutrients');
    const nutrientsList   = document.createElement('p');
    nutrientsList.classList.add('cardNutrients__list');
  
  cardImage.src           = productItem.img;
  cardTitle.innerText     = productItem.nome;
  cardPrice.innerText     = `R$${productItem.preco},00`;
  cardSecao.innerText     = productItem.secao;
  cardButton.innerText    = 'Adicionar ao carrinho';
  cardButton.id           = productItem.id;
  nutrientsList.innerText = `Nutrientes: ${productItem.componentes}.`;
  
  cardItem.append(cardImage, cardTitle, cardSecao, cardPrice, cardButton, cardNutrients);
  cardNutrients.append(nutrientsList);
  cardList.append(cardItem);

}

function createCardAssembleData(productsData) {
  
  document.getElementById('cardList').innerHTML = '';

  for(let count = 0; count < productsData.length; count++) {
    const productItem = productsData[count];
    
    createCard(productItem);
      
  }

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

    value = inputSearchBytName.value.trim();

    let filtro = [];
    let strNome = '';
    let strSecao = '';
    let strCategoria = '';

    for(let i = 0; i < produtos.length; i++) {

      strNome       = produtos[i].nome;
      strSecao      = produtos[i].secao;
      strCategoria  = produtos[i].categoria;

      if (strNome.includes(value) || strSecao.includes(value) || strCategoria.includes(value)) {

        filtro.push(produtos[i]);

      }
    }

    createCardAssembleData(filtro);

}


function createCheckoutCard (event) {

  const containerCheckout = document.querySelector('.container__checkout');  

    const checkoutCard              = document.createElement('li') ;
      const checkoutCardImg         = document.createElement('img');
      checkoutCardImg.className     = 'checkout__img';

      const checkoutCardBody = document.createElement('div');
      checkoutCardBody.className    = 'checkout__body';
        const checkoutCardTitle     = document.createElement('h4');
        const checkoutCardSpan      = document.createElement('span');
        const checkoutCardPrice     = document.createElement('p');
        checkoutCardPrice.className = 'checkout__price';

        const checkoutCardButton    = document.createElement('button');
        checkoutCardButton.addEventListener('click', (event) => {
          removeCheckoutCard(event);
          reduceTotalAndCount(event);
        });

      checkoutCardImg.src           = event.img;
      checkoutCardTitle.innerText   = event.nome;
      checkoutCardPrice.innerText   = `R$${event.preco},00`;
      checkoutCardSpan.innerText    = event.secao;
      checkoutCardButton.innerText  = 'Remover produto'

      checkoutCardButton.id         = event.id

  checkoutCard.append(checkoutCardImg);
  checkoutCardBody.append(checkoutCardTitle, checkoutCardSpan, checkoutCardPrice, checkoutCardButton);
  checkoutCard.append(checkoutCardBody);
  containerCheckout.append(checkoutCard);

}

function removeCheckoutCard(event) {

  const target = event.target;

  const checkoutCard = target.parentElement.parentElement;

  checkoutCard.remove()

}


let count = 0;
let total = 0;

function addTotalAndCount(event) {

  const spanTotal = document.getElementById('total');
  const spanCount = document.getElementById('count');

  const target = event.target
  const checkoutTotal = target

  for(let index = 0; index < produtos.length; index++) {

    if (checkoutTotal.id == produtos[index].id) {

      count++
      total += produtos[index].preco;

    }
    
  }

  spanTotal.innerText = `R$${total},00`;
  spanCount.innerText = count;

}


function reduceTotalAndCount(event) {

  const spanTotal = document.getElementById('total');
  const spanCount = document.getElementById('count');

  const target = event.target
  const checkoutTotal = target

  for(let index = 0; index < produtos.length; index++) {

    if (checkoutTotal.id == produtos[index].id) {

      count -= 1;
      total -= produtos[index].preco;

    }
    
  }

  spanTotal.innerText = `R$${total},00`;
  spanCount.innerText = count;

}