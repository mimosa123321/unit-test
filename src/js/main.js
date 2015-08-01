var Main = module.exports = function() {
    console.log("init Main");
};

Main.prototype.plus = function(a, b) {
    return a + b;
};

Main.prototype.isAnObject = function(data) {
    return data;
};

Main.prototype.wordToArray = function(word) {
    return word.split('');
};

Main.prototype.isTypeRegexp = function(data) {
    return data;
};
