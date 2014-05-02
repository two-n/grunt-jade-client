define(['jade'], function(jade) {
var JST = {};
JST['hello'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h1>Hello World</h1>");;return buf.join("");
};
JST['hola'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<h1>Hola Mundo</h1>");;return buf.join("");
};
return JST;
});
