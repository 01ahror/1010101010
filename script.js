let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let wrapper = document.querySelector(".right");
let select = document.querySelector(".select");
let sort = document.querySelector(".sort");

btn.addEventListener("click", function () {
  wrapper.innerHTML = "";
  if (input.value == "") {
    movies.map((kino) => {
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      img.src = kino.smallThumbnail;
      p1.innerHTML = kino.title;
      p2.innerHTML = kino.year;
      p3.innerHTML = kino.categories;
      p4.innerHTML = kino.imdbRating;
      card.append(img, p1, p2, p3, p4);
      wrapper.appendChild(card);
    });
  } else {
    let filtrlangan_kinolar = movies.filter((kino) =>
      kino.title.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())
    );
    filtrlangan_kinolar.map((kino) => {
      let card = document.createElement("div");
      card.classList.add("card");
      let img = document.createElement("img");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      img.src = kino.smallThumbnail;
      p1.innerHTML = kino.title;
      p2.innerHTML = kino.year;
      p3.innerHTML = kino.categories;
      p4.innerHTML = kino.imdbRating;
      card.append(img, p1, p2, p3, p4);
      wrapper.appendChild(card);
    });
  }
});
