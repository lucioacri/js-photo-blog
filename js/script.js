const cardsCol = document.getElementById("cards-col");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const cards = response.data;
  cards.forEach((card) => {
    const img = card.url;
    const title = card.title;
    const date = card.date;
    const id = card.id;
    cardsCol.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="${id}">
  <div class="card-body">
    <p class="card-text">${title}</p>
    <p class="card-text">${date}</p>
  </div>
</div>`;
  });
});
