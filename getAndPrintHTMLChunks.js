function getAndPrintHTMLChunks () {
var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  var buffer = "";

  https.get(requestOptions, function(res){
    var statusCode = res.statusCode;

    if (statusCode !== 200){
      console.log("There was an error: ", statusCode);
      return;
    } else{
      console.log("success", statusCode);
    };

    res.on("data", function(chunks){
      console.log("chunks", chunks.length);
      console.log(chunks + '\n');
      buffer += chunks;
    });

    res.on("end", function(){
      console.log("Response stream complete");
    });
  });

};

getAndPrintHTMLChunks();