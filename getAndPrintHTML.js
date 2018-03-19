function getAndPrintHTML () {
  var https = require('https');
  var buffer = "";

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(res){
    var statusCode = res.statusCode;

    if (statusCode !== 200){
      console.log("There was an error: ", statusCode);
      return;
    }

    res.on("data", function(chunks){
      buffer += chunks;
    });

    res.on("data", function(){
     console.log(buffer);
    });

    res.on("end", function(){
      console.log("Response stream complete");
    });
  });

}

getAndPrintHTML();