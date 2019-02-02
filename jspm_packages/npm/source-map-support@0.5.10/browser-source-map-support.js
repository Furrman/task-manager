/* */ 
(function(Buffer, process) {
  (this.define || function(N, O) {
    this.sourceMapSupport = O();
  })("browser-source-map-support", function(N) {
    (function b(p, v, m) {
      function f(d, a) {
        if (!v[d]) {
          if (!p[d]) {
            var l = "function" == typeof require && require;
            if (!a && l)
              return l(d, !0);
            if (k)
              return k(d, !0);
            throw Error("Cannot find module '" + d + "'");
          }
          l = v[d] = {exports: {}};
          p[d][0].call(l.exports, function(a) {
            var b = p[d][1][a];
            return f(b ? b : a);
          }, l, l.exports, b, p, v, m);
        }
        return v[d].exports;
      }
      for (var k = "function" == typeof require && require,
          h = 0; h < m.length; h++)
        f(m[h]);
      return f;
    })({
      1: [function(p, v, m) {
        N = p("./source-map-support");
      }, {"./source-map-support": 20}],
      2: [function(p, v, m) {
        (function(b) {
          function f(b) {
            b = b.charCodeAt(0);
            if (43 === b || 45 === b)
              return 62;
            if (47 === b || 95 === b)
              return 63;
            if (48 > b)
              return -1;
            if (58 > b)
              return b - 48 + 52;
            if (91 > b)
              return b - 65;
            if (123 > b)
              return b - 97 + 26;
          }
          var k = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
          b.toByteArray = function(b) {
            function d(a) {
              u[t++] = a;
            }
            if (0 < b.length % 4)
              throw Error("Invalid string. Length must be a multiple of 4");
            var a = b.length;
            var l = "=" === b.charAt(a - 2) ? 2 : "=" === b.charAt(a - 1) ? 1 : 0;
            var u = new k(3 * b.length / 4 - l);
            var r = 0 < l ? b.length - 4 : b.length;
            var t = 0;
            for (a = 0; a < r; a += 4) {
              var h = f(b.charAt(a)) << 18 | f(b.charAt(a + 1)) << 12 | f(b.charAt(a + 2)) << 6 | f(b.charAt(a + 3));
              d((h & 16711680) >> 16);
              d((h & 65280) >> 8);
              d(h & 255);
            }
            2 === l ? (h = f(b.charAt(a)) << 2 | f(b.charAt(a + 1)) >> 4, d(h & 255)) : 1 === l && (h = f(b.charAt(a)) << 10 | f(b.charAt(a + 1)) << 4 | f(b.charAt(a + 2)) >> 2, d(h >> 8 & 255), d(h & 255));
            return u;
          };
          b.fromByteArray = function(b) {
            var d = b.length % 3,
                a = "",
                l;
            var f = 0;
            for (l = b.length - d; f < l; f += 3) {
              var r = (b[f] << 16) + (b[f + 1] << 8) + b[f + 2];
              r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 18 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 12 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 6 & 63) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r & 63);
              a += r;
            }
            switch (d) {
              case 1:
                r = b[b.length - 1];
                a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 2);
                a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r << 4 & 63);
                a += "==";
                break;
              case 2:
                r = (b[b.length - 2] << 8) + b[b.length - 1], a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 10), a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 4 & 63), a += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r << 2 & 63), a += "=";
            }
            return a;
          };
        })("undefined" === typeof m ? this.base64js = {} : m);
      }, {}],
      3: [function(p, v, m) {}, {}],
      4: [function(p, v, m) {
        (function(b) {
          var f = Object.prototype.toString,
              k = "function" === typeof b.alloc && "function" === typeof b.allocUnsafe && "function" === typeof b.from;
          v.exports = function(h, d, a) {
            if ("number" === typeof h)
              throw new TypeError('"value" argument must not be a number');
            if ("ArrayBuffer" === f.call(h).slice(8, -1)) {
              d >>>= 0;
              var l = h.byteLength - d;
              if (0 > l)
                throw new RangeError("'offset' is out of bounds");
              if (void 0 === a)
                a = l;
              else if (a >>>= 0, a > l)
                throw new RangeError("'length' is out of bounds");
              return k ? b.from(h.slice(d, d + a)) : new b(new Uint8Array(h.slice(d, d + a)));
            }
            if ("string" === typeof h) {
              a = d;
              if ("string" !== typeof a || "" === a)
                a = "utf8";
              if (!b.isEncoding(a))
                throw new TypeError('"encoding" must be a valid string encoding');
              return k ? b.from(h, a) : new b(h, a);
            }
            return k ? b.from(h) : new b(h);
          };
        }).call(this, p("buffer").Buffer);
      }, {buffer: 5}],
      5: [function(p, v, m) {
        function b(e, g, y) {
          if (!(this instanceof b))
            return new b(e, g, y);
          var a = typeof e;
          if ("base64" === g && "string" === a)
            for (e = e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, ""); 0 !== e.length % 4; )
              e += "=";
          if ("number" === a)
            var c = I(e);
          else if ("string" === a)
            c = b.byteLength(e, g);
          else if ("object" === a)
            c = I(e.length);
          else
            throw Error("First argument needs to be a number, array or string.");
          if (b._useTypedArrays)
            var d = b._augment(new Uint8Array(c));
          else
            d = this, d.length = c, d._isBuffer = !0;
          if (b._useTypedArrays && "number" === typeof e.byteLength)
            d._set(e);
          else {
            var n = e;
            if (M(n) || b.isBuffer(n) || n && "object" === typeof n && "number" === typeof n.length)
              for (g = 0; g < c; g++)
                b.isBuffer(e) ? d[g] = e.readUInt8(g) : d[g] = e[g];
            else if ("string" === a)
              d.write(e, 0, g);
            else if ("number" === a && !b._useTypedArrays && !y)
              for (g = 0; g < c; g++)
                d[g] = 0;
          }
          return d;
        }
        function f(e, g, y) {
          var a = "";
          for (y = Math.min(e.length, y); g < y; g++)
            a += String.fromCharCode(e[g]);
          return a;
        }
        function k(e, g, y, a) {
          a || (q("boolean" === typeof y, "missing or invalid endian"), q(void 0 !== g && null !== g, "missing offset"), q(g + 1 < e.length, "Trying to read beyond buffer length"));
          a = e.length;
          if (!(g >= a))
            return y ? (y = e[g], g + 1 < a && (y |= e[g + 1] << 8)) : (y = e[g] << 8, g + 1 < a && (y |= e[g + 1])), y;
        }
        function h(e, g, y, a) {
          a || (q("boolean" === typeof y, "missing or invalid endian"), q(void 0 !== g && null !== g, "missing offset"), q(g + 3 < e.length, "Trying to read beyond buffer length"));
          a = e.length;
          if (!(g >= a)) {
            var b;
            y ? (g + 2 < a && (b = e[g + 2] << 16), g + 1 < a && (b |= e[g + 1] << 8), b |= e[g], g + 3 < a && (b += e[g + 3] << 24 >>> 0)) : (g + 1 < a && (b = e[g + 1] << 16), g + 2 < a && (b |= e[g + 2] << 8), g + 3 < a && (b |= e[g + 3]), b += e[g] << 24 >>> 0);
            return b;
          }
        }
        function d(e, g, a, b) {
          b || (q("boolean" === typeof a, "missing or invalid endian"), q(void 0 !== g && null !== g, "missing offset"), q(g + 1 < e.length, "Trying to read beyond buffer length"));
          if (!(g >= e.length))
            return e = k(e, g, a, !0), e & 32768 ? -1 * (65535 - e + 1) : e;
        }
        function a(e, g, a, b) {
          b || (q("boolean" === typeof a, "missing or invalid endian"), q(void 0 !== g && null !== g, "missing offset"), q(g + 3 < e.length, "Trying to read beyond buffer length"));
          if (!(g >= e.length))
            return e = h(e, g, a, !0), e & 2147483648 ? -1 * (4294967295 - e + 1) : e;
        }
        function l(e, g, a, b) {
          b || (q("boolean" === typeof a, "missing or invalid endian"), q(g + 3 < e.length, "Trying to read beyond buffer length"));
          return G.read(e, g, a, 23, 4);
        }
        function u(e, g, a, b) {
          b || (q("boolean" === typeof a, "missing or invalid endian"), q(g + 7 < e.length, "Trying to read beyond buffer length"));
          return G.read(e, g, a, 52, 8);
        }
        function r(e, g, a, b, c) {
          c || (q(void 0 !== g && null !== g, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 1 < e.length, "trying to write beyond buffer length"), H(g, 65535));
          var y = e.length;
          if (!(a >= y))
            for (c = 0, y = Math.min(y - a, 2); c < y; c++)
              e[a + c] = (g & 255 << 8 * (b ? c : 1 - c)) >>> 8 * (b ? c : 1 - c);
        }
        function t(e, g, a, b, c) {
          c || (q(void 0 !== g && null !== g, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 3 < e.length, "trying to write beyond buffer length"), H(g, 4294967295));
          var y = e.length;
          if (!(a >= y))
            for (c = 0, y = Math.min(y - a, 4); c < y; c++)
              e[a + c] = g >>> 8 * (b ? c : 3 - c) & 255;
        }
        function z(e, g, a, b, c) {
          c || (q(void 0 !== g && null !== g, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 1 < e.length, "Trying to write beyond buffer length"), A(g, 32767, -32768));
          a >= e.length || (0 <= g ? r(e, g, a, b, c) : r(e, 65535 + g + 1, a, b, c));
        }
        function c(e, g, a, b, c) {
          c || (q(void 0 !== g && null !== g, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 3 < e.length, "Trying to write beyond buffer length"), A(g, 2147483647, -2147483648));
          a >= e.length || (0 <= g ? t(e, g, a, b, c) : t(e, 4294967295 + g + 1, a, b, c));
        }
        function n(e, g, a, b, c) {
          c || (q(void 0 !== g && null !== g, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 3 < e.length, "Trying to write beyond buffer length"), D(g, 3.4028234663852886E38, -3.4028234663852886E38));
          a >= e.length || G.write(e, g, a, b, 23, 4);
        }
        function x(e, g, a, b, c) {
          c || (q(void 0 !== g && null !== g, "missing value"), q("boolean" === typeof b, "missing or invalid endian"), q(void 0 !== a && null !== a, "missing offset"), q(a + 7 < e.length, "Trying to write beyond buffer length"), D(g, 1.7976931348623157E308, -1.7976931348623157E308));
          a >= e.length || G.write(e, g, a, b, 52, 8);
        }
        function B(e, g, a) {
          if ("number" !== typeof e)
            return a;
          e = ~~e;
          if (e >= g)
            return g;
          if (0 <= e)
            return e;
          e += g;
          return 0 <= e ? e : 0;
        }
        function I(e) {
          e = ~~Math.ceil(+e);
          return 0 > e ? 0 : e;
        }
        function M(e) {
          return (Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          })(e);
        }
        function K(e) {
          return 16 > e ? "0" + e.toString(16) : e.toString(16);
        }
        function L(e) {
          for (var g = [],
              a = 0; a < e.length; a++) {
            var b = e.charCodeAt(a);
            if (127 >= b)
              g.push(e.charCodeAt(a));
            else {
              var c = a;
              55296 <= b && 57343 >= b && a++;
              b = encodeURIComponent(e.slice(c, a + 1)).substr(1).split("%");
              for (c = 0; c < b.length; c++)
                g.push(parseInt(b[c], 16));
            }
          }
          return g;
        }
        function J(e) {
          for (var g = [],
              a = 0; a < e.length; a++)
            g.push(e.charCodeAt(a) & 255);
          return g;
        }
        function C(e, a, b, c) {
          for (var g = 0; g < c && !(g + b >= a.length || g >= e.length); g++)
            a[g + b] = e[g];
          return g;
        }
        function F(e) {
          try {
            return decodeURIComponent(e);
          } catch (g) {
            return String.fromCharCode(65533);
          }
        }
        function H(e, g) {
          q("number" === typeof e, "cannot write a non-number as a number");
          q(0 <= e, "specified a negative value for writing an unsigned value");
          q(e <= g, "value is larger than maximum value for type");
          q(Math.floor(e) === e, "value has a fractional component");
        }
        function A(e, g, a) {
          q("number" === typeof e, "cannot write a non-number as a number");
          q(e <= g, "value larger than maximum allowed value");
          q(e >= a, "value smaller than minimum allowed value");
          q(Math.floor(e) === e, "value has a fractional component");
        }
        function D(e, a, b) {
          q("number" === typeof e, "cannot write a non-number as a number");
          q(e <= a, "value larger than maximum allowed value");
          q(e >= b, "value smaller than minimum allowed value");
        }
        function q(e, a) {
          if (!e)
            throw Error(a || "Failed assertion");
        }
        var E = p("base64-js"),
            G = p("ieee754");
        m.Buffer = b;
        m.SlowBuffer = b;
        m.INSPECT_MAX_BYTES = 50;
        b.poolSize = 8192;
        b._useTypedArrays = function() {
          try {
            var e = new ArrayBuffer(0),
                a = new Uint8Array(e);
            a.foo = function() {
              return 42;
            };
            return 42 === a.foo() && "function" === typeof a.subarray;
          } catch (y) {
            return !1;
          }
        }();
        b.isEncoding = function(e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "raw":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        };
        b.isBuffer = function(e) {
          return !(null === e || void 0 === e || !e._isBuffer);
        };
        b.byteLength = function(e, a) {
          e += "";
          switch (a || "utf8") {
            case "hex":
              var g = e.length / 2;
              break;
            case "utf8":
            case "utf-8":
              g = L(e).length;
              break;
            case "ascii":
            case "binary":
            case "raw":
              g = e.length;
              break;
            case "base64":
              g = E.toByteArray(e).length;
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              g = 2 * e.length;
              break;
            default:
              throw Error("Unknown encoding");
          }
          return g;
        };
        b.concat = function(e, a) {
          q(M(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array.");
          if (0 === e.length)
            return new b(0);
          if (1 === e.length)
            return e[0];
          var g;
          if ("number" !== typeof a)
            for (g = a = 0; g < e.length; g++)
              a += e[g].length;
          var c = new b(a),
              d = 0;
          for (g = 0; g < e.length; g++) {
            var n = e[g];
            n.copy(c, d);
            d += n.length;
          }
          return c;
        };
        b.prototype.write = function(e, a, c, d) {
          if (isFinite(a))
            isFinite(c) || (d = c, c = void 0);
          else {
            var g = d;
            d = a;
            a = c;
            c = g;
          }
          a = Number(a) || 0;
          g = this.length - a;
          c ? (c = Number(c), c > g && (c = g)) : c = g;
          d = String(d || "utf8").toLowerCase();
          switch (d) {
            case "hex":
              a = Number(a) || 0;
              d = this.length - a;
              c ? (c = Number(c), c > d && (c = d)) : c = d;
              d = e.length;
              q(0 === d % 2, "Invalid hex string");
              c > d / 2 && (c = d / 2);
              for (d = 0; d < c; d++)
                g = parseInt(e.substr(2 * d, 2), 16), q(!isNaN(g), "Invalid hex string"), this[a + d] = g;
              b._charsWritten = 2 * d;
              e = d;
              break;
            case "utf8":
            case "utf-8":
              e = b._charsWritten = C(L(e), this, a, c);
              break;
            case "ascii":
              e = b._charsWritten = C(J(e), this, a, c);
              break;
            case "binary":
              e = b._charsWritten = C(J(e), this, a, c);
              break;
            case "base64":
              e = b._charsWritten = C(E.toByteArray(e), this, a, c);
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              g = [];
              for (var n = 0; n < e.length; n++) {
                var y = e.charCodeAt(n);
                d = y >> 8;
                y %= 256;
                g.push(y);
                g.push(d);
              }
              e = b._charsWritten = C(g, this, a, c);
              break;
            default:
              throw Error("Unknown encoding");
          }
          return e;
        };
        b.prototype.toString = function(e, a, c) {
          e = String(e || "utf8").toLowerCase();
          a = Number(a) || 0;
          c = void 0 !== c ? Number(c) : c = this.length;
          if (c === a)
            return "";
          switch (e) {
            case "hex":
              e = this.length;
              if (!a || 0 > a)
                a = 0;
              if (!c || 0 > c || c > e)
                c = e;
              for (e = ""; a < c; a++)
                e += K(this[a]);
              c = e;
              break;
            case "utf8":
            case "utf-8":
              var g = e = "";
              for (c = Math.min(this.length, c); a < c; a++)
                127 >= this[a] ? (e += F(g) + String.fromCharCode(this[a]), g = "") : g += "%" + this[a].toString(16);
              c = e + F(g);
              break;
            case "ascii":
              c = f(this, a, c);
              break;
            case "binary":
              c = f(this, a, c);
              break;
            case "base64":
              c = 0 === a && c === this.length ? E.fromByteArray(this) : E.fromByteArray(this.slice(a, c));
              break;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              c = this.slice(a, c);
              a = "";
              for (e = 0; e < c.length; e += 2)
                a += String.fromCharCode(c[e] + 256 * c[e + 1]);
              c = a;
              break;
            default:
              throw Error("Unknown encoding");
          }
          return c;
        };
        b.prototype.toJSON = function() {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0)
          };
        };
        b.prototype.copy = function(e, a, c, d) {
          c || (c = 0);
          d || 0 === d || (d = this.length);
          a || (a = 0);
          if (d !== c && 0 !== e.length && 0 !== this.length)
            if (q(d >= c, "sourceEnd < sourceStart"), q(0 <= a && a < e.length, "targetStart out of bounds"), q(0 <= c && c < this.length, "sourceStart out of bounds"), q(0 <= d && d <= this.length, "sourceEnd out of bounds"), d > this.length && (d = this.length), e.length - a < d - c && (d = e.length - a + c), d -= c, 100 > d || !b._useTypedArrays)
              for (var g = 0; g < d; g++)
                e[g + a] = this[g + c];
            else
              e._set(this.subarray(c, c + d), a);
        };
        b.prototype.slice = function(e, a) {
          var c = this.length;
          e = B(e, c, 0);
          a = B(a, c, c);
          if (b._useTypedArrays)
            return b._augment(this.subarray(e, a));
          c = a - e;
          for (var g = new b(c, void 0, !0),
              d = 0; d < c; d++)
            g[d] = this[d + e];
          return g;
        };
        b.prototype.get = function(e) {
          console.log(".get() is deprecated. Access using array indexes instead.");
          return this.readUInt8(e);
        };
        b.prototype.set = function(e, a) {
          console.log(".set() is deprecated. Access using array indexes instead.");
          return this.writeUInt8(e, a);
        };
        b.prototype.readUInt8 = function(e, a) {
          a || (q(void 0 !== e && null !== e, "missing offset"), q(e < this.length, "Trying to read beyond buffer length"));
          if (!(e >= this.length))
            return this[e];
        };
        b.prototype.readUInt16LE = function(e, a) {
          return k(this, e, !0, a);
        };
        b.prototype.readUInt16BE = function(e, a) {
          return k(this, e, !1, a);
        };
        b.prototype.readUInt32LE = function(e, a) {
          return h(this, e, !0, a);
        };
        b.prototype.readUInt32BE = function(e, a) {
          return h(this, e, !1, a);
        };
        b.prototype.readInt8 = function(e, a) {
          a || (q(void 0 !== e && null !== e, "missing offset"), q(e < this.length, "Trying to read beyond buffer length"));
          if (!(e >= this.length))
            return this[e] & 128 ? -1 * (255 - this[e] + 1) : this[e];
        };
        b.prototype.readInt16LE = function(e, a) {
          return d(this, e, !0, a);
        };
        b.prototype.readInt16BE = function(e, a) {
          return d(this, e, !1, a);
        };
        b.prototype.readInt32LE = function(e, c) {
          return a(this, e, !0, c);
        };
        b.prototype.readInt32BE = function(e, c) {
          return a(this, e, !1, c);
        };
        b.prototype.readFloatLE = function(e, a) {
          return l(this, e, !0, a);
        };
        b.prototype.readFloatBE = function(e, a) {
          return l(this, e, !1, a);
        };
        b.prototype.readDoubleLE = function(e, a) {
          return u(this, e, !0, a);
        };
        b.prototype.readDoubleBE = function(e, a) {
          return u(this, e, !1, a);
        };
        b.prototype.writeUInt8 = function(e, a, c) {
          c || (q(void 0 !== e && null !== e, "missing value"), q(void 0 !== a && null !== a, "missing offset"), q(a < this.length, "trying to write beyond buffer length"), H(e, 255));
          a >= this.length || (this[a] = e);
        };
        b.prototype.writeUInt16LE = function(a, c, b) {
          r(this, a, c, !0, b);
        };
        b.prototype.writeUInt16BE = function(a, c, b) {
          r(this, a, c, !1, b);
        };
        b.prototype.writeUInt32LE = function(a, c, b) {
          t(this, a, c, !0, b);
        };
        b.prototype.writeUInt32BE = function(a, c, b) {
          t(this, a, c, !1, b);
        };
        b.prototype.writeInt8 = function(a, c, b) {
          b || (q(void 0 !== a && null !== a, "missing value"), q(void 0 !== c && null !== c, "missing offset"), q(c < this.length, "Trying to write beyond buffer length"), A(a, 127, -128));
          c >= this.length || (0 <= a ? this.writeUInt8(a, c, b) : this.writeUInt8(255 + a + 1, c, b));
        };
        b.prototype.writeInt16LE = function(a, c, b) {
          z(this, a, c, !0, b);
        };
        b.prototype.writeInt16BE = function(a, c, b) {
          z(this, a, c, !1, b);
        };
        b.prototype.writeInt32LE = function(a, b, d) {
          c(this, a, b, !0, d);
        };
        b.prototype.writeInt32BE = function(a, b, d) {
          c(this, a, b, !1, d);
        };
        b.prototype.writeFloatLE = function(a, c, b) {
          n(this, a, c, !0, b);
        };
        b.prototype.writeFloatBE = function(a, c, b) {
          n(this, a, c, !1, b);
        };
        b.prototype.writeDoubleLE = function(a, c, b) {
          x(this, a, c, !0, b);
        };
        b.prototype.writeDoubleBE = function(a, c, b) {
          x(this, a, c, !1, b);
        };
        b.prototype.fill = function(a, c, b) {
          a || (a = 0);
          c || (c = 0);
          b || (b = this.length);
          "string" === typeof a && (a = a.charCodeAt(0));
          q("number" === typeof a && !isNaN(a), "value is not a number");
          q(b >= c, "end < start");
          if (b !== c && 0 !== this.length)
            for (q(0 <= c && c < this.length, "start out of bounds"), q(0 <= b && b <= this.length, "end out of bounds"); c < b; c++)
              this[c] = a;
        };
        b.prototype.inspect = function() {
          for (var a = [],
              c = this.length,
              b = 0; b < c; b++)
            if (a[b] = K(this[b]), b === m.INSPECT_MAX_BYTES) {
              a[b + 1] = "...";
              break;
            }
          return "<Buffer " + a.join(" ") + ">";
        };
        b.prototype.toArrayBuffer = function() {
          if ("undefined" !== typeof Uint8Array) {
            if (b._useTypedArrays)
              return (new b(this)).buffer;
            for (var a = new Uint8Array(this.length),
                c = 0,
                d = a.length; c < d; c += 1)
              a[c] = this[c];
            return a.buffer;
          }
          throw Error("Buffer.toArrayBuffer not supported in this browser");
        };
        var w = b.prototype;
        b._augment = function(a) {
          a._isBuffer = !0;
          a._get = a.get;
          a._set = a.set;
          a.get = w.get;
          a.set = w.set;
          a.write = w.write;
          a.toString = w.toString;
          a.toLocaleString = w.toString;
          a.toJSON = w.toJSON;
          a.copy = w.copy;
          a.slice = w.slice;
          a.readUInt8 = w.readUInt8;
          a.readUInt16LE = w.readUInt16LE;
          a.readUInt16BE = w.readUInt16BE;
          a.readUInt32LE = w.readUInt32LE;
          a.readUInt32BE = w.readUInt32BE;
          a.readInt8 = w.readInt8;
          a.readInt16LE = w.readInt16LE;
          a.readInt16BE = w.readInt16BE;
          a.readInt32LE = w.readInt32LE;
          a.readInt32BE = w.readInt32BE;
          a.readFloatLE = w.readFloatLE;
          a.readFloatBE = w.readFloatBE;
          a.readDoubleLE = w.readDoubleLE;
          a.readDoubleBE = w.readDoubleBE;
          a.writeUInt8 = w.writeUInt8;
          a.writeUInt16LE = w.writeUInt16LE;
          a.writeUInt16BE = w.writeUInt16BE;
          a.writeUInt32LE = w.writeUInt32LE;
          a.writeUInt32BE = w.writeUInt32BE;
          a.writeInt8 = w.writeInt8;
          a.writeInt16LE = w.writeInt16LE;
          a.writeInt16BE = w.writeInt16BE;
          a.writeInt32LE = w.writeInt32LE;
          a.writeInt32BE = w.writeInt32BE;
          a.writeFloatLE = w.writeFloatLE;
          a.writeFloatBE = w.writeFloatBE;
          a.writeDoubleLE = w.writeDoubleLE;
          a.writeDoubleBE = w.writeDoubleBE;
          a.fill = w.fill;
          a.inspect = w.inspect;
          a.toArrayBuffer = w.toArrayBuffer;
          return a;
        };
      }, {
        "base64-js": 2,
        ieee754: 6
      }],
      6: [function(p, v, m) {
        m.read = function(b, f, k, h, d) {
          var a = 8 * d - h - 1;
          var l = (1 << a) - 1,
              u = l >> 1,
              r = -7;
          d = k ? d - 1 : 0;
          var t = k ? -1 : 1,
              z = b[f + d];
          d += t;
          k = z & (1 << -r) - 1;
          z >>= -r;
          for (r += a; 0 < r; k = 256 * k + b[f + d], d += t, r -= 8)
            ;
          a = k & (1 << -r) - 1;
          k >>= -r;
          for (r += h; 0 < r; a = 256 * a + b[f + d], d += t, r -= 8)
            ;
          if (0 === k)
            k = 1 - u;
          else {
            if (k === l)
              return a ? NaN : Infinity * (z ? -1 : 1);
            a += Math.pow(2, h);
            k -= u;
          }
          return (z ? -1 : 1) * a * Math.pow(2, k - h);
        };
        m.write = function(b, f, k, h, d, a) {
          var l,
              u = 8 * a - d - 1,
              r = (1 << u) - 1,
              t = r >> 1,
              z = 23 === d ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
          a = h ? 0 : a - 1;
          var c = h ? 1 : -1,
              n = 0 > f || 0 === f && 0 > 1 / f ? 1 : 0;
          f = Math.abs(f);
          isNaN(f) || Infinity === f ? (f = isNaN(f) ? 1 : 0, h = r) : (h = Math.floor(Math.log(f) / Math.LN2), 1 > f * (l = Math.pow(2, -h)) && (h--, l *= 2), f = 1 <= h + t ? f + z / l : f + z * Math.pow(2, 1 - t), 2 <= f * l && (h++, l /= 2), h + t >= r ? (f = 0, h = r) : 1 <= h + t ? (f = (f * l - 1) * Math.pow(2, d), h += t) : (f = f * Math.pow(2, t - 1) * Math.pow(2, d), h = 0));
          for (; 8 <= d; b[k + a] = f & 255, a += c, f /= 256, d -= 8)
            ;
          h = h << d | f;
          for (u += d; 0 < u; b[k + a] = h & 255, a += c, h /= 256, u -= 8)
            ;
          b[k + a - c] |= 128 * n;
        };
      }, {}],
      7: [function(p, v, m) {
        (function(b) {
          function f(a, b) {
            for (var d = 0,
                l = a.length - 1; 0 <= l; l--) {
              var t = a[l];
              "." === t ? a.splice(l, 1) : ".." === t ? (a.splice(l, 1), d++) : d && (a.splice(l, 1), d--);
            }
            if (b)
              for (; d--; d)
                a.unshift("..");
            return a;
          }
          function k(a, b) {
            if (a.filter)
              return a.filter(b);
            for (var d = [],
                l = 0; l < a.length; l++)
              b(a[l], l, a) && d.push(a[l]);
            return d;
          }
          var h = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
          m.resolve = function() {
            for (var a = "",
                d = !1,
                u = arguments.length - 1; -1 <= u && !d; u--) {
              var r = 0 <= u ? arguments[u] : b.cwd();
              if ("string" !== typeof r)
                throw new TypeError("Arguments to path.resolve must be strings");
              r && (a = r + "/" + a, d = "/" === r.charAt(0));
            }
            a = f(k(a.split("/"), function(a) {
              return !!a;
            }), !d).join("/");
            return (d ? "/" : "") + a || ".";
          };
          m.normalize = function(a) {
            var b = m.isAbsolute(a),
                u = "/" === d(a, -1);
            (a = f(k(a.split("/"), function(a) {
              return !!a;
            }), !b).join("/")) || b || (a = ".");
            a && u && (a += "/");
            return (b ? "/" : "") + a;
          };
          m.isAbsolute = function(a) {
            return "/" === a.charAt(0);
          };
          m.join = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return m.normalize(k(a, function(a, b) {
              if ("string" !== typeof a)
                throw new TypeError("Arguments to path.join must be strings");
              return a;
            }).join("/"));
          };
          m.relative = function(a, b) {
            function d(a) {
              for (var c = 0; c < a.length && "" === a[c]; c++)
                ;
              for (var b = a.length - 1; 0 <= b && "" === a[b]; b--)
                ;
              return c > b ? [] : a.slice(c, b - c + 1);
            }
            a = m.resolve(a).substr(1);
            b = m.resolve(b).substr(1);
            for (var l = d(a.split("/")),
                t = d(b.split("/")),
                f = Math.min(l.length, t.length),
                c = f,
                n = 0; n < f; n++)
              if (l[n] !== t[n]) {
                c = n;
                break;
              }
            f = [];
            for (n = c; n < l.length; n++)
              f.push("..");
            f = f.concat(t.slice(c));
            return f.join("/");
          };
          m.sep = "/";
          m.delimiter = ":";
          m.dirname = function(a) {
            var b = h.exec(a).slice(1);
            a = b[0];
            b = b[1];
            if (!a && !b)
              return ".";
            b && (b = b.substr(0, b.length - 1));
            return a + b;
          };
          m.basename = function(a, b) {
            var d = h.exec(a).slice(1)[2];
            b && d.substr(-1 * b.length) === b && (d = d.substr(0, d.length - b.length));
            return d;
          };
          m.extname = function(a) {
            return h.exec(a).slice(1)[3];
          };
          var d = "b" === "ab".substr(-1) ? function(a, b, d) {
            return a.substr(b, d);
          } : function(a, b, d) {
            0 > b && (b = a.length + b);
            return a.substr(b, d);
          };
        }).call(this, p("g5I+bs"));
      }, {"g5I+bs": 8}],
      8: [function(p, v, m) {
        function b() {}
        p = v.exports = {};
        p.nextTick = function() {
          if ("undefined" !== typeof window && window.setImmediate)
            return function(b) {
              return window.setImmediate(b);
            };
          if ("undefined" !== typeof window && window.postMessage && window.addEventListener) {
            var b = [];
            window.addEventListener("message", function(f) {
              var k = f.source;
              k !== window && null !== k || "process-tick" !== f.data || (f.stopPropagation(), 0 < b.length && b.shift()());
            }, !0);
            return function(f) {
              b.push(f);
              window.postMessage("process-tick", "*");
            };
          }
          return function(b) {
            setTimeout(b, 0);
          };
        }();
        p.title = "browser";
        p.browser = !0;
        p.env = {};
        p.argv = [];
        p.on = b;
        p.addListener = b;
        p.once = b;
        p.off = b;
        p.removeListener = b;
        p.removeAllListeners = b;
        p.emit = b;
        p.binding = function(b) {
          throw Error("process.binding is not supported");
        };
        p.cwd = function() {
          return "/";
        };
        p.chdir = function(b) {
          throw Error("process.chdir is not supported");
        };
      }, {}],
      9: [function(p, v, m) {
        function b() {
          this._array = [];
          this._set = h ? new Map : Object.create(null);
        }
        var f = p("./util"),
            k = Object.prototype.hasOwnProperty,
            h = "undefined" !== typeof Map;
        b.fromArray = function(d, a) {
          for (var f = new b,
              k = 0,
              r = d.length; k < r; k++)
            f.add(d[k], a);
          return f;
        };
        b.prototype.size = function() {
          return h ? this._set.size : Object.getOwnPropertyNames(this._set).length;
        };
        b.prototype.add = function(b, a) {
          var d = h ? b : f.toSetString(b),
              u = h ? this.has(b) : k.call(this._set, d),
              r = this._array.length;
          u && !a || this._array.push(b);
          u || (h ? this._set.set(b, r) : this._set[d] = r);
        };
        b.prototype.has = function(b) {
          if (h)
            return this._set.has(b);
          b = f.toSetString(b);
          return k.call(this._set, b);
        };
        b.prototype.indexOf = function(b) {
          if (h) {
            var a = this._set.get(b);
            if (0 <= a)
              return a;
          } else if (a = f.toSetString(b), k.call(this._set, a))
            return this._set[a];
          throw Error('"' + b + '" is not in the set.');
        };
        b.prototype.at = function(b) {
          if (0 <= b && b < this._array.length)
            return this._array[b];
          throw Error("No element indexed by " + b);
        };
        b.prototype.toArray = function() {
          return this._array.slice();
        };
        m.ArraySet = b;
      }, {"./util": 18}],
      10: [function(p, v, m) {
        var b = p("./base64");
        m.encode = function(f) {
          var k = "",
              h = 0 > f ? (-f << 1) + 1 : f << 1;
          do
            f = h & 31, h >>>= 5, 0 < h && (f |= 32), k += b.encode(f);
 while (0 < h);
          return k;
        };
        m.decode = function(f, k, h) {
          var d = f.length,
              a = 0,
              l = 0;
          do {
            if (k >= d)
              throw Error("Expected more digits in base 64 VLQ value.");
            var u = b.decode(f.charCodeAt(k++));
            if (-1 === u)
              throw Error("Invalid base64 digit: " + f.charAt(k - 1));
            var r = !!(u & 32);
            u &= 31;
            a += u << l;
            l += 5;
          } while (r);
          f = a >> 1;
          h.value = 1 === (a & 1) ? -f : f;
          h.rest = k;
        };
      }, {"./base64": 11}],
      11: [function(p, v, m) {
        var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
        m.encode = function(f) {
          if (0 <= f && f < b.length)
            return b[f];
          throw new TypeError("Must be between 0 and 63: " + f);
        };
        m.decode = function(b) {
          return 65 <= b && 90 >= b ? b - 65 : 97 <= b && 122 >= b ? b - 97 + 26 : 48 <= b && 57 >= b ? b - 48 + 52 : 43 == b ? 62 : 47 == b ? 63 : -1;
        };
      }, {}],
      12: [function(p, v, m) {
        function b(f, k, h, d, a, l) {
          var u = Math.floor((k - f) / 2) + f,
              r = a(h, d[u], !0);
          return 0 === r ? u : 0 < r ? 1 < k - u ? b(u, k, h, d, a, l) : l == m.LEAST_UPPER_BOUND ? k < d.length ? k : -1 : u : 1 < u - f ? b(f, u, h, d, a, l) : l == m.LEAST_UPPER_BOUND ? u : 0 > f ? -1 : f;
        }
        m.GREATEST_LOWER_BOUND = 1;
        m.LEAST_UPPER_BOUND = 2;
        m.search = function(f, k, h, d) {
          if (0 === k.length)
            return -1;
          f = b(-1, k.length, f, k, h, d || m.GREATEST_LOWER_BOUND);
          if (0 > f)
            return -1;
          for (; 0 <= f - 1 && 0 === h(k[f], k[f - 1], !0); )
            --f;
          return f;
        };
      }, {}],
      13: [function(p, v, m) {
        function b() {
          this._array = [];
          this._sorted = !0;
          this._last = {
            generatedLine: -1,
            generatedColumn: 0
          };
        }
        var f = p("./util");
        b.prototype.unsortedForEach = function(b, f) {
          this._array.forEach(b, f);
        };
        b.prototype.add = function(b) {
          var k = this._last,
              d = k.generatedLine,
              a = b.generatedLine,
              l = k.generatedColumn,
              u = b.generatedColumn;
          a > d || a == d && u >= l || 0 >= f.compareByGeneratedPositionsInflated(k, b) ? this._last = b : this._sorted = !1;
          this._array.push(b);
        };
        b.prototype.toArray = function() {
          this._sorted || (this._array.sort(f.compareByGeneratedPositionsInflated), this._sorted = !0);
          return this._array;
        };
        m.MappingList = b;
      }, {"./util": 18}],
      14: [function(p, v, m) {
        function b(b, f, d) {
          var a = b[f];
          b[f] = b[d];
          b[d] = a;
        }
        function f(k, h, d, a) {
          if (d < a) {
            var l = d - 1;
            b(k, Math.round(d + Math.random() * (a - d)), a);
            for (var u = k[a],
                r = d; r < a; r++)
              0 >= h(k[r], u) && (l += 1, b(k, l, r));
            b(k, l + 1, r);
            l += 1;
            f(k, h, d, l - 1);
            f(k, h, l + 1, a);
          }
        }
        m.quickSort = function(b, h) {
          f(b, h, 0, b.length - 1);
        };
      }, {}],
      15: [function(p, v, m) {
        function b(a, b) {
          var c = a;
          "string" === typeof a && (c = d.parseSourceMapInput(a));
          return null != c.sections ? new h(c, b) : new f(c, b);
        }
        function f(a, b) {
          var c = a;
          "string" === typeof a && (c = d.parseSourceMapInput(a));
          var n = d.getArg(c, "version"),
              t = d.getArg(c, "sources"),
              f = d.getArg(c, "names", []),
              r = d.getArg(c, "sourceRoot", null),
              k = d.getArg(c, "sourcesContent", null),
              u = d.getArg(c, "mappings");
          c = d.getArg(c, "file", null);
          if (n != this._version)
            throw Error("Unsupported version: " + n);
          r && (r = d.normalize(r));
          t = t.map(String).map(d.normalize).map(function(a) {
            return r && d.isAbsolute(r) && d.isAbsolute(a) ? d.relative(r, a) : a;
          });
          this._names = l.fromArray(f.map(String), !0);
          this._sources = l.fromArray(t, !0);
          this.sourceRoot = r;
          this.sourcesContent = k;
          this._mappings = u;
          this._sourceMapURL = b;
          this.file = c;
        }
        function k() {
          this.generatedColumn = this.generatedLine = 0;
          this.name = this.originalColumn = this.originalLine = this.source = null;
        }
        function h(a, f) {
          var c = a;
          "string" === typeof a && (c = d.parseSourceMapInput(a));
          var n = d.getArg(c, "version");
          c = d.getArg(c, "sections");
          if (n != this._version)
            throw Error("Unsupported version: " + n);
          this._sources = new l;
          this._names = new l;
          var t = {
            line: -1,
            column: 0
          };
          this._sections = c.map(function(a) {
            if (a.url)
              throw Error("Support for url field in sections not implemented.");
            var c = d.getArg(a, "offset"),
                n = d.getArg(c, "line"),
                l = d.getArg(c, "column");
            if (n < t.line || n === t.line && l < t.column)
              throw Error("Section offsets must be ordered and non-overlapping.");
            t = c;
            return {
              generatedOffset: {
                generatedLine: n + 1,
                generatedColumn: l + 1
              },
              consumer: new b(d.getArg(a, "map"), f)
            };
          });
        }
        var d = p("./util"),
            a = p("./binary-search"),
            l = p("./array-set").ArraySet,
            u = p("./base64-vlq"),
            r = p("./quick-sort").quickSort;
        b.fromSourceMap = function(a) {
          return f.fromSourceMap(a);
        };
        b.prototype._version = 3;
        b.prototype.__generatedMappings = null;
        Object.defineProperty(b.prototype, "_generatedMappings", {
          configurable: !0,
          enumerable: !0,
          get: function() {
            this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot);
            return this.__generatedMappings;
          }
        });
        b.prototype.__originalMappings = null;
        Object.defineProperty(b.prototype, "_originalMappings", {
          configurable: !0,
          enumerable: !0,
          get: function() {
            this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot);
            return this.__originalMappings;
          }
        });
        b.prototype._charIsMappingSeparator = function(a, b) {
          var c = a.charAt(b);
          return ";" === c || "," === c;
        };
        b.prototype._parseMappings = function(a, b) {
          throw Error("Subclasses must implement _parseMappings");
        };
        b.GENERATED_ORDER = 1;
        b.ORIGINAL_ORDER = 2;
        b.GREATEST_LOWER_BOUND = 1;
        b.LEAST_UPPER_BOUND = 2;
        b.prototype.eachMapping = function(a, f, c) {
          f = f || null;
          switch (c || b.GENERATED_ORDER) {
            case b.GENERATED_ORDER:
              c = this._generatedMappings;
              break;
            case b.ORIGINAL_ORDER:
              c = this._originalMappings;
              break;
            default:
              throw Error("Unknown order of iteration.");
          }
          var n = this.sourceRoot;
          c.map(function(a) {
            var b = null === a.source ? null : this._sources.at(a.source);
            b = d.computeSourceURL(n, b, this._sourceMapURL);
            return {
              source: b,
              generatedLine: a.generatedLine,
              generatedColumn: a.generatedColumn,
              originalLine: a.originalLine,
              originalColumn: a.originalColumn,
              name: null === a.name ? null : this._names.at(a.name)
            };
          }, this).forEach(a, f);
        };
        b.prototype.allGeneratedPositionsFor = function(b) {
          var f = d.getArg(b, "line"),
              c = {
                source: d.getArg(b, "source"),
                originalLine: f,
                originalColumn: d.getArg(b, "column", 0)
              };
          null != this.sourceRoot && (c.source = d.relative(this.sourceRoot, c.source));
          if (!this._sources.has(c.source))
            return [];
          c.source = this._sources.indexOf(c.source);
          var n = [];
          c = this._findMapping(c, this._originalMappings, "originalLine", "originalColumn", d.compareByOriginalPositions, a.LEAST_UPPER_BOUND);
          if (0 <= c) {
            var t = this._originalMappings[c];
            if (void 0 === b.column)
              for (f = t.originalLine; t && t.originalLine === f; )
                n.push({
                  line: d.getArg(t, "generatedLine", null),
                  column: d.getArg(t, "generatedColumn", null),
                  lastColumn: d.getArg(t, "lastGeneratedColumn", null)
                }), t = this._originalMappings[++c];
            else
              for (b = t.originalColumn; t && t.originalLine === f && t.originalColumn == b; )
                n.push({
                  line: d.getArg(t, "generatedLine", null),
                  column: d.getArg(t, "generatedColumn", null),
                  lastColumn: d.getArg(t, "lastGeneratedColumn", null)
                }), t = this._originalMappings[++c];
          }
          return n;
        };
        m.SourceMapConsumer = b;
        f.prototype = Object.create(b.prototype);
        f.prototype.consumer = b;
        f.fromSourceMap = function(a, b) {
          var c = Object.create(f.prototype),
              n = c._names = l.fromArray(a._names.toArray(), !0),
              t = c._sources = l.fromArray(a._sources.toArray(), !0);
          c.sourceRoot = a._sourceRoot;
          c.sourcesContent = a._generateSourcesContent(c._sources.toArray(), c.sourceRoot);
          c.file = a._file;
          c._sourceMapURL = b;
          for (var u = a._mappings.toArray().slice(),
              h = c.__generatedMappings = [],
              m = c.__originalMappings = [],
              z = 0,
              p = u.length; z < p; z++) {
            var v = u[z],
                C = new k;
            C.generatedLine = v.generatedLine;
            C.generatedColumn = v.generatedColumn;
            v.source && (C.source = t.indexOf(v.source), C.originalLine = v.originalLine, C.originalColumn = v.originalColumn, v.name && (C.name = n.indexOf(v.name)), m.push(C));
            h.push(C);
          }
          r(c.__originalMappings, d.compareByOriginalPositions);
          return c;
        };
        f.prototype._version = 3;
        Object.defineProperty(f.prototype, "sources", {get: function() {
            return this._sources.toArray().map(function(a) {
              return d.computeSourceURL(this.sourceRoot, a, this._sourceMapURL);
            }, this);
          }});
        f.prototype._parseMappings = function(a, b) {
          for (var c = 1,
              n = 0,
              f = 0,
              t = 0,
              l = 0,
              h = 0,
              m = a.length,
              z = 0,
              p = {},
              v = {},
              F = [],
              H = [],
              A,
              D,
              q,
              E,
              G; z < m; )
            if (";" === a.charAt(z))
              c++, z++, n = 0;
            else if ("," === a.charAt(z))
              z++;
            else {
              A = new k;
              A.generatedLine = c;
              for (E = z; E < m && !this._charIsMappingSeparator(a, E); E++)
                ;
              D = a.slice(z, E);
              if (q = p[D])
                z += D.length;
              else {
                for (q = []; z < E; )
                  u.decode(a, z, v), G = v.value, z = v.rest, q.push(G);
                if (2 === q.length)
                  throw Error("Found a source, but no line and column");
                if (3 === q.length)
                  throw Error("Found a source and line, but no column");
                p[D] = q;
              }
              A.generatedColumn = n + q[0];
              n = A.generatedColumn;
              1 < q.length && (A.source = l + q[1], l += q[1], A.originalLine = f + q[2], f = A.originalLine, A.originalLine += 1, A.originalColumn = t + q[3], t = A.originalColumn, 4 < q.length && (A.name = h + q[4], h += q[4]));
              H.push(A);
              "number" === typeof A.originalLine && F.push(A);
            }
          r(H, d.compareByGeneratedPositionsDeflated);
          this.__generatedMappings = H;
          r(F, d.compareByOriginalPositions);
          this.__originalMappings = F;
        };
        f.prototype._findMapping = function(b, d, c, n, f, l) {
          if (0 >= b[c])
            throw new TypeError("Line must be greater than or equal to 1, got " + b[c]);
          if (0 > b[n])
            throw new TypeError("Column must be greater than or equal to 0, got " + b[n]);
          return a.search(b, d, f, l);
        };
        f.prototype.computeColumnSpans = function() {
          for (var a = 0; a < this._generatedMappings.length; ++a) {
            var b = this._generatedMappings[a];
            if (a + 1 < this._generatedMappings.length) {
              var c = this._generatedMappings[a + 1];
              if (b.generatedLine === c.generatedLine) {
                b.lastGeneratedColumn = c.generatedColumn - 1;
                continue;
              }
            }
            b.lastGeneratedColumn = Infinity;
          }
        };
        f.prototype.originalPositionFor = function(a) {
          var f = {
            generatedLine: d.getArg(a, "line"),
            generatedColumn: d.getArg(a, "column")
          };
          a = this._findMapping(f, this._generatedMappings, "generatedLine", "generatedColumn", d.compareByGeneratedPositionsDeflated, d.getArg(a, "bias", b.GREATEST_LOWER_BOUND));
          if (0 <= a && (a = this._generatedMappings[a], a.generatedLine === f.generatedLine)) {
            f = d.getArg(a, "source", null);
            null !== f && (f = this._sources.at(f), f = d.computeSourceURL(this.sourceRoot, f, this._sourceMapURL));
            var c = d.getArg(a, "name", null);
            null !== c && (c = this._names.at(c));
            return {
              source: f,
              line: d.getArg(a, "originalLine", null),
              column: d.getArg(a, "originalColumn", null),
              name: c
            };
          }
          return {
            source: null,
            line: null,
            column: null,
            name: null
          };
        };
        f.prototype.hasContentsOfAllSources = function() {
          return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(a) {
            return null == a;
          }) : !1;
        };
        f.prototype.sourceContentFor = function(a, b) {
          if (!this.sourcesContent)
            return null;
          var c = a;
          null != this.sourceRoot && (c = d.relative(this.sourceRoot, c));
          if (this._sources.has(c))
            return this.sourcesContent[this._sources.indexOf(c)];
          var n = this.sources,
              f;
          for (f = 0; f < n.length; ++f)
            if (n[f] == a)
              return this.sourcesContent[f];
          var l;
          if (null != this.sourceRoot && (l = d.urlParse(this.sourceRoot))) {
            n = c.replace(/^file:\/\//, "");
            if ("file" == l.scheme && this._sources.has(n))
              return this.sourcesContent[this._sources.indexOf(n)];
            if ((!l.path || "/" == l.path) && this._sources.has("/" + c))
              return this.sourcesContent[this._sources.indexOf("/" + c)];
          }
          if (b)
            return null;
          throw Error('"' + c + '" is not in the SourceMap.');
        };
        f.prototype.generatedPositionFor = function(a) {
          var f = d.getArg(a, "source");
          null != this.sourceRoot && (f = d.relative(this.sourceRoot, f));
          if (!this._sources.has(f))
            return {
              line: null,
              column: null,
              lastColumn: null
            };
          f = this._sources.indexOf(f);
          f = {
            source: f,
            originalLine: d.getArg(a, "line"),
            originalColumn: d.getArg(a, "column")
          };
          a = this._findMapping(f, this._originalMappings, "originalLine", "originalColumn", d.compareByOriginalPositions, d.getArg(a, "bias", b.GREATEST_LOWER_BOUND));
          return 0 <= a && (a = this._originalMappings[a], a.source === f.source) ? {
            line: d.getArg(a, "generatedLine", null),
            column: d.getArg(a, "generatedColumn", null),
            lastColumn: d.getArg(a, "lastGeneratedColumn", null)
          } : {
            line: null,
            column: null,
            lastColumn: null
          };
        };
        m.BasicSourceMapConsumer = f;
        h.prototype = Object.create(b.prototype);
        h.prototype.constructor = b;
        h.prototype._version = 3;
        Object.defineProperty(h.prototype, "sources", {get: function() {
            for (var a = [],
                b = 0; b < this._sections.length; b++)
              for (var c = 0; c < this._sections[b].consumer.sources.length; c++)
                a.push(this._sections[b].consumer.sources[c]);
            return a;
          }});
        h.prototype.originalPositionFor = function(b) {
          var f = {
            generatedLine: d.getArg(b, "line"),
            generatedColumn: d.getArg(b, "column")
          },
              c = a.search(f, this._sections, function(a, b) {
                var c = a.generatedLine - b.generatedOffset.generatedLine;
                return c ? c : a.generatedColumn - b.generatedOffset.generatedColumn;
              });
          return (c = this._sections[c]) ? c.consumer.originalPositionFor({
            line: f.generatedLine - (c.generatedOffset.generatedLine - 1),
            column: f.generatedColumn - (c.generatedOffset.generatedLine === f.generatedLine ? c.generatedOffset.generatedColumn - 1 : 0),
            bias: b.bias
          }) : {
            source: null,
            line: null,
            column: null,
            name: null
          };
        };
        h.prototype.hasContentsOfAllSources = function() {
          return this._sections.every(function(a) {
            return a.consumer.hasContentsOfAllSources();
          });
        };
        h.prototype.sourceContentFor = function(a, b) {
          for (var c = 0; c < this._sections.length; c++) {
            var d = this._sections[c].consumer.sourceContentFor(a, !0);
            if (d)
              return d;
          }
          if (b)
            return null;
          throw Error('"' + a + '" is not in the SourceMap.');
        };
        h.prototype.generatedPositionFor = function(a) {
          for (var b = 0; b < this._sections.length; b++) {
            var c = this._sections[b];
            if (-1 !== c.consumer.sources.indexOf(d.getArg(a, "source"))) {
              var f = c.consumer.generatedPositionFor(a);
              if (f)
                return {
                  line: f.line + (c.generatedOffset.generatedLine - 1),
                  column: f.column + (c.generatedOffset.generatedLine === f.line ? c.generatedOffset.generatedColumn - 1 : 0)
                };
            }
          }
          return {
            line: null,
            column: null
          };
        };
        h.prototype._parseMappings = function(a, b) {
          this.__generatedMappings = [];
          this.__originalMappings = [];
          for (var c = 0; c < this._sections.length; c++)
            for (var f = this._sections[c],
                l = f.consumer._generatedMappings,
                k = 0; k < l.length; k++) {
              var u = l[k],
                  h = f.consumer._sources.at(u.source);
              h = d.computeSourceURL(f.consumer.sourceRoot, h, this._sourceMapURL);
              this._sources.add(h);
              h = this._sources.indexOf(h);
              var t = null;
              u.name && (t = f.consumer._names.at(u.name), this._names.add(t), t = this._names.indexOf(t));
              u = {
                source: h,
                generatedLine: u.generatedLine + (f.generatedOffset.generatedLine - 1),
                generatedColumn: u.generatedColumn + (f.generatedOffset.generatedLine === u.generatedLine ? f.generatedOffset.generatedColumn - 1 : 0),
                originalLine: u.originalLine,
                originalColumn: u.originalColumn,
                name: t
              };
              this.__generatedMappings.push(u);
              "number" === typeof u.originalLine && this.__originalMappings.push(u);
            }
          r(this.__generatedMappings, d.compareByGeneratedPositionsDeflated);
          r(this.__originalMappings, d.compareByOriginalPositions);
        };
        m.IndexedSourceMapConsumer = h;
      }, {
        "./array-set": 9,
        "./base64-vlq": 10,
        "./binary-search": 12,
        "./quick-sort": 14,
        "./util": 18
      }],
      16: [function(p, v, m) {
        function b(a) {
          a || (a = {});
          this._file = k.getArg(a, "file", null);
          this._sourceRoot = k.getArg(a, "sourceRoot", null);
          this._skipValidation = k.getArg(a, "skipValidation", !1);
          this._sources = new h;
          this._names = new h;
          this._mappings = new d;
          this._sourcesContents = null;
        }
        var f = p("./base64-vlq"),
            k = p("./util"),
            h = p("./array-set").ArraySet,
            d = p("./mapping-list").MappingList;
        b.prototype._version = 3;
        b.fromSourceMap = function(a) {
          var d = a.sourceRoot,
              f = new b({
                file: a.file,
                sourceRoot: d
              });
          a.eachMapping(function(a) {
            var b = {generated: {
                line: a.generatedLine,
                column: a.generatedColumn
              }};
            null != a.source && (b.source = a.source, null != d && (b.source = k.relative(d, b.source)), b.original = {
              line: a.originalLine,
              column: a.originalColumn
            }, null != a.name && (b.name = a.name));
            f.addMapping(b);
          });
          a.sources.forEach(function(b) {
            var l = b;
            null !== d && (l = k.relative(d, b));
            f._sources.has(l) || f._sources.add(l);
            l = a.sourceContentFor(b);
            null != l && f.setSourceContent(b, l);
          });
          return f;
        };
        b.prototype.addMapping = function(a) {
          var b = k.getArg(a, "generated"),
              d = k.getArg(a, "original", null),
              f = k.getArg(a, "source", null);
          a = k.getArg(a, "name", null);
          this._skipValidation || this._validateMapping(b, d, f, a);
          null != f && (f = String(f), this._sources.has(f) || this._sources.add(f));
          null != a && (a = String(a), this._names.has(a) || this._names.add(a));
          this._mappings.add({
            generatedLine: b.line,
            generatedColumn: b.column,
            originalLine: null != d && d.line,
            originalColumn: null != d && d.column,
            source: f,
            name: a
          });
        };
        b.prototype.setSourceContent = function(a, b) {
          var d = a;
          null != this._sourceRoot && (d = k.relative(this._sourceRoot, d));
          null != b ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), this._sourcesContents[k.toSetString(d)] = b) : this._sourcesContents && (delete this._sourcesContents[k.toSetString(d)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
        };
        b.prototype.applySourceMap = function(a, b, d) {
          var f = b;
          if (null == b) {
            if (null == a.file)
              throw Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.');
            f = a.file;
          }
          var l = this._sourceRoot;
          null != l && (f = k.relative(l, f));
          var u = new h,
              c = new h;
          this._mappings.unsortedForEach(function(b) {
            if (b.source === f && null != b.originalLine) {
              var n = a.originalPositionFor({
                line: b.originalLine,
                column: b.originalColumn
              });
              null != n.source && (b.source = n.source, null != d && (b.source = k.join(d, b.source)), null != l && (b.source = k.relative(l, b.source)), b.originalLine = n.line, b.originalColumn = n.column, null != n.name && (b.name = n.name));
            }
            n = b.source;
            null == n || u.has(n) || u.add(n);
            b = b.name;
            null == b || c.has(b) || c.add(b);
          }, this);
          this._sources = u;
          this._names = c;
          a.sources.forEach(function(b) {
            var c = a.sourceContentFor(b);
            null != c && (null != d && (b = k.join(d, b)), null != l && (b = k.relative(l, b)), this.setSourceContent(b, c));
          }, this);
        };
        b.prototype._validateMapping = function(a, b, d, f) {
          if (b && "number" !== typeof b.line && "number" !== typeof b.column)
            throw Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
          if (!(a && "line" in a && "column" in a && 0 < a.line && 0 <= a.column && !b && !d && !f || a && "line" in a && "column" in a && b && "line" in b && "column" in b && 0 < a.line && 0 <= a.column && 0 < b.line && 0 <= b.column && d))
            throw Error("Invalid mapping: " + JSON.stringify({
              generated: a,
              source: d,
              original: b,
              name: f
            }));
        };
        b.prototype._serializeMappings = function() {
          for (var a = 0,
              b = 1,
              d = 0,
              h = 0,
              m = 0,
              p = 0,
              c = "",
              n,
              x,
              B,
              I = this._mappings.toArray(),
              v = 0,
              K = I.length; v < K; v++) {
            x = I[v];
            n = "";
            if (x.generatedLine !== b)
              for (a = 0; x.generatedLine !== b; )
                n += ";", b++;
            else if (0 < v) {
              if (!k.compareByGeneratedPositionsInflated(x, I[v - 1]))
                continue;
              n += ",";
            }
            n += f.encode(x.generatedColumn - a);
            a = x.generatedColumn;
            null != x.source && (B = this._sources.indexOf(x.source), n += f.encode(B - p), p = B, n += f.encode(x.originalLine - 1 - h), h = x.originalLine - 1, n += f.encode(x.originalColumn - d), d = x.originalColumn, null != x.name && (x = this._names.indexOf(x.name), n += f.encode(x - m), m = x));
            c += n;
          }
          return c;
        };
        b.prototype._generateSourcesContent = function(a, b) {
          return a.map(function(a) {
            if (!this._sourcesContents)
              return null;
            null != b && (a = k.relative(b, a));
            a = k.toSetString(a);
            return Object.prototype.hasOwnProperty.call(this._sourcesContents, a) ? this._sourcesContents[a] : null;
          }, this);
        };
        b.prototype.toJSON = function() {
          var a = {
            version: this._version,
            sources: this._sources.toArray(),
            names: this._names.toArray(),
            mappings: this._serializeMappings()
          };
          null != this._file && (a.file = this._file);
          null != this._sourceRoot && (a.sourceRoot = this._sourceRoot);
          this._sourcesContents && (a.sourcesContent = this._generateSourcesContent(a.sources, a.sourceRoot));
          return a;
        };
        b.prototype.toString = function() {
          return JSON.stringify(this.toJSON());
        };
        m.SourceMapGenerator = b;
      }, {
        "./array-set": 9,
        "./base64-vlq": 10,
        "./mapping-list": 13,
        "./util": 18
      }],
      17: [function(p, v, m) {
        function b(b, a, f, h, k) {
          this.children = [];
          this.sourceContents = {};
          this.line = null == b ? null : b;
          this.column = null == a ? null : a;
          this.source = null == f ? null : f;
          this.name = null == k ? null : k;
          this.$$$isSourceNode$$$ = !0;
          null != h && this.add(h);
        }
        var f = p("./source-map-generator").SourceMapGenerator,
            k = p("./util"),
            h = /(\r?\n)/;
        b.fromStringWithSourceMap = function(d, a, f) {
          function l(a, c) {
            if (null === a || void 0 === a.source)
              m.add(c);
            else {
              var d = f ? k.join(f, a.source) : a.source;
              m.add(new b(a.originalLine, a.originalColumn, d, c, a.name));
            }
          }
          var m = new b,
              t = d.split(h),
              p = 0,
              c = function() {
                var a = p < t.length ? t[p++] : void 0,
                    b = (p < t.length ? t[p++] : void 0) || "";
                return a + b;
              },
              n = 1,
              x = 0,
              B = null;
          a.eachMapping(function(a) {
            if (null !== B)
              if (n < a.generatedLine)
                l(B, c()), n++, x = 0;
              else {
                var b = t[p] || "",
                    d = b.substr(0, a.generatedColumn - x);
                t[p] = b.substr(a.generatedColumn - x);
                x = a.generatedColumn;
                l(B, d);
                B = a;
                return;
              }
            for (; n < a.generatedLine; )
              m.add(c()), n++;
            x < a.generatedColumn && (b = t[p] || "", m.add(b.substr(0, a.generatedColumn)), t[p] = b.substr(a.generatedColumn), x = a.generatedColumn);
            B = a;
          }, this);
          p < t.length && (B && l(B, c()), m.add(t.splice(p).join("")));
          a.sources.forEach(function(b) {
            var c = a.sourceContentFor(b);
            null != c && (null != f && (b = k.join(f, b)), m.setSourceContent(b, c));
          });
          return m;
        };
        b.prototype.add = function(b) {
          if (Array.isArray(b))
            b.forEach(function(a) {
              this.add(a);
            }, this);
          else if (b.$$$isSourceNode$$$ || "string" === typeof b)
            b && this.children.push(b);
          else
            throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + b);
          return this;
        };
        b.prototype.prepend = function(b) {
          if (Array.isArray(b))
            for (var a = b.length - 1; 0 <= a; a--)
              this.prepend(b[a]);
          else if (b.$$$isSourceNode$$$ || "string" === typeof b)
            this.children.unshift(b);
          else
            throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + b);
          return this;
        };
        b.prototype.walk = function(b) {
          for (var a,
              d = 0,
              f = this.children.length; d < f; d++)
            a = this.children[d], a.$$$isSourceNode$$$ ? a.walk(b) : "" !== a && b(a, {
              source: this.source,
              line: this.line,
              column: this.column,
              name: this.name
            });
        };
        b.prototype.join = function(b) {
          var a,
              d = this.children.length;
          if (0 < d) {
            var f = [];
            for (a = 0; a < d - 1; a++)
              f.push(this.children[a]), f.push(b);
            f.push(this.children[a]);
            this.children = f;
          }
          return this;
        };
        b.prototype.replaceRight = function(b, a) {
          var d = this.children[this.children.length - 1];
          d.$$$isSourceNode$$$ ? d.replaceRight(b, a) : "string" === typeof d ? this.children[this.children.length - 1] = d.replace(b, a) : this.children.push("".replace(b, a));
          return this;
        };
        b.prototype.setSourceContent = function(b, a) {
          this.sourceContents[k.toSetString(b)] = a;
        };
        b.prototype.walkSourceContents = function(b) {
          for (var a = 0,
              d = this.children.length; a < d; a++)
            this.children[a].$$$isSourceNode$$$ && this.children[a].walkSourceContents(b);
          var f = Object.keys(this.sourceContents);
          a = 0;
          for (d = f.length; a < d; a++)
            b(k.fromSetString(f[a]), this.sourceContents[f[a]]);
        };
        b.prototype.toString = function() {
          var b = "";
          this.walk(function(a) {
            b += a;
          });
          return b;
        };
        b.prototype.toStringWithSourceMap = function(b) {
          var a = "",
              d = 1,
              h = 0,
              k = new f(b),
              m = !1,
              p = null,
              c = null,
              n = null,
              x = null;
          this.walk(function(b, f) {
            a += b;
            null !== f.source && null !== f.line && null !== f.column ? (p === f.source && c === f.line && n === f.column && x === f.name || k.addMapping({
              source: f.source,
              original: {
                line: f.line,
                column: f.column
              },
              generated: {
                line: d,
                column: h
              },
              name: f.name
            }), p = f.source, c = f.line, n = f.column, x = f.name, m = !0) : m && (k.addMapping({generated: {
                line: d,
                column: h
              }}), p = null, m = !1);
            for (var l = 0,
                r = b.length; l < r; l++)
              10 === b.charCodeAt(l) ? (d++, h = 0, l + 1 === r ? (p = null, m = !1) : m && k.addMapping({
                source: f.source,
                original: {
                  line: f.line,
                  column: f.column
                },
                generated: {
                  line: d,
                  column: h
                },
                name: f.name
              })) : h++;
          });
          this.walkSourceContents(function(a, b) {
            k.setSourceContent(a, b);
          });
          return {
            code: a,
            map: k
          };
        };
        m.SourceNode = b;
      }, {
        "./source-map-generator": 16,
        "./util": 18
      }],
      18: [function(p, v, m) {
        function b(a) {
          return (a = a.match(t)) ? {
            scheme: a[1],
            auth: a[2],
            host: a[3],
            port: a[4],
            path: a[5]
          } : null;
        }
        function f(a) {
          var b = "";
          a.scheme && (b += a.scheme + ":");
          b += "//";
          a.auth && (b += a.auth + "@");
          a.host && (b += a.host);
          a.port && (b += ":" + a.port);
          a.path && (b += a.path);
          return b;
        }
        function k(a) {
          var c = a,
              d = b(a);
          if (d) {
            if (!d.path)
              return a;
            c = d.path;
          }
          a = m.isAbsolute(c);
          c = c.split(/\/+/);
          for (var h,
              k = 0,
              l = c.length - 1; 0 <= l; l--)
            h = c[l], "." === h ? c.splice(l, 1) : ".." === h ? k++ : 0 < k && ("" === h ? (c.splice(l + 1, k), k = 0) : (c.splice(l, 2), k--));
          c = c.join("/");
          "" === c && (c = a ? "/" : ".");
          return d ? (d.path = c, f(d)) : c;
        }
        function h(a, d) {
          "" === a && (a = ".");
          "" === d && (d = ".");
          var c = b(d),
              n = b(a);
          n && (a = n.path || "/");
          if (c && !c.scheme)
            return n && (c.scheme = n.scheme), f(c);
          if (c || d.match(z))
            return d;
          if (n && !n.host && !n.path)
            return n.host = d, f(n);
          c = "/" === d.charAt(0) ? d : k(a.replace(/\/+$/, "") + "/" + d);
          return n ? (n.path = c, f(n)) : c;
        }
        function d(a) {
          return a;
        }
        function a(a) {
          return u(a) ? "$" + a : a;
        }
        function l(a) {
          return u(a) ? a.slice(1) : a;
        }
        function u(a) {
          if (!a)
            return !1;
          var b = a.length;
          if (9 > b || 95 !== a.charCodeAt(b - 1) || 95 !== a.charCodeAt(b - 2) || 111 !== a.charCodeAt(b - 3) || 116 !== a.charCodeAt(b - 4) || 111 !== a.charCodeAt(b - 5) || 114 !== a.charCodeAt(b - 6) || 112 !== a.charCodeAt(b - 7) || 95 !== a.charCodeAt(b - 8) || 95 !== a.charCodeAt(b - 9))
            return !1;
          for (b -= 10; 0 <= b; b--)
            if (36 !== a.charCodeAt(b))
              return !1;
          return !0;
        }
        function r(a, b) {
          return a === b ? 0 : null === a ? 1 : null === b ? -1 : a > b ? 1 : -1;
        }
        m.getArg = function(a, b, d) {
          if (b in a)
            return a[b];
          if (3 === arguments.length)
            return d;
          throw Error('"' + b + '" is a required argument.');
        };
        var t = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
            z = /^data:.+,.+$/;
        m.urlParse = b;
        m.urlGenerate = f;
        m.normalize = k;
        m.join = h;
        m.isAbsolute = function(a) {
          return "/" === a.charAt(0) || t.test(a);
        };
        m.relative = function(a, b) {
          "" === a && (a = ".");
          a = a.replace(/\/$/, "");
          for (var c = 0; 0 !== b.indexOf(a + "/"); ) {
            var d = a.lastIndexOf("/");
            if (0 > d)
              return b;
            a = a.slice(0, d);
            if (a.match(/^([^\/]+:\/)?\/*$/))
              return b;
            ++c;
          }
          return Array(c + 1).join("../") + b.substr(a.length + 1);
        };
        p = !("__proto__" in Object.create(null));
        m.toSetString = p ? d : a;
        m.fromSetString = p ? d : l;
        m.compareByOriginalPositions = function(a, b, d) {
          var c = r(a.source, b.source);
          if (0 !== c)
            return c;
          c = a.originalLine - b.originalLine;
          if (0 !== c)
            return c;
          c = a.originalColumn - b.originalColumn;
          if (0 !== c || d)
            return c;
          c = a.generatedColumn - b.generatedColumn;
          if (0 !== c)
            return c;
          c = a.generatedLine - b.generatedLine;
          return 0 !== c ? c : r(a.name, b.name);
        };
        m.compareByGeneratedPositionsDeflated = function(a, b, d) {
          var c = a.generatedLine - b.generatedLine;
          if (0 !== c)
            return c;
          c = a.generatedColumn - b.generatedColumn;
          if (0 !== c || d)
            return c;
          c = r(a.source, b.source);
          if (0 !== c)
            return c;
          c = a.originalLine - b.originalLine;
          if (0 !== c)
            return c;
          c = a.originalColumn - b.originalColumn;
          return 0 !== c ? c : r(a.name, b.name);
        };
        m.compareByGeneratedPositionsInflated = function(a, b) {
          var c = a.generatedLine - b.generatedLine;
          if (0 !== c)
            return c;
          c = a.generatedColumn - b.generatedColumn;
          if (0 !== c)
            return c;
          c = r(a.source, b.source);
          if (0 !== c)
            return c;
          c = a.originalLine - b.originalLine;
          if (0 !== c)
            return c;
          c = a.originalColumn - b.originalColumn;
          return 0 !== c ? c : r(a.name, b.name);
        };
        m.parseSourceMapInput = function(a) {
          return JSON.parse(a.replace(/^\)]}'[^\n]*\n/, ""));
        };
        m.computeSourceURL = function(a, d, l) {
          d = d || "";
          a && ("/" !== a[a.length - 1] && "/" !== d[0] && (a += "/"), d = a + d);
          if (l) {
            a = b(l);
            if (!a)
              throw Error("sourceMapURL could not be parsed");
            a.path && (l = a.path.lastIndexOf("/"), 0 <= l && (a.path = a.path.substring(0, l + 1)));
            d = h(f(a), d);
          }
          return k(d);
        };
      }, {}],
      19: [function(p, v, m) {
        m.SourceMapGenerator = p("./lib/source-map-generator").SourceMapGenerator;
        m.SourceMapConsumer = p("./lib/source-map-consumer").SourceMapConsumer;
        m.SourceNode = p("./lib/source-node").SourceNode;
      }, {
        "./lib/source-map-consumer": 15,
        "./lib/source-map-generator": 16,
        "./lib/source-node": 17
      }],
      20: [function(p, v, m) {
        (function(b) {
          function f() {
            return "browser" === J ? !0 : "node" === J ? !1 : "undefined" !== typeof window && "function" === typeof XMLHttpRequest && !(window.require && window.module && window.process && "renderer" === window.process.type);
          }
          function k(a) {
            return function(b) {
              for (var c = 0; c < a.length; c++) {
                var e = a[c](b);
                if (e)
                  return e;
              }
              return null;
            };
          }
          function h(a, b) {
            if (!a)
              return b;
            var c = x.dirname(a),
                e = /^\w+:\/\/[^\/]*/.exec(c);
            e = e ? e[0] : "";
            var d = c.slice(e.length);
            return e && /^\/\w:/.test(d) ? (e += "/", e + x.resolve(c.slice(e.length), b).replace(/\\/g, "/")) : e + x.resolve(c.slice(e.length), b);
          }
          function d(a) {
            var b = F[a.source];
            if (!b) {
              var c = E(a.source);
              c ? (b = F[a.source] = {
                url: c.url,
                map: new n(c.map)
              }, b.map.sourcesContent && b.map.sources.forEach(function(a, c) {
                var e = b.map.sourcesContent[c];
                if (e) {
                  var d = h(b.url, a);
                  C[d] = e;
                }
              })) : b = F[a.source] = {
                url: null,
                map: null
              };
            }
            return b && b.map && "function" === typeof b.map.originalPositionFor && (c = b.map.originalPositionFor(a), null !== c.source) ? (c.source = h(b.url, c.source), c) : a;
          }
          function a(b) {
            var c = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(b);
            return c ? (b = d({
              source: c[2],
              line: +c[3],
              column: c[4] - 1
            }), "eval at " + c[1] + " (" + b.source + ":" + b.line + ":" + (b.column + 1) + ")") : (c = /^eval at ([^(]+) \((.+)\)$/.exec(b)) ? "eval at " + c[1] + " (" + a(c[2]) + ")" : b;
          }
          function l() {
            var a = "";
            if (this.isNative())
              a = "native";
            else {
              var b = this.getScriptNameOrSourceURL();
              !b && this.isEval() && (a = this.getEvalOrigin(), a += ", ");
              a = b ? a + b : a + "<anonymous>";
              b = this.getLineNumber();
              null != b && (a += ":" + b, (b = this.getColumnNumber()) && (a += ":" + b));
            }
            b = "";
            var c = this.getFunctionName(),
                d = !0,
                f = this.isConstructor();
            if (this.isToplevel() || f)
              f ? b += "new " + (c || "<anonymous>") : c ? b += c : (b += a, d = !1);
            else {
              f = this.getTypeName();
              "[object Object]" === f && (f = "null");
              var h = this.getMethodName();
              c ? (f && 0 != c.indexOf(f) && (b += f + "."), b += c, h && c.indexOf("." + h) != c.length - h.length - 1 && (b += " [as " + h + "]")) : b += f + "." + (h || "<anonymous>");
            }
            d && (b += " (" + a + ")");
            return b;
          }
          function u(a) {
            var b = {};
            Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(function(c) {
              b[c] = /^(?:is|get)/.test(c) ? function() {
                return a[c].call(a);
              } : a[c];
            });
            b.toString = l;
            return b;
          }
          function r(b) {
            if (b.isNative())
              return b;
            var c = b.getFileName() || b.getScriptNameOrSourceURL();
            if (c) {
              var e = b.getLineNumber(),
                  h = b.getColumnNumber() - 1;
              1 === e && 62 < h && !f() && !b.isEval() && (h -= 62);
              var k = d({
                source: c,
                line: e,
                column: h
              });
              b = u(b);
              var l = b.getFunctionName;
              b.getFunctionName = function() {
                return k.name || l();
              };
              b.getFileName = function() {
                return k.source;
              };
              b.getLineNumber = function() {
                return k.line;
              };
              b.getColumnNumber = function() {
                return k.column + 1;
              };
              b.getScriptNameOrSourceURL = function() {
                return k.source;
              };
              return b;
            }
            var m = b.isEval() && b.getEvalOrigin();
            m && (m = a(m), b = u(b), b.getEvalOrigin = function() {
              return m;
            });
            return b;
          }
          function t(a, b) {
            L && (C = {}, F = {});
            return a + b.map(function(a) {
              return "\n    at " + r(a);
            }).join("");
          }
          function v(a) {
            var b = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(a.stack);
            if (b) {
              a = b[1];
              var c = +b[2];
              b = +b[3];
              var d = C[a];
              if (!d && B && B.existsSync(a))
                try {
                  d = B.readFileSync(a, "utf8");
                } catch (Q) {
                  d = "";
                }
              if (d && (d = d.split(/(?:\r\n|\r|\n)/)[c - 1]))
                return a + ":" + c + "\n" + d + "\n" + Array(b).join(" ") + "^";
            }
            return null;
          }
          function c() {
            var a = b.emit;
            b.emit = function(c) {
              if ("uncaughtException" === c) {
                var d = arguments[1] && arguments[1].stack,
                    e = 0 < this.listeners(c).length;
                if (d && !e) {
                  d = arguments[1];
                  e = v(d);
                  b.stderr._handle && b.stderr._handle.setBlocking && b.stderr._handle.setBlocking(!0);
                  e && (console.error(), console.error(e));
                  console.error(d.stack);
                  b.exit(1);
                  return;
                }
              }
              return a.apply(this, arguments);
            };
          }
          var n = p("source-map").SourceMapConsumer,
              x = p("path");
          try {
            var B = p("fs");
            B.existsSync && B.readFileSync || (B = null);
          } catch (e) {}
          var I = p("buffer-from"),
              M = !1,
              K = !1,
              L = !1,
              J = "auto",
              C = {},
              F = {},
              H = /^data:application\/json[^,]+base64,/,
              A = [],
              D = [],
              q = k(A);
          A.push(function(a) {
            a = a.trim();
            /^file:/.test(a) && (a = a.replace(/file:\/\/\/(\w:)?/, function(a, b) {
              return b ? "" : "/";
            }));
            if (a in C)
              return C[a];
            var b = "";
            try {
              if (B)
                B.existsSync(a) && (b = B.readFileSync(a, "utf8"));
              else {
                var c = new XMLHttpRequest;
                c.open("GET", a, !1);
                c.send(null);
                4 === c.readyState && 200 === c.status && (b = c.responseText);
              }
            } catch (P) {}
            return C[a] = b;
          });
          var E = k(D);
          D.push(function(a) {
            a: {
              if (f())
                try {
                  var b = new XMLHttpRequest;
                  b.open("GET", a, !1);
                  b.send(null);
                  var c = b.getResponseHeader("SourceMap") || b.getResponseHeader("X-SourceMap");
                  if (c) {
                    var d = c;
                    break a;
                  }
                } catch (R) {}
              d = q(a);
              b = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/)[ \t]*$)/mg;
              for (var e; c = b.exec(d); )
                e = c;
              d = e ? e[1] : null;
            }
            if (!d)
              return null;
            H.test(d) ? (e = d.slice(d.indexOf(",") + 1), e = I(e, "base64").toString(), d = a) : (d = h(a, d), e = q(d));
            return e ? {
              url: d,
              map: e
            } : null;
          });
          var G = A.slice(0),
              w = D.slice(0);
          m.wrapCallSite = r;
          m.getErrorSource = v;
          m.mapSourcePosition = d;
          m.retrieveSourceMap = E;
          m.install = function(a) {
            a = a || {};
            if (a.environment && (J = a.environment, -1 === ["node", "browser", "auto"].indexOf(J)))
              throw Error("environment " + J + " was unknown. Available options are {auto, browser, node}");
            a.retrieveFile && (a.overrideRetrieveFile && (A.length = 0), A.unshift(a.retrieveFile));
            a.retrieveSourceMap && (a.overrideRetrieveSourceMap && (D.length = 0), D.unshift(a.retrieveSourceMap));
            if (a.hookRequire && !f()) {
              try {
                var d = p("module");
              } catch (P) {}
              var e = d.prototype._compile;
              e.__sourceMapSupport || (d.prototype._compile = function(a, b) {
                C[b] = a;
                F[b] = void 0;
                return e.call(this, a, b);
              }, d.prototype._compile.__sourceMapSupport = !0);
            }
            L || (L = "emptyCacheBetweenOperations" in a ? a.emptyCacheBetweenOperations : !1);
            M || (M = !0, Error.prepareStackTrace = t);
            !K && ("handleUncaughtExceptions" in a ? a.handleUncaughtExceptions : 1) && "object" === typeof b && null !== b && "function" === typeof b.on && (K = !0, c());
          };
          m.resetRetrieveHandlers = function() {
            A.length = 0;
            D.length = 0;
            A = G.slice(0);
            D = w.slice(0);
          };
        }).call(this, p("g5I+bs"));
      }, {
        "buffer-from": 4,
        fs: 3,
        "g5I+bs": 8,
        module: 3,
        path: 7,
        "source-map": 19
      }]
    }, {}, [1]);
    return N;
  });
})(require('buffer').Buffer, require('process'));
