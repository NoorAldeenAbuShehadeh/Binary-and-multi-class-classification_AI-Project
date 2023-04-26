const workSpace = document.getElementById('workSpace')
const classNum = document.getElementById('classNum')
const classA = document.getElementById('classA')
const classB = document.getElementById('classB')
const classC = document.getElementById('classC')
const classD = document.getElementById('classD')


// Listeners
workSpace.addEventListener('click', (e)=> {
  getClickPosition(e);
})
// classA.addEventListener('change',getCheckedMode)
// classB.addEventListener('change',getCheckedMode)
// classC.addEventListener('change',getCheckedMode)
// classD.addEventListener('change',getCheckedMode)


// End Listeners


function getClickPosition(e) {
    let p = {
      x: e.clientX,
      y: e.clientY
    }
    drawAt(p,"black",10);
    return p
}
  
function drawAt(point,color,dotSize) {
  console.log(point);
  let div = document.createElement('div');
  //***************** */
  div.style.backgroundColor = color
  div.style.width = dotSize + "px";
  div.style.height = dotSize + "px"
  div.style.position = "absolute"
  div.style.left = (point.x - dotSize / 2) + "px"
  div.style.top = (point.y - dotSize / 2) + "px"
  div.style.borderRadius = "50%"
  workSpace.appendChild(div);
// ******
  // div.style.width = 0 + "px";
  // div.style.height = 0 + "px"
  // div.style.position = "absolute"
  // div.style.left = (point.x - dotSize / 2) + "px"
  // div.style.top = (point.y - dotSize / 2) + "px"
  // div.style.borderLeft = "7px solid transparent"
  // div.style.borderRight = "7px solid transparent"
  // div.style.borderBottom = "7px solid green"
  // workSpace.appendChild(div);

  //******* */

  // div.style.width = 10 + "px";
  // div.style.height = 10 + "px"
  // div.style.position = "absolute"
  // div.style.backgroundColor = color
  // div.style.left = (point.x - dotSize / 2) + "px"
  // div.style.top = (point.y - dotSize / 2) + "px"
  // div.style.clipPath = "polygon( 50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%)"
  // workSpace.appendChild(div);
}
  
  