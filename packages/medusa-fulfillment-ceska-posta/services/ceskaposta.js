"use strict";

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;
var _medusaInterfaces = require("medusa-interfaces");
var CryptoJS = _interopRequireWildcard(require("crypto-js"));
var uuid = _interopRequireWildcard(require("uuid"));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache?.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj && "function" === typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };
  var exports = {};
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty =
      Object.defineProperty ||
      function (obj, key, desc) {
        obj[key] = desc.value;
      };
  var $Symbol = "function" === typeof Symbol ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return (obj[key] = value);
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && _instanceof(outerFn.prototype, Generator) ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto?.(getProto(values([])));
  NativeIteratorPrototype &&
    NativeIteratorPrototype !== Op &&
    hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
    (IteratorPrototype = NativeIteratorPrototype);
  var Gp = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype));
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg;
        var value = result.value;
        return value && "object" === _typeof(value) && hasOwn.call(value, "__await")
          ? PromiseImpl.resolve(value.__await).then(
              function (value) {
                invoke("next", value, resolve, reject);
              },
              function (err) {
                invoke("throw", err, resolve, reject);
              },
            )
          : PromiseImpl.resolve(value).then(
              function (unwrapped) {
                (result.value = unwrapped), resolve(result);
              },
              function (error) {
                return invoke("throw", error, resolve, reject);
              },
            );
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return (previousPromise = previousPromise
          ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw ((state = "completed"), context.arg);
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (((state = context.done ? "completed" : "suspendedYield"), record.arg === ContinueSentinel)) continue;
          return { value: record.arg, done: context.done };
        }
        "throw" === record.type && ((state = "completed"), (context.method = "throw"), (context.arg = record.arg));
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (undefined === method)
      return (
        (context.delegate = null),
        ("throw" === methodName &&
          delegate.iterator["return"] &&
          ((context.method = "return"),
          (context.arg = undefined),
          maybeInvokeDelegate(delegate, context),
          "throw" === context.method)) ||
          ("return" !== methodName &&
            ((context.method = "throw"),
            (context.arg = new TypeError(`The iterator does not provide a '${methodName}' method`)))),
        ContinueSentinel
      );
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type)
      return (context.method = "throw"), (context.arg = record.arg), (context.delegate = null), ContinueSentinel;
    var info = record.arg;
    return info
      ? info.done
        ? ((context[delegate.resultName] = info.value),
          (context.next = delegate.nextLoc),
          "return" !== context.method && ((context.method = "next"), (context.arg = undefined)),
          (context.delegate = null),
          ContinueSentinel)
        : info
      : ((context.method = "throw"),
        (context.arg = new TypeError("iterator result is not an object")),
        (context.delegate = null),
        ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    1 in locs && (entry.catchLoc = locs[1]),
      2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
      this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    (record.type = "normal"), record.arg = undefined, (entry.completion = record);
  }
  function Context(tryLocsList) {
    (this.tryEntries = [{ tryLoc: "root" }]), tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" === typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1;
        var next = function next() {
            while (++i < iterable.length)
              if (hasOwn.call(iterable, i)) return (next.value = iterable[i]), (next.done = !1), next;
            return (next.value = undefined), (next.done = !0), next;
          };
        return (next.next = next);
      }
    }
    return { next: doneResult };
  }
  function doneResult() {
    return { value: undefined, done: !0 };
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }),
    defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }),
    (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction")),
    (exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" === typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }),
    (exports.mark = function (genFun) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
          : ((genFun.__proto__ = GeneratorFunctionPrototype), define(genFun, toStringTagSymbol, "GeneratorFunction")),
        (genFun.prototype = Object.create(Gp)),
        genFun
      );
    }),
    (exports.awrap = function (arg) {
      return { __await: arg };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }),
    (exports.AsyncIterator = AsyncIterator),
    (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn)
        ? iter
        : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
    }),
    defineIteratorMethods(Gp),
    define(Gp, toStringTagSymbol, "Generator"),
    define(Gp, iteratorSymbol, function () {
      return this;
    }),
    define(Gp, "toString", function () {
      return "[object Generator]";
    }),
    (exports.keys = function (val) {
      var object = Object(val);
      var keys = [];
      for (var key in object) keys.push(key);
      return (
        keys.reverse(),
        function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) return (next.value = key), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (exports.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = undefined),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = undefined),
          this.tryEntries.forEach(resetTryEntry),
          !skipTempReset)
        )
          for (var name in this)
            "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return (
            (record.type = "throw"),
            (record.arg = exception),
            (context.next = loc),
            caught && ((context.method = "next"), (context.arg = undefined)),
            !!caught
          );
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry &&
          ("break" === type || "continue" === type) &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc &&
          (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return (
          (record.type = type),
          (record.arg = arg),
          finallyEntry
            ? ((this.method = "next"), (this.next = finallyEntry.finallyLoc), ContinueSentinel)
            : this.complete(record)
        );
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return (
          "break" === record.type || "continue" === record.type
            ? (this.next = record.arg)
            : "return" === record.type
            ? ((this.rval = this.arg = record.arg), (this.method = "return"), (this.next = "end"))
            : "normal" === record.type && afterLoc && (this.next = afterLoc),
          ContinueSentinel
        );
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      catch: function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return (
          (this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }),
          "next" === this.method && (this.arg = undefined),
          ContinueSentinel
        );
      },
    }),
    exports
  );
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this;
    var args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass?.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived);
    var result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var ZasilkovnaService = /*#__PURE__*/ (function (_FulfillmentService) {
  _inherits(ZasilkovnaService, _FulfillmentService);
  var _super = _createSuper(ZasilkovnaService);
  function ZasilkovnaService(_ref, options) {
    var _this;
    var logger = _ref.logger;
    var totalsService = _ref.totalsService;
    var claimService = _ref.claimService;
    var swapService = _ref.swapService;
    var orderService = _ref.orderService;
    _classCallCheck(this, ZasilkovnaService);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "apikey_", void 0);
    _defineProperty(_assertThisInitialized(_this), "secretKey_", void 0);
    _defineProperty(_assertThisInitialized(_this), "url_", void 0);
    _defineProperty(_assertThisInitialized(_this), "logger_", void 0);
    _defineProperty(_assertThisInitialized(_this), "totalsService_", void 0);
    _defineProperty(_assertThisInitialized(_this), "claimService_", void 0);
    _defineProperty(_assertThisInitialized(_this), "swapService_", void 0);
    _defineProperty(_assertThisInitialized(_this), "orderService_", void 0);
    _this.apikey_ = options.apiKey;
    _this.secretKey_ = options.secretKey;
    _this.url_ = options.url;
    _this.logger_ = logger;
    _this.totalsService_ = totalsService;
    _this.claimService_ = claimService;
    _this.swapService_ = swapService;
    _this.orderService_ = orderService;
    return _this;
  }
  _createClass(ZasilkovnaService, [
    {
      key: "getFulfillmentOptions",
      value: (function () {
        var _getFulfillmentOptions = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1)
                switch ((_context.prev = _context.next)) {
                  case 0:
                    return _context.abrupt("return", [
                      {
                        id: "ceskaposta-balik-do-ruky",
                        name: "Česká Pošta - Balík do ruky",
                        require_drop_point: false,
                        is_return: false,
                      },
                      {
                        id: "ceskaposta-balik-na-postu",
                        name: "Česká Pošta - Balík do ruky",
                        require_drop_point: false,
                        is_return: false,
                      },
                      {
                        id: "ceskaposta-balikovna",
                        name: "Česká Pošta - Balíkovna",
                        require_drop_point: true,
                        is_return: false,
                      },
                    ]);
                  case 1:
                  case "end":
                    return _context.stop();
                }
            }, _callee);
          }),
        );
        function getFulfillmentOptions() {
          return _getFulfillmentOptions.apply(this, arguments);
        }
        return getFulfillmentOptions;
      })(),
    },
    {
      key: "validateFulfillmentData",
      value: function validateFulfillmentData(_, data, cart) {
        console.log("validate_fulfillment");
        return data;
      },
    },
    {
      key: "validateOption",
      value: function validateOption(data) {
        console.log("validate_option");
        return true;
      },
    },
    {
      key: "canCalculate",
      value: function canCalculate() {
        console.log("can_calculate");
        return false;
      },
    },
    {
      key: "calculatePrice",
      value: function calculatePrice() {
        console.log("calculate_price");
        throw Error("Manual Fulfillment service cannot calculatePrice");
      },
    },
    {
      key: "createFulfillment",
      value: (function () {
        var _createFulfillment = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(data, items, order, fulfillment) {
            var itemsVarians;
            var body;
            var request;
            return _regeneratorRuntime().wrap(
              function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      itemsVarians = items.map(function (el) {
                        return el.variant;
                      });
                      body = {
                        parcelServiceHeader: {},
                        parcelServiceData: {
                          parcelParams: {
                            recordID: order.id,
                            currency: "CZK",
                            weight: this.sum(itemsVarians, "weight").toString(),
                            length: this.sum(itemsVarians, "length"),
                            height: this.sum(itemsVarians, "height"),
                            prefixParcelCode: "CP",
                          },
                          parcelAddress: {
                            firstName: order.shipping_address.first_name,
                            surname: order.shipping_address.last_name,
                            company: order.shipping_address.company,
                            subject: "F",
                            address: {
                              street: order.shipping_address.address_1,
                              cityPart: order.shipping_address.province,
                              city: order.shipping_address.city,
                              zipCode: order.shipping_address.postal_code,
                            },
                            mobilNumber: order.shipping_address.phone,
                            phoneNumber: order.shipping_address.phone,
                            emailAddress: order.email,
                          },
                        },
                      };
                      _context2.next = 4;
                      return fetch("".concat(this.url_, "/parcelService"), {
                        method: "POST",
                        headers: this.produceHeaders(body),
                        body: JSON.stringify(body),
                      });
                    case 4:
                      request = _context2.sent;
                      if (!(request.status === 200)) {
                        _context2.next = 9;
                        break;
                      }
                      return _context2.abrupt("return", Promise.resolve());
                    case 9:
                      return _context2.abrupt("return", Promise.reject());
                    case 10:
                    case "end":
                      return _context2.stop();
                  }
              },
              _callee2,
              this,
            );
          }),
        );
        function createFulfillment(_x, _x2, _x3, _x4) {
          return _createFulfillment.apply(this, arguments);
        }
        return createFulfillment;
      })(),
    },
    {
      key: "sum",
      value: function sum(array, property) {
        if (!property) {
          return array.reduce(function (total, current) {
            return total + Number(current);
          }, 0);
        }
        return array.reduce(function (total, current) {
          return total + Number(current[property]);
        }, 0);
      },
    },
    {
      key: "produceHeaders",
      value: function produceHeaders(body) {
        process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
        var unixTimestamp = Math.floor(Date.now() / 1000).toString();
        var hashPayload = CryptoJS.SHA256(JSON.stringify(body));
        var nonce = uuid.v4();
        var hash = CryptoJS.HmacSHA256(
          "".concat(hashPayload, ";").concat(unixTimestamp, ";").concat(nonce),
          this.secretKey_,
        );
        var hashBase64 = hash.toString(CryptoJS.enc.Base64);
        var authorization = 'CP-HMAC-SHA256 nonce="'.concat(nonce, '" signature="').concat(hashBase64, '"');
        var headers = {
          "Authorization-content-SHA256": hashPayload.toString(),
          "Authorization-Timestamp": unixTimestamp,
          "Content-Type": "application/json",
          "Api-Token": this.apikey_,
          Authorization: authorization,
        };
        return headers;
      },
    },
  ]);
  return ZasilkovnaService;
})(_medusaInterfaces.FulfillmentService);
_defineProperty(ZasilkovnaService, "identifier", "ceskaposta");
var _default = ZasilkovnaService;
exports["default"] = _default;
