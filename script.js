document.getElementById("startBtn").addEventListener("click", function () {
  const cover = document.querySelector(".cover");

  cover.classList.add("hide");

  setTimeout(() => {
    cover.innerHTML = `
      <h1>Hi Birthday Boy. 🤍</h1>
      <p>I couldn't wrap this in paper... so I wrapped it in code.</p>
      <button id="nextBtn">Next →</button>
    `;

    cover.classList.remove("hide");
  }, 500);
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.id === "nextBtn") {

    const cover = document.querySelector(".cover");

    cover.classList.add("hide");

    setTimeout(() => {

      cover.innerHTML = `
  <h1>Our scrapbook 🤍</h1>

  <div class="scrapbook">

    <div class="card">
      <img src="https://via.placeholder.com/200" />
      <p>Memory 1</p>
    </div>

    <div class="card">
      <img src="https://via.placeholder.com/200" />
      <p>Memory 2</p>
    </div>

    <div class="card">
      <img src="https://via.placeholder.com/200" />
      <p>Memory 3</p>
    </div>

  </div>

  <button id="nextBtn">Next →</button>
`;

      cover.classList.remove("hide");

    }, 500);
  }
});
