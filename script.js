const pages = [
  {
    type: "intro",
    title: "Hi Birthday Boy. 🤍",
    text: "For my jaan ❤️"
  },

  {
    type: "photo",
    title: "Chapter One 🤍",
    image: "images/photo1.jpeg",
    caption: "my batman 🦇🤍"
  },

  {
    type: "photo",
    title: "Chapter Two 🤍",
    image: "images/photo2.jpeg",
    caption: "also my superman 🦸🏻‍♂️🤍"
  },

  {
    type: "photo",
    title: "Chapter Three 🤍",
    image: "images/photo3.jpeg",
    caption: "cutest kid ever 🧸🤍"
  },

  {
    type: "photo",
    title: "Chapter Four 🤍",
    image: "images/photo4.jpeg",
    caption: "forever my baby ♡"
  },

  {
    type: "letter",
    title: "A little letter for you 🤍",
    text: `Happy Birthday, my jaan.

Today is all about you.

Even though this is just a website, every page is made with love.

Thank you for being my comfort, my peace, my favourite person.

I love you. 🤍`
  },

  {
    type: "end",
    title: "The End 🤍",
    text: "🤍"
  }
];

let current = 0;

const cover = document.querySelector(".cover");
const pageBox = document.querySelector(".page");
const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {
  document.querySelector(".cover").classList.add("hidden");
  pageBox.classList.remove("hidden");
  renderPage();
});

function renderPage() {
  const page = pages[current];

  let html = "";

  if (page.type === "intro") {
    html = `
      <h1>${page.title}</h1>
      <p>${page.text}</p>
      <button id="nextBtn">Next</button>
    `;
  }

  else if (page.type === "photo") {
    html = `
      <h1>${page.title}</h1>
      <img src="${page.image}" />
      <p>${page.caption}</p>
      <button id="nextBtn">Next</button>
    `;
  }

  else if (page.type === "letter") {
    html = `
      <h1>${page.title}</h1>
      <p>${page.text.replace(/\n/g, "<br>")}</p>
      <button id="nextBtn">Next</button>
    `;
  }

  else if (page.type === "end") {
    html = `
      <h1>${page.title}</h1>
      <p>${page.text}</p>
    `;
  }

  pageBox.innerHTML = html;
}

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "nextBtn") {
    current++;
    renderPage();
  }
});
