var expect = require('chai').expect;
var request = require('request');
var converter = require('../app/converter');

// AAA Assemble Action Assert
describe("testing converter module", function () {
    // test functionality
    it("should convert rgb to hex", () => {
        var r = 255;
        var g = 0;
        var b = 255;
        var result = converter.rgbToHex(r, g, b);
        expect(result).to.equal("ff00ff");
    });

    it("should convert hex to rgb", () => {
        var hex = "ff00ff";
        var result = converter.hexToRgb(hex);
        expect(result).to.deep.equal([255,0,255]); // deep equal is for reference type and not value type
    });
});