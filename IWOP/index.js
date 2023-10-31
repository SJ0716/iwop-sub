async function loadData(dataType) {
  let url;
  if (dataType === "posts") {
    url = "https://jsonplaceholder.typicode.com/posts";
  } else if (dataType === "comments") {
    url = "https://jsonplaceholder.typicode.com/posts/1/comments";
  }

  const response = await fetch(url);
  const json = await response.json();

  const dataContainer = document.querySelector(".data");
  dataContainer.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    dataContainer.appendChild(makeDataElement(dataType, json[i]));
  }
}

function makeDataElement(dataType, data) {
  const dom = document.createElement("div");
  const title = document.createElement("div");
  const content = document.createElement("div");

  if (dataType === "posts") {
    title.innerHTML = `게시판 제목 : ${data.title}`;
    content.innerHTML = `게시판 내용 : ${data.body}`;
  } else if (dataType === "comments") {
    title.innerHTML = `댓글 이름 : ${data.name}`;
    content.innerHTML = `댓글 내용 : ${data.body}`;
  }

  title.style.color = "blue";
  dom.appendChild(title);
  dom.appendChild(content);
  return dom;
}
