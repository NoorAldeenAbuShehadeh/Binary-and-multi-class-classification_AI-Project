import { Perceptron, signFunction } from "./Perceptron.js";
const workSpace = document.getElementById("workSpace");
const classNum = document.getElementById("classNum");
const classA = document.getElementById("classA");
const classB = document.getElementById("classB");
const classC = document.getElementById("classC");
const classD = document.getElementById("classD");
const classAContainer = document.getElementById("classAContainer");
const classBContainer = document.getElementById("classBContainer");
const classCContainer = document.getElementById("classCContainer");
const classDContainer = document.getElementById("classDContainer");
const solveBtn = document.getElementById("solveBtn");
const maxIteration = document.getElementById("maxIteration");
const learningRate = document.getElementById("learningRate");
const tooltipGroup = document.getElementById('myTooltipGroup');
const tooltipText = document.getElementById('tooltipText');
const trainingData = [];
let classType = 0;
let finish=0
let isStarted = false;
let result
let finalResults = []
// Listeners
workSpace.addEventListener("click", (e) => {
  getClickPosition(e);
});
solveBtn.addEventListener("click", findWight);
classNum.addEventListener("change", changeClassNum);
classA.addEventListener("change", changeClassType);
classB.addEventListener("change", changeClassType);
classC.addEventListener("change", changeClassType);
classD.addEventListener("change", changeClassType);

// End Listeners
function changeClassNum() {
  console.log(classNum.value);
  if (classNum.value === "2") {
    classCContainer.style.display = "none";
    classDContainer.style.display = "none";
  } else if (classNum.value == "3") {
    classCContainer.style.display = "block";
    classDContainer.style.display = "none";
  } else if (classNum.value == "4") {
    classCContainer.style.display = "block";
    classDContainer.style.display = "block";
  }
}
function changeClassType() {
  if (classA.checked) {
    classType = 0;
  } else if (classB.checked) {
    classType = 1;
  } else if (classC.checked) {
    classType = 2;
  } else if (classD.checked) {
    classType = 3;
  }
}

function getClickPosition(e) {
  const point = workSpace.createSVGPoint();
  point.x = e.clientX;
  point.y = e.clientY;
  const svgPoint = point.matrixTransform(workSpace.getScreenCTM().inverse());
  let p = {
    x1: svgPoint.x,
    x2: svgPoint.y,
    yd: classType,
  };
  
  if(!finish){
    drawAt(p, 10);
    trainingData.push(p);
  }/**************************** */
  if(finish){
    let indexOfMax;
    for(let i=0;i<finalResults.length;i++){
      if (finalResults[i].w1 * p.x1 + finalResults[i].w2 * p.x2 -  finalResults[i].threshold > 0){
        indexOfMax=i;
        break;
      }else if(classNum.value==2){
        indexOfMax=1;
      }else{
        indexOfMax="Not recognize"
      }
    }
    tooltipGroup.setAttribute('transform', `translate(${p.x1},${p.x2})`);
    tooltipText.textContent ="the type of class is: "+ indexOfMax
    tooltipGroup.style.display = 'block'
    console.log("the type of class is: ",indexOfMax)
  }
  if (!isStarted) {
    isStarted = true;
    classNum.disabled = true;
  }
  return p;
}

function drawAt(point, dotSize) {
  console.log(point);
  if (classType === 0) {
    const newCircle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    newCircle.style.position='relative'
    newCircle.setAttribute("cx", point.x1);
    newCircle.setAttribute("cy", point.x2);
    newCircle.setAttribute("r", dotSize / 2);
    newCircle.setAttribute("fill", "black");
    workSpace.appendChild(newCircle);
  } else if (classType === 1) {
    const newRect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );
    newRect.setAttribute("x", point.x1);
    newRect.setAttribute("y", point.x2);
    newRect.setAttribute("width", dotSize);
    newRect.setAttribute("height", dotSize);
    newRect.setAttribute("fill", "blue");
    workSpace.appendChild(newRect);
  } else if (classType === 2) {
    const newPolygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    newPolygon.setAttribute(
      "points",
      `${point.x1},${point.x2 } ${point.x1 + dotSize},${
        point.x2 + dotSize
      } ${point.x1 - dotSize},${point.x2 + dotSize}`
    );
    newPolygon.setAttribute("fill", "red");
    workSpace.appendChild(newPolygon);
  } else if (classType === 3) {
    const newPolygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    newPolygon.setAttribute(
      "points",
      `${point.x1},${point.x2 } ${point.x1 + dotSize},${point.x2 } ${
        point.x1 + dotSize
      },${point.x2 + dotSize} ${point.x1 - dotSize},${
        point.x2 + dotSize
      }`
    );
    newPolygon.setAttribute("fill", "green");
    workSpace.appendChild(newPolygon);
  }
}

function findWight() {
  const lines = document.querySelectorAll('svg line');
  lines.forEach(line => line.remove());
  finalResults = []
  for(let i=0;i<Number(classNum.value);i++){
  result = Perceptron(learningRate.value, maxIteration.value, trainingData, i);
  finalResults.push(result)
  console.log(result);
  const x1 = 0;//w1*x+w2*y=th
  const y1 = (result.threshold-(result.w1*x1))/result.w2;
  const x2 =500 ;
  const y2 = (result.threshold-(result.w1*x2))/result.w2;
  // 
  console.log("x1",x1,'y1',y1,'x2',x2,'y2',y2)
  console.log("The value of MSE = ",result.MSE)
  const newLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );

  let color;
  if(i===0)color='black';
  else if(i===1)color='blue'
  else if(i===2)color='red'
  else if(i===3)color='green'
  newLine.setAttribute("x1", x1);
  newLine.setAttribute("y1", y1);
  newLine.setAttribute("x2", x2);
  newLine.setAttribute("y2", y2);
  newLine.setAttribute("stroke", color);
  newLine.setAttribute("stroke-width", "2");
  workSpace.appendChild(newLine);
  if(Number(classNum.value)===2)break;
  }
  finish=1
  const ConfusionMatrix = findConfusionMatrix(finalResults, trainingData, Number(classNum.value));
  console.log("ConfusionMatrix = ",ConfusionMatrix)
}

const findConfusionMatrix=(finalResults, trainingData, classNum)=>{
  const ConfusionMatrix = []  
  
  for(let i=0;i<classNum;i++){
    ConfusionMatrix.push([])
    for(let j=0;j<=classNum;j++)
        ConfusionMatrix[i].push(0)//initialization of Confusion Matrix
      }

  for(let i=0;i<trainingData.length;i++){
    const {x1,x2,yd}=trainingData[i];
    for(let j=0;j<classNum;j++){
      let x=j;
      if(classNum===2)x=0;
      const {w1, w2, threshold} = finalResults[x];
      let result = signFunction(x1*w1+x2*w2-threshold)
      if(result>0 || (classNum===2 && result<0 && j===1)){
        console.log("j= ",j)
        ConfusionMatrix[yd][j]++
        break
      }else if(j===classNum-1){
        ConfusionMatrix[yd][j+1]++
      }
    }
  }
  return ConfusionMatrix
}
