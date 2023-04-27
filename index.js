const workSpace = document.getElementById('workSpace')
const classNum = document.getElementById('classNum')
const classA = document.getElementById('classA')
const classB = document.getElementById('classB')
const classC = document.getElementById('classC')
const classD = document.getElementById('classD')
const classAContainer = document.getElementById('classAContainer')
const classBContainer = document.getElementById('classBContainer')
const classCContainer = document.getElementById('classCContainer')
const classDContainer = document.getElementById('classDContainer')

let classType = 'A'
let isStarted = false
// Listeners
workSpace.addEventListener('click', (e)=> {
  getClickPosition(e);
})
classNum.addEventListener('change',changeClassNum)
classA.addEventListener('change',changeClassType)
classB.addEventListener('change',changeClassType)
classC.addEventListener('change',changeClassType)
classD.addEventListener('change',changeClassType)


// End Listeners
function changeClassNum(){
  console.log(classNum.value);
  if(classNum.value === '2'){
    classCContainer.style.display='none'
    classDContainer.style.display='none'
  } else if(classNum.value == '3'){
    classCContainer.style.display='block'
    classDContainer.style.display='none'
  }
  else if(classNum.value == '4'){
    classCContainer.style.display='block'
    classDContainer.style.display='block'
  }
}
function changeClassType(){
  if(classA.checked)
  {
    classType = classA.value
  }
  else if(classB.checked)
  {
    classType = classB.value
  }
  else if(classC.checked)
  {
    classType = classC.value
  }
  else if(classD.checked)
  {
    classType = classD.value
  }
}

function getClickPosition(e) {
    let p = {
      x: e.clientX,
      y: e.clientY
    }
    drawAt(p,"black",10);
    if(!isStarted){
      isStarted=true
      classNum.disabled =true
    }
    return p
}
  
function drawAt(point,color,dotSize) {
  console.log(point);
  let div = document.createElement('div');
  if(classType === 'A')
  {
    div.style.backgroundColor = 'black'
    div.style.width = 10 + "px";
    div.style.height = 10 + "px"
    div.style.position = "absolute"
    div.style.left = (point.x - dotSize / 2) + "px"
    div.style.top = (point.y - dotSize / 2) + "px"
    div.style.borderRadius = "50%"
    workSpace.appendChild(div);
  }
  else if(classType === 'B')
  {
    div.style.backgroundColor = 'red'
    div.style.width = dotSize + "px";
    div.style.height = dotSize + "px"
    div.style.position = "absolute"
    div.style.left = (point.x - dotSize / 2) + "px"
    div.style.top = (point.y - dotSize / 2) + "px"
    workSpace.appendChild(div);
  }
  else if(classType === 'C')
  {
    div.style.width = 0 + "px";
    div.style.height = 0 + "px"
    div.style.position = "absolute"
    div.style.left = (point.x - dotSize / 2) + "px"
    div.style.top = (point.y - dotSize / 2) + "px"
    div.style.borderLeft = "10px solid transparent"
    div.style.borderRight = "10px solid transparent"
    div.style.borderBottom = "10px solid green"
    workSpace.appendChild(div);
  }
  else if(classType === 'D')
  {
    div.style.width = 12 + "px";
    div.style.height = 12 + "px"
    div.style.position = "absolute"
    div.style.backgroundColor = 'blue'
    div.style.left = (point.x - dotSize / 2) + "px"
    div.style.top = (point.y - dotSize / 2) + "px"
    div.style.clipPath = "polygon( 50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%)"
    workSpace.appendChild(div);
  }
  //***************** */
  
// ******
  

  //******* */

  
}
  
  