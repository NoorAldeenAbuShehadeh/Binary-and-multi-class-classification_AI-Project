const workSpace = document.getElementById('workSpace')


function getClickPosition(e) {
    var p = {
      x: e.clientX,
      y: e.clientY
    }
    drawAt(p);
    return p
  }
  
  function drawAt(point) {
    console.log(point);
    var dotSize = 10; // in px
    var div = document.createElement('div');
    div.style.backgroundColor = "#000"
    div.style.width = dotSize + "px";
    div.style.height = dotSize + "px"
    div.style.position = "absolute"
    div.style.left = (point.x - dotSize / 2) + "px"
    div.style.top = (point.y - dotSize / 2) + "px"
    div.style.borderRadius = "50%"
    workSpace.appendChild(div);
  }
  
  workSpace.addEventListener('click', function(e) {
    getClickPosition(e);
  })