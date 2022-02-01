const btn = document.querySelector('.btn');
const jokes = document.querySelector('.jokes');
const img = document.querySelector('img')

const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', () => {
  getData(URL)
    .then((response) => displayData(response))
    .catch((err) => console.log(err))
})

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = function() {
      if(xhr.readyState !== 4) return;
      if(xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText
        })
      }
    }
  })
}

function displayData(data) {
  img.classList.add('shake-img')
  const {value : joke} = JSON.parse(data)
  jokes.textContent = joke;
  const random = Math.random() * 1000  //image shake time will be random between 0 to 1s
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, random)
}
