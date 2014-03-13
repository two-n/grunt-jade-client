define(['jade'], function(jade) {
var JST = {};
JST['hello'] = function anonymous(locals) {
var buf = [];
with (locals || {}) {
buf.push("<h1>Hello World</h1>");
}
return buf.join("");
};
JST['hola'] = function anonymous(locals) {
var buf = [];
with (locals || {}) {
buf.push("<h1>Hola Mundo</h1>");
}
return buf.join("");
};
return JST;
});
