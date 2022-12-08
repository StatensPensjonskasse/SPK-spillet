const container = document.getElementById("bakgrunn");

const containerSize = [800, 600];


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}



// BAKKE
function addGroundElement(x) {
  const element = document.createElement("div");
  element.classList.add("ground_style");
  element.style = `left: ${x}px;`;
  const img = document.createElement("img");
  img.src = "assets/SCENE02/bakke.png";
  element.appendChild(img);
  container.appendChild(element);
  return element;
}

function addGround() {
  const speed = 4;
  const interval = 20;
  const bg_size = [305, 55];
  const count = 4;
  let items = [];
  let assetString = "assets/SCENE02/bakke.png";

  function updateGround(string) {
    assetString = string;
  }

  for (let i = 0; i < count; i++) {
    if (spillFerdig) return
    let gr = addGroundElement(i * bg_size[0]);
    items.push(gr)
    setInterval(() => {
      if (spillFerdig) return
      let current_left = parseInt(gr.style.left.split("px")[0]);
      if (current_left <= (-bg_size[0] - 50)) { // reset
        let newLeft = bg_size[0] * count + current_left - speed;
        gr.style.left = `${newLeft}px`;
        gr.children[0].src = assetString;
      } else {
        gr.style.left = `${current_left - speed}px`;
      }
    }, interval)
  }
  return updateGround;
}


// BAKGRUNN
function addBackgroundElement(x) {
  const element = document.createElement("div");
  element.classList.add("background_style");
  element.style = `left: ${x}px;`;
  const img = document.createElement("img");
  img.src = "assets/SCENE02/bg.png";
  element.appendChild(img);
  container.appendChild(element);
  return element;
}

function addBackground() {
  const speed = 2;
  const interval = 50;
  const bg_size = [800, 285];
  const count = 3;

  let assetString = "assets/SCENE02/bg.png";

  function updateBackground(string) {
    assetString = string;
  }


  for (let i = 0; i < count; i++) {
    if (spillFerdig) return
    let gr = addBackgroundElement(i * bg_size[0]);
    setInterval(() => {
      if (spillFerdig) return
      let current_left = parseInt(gr.style.left.split("px")[0]);
      if (current_left <= (-bg_size[0])) { // reset
        let newLeft = bg_size[0] * count + current_left - speed;
        gr.style.left = `${newLeft}px`;
        gr.children[0].src = assetString;
      } else {
        gr.style.left = `${current_left - speed}px`;
      }
    }, interval)
  }
  return updateBackground;
}


function addMiddleBackgroundElement(x) {
  const element = document.createElement("div");
  element.classList.add("skyskraper_style");
  element.style = `left: ${x}px;`;
  const img = document.createElement("img");
  img.src = `assets/SCENE02/BUILDING00${randomIntFromInterval(1, 5)}.png`;
  element.appendChild(img);
  container.appendChild(element);
  return element;
}

function addMiddleBackground() {
  const speed = 2;
  const interval = 30;
  const count = 5;
  let items = [];
  let assetString = `assets/SCENE02/BUILDING00`;

  function updateMiddleBackground(string) {
    assetString = string;
  }

  for (let i = 0; i < count; i++) {
    if (spillFerdig) return
    let gap = randomIntFromInterval(100, 350)
    let gr = addMiddleBackgroundElement(i * gap);
    items.push(gr);
    setInterval(() => {
      if (spillFerdig) return
      let current_left = parseInt(gr.style.left.split("px")[0]);
      let size = gr.getBoundingClientRect();
      let rightPos = current_left + size.width;
      if (rightPos <= 0) { // reset
        let newLeft = containerSize[0] + gap;
        gr.style.left = `${newLeft}px`;
        gr.children[0].src = `${assetString}${randomIntFromInterval(1, 5)}.png`;
      } else {
        gr.style.left = `${current_left - speed}px`;
      }
    }, interval)
  }
  return updateMiddleBackground;
}




function run() {

  let updateBackground = addBackground();
  let updateMiddleBackground = addMiddleBackground();
  let updateGround = addGround();

  setTimeout(() => {
    if (spillFerdig) return
    updateGround(`assets/SCENE01/bakke.png`)
    updateBackground("assets/SCENE01/bg.png")
    updateMiddleBackground("assets/SCENE01/MNT00")
  }, 1000 * 60)

}


run()






