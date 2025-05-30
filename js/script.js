const cardsRow = document.getElementById("cards-row");

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const cards = response.data;
  cards.forEach((card) => {
    const img = card.url;
    const title = card.title;
    const date = card.date;
    const id = card.id;
    cardsRow.innerHTML += `
    <div class="col-sm-12 col-md-6 col-lg-4 my-2 d-flex justify-content-center card-col">
        <div class="card my-card" style="width: 18rem;">
            <img src="./img/pin.svg" class="card-decoration" alt="pin" />
            <img src="${img}" class="card-img-top" alt="${id}">
            <div class="card-body">
                <p class="card-text my-card-title">${title}</p>
                <p class="card-text my-card-date">${date}</p>
            </div>
        </div>
    </div>`;
  });

  const myCards = document.querySelectorAll(".my-card");
  const overlay = document.getElementById("overlay");
  const closeButton = document.querySelector(".close-button");

  myCards.forEach((card) => {
    const cardImg = card.querySelector(".card-img-top").src;
    const cardId = card.querySelector(".card-img-top").alt;
    const activeImg = card.querySelector(".card-img-top");
    card.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.classList.replace("d-none", "d-flex");
      overlay.classList.add("flex-column");
      overlay.querySelector("img").src = cardImg;
      overlay.querySelector("img").alt = cardId;
      activeImg.classList.add("hidden-img");
    });
  });

  closeButton.addEventListener("click", function (e) {
    e.preventDefault();
    const activeImg = document.querySelector(".card-img-top.hidden-img");
    overlay.classList.replace("d-flex", "d-none");
    activeImg.classList.remove("hidden-img");
  });
});
