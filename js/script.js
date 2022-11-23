const beginning = document.querySelector('.Beginning');
const btnAcess = document.querySelector('.bt-acess')


const acess = () => {
    beginning.classList.remove('open')
}

btnAcess.addEventListener('click', acess)