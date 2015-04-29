function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
}

Foo.prototype.speak = function () {
  console.log("hello, " + this.identify() + '.');
}

function Bar(who) {
  Foo.call(this, who);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function() {
  console.log("Hello, " + this.identify() + ".");
};

var b1 = new Bar("b1");

b1.speak();

console.log(b1.constructor);
