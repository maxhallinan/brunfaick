const Identity = x => ({
  fold: fn => fn(x),
  map: fn => Box(fn(x)),
});

module.exports = Identity;
