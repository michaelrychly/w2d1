function getAndPrintHTML (options) {
  var https = require('https');

  var buffer = "";

  https.get(options, function(res){
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
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);