document.addEventListener('DOMContentLoaded'), () => {
    
    const cardArray = [
    {
        name: 'beer',
        img: 'images/beer.png'
    }, 

    {
        name: 'beer',
        img: 'images/beer.png'
    },

    {
        name: 'alien',
        img: 'images/alien.png'
    },

    {
        name: 'alien',
        img: 'images/alien.png'
    },

    {
        name: 'boef',
        img: 'images/boef.png'
    },

    {
        name: 'boef',
        img: 'images/boef.png'
    },

    {
        name: 'leeuw',
        img: 'images/leeuw.png'
    },

    {
        name: 'leeuw',
        img: 'images/leeuw.png'
    },

    {
        name: 'tijger',
        img: 'images/tijger.png'
    },

    {
        name: 'tijger',
        img: 'images/tijger.png'
    },
    {
        name: 'vampier',
        img: 'images/vampier.png'
    },

    {
        name: 'vampier',
        img: 'images/vampier.png'
    },

    {
        name: 'geel',
        img: 'images/geel.png'
    },

    {
        name: 'geel',
        img: 'images/geel.png'
    },

    ]

    cardArray.sort(() => 0.5 - Math.ramdom())


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelectorAll('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement ('img')
        card.setAttribute('src', 'images/blauw.png')
        card.setAttribute('data-id', i)
      //  card.addEventListener('click', flipcard)
      grid.appendChild(card)
    }
}

function checkForMatch() {
    var card = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const OptionTwoId = cardsChosen[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/roze.png')
        cards[OptionTwoId].setAttribute('src', 'images/roze.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/baluw.png')
        cards[OptionTwoId].setAttribute('src', 'blauw.png')
        alert('Sorry, try agian')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}


function flipcard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
      }}}