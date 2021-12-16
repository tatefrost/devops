const btn = document.querySelector('button')

function submit (event) {
  event.preventDefault();
  axios.get('/error')
      .then(function(res) {
        console.log(res)
      })
      .catch(function(error) {
        console.log(error)
      })
}

btn.addEventListener('click', submit)