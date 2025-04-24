const cardsCol = document.getElementById("cards-col");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const img = response.data[0].url;
  const title = response.data[0].title;
  const date = response.data[0].date;
  cardsCol.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${title}</p>
    <p class="card-text">${date}</p>
  </div>
</div>`;
});
