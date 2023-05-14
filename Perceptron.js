export const Perceptron = (learningRate, maxNumIterations, trainingData, typeofClass) => {
  let MSE=0,epochNum=0;
  const points=[];
  let w1 = Math.random() - 0.5; // -0.5 to 0.5
  let w2 = Math.random() - 0.5;
  let threshold = Math.random() - 0.5; // initialize bias term to a random value
  let index = 0; // index of training data
  for (let i = 0; i < maxNumIterations; i++) {
    let { x1, x2, yd } = trainingData[index++];
    if (yd === typeofClass) yd = 1;
    else yd = -1; // use -1 instead of 0 for the negative class
    const ya = signFunction(w1 * x1 + w2 * x2 - threshold); // include bias term in computation
    const error = yd - ya;
    if (index === trainingData.length){
      index = 0;
      MSE+=(Math.pow(error,2))/(maxNumIterations/trainingData.length);
      points.push({x:epochNum++,y:MSE});
  }
    w1 += learningRate * error * x1;
    w2 += learningRate * error * x2;
    threshold += learningRate * -1 * error; // update bias term
  }
  console.log("points:  ",points)
  return { w1, w2, threshold, MSE}; // return bias as well
};

function signFunction(x) {
  if (x >= 0) {
    return 1;
  } else {
    return -1;
  }
  // return (1 / (1 +  Math.pow(Math.E,-x)));
}

// const drawGraph=(data, epochNum)=>{
//   const canvas = document.getElementById("myCanvas");
//   const ctx = canvas.getContext("2d");
  
// // Set up the graph axes
// const xMin = 0;
// const xMax = epochNum;
// const yMin = 0;
// const yMax = 0.01;

// // Define the scale factor for x and y values
// const xScale = canvas.width / (xMax - xMin);
// const yScale = canvas.height / (yMax - yMin);

// // Draw the x-axis
// ctx.beginPath();
// ctx.moveTo(0, canvas.height - yMin * yScale);
// ctx.lineTo(canvas.width, canvas.height - yMin * yScale);
// ctx.stroke();

// // Draw the y-axis
// ctx.beginPath();
// ctx.moveTo(xMin * xScale, 0);
// ctx.lineTo(xMin * xScale, canvas.height);
// ctx.stroke();

// // Plot the data points
// ctx.beginPath();
// ctx.moveTo(data[0].x * xScale, canvas.height - data[0].y * yScale);

// for (let i = 1; i < data.length; i++) {
//   ctx.lineTo(data[i].x * xScale, canvas.height - data[i].y * yScale);
// }

// ctx.stroke();
  
// }