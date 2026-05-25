function hover(id, textId) {
  document.getElementById(textId).style.fontSize = '12px';
  document.getElementById(id).classList.add('hovered');
}

function unhover(id, textId) {
  document.getElementById(textId).style.fontSize = '0px';
  document.getElementById(id).classList.remove('hovered');
}