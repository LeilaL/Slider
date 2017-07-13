var index = 0;
var carousel = document.getElementsByClassName("images");

setInterval(slider,2000);

function slider () {
carousel[index].style.zIndex = -1;
if (index==3){
  index=0;
  carousel[index].style.zIndex = 1;
}
else {
  index++;
  carousel[index].style.zIndex = 1;
}
}
