(window.paypal = window.paypal || {}),
    (window.paypal.Messages = (function(e) {
        var n = {};
        function t(i) {
            if (n[i]) return n[i].exports;
            var o = (n[i] = { i: i, l: !1, exports: {} });
            return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
        }
        return (
            (t.m = e),
            (t.c = n),
            (t.d = function(e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
            }),
            (t.r = function(e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (t.t = function(e, n) {
                if ((1 & n && (e = t(e)), 8 & n)) return e;
                if (4 & n && 'object' == typeof e && e && e.__esModule) return e;
                var i = Object.create(null);
                if (
                    (t.r(i),
                    Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
                    2 & n && 'string' != typeof e)
                )
                    for (var o in e)
                        t.d(
                            i,
                            o,
                            function(n) {
                                return e[n];
                            }.bind(null, o)
                        );
                return i;
            }),
            (t.n = function(e) {
                var n =
                    e && e.__esModule
                        ? function() {
                              return e.default;
                          }
                        : function() {
                              return e;
                          };
                return t.d(n, 'a', n), n;
            }),
            (t.o = function(e, n) {
                return {}.hasOwnProperty.call(e, n);
            }),
            (t.p = ''),
            t((t.s = 155))
        );
    })([
        function(e, n, t) {
            e.exports = t(141);
        },
        function(e, n, t) {
            e.exports = t(109);
        },
        function(e, n, t) {
            e.exports = t(142);
        },
        function(e, n, t) {
            e.exports = t(139);
        },
        function(e, n, t) {
            e.exports = t(100);
        },
        function(e, n, t) {
            e.exports = t(134);
        },
        function(e, n, t) {
            'use strict';
            var i = t(8),
                o = t(102).f,
                a = t(103),
                r = t(15),
                s = t(34),
                l = t(16),
                c = t(14),
                u = function(e) {
                    var n = function(n, t, i) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e();
                                case 1:
                                    return new e(n);
                                case 2:
                                    return new e(n, t);
                            }
                            return new e(n, t, i);
                        }
                        return e.apply(this, arguments);
                    };
                    return (n.prototype = e.prototype), n;
                };
            e.exports = function(e, n) {
                var t,
                    d,
                    m,
                    f,
                    p,
                    g,
                    h,
                    y,
                    x = e.target,
                    _ = e.global,
                    w = e.stat,
                    v = e.proto,
                    b = _ ? i : w ? i[x] : (i[x] || {}).prototype,
                    E = _ ? r : r[x] || (r[x] = {}),
                    A = E.prototype;
                for (m in n)
                    (t = !a(_ ? m : x + (w ? '.' : '#') + m, e.forced) && b && c(b, m)),
                        (p = E[m]),
                        t && (g = e.noTargetGet ? (y = o(b, m)) && y.value : b[m]),
                        (f = t && g ? g : n[m]),
                        (t && typeof p == typeof f) ||
                            ((h =
                                e.bind && t
                                    ? s(f, i)
                                    : e.wrap && t
                                    ? u(f)
                                    : v && 'function' == typeof f
                                    ? s(Function.call, f)
                                    : f),
                            (e.sham || (f && f.sham) || (p && p.sham)) && l(h, 'sham', !0),
                            (E[m] = h),
                            v &&
                                (c(r, (d = x + 'Prototype')) || l(r, d, {}),
                                (r[d][m] = f),
                                e.real && A && !A[m] && l(A, m, f)));
            };
        },
        function(e, n, t) {
            var i = t(8),
                o = t(38),
                a = t(49),
                r = t(119),
                s = i.Symbol,
                l = o('wks');
            e.exports = function(e) {
                return l[e] || (l[e] = (r && s[e]) || (r ? s : a)('Symbol.' + e));
            };
        },
        function(e, n) {
            var t = 'object',
                i = function(e) {
                    return e && e.Math == Math && e;
                };
            e.exports =
                i(typeof globalThis == t && globalThis) ||
                i(typeof window == t && window) ||
                i(typeof self == t && self) ||
                i(typeof window == t && window) ||
                Function('return this')();
        },
        function(e, n) {
            e.exports =
                "@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 300;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 400;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.woff2')\n            format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 500;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.woff2')\n            format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 700;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 200;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 300;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 400;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 500;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 700;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n";
        },
        function(e, n, t) {
            e.exports = t(146);
        },
        function(e, n, t) {
            var i = t(12);
            e.exports = !i(function() {
                return (
                    7 !=
                    Object.defineProperty({}, 'a', {
                        get: function() {
                            return 7;
                        }
                    }).a
                );
            });
        },
        function(e, n) {
            e.exports = function(e) {
                try {
                    return !!e();
                } catch (e) {
                    return !0;
                }
            };
        },
        function(e, n) {
            e.exports = function(e) {
                return 'object' == typeof e ? null !== e : 'function' == typeof e;
            };
        },
        function(e, n) {
            var t = {}.hasOwnProperty;
            e.exports = function(e, n) {
                return t.call(e, n);
            };
        },
        function(e, n) {
            e.exports = {};
        },
        function(e, n, t) {
            var i = t(11),
                o = t(27),
                a = t(24);
            e.exports = i
                ? function(e, n, t) {
                      return o.f(e, n, a(1, t));
                  }
                : function(e, n, t) {
                      return (e[n] = t), e;
                  };
        },
        function(e, n, t) {
            e.exports = t(144);
        },
        function(e, n) {
            e.exports = function(e) {
                if (null == e) throw TypeError("Can't call method on " + e);
                return e;
            };
        },
        function(e, n, t) {
            e.exports = t(137);
        },
        function(e, n, t) {
            var i = t(13);
            e.exports = function(e) {
                if (!i(e)) throw TypeError(String(e) + ' is not an object');
                return e;
            };
        },
        function(e, n, t) {
            var i = t(36),
                o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(i(e), 9007199254740991) : 0;
            };
        },
        function(e, n, t) {
            e.exports = t(52);
        },
        function(e, n, t) {
            e.exports = t(153);
        },
        function(e, n) {
            e.exports = function(e, n) {
                return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: n };
            };
        },
        function(e, n, t) {
            var i = t(32),
                o = t(18);
            e.exports = function(e) {
                return i(o(e));
            };
        },
        function(e, n) {
            var t = {}.toString;
            e.exports = function(e) {
                return t.call(e).slice(8, -1);
            };
        },
        function(e, n, t) {
            var i = t(11),
                o = t(45),
                a = t(20),
                r = t(33),
                s = Object.defineProperty;
            n.f = i
                ? s
                : function(e, n, t) {
                      if ((a(e), (n = r(n, !0)), a(t), o))
                          try {
                              return s(e, n, t);
                          } catch (e) {}
                      if ('get' in t || 'set' in t) throw TypeError('Accessors not supported');
                      return 'value' in t && (e[n] = t.value), e;
                  };
        },
        function(e, n, t) {
            var i = t(18);
            e.exports = function(e) {
                return Object(i(e));
            };
        },
        function(e, n) {
            e.exports = {};
        },
        function(e, n) {
            e.exports =
                '* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    color: #2d2d2d;\n    font-family: PayPal-Sans, Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    overflow: hidden;\n}\n\nimg {\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.message__logo--svg {\n    position: relative;\n}\n\n.message__logo img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n/* IE will not properly scale a SVG element, but will scale a canvas element */\n.message__logo canvas {\n    display: block;\n    width: 100%;\n    visibility: hidden;\n}\n';
        },
        function(e, n, t) {
            'use strict';
            var i = {}.propertyIsEnumerable,
                o = Object.getOwnPropertyDescriptor,
                a = o && !i.call({ 1: 2 }, 1);
            n.f = a
                ? function(e) {
                      var n = o(this, e);
                      return !!n && n.enumerable;
                  }
                : i;
        },
        function(e, n, t) {
            var i = t(12),
                o = t(26),
                a = ''.split;
            e.exports = i(function() {
                return !Object('z').propertyIsEnumerable(0);
            })
                ? function(e) {
                      return 'String' == o(e) ? a.call(e, '') : Object(e);
                  }
                : Object;
        },
        function(e, n, t) {
            var i = t(13);
            e.exports = function(e, n) {
                if (!i(e)) return e;
                var t, o;
                if (n && 'function' == typeof (t = e.toString) && !i((o = t.call(e)))) return o;
                if ('function' == typeof (t = e.valueOf) && !i((o = t.call(e)))) return o;
                if (!n && 'function' == typeof (t = e.toString) && !i((o = t.call(e)))) return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function(e, n, t) {
            var i = t(104);
            e.exports = function(e, n, t) {
                if ((i(e), void 0 === n)) return e;
                switch (t) {
                    case 0:
                        return function() {
                            return e.call(n);
                        };
                    case 1:
                        return function(t) {
                            return e.call(n, t);
                        };
                    case 2:
                        return function(t, i) {
                            return e.call(n, t, i);
                        };
                    case 3:
                        return function(t, i, o) {
                            return e.call(n, t, i, o);
                        };
                }
                return function() {
                    return e.apply(n, arguments);
                };
            };
        },
        function(e, n, t) {
            var i = t(106),
                o = t(48);
            e.exports =
                Object.keys ||
                function(e) {
                    return i(e, o);
                };
        },
        function(e, n) {
            var t = Math.ceil,
                i = Math.floor;
            e.exports = function(e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? i : t)(e);
            };
        },
        function(e, n) {
            e.exports = {};
        },
        function(e, n, t) {
            var i = t(8),
                o = t(115),
                a = t(39),
                r = i['__core-js_shared__'] || o('__core-js_shared__', {});
            (e.exports = function(e, n) {
                return r[e] || (r[e] = void 0 !== n ? n : {});
            })('versions', []).push({
                version: '3.1.3',
                mode: a ? 'pure' : 'global',
                copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
            });
        },
        function(e, n) {
            e.exports = !0;
        },
        function(e, n, t) {
            var i = t(38),
                o = t(49),
                a = i('keys');
            e.exports = function(e) {
                return a[e] || (a[e] = o(e));
            };
        },
        function(e, n, t) {
            var i = t(136);
            e.exports = function(e) {
                if (i(e)) throw TypeError("The method doesn't accept regular expressions");
                return e;
            };
        },
        function(e, n, t) {
            var i = t(7)('match');
            e.exports = function(e) {
                var n = /./;
                try {
                    '/./'[e](n);
                } catch (t) {
                    try {
                        return (n[i] = !1), '/./'[e](n);
                    } catch (e) {}
                }
                return !1;
            };
        },
        function(e, n) {
            e.exports =
                ".message__content {\n    display: inline-block;\n}\n\n.message__messaging {\n    margin: 0;\n}\n\n.message__logo-container {\n    display: inline;\n    white-space: nowrap;\n    margin: 0;\n}\n.message__logo-container::before {\n    content: 'with ';\n}\n\n.message__logo {\n    display: inline-block;\n    width: 7rem;\n    vertical-align: middle;\n}\n\n.message__headline .em {\n    display: inline-block;\n    white-space: nowrap;\n}\n\n.message__headline > span:nth-last-child(2)::after {\n    content: ' ';\n}\n";
        },
        function(e, n) {
            e.exports =
                '/* Not a valid style option ratio, but used as the mobile base for 8x1 and 20x1 */\n\n.message__content {\n    display: flex;\n    padding-right: 1rem;\n}\n\n.message__logo-container {\n    flex: 0 0 33%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.message__logo {\n    width: 60%;\n}\n\n.message__messaging {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n.message__messaging > * {\n    width: 100%;\n}\n\n.message__headline {\n    font-size: 5vw;\n    line-height: 1;\n    margin-bottom: 0.2em;\n}\n\n.message__headline span.multi:nth-of-type(2) {\n    display: none;\n}\n\n.message__disclaimer {\n    font-size: 10px;\n    line-height: 1.1;\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 400px) {\n    .message__headline {\n        font-size: 1.5rem;\n        margin-bottom: 0.5rem;\n    }\n\n    .message__disclaimer {\n        font-size: 0.75rem;\n        line-height: 1;\n        padding-right: 8%;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 520px) {\n    .message__logo-container {\n        flex: 0 0 25%;\n    }\n\n    .message__headline {\n        margin: 0 0 2% 0;\n        font-size: 3.7vw;\n        padding-right: 2%;\n        line-height: 1.1;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        font-size: 0.9rem;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 640px) {\n    .message__headline {\n        font-size: 1.7rem;\n    }\n}\n';
        },
        function(e, n, t) {
            var i = t(11),
                o = t(12),
                a = t(46);
            e.exports =
                !i &&
                !o(function() {
                    return (
                        7 !=
                        Object.defineProperty(a('div'), 'a', {
                            get: function() {
                                return 7;
                            }
                        }).a
                    );
                });
        },
        function(e, n, t) {
            var i = t(8),
                o = t(13),
                a = i.document,
                r = o(a) && o(a.createElement);
            e.exports = function(e) {
                return r ? a.createElement(e) : {};
            };
        },
        function(e, n, t) {
            var i = t(25),
                o = t(21),
                a = t(107),
                r = function(e) {
                    return function(n, t, r) {
                        var s,
                            l = i(n),
                            c = o(l.length),
                            u = a(r, c);
                        if (e && t != t) {
                            for (; c > u; ) if ((s = l[u++]) != s) return !0;
                        } else for (; c > u; u++) if ((e || u in l) && l[u] === t) return e || u || 0;
                        return !e && -1;
                    };
                };
            e.exports = { includes: r(!0), indexOf: r(!1) };
        },
        function(e, n) {
            e.exports = [
                'constructor',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'toLocaleString',
                'toString',
                'valueOf'
            ];
        },
        function(e, n) {
            var t = 0,
                i = Math.random();
            e.exports = function(e) {
                return 'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++t + i).toString(36);
            };
        },
        function(e, n, t) {
            'use strict';
            var i,
                o,
                a,
                r = t(51),
                s = t(16),
                l = t(14),
                c = t(7),
                u = t(39),
                d = c('iterator'),
                m = !1;
            [].keys && ('next' in (a = [].keys()) ? (o = r(r(a))) !== Object.prototype && (i = o) : (m = !0)),
                null == i && (i = {}),
                u ||
                    l(i, d) ||
                    s(i, d, function() {
                        return this;
                    }),
                (e.exports = { IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: m });
        },
        function(e, n, t) {
            var i = t(14),
                o = t(28),
                a = t(40),
                r = t(118),
                s = a('IE_PROTO'),
                l = Object.prototype;
            e.exports = r
                ? Object.getPrototypeOf
                : function(e) {
                      return (
                          (e = o(e)),
                          i(e, s)
                              ? e[s]
                              : 'function' == typeof e.constructor && e instanceof e.constructor
                              ? e.constructor.prototype
                              : e instanceof Object
                              ? l
                              : null
                      );
                  };
        },
        function(e, n, t) {
            var i = t(15),
                o = t(8),
                a = function(e) {
                    return 'function' == typeof e ? e : void 0;
                };
            e.exports = function(e, n) {
                return arguments.length < 2 ? a(i[e]) || a(o[e]) : (i[e] && i[e][n]) || (o[e] && o[e][n]);
            };
        },
        function(e, n, t) {
            var i = t(27).f,
                o = t(16),
                a = t(14),
                r = t(123),
                s = t(7)('toStringTag'),
                l = r !== {}.toString;
            e.exports = function(e, n, t, c) {
                if (e) {
                    var u = t ? e : e.prototype;
                    a(u, s) || i(u, s, { configurable: !0, value: n }), c && l && o(u, 'toString', r);
                }
            };
        },
        function(e, n, t) {
            var i = t(26),
                o = t(7)('toStringTag'),
                a =
                    'Arguments' ==
                    i(
                        (function() {
                            return arguments;
                        })()
                    );
            e.exports = function(e) {
                var n, t, r;
                return void 0 === e
                    ? 'Undefined'
                    : null === e
                    ? 'Null'
                    : 'string' ==
                      typeof (t = (function(e, n) {
                          try {
                              return e[n];
                          } catch (e) {}
                      })((n = Object(e)), o))
                    ? t
                    : a
                    ? i(n)
                    : 'Object' == (r = i(n)) && 'function' == typeof n.callee
                    ? 'Arguments'
                    : r;
            };
        },
        function(e, n, t) {
            var i = t(11),
                o = t(35),
                a = t(25),
                r = t(31).f,
                s = function(e) {
                    return function(n) {
                        for (var t, s = a(n), l = o(s), c = l.length, u = 0, d = []; c > u; )
                            (t = l[u++]), (i && !r.call(s, t)) || d.push(e ? [t, s[t]] : s[t]);
                        return d;
                    };
                };
            e.exports = { entries: s(!0), values: s(!1) };
        },
        function(e, n) {
            e.exports = function() {};
        },
        function(e, n, t) {
            e.exports = t(151);
        },
        function(e, n) {
            e.exports =
                '<div class="message" data-pp-message>\n    <div class="message__container">\n        \x3c!-- foreground layer --\x3e\n        <div class="message__foreground"></div>\n\n        \x3c!-- content layer --\x3e\n        <div class="message__content">\n            \x3c!-- PP Credit Logo --\x3e\n            <div class="message__logo-container"></div>\n            \x3c!-- Promotional Messaging --\x3e\n            <div class="message__messaging">\n                <div class="message__promo-container">\n                    <h5 class="message__headline"></h5>\n                    <h6 class="message__sub-headline"></h6>\n                </div>\n                <p class="message__disclaimer"></p>\n            </div>\n        </div>\n\n        \x3c!-- background layer --\x3e\n        <div class="message__background"></div>\n    </div>\n</div>\n';
        },
        function(e, n) {
            e.exports =
                '\x3c!-- Click tracking URL --\x3e\n<a class="pp-legacy__link" target="_blank" data-pp-message></a>\n\x3c!-- Impression tracking URL --\x3e\n<img class="pp-legacy__pixel" style="display:none!important" />\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    display: block;\n    width: 100%;\n    color: #2c2e2f;\n    cursor: pointer;\n}\n\n.message__container {\n    min-width: 100%;\n}\n\n.message__content {\n    display: inline-flex;\n    align-items: center;\n    min-width: 100%;\n}\n\n.message__logo-container {\n    flex: 0 0 auto;\n    width: 70px;\n    margin-right: 0.8rem;\n}\n\n.message__messaging {\n    line-height: 1.3;\n    white-space: normal;\n    margin-right: 0.8rem;\n}\n\n.message__messaging span.br {\n    white-space: nowrap;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline {\n    display: inline;\n    font-weight: 400;\n    font-size: 12px;\n}\n\n.message__sub-headline {\n    display: none;\n}\n\n.message__disclaimer {\n    display: inline;\n    white-space: nowrap;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 16px;\n}\n\n.message__disclaimer > span {\n    color: #0076ff;\n    text-decoration: underline;\n}\n\n/* For non-US NI disclaimer */\n.message__disclaimer > span.multi:first-of-type {\n    color: #2c2e2f;\n    text-decoration: none;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__messaging {\n    white-space: nowrap;\n    flex: 0 0 auto;\n}\n\n.message__logo-container {\n    width: 120px;\n}\n\n.message__headline span:only-child {\n    white-space: nowrap;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__headline > span:last-of-type {\n    display: inline-block;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__logo-container {\n    order: 2;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    display: inline-block;\n    /* IE does not like flex-direction: column;\n    flex-direction: column;\n    align-items: flex-start; */\n}\n\n.message__logo-container {\n    max-width: 120px;\n    margin: 0 0 0.2rem 0;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__messaging {\n    max-width: 375px;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__messaging {\n    white-space: normal;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    color: white;\n}\n\n.message__headline {\n    color: white;\n}\n\n.message__disclaimer span {\n    color: white;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    cursor: pointer;\n}\n\n.message .br {\n    display: inline-block;\n}\n\n.message .em {\n    font-family: PayPal-Sans-Big, PayPal-Sans;\n    font-weight: 400;\n}\n\n.message__container,\n.message__foreground,\n.message__content,\n.message__background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.message__headline,\n.message__sub-headline,\n.message__disclaimer {\n    font-family: PayPal-Sans;\n    font-weight: 300;\n}\n\n.message__headline {\n    font-family: PayPal-Sans-Big, PayPal-Sans;\n    font-weight: 400;\n}\n.message__headline .weak {\n    font-family: PayPal-Sans;\n    font-weight: 300;\n}\n\n.message__disclaimer > span:not(.multi),\n.message__disclaimer > span.multi:last-of-type {\n    font-weight: 300;\n    text-decoration: underline;\n    white-space: nowrap;\n}\n\n.message__background {\n    z-index: -1;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    padding: 7%;\n}\n\n.message__logo-container {\n    width: 50%;\n    margin-bottom: 7%;\n}\n\n.message__headline {\n    font-size: 11vw;\n    line-height: 1.1em;\n    font-size: 12vw;\n}\n\n.message__headline span.multi:nth-of-type(2) {\n    display: none;\n}\n\n.message__disclaimer {\n    position: absolute;\n    width: 80%;\n    bottom: 7%;\n    font-size: 10px;\n}\n\n@media (min-width: 150px) {\n    .message__headline {\n        font-size: 9vw;\n        line-height: 1.2em;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n}\n\n@media (min-width: 220px) {\n    .message__content {\n        padding: 10%;\n    }\n\n    .message__logo-container {\n        width: 40%;\n        margin-bottom: 10%;\n    }\n\n    .message__headline {\n        font-size: 8vw;\n    }\n\n    .message__disclaimer {\n        font-size: 4.5vw;\n        bottom: 10%;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    padding: 8%;\n}\n\n.message__logo-container {\n    width: 70%;\n    margin-bottom: 12%;\n}\n\n.message__headline {\n    font-size: 1.1rem;\n    line-height: 1.3em;\n    margin-bottom: 24%;\n}\n\n.message__sub-headline {\n    font-size: 1.1rem;\n    line-height: 1.3em;\n    margin-bottom: 40%;\n    margin-bottom: 24%;\n}\n\n.message__disclaimer {\n    position: absolute;\n    bottom: 4%;\n    font-size: 0.75rem;\n}\n\n.message__disclaimer span.multi:nth-of-type(1) {\n    display: none;\n}\n\n@media (max-aspect-ratio: 11/40) {\n    .message__logo-container {\n        margin: 15% 0 30%;\n    }\n\n    .message__disclaimer {\n        position: static;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1) {\n        display: inline;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1).tag--xlarge {\n        margin-bottom: 40%;\n        display: block;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(2) {\n        display: block;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '@media (min-aspect-ratio: 80/11) {\n    .message__headline span.multi:nth-of-type(2),\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        font-size: 0.625rem;\n    }\n\n    .message__logo-container {\n        flex: 0 0 22%;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 240px) {\n    .message__messaging {\n        line-height: 0.9;\n    }\n\n    .message__headline {\n        font-size: 4vw;\n        line-height: 1.1;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: inline;\n    }\n\n    .message__disclaimer {\n        padding-right: 10%;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 280px) {\n    .message__disclaimer {\n        padding-right: 2%;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 360px) {\n    .message__messaging {\n        line-height: 1;\n    }\n\n    .message__disclaimer {\n        font-size: 0.75rem;\n    }\n}\n\n/*IE specific*/\n@media (min-aspect-ratio: 80/11) and (-ms-high-contrast: none) and (min-width: 360px) {\n    .message__disclaimer {\n        line-height: 1;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 500px) {\n    .message__headline {\n        font-size: 3vw;\n        padding-right: 12%;\n        margin: 0 0 1% 0;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        font-size: 0.75rem;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 600px) {\n    .message__disclaimer {\n        font-size: 0.9rem;\n    }\n}\n\n/*IE specific*/\n@media (min-aspect-ratio: 80/11) and (-ms-high-contrast: none) and (min-width: 500px) {\n    .message__disclaimer {\n        font-size: 2vw;\n        line-height: 1.6em;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '@media (min-aspect-ratio: 200/11) {\n    .message__logo-container {\n        flex: 1 0 25%;\n    }\n\n    .message__logo {\n        width: 40%;\n    }\n\n    .message__messaging {\n        flex: 1 1 85%;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .message__headline {\n        flex: 1 1 60%;\n        font-size: 0.9rem;\n        line-height: 1;\n        margin: 0;\n    }\n\n    .message__disclaimer {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: 12rem;\n        padding: 0;\n        font-size: 1.9vw;\n        line-height: 1.1;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 400px) {\n    .message__headline {\n        font-size: 1rem;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 500px) {\n    .message__disclaimer {\n        font-size: 0.625rem;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 600px) {\n    .message__logo-container {\n        flex: 1 0 10%;\n    }\n\n    .message__logo {\n        width: 60%;\n    }\n\n    .message__headline {\n        font-size: 1.8vw;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        padding-right: 1rem;\n        font-size: 0.75rem;\n        line-height: 1.2;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 1000px) {\n    .message__disclaimer {\n        font-size: 0.9rem;\n        max-width: 14rem;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: white;\n}\n\n.message__background {\n    background: linear-gradient(-55deg, #009cde -20%, #003087 80%);\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: #0070ba;\n}\n\n.message__background {\n    background: #eaeced;\n}\n';
        },
        function(e, n) {
            e.exports = '.message__background {\n    background: linear-gradient(-10deg, #009cde, #003087 90%);\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: white;\n}\n\n.message__background {\n    background: #2c2e2f;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: #009cde;\n    border: 1px solid #009cde;\n}\n\n.message__background {\n    background: #ffffff;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__content {\n    color: #009cde;\n}\n\n.message__background {\n    background: #ffffff;\n}\n';
        },
        function(e, n) {
            e.exports =
                ".message {\n    overflow: hidden;\n    min-width: 150px;\n}\n\n.message * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.message__logo--svg {\n    position: relative;\n}\n\n.message__logo--svg img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n.message__logo--svg canvas {\n    display: block;\n    width: 100%;\n    visibility: hidden;\n}\n\n.message img {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n\n.message__container {\n    border: 1px solid #003087;\n    position: relative;\n}\n\n.message__content {\n    width: auto;\n    font-family: 'HelveticaNeueW02-65Medi', 'Helvetica Neue-Thin', Helvetica, Arial, 'Lucida Grande', sans-serif;\n    overflow: hidden;\n}\n\n.message__messaging {\n    padding: 0;\n    float: right;\n    text-align: left;\n}\n\n.message__logo {\n    z-index: 1;\n    height: auto;\n    width: 80%;\n}\n\n.message__logo-container {\n    position: absolute;\n    float: left;\n    padding: 10px 5px;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.message__logo-container img {\n    z-index: 1;\n}\n\n.message__headline {\n    color: #003087;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 1em;\n}\n\n.message__headline .weak {\n    font-weight: normal;\n}\n\n.message__sub-headline {\n    color: #767676;\n    font-weight: 400;\n    font-size: 13px;\n    line-height: 1em;\n}\n\n.message__disclaimer {\n    color: #767676;\n    font-size: 11px;\n    line-height: 1em;\n}\n\n.message__disclaimer .em {\n    color: #003087;\n    text-decoration: underline;\n    display: inline-block;\n    font-style: normal;\n}\n";
        },
        function(e, n) {
            e.exports =
                ".message__logo-container {\n    padding: 0 2% 0 0;\n}\n\n.message__logo-container::before,\n.message__logo-container::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    background-color: #003087;\n    transform: skewX(-9deg);\n}\n\n.message__logo-container::before {\n    height: 101%;\n    width: 105%;\n    left: -15%;\n}\n\n.message__logo-container::after {\n    height: 70%;\n    width: 160%;\n    left: -70%;\n}\n";
        },
        function(e, n) {
            e.exports =
                '.message__messaging {\n    float: none;\n}\n\n.message__logo {\n    max-width: 90%;\n}\n\n.message__logo-container {\n    width: 100%;\n    float: none;\n    position: relative;\n}\n\n.message__disclaimer .em {\n    display: block;\n    margin-left: 0;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container::before {\n    height: 120%;\n    width: 100%;\n    transform: skewY(9deg);\n    top: 0;\n    left: 0;\n    top: -30%;\n}\n';
        },
        function(e, n) {
            e.exports =
                ".message__disclaimer .em::after {\n    content: '';\n    background: transparent url(https://www.paypalobjects.com/webstatic/en_US/easypmnts/linker.jpg) no-repeat center top;\n    background-size: contain;\n    width: 15px;\n    height: 11px;\n    display: inline-block;\n    position: relative;\n    margin-bottom: -2px;\n}\n";
        },
        function(e, n) {
            e.exports =
                '.message {\n    max-width: 100%;\n    min-width: 120px;\n}\n\n.message__logo-container {\n    height: 108px;\n}\n\n.message__messaging {\n    padding: 0 8% 5%;\n}\n\n.message__headline {\n    font-size: 16px;\n    margin-bottom: 30px;\n    line-height: 1.1em;\n}\n.message__headline .em {\n    margin-right: 0;\n    display: block;\n}\n\n.message__sub-headline {\n    font-size: 15px;\n    margin-bottom: 40px;\n    color: #009cde;\n}\n\n.message__disclaimer .em {\n    color: #666666;\n    display: block;\n}\n\n@media (max-width: 160px) {\n    .message__headline {\n        margin-bottom: 16px;\n    }\n\n    .message__sub-headline {\n        margin-bottom: 16px;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    max-width: 100%;\n    min-width: 180px;\n}\n\n.message__logo-container {\n    width: 28%;\n}\n\n.message__messaging {\n    width: 70%;\n    line-height: 0;\n    padding: 0.5% 1.5% 0 1.5%;\n}\n\n.message__promo-container {\n    margin: 2px 0;\n}\n\n.message__headline {\n    display: inline;\n    font-size: 12.5px;\n    line-height: 13px;\n}\n\n.message__headline .em {\n    margin-right: 0;\n}\n\n.message__headline .weak {\n    font-weight: bold;\n}\n\n.message__sub-headline {\n    display: inline;\n    font-size: 12px;\n    color: #009cde;\n    line-height: 13px;\n}\n\n.message__disclaimer {\n    margin-bottom: 2px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    min-width: 200px;\n    max-width: 100%;\n}\n\n.message__logo-container {\n    width: 23%;\n}\n\n.message__messaging {\n    width: 74%;\n    padding: 2% 2% 0 1%;\n}\n\n.message__headline {\n    margin-bottom: 3px;\n}\n\n.message__headline .weak {\n    font-weight: bold;\n}\n\n.message__sub-headline {\n    margin-bottom: 2px;\n    color: #009cde;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    max-width: 100%;\n}\n\n.message__messaging {\n    padding: 0.5% 1% 0;\n}\n\n.message__logo {\n    max-width: unset;\n    max-height: 125%;\n}\n\n.message__logo-container {\n    width: 28%;\n    padding-right: 5%;\n}\n\n.message__messaging {\n    width: 70%;\n}\n\n.message__headline {\n    font-size: 15px;\n    margin-bottom: 6px;\n}\n\n.message__sub-headline {\n    font-size: 13px;\n    color: #009cde;\n    margin-bottom: 5px;\n}\n\n.message__disclaimer {\n    font-size: 10px;\n    margin-bottom: 3px;\n}\n\n.message__disclaimer .em {\n    color: #666666;\n}\n\n@media (max-width: 290px) {\n    .message__headline {\n        font-size: 13px;\n    }\n\n    .message__sub-headline {\n        font-size: 11px;\n    }\n\n    .message__disclaimer {\n        font-size: 9px;\n    }\n}\n\n@media (max-width: 200px) {\n    .message__logo {\n        max-width: 65%;\n    }\n\n    .message__logo-container {\n        position: relative;\n        width: 100%;\n        height: auto;\n        float: none;\n        padding-top: 5px;\n    }\n\n    .message__messaging {\n        width: 100%;\n        float: none;\n        padding: 2% 5% 5%;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    min-width: 160px;\n    max-width: 100%;\n}\n\n.message__logo {\n    max-width: 60%;\n}\n\n.message__logo-container {\n    width: 23%;\n}\n\n.message__messaging {\n    width: 77%;\n    padding: 6px 1% 0;\n    margin-bottom: 3px;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline {\n    display: block;\n    margin-bottom: 6px;\n}\n\n.message__sub-headline {\n    display: inline;\n    color: #009cde;\n}\n\n.message__disclaimer {\n    display: inline;\n}\n\n.message__disclaimer em {\n    display: inline-block;\n}\n\n@media (max-width: 570px) {\n    .message__logo {\n        max-width: 70%;\n    }\n\n    .message__headline {\n        font-size: 13px;\n        margin-bottom: 3px;\n    }\n\n    .message__sub-headline {\n        font-size: 12px;\n    }\n\n    .message__disclaimer {\n        font-size: 9px;\n    }\n\n    .message__disclaimer em::after {\n        height: 8px;\n    }\n}\n\n@media (max-width: 440px) {\n    .message__logo {\n        max-width: 75%;\n    }\n\n    .message__headline {\n        font-size: 11px;\n        margin-bottom: 2px;\n    }\n\n    .message__sub-headline {\n        font-size: 10px;\n    }\n}\n\n@media (max-width: 340px) {\n    .message__messaging {\n        padding-top: 2px;\n    }\n}\n\n@media (max-width: 250px) {\n    .message__logo {\n        max-width: 50%;\n    }\n\n    .message__logo-container {\n        float: none;\n        position: relative;\n        height: auto;\n        width: 100%;\n    }\n\n    .message__messaging {\n        float: none;\n        width: 100%;\n        padding: 5% 5% 3%;\n        margin-bottom: 6px;\n    }\n\n    .message__headline {\n        font-size: 12px;\n        margin-bottom: 6px;\n    }\n\n    .message__sub-headline {\n        font-size: 11px;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    min-width: 160px;\n    min-height: 36px;\n    max-width: 100%;\n}\n\n.message__container {\n    min-height: 36px;\n}\n\n.message__logo {\n    max-width: 80px;\n    max-height: unset;\n}\n\n.message__logo-container {\n    width: 20%;\n}\n\n.message__messaging {\n    width: 77%;\n    padding: 5px 2.5% 2px 0.5%;\n    line-height: 0;\n}\n\n.message__messaging > * {\n    line-height: 1em;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline {\n    display: inline;\n}\n\n.message__sub-headline {\n    display: inline;\n    color: #767676;\n}\n\n.message__disclaimer {\n    display: inline;\n}\n\n@media (max-width: 800px) {\n    .message__messaging {\n        padding-top: 2px;\n    }\n\n    .message__disclaimer {\n        display: inline-block;\n    }\n}\n\n@media (max-width: 570px) {\n    .message__headline {\n        font-size: 13px;\n    }\n\n    .message__sub-headline {\n        font-size: 12px;\n    }\n\n    .message__disclaimer .em::after {\n        height: 8px;\n    }\n\n    .message__disclaimer {\n        font-size: 9px;\n    }\n}\n\n@media (max-width: 440px) {\n    .message__logo {\n        max-width: 90%;\n    }\n}\n\n@media (max-width: 250px) {\n    .message__logo {\n        max-width: 50%;\n    }\n\n    .message__logo-container {\n        float: none;\n        position: relative;\n        height: auto;\n        width: 100%;\n        padding: 5px 0;\n    }\n\n    .message__messaging {\n        float: none;\n        width: 100%;\n        padding: 3% 5%;\n        margin-bottom: 6px;\n    }\n\n    .message__headline {\n        display: block;\n        font-size: 12px;\n        margin-bottom: 6px;\n    }\n\n    .message__sub-headline {\n        display: block;\n        font-size: 11px;\n        margin-bottom: 6px;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__messaging {\n    padding: 0.5% 1% 0%;\n    width: 76%;\n}\n\n.message__logo-container {\n    width: 23%;\n}\n\n.message__headline {\n    font-size: 12px;\n    margin-bottom: 5px;\n}\n\n.message__sub-headline {\n    font-size: 11px;\n    color: #009cde;\n    margin-bottom: 4px;\n}\n\n.message__disclaimer {\n    font-size: 9px;\n    margin-bottom: 2px;\n}\n\n@media (max-width: 290px) {\n    .message__messaging {\n        margin-left: 3%;\n        width: 74%;\n    }\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message {\n    min-width: 118px;\n}\n\n.message__messaging {\n    padding: 5px 3px 0 3px;\n}\n\n.message__headline {\n    font-size: 10px;\n    margin-bottom: 4px;\n}\n\n.message__sub-headline {\n    font-size: 9px;\n}\n\n.message__disclaimer {\n    font-size: 8px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container {\n    width: 35%;\n}\n\n.message__messaging {\n    width: 65%;\n    padding: 2px 5px;\n    line-height: 0;\n}\n\n.message__promo-container {\n    display: inline;\n    line-height: 0;\n}\n\n.message__headline {\n    font-size: 12px;\n    margin-bottom: 4px;\n    display: block;\n}\n\n.message__sub-headline {\n    font-size: 8px;\n    display: inline;\n}\n\n.message__disclaimer {\n    font-size: 7px;\n    display: inline;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo {\n    max-width: 40%;\n}\n\n.message__logo-container {\n    height: 85px;\n}\n\n.message__logo-container::before {\n    height: 130%;\n    transform: skewY(5deg);\n}\n\n.message__messaging {\n    margin-top: 20px;\n    padding: 0 20px;\n}\n\n.message__headline {\n    font-size: 24px;\n    margin-bottom: 5px;\n}\n\n.message__sub-headline {\n    font-size: 11px;\n    line-height: 15px;\n}\n\n.message__disclaimer {\n    font-size: 8px;\n}\n\n.message__disclaimer .em {\n    display: inline;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container {\n    width: 23%;\n}\n\n.message__messaging {\n    width: 75%;\n    padding: 1px 0;\n    line-height: 0;\n}\n\n.message__promo-container {\n    display: inline;\n    line-height: 0;\n}\n\n.message__headline {\n    font-size: 10px;\n}\n\n.message__sub-headline {\n    display: inline;\n    color: #009cde;\n    font-size: 10px;\n}\n\n.message__disclaimer {\n    display: inline;\n    font-size: 9px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container {\n    width: 23%;\n}\n\n.message__messaging {\n    width: 75%;\n    padding: 4px 0;\n}\n\n.message__headline {\n    font-size: 16px;\n    margin-bottom: 2px;\n}\n\n.message__sub-headline {\n    font-size: 10px;\n}\n\n.message__disclaimer {\n    font-size: 8px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo {\n    max-width: 60%;\n}\n\n.message__logo-container {\n    width: 30%;\n    padding-right: 25px;\n}\n\n.message__messaging {\n    width: 68%;\n    padding: 6px 0;\n}\n\n.message__headline {\n    font-size: 28px;\n    margin-bottom: 8px;\n}\n\n.message__sub-headline {\n    font-size: 12px;\n    margin-bottom: 8px;\n}\n\n.message__disclaimer {\n    font-size: 9px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__logo-container {\n    width: 175px;\n}\n\n.message__messaging {\n    width: 335px;\n    padding: 30px 30px 20px 0;\n}\n\n.message__headline {\n    font-size: 26px;\n    line-height: 1.3em;\n    padding-bottom: 10px;\n}\n\n.message__sub-headline {\n    font-size: 13px;\n    line-height: 20px;\n    padding-bottom: 10px;\n}\n\n.message__disclaimer {\n    font-size: 9px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '.message__messaging {\n    padding: 3px;\n}\n\n.message__headline {\n    font-size: 13px;\n    margin-bottom: 2px;\n}\n\n.message__sub-headline {\n    font-size: 9px;\n    line-height: 13px;\n    margin-bottom: 3px;\n}\n\n.message__disclaimer {\n    font-size: 8px;\n    line-height: 10px;\n}\n';
        },
        function(e, n) {
            e.exports =
                '* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.message__logo--svg {\n    position: relative;\n}\n\n.message__logo--svg img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.message__logo--svg canvas {\n    display: block;\n    width: 100%;\n    visibility: hidden;\n}\n';
        },
        function(e, n, t) {
            t(101);
            var i = t(15);
            e.exports = i.Object.assign;
        },
        function(e, n, t) {
            var i = t(6),
                o = t(105);
            i({ target: 'Object', stat: !0, forced: Object.assign !== o }, { assign: o });
        },
        function(e, n, t) {
            var i = t(11),
                o = t(31),
                a = t(24),
                r = t(25),
                s = t(33),
                l = t(14),
                c = t(45),
                u = Object.getOwnPropertyDescriptor;
            n.f = i
                ? u
                : function(e, n) {
                      if (((e = r(e)), (n = s(n, !0)), c))
                          try {
                              return u(e, n);
                          } catch (e) {}
                      if (l(e, n)) return a(!o.f.call(e, n), e[n]);
                  };
        },
        function(e, n, t) {
            var i = t(12),
                o = /#|\.prototype\./,
                a = function(e, n) {
                    var t = s[r(e)];
                    return t == c || (t != l && ('function' == typeof n ? i(n) : !!n));
                },
                r = (a.normalize = function(e) {
                    return String(e)
                        .replace(o, '.')
                        .toLowerCase();
                }),
                s = (a.data = {}),
                l = (a.NATIVE = 'N'),
                c = (a.POLYFILL = 'P');
            e.exports = a;
        },
        function(e, n) {
            e.exports = function(e) {
                if ('function' != typeof e) throw TypeError(String(e) + ' is not a function');
                return e;
            };
        },
        function(e, n, t) {
            'use strict';
            var i = t(11),
                o = t(12),
                a = t(35),
                r = t(108),
                s = t(31),
                l = t(28),
                c = t(32),
                u = Object.assign;
            e.exports =
                !u ||
                o(function() {
                    var e = {},
                        n = {},
                        t = Symbol();
                    return (
                        (e[t] = 7),
                        'abcdefghijklmnopqrst'.split('').forEach(function(e) {
                            n[e] = e;
                        }),
                        7 != u({}, e)[t] || 'abcdefghijklmnopqrst' != a(u({}, n)).join('')
                    );
                })
                    ? function(e, n) {
                          for (var t = l(e), o = arguments.length, u = 1, d = r.f, m = s.f; o > u; )
                              for (
                                  var f, p = c(arguments[u++]), g = d ? a(p).concat(d(p)) : a(p), h = g.length, y = 0;
                                  h > y;

                              )
                                  (f = g[y++]), (i && !m.call(p, f)) || (t[f] = p[f]);
                          return t;
                      }
                    : u;
        },
        function(e, n, t) {
            var i = t(14),
                o = t(25),
                a = t(47).indexOf,
                r = t(37);
            e.exports = function(e, n) {
                var t,
                    s = o(e),
                    l = 0,
                    c = [];
                for (t in s) !i(r, t) && i(s, t) && c.push(t);
                for (; n.length > l; ) i(s, (t = n[l++])) && (~a(c, t) || c.push(t));
                return c;
            };
        },
        function(e, n, t) {
            var i = t(36),
                o = Math.max,
                a = Math.min;
            e.exports = function(e, n) {
                var t = i(e);
                return t < 0 ? o(t + n, 0) : a(t, n);
            };
        },
        function(e, n) {
            n.f = Object.getOwnPropertySymbols;
        },
        function(e, n, t) {
            t(110), t(127);
            var i = t(15);
            e.exports = i.Array.from;
        },
        function(e, n, t) {
            'use strict';
            var i = t(111).charAt,
                o = t(112),
                a = t(116),
                r = o.set,
                s = o.getterFor('String Iterator');
            a(
                String,
                'String',
                function(e) {
                    r(this, { type: 'String Iterator', string: String(e), index: 0 });
                },
                function() {
                    var e,
                        n = s(this),
                        t = n.string,
                        o = n.index;
                    return o >= t.length
                        ? { value: void 0, done: !0 }
                        : ((e = i(t, o)), (n.index += e.length), { value: e, done: !1 });
                }
            );
        },
        function(e, n, t) {
            var i = t(36),
                o = t(18),
                a = function(e) {
                    return function(n, t) {
                        var a,
                            r,
                            s = String(o(n)),
                            l = i(t),
                            c = s.length;
                        return l < 0 || l >= c
                            ? e
                                ? ''
                                : void 0
                            : (a = s.charCodeAt(l)) < 55296 ||
                              a > 56319 ||
                              l + 1 === c ||
                              (r = s.charCodeAt(l + 1)) < 56320 ||
                              r > 57343
                            ? e
                                ? s.charAt(l)
                                : a
                            : e
                            ? s.slice(l, l + 2)
                            : r - 56320 + ((a - 55296) << 10) + 65536;
                    };
                };
            e.exports = { codeAt: a(!1), charAt: a(!0) };
        },
        function(e, n, t) {
            var i,
                o,
                a,
                r = t(113),
                s = t(8),
                l = t(13),
                c = t(16),
                u = t(14),
                d = t(40),
                m = t(37);
            if (r) {
                var f = new (0, s.WeakMap)(),
                    p = f.get,
                    g = f.has,
                    h = f.set;
                (i = function(e, n) {
                    return h.call(f, e, n), n;
                }),
                    (o = function(e) {
                        return p.call(f, e) || {};
                    }),
                    (a = function(e) {
                        return g.call(f, e);
                    });
            } else {
                var y = d('state');
                (m[y] = !0),
                    (i = function(e, n) {
                        return c(e, y, n), n;
                    }),
                    (o = function(e) {
                        return u(e, y) ? e[y] : {};
                    }),
                    (a = function(e) {
                        return u(e, y);
                    });
            }
            e.exports = {
                set: i,
                get: o,
                has: a,
                enforce: function(e) {
                    return a(e) ? o(e) : i(e, {});
                },
                getterFor: function(e) {
                    return function(n) {
                        var t;
                        if (!l(n) || (t = o(n)).type !== e)
                            throw TypeError('Incompatible receiver, ' + e + ' required');
                        return t;
                    };
                }
            };
        },
        function(e, n, t) {
            var i = t(8),
                o = t(114),
                a = i.WeakMap;
            e.exports = 'function' == typeof a && /native code/.test(o.call(a));
        },
        function(e, n, t) {
            var i = t(38);
            e.exports = i('native-function-to-string', Function.toString);
        },
        function(e, n, t) {
            var i = t(8),
                o = t(16);
            e.exports = function(e, n) {
                try {
                    o(i, e, n);
                } catch (t) {
                    i[e] = n;
                }
                return n;
            };
        },
        function(e, n, t) {
            'use strict';
            var i = t(6),
                o = t(117),
                a = t(51),
                r = t(124),
                s = t(53),
                l = t(16),
                c = t(126),
                u = t(7),
                d = t(39),
                m = t(29),
                f = t(50),
                p = f.IteratorPrototype,
                g = f.BUGGY_SAFARI_ITERATORS,
                h = u('iterator'),
                y = function() {
                    return this;
                };
            e.exports = function(e, n, t, u, f, x, _) {
                o(t, n, u);
                var w,
                    v,
                    b,
                    E = function(e) {
                        if (e === f && z) return z;
                        if (!g && e in T) return T[e];
                        switch (e) {
                            case 'keys':
                            case 'values':
                            case 'entries':
                                return function() {
                                    return new t(this, e);
                                };
                        }
                        return function() {
                            return new t(this);
                        };
                    },
                    A = n + ' Iterator',
                    P = !1,
                    T = e.prototype,
                    R = T[h] || T['@@iterator'] || (f && T[f]),
                    z = (!g && R) || E(f),
                    L = ('Array' == n && T.entries) || R;
                if (
                    (L &&
                        ((w = a(L.call(new e()))),
                        p !== Object.prototype &&
                            w.next &&
                            (d || a(w) === p || (r ? r(w, p) : 'function' != typeof w[h] && l(w, h, y)),
                            s(w, A, !0, !0),
                            d && (m[A] = y))),
                    'values' == f &&
                        R &&
                        'values' !== R.name &&
                        ((P = !0),
                        (z = function() {
                            return R.call(this);
                        })),
                    (d && !_) || T[h] === z || l(T, h, z),
                    (m[n] = z),
                    f)
                )
                    if (((v = { values: E('values'), keys: x ? z : E('keys'), entries: E('entries') }), _))
                        for (b in v) (!g && !P && b in T) || c(T, b, v[b]);
                    else i({ target: n, proto: !0, forced: g || P }, v);
                return v;
            };
        },
        function(e, n, t) {
            'use strict';
            var i = t(50).IteratorPrototype,
                o = t(120),
                a = t(24),
                r = t(53),
                s = t(29),
                l = function() {
                    return this;
                };
            e.exports = function(e, n, t) {
                var c = n + ' Iterator';
                return (e.prototype = o(i, { next: a(1, t) })), r(e, c, !1, !0), (s[c] = l), e;
            };
        },
        function(e, n, t) {
            var i = t(12);
            e.exports = !i(function() {
                function e() {}
                return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype;
            });
        },
        function(e, n, t) {
            var i = t(12);
            e.exports =
                !!Object.getOwnPropertySymbols &&
                !i(function() {
                    return !String(Symbol());
                });
        },
        function(e, n, t) {
            var i = t(20),
                o = t(121),
                a = t(48),
                r = t(37),
                s = t(122),
                l = t(46),
                c = t(40)('IE_PROTO'),
                u = function() {},
                d = function() {
                    var e,
                        n = l('iframe'),
                        t = a.length;
                    for (
                        n.style.display = 'none',
                            s.appendChild(n),
                            n.src = String('javascript:'),
                            (e = n.contentWindow.document).open(),
                            e.write('<script>document.F=Object</script>'),
                            e.close(),
                            d = e.F;
                        t--;

                    )
                        delete d.prototype[a[t]];
                    return d();
                };
            (e.exports =
                Object.create ||
                function(e, n) {
                    var t;
                    return (
                        null !== e
                            ? ((u.prototype = i(e)), (t = new u()), (u.prototype = null), (t[c] = e))
                            : (t = d()),
                        void 0 === n ? t : o(t, n)
                    );
                }),
                (r[c] = !0);
        },
        function(e, n, t) {
            var i = t(11),
                o = t(27),
                a = t(20),
                r = t(35);
            e.exports = i
                ? Object.defineProperties
                : function(e, n) {
                      a(e);
                      for (var t, i = r(n), s = i.length, l = 0; s > l; ) o.f(e, (t = i[l++]), n[t]);
                      return e;
                  };
        },
        function(e, n, t) {
            var i = t(52);
            e.exports = i('document', 'documentElement');
        },
        function(e, n, t) {
            'use strict';
            var i = t(54),
                o = {};
            (o[t(7)('toStringTag')] = 'z'),
                (e.exports =
                    '[object z]' !== String(o)
                        ? function() {
                              return '[object ' + i(this) + ']';
                          }
                        : o.toString);
        },
        function(e, n, t) {
            var i = t(20),
                o = t(125);
            e.exports =
                Object.setPrototypeOf ||
                ('__proto__' in {}
                    ? (function() {
                          var e,
                              n = !1,
                              t = {};
                          try {
                              (e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(t, []),
                                  (n = t instanceof Array);
                          } catch (e) {}
                          return function(t, a) {
                              return i(t), o(a), n ? e.call(t, a) : (t.__proto__ = a), t;
                          };
                      })()
                    : void 0);
        },
        function(e, n, t) {
            var i = t(13);
            e.exports = function(e) {
                if (!i(e) && null !== e) throw TypeError("Can't set " + String(e) + ' as a prototype');
                return e;
            };
        },
        function(e, n, t) {
            var i = t(16);
            e.exports = function(e, n, t, o) {
                o && o.enumerable ? (e[n] = t) : i(e, n, t);
            };
        },
        function(e, n, t) {
            var i = t(6),
                o = t(128);
            i(
                {
                    target: 'Array',
                    stat: !0,
                    forced: !t(133)(function(e) {
                        Array.from(e);
                    })
                },
                { from: o }
            );
        },
        function(e, n, t) {
            'use strict';
            var i = t(34),
                o = t(28),
                a = t(129),
                r = t(130),
                s = t(21),
                l = t(131),
                c = t(132);
            e.exports = function(e) {
                var n,
                    t,
                    u,
                    d,
                    m = o(e),
                    f = 'function' == typeof this ? this : Array,
                    p = arguments.length,
                    g = p > 1 ? arguments[1] : void 0,
                    h = void 0 !== g,
                    y = 0,
                    x = c(m);
                if ((h && (g = i(g, p > 2 ? arguments[2] : void 0, 2)), null == x || (f == Array && r(x))))
                    for (t = new f((n = s(m.length))); n > y; y++) l(t, y, h ? g(m[y], y) : m[y]);
                else
                    for (d = x.call(m), t = new f(); !(u = d.next()).done; y++)
                        l(t, y, h ? a(d, g, [u.value, y], !0) : u.value);
                return (t.length = y), t;
            };
        },
        function(e, n, t) {
            var i = t(20);
            e.exports = function(e, n, t, o) {
                try {
                    return o ? n(i(t)[0], t[1]) : n(t);
                } catch (n) {
                    var a = e.return;
                    throw (void 0 !== a && i(a.call(e)), n);
                }
            };
        },
        function(e, n, t) {
            var i = t(7),
                o = t(29),
                a = i('iterator'),
                r = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (o.Array === e || r[a] === e);
            };
        },
        function(e, n, t) {
            'use strict';
            var i = t(33),
                o = t(27),
                a = t(24);
            e.exports = function(e, n, t) {
                var r = i(n);
                r in e ? o.f(e, r, a(0, t)) : (e[r] = t);
            };
        },
        function(e, n, t) {
            var i = t(54),
                o = t(29),
                a = t(7)('iterator');
            e.exports = function(e) {
                if (null != e) return e[a] || e['@@iterator'] || o[i(e)];
            };
        },
        function(e, n, t) {
            var i = t(7)('iterator'),
                o = !1;
            try {
                var a = 0,
                    r = {
                        next: function() {
                            return { done: !!a++ };
                        },
                        return: function() {
                            o = !0;
                        }
                    };
                (r[i] = function() {
                    return this;
                }),
                    Array.from(r, function() {
                        throw 2;
                    });
            } catch (e) {}
            e.exports = function(e, n) {
                if (!n && !o) return !1;
                var t = !1;
                try {
                    var a = {};
                    (a[i] = function() {
                        return {
                            next: function() {
                                return { done: (t = !0) };
                            }
                        };
                    }),
                        e(a);
                } catch (e) {}
                return t;
            };
        },
        function(e, n, t) {
            t(135);
            var i = t(22);
            e.exports = i('String', 'startsWith');
        },
        function(e, n, t) {
            'use strict';
            var i = t(6),
                o = t(21),
                a = t(41),
                r = t(18),
                s = t(42),
                l = ''.startsWith,
                c = Math.min;
            i(
                { target: 'String', proto: !0, forced: !s('startsWith') },
                {
                    startsWith: function(e) {
                        var n = String(r(this));
                        a(e);
                        var t = o(c(arguments.length > 1 ? arguments[1] : void 0, n.length)),
                            i = String(e);
                        return l ? l.call(n, i, t) : n.slice(t, t + i.length) === i;
                    }
                }
            );
        },
        function(e, n, t) {
            var i = t(13),
                o = t(26),
                a = t(7)('match');
            e.exports = function(e) {
                var n;
                return i(e) && (void 0 !== (n = e[a]) ? !!n : 'RegExp' == o(e));
            };
        },
        function(e, n, t) {
            t(138);
            var i = t(15);
            e.exports = i.Object.values;
        },
        function(e, n, t) {
            var i = t(6),
                o = t(55).values;
            i(
                { target: 'Object', stat: !0 },
                {
                    values: function(e) {
                        return o(e);
                    }
                }
            );
        },
        function(e, n, t) {
            t(140);
            var i = t(22);
            e.exports = i('Array', 'includes');
        },
        function(e, n, t) {
            'use strict';
            var i = t(6),
                o = t(47).includes,
                a = t(56);
            i(
                { target: 'Array', proto: !0 },
                {
                    includes: function(e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    }
                }
            ),
                a('includes');
        },
        function(e, n, t) {
            'undefined' != typeof self && self,
                (e.exports = (function(e) {
                    var n = {};
                    function t(i) {
                        if (n[i]) return n[i].exports;
                        var o = (n[i] = { i: i, l: !1, exports: {} });
                        return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
                    }
                    return (
                        (t.m = e),
                        (t.c = n),
                        (t.d = function(e, n, i) {
                            t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i });
                        }),
                        (t.n = function(e) {
                            var n =
                                e && e.__esModule
                                    ? function() {
                                          return e.default;
                                      }
                                    : function() {
                                          return e;
                                      };
                            return t.d(n, 'a', n), n;
                        }),
                        (t.o = function(e, n) {
                            return {}.hasOwnProperty.call(e, n);
                        }),
                        (t.p = ''),
                        t((t.s = './src/index.js'))
                    );
                })({
                    './src/index.js': function(e, n, t) {
                        'use strict';
                        function i(e) {
                            try {
                                if (!e) return !1;
                                if ('undefined' != typeof Promise && e instanceof Promise) return !0;
                                if ('undefined' != typeof window && window.Window && e instanceof window.Window)
                                    return !1;
                                if (
                                    'undefined' != typeof window &&
                                    window.constructor &&
                                    e instanceof window.constructor
                                )
                                    return !1;
                                var n = {}.toString;
                                if (n) {
                                    var t = n.call(e);
                                    if (
                                        '[object Window]' === t ||
                                        '[object global]' === t ||
                                        '[object DOMWindow]' === t
                                    )
                                        return !1;
                                }
                                if ('function' == typeof e.then) return !0;
                            } catch (e) {
                                return !1;
                            }
                            return !1;
                        }
                        Object.defineProperty(n, '__esModule', { value: !0 });
                        var o = [],
                            a = [],
                            r = 0,
                            s = void 0;
                        function l() {
                            if (!r && s) {
                                var e = s;
                                (s = null), e.resolve();
                            }
                        }
                        function c() {
                            r += 1;
                        }
                        function u() {
                            (r -= 1), l();
                        }
                        var d = (function() {
                            function e(n) {
                                var t = this;
                                if (
                                    ((function(n, t) {
                                        if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function');
                                    })(this),
                                    (this.resolved = !1),
                                    (this.rejected = !1),
                                    (this.errorHandled = !1),
                                    (this.handlers = []),
                                    n)
                                ) {
                                    var i = void 0,
                                        o = void 0,
                                        a = !1,
                                        r = !1,
                                        s = !1;
                                    c();
                                    try {
                                        n(
                                            function(e) {
                                                s ? t.resolve(e) : ((a = !0), (i = e));
                                            },
                                            function(e) {
                                                s ? t.reject(e) : ((r = !0), (o = e));
                                            }
                                        );
                                    } catch (e) {
                                        return u(), void this.reject(e);
                                    }
                                    u(), (s = !0), a ? this.resolve(i) : r && this.reject(o);
                                }
                            }
                            return (
                                (e.prototype.resolve = function(e) {
                                    if (this.resolved || this.rejected) return this;
                                    if (i(e)) throw new Error('Can not resolve promise with another promise');
                                    return (this.resolved = !0), (this.value = e), this.dispatch(), this;
                                }),
                                (e.prototype.reject = function(e) {
                                    var n = this;
                                    if (this.resolved || this.rejected) return this;
                                    if (i(e)) throw new Error('Can not reject promise with another promise');
                                    if (!e) {
                                        var t =
                                            e && 'function' == typeof e.toString ? e.toString() : {}.toString.call(e);
                                        e = new Error('Expected reject to be called with Error, got ' + t);
                                    }
                                    return (
                                        (this.rejected = !0),
                                        (this.error = e),
                                        this.errorHandled ||
                                            setTimeout(function() {
                                                n.errorHandled ||
                                                    (function(e, n) {
                                                        if (-1 === o.indexOf(e)) {
                                                            o.push(e),
                                                                setTimeout(function() {
                                                                    throw e;
                                                                }, 1);
                                                            for (var t = 0; t < a.length; t++) a[t](e, n);
                                                        }
                                                    })(e, n);
                                            }, 1),
                                        this.dispatch(),
                                        this
                                    );
                                }),
                                (e.prototype.asyncReject = function(e) {
                                    return (this.errorHandled = !0), this.reject(e), this;
                                }),
                                (e.prototype.dispatch = function() {
                                    var n = this,
                                        t = this.resolved,
                                        o = this.rejected,
                                        a = this.handlers;
                                    if (!this.dispatching && (t || o)) {
                                        (this.dispatching = !0), c();
                                        for (
                                            var r = function(r) {
                                                    var s = a[r],
                                                        l = s.onSuccess,
                                                        c = s.onError,
                                                        u = s.promise,
                                                        d = void 0;
                                                    if (t)
                                                        try {
                                                            d = l ? l(n.value) : n.value;
                                                        } catch (e) {
                                                            return u.reject(e), 'continue';
                                                        }
                                                    else if (o) {
                                                        if (!c) return u.reject(n.error), 'continue';
                                                        try {
                                                            d = c(n.error);
                                                        } catch (e) {
                                                            return u.reject(e), 'continue';
                                                        }
                                                    }
                                                    d instanceof e && (d.resolved || d.rejected)
                                                        ? (d.resolved ? u.resolve(d.value) : u.reject(d.error),
                                                          (d.errorHandled = !0))
                                                        : i(d)
                                                        ? d instanceof e && (d.resolved || d.rejected)
                                                            ? d.resolved
                                                                ? u.resolve(d.value)
                                                                : u.reject(d.error)
                                                            : d.then(
                                                                  function(e) {
                                                                      u.resolve(e);
                                                                  },
                                                                  function(e) {
                                                                      u.reject(e);
                                                                  }
                                                              )
                                                        : u.resolve(d);
                                                },
                                                s = 0;
                                            s < a.length;
                                            s++
                                        )
                                            r(s);
                                        (a.length = 0), (this.dispatching = !1), u();
                                    }
                                }),
                                (e.prototype.then = function(n, t) {
                                    if (n && 'function' != typeof n && !n.call)
                                        throw new Error('Promise.then expected a function for success handler');
                                    if (t && 'function' != typeof t && !t.call)
                                        throw new Error('Promise.then expected a function for error handler');
                                    var i = new e();
                                    return (
                                        this.handlers.push({ promise: i, onSuccess: n, onError: t }),
                                        (this.errorHandled = !0),
                                        this.dispatch(),
                                        i
                                    );
                                }),
                                (e.prototype.catch = function(e) {
                                    return this.then(void 0, e);
                                }),
                                (e.prototype.finally = function(n) {
                                    if (n && 'function' != typeof n && !n.call)
                                        throw new Error('Promise.finally expected a function');
                                    return this.then(
                                        function(t) {
                                            return e.try(n).then(function() {
                                                return t;
                                            });
                                        },
                                        function(t) {
                                            return e.try(n).then(function() {
                                                throw t;
                                            });
                                        }
                                    );
                                }),
                                (e.prototype.timeout = function(e, n) {
                                    var t = this;
                                    if (this.resolved || this.rejected) return this;
                                    var i = setTimeout(function() {
                                        t.resolved ||
                                            t.rejected ||
                                            t.reject(n || new Error('Promise timed out after ' + e + 'ms'));
                                    }, e);
                                    return this.then(function(e) {
                                        return clearTimeout(i), e;
                                    });
                                }),
                                (e.prototype.toPromise = function() {
                                    if ('undefined' == typeof Promise) throw new TypeError('Could not find Promise');
                                    return Promise.resolve(this);
                                }),
                                (e.resolve = function(n) {
                                    return n instanceof e
                                        ? n
                                        : i(n)
                                        ? new e(function(e, t) {
                                              return n.then(e, t);
                                          })
                                        : new e().resolve(n);
                                }),
                                (e.reject = function(n) {
                                    return new e().reject(n);
                                }),
                                (e.asyncReject = function(n) {
                                    return new e().asyncReject(n);
                                }),
                                (e.all = function(n) {
                                    var t = new e(),
                                        o = n.length,
                                        a = [];
                                    if (!o) return t.resolve(a), t;
                                    for (
                                        var r = function(r) {
                                                var s = n[r];
                                                if (s instanceof e) {
                                                    if (s.resolved) return (a[r] = s.value), (o -= 1), 'continue';
                                                } else if (!i(s)) return (a[r] = s), (o -= 1), 'continue';
                                                e.resolve(s).then(
                                                    function(e) {
                                                        (a[r] = e), 0 == (o -= 1) && t.resolve(a);
                                                    },
                                                    function(e) {
                                                        t.reject(e);
                                                    }
                                                );
                                            },
                                            s = 0;
                                        s < n.length;
                                        s++
                                    )
                                        r(s);
                                    return 0 === o && t.resolve(a), t;
                                }),
                                (e.hash = function(n) {
                                    var t = {};
                                    return e
                                        .all(
                                            Object.keys(n).map(function(i) {
                                                return e.resolve(n[i]).then(function(e) {
                                                    t[i] = e;
                                                });
                                            })
                                        )
                                        .then(function() {
                                            return t;
                                        });
                                }),
                                (e.map = function(n, t) {
                                    return e.all(n.map(t));
                                }),
                                (e.onPossiblyUnhandledException = function(e) {
                                    return (function(e) {
                                        return (
                                            a.push(e),
                                            {
                                                cancel: function() {
                                                    a.splice(a.indexOf(e), 1);
                                                }
                                            }
                                        );
                                    })(e);
                                }),
                                (e.try = function(n, t, i) {
                                    if (n && 'function' != typeof n && !n.call)
                                        throw new Error('Promise.try expected a function');
                                    var o = void 0;
                                    c();
                                    try {
                                        o = n.apply(t, i || []);
                                    } catch (n) {
                                        return u(), e.reject(n);
                                    }
                                    return u(), e.resolve(o);
                                }),
                                (e.delay = function(n) {
                                    return new e(function(e) {
                                        setTimeout(e, n);
                                    });
                                }),
                                (e.isPromise = function(n) {
                                    return !!(n && n instanceof e) || i(n);
                                }),
                                (e.flush = function() {
                                    return (n = s = s || new e()), l(), n;
                                    var n;
                                }),
                                e
                            );
                        })();
                        t.d(n, 'ZalgoPromise', function() {
                            return d;
                        });
                    }
                }));
        },
        function(e, n, t) {
            t(143);
            var i = t(15);
            e.exports = i.Object.entries;
        },
        function(e, n, t) {
            var i = t(6),
                o = t(55).entries;
            i(
                { target: 'Object', stat: !0 },
                {
                    entries: function(e) {
                        return o(e);
                    }
                }
            );
        },
        function(e, n, t) {
            t(145);
            var i = t(22);
            e.exports = i('String', 'includes');
        },
        function(e, n, t) {
            'use strict';
            var i = t(6),
                o = t(41),
                a = t(18);
            i(
                { target: 'String', proto: !0, forced: !t(42)('includes') },
                {
                    includes: function(e) {
                        return !!~String(a(this)).indexOf(o(e), arguments.length > 1 ? arguments[1] : void 0);
                    }
                }
            );
        },
        function(e, n, t) {
            t(147);
            var i = t(22);
            e.exports = i('Array', 'find');
        },
        function(e, n, t) {
            'use strict';
            var i = t(6),
                o = t(148).find,
                a = t(56),
                r = !0;
            'find' in [] &&
                Array(1).find(function() {
                    r = !1;
                }),
                i(
                    { target: 'Array', proto: !0, forced: r },
                    {
                        find: function(e) {
                            return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
                        }
                    }
                ),
                a('find');
        },
        function(e, n, t) {
            var i = t(34),
                o = t(32),
                a = t(28),
                r = t(21),
                s = t(149),
                l = [].push,
                c = function(e) {
                    var n = 1 == e,
                        t = 2 == e,
                        c = 3 == e,
                        u = 4 == e,
                        d = 6 == e,
                        m = 5 == e || d;
                    return function(f, p, g, h) {
                        for (
                            var y,
                                x,
                                _ = a(f),
                                w = o(_),
                                v = i(p, g, 3),
                                b = r(w.length),
                                E = 0,
                                A = h || s,
                                P = n ? A(f, b) : t ? A(f, 0) : void 0;
                            b > E;
                            E++
                        )
                            if ((m || E in w) && ((x = v((y = w[E]), E, _)), e))
                                if (n) P[E] = x;
                                else if (x)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return y;
                                        case 6:
                                            return E;
                                        case 2:
                                            l.call(P, y);
                                    }
                                else if (u) return !1;
                        return d ? -1 : c || u ? u : P;
                    };
                };
            e.exports = {
                forEach: c(0),
                map: c(1),
                filter: c(2),
                some: c(3),
                every: c(4),
                find: c(5),
                findIndex: c(6)
            };
        },
        function(e, n, t) {
            var i = t(13),
                o = t(150),
                a = t(7)('species');
            e.exports = function(e, n) {
                var t;
                return (
                    o(e) &&
                        ('function' != typeof (t = e.constructor) || (t !== Array && !o(t.prototype))
                            ? i(t) && null === (t = t[a]) && (t = void 0)
                            : (t = void 0)),
                    new (void 0 === t ? Array : t)(0 === n ? 0 : n)
                );
            };
        },
        function(e, n, t) {
            var i = t(26);
            e.exports =
                Array.isArray ||
                function(e) {
                    return 'Array' == i(e);
                };
        },
        function(e, n, t) {
            t(152);
            var i = t(22);
            e.exports = i('String', 'endsWith');
        },
        function(e, n, t) {
            'use strict';
            var i = t(6),
                o = t(21),
                a = t(41),
                r = t(18),
                s = t(42),
                l = ''.endsWith,
                c = Math.min;
            i(
                { target: 'String', proto: !0, forced: !s('endsWith') },
                {
                    endsWith: function(e) {
                        var n = String(r(this));
                        a(e);
                        var t = arguments.length > 1 ? arguments[1] : void 0,
                            i = o(n.length),
                            s = void 0 === t ? i : c(o(t), i),
                            u = String(e);
                        return l ? l.call(n, u, s) : n.slice(s - u.length, s) === u;
                    }
                }
            );
        },
        function(e, n, t) {
            t(154);
            var i = t(15);
            e.exports = i.Number.isNaN;
        },
        function(e, n, t) {
            t(6)(
                { target: 'Number', stat: !0 },
                {
                    isNaN: function(e) {
                        return e != e;
                    }
                }
            );
        },
        function(e, n, t) {
            'use strict';
            t.r(n);
            var i = {};
            function o() {
                return (o =
                    Object.assign ||
                    function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var i in t) ({}.hasOwnProperty.call(t, i) && (e[i] = t[i]));
                        }
                        return e;
                    }).apply(this, arguments);
            }
            t.r(i),
                t.d(i, 'WeakMap', function() {
                    return b;
                });
            var a = t(4),
                r = t.n(a);
            function s(e, n) {
                if (null == e) return {};
                var t,
                    i,
                    o = {},
                    a = Object.keys(e);
                for (i = 0; i < a.length; i++) n.indexOf((t = a[i])) >= 0 || (o[t] = e[t]);
                return o;
            }
            var l = { MOCK: 'mock:', FILE: 'file:', ABOUT: 'about:' },
                c = 'Call was rejected by callee.\r\n';
            function u(e) {
                return void 0 === e && (e = window), e.location.protocol === l.ABOUT;
            }
            function d(e) {
                try {
                    return !0;
                } catch (e) {}
                return !1;
            }
            function m(e) {
                var n = (e = e || window).location;
                if (!n) throw new Error('Can not read window location');
                var t = n.protocol;
                if (!t) throw new Error('Can not read window protocol');
                if (t === l.FILE) return l.FILE + '//';
                if (t === l.ABOUT) {
                    var i = (function(e) {
                        if ((void 0 === e && (e = window), e))
                            try {
                                if (e.parent && e.parent !== e) return e.parent;
                            } catch (e) {}
                    })(e);
                    return i && d() ? m(i) : l.ABOUT + '//';
                }
                var o = n.host;
                if (!o) throw new Error('Can not read window host');
                return t + '//' + o;
            }
            function f(e) {
                var n = m((e = e || window));
                return n && e.mockDomain && 0 === e.mockDomain.indexOf(l.MOCK) ? e.mockDomain : n;
            }
            var p = [],
                g = [];
            function h(e, n) {
                void 0 === n && (n = !0);
                try {
                    if (e === window) return !1;
                } catch (e) {
                    return !0;
                }
                try {
                    if (!e) return !0;
                } catch (e) {
                    return !0;
                }
                try {
                    if (e.closed) return !0;
                } catch (e) {
                    return !e || e.message !== c;
                }
                if (
                    n &&
                    (function(e) {
                        if (
                            !(function(e) {
                                try {
                                    if (e === window) return !0;
                                } catch (e) {}
                                try {
                                    var n = Object.getOwnPropertyDescriptor(e, 'location');
                                    if (n && !1 === n.enumerable) return !1;
                                } catch (e) {}
                                try {
                                    if (u(e) && d()) return !0;
                                } catch (e) {}
                                try {
                                    if (m(e) === m(window)) return !0;
                                } catch (e) {}
                                return !1;
                            })(e)
                        )
                            return !1;
                        try {
                            if (e === window) return !0;
                            if (u(e) && d()) return !0;
                            if (f(window) === f(e)) return !0;
                        } catch (e) {}
                        return !1;
                    })(e)
                )
                    try {
                        if (e.mockclosed) return !0;
                    } catch (e) {}
                try {
                    if (!e.parent || !e.top) return !0;
                } catch (e) {}
                var t = (function(e, n) {
                    for (var t = 0; t < e.length; t++)
                        try {
                            if (e[t] === n) return t;
                        } catch (e) {}
                    return -1;
                })(p, e);
                if (-1 !== t) {
                    var i = g[t];
                    if (
                        i &&
                        (function(e) {
                            if (!e.contentWindow) return !0;
                            if (!e.parentNode) return !0;
                            var n = e.ownerDocument;
                            return !(!n || !n.documentElement || n.documentElement.contains(e));
                        })(i)
                    )
                        return !0;
                }
                return !1;
            }
            function y(e) {
                try {
                    if (e === window) return !0;
                } catch (e) {
                    if (e && e.message === c) return !0;
                }
                try {
                    if ('[object Window]' === {}.toString.call(e)) return !0;
                } catch (e) {
                    if (e && e.message === c) return !0;
                }
                try {
                    if (window.Window && e instanceof window.Window) return !0;
                } catch (e) {
                    if (e && e.message === c) return !0;
                }
                try {
                    if (e && e.self === e) return !0;
                } catch (e) {
                    if (e && e.message === c) return !0;
                }
                try {
                    if (e && e.parent === e) return !0;
                } catch (e) {
                    if (e && e.message === c) return !0;
                }
                try {
                    if (e && e.top === e) return !0;
                } catch (e) {
                    if (e && e.message === c) return !0;
                }
                try {
                    if (e && '__unlikely_value__' === e.__cross_domain_utils_window_check__) return !1;
                } catch (e) {
                    return !0;
                }
                return !1;
            }
            function x(e, n) {
                for (var t = 0; t < e.length; t++)
                    try {
                        if (e[t] === n) return t;
                    } catch (e) {}
                return -1;
            }
            var _,
                w = Object.defineProperty,
                v = Date.now() % 1e9,
                b = (function() {
                    function e() {
                        if (
                            ((this.name = void 0),
                            (this.weakmap = void 0),
                            (this.keys = void 0),
                            (this.values = void 0),
                            (v += 1),
                            (this.name = '__weakmap_' + ((1e9 * Math.random()) >>> 0) + '__' + v),
                            (function() {
                                if ('undefined' == typeof WeakMap) return !1;
                                if (void 0 === Object.freeze) return !1;
                                try {
                                    var e = new WeakMap(),
                                        n = {};
                                    return Object.freeze(n), e.set(n, '__testvalue__'), '__testvalue__' === e.get(n);
                                } catch (e) {
                                    return !1;
                                }
                            })())
                        )
                            try {
                                this.weakmap = new WeakMap();
                            } catch (e) {}
                        (this.keys = []), (this.values = []);
                    }
                    var n = e.prototype;
                    return (
                        (n._cleanupClosedWindows = function() {
                            for (var e = this.weakmap, n = this.keys, t = 0; t < n.length; t++) {
                                var i = n[t];
                                if (y(i) && h(i)) {
                                    if (e)
                                        try {
                                            e.delete(i);
                                        } catch (e) {}
                                    n.splice(t, 1), this.values.splice(t, 1), (t -= 1);
                                }
                            }
                        }),
                        (n.isSafeToReadWrite = function(e) {
                            return !y(e);
                        }),
                        (n.set = function(e, n) {
                            if (!e) throw new Error('WeakMap expected key');
                            var t = this.weakmap;
                            if (t)
                                try {
                                    t.set(e, n);
                                } catch (e) {
                                    delete this.weakmap;
                                }
                            if (this.isSafeToReadWrite(e))
                                try {
                                    var i = this.name,
                                        o = e[i];
                                    return void (o && o[0] === e
                                        ? (o[1] = n)
                                        : w(e, i, { value: [e, n], writable: !0 }));
                                } catch (e) {}
                            this._cleanupClosedWindows();
                            var a = this.keys,
                                r = this.values,
                                s = x(a, e);
                            -1 === s ? (a.push(e), r.push(n)) : (r[s] = n);
                        }),
                        (n.get = function(e) {
                            if (!e) throw new Error('WeakMap expected key');
                            var n = this.weakmap;
                            if (n)
                                try {
                                    if (n.has(e)) return n.get(e);
                                } catch (e) {
                                    delete this.weakmap;
                                }
                            if (this.isSafeToReadWrite(e))
                                try {
                                    var t = e[this.name];
                                    return t && t[0] === e ? t[1] : void 0;
                                } catch (e) {}
                            this._cleanupClosedWindows();
                            var i = x(this.keys, e);
                            if (-1 !== i) return this.values[i];
                        }),
                        (n.delete = function(e) {
                            if (!e) throw new Error('WeakMap expected key');
                            var n = this.weakmap;
                            if (n)
                                try {
                                    n.delete(e);
                                } catch (e) {
                                    delete this.weakmap;
                                }
                            if (this.isSafeToReadWrite(e))
                                try {
                                    var t = e[this.name];
                                    t && t[0] === e && (t[0] = t[1] = void 0);
                                } catch (e) {}
                            this._cleanupClosedWindows();
                            var i = this.keys,
                                o = x(i, e);
                            -1 !== o && (i.splice(o, 1), this.values.splice(o, 1));
                        }),
                        (n.has = function(e) {
                            if (!e) throw new Error('WeakMap expected key');
                            var n = this.weakmap;
                            if (n)
                                try {
                                    if (n.has(e)) return !0;
                                } catch (e) {
                                    delete this.weakmap;
                                }
                            if (this.isSafeToReadWrite(e))
                                try {
                                    var t = e[this.name];
                                    return !(!t || t[0] !== e);
                                } catch (e) {}
                            return this._cleanupClosedWindows(), -1 !== x(this.keys, e);
                        }),
                        (n.getOrSet = function(e, n) {
                            if (this.has(e)) return this.get(e);
                            var t = n();
                            return this.set(e, t), t;
                        }),
                        e
                    );
                })();
            Object.create(Error.prototype);
            ((_ = {}).AD = ['en', 'fr', 'es', 'zh']),
                (_.AE = ['en', 'fr', 'es', 'zh', 'ar']),
                (_.AG = ['en', 'fr', 'es', 'zh']),
                (_.AI = ['en', 'fr', 'es', 'zh']),
                (_.AL = ['en']),
                (_.AM = ['en', 'fr', 'es', 'zh']),
                (_.AN = ['en', 'fr', 'es', 'zh']),
                (_.AO = ['en', 'fr', 'es', 'zh']),
                (_.AR = ['es', 'en']),
                (_.AT = ['de', 'en']),
                (_.AU = ['en']),
                (_.AW = ['en', 'fr', 'es', 'zh']),
                (_.AZ = ['en', 'fr', 'es', 'zh']),
                (_.BA = ['en']),
                (_.BB = ['en', 'fr', 'es', 'zh']),
                (_.BE = ['en', 'nl', 'fr']),
                (_.BF = ['fr', 'en', 'es', 'zh']),
                (_.BG = ['en']),
                (_.BH = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.BI = ['fr', 'en', 'es', 'zh']),
                (_.BJ = ['fr', 'en', 'es', 'zh']),
                (_.BM = ['en', 'fr', 'es', 'zh']),
                (_.BN = ['en']),
                (_.BO = ['es', 'en', 'fr', 'zh']),
                (_.BR = ['pt', 'en']),
                (_.BS = ['en', 'fr', 'es', 'zh']),
                (_.BT = ['en']),
                (_.BW = ['en', 'fr', 'es', 'zh']),
                (_.BY = ['en']),
                (_.BZ = ['en', 'es', 'fr', 'zh']),
                (_.CA = ['en', 'fr']),
                (_.CD = ['fr', 'en', 'es', 'zh']),
                (_.CG = ['en', 'fr', 'es', 'zh']),
                (_.CH = ['de', 'fr', 'en']),
                (_.CI = ['fr', 'en']),
                (_.CK = ['en', 'fr', 'es', 'zh']),
                (_.CL = ['es', 'en', 'fr', 'zh']),
                (_.CM = ['fr', 'en']),
                (_.CN = ['zh']),
                (_.CO = ['es', 'en', 'fr', 'zh']),
                (_.CR = ['es', 'en', 'fr', 'zh']),
                (_.CV = ['en', 'fr', 'es', 'zh']),
                (_.CY = ['en']),
                (_.CZ = ['cs', 'en', 'fr', 'es', 'zh']),
                (_.DE = ['de', 'en']),
                (_.DJ = ['fr', 'en', 'es', 'zh']),
                (_.DK = ['da', 'en']),
                (_.DM = ['en', 'fr', 'es', 'zh']),
                (_.DO = ['es', 'en', 'fr', 'zh']),
                (_.DZ = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.EC = ['es', 'en', 'fr', 'zh']),
                (_.EE = ['en', 'ru', 'fr', 'es', 'zh']),
                (_.EG = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.ER = ['en', 'fr', 'es', 'zh']),
                (_.ES = ['es', 'en']),
                (_.ET = ['en', 'fr', 'es', 'zh']),
                (_.FI = ['fi', 'en', 'fr', 'es', 'zh']),
                (_.FJ = ['en', 'fr', 'es', 'zh']),
                (_.FK = ['en', 'fr', 'es', 'zh']),
                (_.FM = ['en']),
                (_.FO = ['da', 'en', 'fr', 'es', 'zh']),
                (_.FR = ['fr', 'en']),
                (_.GA = ['fr', 'en', 'es', 'zh']),
                (_.GB = ['en']),
                (_.GD = ['en', 'fr', 'es', 'zh']),
                (_.GE = ['en', 'fr', 'es', 'zh']),
                (_.GF = ['en', 'fr', 'es', 'zh']),
                (_.GI = ['en', 'fr', 'es', 'zh']),
                (_.GL = ['da', 'en', 'fr', 'es', 'zh']),
                (_.GM = ['en', 'fr', 'es', 'zh']),
                (_.GN = ['fr', 'en', 'es', 'zh']),
                (_.GP = ['en', 'fr', 'es', 'zh']),
                (_.GR = ['el', 'en', 'fr', 'es', 'zh']),
                (_.GT = ['es', 'en', 'fr', 'zh']),
                (_.GW = ['en', 'fr', 'es', 'zh']),
                (_.GY = ['en', 'fr', 'es', 'zh']),
                (_.HK = ['en', 'zh']),
                (_.HN = ['es', 'en', 'fr', 'zh']),
                (_.HR = ['en']),
                (_.HU = ['hu', 'en', 'fr', 'es', 'zh']),
                (_.ID = ['id', 'en']),
                (_.IE = ['en', 'fr', 'es', 'zh']),
                (_.IL = ['he', 'en']),
                (_.IN = ['en']),
                (_.IS = ['en']),
                (_.IT = ['it', 'en']),
                (_.JM = ['en', 'es', 'fr', 'zh']),
                (_.JO = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.JP = ['ja', 'en']),
                (_.KE = ['en', 'fr', 'es', 'zh']),
                (_.KG = ['en', 'fr', 'es', 'zh']),
                (_.KH = ['en']),
                (_.KI = ['en', 'fr', 'es', 'zh']),
                (_.KM = ['fr', 'en', 'es', 'zh']),
                (_.KN = ['en', 'fr', 'es', 'zh']),
                (_.KR = ['ko', 'en']),
                (_.KW = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.KY = ['en', 'fr', 'es', 'zh']),
                (_.KZ = ['en', 'fr', 'es', 'zh']),
                (_.LA = ['en']),
                (_.LC = ['en', 'fr', 'es', 'zh']),
                (_.LI = ['en', 'fr', 'es', 'zh']),
                (_.LK = ['en']),
                (_.LS = ['en', 'fr', 'es', 'zh']),
                (_.LT = ['en', 'ru', 'fr', 'es', 'zh']),
                (_.LU = ['en', 'de', 'fr', 'es', 'zh']),
                (_.LV = ['en', 'ru', 'fr', 'es', 'zh']),
                (_.MA = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.MC = ['fr', 'en']),
                (_.MD = ['en']),
                (_.ME = ['en']),
                (_.MG = ['en', 'fr', 'es', 'zh']),
                (_.MH = ['en', 'fr', 'es', 'zh']),
                (_.MK = ['en']),
                (_.ML = ['fr', 'en', 'es', 'zh']),
                (_.MN = ['en']),
                (_.MQ = ['en', 'fr', 'es', 'zh']),
                (_.MR = ['en', 'fr', 'es', 'zh']),
                (_.MS = ['en', 'fr', 'es', 'zh']),
                (_.MT = ['en']),
                (_.MU = ['en', 'fr', 'es', 'zh']),
                (_.MV = ['en']),
                (_.MW = ['en', 'fr', 'es', 'zh']),
                (_.MX = ['es', 'en']),
                (_.MY = ['en']),
                (_.MZ = ['en', 'fr', 'es', 'zh']),
                (_.NA = ['en', 'fr', 'es', 'zh']),
                (_.NC = ['en', 'fr', 'es', 'zh']),
                (_.NE = ['fr', 'en', 'es', 'zh']),
                (_.NF = ['en', 'fr', 'es', 'zh']),
                (_.NG = ['en']),
                (_.NI = ['es', 'en', 'fr', 'zh']),
                (_.NL = ['nl', 'en']),
                (_.NO = ['no', 'en']),
                (_.NP = ['en']),
                (_.NR = ['en', 'fr', 'es', 'zh']),
                (_.NU = ['en', 'fr', 'es', 'zh']),
                (_.NZ = ['en', 'fr', 'es', 'zh']),
                (_.OM = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.PA = ['es', 'en', 'fr', 'zh']),
                (_.PE = ['es', 'en', 'fr', 'zh']),
                (_.PF = ['en', 'fr', 'es', 'zh']),
                (_.PG = ['en', 'fr', 'es', 'zh']),
                (_.PH = ['en']),
                (_.PL = ['pl', 'en']),
                (_.PM = ['en', 'fr', 'es', 'zh']),
                (_.PN = ['en', 'fr', 'es', 'zh']),
                (_.PT = ['pt', 'en']),
                (_.PW = ['en', 'fr', 'es', 'zh']),
                (_.PY = ['es', 'en']),
                (_.QA = ['en', 'fr', 'es', 'zh', 'ar']),
                (_.RE = ['en', 'fr', 'es', 'zh']),
                (_.RO = ['en', 'fr', 'es', 'zh']),
                (_.RS = ['en', 'fr', 'es', 'zh']),
                (_.RU = ['ru', 'en']),
                (_.RW = ['fr', 'en', 'es', 'zh']),
                (_.SA = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.SB = ['en', 'fr', 'es', 'zh']),
                (_.SC = ['fr', 'en', 'es', 'zh']),
                (_.SE = ['sv', 'en']),
                (_.SG = ['en']),
                (_.SH = ['en', 'fr', 'es', 'zh']),
                (_.SI = ['en', 'fr', 'es', 'zh']),
                (_.SJ = ['en', 'fr', 'es', 'zh']),
                (_.SK = ['sk', 'en', 'fr', 'es', 'zh']),
                (_.SL = ['en', 'fr', 'es', 'zh']),
                (_.SM = ['en', 'fr', 'es', 'zh']),
                (_.SN = ['fr', 'en', 'es', 'zh']),
                (_.SO = ['en', 'fr', 'es', 'zh']),
                (_.SR = ['en', 'fr', 'es', 'zh']),
                (_.ST = ['en', 'fr', 'es', 'zh']),
                (_.SV = ['es', 'en', 'fr', 'zh']),
                (_.SZ = ['en', 'fr', 'es', 'zh']),
                (_.TC = ['en', 'fr', 'es', 'zh']),
                (_.TD = ['fr', 'en', 'es', 'zh']),
                (_.TG = ['fr', 'en', 'es', 'zh']),
                (_.TH = ['th', 'en']),
                (_.TJ = ['en', 'fr', 'es', 'zh']),
                (_.TM = ['en', 'fr', 'es', 'zh']),
                (_.TN = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.TO = ['en']),
                (_.TR = ['tr', 'en']),
                (_.TT = ['en', 'fr', 'es', 'zh']),
                (_.TV = ['en', 'fr', 'es', 'zh']),
                (_.TW = ['zh', 'en']),
                (_.TZ = ['en', 'fr', 'es', 'zh']),
                (_.UA = ['en', 'ru', 'fr', 'es', 'zh']),
                (_.UG = ['en', 'fr', 'es', 'zh']),
                (_.US = ['en', 'fr', 'es', 'zh']),
                (_.UY = ['es', 'en', 'fr', 'zh']),
                (_.VA = ['en', 'fr', 'es', 'zh']),
                (_.VC = ['en', 'fr', 'es', 'zh']),
                (_.VE = ['es', 'en', 'fr', 'zh']),
                (_.VG = ['en', 'fr', 'es', 'zh']),
                (_.VN = ['en']),
                (_.VU = ['en', 'fr', 'es', 'zh']),
                (_.WF = ['en', 'fr', 'es', 'zh']),
                (_.WS = ['en']),
                (_.YE = ['ar', 'en', 'fr', 'es', 'zh']),
                (_.YT = ['en', 'fr', 'es', 'zh']),
                (_.ZA = ['en', 'fr', 'es', 'zh']),
                (_.ZM = ['en', 'fr', 'es', 'zh']),
                (_.ZW = ['en']);
            var E = t(1),
                A = t.n(E),
                P = t(5),
                T = t.n(P),
                R = t(19),
                z = t.n(R),
                L = t(3),
                S = t.n(L),
                I = t(0),
                O = t(2),
                C = t.n(O);
            function M(e) {
                var n = new Map();
                return function() {
                    for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                    var a = JSON.stringify(i);
                    return n.has(a) || n.set(a, e.apply(void 0, i)), n.get(a);
                };
            }
            function N(e, n) {
                var t = new Map();
                return function(i, o) {
                    void 0 === o && (o = !1);
                    var a = JSON.stringify(
                        n.map(function(e) {
                            return i[e];
                        })
                    );
                    return (t.has(a) && !o) || t.set(a, e(i)), t.get(a);
                };
            }
            function k(e) {
                for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                    t[i - 1] = arguments[i];
                return function() {
                    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                    return e.apply(void 0, t.concat(i));
                };
            }
            function W(e, n) {
                return (
                    void 0 === n && (n = e.length),
                    function t() {
                        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                        return o.length < n
                            ? function() {
                                  for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                                      n[i] = arguments[i];
                                  return t.apply(void 0, o.concat(n));
                              }
                            : e.apply(void 0, o);
                    }
                );
            }
            function j(e) {
                return function(n) {
                    var t = e(n);
                    return 'object' == typeof t && t.then
                        ? t.then(function() {
                              return n;
                          })
                        : n;
                };
            }
            function H() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return function(e) {
                    return n.reduce(function(e, n) {
                        return n(e);
                    }, e);
                };
            }
            function B(e) {
                void 0 === e && (e = {});
                var n = o({}, e);
                return [n, k(r.a, n)];
            }
            function Y(e) {
                return C()(e).reduce(function(e, n) {
                    var t,
                        i,
                        a,
                        r = n[0],
                        s = n[1];
                    return Array.isArray(s)
                        ? o({}, e, (((i = {})[r] = [].concat(s)), i))
                        : o({}, e, 'object' == typeof s ? (((a = {})[r] = Y(s)), a) : (((t = {})[r] = s), t));
                }, {});
            }
            function D(e, n) {
                return (function e(n, t) {
                    return C()(t).reduce(function(t, i) {
                        var a,
                            r,
                            s,
                            l,
                            c = i[0],
                            u = i[1];
                        return Array.isArray(u)
                            ? o({}, t, (((r = {})[c] = [].concat(u)), r))
                            : 'object' != typeof u || (n[c] && 'object' == typeof n[c] && !Array.isArray(n[c]))
                            ? o({}, t, 'object' == typeof u ? (((l = {})[c] = e(n[c], u)), l) : (((a = {})[c] = u), a))
                            : o({}, t, (((s = {})[c] = Y(u)), s));
                    }, n);
                })(Y(e), n);
            }
            function U(e, n, t) {
                return (
                    void 0 === n && (n = ''),
                    void 0 === t && (t = ':'),
                    C()(e).reduce(function(e, i) {
                        var o = i[0],
                            a = i[1];
                        switch (typeof a) {
                            case 'object':
                                return [].concat(e, U(a, '' + n + o + '.'));
                            case 'string':
                            default:
                                return [].concat(e, ['' + n + o + t + a]);
                        }
                    }, [])
                );
            }
            function G(e, n) {
                return n.split('.').reduce(function(e, n) {
                    return 'object' == typeof e || 'function' == typeof e ? e[n] : void 0;
                }, e);
            }
            var F = W(function(e, n, t) {
                    var i = e.uuid,
                        a = e.urls;
                    void 0 === t && (t = !1);
                    var r = new window.Image();
                    if ('object' == typeof n) {
                        var s = o({}, n, { uuid: t ? i + '::banner.hidden:true' : i }),
                            l = C()(s).reduce(function(e, n) {
                                return e + '&' + n[0] + '=' + n[1];
                            }, '');
                        r.src = (a[n.et] || a.DEFAULT) + '&bdata=' + encodeURIComponent(l.slice(1));
                    } else 'string' == typeof n && (r.src = a[n] || a.DEFAULT);
                }, 2),
                V = {
                    STARTING_MESSAGE_RENDER: 'Starting_Message_Render',
                    IFRAME_CREATED: 'iFrame_Created',
                    MESSAGE_FETCH_INITIATED: 'Message_Fetch_Initiated',
                    MESSAGE_FETCH_RECEIVED: 'Message_Fetch_Received',
                    MESSAGE_CREATE_INITIATED: 'Message_Create_Initiated',
                    MESSAGE_UPDATE_INITIATED: 'Message_Update_Initiated',
                    MESSAGE_RENDERED: 'Message_Rendered',
                    ERROR: 'ERROR',
                    FLUSH: 'FLUSH',
                    FLUSH_CAP: 'FLUSH_CAP'
                },
                Z = {
                    OVERFLOW: 'Banner Overflow detected.',
                    HIDDEN: 'Overflow fallback failed.  Hiding banner.',
                    INVALID_STYLE_OPTIONS: 'Invalid account, styles, signature combination.',
                    INVALID_LEGACY_BANNER: 'Invalid legacy banner placement/offerType combination',
                    MODAL_LOAD_FAILURE: 'Modal failed to initialize.'
                },
                K = [],
                q = [];
            function J(e) {
                var n = z()(V);
                return e.reduce(function(e, t) {
                    if (S()(n, t.event)) {
                        e[t.event] = e[t.event] || [];
                        var i = o({}, t);
                        delete i.event, e[t.event].push(i);
                    }
                    return e;
                }, {});
            }
            var Q = 0,
                X = {
                    flush: function(e) {
                        return (
                            void 0 === e && (e = !1),
                            Q >= 3
                                ? I.ZalgoPromise.resolve()
                                : (e
                                      ? I.ZalgoPromise.resolve()
                                      : I.ZalgoPromise.all(q).then(function() {
                                            q.length = 0;
                                        })
                                  ).then(function() {
                                      if (0 !== K.length) {
                                          K.push({ event: V.FLUSH, flushType: e ? 'immediate' : 'normal' }),
                                              3 === (Q += 1) && K.push({ event: V.FLUSH_CAP, cap: 3 });
                                          var n = { version: '0.4.1', events: J(K) };
                                          K.length = 0;
                                          var t = new XMLHttpRequest();
                                          t.open('POST', 'https://www.paypal.com/ppcredit/messagingLogger', !0),
                                              t.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'),
                                              t.send(JSON.stringify({ data: n }));
                                      }
                                  })
                        );
                    },
                    info: function(e, n) {
                        void 0 === n && (n = {}), K.push(o({ event: e }, n));
                    },
                    error: function(e) {
                        X.info(V.ERROR, e), X.flush(!0);
                    },
                    waitFor: function(e) {
                        q.push(e);
                    },
                    track: F,
                    warn: function() {
                        for (var e, n = arguments.length, t = new Array(n), i = 0; i < n; i++) t[i] = arguments[i];
                        (e = console).warn.apply(e, ['[Messaging.js]'].concat(t));
                    }
                },
                $ = !1;
            setInterval(function() {
                $ ||
                    (($ = !0),
                    X.flush().then(function() {
                        $ = !1;
                    }));
            }, 3e3);
            var ee = t(17),
                ne = t.n(ee);
            function te(e) {
                for (var n = new Uint8Array(e.length), t = e.length; t >= 0; t -= 1) n[t] = e.charCodeAt(t);
                return n.buffer;
            }
            var ie = M(function(e, n, t) {
                    var i,
                        a = (function(e) {
                            var n = C()(e).reduce(function(e, n) {
                                var t,
                                    i = n[1];
                                return void 0 !== i ? o({}, e, (((t = {})[n[0]] = i), t)) : e;
                            }, {});
                            return delete n._flattened, n;
                        })(t),
                        r = t.markup;
                    return I.ZalgoPromise.resolve(
                        r.match(/^(?:(https?:\/\/)|\.{0,2}\/)/)
                            ? ((i = r),
                              new I.ZalgoPromise(function(e) {
                                  var n = new XMLHttpRequest();
                                  (n.onreadystatechange = function() {
                                      if (4 === n.readyState)
                                          switch (n.status) {
                                              case 200:
                                                  e(n.responseText);
                                                  break;
                                              default:
                                                  e('');
                                          }
                                  }),
                                      n.open('GET', i, !0),
                                      n.send();
                              }))
                            : r
                    ).then(function(t) {
                        return (function(e, n, t) {
                            return new I.ZalgoPromise(function(i) {
                                try {
                                    var o,
                                        a = te(
                                            '' +
                                                n +
                                                U(t)
                                                    .sort()
                                                    .join('')
                                        ),
                                        r = te(window.atob(e)),
                                        s = [
                                            'spki',
                                            te(
                                                window.atob(
                                                    'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAzbycnt9Uwcw/hxO8nX4Qa7qvSvAXWw5W6ilOJ8wztU1o76tMnL3gSyY2j6kar1j7SSkJ2OFtvbOAO2juNOOLjky8OrHVK4knSgkf83Jmg9W4ylhG14E4KP2Zgl+em90DqB8uW9odK3JxDzIm6zDczBWGYgN5/D7x8gUpLE8uS0VnBEgVywUQBnGxLLbl9ag1q2kYB48fpDal19gmsPfIJimF5sj0KhMkAMOHgt29gIpYKCp04FVrl2ZxOtQw8sTKueAElayTCxZt8QrU8sQzvPXfyIny+33+RjAY2RTsopRC30te7MchTwrQ2DGLIzf7gjGfxF4PXMupYtHlXzmv8Wi3IRISf6Y52emPebwWEnDxkm3K55abwJZ7IVMwN/1lZZh3BLoWFo70+ShEjxUnNcMgRbo2YSMbAY+fiTViwn+43LQ62rRwknjNmEqOqMYBPjlBF4RA+nHVpwKjnrTR8iewvN0aktnGbDUAGL3hXclUzzH3IngkCLVyaudOwFfTBCYmMZ1hGeaplUqVGbXFbF7BED5NRPlzFOl0+TA3Lvbvmc8NfNMQ9Nvyx1G+TubLWrMORl/o3XTICz+BMQtbnG+vzglorwkEWA6CqpCyyxai/dz1A/cXmt56RgNUPwRxvac6g1j4lPAW5lJIP2X6MXm53RI9ekOo/dt/Xx9hkfECAwEAAQ=='
                                                )
                                            ),
                                            { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
                                            !0,
                                            ['verify']
                                        ],
                                        l = { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
                                        c = window.crypto || {};
                                    if (!window.crypto) {
                                        var u = function(e) {
                                            return function() {
                                                for (var n = arguments.length, t = new Array(n), i = 0; i < n; i++)
                                                    t[i] = arguments[i];
                                                return new I.ZalgoPromise(function(n, i) {
                                                    e.apply(void 0, t).oncomplete = function(e) {
                                                        return G(e, 'target.result') ? n(e.target.result) : i();
                                                    };
                                                });
                                            };
                                        };
                                        c.subtle = {
                                            importKey: u(window.msCrypto.subtle.importKey),
                                            verify: u(window.msCrypto.subtle.verify)
                                        };
                                    }
                                    return (o = c.subtle).importKey.apply(o, s).then(function(e) {
                                        c.subtle
                                            .verify(l, e, r, a)
                                            .then(i)
                                            .catch(function() {
                                                return i(!1);
                                            });
                                    });
                                } catch (e) {
                                    return i(!1);
                                }
                            });
                        })(e, n, o({}, a, { markup: t })).then(function(e) {
                            return (
                                e ||
                                    (function(e, n, t) {
                                        X.warn(
                                            'Invalid custom styles. Please ensure the correct account number, styles, and signature have been entered. Banner has been hidden.'
                                        ),
                                            X.error({
                                                message: Z.INVALID_STYLE_OPTIONS,
                                                account: e,
                                                customStyle: n.custom,
                                                sign: n.sign
                                            });
                                    })(n, t),
                                e ? t : ''
                            );
                        });
                    });
                }),
                oe = { US: 'en_US', GB: 'en_GB', FR: 'fr_FR', DE: 'de_DE' },
                ae = N(
                    function(e) {
                        var n = e.account,
                            t = e.amount,
                            i = e.countryCode;
                        return new I.ZalgoPromise(function(e) {
                            var o = '_c' + Math.floor(Math.random() * Math.pow(10, 19)),
                                a = {
                                    pub_id: n,
                                    dimensions: 'x200x51',
                                    currency_value: t,
                                    format: 'HTML',
                                    presentation_types: 'HTML',
                                    ch: 'UPSTREAM',
                                    call: 'paypal.' + o
                                };
                            i && oe[i] && ((a.country_code = i), (a.locale = oe[i]));
                            var r = C()(a)
                                    .filter(function(e) {
                                        return e[1];
                                    })
                                    .reduce(function(e, n) {
                                        return e + '&' + n[0] + '=' + n[1];
                                    }, '')
                                    .slice(1),
                                s = document.createElement('script');
                            (s.async = !0),
                                (s.src = 'https://www.paypal.com/imadserver/upstream?' + r),
                                X.info(V.MESSAGE_FETCH_INITIATED, { account: n, amount: t }),
                                document.head.appendChild(s),
                                (window.paypal[o] = function(i) {
                                    X.info(V.MESSAGE_FETCH_RECEIVED, { account: n, amount: t }),
                                        document.head.removeChild(s),
                                        delete window.paypal[o];
                                    try {
                                        e({ markup: JSON.parse(i.replace(/<\/?div>/g, '')) });
                                    } catch (n) {
                                        e({ markup: i });
                                    }
                                });
                        });
                    },
                    ['account', 'amount', 'countryCode']
                ),
                re = { click: new Map(), message: new Map(), scroll: new Map(), hover: new Map(), resize: new Map() };
            function se(e) {
                e.origin === window.top.location.origin &&
                    e.source === (e.source.frameElement && e.source.frameElement.contentWindow) &&
                    re.message.has(e.source.frameElement) &&
                    re.message.get(e.source.frameElement)(e);
            }
            function le(e) {
                re.resize.has(e.target.frameElement) && re.resize.get(e.target.frameElement)(e);
            }
            function ce(e) {
                re.scroll.forEach(function(n) {
                    return n(e);
                });
            }
            function ue(e) {
                re.hover.has(e.target) && re.hover.get(e.target)(e);
            }
            function de(e) {
                e.target.ownerDocument && re.click.has(e.target.ownerDocument.defaultView.frameElement)
                    ? re.click.get(e.target.ownerDocument.defaultView.frameElement)(e)
                    : re.click.has(e.currentTarget) && re.click.get(e.currentTarget)(e);
            }
            function me(e) {
                return {
                    on: function(n, t) {
                        ('IFRAME' === e.tagName || ('resize' !== n && 'message' !== n)) &&
                            (function(e, n, t) {
                                if (
                                    ((function(e, n) {
                                        'scroll' === e && 0 === re.scroll.size
                                            ? window.addEventListener('scroll', ce)
                                            : 'hover' === e && 0 === re.hover.size
                                            ? document.addEventListener('mouseover', ue)
                                            : 'message' === e && 0 === re.message.size
                                            ? window.addEventListener('message', se)
                                            : 'resize' !== e || re[e].has(n)
                                            ? 'click' !== e ||
                                              re[e].has(n) ||
                                              ('IFRAME' === n.tagName
                                                  ? n.contentWindow.document.body.addEventListener('click', de)
                                                  : n.addEventListener('click', de))
                                            : n.contentWindow.addEventListener('resize', le);
                                    })(e, n),
                                    re[e].has(n))
                                ) {
                                    var i = re[e].get(n);
                                    re[e].set(n, function(e) {
                                        i(e), t(e);
                                    });
                                } else re[e].set(n, t);
                            })(n, e, t);
                    },
                    clear: function(n) {
                        re[n].delete(e),
                            'scroll' === n && 0 === re.scroll.size
                                ? window.removeEventListener('scroll', ce)
                                : 'hover' === n && 0 === re.hover.size
                                ? document.removeEventListener('mouseover', ue)
                                : 'click' === n
                                ? 'IFRAME' === e.tagName
                                    ? e.contentWindow.removeEventListener('click', de)
                                    : e.removeEventListener('click', de)
                                : 'IFRAME' === e.tagName &&
                                  ('resize' === n
                                      ? e.contentWindow.removeEventListener('resize', le)
                                      : 'message' === n &&
                                        0 === re.message.size &&
                                        window.removeEventListener('message', se));
                    }
                };
            }
            var fe = t(10),
                pe = t.n(fe),
                ge = t(57),
                he = t.n(ge),
                ye = t(58),
                xe = t.n(ye),
                _e = t(59),
                we = t.n(_e),
                ve = t(30),
                be = t.n(ve),
                Ee = t(9),
                Ae = t.n(Ee),
                Pe = t(60),
                Te = t.n(Pe),
                Re = t(61),
                ze = t.n(Re),
                Le = t(43),
                Se = t.n(Le),
                Ie = t(62),
                Oe = t.n(Ie),
                Ce = t(63),
                Me = t.n(Ce),
                Ne = t(64),
                ke = t.n(Ne),
                We = t(65),
                je = t.n(We),
                He = t(66),
                Be = t.n(He),
                Ye = t(67),
                De = t.n(Ye),
                Ue = [
                    ['default', [Ae.a, be.a, Te.a].join('\n')],
                    ['logo.type:primary', je.a],
                    ['logo.type:alternative', ze.a],
                    ['logo.type:inline', Se.a],
                    ['logo.type:none', [Se.a, Oe.a].join('\n')],
                    ['logo.position:right', Me.a],
                    ['logo.position:top', ke.a],
                    ['logo.type:alternative && logo.position:top', Be.a],
                    ['text.color:white', De.a]
                ],
                Ge = t(68),
                Fe = t.n(Ge),
                Ve = t(69),
                Ze = t.n(Ve),
                Ke = t(70),
                qe = t.n(Ke),
                Je = t(44),
                Qe = t.n(Je),
                Xe = t(71),
                $e = t.n(Xe),
                en = t(72),
                nn = t.n(en),
                tn = t(73),
                on = t.n(tn),
                an = t(74),
                rn = t.n(an),
                sn = t(75),
                ln = t.n(sn),
                cn = t(76),
                un = t.n(cn),
                dn = t(77),
                mn = t.n(dn),
                fn = t(78),
                pn = t.n(fn),
                gn = [
                    ['default', [Ae.a, be.a, Fe.a].join('\n')],
                    ['ratio:1x1', Ze.a],
                    ['ratio:1x4', qe.a],
                    ['ratio:8x1', [Qe.a, $e.a].join('\n')],
                    ['ratio:20x1', [Qe.a, nn.a].join('\n')],
                    ['color:blue', on.a],
                    ['color:gray', rn.a],
                    ['color:black', un.a],
                    ['color:white', mn.a],
                    ['color:white-no-border', pn.a],
                    ['color:blue && ratio:1x4', ln.a]
                ],
                hn = t(79),
                yn = t.n(hn),
                xn = t(80),
                _n = t.n(xn),
                wn = t(81),
                vn = t.n(wn),
                bn = t(82),
                En = t.n(bn),
                An = t(83),
                Pn = t.n(An),
                Tn = t(84),
                Rn = t.n(Tn),
                zn = t(85),
                Ln = t.n(zn),
                Sn = t(86),
                In = t.n(Sn),
                On = t(87),
                Cn = t.n(On),
                Mn = t(88),
                Nn = t.n(Mn),
                kn = t(89),
                Wn = t.n(kn),
                jn = t(90),
                Hn = t.n(jn),
                Bn = t(91),
                Yn = t.n(Bn),
                Dn = t(92),
                Un = t.n(Dn),
                Gn = t(93),
                Fn = t.n(Gn),
                Vn = t(94),
                Zn = t.n(Vn),
                Kn = t(95),
                qn = t.n(Kn),
                Jn = t(96),
                Qn = t.n(Jn),
                Xn = t(97),
                $n = t.n(Xn),
                et = t(98),
                nt = {
                    x168x374: { styles: Rn.a, vertical: !0 },
                    x765x60: { styles: Cn.a },
                    x1000x50: { styles: Nn.a, termsIcon: !0 },
                    x234x100: { styles: Ln.a, reverseLogo: !0 },
                    x310x100: { styles: In.a, reverseLogo: !0 },
                    x1000x36: { styles: Wn.a, termsIcon: !0 },
                    x120x90: { styles: Yn.a, termsIcon: !0 },
                    x234x60: { styles: Un.a, reverseLogo: !0, termsIcon: !0 },
                    x250x250: { styles: Fn.a, reverseLogo: !0, vertical: !0, termsIcon: !0 },
                    x300x50: { styles: Zn.a, reverseLogo: !0 },
                    x340x60: { styles: Hn.a, reverseLogo: !0 },
                    x468x60: { styles: qn.a, reverseLogo: !0, termsIcon: !0 },
                    x728x90: { styles: Qn.a, reverseLogo: !0 },
                    x540x200: { styles: $n.a, reverseLogo: !0, termsIcon: !0 },
                    x170x100: { styles: t.n(et).a, termsIcon: !0 }
                },
                tt = Object.keys(nt).map(function(e) {
                    var n = nt[e],
                        t = e.slice(1),
                        i = t.split('x'),
                        o = i[1],
                        a =
                            '\n        .message {\n            width: ' +
                            i[0] +
                            'px;\n            min-height: ' +
                            o +
                            'px;\n        }\n\n        .message__container {\n            min-height: ' +
                            o +
                            'px;\n        }\n    ';
                    return (
                        n.vertical && (a = '' + a + vn.a),
                        n.reverseLogo && (a = '' + a + _n.a),
                        n.vertical && n.reverseLogo && (a = '' + a + En.a),
                        n.termsIcon && (a = '' + a + Pn.a),
                        ['size:' + t, a]
                    );
                }),
                it = Object.keys(nt).map(function(e) {
                    return ['size:' + e.slice(1), nt[e].styles];
                }),
                ot = [['default', [Ae.a, yn.a].join('\n')]].concat(tt, it),
                at = t(99),
                rt = {
                    'layout:text': Ue,
                    'layout:flex': gn,
                    'layout:legacy': ot,
                    'layout:custom': [['default', [Ae.a, t.n(at).a].join('\n')]]
                },
                st = {
                    PRIMARY: {
                        COLOR: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_fc_pri.svg',
                            453,
                            152
                        ],
                        WHITE: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_wh_pri.svg',
                            453,
                            152
                        ]
                    },
                    ALTERNATIVE: {
                        COLOR: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_fc_alt.svg',
                            573,
                            80
                        ],
                        WHITE: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_wh_alt.svg',
                            573,
                            80
                        ]
                    },
                    ALT_NO_PP: {
                        COLOR: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_fc_alt_noPP.svg',
                            477,
                            64
                        ],
                        WHITE: [
                            'https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/ppc_wh_alt_noPP.svg',
                            477,
                            64
                        ]
                    }
                };
            function lt(e) {
                return (
                    '\n    .message__headline span.multi:nth-child(2) {\n        display: none;\n    }\n\n    @media (min-width: ' +
                    e +
                    'px) {\n        .message__headline span.multi:first-child {\n            display: none;\n            \n        }\n\n        .message__headline span.multi:nth-child(2) {\n            display: inline;\n            \n        }\n    }\n'
                );
            }
            var ct = [
                    [
                        'default',
                        {
                            logo: st.PRIMARY.COLOR,
                            headline: 'medium',
                            subHeadline: 'small',
                            disclaimer: 'legacy-medium'
                        }
                    ],
                    [
                        'size:1000x36',
                        {
                            styles: [
                                '.message__sub-headline { color: #009cde }',
                                '.message__headline { display: block }'
                            ]
                        }
                    ],
                    ['size:234x100', { logo: st.PRIMARY.WHITE }],
                    ['size:310x100', { logo: st.PRIMARY.WHITE }],
                    ['size:340x60', { logo: st.PRIMARY.WHITE, styles: ['.message { max-width: 100% }'] }]
                ],
                ut = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [
                                    lt(290),
                                    '.message__messaging { flex: 1 1 auto; }',
                                    '@media (max-width: 289px) { .message__disclaimer { display: block; } }'
                                ],
                                logo: st.PRIMARY.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }],
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 320] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [200, 1e3],
                                styles: [lt(280)],
                                logo: st.ALT_NO_PP.COLOR,
                                headline: [
                                    { tag: 'xsmall', replace: [['time.', 'time']] },
                                    { tag: 'medium', br: ['purchases'] }
                                ]
                            }
                        ],
                        [
                            'logo.type:none',
                            {
                                messageWidth: [180, 1e3],
                                styles: [lt(280)],
                                logo: !1,
                                headline: [
                                    { tag: 'xsmall', replace: [['time.', 'time']], br: ['time'] },
                                    { tag: 'medium', br: ['purchases'] }
                                ]
                            }
                        ],
                        [
                            'logo.type:alternative',
                            {
                                styles: [lt(520)],
                                logo: st.ALTERNATIVE.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }]
                            }
                        ],
                        ['logo.type:primary && logo.position:top', { styles: [lt(210)] }],
                        ['logo.type:alternative && logo.position:top', { styles: [lt(210)] }],
                        ['text.color:white && logo.type:primary', { logo: st.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: st.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: st.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }],
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['ratio:1x1', { headline: ['xsmall', 'medium'] }],
                        [
                            'ratio:1x4',
                            {
                                headline: { tag: 'medium', br: ['months'] },
                                styles: ['.message__logo-container { margin-bottom: 30%; }'],
                                disclaimer: ['xlarge', 'xsmall']
                            }
                        ],
                        ['color:gray', { logo: st.PRIMARY.COLOR }],
                        ['color:white', { logo: st.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: st.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': ct
                },
                dt = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [lt(320)],
                                logo: st.PRIMARY.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'], replace: [['99+', '99+.']] }],
                                disclaimer: ['extra', 'xsmall']
                            }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 320] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [240, 1e3],
                                styles: [lt(290)],
                                logo: st.ALT_NO_PP.COLOR,
                                headline: [
                                    { tag: 'xsmall', replace: [['time.', 'time']], br: ['time'] },
                                    { tag: 'medium', br: ['purchases'] }
                                ]
                            }
                        ],
                        [
                            'logo.type:none',
                            {
                                messageWidth: [220, 1e3],
                                styles: [lt(290)],
                                logo: !1,
                                headline: [
                                    { tag: 'xsmall', replace: [['time.', 'time']], br: ['time'] },
                                    { tag: 'medium', br: ['purchases'] }
                                ]
                            }
                        ],
                        [
                            'logo.type:alternative',
                            {
                                styles: [lt(570)],
                                logo: st.ALTERNATIVE.COLOR,
                                headline: ['xsmall', { tag: 'medium', br: ['months'], replace: [['99+', '99+.']] }]
                            }
                        ],
                        [
                            'logo.type:alternative && logo.position:top',
                            {
                                styles: [lt(230)],
                                messageWidth: [150, 320],
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }]
                            }
                        ],
                        ['logo.type:primary && logo.position:top', { styles: [lt(235)] }],
                        ['text.color:white && logo.type:primary', { logo: st.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: st.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: st.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: ['xsmall', { tag: 'medium', br: ['months'] }],
                                disclaimer: ['extra.2', 'small']
                            }
                        ],
                        ['ratio:1x1', { headline: ['xsmall', 'medium'] }],
                        [
                            'ratio:1x4',
                            {
                                headline: { tag: 'medium', br: ['months'] },
                                styles: ['.message__logo-container { margin-bottom: 30%; }'],
                                disclaimer: ['xlarge', 'extra.2', 'small']
                            }
                        ],
                        ['color:gray', { logo: st.PRIMARY.COLOR }],
                        ['color:white', { logo: st.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: st.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': ct
                },
                mt = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [
                                    '.message__headline > span:first-of-type { text-decoration: underline; color: #0076ff; font-weight: 600; }',
                                    '.message__disclaimer > span { color: #2c2e2f; text-decoration: none; }'
                                ],
                                logo: st.PRIMARY.COLOR,
                                headline: { tag: 'small', br: ['months', 'APR'] },
                                disclaimer: 'xsmall.2'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: 190 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [255, 1e3], logo: st.ALT_NO_PP.COLOR, headline: { br: ['APR'] } }
                        ],
                        ['logo.type:none', { messageWidth: [240, 1e3], logo: !1, headline: { br: ['APR'] } }],
                        [
                            'logo.type:alternative',
                            { logo: st.ALTERNATIVE.COLOR, headline: { replace: [['APR', 'APR.']], br: ['APR.'] } }
                        ],
                        [
                            'text.color:white',
                            {
                                styles: [
                                    '.message__headline > span:first-of-type { text-decoration: underline; color: white; font-weight: 600; }',
                                    '.message__disclaimer > span { color: white; text-decoration: none; }'
                                ]
                            }
                        ],
                        ['text.color:white && logo.type:primary', { logo: st.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: st.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: st.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: { tag: 'small', br: ['months', 'APR'] },
                                disclaimer: ['xsmall.2', 'xsmall']
                            }
                        ],
                        ['ratio:1x4', { headline: { br: ['over', 'at', 'APR'] }, subHeadline: 'small' }],
                        [
                            'ratio:20x1',
                            {
                                styles: [
                                    '@media (min-aspect-ratio: 200/11) and (max-width: 475px) { .message__headline { font-size: 0.7rem; } }'
                                ]
                            }
                        ],
                        ['color:gray', { logo: st.PRIMARY.COLOR }],
                        ['color:white', { logo: st.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: st.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        ['default', { logo: st.PRIMARY.WHITE, headline: 'legacy-small', disclaimer: 'legacy-large' }],
                        ['size:1000x36', { logo: st.PRIMARY.COLOR }],
                        [
                            'size:120x90',
                            {
                                logo: !1,
                                styles: [
                                    '.message__disclaimer { line-height: 12px }',
                                    '.message__headline { font-size: 12px }'
                                ]
                            }
                        ],
                        [
                            'size:234x60',
                            {
                                disclaimer: 'legacy-medium',
                                styles: [
                                    '.message__disclaimer { font-size: 9px }',
                                    '.message__messaging { padding-top: 5px }'
                                ]
                            }
                        ],
                        [
                            'size:250x250',
                            {
                                disclaimer: 'legacy-medium',
                                styles: [
                                    '.message__disclaimer { font-size: 10px }',
                                    '.message__headline { margin-bottom: 20px }'
                                ]
                            }
                        ],
                        [
                            'size:300x50',
                            {
                                styles: [
                                    '.message__headline { font-size: 13px }',
                                    '.message__disclaimer { font-size: 11px }'
                                ]
                            }
                        ],
                        [
                            'size:340x60',
                            {
                                disclaimer: 'legacy-medium',
                                styles: [
                                    '.message__headline { font-size: 13px }',
                                    '.message__messaging { padding: 7px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:468x60',
                            {
                                styles: [
                                    '.message__headline { font-size: 14px; margin-bottom: 5px }',
                                    '.message__disclaimer { font-size: 10px }',
                                    '.message__messaging { padding: 14px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:728x90',
                            {
                                styles: [
                                    '.message__headline { font-size: 20px }',
                                    '.message__disclaimer { font-size: 11px }',
                                    '.message__messaging { padding: 23px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:540x200',
                            {
                                subHeadline: 'legacy-medium',
                                disclaimer: 'legacy-medium.2',
                                styles: ['.message__headline { padding-right: 40px; }']
                            }
                        ],
                        [
                            'size:170x100',
                            {
                                logo: !1,
                                styles: [
                                    '.message__disclaimer { font-size: 9px; }',
                                    '.message__headline { font-size: 15px; line-height: 1.2em; }'
                                ]
                            }
                        ]
                    ]
                },
                ft = {
                    'layout:text': [
                        [
                            'default',
                            {
                                styles: [
                                    '.message__headline > span:not(:nth-of-type(2)) { text-decoration: underline; color: #0076ff; font-weight: 600; }',
                                    '.message__disclaimer > span { color: #2c2e2f; text-decoration: none; }'
                                ],
                                logo: st.PRIMARY.COLOR,
                                headline: { tag: 'xsmall', br: ['months'] },
                                disclaimer: 'xsmall.2'
                            }
                        ],
                        ['logo.type:primary', { messageWidth: 130 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [250, 1e3], logo: st.ALT_NO_PP.COLOR, headline: { br: ['months'] } }
                        ],
                        ['logo.type:none', { messageWidth: [235, 1e3], logo: !1, headline: { br: ['months'] } }],
                        [
                            'logo.type:alternative',
                            {
                                logo: st.ALTERNATIVE.COLOR,
                                headline: { replace: [['months', 'months.']], br: ['months.'] }
                            }
                        ],
                        [
                            'text.color:white',
                            {
                                styles: [
                                    '.message__headline > span:first-of-type { text-decoration: underline; color: white; font-weight: 600; }',
                                    '.message__disclaimer > span { color: white; text-decoration: none; }'
                                ]
                            }
                        ],
                        ['text.color:white && logo.type:primary', { logo: st.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: st.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: st.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: { tag: 'xsmall', br: ['months'] },
                                disclaimer: ['xsmall.2', 'xsmall']
                            }
                        ],
                        ['ratio:1x4', { headline: { br: ['over', 'months'] }, subHeadline: 'small' }],
                        ['color:gray', { logo: st.PRIMARY.COLOR }],
                        ['color:white', { logo: st.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: st.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        ['default', { logo: st.PRIMARY.WHITE, headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:1000x36', { logo: st.PRIMARY.COLOR }],
                        [
                            'size:120x90',
                            {
                                logo: !1,
                                styles: [
                                    '.message__disclaimer { line-height: 12px }',
                                    '.message__headline { font-size: 12px }'
                                ]
                            }
                        ],
                        [
                            'size:234x60',
                            {
                                disclaimer: 'legacy-medium.2',
                                styles: [
                                    '.message__disclaimer { font-size: 9px }',
                                    '.message__messaging { padding-top: 5px }'
                                ]
                            }
                        ],
                        [
                            'size:250x250',
                            {
                                styles: [
                                    '.message__disclaimer { font-size: 10px }',
                                    '.message__headline { margin-bottom: 20px }'
                                ],
                                disclaimer: 'legacy-medium.2'
                            }
                        ],
                        [
                            'size:300x50',
                            {
                                styles: [
                                    '.message__headline { font-size: 13px }',
                                    '.message__disclaimer { font-size: 11px }'
                                ]
                            }
                        ],
                        [
                            'size:340x60',
                            {
                                styles: [
                                    '.message__headline { font-size: 13px }',
                                    '.message__messaging { padding: 7px 0 }'
                                ],
                                disclaimer: 'legacy-medium.2'
                            }
                        ],
                        [
                            'size:468x60',
                            {
                                styles: [
                                    '.message__headline { font-size: 14px; margin-bottom: 5px }',
                                    '.message__disclaimer { font-size: 10px }',
                                    '.message__messaging { padding: 14px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:728x90',
                            {
                                styles: [
                                    '.message__headline { font-size: 20px }',
                                    '.message__disclaimer { font-size: 11px }',
                                    '.message__messaging { padding: 23px 0 }'
                                ]
                            }
                        ],
                        [
                            'size:540x200',
                            {
                                subHeadline: 'legacy-medium',
                                disclaimer: 'legacy-medium.2',
                                styles: ['.message__headline { padding-right: 40px; }']
                            }
                        ],
                        [
                            'size:170x100',
                            {
                                logo: !1,
                                styles: [
                                    '.message__disclaimer { font-size: 9px; }',
                                    '.message__headline { font-size: 15px; line-height: 1.2em; }'
                                ]
                            }
                        ]
                    ]
                },
                pt = {
                    'layout:text': [
                        [
                            'default',
                            { logo: st.PRIMARY.COLOR, headline: { tag: 'small', br: ['/mo'] }, disclaimer: 'small' }
                        ],
                        ['logo.type:primary', { messageWidth: [130, 200] }],
                        [
                            'logo.type:inline',
                            {
                                messageWidth: [200, 1e3],
                                logo: st.ALT_NO_PP.COLOR,
                                headline: { br: ['APR'], replace: [['APR.', 'APR']] }
                            }
                        ],
                        [
                            'logo.type:none',
                            {
                                messageWidth: [200, 1e3],
                                logo: !1,
                                headline: { replace: [['APR.', 'APR']], br: ['APR'] }
                            }
                        ],
                        ['logo.type:alternative', { messageWidth: [140, 430], logo: st.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: st.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: st.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: st.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: { tag: 'medium', br: ['low as', 'at'] },
                                disclaimer: 'small'
                            }
                        ],
                        ['ratio:1x4', { subHeadline: 'small' }],
                        ['color:gray', { logo: st.PRIMARY.COLOR }],
                        ['color:white', { logo: st.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: st.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: 'legacy-medium',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-small'
                            }
                        ],
                        ['size:1000x36', { logo: st.PRIMARY.COLOR, disclaimer: 'legacy-medium' }],
                        ['size:120x90', { logo: !1, headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:234x60', { headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:300x50', { disclaimer: 'legacy-medium' }],
                        ['size:468x60', { disclaimer: 'legacy-medium' }],
                        ['size:250x250', { headline: 'legacy-large' }],
                        ['size:728x90', { headline: 'legacy-small', disclaimer: 'legacy-medium' }],
                        ['size:540x200', { disclaimer: 'legacy-medium' }],
                        ['size:170x100', { logo: !1, headline: 'legacy-small', disclaimer: 'legacy-medium' }]
                    ]
                },
                gt = {
                    'layout:text': [
                        ['default', { logo: st.PRIMARY.COLOR, headline: { tag: 'xsmall' }, disclaimer: 'xsmall' }],
                        ['logo.type:primary', { messageWidth: 130 }],
                        [
                            'logo.type:inline',
                            { messageWidth: [195, 1e3], logo: st.ALT_NO_PP.COLOR, headline: { br: ['/mo'] } }
                        ],
                        ['logo.type:none', { messageWidth: [175, 1e3], logo: !1, headline: { br: ['/mo'] } }],
                        ['logo.type:alternative', { logo: st.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: st.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: st.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: st.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            { logo: st.PRIMARY.WHITE, headline: { tag: 'small', br: ['low as'] }, disclaimer: 'xsmall' }
                        ],
                        ['ratio:1x4', { subHeadline: 'small' }],
                        ['color:gray', { logo: st.PRIMARY.COLOR }],
                        ['color:white', { logo: st.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: st.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: 'legacy-xsmall',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: st.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1 }],
                        ['size:250x250', { disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:540x200', { styles: ['.message__messaging { padding-top: 45px; }'] }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                },
                ht = {
                    'layout:text': [
                        [
                            'default',
                            { logo: st.PRIMARY.COLOR, headline: { tag: 'small', br: ['/mo'] }, disclaimer: 'xsmall' }
                        ],
                        ['logo.type:primary', { messageWidth: [190, 240] }],
                        [
                            'logo.type:inline',
                            { messageWidth: [260, 1e3], logo: st.ALT_NO_PP.COLOR, headline: { br: ['APR'] } }
                        ],
                        ['logo.type:none', { messageWidth: [260, 1e3], logo: !1, headline: { br: ['APR'] } }],
                        ['logo.type:alternative', { logo: st.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: st.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: st.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: st.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: { tag: 'small', br: [' of', 'at'] },
                                disclaimer: 'xsmall'
                            }
                        ],
                        ['ratio:1x4', { headline: { br: ['payments', 'mo'] }, subHeadline: 'small' }],
                        [
                            'ratio:20x1',
                            {
                                styles: [
                                    '@media (min-aspect-ratio: 200/11) and (max-width: 475px) { .message__headline { font-size: 0.75rem; } }'
                                ]
                            }
                        ],
                        ['color:gray', { logo: st.PRIMARY.COLOR }],
                        ['color:white', { logo: st.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: st.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: 'legacy-small',
                                subHeadline: 'legacy-xlarge',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: st.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1, headline: 'legacy-xsmall' }],
                        ['size:234x60', { headline: 'legacy-xsmall', disclaimer: 'legacy-medium.2' }],
                        ['size:250x250', { headline: 'legacy-small.2', disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:728x90', { headline: 'legacy-xsmall' }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                },
                yt = {
                    'layout:text': [
                        ['default', { logo: st.PRIMARY.COLOR, headline: { tag: 'small' }, disclaimer: 'xsmall' }],
                        ['logo.type:primary', { messageWidth: [140, 210] }],
                        [
                            'logo.type:inline',
                            { messageWidth: [200, 1e3], logo: st.ALT_NO_PP.COLOR, headline: { br: ['/mo'] } }
                        ],
                        ['logo.type:none', { messageWidth: [200, 1e3], logo: !1, headline: { br: ['/mo'] } }],
                        ['logo.type:alternative', { logo: st.ALTERNATIVE.COLOR }],
                        ['text.color:white && logo.type:primary', { logo: st.PRIMARY.WHITE }],
                        ['text.color:white && logo.type:alternative', { logo: st.ALTERNATIVE.WHITE }],
                        ['text.color:white && logo.type:inline', { logo: st.ALT_NO_PP.WHITE }]
                    ],
                    'layout:flex': [
                        [
                            'default',
                            { logo: st.PRIMARY.WHITE, headline: { tag: 'small', br: ['of'] }, disclaimer: 'xsmall' }
                        ],
                        ['ratio:1x4', { headline: { br: ['payments'] }, subHeadline: 'small' }],
                        ['color:gray', { logo: st.PRIMARY.COLOR }],
                        ['color:white', { logo: st.PRIMARY.COLOR }],
                        ['color:white-no-border', { logo: st.PRIMARY.COLOR }]
                    ],
                    'layout:legacy': [
                        [
                            'default',
                            {
                                logo: st.PRIMARY.WHITE,
                                headline: 'legacy-xsmall',
                                subHeadline: 'legacy-large',
                                disclaimer: 'legacy-medium'
                            }
                        ],
                        ['size:1000x36', { logo: st.PRIMARY.COLOR }],
                        ['size:120x90', { logo: !1 }],
                        ['size:250x250', { disclaimer: 'legacy-medium.2' }],
                        ['size:340x60', { disclaimer: 'legacy-medium.2' }],
                        ['size:540x200', { styles: ['.message__messaging { padding-top: 45px; }'] }],
                        ['size:170x100', { logo: !1, headline: 'legacy-xsmall' }]
                    ]
                };
            function xt(e, n) {
                var t = pe()(e, function(e) {
                    var t = e[1];
                    return S()(t, n);
                });
                if (t) return t[0];
                if (ne()(n, '.')) {
                    var i = n.split('.', 1)[0];
                    if (
                        (t = pe()(e, function(e) {
                            var n = e[1];
                            return S()(n, i);
                        }))
                    )
                        return t[0];
                }
                return pe()(e, function(e) {
                    var n = e[1];
                    return S()(n, 'default');
                })[0];
            }
            var _t = document.createElement('div');
            _t.innerHTML = xe.a;
            var wt = document.createElement('div');
            wt.innerHTML = we.a;
            var vt = W(function(e, n, t) {
                    return n.getElementsByClassName(e + '__' + t)[0];
                }),
                bt = W(function(e, n) {
                    var t = document.createElement('style');
                    (t.textContent = n), e.insertBefore(t, e.firstChild);
                }),
                Et = W(function(e, n) {
                    if (Array.isArray(n))
                        n.forEach(function(n) {
                            return e.appendChild(n);
                        });
                    else if (n instanceof HTMLElement) e.appendChild(n);
                    else if ('string' == typeof n) {
                        var t = document.createElement('span');
                        (t.innerHTML = n), e.appendChild(t);
                    } else !1 === n && e.parentNode.removeChild(e);
                }),
                At = W(function(e, n) {
                    if (Array.isArray(n))
                        []
                            .concat(n)
                            .reverse()
                            .forEach(function(n) {
                                return e.insertBefore(n, e.firstChild);
                            });
                    else if (n instanceof HTMLElement) e.insertBefore(n, e.firstChild);
                    else if ('string' == typeof n) {
                        var t = document.createElement('span');
                        (t.innerHTML = n), e.insertBefore(t, e.firstChild);
                    } else !1 === n && e.parentNode.removeChild(e);
                }),
                Pt = W(function(e, n, t, i) {
                    if ((void 0 === t && (t = 'PayPal Credit'), 'string' == typeof n)) {
                        var o = new Image();
                        (o.alt = t),
                            (o.className = 'message__logo'),
                            (o.src = n),
                            i && (o.srcset = i),
                            e.appendChild(o);
                    } else if (Array.isArray(n)) {
                        var a = n[0],
                            r = n[1],
                            s = n[2],
                            l = new Image();
                        (l.src = a), (l.alt = t);
                        var c = document.createElement('div');
                        c.className = 'message__logo message__logo--svg';
                        var u = document.createElement('canvas');
                        (u.height = s), (u.width = r), c.appendChild(l), c.appendChild(u), e.appendChild(c);
                    } else e.parentNode.removeChild(e);
                }, 2);
            function Tt(e) {
                return e
                    .reduce(function(e, n) {
                        return [].concat(e, [n, document.createTextNode(' ')]);
                    }, [])
                    .slice(0, -1);
            }
            function Rt(e, n) {
                void 0 === n && (n = {});
                var t,
                    i = (Array.isArray(e) ? e : [e]).map(function(e) {
                        var n = document.createElement('span');
                        return Array.isArray(e) ? ((n.innerText = e[0]), (n.className = e[1])) : (n.innerText = e), n;
                    });
                return (
                    n.replace &&
                        ((t = n.replace),
                        i.forEach(function(e) {
                            var n = t.reduce(function(e, n) {
                                return e.replace(n[0], n[1]);
                            }, e.innerText);
                            e.innerText = n;
                        })),
                    n.br &&
                        (function(e, t) {
                            var i = [].concat(n.br);
                            t.forEach(function(e) {
                                for (var n = e.innerText, t = []; ne()(n, i[0]); ) t.push(i[0]), i.shift();
                                if (0 === t.length || (1 === t.length && he()(n, t[0]))) return e.classList.add('br');
                                var o = document.createElement('span');
                                (o.innerText = n), (o.className = 'br');
                                var a = t.reduce(
                                    function(e, n) {
                                        var t = (function(e, n) {
                                            var t = e.innerText,
                                                i = t.indexOf(n) + n.length,
                                                o = e.cloneNode();
                                            if (((o.innerText = t.slice(0, i).trim()), t.length !== i)) {
                                                var a = e.cloneNode();
                                                return (a.innerText = t.slice(i).trim()), [o, a];
                                            }
                                            return [o];
                                        })(e[e.length - 1], n);
                                        return [].concat(e.slice(0, -1), t);
                                    },
                                    [o]
                                );
                                return (
                                    (e.innerHTML = ''),
                                    a.forEach(function(n) {
                                        e.appendChild(n), e.appendChild(document.createTextNode(' '));
                                    })
                                );
                            });
                        })(0, i),
                    Tt(i)
                );
            }
            var zt = W(function(e, n, t) {
                    return (
                        !1 !== t &&
                        ('string' != typeof t && 'object' != typeof t
                            ? null
                            : Tt(
                                  (i = 'string' == typeof t ? [{ tag: t }] : Array.isArray(t) ? t : [t]).map(function(
                                      t
                                  ) {
                                      var o,
                                          a = document.createElement('span');
                                      if ((i.length > 1 && a.setAttribute('class', 'multi'), 'string' == typeof t))
                                          (o = Rt(xt(e[n], t))), a.classList.add('tag--' + t.split('.', 1)[0]);
                                      else {
                                          var r = t.tag,
                                              l = s(t, ['tag']);
                                          (o = Rt(xt(e[n], r), l)), a.classList.add('tag--' + r.split('.', 1)[0]);
                                      }
                                      return (
                                          o.forEach(function(e) {
                                              return a.appendChild(e);
                                          }),
                                          a
                                      );
                                  })
                              ))
                    );
                    var i;
                }),
                Lt = W(function(e, n, t) {
                    return t.reduce(
                        function(t, i) {
                            var o = i[0],
                                a = i[1],
                                r = o.split(' && ');
                            return 'default' === o ||
                                r.every(function(n) {
                                    return S()(e, n);
                                })
                                ? n === Array
                                    ? [].concat(t, [a])
                                    : D(t, a)
                                : t;
                        },
                        n === Array ? [] : {}
                    );
                }),
                St = {
                    getTemplateNode: M(function(e, n) {
                        var t = G(e, 'style.layout');
                        if ('custom' === t)
                            return (function(e) {
                                var t = n.data,
                                    i = n.meta,
                                    o = n.template,
                                    a = document.createElement('div'),
                                    r = i.offerType;
                                if ('' === o) return a;
                                try {
                                    var s = o.replace(/{{\s*?([^\s]+?)\s*?}}/g, function(e, n) {
                                        var i = n.split('.'),
                                            o = i[0],
                                            a = i.slice(1).join('.');
                                        if ('logo' === o) {
                                            var r = document.createElement('div');
                                            return Pt(r, G(st, a.toUpperCase()), 'PayPal Credit logo'), r.innerHTML;
                                        }
                                        return Rt(xt(t[o], a)).reduce(function(e, n) {
                                            return '' + e + (n.outerHTML || ' ');
                                        }, '');
                                    });
                                    (a.innerHTML = s),
                                        pe()(A()(a.children), function(e) {
                                            return 'STYLE' !== e.tagName;
                                        }).classList.add('offer--' + r.replace(/:/g, '-').toLowerCase());
                                } catch (e) {
                                    X.warn(e);
                                }
                                return a;
                            })();
                        var i = G(e, 'style._flattened'),
                            o = G(n, 'meta.offerType'),
                            a = G(n, 'data');
                        if ('legacy' === t) {
                            var r = G(e, 'style.typeNI'),
                                s = G(e, 'style.typeEZP'),
                                l = 'NI' === o.split(':')[0] ? r : s;
                            if ('image' === l)
                                return (function(e, t) {
                                    var i = n.meta,
                                        o = wt.cloneNode(!0),
                                        a = vt('pp-legacy', o),
                                        r = ['link', 'pixel'].map(a),
                                        s = r[0],
                                        l = r[1],
                                        c = G(e, 'size'),
                                        u = G(e, 'color'),
                                        d = G(e, 'border');
                                    s.setAttribute('href', i.clickUrl), l.setAttribute('href', i.impressionUrl);
                                    var m = 'https://www.paypalobjects.com/upstream/assets/messaging/legacy',
                                        f = 'none' === u ? '' : '-' + u + (!0 === d ? '' : '-no-border'),
                                        p = ('none' === u ? 'v1' : 'v2') + '/' + c.replace(/x/, '-') + f,
                                        g = [1, 1.5, 2].map(function(e) {
                                            return m + '/' + p + '@' + e + 'x.png ' + e + 'x';
                                        });
                                    return Pt(s, m + '/' + p + '@1x.png', 'PayPal Credit Message', g.join(', ')), o;
                                })(e.style);
                            if (!l) throw new Error(Z.INVALID_LEGACY_BANNER);
                        }
                        var c = Lt(i),
                            u = c(
                                Object,
                                (function(e, n) {
                                    switch (o) {
                                        case 'EZP:ANY:EQZ':
                                            return mt[n];
                                        case 'EZP:ANY:GTZ':
                                            return ft[n];
                                        case 'PALA:MULTI:EQZ':
                                            return pt[n];
                                        case 'PALA:MULTI:GTZ':
                                            return gt[n];
                                        case 'PALA:SINGLE:EQZ':
                                            return ht[n];
                                        case 'PALA:SINGLE:GTZ':
                                            return yt[n];
                                        case 'NI:NON-US':
                                            return dt[n];
                                        case 'NI':
                                        default:
                                            return ut[n];
                                    }
                                })(0, 'layout:' + t)
                            ),
                            d = c(Array, rt['layout:' + t]),
                            m = zt(a),
                            f = _t.cloneNode(!0),
                            p = vt('message', f),
                            g = ['logo-container', 'headline', 'sub-headline', 'disclaimer'].map(p),
                            h = g[0],
                            y = g[1],
                            x = g[2],
                            _ = g[3];
                        if (
                            (Et(y, m('headline', u.headline)),
                            Et(x, m('subHeadline', u.subHeadline)),
                            At(_, m('disclaimer', u.disclaimer)),
                            Pt(h, u.logo, 'PayPal Credit logo'),
                            'inline' === G(e, 'style.logo.type') && y.appendChild(h),
                            'none' === G(e, 'style.logo.type'))
                        ) {
                            var w = document.createElement('span');
                            w.innerText = 'with ';
                            var v = document.createElement('strong');
                            (v.innerText = 'PayPal Credit.'),
                                w.appendChild(v),
                                y.appendChild(document.createTextNode(' ')),
                                y.appendChild(w);
                        }
                        u.messageWidth &&
                            ('number' == typeof u.messageWidth
                                ? d.push('.message__messaging { width: ' + u.messageWidth + 'px }')
                                : Array.isArray(u.messageWidth) &&
                                  d.push(
                                      '.message__messaging { min-width: ' +
                                          u.messageWidth[0] +
                                          'px; max-width: ' +
                                          u.messageWidth[1] +
                                          'px }'
                                  ));
                        var b = function(n) {
                            return 'legacy' === t ? n.replace(/\.message/g, '[data-pp-id="' + e.id + '"] .message') : n;
                        };
                        return u.styles && bt(f, b(u.styles.join(''))), bt(f, b(d.join('\n'))), f;
                    })
                },
                It = W(function(e, n) {
                    var t = n.markup,
                        i = n.options;
                    return new I.ZalgoPromise(function(n) {
                        'IFRAME' === e.tagName
                            ? 'string' == typeof t
                                ? (function(e, n) {
                                      return new I.ZalgoPromise(function(t) {
                                          var i = e.contentWindow,
                                              a = '<style>body{margin:0;padding:0;overflow:hidden;}</style>' + n;
                                          (e.srcdoc = a),
                                              (e.src = 'about:blank'),
                                              e.addEventListener('load', function n() {
                                                  0 === i.document.body.children.length &&
                                                      (e.removeEventListener('load', n),
                                                      i.document.open('text/html', 'replace'),
                                                      i.document.write(a),
                                                      i.document.close()),
                                                      t({ meta: o({}, i.meta) });
                                              });
                                      });
                                  })(e, t).then(n)
                                : (function(e, n, t) {
                                      return new I.ZalgoPromise(function(i) {
                                          var o = e.contentWindow,
                                              a = n.meta,
                                              r = St.getTemplateNode(t, n),
                                              s = o.document.importNode(r, !0),
                                              l = A()(s.getElementsByTagName('img')).map(function(e) {
                                                  return new I.ZalgoPromise(function(n) {
                                                      return e.addEventListener('load', n);
                                                  });
                                              });
                                          for (
                                              A()(s.getElementsByTagName('style')).forEach(function(e) {
                                                  var n = o.document.createElement('style');
                                                  (n.textContent = e.textContent),
                                                      e.parentNode.insertBefore(n, e),
                                                      e.parentNode.removeChild(e);
                                              });
                                              o.document.body.firstChild;

                                          )
                                              o.document.body.removeChild(o.document.body.firstChild);
                                          A()(s.children).forEach(function(e) {
                                              return o.document.body.appendChild(e);
                                          }),
                                              I.ZalgoPromise.all(l).then(function() {
                                                  i({ meta: a });
                                              });
                                      });
                                  })(e, t, i).then(n)
                            : n(
                                  (function(e, n, t) {
                                      if ('string' == typeof n) return (e.innerHTML = n), {};
                                      var i = n.meta,
                                          o = St.getTemplateNode(t, n);
                                      return (
                                          A()(o.children).forEach(function(n) {
                                              return e.appendChild(n.cloneNode(!0));
                                          }),
                                          { meta: i }
                                      );
                                  })(e, t, i)
                              );
                    });
                });
            function Ot(e) {
                var n = e.getBoundingClientRect(),
                    t = (n.top + n.bottom) / 2,
                    i = (n.left + n.right) / 2;
                return !(t > window.innerHeight || t < 0 || i > window.innerWidth || i < 0);
            }
            var Ct = W(function(e, n) {
                    var t = n.options.amount,
                        i = n.events,
                        o = n.track,
                        a = e.getBoundingClientRect(),
                        r = {
                            et: 'CLIENT_IMPRESSION',
                            event_type: 'stats',
                            pos_x: Math.round(a.left),
                            pos_y: Math.round(a.top),
                            browser_width: window.innerWidth,
                            browser_height: window.innerHeight,
                            visible: Ot(e),
                            amount: t
                        };
                    r.visible ||
                        i.on('scroll', function() {
                            Ot(e) &&
                                (i.clear('scroll'), o({ et: 'CLIENT_IMPRESSION', event_type: 'scroll', visible: !0 }));
                        }),
                        (function() {
                            var e = window.document.body.appendChild(window.document.createElement('div'));
                            e.setAttribute(
                                'class',
                                'pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links'
                            ),
                                e.setAttribute(
                                    'style',
                                    'width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;'
                                );
                            var n = void 0 !== window.getComputedStyle ? window.getComputedStyle(e) : void 0;
                            return new I.ZalgoPromise(function(t) {
                                !(function i(o) {
                                    return o <= 0
                                        ? (window.document.body.removeChild(e), t(!1))
                                        : null !== window.document.body.getAttribute('abp') ||
                                          (n &&
                                              ('none' === n.getPropertyValue('display') ||
                                                  'hidden' === n.getPropertyValue('visibility'))) ||
                                          null === e.offsetParent ||
                                          0 === e.offsetHeight ||
                                          0 === e.offsetLeft ||
                                          0 === e.offsetTop ||
                                          0 === e.offsetWidth ||
                                          0 === e.clientHeight ||
                                          0 === e.clientWidth
                                        ? (window.document.body.removeChild(e), t(!0))
                                        : setTimeout(function() {
                                              i(o - 1);
                                          }, 50);
                                })(5);
                            });
                        })().then(function(n) {
                            (r.adblock = n),
                                (r.blocked = (function(e) {
                                    if ('function' == typeof window.getComputedStyle) {
                                        var n = window.getComputedStyle(e);
                                        if (
                                            'none' === n.getPropertyValue('display') ||
                                            'hidden' === n.getPropertyValue('visibility') ||
                                            'auto' !== n.getPropertyValue('clip')
                                        )
                                            return !0;
                                    }
                                    var t = e.getBoundingClientRect();
                                    return (
                                        t.left > window.document.body.scrollWidth ||
                                        t.right < 0 ||
                                        t.top > window.document.body.scrollHeight ||
                                        t.bottom < 0 ||
                                        0 === e.offsetWidth ||
                                        0 === e.offsetHeight
                                    );
                                })(e)),
                                o(r, e.hasAttribute('data-pp-message-hidden')),
                                o('MORS_IMPRESSION');
                        }),
                        i.on('click', function() {
                            o({ et: 'CLICK', event_type: 'click', link: 'Banner Wrapper' }), o('MORS_CLICK');
                        }),
                        i.on('hover', function() {
                            o({ et: 'CLIENT_IMPRESSION', event_type: 'hover' }), i.clear('hover');
                        });
                }),
                Mt = {
                    '1x1': [{ ratio: '1x1', width: [120, 300] }],
                    '1x4': [{ ratio: '1x2', width: [160, 160] }, { ratio: '1x4', breakpoint: 768 }],
                    '8x1': [{ ratio: '6x1', width: [250, 768] }, { ratio: '8x1', breakpoint: 768 }],
                    '20x1': [
                        { ratio: '6x1', width: [250, 768] },
                        { ratio: '20x1', width: [350, 1169], breakpoint: 768 }
                    ]
                };
            function Nt(e) {
                if ('number' == typeof e) return e + 'px';
                if ('string' == typeof e) {
                    var n = e.match(/^(\d+)x(\d+)$/);
                    if (n)
                        return (
                            100 *
                                n.slice(1).reduce(function(e, n) {
                                    return +n / +e;
                                }) +
                            '%'
                        );
                }
                return e;
            }
            function kt(e) {
                var n = e.split(/(?=[@[])/),
                    t = n[0],
                    i = n.slice(1);
                return t.match(/\d+x\d+/)
                    ? i.reduce(
                          function(e, n) {
                              return (
                                  T()(n, '@')
                                      ? (e.breakpoint = n.slice(1))
                                      : T()(n, '[') && (e.width = n.slice(1, -1).split(',')),
                                  e
                              );
                          },
                          { ratio: t }
                      )
                    : {};
            }
            var Wt = W(function(e, n) {
                    var t = n.wrapper,
                        i = n.options;
                    if ('IFRAME' === e.tagName) {
                        var o = G(i, 'style.layout'),
                            a = G(i, 'style.ratio');
                        if (('flex' !== o && 'custom' !== o) || !a) {
                            e.setAttribute('style', 'width: ' + ('custom' !== o ? 0 : '`100%') + '; border: none;'),
                                e.setAttribute('height', 0),
                                t.removeAttribute('class');
                            var r = (function(e) {
                                    var n = document.createElement('div');
                                    n.setAttribute('style', 'width: 100%; overflow: hidden');
                                    var t = document.createElement('div');
                                    t.setAttribute('style', 'width: 10000px'),
                                        n.appendChild(t),
                                        e.parentNode.appendChild(n);
                                    var i = n.offsetWidth;
                                    return e.parentNode.removeChild(n), i;
                                })(t),
                                s =
                                    'custom' !== o && null !== e.offsetParent
                                        ? (function(e) {
                                              var n = e.contentDocument.querySelector('.message__content'),
                                                  t = window.getComputedStyle(n),
                                                  i = A()(n.children),
                                                  o = [
                                                      'margin-left',
                                                      'border-left-width',
                                                      'padding-left',
                                                      'width',
                                                      'padding-right',
                                                      'border-right-width',
                                                      'margin-right'
                                                  ];
                                              return ne()(t.getPropertyValue('display'), 'flex')
                                                  ? Math.round(
                                                        i.reduce(function(e, n) {
                                                            var t = window.getComputedStyle(n);
                                                            return (
                                                                e +
                                                                o.reduce(function(e, n) {
                                                                    return e + parseFloat(t.getPropertyValue(n));
                                                                }, 0)
                                                            );
                                                        }, 0)
                                                    )
                                                  : Math.max.apply(
                                                        Math,
                                                        i.map(function(e) {
                                                            var n = window.getComputedStyle(e);
                                                            return Math.round(
                                                                o.reduce(function(e, t) {
                                                                    return e + parseFloat(n.getPropertyValue(t));
                                                                }, 0)
                                                            );
                                                        })
                                                    );
                                          })(e)
                                        : 0,
                                l = function() {
                                    e.setAttribute('style', 'width: 100%; border: none; min-width: ' + s + 'px;'),
                                        requestAnimationFrame(function() {
                                            return requestAnimationFrame(function() {
                                                e.setAttribute(
                                                    'height',
                                                    e.contentWindow.document.documentElement.scrollHeight
                                                );
                                            });
                                        });
                                };
                            if (r < s && 'custom' !== o) {
                                if ('top' !== G(i, 'style.logo.position') || 'primary' !== G(i, 'style.logo.type'))
                                    throw (X.warn(
                                        'Message Overflow. PayPal Credit Message of layout type ' +
                                            G(i, 'style.layout') +
                                            ' requires a width of at least ' +
                                            s +
                                            'px. Current container is ' +
                                            r +
                                            'px. Attempting fallback message.'
                                    ),
                                    t.parentNode.setAttribute('data-pp-style-layout', 'text'),
                                    t.parentNode.setAttribute('data-pp-style-logo-type', 'primary'),
                                    t.parentNode.setAttribute('data-pp-style-logo-position', 'top'),
                                    window.paypal.Messages().render(t.parentNode),
                                    new Error(Z.OVERFLOW));
                                X.error({ message: Z.HIDDEN }),
                                    X.warn(
                                        'Message hidden. PayPal Credit Message fallback requires minimum width of ' +
                                            s +
                                            'px. Current container is ' +
                                            r +
                                            'px. Message hidden.'
                                    ),
                                    e.setAttribute('data-pp-message-hidden', 'true');
                            } else l(), me(e).on('resize', l);
                        } else
                            !(function(e, n, t) {
                                var i = [];
                                'flex' === t
                                    ? (i = Mt[n])
                                    : Array.isArray(n)
                                    ? (i = n.map(kt))
                                    : 'string' == typeof n && (i = [kt(n)]);
                                var o = 'pp-flex--' + i.slice(-1)[0].ratio,
                                    a = i.reduce(function(e, n) {
                                        var t = n.breakpoint,
                                            i = n.ratio,
                                            a = n.width;
                                        return '' === e
                                            ? '\n                .' +
                                                  o +
                                                  ' {\n                    display: block;\n                    width: 100%;\n                    ' +
                                                  (Array.isArray(a)
                                                      ? '\n                                min-width: ' +
                                                        Nt(a[0]) +
                                                        ';\n                                max-width: ' +
                                                        Nt(a[1]) +
                                                        ';'
                                                      : '') +
                                                  '\n                    box-sizing: border-box;\n                    position: relative;\n                }\n        \n                .' +
                                                  o +
                                                  '::before {\n                    padding-top: ' +
                                                  Nt(i) +
                                                  ";\n                    content: '';\n                    display: block;\n                }\n        \n                ." +
                                                  o +
                                                  ' iframe {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                }\n            '
                                            : t
                                            ? '\n            ' +
                                              e +
                                              '\n            @media (min-width: ' +
                                              Nt(t) +
                                              ') {\n                ' +
                                              (Array.isArray(a)
                                                  ? '\n                            .' +
                                                    o +
                                                    ' {\n                                min-width: ' +
                                                    Nt(a[0]) +
                                                    ';\n                                max-width: ' +
                                                    Nt(a[1]) +
                                                    ';\n                            }'
                                                  : '') +
                                              '\n                .' +
                                              o +
                                              '::before {\n                    padding-top: ' +
                                              Nt(i) +
                                              ';\n                }\n            }\n        '
                                            : e;
                                    }, ''),
                                    r = document.createElement('style');
                                (r.textContent = a), e.setAttribute('class', o), e.appendChild(r);
                            })(t, a, o),
                                e.setAttribute('style', 'width: 100%; border: none;'),
                                e.removeAttribute('height');
                    }
                }),
                jt = W(function(e, n) {
                    if ('IFRAME' === e.tagName) {
                        var t = JSON.stringify({ 'pp-modal-event': { type: n } });
                        e.contentWindow.postMessage(t, window.top.location.origin);
                    }
                });
            function Ht(e) {
                var n = document.createElement(e);
                'iframe' === e &&
                    (n.setAttribute('title', 'PayPal Credit Promotion Message'),
                    n.setAttribute('style', 'width: 0; border: none;'),
                    n.setAttribute('src', 'about:blank'),
                    n.setAttribute('height', 0));
                var t = C()({ insertMarkup: It, setSize: Wt, runStats: Ct, postMessage: jt, events: me }).reduce(
                    function(e, t) {
                        var i;
                        return o({}, e, (((i = {})[t[0]] = (0, t[1])(n)), i));
                    },
                    {}
                );
                return (
                    (t.clearEvents = function() {
                        return (function(e) {
                            z()(re).forEach(function(n) {
                                return n.delete(e);
                            }),
                                0 === re.scroll.size && window.removeEventListener('scroll', ce),
                                0 === re.hover.size && document.removeEventListener('mouseover', ue),
                                0 === re.message.size && window.removeEventListener('message', se),
                                'IFRAME' === e.tagName
                                    ? (e.contentWindow.removeEventListener('resize', le),
                                      e.contentWindow.removeEventListener('click', de))
                                    : e.removeEventListener('click', de);
                        })(n);
                    }),
                    [n, t]
                );
            }
            var Bt,
                Yt = t(23),
                Dt = t.n(Yt),
                Ut = { ANY: 'ANY', STRING: 'STRING', BOOLEAN: 'BOOLEAN', FUNCTION: 'FUNCTION' },
                Gt =
                    (((Bt = {})[Ut.STRING] = 'string'),
                    (Bt[Ut.BOOLEAN] = 'boolean'),
                    (Bt[Ut.FUNCTION] = 'function'),
                    Bt),
                Ft = { onRender: [Ut.FUNCTION], sign: [Ut.STRING] },
                Vt = {
                    text: {
                        logo: {
                            type: [Ut.STRING, ['primary', 'alternative', 'inline', 'none']],
                            position: [Ut.STRING, ['left', 'right', 'top']]
                        },
                        text: { color: [Ut.STRING, ['black', 'white']] }
                    },
                    flex: {
                        color: [Ut.STRING, ['blue', 'black', 'white', 'white-no-border', 'gray|grey']],
                        ratio: [Ut.STRING, ['1x1', '1x4', '8x1', '20x1']]
                    },
                    legacy: {
                        typeNI: [Ut.STRING, ['', 'image', 'html']],
                        typeEZP: [Ut.STRING, ['', 'html']],
                        size: [Ut.STRING],
                        color: [Ut.STRING, ['none', 'blue', 'black', 'gray|grey', 'white']],
                        border: [Ut.BOOLEAN, [!0, !1]]
                    },
                    custom: { markup: [Ut.STRING], ratio: [Ut.ANY] }
                },
                Zt = function(e, n, t) {
                    return X.warn(
                        'Invalid option value (' +
                            e +
                            '). Expected type "' +
                            n +
                            '" but instead received "' +
                            typeof t +
                            '".'
                    );
                };
            function Kt(e, n, t) {
                return (
                    void 0 === t && (t = 'style.'),
                    C()(e).reduce(function(i, a) {
                        var r,
                            s,
                            l = a[0],
                            c = a[1];
                        return Array.isArray(c)
                            ? o(
                                  {},
                                  i,
                                  (((s = {})[l] = (function(e, n, t) {
                                      var i = e[0],
                                          o = e[1],
                                          a = void 0 === o ? [] : o;
                                      if (void 0 === n) return a[0];
                                      if (
                                          (function(e, n) {
                                              return Gt[i] === Ut.BOOLEAN
                                                  ? 'boolean' == typeof n
                                                  : i === Ut.FUNCTION
                                                  ? 'function' == typeof n
                                                  : i !== Ut.STRING || 'string' == typeof n;
                                          })(0, n)
                                      ) {
                                          if (i === Ut.STRING && a.length > 0) {
                                              var r = pe()(a, function(e) {
                                                  return e.split('|').some(function(e) {
                                                      return e === n;
                                                  });
                                              });
                                              if (void 0 !== r) return r.split('|')[0];
                                              X.warn(
                                                  'Invalid option value (' +
                                                      t +
                                                      '). Expected one of ["' +
                                                      a.join('", "').replace(/\|[\w|]+/g, '') +
                                                      '"] but received "' +
                                                      n +
                                                      '".'
                                              );
                                          }
                                          return n;
                                      }
                                      return Zt(t, Gt[i], n), a[0];
                                  })(c, n[l], '' + t + l)),
                                  s)
                              )
                            : o({}, i, (((r = {})[l] = Kt(e[l], n[l] || {}, '' + t + l + '.')), r));
                    }, {})
                );
            }
            function qt(e) {
                return o({ layout: e.layout }, Kt(Vt[e.layout], e));
            }
            var Jt = N(
                    function(e) {
                        return new I.ZalgoPromise(function(n, t) {
                            var i,
                                o = new XMLHttpRequest();
                            (o.onreadystatechange = function() {
                                if (4 === o.readyState)
                                    switch (o.status) {
                                        case 200:
                                            n({ markup: o.responseText });
                                            break;
                                        default:
                                            t();
                                    }
                            }),
                                o.open(
                                    'GET',
                                    ((i = e.offerType),
                                    'https://www.paypalobjects.com/upstream/assets/messaging/modal/' +
                                        (T()(i, 'NI') ? 'ni' : 'ezp') +
                                        '.html'),
                                    !0
                                ),
                                o.send();
                        });
                    },
                    ['account', 'offerType', 'amount']
                ),
                Qt = N(
                    function(e) {
                        return new I.ZalgoPromise(function(n) {
                            var t,
                                i,
                                o,
                                a = new XMLHttpRequest();
                            (a.onreadystatechange = function() {
                                if (4 === a.readyState)
                                    switch (a.status) {
                                        case 200:
                                            n(JSON.parse(a.responseText));
                                            break;
                                        default:
                                            n({ error: !0 });
                                    }
                            }),
                                a.open(
                                    'GET',
                                    ((i = (t = e).amount),
                                    (o = ['json=true', 'mid=' + t.account]).push('country=US'),
                                    o.push('currency=USD'),
                                    i && o.push('amount=' + i),
                                    'https://www.paypal.com/ppcredit/finance/terms?' + o.join('&')),
                                    !0
                                ),
                                a.send();
                        });
                    },
                    ['account', 'amount']
                ),
                Xt = function(e, n) {
                    return 'INST' === n.type
                        ? '<tr>\n            ' +
                              ('pala' === e.type
                                  ? n.monthly && !n.isNonQualified
                                      ? '<td>$' + n.monthly + '</td>'
                                      : '<td> - </td>'
                                  : '') +
                              '\n            <td>' +
                              n.term +
                              '</td>\n            <td>$' +
                              n.minValue +
                              '</td>\n            <td>' +
                              n.apr +
                              '%</td>\n            ' +
                              ('pala' === e.type
                                  ? n.total && !n.isNonQualified
                                      ? '<td>$' + n.total + '</td>'
                                      : '<td> - </td>'
                                  : '') +
                              '\n        </tr>'
                        : '';
                },
                $t = function(e) {
                    return e.max_amount !== e.default_max_amount
                        ? '<div style="text-align: center; padding-bottom: 15px; display: table; padding-top: 10px; "><span style="display: inline-block; vertical-align: middle; "><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"><path fill="none" fill-rule="evenodd" stroke="#9DA3A6" stroke-linecap="round" stroke-linejoin="round" d="M9.526 10.474v7.579c4.71-.034 8.527-3.817 8.527-8.527a8.526 8.526 0 1 0-11.834 7.862"></path></svg></span><p style="display: inline; font-size: 13px; color: #2c2e2f; padding-left: 5px; font-family: PayPalSansSmall; font-weight: 400 ">$' +
                              e.max_amount +
                              ' is the maximum amount to be eligible for Easy Payments. Enter an amount of $' +
                              e.max_amount +
                              ' or less.</p></div>'
                        : '<p style="text-align: center">No offers are available for this amount. Please enter a new amount.</p>';
                };
            function ei(e, n) {
                var t = e.contentDocument.getElementById('content-wrapper'),
                    i = e.contentDocument.getElementById('modal__overlay'),
                    a = e.contentDocument.getElementById('close-btn'),
                    r = e.contentDocument.getElementById('header'),
                    s = e.contentDocument.getElementsByClassName('accordion'),
                    l = e.contentDocument.getElementById('modal-container'),
                    c = e.contentDocument.getElementsByClassName('modal__header-container')[0];
                return o(
                    {
                        window: e.contentWindow,
                        contentWrapper: t,
                        overlay: i,
                        closeButton: a,
                        header: r,
                        accordions: s,
                        modalContainer: l,
                        headerContainer: c
                    },
                    (function(e, n) {
                        return 'EZP' !== n
                            ? {}
                            : {
                                  ezpTab: e.contentDocument.getElementById('ezp-tab'),
                                  niTab: e.contentDocument.getElementById('ni-tab'),
                                  ezpContent: e.contentDocument.getElementById('ezp-content'),
                                  niContent: e.contentDocument.getElementById('ni-content'),
                                  calculateButton: e.contentDocument.getElementById('calculate-ezp'),
                                  amountInput: e.contentDocument.getElementById('number-input'),
                                  loader: e.contentDocument.getElementById('loading-image'),
                                  financeTermsTable: e.contentDocument.getElementById('financing-terms')
                              };
                    })(e, n)
                );
            }
            var ni = N(
                    function(e) {
                        var n = window.top.document.createElement('div'),
                            t = Ht('iframe'),
                            i = t[0],
                            a = t[1].insertMarkup,
                            r = (function() {
                                var e = window.parent.document.head,
                                    n = window.parent.document.body,
                                    t = (function() {
                                        var t = window.parent.document.getElementsByName('viewport')[0];
                                        if (void 0 === t) {
                                            var i = document.createElement('meta');
                                            return (i.name = 'viewport'), (i.content = ''), e.appendChild(i), i;
                                        }
                                        return n.contains(t) && e.appendChild(t), t;
                                    })(),
                                    i = document.createElement('meta');
                                (i.name = 'viewport'),
                                    (i.content =
                                        'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui, shrink-to-fit=no');
                                var o = n.getAttribute('style');
                                return [
                                    function() {
                                        e.removeChild(t),
                                            e.appendChild(i),
                                            (n.style.overflow = 'hidden'),
                                            (n.style.msOverflowStyle = 'scrollbar');
                                    },
                                    function() {
                                        e.removeChild(i),
                                            e.appendChild(t),
                                            o ? n.setAttribute('style', o) : n.removeAttribute('style');
                                    }
                                ];
                            })(),
                            s = r[0],
                            l = r[1],
                            c = e.track,
                            u = e.clickUrl,
                            d = B({ status: 'CLOSED' }),
                            m = d[0],
                            f = d[1];
                        function p() {
                            return T()(e.offerType, 'NI') ? 'NI' : 'EZP';
                        }
                        var g = function(e, n) {
                            return c({
                                et: 'modal-open' === e ? 'CLIENT_IMPRESSION' : 'CLICK',
                                link: n,
                                modal: p(),
                                event_type: e
                            });
                        };
                        function h() {
                            A()(m.elements.accordions).forEach(function(e) {
                                e.classList.remove('show'),
                                    e
                                        .getElementsByClassName('accordion-content')[0]
                                        .style.setProperty('max-height', null);
                            });
                        }
                        function y(e) {
                            var n = {
                                    'NI Tab': [m.elements.niTab, m.elements.niContent],
                                    'EZP Tab': [m.elements.ezpTab, m.elements.ezpContent]
                                },
                                t = n[e][0];
                            z()(n).forEach(function(e) {
                                var n = e[0],
                                    i = e[1];
                                n.classList.toggle('selected', n === t), i.classList.toggle('show', n === t);
                            }),
                                g('modal-tab', e),
                                h();
                        }
                        function x() {
                            return m.error ? b(!0) : m.modalProm;
                        }
                        function _(e) {
                            return new I.ZalgoPromise(function(t, o) {
                                'OPEN' === m.status || 'OPENING' === m.status
                                    ? (f({ status: 'CLOSING' }),
                                      m.elements.modalContainer.classList.remove('show'),
                                      setTimeout(function() {
                                          (n.style.display = 'none'),
                                              i.blur(),
                                              f({ status: 'CLOSED' }),
                                              l(),
                                              'EZP' === p() &&
                                                  setTimeout(function() {
                                                      y('EZP Tab');
                                                  }, 350),
                                              t();
                                      }, e || 0))
                                    : o();
                            });
                        }
                        function w(e) {
                            _(350), g('modal-close', e);
                        }
                        function v(n) {
                            var t = +n;
                            return (
                                Dt()(t) || (m.elements.amountInput.value = t.toFixed(2)),
                                m.elements.loader.style.setProperty('opacity', 1),
                                m.elements.financeTermsTable.style.setProperty('opacity', 0.4),
                                Qt(o({}, e, { amount: n })).then(function(e) {
                                    m.elements.loader.style.setProperty('opacity', 0),
                                        m.elements.financeTermsTable.style.setProperty('opacity', 1),
                                        (m.elements.financeTermsTable.innerHTML = (function(e) {
                                            return e.error
                                                ? '<h3 id="terms-error"> There was an error retrieving your payment options for this purchase. Please try again later. </h3>'
                                                : +e.amount < e.min_amount && 'pala' === e.type
                                                ? '<div style="text-align: center; padding-bottom: 15px; display: table; padding-top: 10px; "><span style="display: inline-block; vertical-align: middle; "><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19"><path fill="none" fill-rule="evenodd" stroke="#9DA3A6" stroke-linecap="round" stroke-linejoin="round" d="M9.526 10.474v7.579c4.71-.034 8.527-3.817 8.527-8.527a8.526 8.526 0 1 0-11.834 7.862"></path></svg></span><p style="display: inline; font-size: 13px; color: #2c2e2f; padding-left: 5px; font-family: PayPalSansSmall; font-weight: 400 ">$' +
                                                  e.min_amount +
                                                  ' is the minimum amount to be eligible for Easy Payments. Enter an amount of $' +
                                                  e.min_amount +
                                                  ' or more.</p></div>'
                                                : '\n        <table>\n            <thead>\n                <tr>\n                    ' +
                                                  ('pala' === e.type ? '<th>Monthly<br>Payments</th>' : '') +
                                                  '\n                    <th>Payments</th>\n                    <th>Minimum<br>Purchase</th>\n                    <th>APR</th>\n                    ' +
                                                  ('pala' === e.type ? '<th>Total w/<br>Interest</th>' : '') +
                                                  '\n                </tr>\n            </thead>\n            <tbody>\n            ' +
                                                  (e.options && e.options.length > 0 && 'N/A' !== e.options
                                                      ? e.options
                                                            .map(function(n) {
                                                                return Xt(e, n);
                                                            })
                                                            .join('')
                                                      : '') +
                                                  '\n            </tbody>\n        </table>\n        ' +
                                                  (e.options && 0 !== e.options.length && 'N/A' !== e.options
                                                      ? ''
                                                      : $t(e)) +
                                                  '\n        <p id="terms-note">The monthly payment shown is an estimated amount and may not include taxes and shipping</p>\n    ';
                                        })(e));
                                })
                            );
                        }
                        function b(n) {
                            return (
                                void 0 === n && (n = !1),
                                Jt(e, n)
                                    .then(a)
                                    .then(function() {
                                        f({ elements: ei(i, p()) }),
                                            (function() {
                                                m.elements.closeButton.addEventListener('click', function() {
                                                    w('Close Button');
                                                }),
                                                    m.elements.overlay.addEventListener('click', function(e) {
                                                        var n = e.target;
                                                        (n !== m.elements.contentWrapper &&
                                                            n !== m.elements.headerContainer) ||
                                                            w('Modal Overlay');
                                                    });
                                                var e = function() {
                                                    m.elements.contentWrapper.scrollTop > 0
                                                        ? m.elements.header.classList.add('show')
                                                        : m.elements.header.classList.remove('show');
                                                };
                                                if (
                                                    (m.elements.contentWrapper.addEventListener('scroll', e),
                                                    m.elements.contentWrapper.addEventListener('touchmove', e),
                                                    A()(m.elements.accordions).forEach(function(e) {
                                                        var n = e.getElementsByTagName('h3')[0],
                                                            t = e.getElementsByClassName('accordion-content')[0];
                                                        n.addEventListener('click', function() {
                                                            var n = e.classList.toggle('show');
                                                            t.style.setProperty(
                                                                'max-height',
                                                                n ? t.scrollHeight + 'px' : null
                                                            );
                                                        });
                                                    }),
                                                    i.contentWindow.addEventListener('keyup', function(e) {
                                                        ('Escape' !== e.key && 'Esc' !== e.key && 27 !== e.charCode) ||
                                                            w('Escape Key');
                                                    }),
                                                    'EZP' === p())
                                                ) {
                                                    m.elements.niTab.addEventListener('click', function() {
                                                        return y('NI Tab');
                                                    }),
                                                        m.elements.ezpTab.addEventListener('click', function() {
                                                            return y('EZP Tab');
                                                        });
                                                    var n = function() {
                                                        v(m.elements.amountInput.value);
                                                    };
                                                    m.elements.amountInput.addEventListener('keydown', function(e) {
                                                        var t = e.key,
                                                            i = e.target;
                                                        if (t.length > 1 || e.metaKey || e.ctrlKey)
                                                            'Enter' === t && n();
                                                        else {
                                                            var o = i.value,
                                                                a = i.selectionStart,
                                                                r = o ? '' + o.slice(0, a) + t + o.slice(a) : t;
                                                            (function(e) {
                                                                if (Dt()(Number(e))) return !1;
                                                                var n = e.split('.'),
                                                                    t = n[0],
                                                                    i = n[1];
                                                                return (
                                                                    (void 0 === t ? '' : t).length <= 5 &&
                                                                    (void 0 === i ? '' : i).length <= 2
                                                                );
                                                            })(r) && ((i.value = r), i.setSelectionRange(a + 1, a + 1)),
                                                                e.preventDefault();
                                                        }
                                                    }),
                                                        m.elements.calculateButton.addEventListener('click', n);
                                                }
                                            })();
                                    })
                                    .catch(function(e) {
                                        X.error({ message: Z.MODAL_LOAD_FAILURE, err: e }), f({ error: !0 });
                                    })
                            );
                        }
                        return (
                            n.setAttribute('role', 'alertdialog'),
                            n.setAttribute('aria-label', 'PayPal Credit Promotion Modal'),
                            n.setAttribute(
                                'style',
                                'display: none; overflow: auto; -webkit-overflow-scrolling: touch; position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 2147483647; margin: 0; padding: 0; border: 0;'
                            ),
                            i.setAttribute(
                                'style',
                                'position: absolute; top: 0; left: 0; overflow: hidden; width: 100%; height: 100%; margin: 0; padding: 0; border: 0; display: block;'
                            ),
                            n.appendChild(i),
                            window.top.document.body.appendChild(n),
                            f({ modalProm: b() }),
                            'EZP' === p() &&
                                x().then(function() {
                                    return v(e.amount);
                                }),
                            {
                                open: function(e) {
                                    e.preventDefault(),
                                        ('CLOSED' !== m.status && 'CLOSING' !== m.status) ||
                                            (f({ status: 'OPENING' }),
                                            x().then(function() {
                                                if (m.error)
                                                    return f({ status: 'CLOSED' }), void window.open(u, '_blank');
                                                (n.style.display = 'block'),
                                                    requestAnimationFrame(function() {
                                                        return requestAnimationFrame(function() {
                                                            h(),
                                                                i.contentWindow.focus(),
                                                                f({ status: 'OPEN' }),
                                                                s(),
                                                                m.elements.modalContainer.classList.add('show'),
                                                                g('modal-open');
                                                        });
                                                    });
                                            }));
                                },
                                close: _
                            }
                        );
                    },
                    ['account', 'amount', 'offerType']
                ),
                ti = {
                    init: function(e) {
                        var n = e.options,
                            t = e.meta,
                            i = e.events,
                            a = e.track;
                        if (n._legacy && T()(t.offerType, 'NI'))
                            i.on('click', function(e) {
                                var n = e.target;
                                'IMG' === n.tagName && 'A' === n.parentNode.tagName
                                    ? (window.open(
                                          n.parentNode.href,
                                          'PayPal Credit Terms',
                                          'width=650,height=600,scrollbars=yes,resizable=no,location=no,toolbar=no,menubar=no,dependent=no,dialog=yes,minimizable=no'
                                      ),
                                      e.preventDefault())
                                    : window.open(t.clickUrl, '_blank');
                            });
                        else {
                            var r = ni(o({}, n, t, { track: a }));
                            i.on('click', r.open);
                        }
                    }
                },
                ii = new Map();
            function oi(e) {
                var n = (e.meta && e.meta.offerType) + '::' + e.options.style._flattened.sort().join('::'),
                    t = e.meta,
                    i = X.track({
                        uuid: n,
                        urls: { DEFAULT: t.clickUrl, MORS_IMPRESSION: t.impressionUrl + '&idx=' + e.options.id }
                    });
                return r()(e, { track: i });
            }
            var ai = function(e) {
                    var n = e.options,
                        t = n.onRender;
                    X.info(V.MESSAGE_RENDERED, { id: n.id }), t && t();
                },
                ri = {
                    init: function(e, n) {
                        if (ii.has(e)) ii.get(e).update(n);
                        else {
                            var t = (function(e, n) {
                                X.info(V.MESSAGE_CREATE_INITIATED, { id: e.id, options: e });
                                var t = B(e),
                                    i = t[0],
                                    a = t[1],
                                    l = i._legacy,
                                    c = Ht(l ? 'div' : 'iframe'),
                                    u = c[0],
                                    d = c[1],
                                    m = d.insertMarkup,
                                    f = d.setSize,
                                    p = d.events,
                                    g = d.runStats,
                                    h = d.clearEvents,
                                    y = l ? u : document.createElement('span');
                                function x(e) {
                                    var n = (function(n) {
                                            var t = e.id,
                                                i = e.account,
                                                o = e.amount,
                                                a = e.countryCode,
                                                l = e.style,
                                                c = e._legacy,
                                                u = s(e, [
                                                    'id',
                                                    'account',
                                                    'amount',
                                                    'countryCode',
                                                    'style',
                                                    '_legacy'
                                                ]),
                                                d = { _legacy: c, id: t };
                                            if (
                                                ('string' != typeof i
                                                    ? Zt('account', 'string', i)
                                                    : 13 !== i.length && 10 !== i.length
                                                    ? X.warn(
                                                          'Invalid option value (account). Ensure the correct Merchant Account ID has been entered.'
                                                      )
                                                    : (d.account = i),
                                                void 0 !== o)
                                            ) {
                                                var m = Number(o);
                                                Dt()(m)
                                                    ? X.warn('Invalid option value (amount). Ensure value is a number.')
                                                    : m < 0
                                                    ? X.warn(
                                                          'Invalid option value (amount). Ensure value is a positive number.'
                                                      )
                                                    : (d.amount = m);
                                            }
                                            return (
                                                void 0 !== a &&
                                                    ('string' != typeof a
                                                        ? X.warn(
                                                              'Invalid option value (countryCode). Ensure value is a string.'
                                                          )
                                                        : 2 !== a.length
                                                        ? X.warn(
                                                              'Invalid option value (countryCode). Country code should be 2 characters.'
                                                          )
                                                        : (d.countryCode = a)),
                                                'object' == typeof l && 'string' == typeof l.layout && Vt[l.layout]
                                                    ? (d.style = qt(l))
                                                    : ('object' == typeof l
                                                          ? X.warn(
                                                                'Invalid option value (style.layout). Expected one of ["' +
                                                                    Object.keys(Vt).join('", "') +
                                                                    '"] but received "' +
                                                                    l.layout +
                                                                    '".'
                                                            )
                                                          : void 0 !== l && Zt('style', 'object', l),
                                                      (d.style = qt({ layout: 'text' }))),
                                                (d.style._flattened = U(d.style)),
                                                r()(d, Kt(Ft, u, '')),
                                                d
                                            );
                                        })(),
                                        t = (function(e) {
                                            if ('custom' !== G(e, 'style.layout')) return ae(e);
                                            var n = G(e, 'sign');
                                            return I.ZalgoPromise.all([ae(e), ie(n, e.account, e.style)]).then(function(
                                                e
                                            ) {
                                                var n = e[0];
                                                return 'object' == typeof n.markup && (n.markup.template = e[1]), n;
                                            });
                                        })(n)
                                            .then(H(k(r.a, { options: n }), m))
                                            .then(
                                                H(
                                                    k(r.a, { wrapper: y, options: n, events: p }),
                                                    oi,
                                                    j(ti.init),
                                                    j(f),
                                                    j(g),
                                                    ai
                                                )
                                            )
                                            .catch(function(e) {
                                                return X.error({ error: '' + e });
                                            });
                                    X.waitFor(t), a(n);
                                }
                                return (
                                    y !== u && y.appendChild(u),
                                    n.appendChild(y),
                                    x(i),
                                    {
                                        wrapper: y,
                                        container: u,
                                        update: function(e) {
                                            var n = D(i, e),
                                                t = (function e(n, t) {
                                                    return C()(t).reduce(function(t, i) {
                                                        var a,
                                                            r,
                                                            s = i[0],
                                                            l = i[1];
                                                        if (!n[s]) return o({}, t, (((a = {})[s] = l), a));
                                                        if ('object' != typeof l)
                                                            return l !== n[s] ? o({}, t, (((r = {})[s] = l), r)) : t;
                                                        if (Array.isArray(l)) {
                                                            var c;
                                                            if (Array.isArray(n[s])) {
                                                                var u,
                                                                    d = l.filter(function(e) {
                                                                        return !S()(n[s], e);
                                                                    });
                                                                return d.length > 0
                                                                    ? o({}, t, (((u = {})[s] = d), u))
                                                                    : t;
                                                            }
                                                            return o({}, t, (((c = {})[s] = l), c));
                                                        }
                                                        var m,
                                                            f = e(n[s], l);
                                                        return Object.keys(f).length > 0
                                                            ? o({}, t, (((m = {})[s] = f), m))
                                                            : t;
                                                    }, {});
                                                })(i, n);
                                            Object.keys(t).length > 0 &&
                                                (h(),
                                                X.info(V.MESSAGE_UPDATE_INITIATED, { id: n.id, options: e }),
                                                x(n));
                                        }
                                    }
                                );
                            })(n, e);
                            ii.set(e, t), X.info(V.IFRAME_CREATED, { id: n.id });
                        }
                        return ii.get(e).update;
                    }
                };
            function si(e) {
                var n = A()(e.attributes)
                    .filter(function(e) {
                        var n = e.nodeName;
                        return T()(n, 'data-pp-');
                    })
                    .reduce(function(e, n) {
                        var t = n.nodeValue;
                        return t
                            ? D(
                                  e,
                                  (function e(n, t) {
                                      var i,
                                          o,
                                          a = n.indexOf('-');
                                      if (-1 === a) return ((o = {})[n] = t), o;
                                      var r = n.slice(0, a),
                                          s = n.slice(a + 1);
                                      return ((i = {})[r] = e(s, t)), i;
                                  })(n.nodeName.replace('data-pp-', ''), t)
                              )
                            : e;
                    }, {});
                if (
                    !e.firstElementChild ||
                    'SCRIPT' !== e.firstElementChild.tagName ||
                    'text/template' !== e.firstElementChild.getAttribute('type')
                )
                    return n;
                var t = e.firstElementChild.textContent.trim();
                return e.removeChild(e.firstElementChild), D(n, { style: { markup: t } });
            }
            function li(e) {
                return 'object' == typeof HTMLElement
                    ? e instanceof HTMLElement
                    : e && 'object' == typeof e && null !== e && 1 === e.nodeType && 'string' == typeof e.nodeName;
            }
            function ci(e, n) {
                return (
                    void 0 === n && (n = '[data-pp-message]'),
                    (function(e, n) {
                        var t, i;
                        if ('string' == typeof e) (t = A()(document.querySelectorAll(e))), (i = e);
                        else if (li(e)) (t = [e]), (i = 'HTMLElement');
                        else {
                            if (!Array.isArray(e) || !e.every(li)) return X.warn('Invalid selector', e);
                            (t = [].concat(e)), (i = 'Array<HTMLElement>');
                        }
                        (t = t.filter(function(e) {
                            return e.ownerDocument.body.contains(e)
                                ? !n._auto || !e.hasAttribute('data-pp-id')
                                : (X.warn('Skipping container. Must be in the document:', e), !1);
                        })),
                            X.info(V.STARTING_MESSAGE_RENDER, { url: window.location.href, selector: i });
                        var o = t.map(function(e) {
                            var t = D(n, si(e));
                            return (
                                e.hasAttribute('data-pp-id') ||
                                    (e.setAttribute('data-pp-id', window.paypal.Messages.__state__.nextId),
                                    (window.paypal.Messages.__state__.nextId += 1)),
                                (t.id = e.getAttribute('data-pp-id')),
                                [ri.init(e, t), e, t]
                            );
                        });
                        return function(e) {
                            return o.forEach(function(n) {
                                var t = n[0],
                                    i = n[1],
                                    o = D(n[2], D(e, si(i)));
                                (o.id = i.getAttribute('data-pp-id')), t(o);
                            });
                        };
                    })(n, e)
                );
            }
            var ui = { BLU: 'blue', BLK: 'black', GRY: 'gray', WHT: 'white' },
                di = { x180x150: '1x1', x160x600: '1x4', x728x90: '8x1', x1169x50: '20x1' },
                mi = {
                    x1169x50: ['BLKWHTYCSS', 'BLUWHTYCSS', 'WHTBLUNCSS', 'WHTBLUYCSS'],
                    x160x600: ['BLKWHTYCSS', 'BLUWHTYCSS', 'WHTBLUNCSS', 'WHTBLUYCSS'],
                    x180x150: ['BLKWHTYCSS', 'BLUWHTYCSS', 'WHTBLUNCSS', 'WHTBLUYCSS'],
                    x728x90: ['BLKWHTYCSS', 'BLUWHTYCSS', 'WHTBLUNCSS', 'WHTBLUYCSS']
                },
                fi = {
                    x1169x51: ['x1169x50', 'BLKWHTYLRG'],
                    x1169x52: ['x1169x50', 'BLUWHTYLRG'],
                    x1169x50: ['x1169x50', 'WHTBLUYLRG'],
                    x160x601: ['x160x600', 'BLKWHTYMED'],
                    x161x600: ['x160x600', 'BLUWHTYMED'],
                    x160x602: ['x160x600', 'WHTBLUYMED'],
                    x180x151: ['x180x150', 'BLKWHTYSML'],
                    x180x152: ['x180x150', 'BLUWHTYSML'],
                    x181x150: ['x180x150', 'WHTBLUYSML'],
                    x300x251: ['x300x250', 'BLKWHTYMED'],
                    x300x252: ['x300x250', 'BLUWHTYMED'],
                    x301x250: ['x300x250', 'WHTBLUYMED'],
                    x728x91: ['x728x90', 'BLUWHTYLRG'],
                    x729x90: ['x728x90', 'BLKWHTYLRG'],
                    x730x90: ['x728x90', 'WHTBLUYLRG']
                },
                pi = {
                    x160x600: ['BLKWHTYMED', 'BLUWHTYMED', 'WHTBLUNMED', 'WHTBLUYMED'],
                    x180x150: ['BLKWHTYSML', 'BLUWHTYSML', 'WHTBLUNSML', 'WHTBLUYSML'],
                    x300x250: ['BLKWHTYMED', 'BLUWHTYMED', 'WHTBLUNSML', 'WHTBLUYMED'],
                    x728x90: ['BLKWHTYLRG', 'BLUWHTYLRG', 'WHTBLUNLRG', 'WHTBLUYLRG'],
                    x1169x50: ['BLKWHTYLRG', 'BLUWHTYLRG', 'WHTBLUNLRG', 'WHTBLUYLRG']
                },
                gi = [
                    'x90x136',
                    'x190x50',
                    'x228x128',
                    'x240x60',
                    'x999x70',
                    'x250x52',
                    'x260x72',
                    'x274x97',
                    'x280x42',
                    'x289x110',
                    'x300x600',
                    'x184x153',
                    'x768x70',
                    'x336x280',
                    'x790x70',
                    'x338x65',
                    'x375x50',
                    'x467x58',
                    'x650x60',
                    'x678x279',
                    'x180x150',
                    'x190x100',
                    'x191x101',
                    'x234x400',
                    'x234x60',
                    'x236x61',
                    'x250x250',
                    'x280x280',
                    'x300x250',
                    'x300x50',
                    'x468x60',
                    'x540x200',
                    'x728x90',
                    'x800x66',
                    'x120x240',
                    'x120x600',
                    'x120x90',
                    'x150x100',
                    'x151x101',
                    'x160x600',
                    'x170x100'
                ],
                hi = ['x168x374', 'x340x60', 'x765x60', 'x1000x50', 'x234x100', 'x1000x36', 'x310x100'],
                yi = [
                    'x1000x36',
                    'x120x90',
                    'x234x60',
                    'x250x250',
                    'x300x50',
                    'x340x60',
                    'x468x60',
                    'x728x90',
                    'x540x200',
                    'x170x100'
                ],
                xi = [
                    ['35NBB9X6Z4UV4', 'ae448a026d'],
                    ['4P9TSD9APDTT6', '9483cfbbc4'],
                    ['A96ZUTUZAMETY', '6fd53e600b'],
                    ['GNPYYLVLCUVFY'],
                    ['HYRTLNXT9H2PG', '027d65f66e'],
                    ['KWRJULYJN7PAQ', 'e8cebeca35'],
                    ['R2AQ6GECMNWVA', '2f242b9904'],
                    ['RCNQL2J33NC54', 'df8729dd2c'],
                    ['TCE2H9EMJKVTL', 'c78836e69a'],
                    ['UL8SSCYBGT8N2'],
                    ['XCARJ2AJDDSRG']
                ];
            window.__PP = window.__PP || {};
            var _i = 'c' + (new Date().getTime() + Math.floor(65536 * Math.random())),
                wi = [650, 600],
                vi = 0;
            function bi(e, n) {
                return function(t) {
                    return n.call(
                        e,
                        (function(e) {
                            void 0 === e && (e = window.evt);
                            var n = {};
                            return (
                                (n.target = e.target || e.srcElement),
                                3 === n.target.nodeType && (n.target = n.target.parentNode),
                                (n.preventDefault = e.preventDefault
                                    ? function() {
                                          return e.preventDefault();
                                      }
                                    : function() {
                                          e.returnValue = !1;
                                      }),
                                n
                            );
                        })(t)
                    );
                };
            }
            var Ei = {
                    goto: function(e) {
                        window.location = e;
                    },
                    popup: function(e, n, t) {
                        return window.open(e, n, t);
                    },
                    createElement: function(e) {
                        return document.createElement(e);
                    },
                    getElementsByTagName: function(e) {
                        return document.getElementsByTagName(e);
                    },
                    registerEvent: function(e, n, t, i) {
                        var o = this;
                        if (window.addEventListener) e.addEventListener(n, bi(e, t), !!i);
                        else if (window.attachEvent) e.attachEvent('on' + n, bi(e, t));
                        else {
                            var a = e['on' + n];
                            e['on' + n] = a
                                ? function() {
                                      bi(e, t).call(o), a.call(o);
                                  }
                                : t;
                        }
                    }
                },
                Ai = (function() {
                    function e(e) {
                        var n = Ei.createElement('script');
                        (n.async = 'true'), (n.src = e), (this.el = n), this.attach();
                    }
                    var n = e.prototype;
                    return (
                        (n.attach = function() {
                            var e = Ei.getElementsByTagName('script')[0];
                            e.parentNode.insertBefore(this.el, e), (this.attach = function() {});
                        }),
                        (n.destroy = function() {
                            this.el.parentNode.removeChild(this.el), delete this.el;
                        }),
                        e
                    );
                })(),
                Pi = (function() {
                    function e(e) {
                        this.el = e;
                    }
                    var n = e.prototype;
                    return (
                        (n.getKVs = function() {
                            var e = this.el.attributes;
                            return A()(e).reduce(function(e, n) {
                                if (T()(n.name, 'data-pp_')) {
                                    var t = n.name.slice(8);
                                    e[t] = ('dimensions' === t ? 'x' : '') + n.value;
                                }
                                return e;
                            }, {});
                        }),
                        (n.injectAd = function(e) {
                            (this.ad = e), this.el.parentNode.insertBefore(e.container, this.el);
                        }),
                        (n.registerListeners = function() {
                            var e = this;
                            Ei.registerEvent(this.ad.container, 'click', function() {
                                var n;
                                (n = e.ad).clickHandler.apply(n, arguments);
                            });
                        }),
                        (n.destroyDom = function() {
                            this.el.parentNode.removeChild(this.el), delete this.el;
                        }),
                        e
                    );
                })(),
                Ti = (function() {
                    function e(e) {
                        (this.idx = vi += 1),
                            (this.namespace = _i + this.idx),
                            (this.kvs = e),
                            (this.variant = e && e.partner_version ? 'PARTNER' : 'MERCHANT'),
                            this.initContainer(),
                            this.initCallback(),
                            this.initQueryString();
                    }
                    var n = e.prototype;
                    return (
                        (n.initContainer = function() {
                            (this.container = Ei.createElement('span')), (this.container.style.display = 'none');
                        }),
                        (n.injectScripts = function(e) {
                            var n = this,
                                t = document.createElement('div');
                            t.innerHTML = e;
                            var i = t.getElementsByTagName('script');
                            return (
                                A()(i).forEach(function(e) {
                                    var t = document.createElement('script');
                                    (t.text = e.text), n.container.appendChild(t), e.parentNode.removeChild(e);
                                }),
                                t.innerHTML
                            );
                        }),
                        (n.setContent = function(e) {
                            if ('MERCHANT' === this.variant) {
                                var n = this.injectScripts(e);
                                (this.container.innerHTML = n), (this.container.style.display = '');
                            } else {
                                var t = Ei.createElement('iframe');
                                t.setAttribute('width', '100%'),
                                    t.setAttribute('height', '100%'),
                                    (t.style.border = 'none'),
                                    this.container.appendChild(t);
                                var i = t.contentWindow && t.contentWindow.document;
                                i.open(),
                                    i.write(
                                        '<!DOCTYPE html>\r\n<html style="width:100%; height:100%">\r\n\t<head>\r\n\t\t<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\r\n\t\t<style type="text/css">\r\n\t\t\timg { display: block; }\r\n\t\t</style>\r\n\t</head>\r\n\t<body style="margin:0em; padding:0em; width:100%; height:100%">'
                                    ),
                                    i.write(e),
                                    i.write('\r\n\t</body>\r\n</html>'),
                                    i.close(),
                                    (this.container.style.display = 'inline-block'),
                                    this.kvs &&
                                        this.kvs.partner_version &&
                                        +this.kvs.partner_version >= 2 &&
                                        (this.container.style.display = 'inline');
                            }
                        }),
                        (n.callback = function(e) {
                            this.setContent(e),
                                this.script.destroy(),
                                delete window.__PP[this.namespace],
                                delete this.script;
                        }),
                        (n.initCallback = function() {
                            var e = this;
                            (this.callbackName = '__PP.' + this.namespace),
                                (window.__PP[this.namespace] = function() {
                                    e.callback.apply(e, arguments);
                                });
                        }),
                        (n.clickHandler = function(e) {
                            var n = e.target,
                                t = this.kvs.popup,
                                i =
                                    'width=' +
                                    wi[0] +
                                    ',height=' +
                                    wi[1] +
                                    ',scrollbars=yes,resizable=no,location=no,toolbar=no,menubar=no,dependent=no,dialog=yes,minimizable=no';
                            'img' !== n.nodeName.toLowerCase() ||
                                (t && 'true' !== t) ||
                                (Ei.popup(n.parentNode.href, this.namespace, i), e.preventDefault());
                        }),
                        (n.request = function() {
                            this.script = new Ai('https://www.paypal.com/imadserver/upstream' + this.queryString);
                        }),
                        (n.initQueryString = function() {
                            var e = {
                                call: this.callbackName,
                                v: 2.4,
                                vtag: 3.1,
                                rand: new Date().getTime(),
                                page: 'DefaultPage',
                                format: 'HTML',
                                presentation_types: 'HTML',
                                locale: 'en_US',
                                country_code: 'US'
                            };
                            'MERCHANT' === this.variant && ((e.pu_type = 'ANONYMOUS'), (e.ch = 'UPSTREAM'));
                            var n = o({}, e, this.kvs),
                                t = C()(n).reduce(function(e, n) {
                                    return e + '&' + n[0] + '=' + encodeURIComponent(n[1]);
                                }, '');
                            this.queryString = '?' + t.slice(1);
                        }),
                        e
                    );
                })(),
                Ri = {
                    pubid: 'pub_id',
                    payerid: 'payer_id',
                    placementtype: 'dimensions',
                    cartamt: 'currency_value',
                    style: 'style',
                    boost: 'boost',
                    popup: 'popup'
                };
            t.d(n, 'Messages', function() {
                return Li;
            });
            var zi = {},
                Li = function(e) {
                    return {
                        render: function(n) {
                            return ci(o({}, zi, e), n);
                        }
                    };
                };
            if (
                (r()(Li, {
                    render: function(e, n) {
                        return void 0 === e && (e = {}), ci(o({}, zi, e), n);
                    },
                    setGlobalConfig: function(e) {
                        return void 0 === e && (e = {}), r()(zi, e);
                    }
                }),
                window)
            ) {
                A()(document.getElementsByTagName('script')).some(function(e) {
                    var n;
                    (n = e),
                        A()(n.attributes).forEach(function(e) {
                            if (e.name.search(/^data_pp[_-]/) >= 0) {
                                var t = e.name.replace(/^(data)_([a-z])/, '$1-$2');
                                n.setAttribute(t, e.value), n.removeAttribute(e.name);
                            }
                            var i = e.name.match(/^data-pp-([a-z]+)/);
                            i &&
                                Ri[i[1]] &&
                                (n.setAttribute('data-pp_' + Ri[i[1]], e.value), n.removeAttribute(e.name));
                        });
                    var t = e.getAttribute('data-pp_pub_id'),
                        i = e.getAttribute('data-pp_payer_id'),
                        o = e.getAttribute('data-pp_dimensions');
                    if ((i || t) && o) {
                        var a = new Pi(e);
                        if (
                            !(function(e) {
                                var n = e.getKVs(),
                                    t = n.payer_id || n.pub_id,
                                    i = (function(e, n, t) {
                                        if (
                                            xi.some(function(e) {
                                                return e.includes(t);
                                            })
                                        )
                                            return [];
                                        if (n)
                                            return pi[e] && S()(pi[e], n)
                                                ? ['image', '', e, n]
                                                : mi[e] && S()(mi[e], n)
                                                ? ['flex', 'flex', e, n]
                                                : [];
                                        if (fi[e]) return ['image', ''].concat(fi[e]);
                                        var i = S()(gi, e),
                                            o = S()(hi, e),
                                            a = S()(yi, e) ? 'html' : '';
                                        return i ? ['image', a, e, 'none'] : o ? ['html', a, e, 'none'] : [];
                                    })(n.dimensions, n.style, t),
                                    o = i[0],
                                    a = i[1],
                                    r = i[2];
                                if (r) {
                                    var s = (function(e, n, t, i) {
                                            var o = t.slice(1),
                                                a = 'none',
                                                r = !1;
                                            return (
                                                10 === i.length &&
                                                    ((a = ui[i.slice(0, 3)]), (r = 'Y' === i.slice(6, 7))),
                                                'flex' === e && 'flex' === n
                                                    ? {
                                                          layout: 'flex',
                                                          color: 'white' !== a || r ? a : 'white-no-border',
                                                          ratio: di[t]
                                                      }
                                                    : {
                                                          layout: 'legacy',
                                                          typeNI: e,
                                                          typeEZP: n,
                                                          size: o,
                                                          color: a,
                                                          border: r
                                                      }
                                            );
                                        })(o, a, r, i[3]),
                                        l = document.createElement('span');
                                    return (
                                        e.el.parentNode.insertBefore(l, e.el),
                                        setTimeout(function() {
                                            ci(
                                                {
                                                    _legacy: 'flex' !== o && 'flex' !== a,
                                                    account: t,
                                                    amount: n.currency_value,
                                                    style: s,
                                                    countryCode: 'US'
                                                },
                                                l
                                            );
                                        }, 0),
                                        e.destroyDom(),
                                        !0
                                    );
                                }
                                return !1;
                            })(a)
                        ) {
                            var r = new Ti(a.getKVs());
                            a.injectAd(r), a.registerListeners(), a.ad.request(), a.destroyDom();
                        }
                        return !0;
                    }
                    return !1;
                }),
                    Object.defineProperty(Li, '__state__', {
                        value: G(window, 'paypal.Messages.__state__') || { nextId: 0, globalConfig: zi },
                        enumerable: !1,
                        writable: !1
                    }),
                    r()(zi, G(window, 'paypal.Messages.__state__.globalConfig'));
                var Si = document.currentScript || document.querySelector('script[src$="messaging.js"]');
                Si && r()(zi, si(Si)),
                    (window.paypal.Message = Li),
                    zi.account &&
                        ('loading' === document.readyState
                            ? window.addEventListener('DOMContentLoaded', function() {
                                  return Li.render({ _auto: !0 });
                              })
                            : Li.render({ _auto: !0 }));
            }
        }
    ]).Messages);
//# sourceMappingURL=merchant.js.map
