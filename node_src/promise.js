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

testAPromise();