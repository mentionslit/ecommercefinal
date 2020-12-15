<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->

// creating your first web server
var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000;
http.createServer(function(req, res) {
var q = url.parse(req.url, true);
var filename = "." + q.pathname;
if (filename == './') {
filename = './index';
}
filename = filename + ".html";
console.log('loading:...' + filename);
fs.readFile(filename, function(err, data) {
if (err){
res.writeHead(404, {'Content-Type': 'text/html'});
return res.end("404: Page Not Found");
}
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
return res.end();
});
}).listen(PORT);
console.log("Server Listening on assigned PORT...");

