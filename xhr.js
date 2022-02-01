const btn = document.querySelector('.btn');
const jokes = document.querySelector('.jokes');
const img = document.querySelector('img')

const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
  getData(URL)
})

function getData(url) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState !== 4) return;
    if(xhr.status === 200) {
      img.classList.add('shake-img')
      const {value : joke} = JSON.parse(xhr.responseText)
      jokes.textContent = joke;
      const random = Math.random() * 1000  //image shake time will be random between 0 to 1s
      setTimeout(() => {
        img.classList.remove('shake-img')
      }, random)
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText
      });
    }
  }
}