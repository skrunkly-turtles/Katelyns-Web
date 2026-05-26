function hover(id, textId) {
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