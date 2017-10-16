function formatear(num) {
    var str = num.toLocaleString("latn");
    return str.replaceAll(',', '.');
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};