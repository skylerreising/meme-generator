document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  // const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://api.imgflip.com/get_memes'
  let randoVar = Math.ceil(Math.random()*100)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.data)
        document.querySelector("h2").innerText = data.data.memes[randoVar].name
        document.querySelector("img").src = data.data.memes[randoVar].url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


