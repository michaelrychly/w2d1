var get = function getHTML (options, callback) {
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
      console.log("in functions");
      callback(buffer);
    });

    res.on("end", function(){
      console.log("Response stream complete");
    });
  });
}

var print = function printHTML (html) {
  console.log(html);
}

module.exports.get = get;
module.exports.print = print;