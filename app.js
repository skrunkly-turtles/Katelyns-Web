function hover(id, textId) {
  // This code ensures that the text only appears after "Katelyn Wong" disappears
  const islands = document.querySelectorAll('.islands');
  islands.forEach(island => {
  if (island.checkVisibility({ opacityProperty: true })) {
    document.getElementById(textId).style.fontSize = '20px';
    document.getElementById(textId).style.textAlign = "center";
    document.getElementById(textId).style.color = "#94a3b8";
    document.getElementById(textId).style.textDecoration = "none";
    document.getElementById(id).classList.add('hovered');
  }
  });
}

function unhover(id, textId) {
  document.getElementById(textId).style.fontSize = '0px';
  document.getElementById(id).classList.remove('hovered');
}

// This code is for the slider on the About Me page
const labels = {
  0: "A Computer Science Specialist at the University of Toronto with extensive research experience in AI and Computer Vision.",
  5: "A Computer Science Specialist at the University of Toronto. I am currently working with Professor Leon-Garcia in the field of 5G Networks",
  10: "A Computer Science Specialist at UofT who does research in AI and networking. I also love to write in my free time.",
  15: "A CS Specialist at UofT, but I have a deep love for writing and all things creative. In my free time, I write short stories and manage my own cookie business",
  20: "A freelance short-story writer, with a special interest in making the world more aware. I also manage a cookie business called piknik!"
}

function updateLabel(value){
  const keys = Object.keys(labels).map(Number);
  const closest = keys.reduce((a, b) => Math.abs(b - value) < Math.abs(a - value) ? b : a);
  document.getElementById("output").value = labels[closest];
}