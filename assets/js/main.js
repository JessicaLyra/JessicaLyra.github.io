// Typing effect simples
const text = "Web Designer & Desenvolvedora Web";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 60);
  }
}
typing();


// Comentários (localStorage)
const form = document.getElementById("commentForm");
const list = document.getElementById("commentsList");

let comments = JSON.parse(localStorage.getItem("comments")) || [];

function render() {
  list.innerHTML = "";
  comments.forEach(c => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<strong>${c.name}</strong><p>${c.text}</p>`;
    list.appendChild(div);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  comments.push({ name, text: comment });
  localStorage.setItem("comments", JSON.stringify(comments));

  form.reset();
  render();
});

render();