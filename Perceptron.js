const Perceptron = (learningRate, maxNumIterations, trainingData) => {
  let w1 = Math.random() - 0.5;
  let w2 = Math.random() - 0.5;
  let threshold = 0.2;
  let wt = -1; //assume wight of threshold = -1
  let index = 0;//index of training data 
  for (let i = 0; i < maxNumIterations; i++) {
    const { x1, x2, yd } = trainingData[index++];
    if(index===trainingData.length)index=0;
    const ya = signFunction(w1 * x1 + w2 * x2 + wt * threshold);
    const error = yd - ya;
    w1 += learningRate * error * x1;
    w2 += learningRate * error * x2;
  }
  return {w1,w2,threshold};
};

function signFunction(x) {
  if (x >= 0) {
    return 1;
  } else {
    return -1;
  }
}

Perceptron(0.1,100);