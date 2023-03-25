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
var _fs = _interopRequireDefault(require("fs"));
var _s = _interopRequireDefault(require("aws-sdk/clients/s3"));
var _medusa = require("@medusajs/medusa");
var _stream = _interopRequireDefault(require("stream"));
function _interopRequireDefault(obj) {
  return obj?.__esModule ? obj : { default: obj };
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
var CloudflareR2Service = /*#__PURE__*/ (function (_AbstractFileService) {
  _inherits(CloudflareR2Service, _AbstractFileService);
  var _super = _createSuper(CloudflareR2Service);
  function CloudflareR2Service(container, options) {
    var _this;
    _classCallCheck(this, CloudflareR2Service);
    _this = _super.call(this, container);
    _defineProperty(_assertThisInitialized(_this), "manager_", void 0);
    _defineProperty(_assertThisInitialized(_this), "transactionManager_", void 0);
    _defineProperty(_assertThisInitialized(_this), "client", void 0);
    _defineProperty(_assertThisInitialized(_this), "bucket_", void 0);
    _defineProperty(_assertThisInitialized(_this), "prefix_", void 0);
    _defineProperty(_assertThisInitialized(_this), "public_url_", void 0);
    _defineProperty(_assertThisInitialized(_this), "accessKeyId_", void 0);
    _defineProperty(_assertThisInitialized(_this), "secretAccessKey_", void 0);
    _defineProperty(_assertThisInitialized(_this), "s3Endpoint_", void 0);
    var bucket = options.bucket;
    var _options$prefix = options.prefix;
    var prefix = _options$prefix === void 0 ? "" : _options$prefix;
    var public_url = options.public_url;
    var access_key_id = options.access_key_id;
    var secret_access_key = options.secret_access_key;
    var s3_endpoint = options.s3_endpoint;
    _this.bucket_ = bucket;
    _this.prefix_ = prefix;
    _this.public_url_ = public_url;
    _this.accessKeyId_ = access_key_id;
    _this.secretAccessKey_ = secret_access_key;
    _this.s3Endpoint_ = s3_endpoint;
    _this.client = _this.createClient();
    return _this;
  }
  _createClass(CloudflareR2Service, [
    {
      key: "createClient",
      value: function createClient() {
        return new _s["default"]({
          signatureVersion: "v4",
          region: "auto",
          endpoint: this.s3Endpoint_,
          accessKeyId: this.accessKeyId_,
          secretAccessKey: this.secretAccessKey_,
        });
      },
    },
    {
      key: "upload",
      value: function upload(fileData) {
        return this.uploadFile(fileData);
      },
    },
    {
      key: "uploadProtected",
      value: function uploadProtected(fileData) {
        return this.uploadFile(fileData, {
          acl: "private",
        });
      },
    },
    {
      key: "uploadFile",
      value: (function () {
        var _uploadFile = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(fileData, options) {
            var _options$acl;
            var path;
            var originalname;
            var ContentType;
            var Key;
            var params;
            var _yield$this$client$up;
            var _Key;
            var result;
            return _regeneratorRuntime().wrap(
              function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      (path = fileData.path), (originalname = fileData.originalname), (ContentType = fileData.mimetype);
                      Key = this.getFileKey(originalname);
                      params = {
                        ACL:
                          (_options$acl = options === null || options === void 0 ? void 0 : options.acl) !== null &&
                          _options$acl !== void 0
                            ? _options$acl
                            : options !== null && options !== void 0 && options.isProtected
                            ? "private"
                            : "public-read",
                        Bucket: this.bucket_,
                        Body: _fs["default"].createReadStream(path),
                        ContentType: ContentType,
                        Key: Key,
                      };
                      _context.prev = 3;
                      _context.next = 6;
                      return this.client.upload(params).promise();
                    case 6:
                      _yield$this$client$up = _context.sent;
                      _Key = _yield$this$client$up.Key;
                      result = {
                        url: "".concat(this.public_url_, "/").concat(this.bucket_, "/").concat(_Key),
                      };
                      return _context.abrupt("return", result);
                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](3);
                      throw new Error("Stala se chyba při nahrávání souboru");
                    case 15:
                    case "end":
                      return _context.stop();
                  }
              },
              _callee,
              this,
              [[3, 12]],
            );
          }),
        );
        function uploadFile(_x, _x2) {
          return _uploadFile.apply(this, arguments);
        }
        return uploadFile;
      })(),
    },
    {
      key: "delete",
      value: (function () {
        var _delete2 = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(file) {
            var params;
            return _regeneratorRuntime().wrap(
              function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      params = {
                        Bucket: this.bucket_,
                        Key: "".concat(file),
                      };
                      _context2.next = 3;
                      return this.client.deleteObject(params).promise();
                    case 3:
                    case "end":
                      return _context2.stop();
                  }
              },
              _callee2,
              this,
            );
          }),
        );
        function _delete(_x3) {
          return _delete2.apply(this, arguments);
        }
        return _delete;
      })(),
    },
    {
      key: "getUploadStreamDescriptor",
      value: (function () {
        var _getUploadStreamDescriptor = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(fileData) {
            var _fileData$acl;
            var pass;
            var fileKey;
            var params;
            return _regeneratorRuntime().wrap(
              function _callee3$(_context3) {
                while (1)
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      pass = new _stream["default"].PassThrough();
                      fileKey = this.getFileKey("".concat(fileData.name, ".").concat(fileData.ext));
                      params = {
                        ACL:
                          (_fileData$acl = fileData.acl) !== null && _fileData$acl !== void 0
                            ? _fileData$acl
                            : "private",
                        Bucket: this.bucket_,
                        Body: pass,
                        Key: fileKey,
                      };
                      return _context3.abrupt("return", {
                        writeStream: pass,
                        promise: this.client.upload(params).promise(),
                        url: "".concat(this.public_url_, "/").concat(this.bucket_, "/").concat(fileKey),
                        fileKey: fileKey,
                      });
                    case 4:
                    case "end":
                      return _context3.stop();
                  }
              },
              _callee3,
              this,
            );
          }),
        );
        function getUploadStreamDescriptor(_x4) {
          return _getUploadStreamDescriptor.apply(this, arguments);
        }
        return getUploadStreamDescriptor;
      })(),
    },
    {
      key: "getDownloadStream",
      value: (function () {
        var _getDownloadStream = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(fileData) {
            var params;
            return _regeneratorRuntime().wrap(
              function _callee4$(_context4) {
                while (1)
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      params = {
                        Bucket: this.bucket_,
                        Key: "".concat(fileData.fileKey),
                      };
                      return _context4.abrupt("return", this.client.getObject(params).createReadStream());
                    case 2:
                    case "end":
                      return _context4.stop();
                  }
              },
              _callee4,
              this,
            );
          }),
        );
        function getDownloadStream(_x5) {
          return _getDownloadStream.apply(this, arguments);
        }
        return getDownloadStream;
      })(),
    },
    {
      key: "getPresignedDownloadUrl",
      value: (function () {
        var _getPresignedDownloadUrl = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(fileData) {
            var params;
            return _regeneratorRuntime().wrap(
              function _callee5$(_context5) {
                while (1)
                  switch ((_context5.prev = _context5.next)) {
                    case 0:
                      params = {
                        Bucket: this.bucket_,
                        Key: "".concat(fileData.fileKey),
                        Expires: 60,
                      };
                      _context5.next = 3;
                      return this.client.getSignedUrlPromise("getObject", params);
                    case 3:
                      return _context5.abrupt("return", _context5.sent);
                    case 4:
                    case "end":
                      return _context5.stop();
                  }
              },
              _callee5,
              this,
            );
          }),
        );
        function getPresignedDownloadUrl(_x6) {
          return _getPresignedDownloadUrl.apply(this, arguments);
        }
        return getPresignedDownloadUrl;
      })(),
    },
    {
      key: "getFileKey",
      value: function getFileKey(fileName) {
        var prefixPath = this.prefix_.trim().length > 0 ? "".concat(this.prefix_, "/") : "";
        return "".concat(prefixPath).concat(fileName);
      },
    },
  ]);
  return CloudflareR2Service;
})(_medusa.AbstractFileService);
exports["default"] = CloudflareR2Service;
