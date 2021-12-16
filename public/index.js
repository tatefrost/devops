const btn = document.querySelector('button')

function submit (event) {
  event.preventDefault();
  axios.get('/error')
  try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error(error); 
 }
}


btn.addEventListener('click', submit)