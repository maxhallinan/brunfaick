const _ = module.exports;

// arrToStr :: Array -> String
_.arrToStr = arr => arr.join('');

// assign :: Object -> [Object] -> Object
_.assign = target => (...sources) => Object.assign(target, ...sources);

// charCodeAt :: String -> Number
_.charCodeAt = str => str.charCodeAt();

// compose :: [Function] -> (a -> b)
_.compose = (...fns) => x => [ ...fns, ].reverse().reduce((x, fn) => fn(x), x);

// curry :: (* -> a) -> Number -> (* -> a)
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

_.curryRight = function (fn, arity = fn.length) {
  let args = [];

  return function curried(...nextArgs) {
    args = [ ...args, ...nextArgs, ];

    if (args.length >= arity) {
      return fn(...args.reverse());
    }

    return curried;
  };
};

// deepClone :: a -> a
_.deepClone = obj => JSON.parse(JSON.stringify(obj));

// decrement :: Number -> Number
_.decrement = num => --num;

// filter :: (a -> Bool) -> [a] -> [a]
_.filter = test => collection => collection.filter(test);

// fromCharCode :: [Number] -> String
_.fromCharCode = (...nums) => String.fromCharCode(...nums);

// get :: Object -> a -> b
_.get = (prop, src) => src[prop];

// keys :: Object -> Array
_.keys = obj => Object.keys(obj);

// identity :: a -> a
_.identity = x => x;

// includes :: [a] -> b -> Bool
_.includes = arr => item => arr.indexOf(item) > -1;

// increment :: Number -> Number
_.increment = num => ++num;

// isArray :: a -> Bool
_.isArray = x => Boolean(x) && x.constructor === Array;

// log :: a -> a
_.log = (...args) => x => console.log(...args, x) || x;

// map :: (a -> b) -> Functor a -> Functor b
_.map = fn => Functor => Functor.map(fn);

// partial :: Function -> [a] -> Function
_.partial = fn => (...args) => fn.bind(null, ...args);

// reduce :: (b -> a -> b) -> b -> [a] -> b
_.reduce = fn => init => arr => arr.reduce(fn, init);

// reverse :: Function -> Array -> a
_.reverse = fn => (...args) => fn(...args.reverse());

// set :: Object -> k -> v -> Object {k:v}
_.set = src => prop => val => Object.assign({}, src, { [prop]: val, });

// strToArr :: String -> Array
_.strToArr = s => s.split('');
