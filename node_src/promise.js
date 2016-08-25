function testAPromise() {
  console.log("Making a promise!");
  var p = new Promise(function(resolve, reject) {
    console.log("While making a promise...");
    setTimeout(function() {
      resolve("TADA: Promise is reolved");
    }, 2000);
  });

  p.then(function(result) {
    console.log('Once promise is fullfilled, we get');
    console.log(result);
  })
  .catch(function(err) {
    console.log(err);
  });
}

function singlePromise(str) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(str);
    }, Math.random()*10000);
  });
  return p;
}

function processArrayOfPromises(arr) {
  return Promise.all(arr);
}

// var arr = [singlePromise('Hello'), singlePromise('Hi'), singlePromise('Bye')];
// processArrayOfPromises(arr).then(function(data) {
//   console.log("Data from a promise array");
//   console.log(data);
// });

// create an array of promises
// @param num - integer for a number of promises in the array
// @param shouldBeResolved - boolean identifying whether all promises in the array should be resolved or rejected
// @result = array of promises
function createArrayOfPromises(num, shouldBeResolved) {
  var i, result = [];
  for (i = 0; i < num; i++) {
    var promise;
    switch (shouldBeResolved) {
      case 1: // resolve
        promise = Promise.resolve(i);
        break;
      case -1: // reject
        promise = Promise.reject('rejected');
        break;
      default: // mixed array of promises
        promise = (Math.random() * 10 > 5) ? Promise.resolve(i) : Promise.reject('rejected');
        break;
    }
    result.push(promise);
  }

  return result;
}

//console.log(createArrayOfPromises(10, 0));

function hello() {
  return "Hello";
}


//testAPromise();
// singlePromise('Hello Olena :)').then(function(data) {
//   console.log(data);
// });