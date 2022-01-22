let inputSorteio = document.querySelector('.input-sorteio')
let buttonAdd = document.querySelector('.button-add')
let buttonSortear = document.querySelector('.button-sortear')
let Names = document.querySelector('.list-names')
var grupo = []

//EVENTOS 
buttonAdd.addEventListener('click', addName)
buttonSortear.addEventListener('click', sorteio)


// FUNÇÕES

function addName(event) {
    event.preventDefault()
    if (inputSorteio.value == '' || inputSorteio.value == null)
        alert('Digite um nome!')
        else{
    grupo.push(inputSorteio.value)
    var sorteLi = document.createElement('li')
    sorteLi.classList.add('participant-names')
    sorteLi.innerText = inputSorteio.value
    inputSorteio.value = ''}
    Names.appendChild(sorteLi)
}

function sorteio() {
    let np = grupo.length 

    let ns = Math.floor (Math.random()* np)

    if (grupo[ns] === undefined)
    return alert('Nenhum nome para sortear!')
    else
    return document.getElementById('nome-sorteado').innerHTML = 'SORTEADO: '+ grupo[ns]
}



