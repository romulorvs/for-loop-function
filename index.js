var forLoop = function (fn, options = {}) {
  if (typeof fn !== "function") {
    throw new TypeError(fn + " is not a function");
  }

  if (
    options === null ||
    Array.isArray(options) ||
    typeof options !== "object"
  ) {
    throw new TypeError(options + " is not an object");
  }

  var count;
  if (typeof options.start === "undefined") {
    count = 0;
  } else if (typeof options.start !== "number") {
    throw new TypeError(options.start + " is not a number");
  } else {
    count = options.start;
  }

  var condition;
  if (typeof options.condition === "undefined") {
    condition = function (i, arr) {
      return i < arr.length;
    };
  } else if (typeof options.condition !== "function") {
    throw new TypeError(options.condition + " is not a function");
  } else {
    condition = options.condition;
  }

  var iterator;
  if (typeof options.iterator === "undefined") {
    iterator = function () {
      return ++count;
    };
  } else if (typeof options.iterator !== "function") {
    throw new TypeError(options.iterator + " is not a function");
  } else {
    iterator = function () {
      count = options.iterator(count);
      return count;
    };
  }

  for (count; condition(count, this); iterator()) {
    try {
      fn(
        this[count],
        {
          i: count,
          arr: this,
          stop: function () {
            throw "$#brk$#";
          },
          jump: function () {
            throw "$#cnt$#";
          },
        }
      );
    } catch (err) {
      if (err === "$#brk$#") {
        break;
      }
      if (err === "$#cnt$#") {
        continue;
      }
      throw err;
    }
  }
};

Array.prototype.for = forLoop;
