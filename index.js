console.log("Hi, world!")
const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const cont = document.querySelector(".main");
console.log(button);
console.log(image);
const url = "https://api.unsplash.com/photos/?client_id=u0tUtwgVI1JYLib1pJN5No4yuyPAjXE44GUNlH03mwc";
// const apiKey = u0tUtwgVI1JYLib1pJN5No4yuyPAjXE44GUNlH03mwc;
// const secretKey = E7R7FDrLyAcqhRzYB1nZ96fiug4efSDSo4ox4Mm2ok4;

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  // image.src = data[0].urls.small;
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    // console.log(element);
    // console.log(element.urls.small);
    // image.src = element.urls.small;
    let img = document.createElement("img");
    img.className = "img";
    img.src = element.urls.small;
    img.alt = element.user.first_name;
    cont.appendChild(img);
  }
}
getData();
