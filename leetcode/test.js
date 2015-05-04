var a = {};

function out(n) {
    return function() {
	console.log(n);
    }
}

for (var i = 0; i < 3; i++) {
    a[i] = out(i);
}

a[0]();
a[1]();
a[2]();