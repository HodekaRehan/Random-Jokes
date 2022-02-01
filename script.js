const btn = document.querySelector('.btn');
const jokes = document.querySelector('.jokes');
const img = document.querySelector('img')

const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', async() => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response)
  } catch(error) {
    console.log(error);
  }
  
})

function displayData({value : joke}) {
  img.classList.add('shake-img')
  // const {value : joke} = data
  jokes.textContent = joke;
  const random = Math.random() * 1000  //image shake time will be random between 0 to 1s
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, random)
}

