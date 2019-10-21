// Create a box object.
// ... Set its width, height, and use a function for area.
var box = {
    width: 2,
    height: 3,
    area: function() {
        return this.width * this.height;
    }
};

// Write object properties.
console.log("WIDTH: " + box.width);
console.log("HEIGHT: " + box.height);
console.log("AREA: " + box.area());

var test = {"js": 1, "python": 0, "perl": -1};

test["ruby"] = 0;


var result = Object.keys(test);


for (var i = 0; i < result.length; i++) {
    console.log("KEY: " + result[i]);
}
