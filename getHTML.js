function getHTML (options, callback) {
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
      callback(buffer);
    });

    res.on("end", function(){
      console.log("Response stream complete");
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);