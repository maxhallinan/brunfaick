const _ = module.exports;

// compose :: [Function] -> (a -> b)
_.compose = (a, b) => x => a(b(x));

// charCodeAt :: String -> Number
_.charCodeAt = str => str.charCodeAt();

// decrement :: Number -> Number
_.decrement = num => --num;

// fromCharCode :: [Number] -> String
_.fromCharCode = (...nums) => String.fromCharCode(...nums);

// get :: Object -> a -> b
_.get = (prop, src) => src[prop];

// increment :: Number -> Number
_.increment = num => ++num;

// isNan :: x -> Bool
_.isNan = x => x !== x;

// map :: (a -> b) -> Functor a -> Functor b
_.map = fn => Functor => Functor.map(fn);

// strToArr :: String -> Array
_.strToArr = s => s.split('');

