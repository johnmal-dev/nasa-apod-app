const today = new Date().toLocaleDateString('en-ca');
const KEY = '4AdfF3j0LmZHkSHzAIoAjFei704GTxWDM3cJe2PL';
const dateInput = document.getElementById('dateInput');
let img = document.querySelector('img');
let vid = document.querySelector('iframe');

dateInput.max = new Date().toLocaleDateString('en-ca');

// this sets todays date as the default input
window.addEventListener('load', () => {
  dateInput.value = today;
  getAPOD(today);
});

// listen for date change
document.getElementById('dateInput').addEventListener('change', (e) => {
  getAPOD(e.target.value);
});

async function getAPOD(date) {
  let data = await fetch(`/api?date=${date}`);
  let main = await data.json();
  // if image
  if (main.media_type === 'image') {
    vid.classList.remove('active');
    img.classList.add('active');
    img.src = main.url;
    // else video
  } else {
    vid.classList.add('active');
    img.classList.remove('active');
    vid.src = '';
    vid.src = main.url;
  }
}
