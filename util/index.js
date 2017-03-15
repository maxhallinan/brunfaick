const _ = module.exports;

_.arrToStr = arr => arr.join('');

_.assign = target => (...sources) => Object.assign(target, ...sources);

_.compose = (...fns) => x => [ ...fns, ].reverse().reduce((x, fn) => fn(x), x);

_.curry = function (fn, arity = fn.length) {
  let args = [];

  return function curried(...nextArgs) {
    args = [ ...args, ...nextArgs, ];

    if (args.length >= arity) {
      return fn(...args);
    }

    return curried;
  };
};

_.filter = test => collection => collection.filter(test);

_.get = src => prop => src[prop];

_.keys = obj => Object.keys(obj);

_.includes = arr => item => arr.indexOf(item) > -1;

_.isArray = x => Boolean(x) && x.constructor === Array;

_.log = (...args) => x => console.log(...args, x) || x;

_.map = fn => arr => arr.map(fn);

_.partial = fn => (...args) => fn.bind(null, ...args);

_.reduce = fn => init => arr => arr.reduce(fn, init);

_.reverse = fn => (...args) => fn(...args.reverse());

_.set = src => prop => val => Object.assign({}, src, { [prop]: val, });

_.strToArr = s => s.split('');
