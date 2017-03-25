const { identity, } = require('../util');

// Container :: x => Container x
function Container(x) {
  if (!(this instanceof Container)) {
    return new Container(x);
  }

  this.x = x;
}

// Container.of :: x => Container x
Container.of = x => Container(x);

// Container.fold :: (a -> b) -> b
Container.prototype.fold = function (fn = identity) {
  return fn(this.x);
};

// Container.map :: (a -> b) -> Container b
Container.prototype.map = function (fn) {
  return Container(fn(this.x));
};

module.exports = Container;
