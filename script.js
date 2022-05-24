const KEY = "4AdfF3j0LmZHkSHzAIoAjFei704GTxWDM3cJe2PL";

// this sets todays date as the default input
window.addEventListener("load", () => {
  const today = new Date();
  document.querySelector("input").value = `${today.getFullYear()}-${(
    today.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${today.getDate()}`;
});

async function getAPOD() {
  let date = document.querySelector("input").value;
  let data = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${KEY}` + "&date=" + date
  );
  let main = await data.json();
  let img = document.querySelector("img");
  img.src = main.url;
}

const button = document.querySelector(".btn");
button.addEventListener("click", getAPOD);
