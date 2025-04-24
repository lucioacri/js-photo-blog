const cardsRow = document.getElementById("cards-row");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const cards = response.data;
  cards.forEach((card) => {
    const img = card.url;
    const title = card.title;
    const date = card.date;
    const id = card.id;
    cardsRow.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
       <div class="card my-card" style="width: 600px;">
         <img src="./img/pin.svg" class="card-decoration" alt="pin" />
         <img src="${img}" class="card-img-top" alt="${id}">
        <div class="card-body">
         <p class="card-text my-card-title">${title}</p>
         <p class="card-text my-card-date">${date}</p>
        </div>
     </div>
    </div>`;
  });
});
