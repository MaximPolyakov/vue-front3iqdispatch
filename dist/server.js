var express = require("express");
var app = express();
var history = require("connect-history-api-fallback");

app.use(history({
// verbose: true
}));

app.use(express.static(__dirname));

app.set("port", (process.env.PORT || 8080));

app.listen(app.get("port"), () => {
console.log(`ENV: ${process.env.NODE_ENV}`);
console.log(`Derp is running at localhost: ${app.get('port')}`);
});