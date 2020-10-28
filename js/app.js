
const button = document.querySelectorAll('.counterBtn')
let count = document.querySelector('#counter');
let amount = 0

button.forEach(button => {
  button.addEventListener('click', event => {
    if (button.classList.contains('prevBtn')) {
      amount--
    } else if (button.classList.contains('nextBtn')) {
      amount++;
    }
    count.textContent = amount;

    if (amount < 0) {
      count.style.color = 'red'
    } else if (amount > 0) {
      count.style.color = 'green'
    }
  })
})


