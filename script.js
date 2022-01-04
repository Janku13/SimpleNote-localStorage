const form = document.querySelector("form");
const addButton = document.querySelector("#addNote");
const container = document.querySelector(".students");

const texts = JSON.parse(localStorage.getItem("text")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const myTitle = form.elements.name.value;
  const myText = form.elements.myText.value;
  const newText = addText(myTitle, myText);

  createText(newText);
  //não ta funcionando
  myText = "";
  myTitle = "";
});

const addText = (title, text) => {
  texts.push({
    title: title,
    text: text,
  });
  localStorage.setItem("text", JSON.stringify(texts));
  return { title, text };
};

//creating the new titles and texts with DOM
const createText = ({ title, text }) => {
  const textDiv = document.createElement("div");
  const titleName = document.createElement("h2");
  const textName = document.createElement("p");
  titleName.innerText = "Title: " + title;
  textName.innerText = text;
  textDiv.append(titleName, textName);
  container.appendChild(textDiv);
};

//dont get it
texts.forEach(createText);
