import {Perceptron} from './Perceptron.js'
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
const solveBtn = document.getElementById('solveBtn')
const maxIteration = document.getElementById('maxIteration')
const learningRate = document.getElementById('learningRate')
const trainingData = [];
let classType = 0
let isStarted = false
// Listeners
workSpace.addEventListener('click', (e)=> {
  getClickPosition(e);
})
solveBtn.addEventListener('click',findWight)
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
    classType = 0
  }
  else if(classB.checked)
  {
    classType = 1
  }
  else if(classC.checked)
  {
    classType = 2
  }
  else if(classD.checked)
  {
    classType = 3
  }
}

function getClickPosition(e) {
    let p = {
      x1: e.clientX,
      x2: e.clientY,
      yd: classType
    }
    trainingData.push(p);
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
  div.style.position = "absolute"
  div.style.left = (point.x1 - dotSize / 2) + "px"
  div.style.top = (point.x2 - dotSize / 2) + "px"

  if(classType === 0)
  {
    div.style.backgroundColor = 'black'
    div.style.width = 10 + "px";
    div.style.height = 10 + "px"
    div.style.borderRadius = "50%"
    workSpace.appendChild(div);
  }
  else if(classType === 1)
  {
    div.style.backgroundColor = 'red'
    div.style.width = dotSize + "px";
    div.style.height = dotSize + "px"
    workSpace.appendChild(div);
  }
  else if(classType === 2)
  {
    div.style.width = 0 + "px";
    div.style.height = 0 + "px"
    div.style.borderLeft = "10px solid transparent"
    div.style.borderRight = "10px solid transparent"
    div.style.borderBottom = "10px solid green"
    workSpace.appendChild(div);
  }
  else if(classType === 3)
  {
    div.style.width = 12 + "px";
    div.style.height = 12 + "px"
    div.style.backgroundColor = 'blue'
    div.style.clipPath = "polygon( 50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%)"
    workSpace.appendChild(div);
  }

}


function findWight(){
  let result = Perceptron(learningRate.value, maxIteration.value, trainingData)
  console.log(result)
}
  