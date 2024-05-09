
const cards = Array.from(document.querySelectorAll('.card h2'))

const titles = cards.map(item => item.innerHTML)

titles.forEach(item => console.log(item.length))