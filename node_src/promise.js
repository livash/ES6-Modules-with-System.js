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
    console.log("caought an error");
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
var arr = [singlePromise('Hello'), singlePromise('Hi'), singlePromise('Bye')];
processArrayOfPromises(arr).then(function(data) {
  console.log("Data from a promise array");
  console.log(data);
})

//testAPromise();
// singlePromise('Hello Olena :)').then(function(data) {
//   console.log(data);
// });