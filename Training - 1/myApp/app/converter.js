module.exports.rgbToHex = function (red, green, blue) {
    var r = red.toString(16);
    var g = green.toString(16);
    var b = blue.toString(16);
    return padding(r) + padding(g) + padding(b);
}

//ff00ff => [255, 0, 255]
module.exports.hexToRgb = function (hex) {
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
}

function padding(hex) {
    return hex.length == 1 ? "0" + hex : hex;
}