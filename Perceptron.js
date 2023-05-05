export const Perceptron = (learningRate, maxNumIterations, trainingData, typeofClass) => {
  let w1 = Math.random() - 0.5; // -0.5 to 0.5
  let w2 = Math.random() - 0.5;
  let threshold = Math.random() - 0.5; // initialize bias term to a random value
  let index = 0; // index of training data
  for (let i = 0; i < maxNumIterations; i++) {
    let { x1, x2, yd } = trainingData[index++];
    if (yd === typeofClass) yd = 1;
    else yd = -1; // use -1 instead of 0 for the negative class
    if (index === trainingData.length) index = 0;
    const ya = signFunction(w1 * x1 + w2 * x2 - threshold); // include bias term in computation
    const error = yd - ya;
    w1 += learningRate * error * x1;
    w2 += learningRate * error * x2;
    threshold += learningRate * -1 * error; // update bias term
  }
  return { w1, w2, threshold }; // return bias as well
};

function signFunction(x) {
  if (x >= 0) {
    return 1;
  } else {
    return -1;
  }
  // return (1 / (1 +  Math.pow(Math.E,-x)));
}
