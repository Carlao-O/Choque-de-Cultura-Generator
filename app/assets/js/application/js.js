// Check: http://lou.wtf/cheet.js/
$( document ).ready(function() {
    var posiX = 0;
    var posiY = 0;
    var imgWidth = $("#top").width();
    if (imgWidth > 1900) {
        posiY = -450;
    } else if (imgWidth > 1500) {
        posiY = -350;
    }
    cheet('up up down down left right left right b a', function() {
        $('#top').css("background-image", "url(img/application/cerginho-pereira-nunes.gif)");
        $('#top').css("background-position", posiX+'px '+posiY+'px');
    });
});

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : t.UIkit = e(t.jQuery)
}(this, function(t) {
    "use strict";

    function e() {
        return "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll
    }

    function i(t) {
        var i = function() {
            o(document, "DOMContentLoaded", i), o(window, "load", i), t()
        };
        e() ? t() : (n(document, "DOMContentLoaded", i), n(window, "load", i))
    }

    function n(t, e, i, n) {
        Bt(t)[0].addEventListener(e, i, n)
    }

    function o(t, e, i, n) {
        Bt(t)[0].removeEventListener(e, i, n)
    }

    function s(t, e, i, n) {
        void 0 === i && (i = 400), void 0 === n && (n = "linear");
        var o = S(function(s, r) {
            t = Bt(t);
            for (var a in e) t.css(a, t.css(a));
            var l = setTimeout(function() {
                return t.trigger(te || "transitionend")
            }, i);
            t.one(te || "transitionend", function(e, i) {
                e.promise = o, clearTimeout(l), t.removeClass("uk-transition").css("transition", ""), i ? r() : s()
            }).addClass("uk-transition").css("transition", "all " + i + "ms " + n).css(e)
        }).catch(function() {});
        return o
    }

    function r(t, e, i, n, o) {
        void 0 === i && (i = 200);
        var s = S(function(r) {
            function a() {
                t.css("animation-duration", "").removeClass(l + " " + e)
            }
            var l = o ? "uk-animation-leave" : "uk-animation-enter";
            t = Bt(t), 0 === e.lastIndexOf("uk-animation-", 0) && (n && (e += " uk-animation-" + n), o && (e += " uk-animation-reverse")), a(), t.one(ee || "animationend", function(t) {
                t.promise = s, s.then(a), r()
            }).css("animation-duration", i + "ms").addClass(e).addClass(l), ee || Wt(function() {
                return Ut.cancel(t)
            })
        });
        return s
    }

    function a(t, e) {
        return t = Bt(t), t.is(e) || !!(P(e) ? t.parents(e).length : Bt.contains(e instanceof Bt ? e[0] : e, t[0]))
    }

    function l(t, e, i, n) {
        return t = Bt(t), t.attr(e, function(t, e) {
            return e ? e.replace(i, n) : e
        })
    }

    function c(t, e) {
        return l(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "")
    }

    function h(t, e, i, n) {
        if (void 0 === e && (e = !0), void 0 === i && (i = !1), void 0 === n && (n = !1), P(t)) {
            var o = document.createEvent("Event");
            o.initEvent(t, e, i), t = o
        }
        return n && Bt.extend(t, n), t
    }

    function u(t, e, i) {
        if (void 0 === e && (e = 0), void 0 === i && (i = 0), t = Bt(t), !t.is(":visible")) return !1;
        var n = jt.scrollLeft(),
            o = jt.scrollTop(),
            s = t.offset(),
            r = s.top,
            a = s.left;
        return r + t.height() >= o && r - e <= o + jt.height() && a + t.width() >= n && a - i <= n + jt.width()
    }

    function d(t, e, i) {
        void 0 === i && (i = 0), e = Bt(e);
        var n = Bt(e).length;
        return t = (O(t) ? t : "next" === t ? i + 1 : "previous" === t ? i - 1 : P(t) ? parseInt(t, 10) : e.index(t)) % n, t < 0 ? t + n : t
    }

    function f(t) {
        return t = Bt(t), qt[t[0].tagName.toLowerCase()]
    }

    function g(t, e) {
        var i = H(t);
        return i ? i.reduce(function(t, e) {
            return _(e, t)
        }, e) : _(t)
    }

    function p(t, e, i) {
        return (window.getComputedStyle(t, i) || {})[e]
    }

    function m(t) {
        var e, i = document.documentElement,
            n = i.appendChild(document.createElement("div"));
        n.classList.add("var-" + t);
        try {
            e = p(n, "content", ":before").replace(/^["'](.*)["']$/, "$1"), e = JSON.parse(e)
        } catch (t) {}
        return i.removeChild(n), e || void 0
    }

    function v() {
        var t = this;
        t.reads = [], t.writes = [], t.raf = Wt.bind(window)
    }

    function w(t) {
        t.scheduled || (t.scheduled = !0, t.raf(b.bind(null, t)))
    }

    function b(t) {
        var e, i = t.reads.splice(0, t.reads.length),
            n = t.writes.splice(0, t.writes.length);
        try {
            y(i), y(n)
        } catch (t) {
            e = t
        }
        if (t.scheduled = !1, (t.reads.length || t.writes.length) && w(t), e) {
            if (!t.catch) throw e;
            t.catch(e)
        }
    }

    function y(t) {
        for (var e; e = t.shift();) e()
    }

    function x(t, e) {
        var i = t.indexOf(e);
        return !!~i && !!t.splice(i, 1)
    }

    function $(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
    }

    function k(t, e) {
        return function(i) {
            var n = arguments.length;
            return n ? n > 1 ? t.apply(e, arguments) : t.call(e, i) : t.call(e)
        }
    }

    function C(t, e) {
        return ne.call(t, e)
    }

    function S(t) {
        if (!D(window.Promise)) return new window.Promise(t);
        var e = Bt.Deferred();
        return e.catch || (e.catch = function(t) {
            return this.then(null, t)
        }), t(e.resolve, e.reject), e
    }

    function T(t) {
        return t.replace(/(?:^|[-_\/])(\w)/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }

    function E(t) {
        return t.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function I(t) {
        return t.replace(oe, A)
    }

    function A(t, e) {
        return e ? e.toUpperCase() : ""
    }

    function P(t) {
        return "string" == typeof t
    }

    function O(t) {
        return "number" == typeof t
    }

    function D(t) {
        return void 0 === t
    }

    function N(t) {
        return P(t) && t.match(/^(!|>|\+|-)/)
    }

    function H(t) {
        return N(t) && t.split(/(?=\s(?:!|>|\+|-))/g).map(function(t) {
            return t.trim()
        })
    }

    function _(t, e) {
        if (t === !0) return null;
        try {
            if (e && N(t) && ">" !== t[0]) {
                var i = se[t[0]],
                    n = t.substr(1);
                e = Bt(e), "closest" === i && (e = e.parent(), n = n || "*"), t = e[i](n)
            } else t = Bt(t, e)
        } catch (t) {
            return null
        }
        return t.length ? t : null
    }

    function B(t) {
        return "boolean" == typeof t ? t : "true" === t || "1" == t || "" === t || "false" !== t && "0" != t && t
    }

    function j(t) {
        var e = Number(t);
        return !isNaN(e) && e
    }

    function M(t) {
        if (P(t) && "@" == t[0]) {
            var e = "media-" + t.substr(1);
            t = re[e] || (re[e] = parseFloat(m(e)))
        }
        return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
    }

    function F(t, e, i) {
        return t === Boolean ? B(e) : t === Number ? j(e) : "jQuery" === t ? g(e, i) : "media" === t ? M(e) : t ? t(e) : e
    }

    function L(t, e) {
        function i(i) {
            o[i] = (ae[i] || ge)(t[i], e[i])
        }
        var n, o = {};
        if (e.mixins)
            for (var s = 0, r = e.mixins.length; s < r; s++) t = L(t, e.mixins[s]);
        for (n in t) i(n);
        for (n in e) C(t, n) || i(n);
        return o
    }

    function R(t, e, i, n, o, s, r, a) {
        t = Bt(t), e = Bt(e), a = a && Bt(a), i = V(i), n = V(n);
        var l = U(t),
            c = U(e),
            h = c;
        q(h, i, l, -1), q(h, n, c, 1), o = z(o, l.width, l.height), s = z(s, c.width, c.height), o.x += s.x, o.y += s.y, h.left += o.x, h.top += o.y, a = U(a || window);
        var u = {
            element: i,
            target: n
        };
        return r && Bt.each(pe, function(t, e) {
            var s = e[0],
                d = e[1],
                f = e[2];
            if (r === !0 || ~r.indexOf(t)) {
                var g = i[t] === d ? -l[s] : i[t] === f ? l[s] : 0,
                    p = n[t] === d ? c[s] : n[t] === f ? -c[s] : 0;
                if (h[d] < a[d] || h[d] + l[s] > a[f]) {
                    var m = h[d] + g + p - 2 * o[t];
                    m >= a[d] && m + l[s] <= a[f] && (h[d] = m, ["element", "target"].forEach(function(e) {
                        u[e][t] = g ? u[e][t] === pe[t][1] ? pe[t][2] : pe[t][1] : u[e][t]
                    }))
                }
            }
        }), t.offset({
            left: h.left,
            top: h.top
        }), u
    }

    function U(t) {
        t = Bt(t);
        var e = Math.round(t.outerWidth()),
            i = Math.round(t.outerHeight()),
            n = t[0] && t[0].getClientRects ? t.offset() : null,
            o = n ? Math.round(n.left) : t.scrollLeft(),
            s = n ? Math.round(n.top) : t.scrollTop();
        return {
            width: e,
            height: i,
            left: o,
            top: s,
            right: o + e,
            bottom: s + i
        }
    }

    function q(t, e, i, n) {
        Bt.each(pe, function(o, s) {
            var r = s[0],
                a = s[1],
                l = s[2];
            e[o] === l ? t[a] += i[r] * n : "center" === e[o] && (t[a] += i[r] * n / 2)
        })
    }

    function V(t) {
        var e = /left|center|right/,
            i = /top|center|bottom/;
        return t = (t || "").split(" "), 1 === t.length && (t = e.test(t[0]) ? t.concat(["center"]) : i.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
            x: e.test(t[0]) ? t[0] : "center",
            y: i.test(t[1]) ? t[1] : "center"
        }
    }

    function z(t, e, i) {
        return t = (t || "").split(" "), {
            x: t[0] ? parseFloat(t[0]) * ("%" === t[0][t[0].length - 1] ? e / 100 : 1) : 0,
            y: t[1] ? parseFloat(t[1]) * ("%" === t[1][t[1].length - 1] ? i / 100 : 1) : 0
        }
    }

    function W(t) {
        switch (t) {
            case "left":
                return "right";
            case "right":
                return "left";
            case "top":
                return "bottom";
            case "bottom":
                return "top";
            default:
                return t
        }
    }

    function Q(t, e, i, n) {
        return Math.abs(t - e) >= Math.abs(i - n) ? t - e > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
    }

    function Y() {
        ue = null, me.last && (void 0 !== me.el && me.el.trigger("longTap"), me = {})
    }

    function K() {
        ue && clearTimeout(ue), ue = null
    }

    function G() {
        le && clearTimeout(le), ce && clearTimeout(ce), he && clearTimeout(he), ue && clearTimeout(ue), le = ce = he = ue = null, me = {}
    }

    function X(t) {
        return we || t.originalEvent && "touch" === t.originalEvent.pointerType
    }

    function J(t) {
        var e = t.data;
        t.use = function(t) {
            if (!t.installed) return t.call(null, this), t.installed = !0, this
        }, t.mixin = function(e, i) {
            i = (P(i) ? t.components[i] : i) || this, e = L({}, e), e.mixins = i.options.mixins, delete i.options.mixins, i.options = L(e, i.options)
        }, t.extend = function(t) {
            t = t || {};
            var e = this,
                i = t.name || e.options.name,
                n = Z(i || "UIkitComponent");
            return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.options = L(e.options, t), n.super = e, n.extend = e.extend, n
        }, t.update = function(i, n, o) {
            if (void 0 === o && (o = !1), i = h(i || "update"), !n) return void et(t.instances, i);
            if (n = Bt(n)[0], o) {
                do et(n[e], i), n = n.parentNode; while (n)
            } else tt(n, function(t) {
                return et(t[e], i)
            })
        };
        var i;
        Object.defineProperty(t, "container", {
            get: function() {
                return i || document.body
            },
            set: function(t) {
                i = t
            }
        })
    }

    function Z(t) {
        return new Function("return function " + T(t) + " (options) { this._init(options); }")()
    }

    function tt(t, e) {
        if (t.nodeType === Node.ELEMENT_NODE)
            for (e(t), t = t.firstChild; t;) tt(t, e), t = t.nextSibling
    }

    function et(t, e) {
        if (t)
            for (var i in t) t[i]._isReady && t[i]._callUpdate(e)
    }

    function it(e) {
        var i = 0;
        e.prototype.props = {}, e.prototype._init = function(t) {
            t = t || {}, t = this.$options = L(this.constructor.options, t, this), this.$el = null, this.$name = e.prefix + E(this.$options.name), this._uid = i++, this._initData(), this._initMethods(), this._callHook("created"), this._frames = {
                reads: {},
                writes: {}
            }, t.el && this.$mount(t.el)
        }, e.prototype._initData = function() {
            var e = this,
                i = t.extend(!0, {}, this.$options.defaults),
                n = this.$options.data || {},
                o = this.$options.args || [],
                s = this.$options.props || {};
            if (i) {
                o.length && t.isArray(n) && (n = n.slice(0, o.length).reduce(function(e, i, n) {
                    return t.isPlainObject(i) ? t.extend(e, i) : e[o[n]] = i, e
                }, {}));
                for (var r in i) e[r] = C(n, r) ? F(s[r], n[r], e.$options.el) : i[r]
            }
        }, e.prototype._initProps = function() {
            var t, e, i = this,
                n = this.$el[0],
                o = this.$options.args || [],
                s = this.$options.props || {},
                r = n.getAttribute(this.$name) || n.getAttribute("data-" + this.$name);
            if (s) {
                for (t in s)
                    if (e = E(t), n.hasAttribute(e)) {
                        var a = F(s[t], n.getAttribute(e), n);
                        if ("target" === e && (!a || 0 === a.lastIndexOf("_", 0))) continue;
                        i[t] = a
                    }
                if (r) {
                    if ("{" === r[0]) try {
                        r = JSON.parse(r)
                    } catch (t) {
                        console.warn("Invalid JSON."), r = {}
                    } else if (o.length && !~r.indexOf(":")) {
                        l = {}, l[o[0]] = r, r = l;
                        var l
                    } else {
                        var c = {};
                        r.split(";").forEach(function(t) {
                            var e = t.split(/:(.+)/),
                                i = e[0],
                                n = e[1];
                            i && n && (c[i.trim()] = n.trim())
                        }), r = c
                    }
                    for (t in r || {}) e = I(t), void 0 !== s[e] && (i[e] = F(s[e], r[t], n))
                }
            }
        }, e.prototype._initMethods = function() {
            var t = this,
                e = this.$options.methods;
            if (e)
                for (var i in e) t[i] = k(e[i], t)
        }, e.prototype._initEvents = function(e) {
            var i = this,
                n = this.$options.events,
                o = function(n, o) {
                    t.isPlainObject(n) || (n = {
                        name: o,
                        handler: n
                    });
                    var s = n.name,
                        r = n.delegate,
                        a = n.filter,
                        l = n.handler;
                    if (s += "." + i.$options.name, e) i.$el.off(s);
                    else {
                        if (a && !a.call(i)) return;
                        l = P(l) ? i[l] : k(l, i), r ? i.$el.on(s, P(r) ? r : r.call(i), l) : i.$el.on(s, l)
                    }
                };
            n && n.forEach(function(t) {
                if ("handler" in t) o(t);
                else
                    for (var e in t) o(t[e], e)
            })
        }, e.prototype._callHook = function(t) {
            var e = this,
                i = this.$options[t];
            i && i.forEach(function(t) {
                return t.call(e)
            })
        }, e.prototype._callReady = function() {
            this._isReady = !0, this._callHook("ready"), this._callUpdate()
        }, e.prototype._callConnected = function() {
            this._connected || (~e.elements.indexOf(this.$options.$el) || e.elements.push(this.$options.$el), e.instances[this._uid] = this, this._initEvents(), this._callHook("connected"), this._connected = !0)
        }, e.prototype._callDisconnected = function() {
            if (this._connected) {
                var t = e.elements.indexOf(this.$options.$el);
                ~t && e.elements.splice(t, 1), delete e.instances[this._uid], this._initEvents(!0), this._callHook("disconnected"), this._connected = !1
            }
        }, e.prototype._callUpdate = function(t) {
            var e = this;
            t = h(t || "update");
            var i = this.$options.update;
            i && i.forEach(function(i, n) {
                if ("update" === t.type || i.events && ~i.events.indexOf(t.type)) {
                    if (t.sync) return i.read && i.read.call(e, t), void(i.write && i.write.call(e, t));
                    i.read && !~ie.reads.indexOf(e._frames.reads[n]) && (e._frames.reads[n] = ie.measure(function() {
                        return i.read.call(e, t)
                    })), i.write && !~ie.writes.indexOf(e._frames.writes[n]) && (e._frames.writes[n] = ie.mutate(function() {
                        return i.write.call(e, t)
                    }))
                }
            })
        }
    }

    function nt(t) {
        var e = t.data;
        t.prototype.$mount = function(t) {
            var n = this,
                o = this.$options.name;
            return t[e] || (t[e] = {}), t[e][o] ? void console.warn('Component "' + o + '" is already mounted on element: ', t) : (t[e][o] = this, this.$el = Bt(t), this._initProps(), this._callHook("init"), document.documentElement.contains(this.$el[0]) && this._callConnected(), void i(function() {
                return n._callReady()
            }))
        }, t.prototype.$emit = function(t) {
            this._callUpdate(t)
        }, t.prototype.$emitSync = function(t) {
            this._callUpdate(h(t || "update", !0, !1, {
                sync: !0
            }))
        }, t.prototype.$update = function(e, i) {
            t.update(e, this.$el, i)
        }, t.prototype.$updateSync = function(e, i) {
            t.update(h(e || "update", !0, !1, {
                sync: !0
            }), this.$el, i)
        }, t.prototype.$destroy = function(t) {
            void 0 === t && (t = !1);
            var i = this.$options.el;
            i && this._callDisconnected(), this._callHook("destroy"), i && i[e] && (delete i[e][this.$options.name], Object.keys(i[e]).length || delete i[e], t && this.$el.remove())
        }
    }

    function ot(e) {
        var i = e.data;
        e.components = {}, e.component = function(n, o) {
            var s = I(n);
            return t.isPlainObject(o) ? (o.name = s, o = e.extend(o)) : o.options.name = s, e.components[s] = o, e[s] = function(n, o) {
                for (var r = arguments.length, a = Array(r); r--;) a[r] = arguments[r];
                if (t.isPlainObject(n)) return new e.components[s]({
                    data: n
                });
                if (e.components[s].options.functional) return new e.components[s]({
                    data: [].concat(a)
                });
                var l = [];
                return o = o || {}, Bt(n).each(function(t, n) {
                    return l.push(n[i] && n[i][s] || new e.components[s]({
                        el: n,
                        data: o
                    }))
                }), l
            }, document.body && !o.options.functional && e[s]("[uk-" + n + "],[data-uk-" + n + "]"), e.components[s]
        }, e.getComponents = function(t) {
            return t && t[i] || {}
        }, e.getComponent = function(t, i) {
            return e.getComponents(t)[i]
        }, e.connect = function(t) {
            var n;
            if (t[i])
                for (n in t[i]) t[i][n]._callConnected();
            for (var o = 0; o < t.attributes.length; o++) n = t.attributes[o].name, 0 !== n.lastIndexOf("uk-", 0) && 0 !== n.lastIndexOf("data-uk-", 0) || (n = I(n.replace("data-uk-", "").replace("uk-", "")), e[n] && e[n](t))
        }, e.disconnect = function(t) {
            for (var e in t[i]) t[i][e]._callDisconnected()
        }
    }

    function st(t, e) {
        return (e.y - t.y) / (e.x - t.x)
    }

    function rt(t) {
        t.mixin.class = $e, t.mixin.modal = Ce, t.mixin.mouse = Se, t.mixin.position = Te, t.mixin.toggable = ke
    }

    function at(t) {
        t.component("accordion", {
            mixins: [$e, ke],
            props: {
                targets: String,
                active: null,
                collapsible: Boolean,
                multiple: Boolean,
                toggle: String,
                content: String,
                transition: String
            },
            defaults: {
                targets: "> *",
                active: !1,
                animation: !0,
                collapsible: !0,
                multiple: !1,
                clsOpen: "uk-open",
                toggle: "> .uk-accordion-title",
                content: "> .uk-accordion-content",
                transition: "ease"
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.targets + " " + this.toggle
                },
                handler: function(t) {
                    t.preventDefault(), this.show(this.items.find(this.toggle).index(t.currentTarget))
                }
            }],
            update: function() {
                var t = this,
                    e = Bt(this.targets, this.$el),
                    i = !this.items || e.length !== this.items.length || e.toArray().some(function(e, i) {
                        return e !== t.items.get(i)
                    });
                if (this.items = e, i) {
                    this.items.each(function(e, i) {
                        i = Bt(i), t.toggleNow(i.find(t.content), i.hasClass(t.clsOpen))
                    });
                    var n = this.active !== !1 && _(this.items.eq(Number(this.active))) || !this.collapsible && _(this.items.eq(0));
                    n && !n.hasClass(this.clsOpen) && this.show(n, !1)
                }
            },
            methods: {
                show: function(t, e) {
                    var i = this;
                    this.items || this.$emitSync();
                    var n = d(t, this.items),
                        o = this.items.filter("." + this.clsOpen);
                    t = this.items.eq(n), t.add(!this.multiple && o).each(function(n, s) {
                        s = Bt(s);
                        var r = s.find(i.content),
                            a = s.is(t),
                            l = a && !s.hasClass(i.clsOpen);
                        !l && a && !i.collapsible && o.length < 2 || (s.toggleClass(i.clsOpen, l), Rt.inProgress(r.parent()) || r.wrap("<div>").parent().attr("hidden", l), i._toggleImmediate(r, !0), i.toggleElement(r.parent(), l, e).then(function() {
                            s.hasClass(i.clsOpen) === l && (l || i._toggleImmediate(r, !1), r.unwrap())
                        }))
                    })
                }
            }
        })
    }

    function lt(t) {
        t.component("alert", {
            mixins: [$e, ke],
            args: "animation",
            props: {
                animation: Boolean,
                close: String
            },
            defaults: {
                animation: !0,
                close: ".uk-alert-close",
                duration: 150,
                hideProps: {
                    opacity: 0
                }
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.close
                },
                handler: function(t) {
                    t.preventDefault(), this.closeAlert()
                }
            }],
            methods: {
                closeAlert: function() {
                    var t = this;
                    this.toggleElement(this.$el).then(function() {
                        return t.$destroy(!0)
                    })
                }
            }
        })
    }

    function ct(t) {
        t.component("cover", {
            mixins: [$e],
            props: {
                automute: Boolean,
                width: Number,
                height: Number
            },
            defaults: {
                automute: !0
            },
            ready: function() {
                if (this.$el.is("iframe") && (this.$el.css("pointerEvents", "none"), this.automute)) {
                    var t = this.$el.attr("src");
                    this.$el.attr("src", "" + t + (~t.indexOf("?") ? "&" : "?") + "enablejsapi=1&api=1").on("load", function(t) {
                        var e = t.target;
                        return e.contentWindow.postMessage('{"event": "command", "func": "mute", "method":"setVolume", "value":0}', "*")
                    })
                }
            },
            update: {
                write: function() {
                    0 !== this.$el[0].offsetHeight && this.$el.css({
                        width: "",
                        height: ""
                    }).css(Vt.cover({
                        width: this.width || this.$el.width(),
                        height: this.height || this.$el.height()
                    }, {
                        width: this.$el.parent().outerWidth(),
                        height: this.$el.parent().outerHeight()
                    }))
                },
                events: ["load", "resize", "orientationchange"]
            },
            events: {
                loadedmetadata: function() {
                    this.$emit()
                }
            }
        })
    }

    function ht(t) {
        var e;
        Mt.on("click", function(t) {
            for (var i; e && e !== i && !a(t.target, e.$el) && (!e.toggle || !a(t.target, e.toggle.$el));) i = e, e.hide(!1)
        }), t.component("drop", {
            mixins: [Se, Te, ke],
            args: "pos",
            props: {
                mode: String,
                toggle: Boolean,
                boundary: "jQuery",
                boundaryAlign: Boolean,
                delayShow: Number,
                delayHide: Number,
                clsDrop: String
            },
            defaults: {
                mode: "hover",
                toggle: "- :first",
                boundary: window,
                boundaryAlign: !1,
                delayShow: 0,
                delayHide: 800,
                clsDrop: !1,
                hoverIdle: 200,
                animation: "uk-animation-fade",
                cls: "uk-open"
            },
            init: function() {
                this.clsDrop = this.clsDrop || "uk-" + this.$options.name, this.clsPos = this.clsDrop, this.$el.addClass(this.clsDrop)
            },
            ready: function() {
                this.updateAria(this.$el), this.toggle && (this.toggle = t.toggle(g(this.toggle, this.$el), {
                    target: this.$el,
                    mode: this.mode
                })[0])
            },
            events: [{
                name: "click",
                delegate: function() {
                    return "." + this.clsDrop + "-close"
                },
                handler: function(t) {
                    t.preventDefault(), this.hide(!1)
                }
            }, {
                name: "toggle",
                handler: function(t, e) {
                    e && !this.$el.is(e.target) || (t.preventDefault(), this.isToggled(this.$el) ? this.hide(!1) : this.show(e, !1))
                }
            }, {
                name: Jt,
                filter: function() {
                    return "hover" === this.mode
                },
                handler: function(t) {
                    X(t) || (e && e !== this && e.toggle && "hover" === e.toggle.mode && !a(t.target, e.$el) && !a(t.target, e.toggle.$el) && e.hide(!1), t.preventDefault(), this.show(this.toggle))
                }
            }, {
                name: "toggleShow",
                handler: function(t, e) {
                    e && !this.$el.is(e.target) || (t.preventDefault(), this.show(e || this.toggle))
                }
            }, {
                name: "toggleHide " + Zt,
                handler: function(t, e) {
                    X(t) || e && !this.$el.is(e.target) || (t.preventDefault(), this.toggle && "hover" === this.toggle.mode && this.hide())
                }
            }, {
                name: "show",
                handler: function(t) {
                    var e = t.target;
                    this.$el.is(e) && (this.initMouseTracker(), this.toggle.$el.addClass(this.cls).attr("aria-expanded", "true"), this.clearTimers())
                }
            }, {
                name: "hide",
                handler: function(t) {
                    var i = t.target;
                    return this.$el.is(i) ? (e = this.isActive() ? null : e, this.toggle.$el.removeClass(this.cls).attr("aria-expanded", "false").blur().find("a, button").blur(), this.cancelMouseTracker(), void this.clearTimers()) : void(e = null === e && a(i, this.$el) && this.isToggled(this.$el) ? this : e)
                }
            }],
            update: {
                write: function() {
                    if (this.$el.hasClass(this.cls)) {
                        c(this.$el, this.clsDrop + "-(stack|boundary)").css({
                            top: "",
                            left: ""
                        }), this.$el.toggleClass(this.clsDrop + "-boundary", this.boundaryAlign), this.dir = this.pos[0], this.align = this.pos[1];
                        var t = U(this.boundary),
                            e = this.boundaryAlign ? t : U(this.toggle.$el);
                        if ("justify" === this.align) {
                            var i = "y" === this.getAxis() ? "width" : "height";
                            this.$el.css(i, e[i])
                        } else this.$el.outerWidth() > Math.max(t.right - e.left, e.right - t.left) && (this.$el.addClass(this.clsDrop + "-stack"), this.$el.trigger("stack", [this]));
                        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary)
                    }
                },
                events: ["resize", "orientationchange"]
            },
            methods: {
                show: function t(i, n) {
                    var o = this;
                    void 0 === n && (n = !0);
                    var t = function() {
                            return !o.isToggled(o.$el) && o.toggleElement(o.$el, !0)
                        },
                        s = function() {
                            if (o.toggle = i || o.toggle, o.clearTimers(), !o.isActive()) {
                                if (n && e && e !== o && e.isDelaying) return void(o.showTimer = setTimeout(o.show, 75));
                                if (o.isParentOf(e)) {
                                    if (!e.hideTimer) return;
                                    e.hide(!1)
                                } else if (e && !o.isChildOf(e) && !o.isParentOf(e))
                                    for (var s; e && e !== s;) s = e, e.hide(!1);
                                n && o.delayShow ? o.showTimer = setTimeout(t, o.delayShow) : t(), e = o
                            }
                        };
                    i && this.toggle && !this.toggle.$el.is(i.$el) ? (this.$el.one("hide", s), this.hide(!1)) : s()
                },
                hide: function t(e) {
                    var i = this;
                    void 0 === e && (e = !0);
                    var t = function() {
                        return i.toggleNow(i.$el, !1)
                    };
                    this.clearTimers(), this.isDelaying = this.movesTo(this.$el), e && this.isDelaying ? this.hideTimer = setTimeout(this.hide, this.hoverIdle) : e && this.delayHide ? this.hideTimer = setTimeout(t, this.delayHide) : t()
                },
                clearTimers: function() {
                    clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                },
                isActive: function() {
                    return e === this
                },
                isChildOf: function(t) {
                    return t && t !== this && a(this.$el, t.$el)
                },
                isParentOf: function(t) {
                    return t && t !== this && a(t.$el, this.$el)
                }
            }
        }), t.drop.getActive = function() {
            return e
        }
    }

    function ut(t) {
        t.component("dropdown", t.components.drop.extend({
            name: "dropdown"
        }))
    }

    function dt(t) {
        t.component("form-custom", {
            mixins: [$e],
            args: "target",
            props: {
                target: Boolean
            },
            defaults: {
                target: !1
            },
            ready: function() {
                this.input = this.$el.find(":input:first"), this.state = this.input.next(), this.target = this.target && g(this.target === !0 ? "> :input:first + :first" : this.target, this.$el), this.input.trigger("change")
            },
            events: [{
                name: "focus blur mouseenter mouseleave",
                delegate: ":input:first",
                handler: function(t) {
                    var e = t.type;
                    this.state.toggleClass("uk-" + (~["focus", "blur"].indexOf(e) ? "focus" : "hover"), ~["focus", "mouseenter"].indexOf(e))
                }
            }, {
                name: "change",
                handler: function() {
                    this.target && this.target[this.target.is(":input") ? "val" : "text"](this.input[0].files && this.input[0].files[0] ? this.input[0].files[0].name : this.input.is("select") ? this.input.find("option:selected").text() : this.input.val())
                }
            }]
        })
    }

    function ft(t) {
        t.component("gif", {
            update: {
                read: function() {
                    var t = u(this.$el);
                    !this.isInView && t && (this.$el[0].src = this.$el[0].src), this.isInView = t
                },
                events: ["scroll", "load", "resize", "orientationchange"]
            }
        })
    }

    function gt(t) {
        t.component("grid", t.components.margin.extend({
            mixins: [$e],
            name: "grid",
            defaults: {
                margin: "uk-grid-margin",
                clsStack: "uk-grid-stack"
            },
            update: {
                write: function() {
                    this.$el.toggleClass(this.clsStack, this.stacks)
                },
                events: ["load", "resize", "orientationchange"]
            }
        }))
    }

    function pt(t) {
        t.component("height-match", {
            args: "target",
            props: {
                target: String,
                row: Boolean
            },
            defaults: {
                target: "> *",
                row: !0
            },
            update: {
                write: function() {
                    var t = this,
                        e = Bt(this.target, this.$el).css("min-height", "");
                    if (!this.row) return this.match(e), this;
                    var i = !1,
                        n = [];
                    e.each(function(e, o) {
                        o = Bt(o);
                        var s = o.offset().top;
                        s != i && n.length && (t.match(Bt(n)), n = [], s = o.offset().top), n.push(o), i = s
                    }), n.length && this.match(Bt(n))
                },
                events: ["resize", "orientationchange"]
            },
            methods: {
                match: function(t) {
                    if (!(t.length < 2)) {
                        var e = 0;
                        t.each(function(t, i) {
                            i = Bt(i);
                            var n;
                            if ("none" === i.css("display")) {
                                var o = i.attr("style");
                                i.attr("style", o + ";display:block !important;"), n = i.outerHeight(), i.attr("style", o || "")
                            } else n = i.outerHeight();
                            e = Math.max(e, n)
                        }).each(function(t, i) {
                            i = Bt(i), i.css("min-height", e - (i.outerHeight() - parseFloat(i.css("height"))) + "px")
                        })
                    }
                }
            }
        })
    }

    function mt(e) {
        e.component("height-viewport", {
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean
            },
            defaults: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1
            },
            init: function() {
                this.$emit()
            },
            update: {
                write: function() {
                    this.$el.css("boxSizing", "border-box");
                    var e, i = window.innerHeight,
                        n = 0;
                    if (this.expand) {
                        this.$el.css({
                            height: "",
                            minHeight: ""
                        });
                        var o = i - document.documentElement.offsetHeight;
                        o > 0 && this.$el.css("min-height", e = this.$el.outerHeight() + o)
                    } else {
                        var s = this.$el.offset().top;
                        if (s < i && this.offsetTop && (n += s), this.offsetBottom === !0) n += this.$el.next().outerHeight() || 0;
                        else if (t.isNumeric(this.offsetBottom)) n += i / 100 * this.offsetBottom;
                        else if (this.offsetBottom && "px" === this.offsetBottom.substr(-2)) n += parseFloat(this.offsetBottom);
                        else if (P(this.offsetBottom)) {
                            var r = g(this.offsetBottom, this.$el);
                            n += r && r.outerHeight() || 0
                        }
                        this.$el.css("min-height", e = n ? "calc(100vh - " + n + "px)" : "100vh")
                    }
                    this.$el.css("height", ""), e && i - n >= this.$el.outerHeight() && this.$el.css("height", e)
                },
                events: ["load", "resize", "orientationchange"]
            }
        })
    }

    function vt(t) {
        i(function() {
            if (Yt) {
                var e = "uk-hover";
                Ft.on("tap", function(t) {
                    var i = t.target;
                    return Bt("." + e).filter(function(t, e) {
                        return !a(i, e)
                    }).removeClass(e)
                }), Object.defineProperty(t, "hoverSelector", {
                    set: function(t) {
                        Ft.on("tap", t, function(t) {
                            var i = t.currentTarget;
                            return i.classList.add(e)
                        })
                    }
                }), t.hoverSelector = ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]"
            }
        })
    }

    function wt(t) {
        t.component("icon", t.components.svg.extend({
            mixins: [$e],
            name: "icon",
            args: "icon",
            props: ["icon"],
            defaults: {
                exclude: ["id", "style", "class", "src"]
            },
            init: function() {
                this.$el.addClass("uk-icon")
            }
        })), ["close", "navbar-toggle-icon", "overlay-icon", "pagination-previous", "pagination-next", "search-icon", "totop"].forEach(function(e) {
            return t.component(e, t.components.icon.extend({
                name: e
            }))
        }), ["slidenav-previous", "slidenav-next"].forEach(function(e) {
            return t.component(e, t.components.icon.extend({
                name: e,
                init: function() {
                    this.$el.addClass("uk-slidenav")
                }
            }))
        })
    }

    function bt(t) {
        t.component("margin", {
            props: {
                margin: String,
                firstColumn: Boolean
            },
            defaults: {
                margin: "uk-margin-small-top",
                firstColumn: "uk-first-column"
            },
            connected: function() {
                this.$emit()
            },
            update: {
                read: function() {
                    var t = this;
                    if (0 === this.$el[0].offsetHeight) return void(this.hidden = !0);
                    this.hidden = !1, this.stacks = !0;
                    var e = this.$el.children().filter(function(t, e) {
                        return e.offsetHeight > 0
                    });
                    this.rows = [
                        [e.get(0)]
                    ], e.slice(1).each(function(e, i) {
                        for (var n = Math.ceil(i.offsetTop), o = n + i.offsetHeight, s = t.rows.length - 1; s >= 0; s--) {
                            var r = t.rows[s],
                                a = Math.ceil(r[0].offsetTop);
                            if (n >= a + r[0].offsetHeight) {
                                t.rows.push([i]);
                                break
                            }
                            if (o > a) {
                                if (t.stacks = !1, i.offsetLeft < r[0].offsetLeft) {
                                    r.unshift(i);
                                    break
                                }
                                r.push(i);
                                break
                            }
                            if (0 === s) {
                                t.rows.splice(s, 0, [i]);
                                break
                            }
                        }
                    })
                },
                write: function() {
                    var t = this;
                    this.hidden || this.rows.forEach(function(e, i) {
                        return e.forEach(function(e, n) {
                            return Bt(e).toggleClass(t.margin, 0 !== i).toggleClass(t.firstColumn, 0 === n)
                        })
                    })
                },
                events: ["load", "resize", "orientationchange"]
            }
        })
    }

    function yt(e) {
        e.component("modal", {
            mixins: [Ce],
            props: {
                center: Boolean,
                container: Boolean
            },
            defaults: {
                center: !1,
                clsPage: "uk-modal-page",
                clsPanel: "uk-modal-dialog",
                selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
                container: !0
            },
            init: function() {
                this.container = this.container === !0 && e.container || this.container && _(this.container), this.container && !this.$el.parent().is(this.container) && this.$el.appendTo(this.container)
            },
            update: {
                write: function() {
                    "block" === this.$el.css("display") && this.center && this.$el.removeClass("uk-flex uk-flex-center uk-flex-middle").css("display", "block").toggleClass("uk-flex uk-flex-center uk-flex-middle", window.innerHeight > this.panel.outerHeight(!0)).css("display", this.$el.hasClass("uk-flex") ? "" : "block")
                },
                events: ["resize", "orientationchange"]
            },
            events: {
                beforeshow: function(t) {
                    this.$el.is(t.target) && (Ft.addClass(this.clsPage), this.$el.css("display", "block"), this.$el.height())
                },
                hide: function(t) {
                    this.$el.is(t.target) && (this.getActive() || Ft.removeClass(this.clsPage), this.$el.css("display", "").removeClass("uk-flex uk-flex-center uk-flex-middle"))
                }
            }
        }), e.component("overflow-auto", {
            mixins: [$e],
            ready: function() {
                this.panel = g("!.uk-modal-dialog", this.$el), this.$el.css("min-height", 150)
            },
            update: {
                write: function() {
                    var t = this.$el.css("max-height");
                    this.$el.css("max-height", 150).css("max-height", Math.max(150, 150 - (this.panel.outerHeight(!0) - window.innerHeight))), t !== this.$el.css("max-height") && this.$el.trigger("resize")
                },
                events: ["load", "resize", "orientationchange"]
            }
        }), e.modal.dialog = function(t, i) {
            var n = e.modal('<div class="uk-modal">\n                <div class="uk-modal-dialog">' + t + "</div>\n             </div>", i)[0];
            return requestAnimationFrame(n.show), n.$el.on("hide", function() {
                return n.$destroy(!0)
            }), n
        }, e.modal.alert = function(i, n) {
            return n = t.extend({
                bgClose: !1,
                escClose: !1,
                labels: e.modal.labels
            }, n), S(function(t) {
                return e.modal.dialog('\n                <div class="uk-modal-body">' + (P(i) ? i : Bt(i).html()) + '</div>\n                <div class="uk-modal-footer uk-text-right">\n                    <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + n.labels.ok + "</button>\n                </div>\n            ", n).$el.on("hide", t)
            })
        }, e.modal.confirm = function(i, n) {
            return n = t.extend({
                bgClose: !1,
                escClose: !1,
                labels: e.modal.labels
            }, n), S(function(t, o) {
                return e.modal.dialog('\n                <div class="uk-modal-body">' + (P(i) ? i : Bt(i).html()) + '</div>\n                <div class="uk-modal-footer uk-text-right">\n                    <button class="uk-button uk-button-default uk-modal-close">' + n.labels.cancel + '</button>\n                    <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + n.labels.ok + "</button>\n                </div>\n            ", n).$el.on("click", ".uk-modal-footer button", function(e) {
                    return 0 === Bt(e.target).index() ? o() : t()
                })
            })
        }, e.modal.prompt = function(i, n, o) {
            return o = t.extend({
                bgClose: !1,
                escClose: !1,
                labels: e.modal.labels
            }, o), S(function(t, s) {
                var r = !1,
                    a = e.modal.dialog('\n                <form class="uk-form-stacked">\n                    <div class="uk-modal-body">\n                        <label>' + (P(i) ? i : Bt(i).html()) + '</label>\n                        <input class="uk-input" type="text" autofocus>\n                    </div>\n                    <div class="uk-modal-footer uk-text-right">\n                        <button class="uk-button uk-button-default uk-modal-close" type="button">' + o.labels.cancel + '</button>\n                        <button class="uk-button uk-button-primary" type="submit">' + o.labels.ok + "</button>\n                    </div>\n                </form>\n            ", o),
                    l = a.$el.find("input").val(n);
                a.$el.on("submit", "form", function(e) {
                    e.preventDefault(), t(l.val()), r = !0, a.hide()
                }).on("hide", function() {
                    r || t(null)
                })
            })
        }, e.modal.labels = {
            ok: "Ok",
            cancel: "Cancel"
        }
    }

    function xt(t) {
        t.component("nav", t.components.accordion.extend({
            name: "nav",
            defaults: {
                targets: "> .uk-parent",
                toggle: "> a",
                content: "ul:first"
            }
        }))
    }

    function $t(e) {
        e.component("navbar", {
            mixins: [$e],
            props: {
                dropdown: String,
                mode: String,
                align: String,
                offset: Number,
                boundary: Boolean,
                boundaryAlign: Boolean,
                clsDrop: String,
                delayShow: Number,
                delayHide: Number,
                dropbar: Boolean,
                dropbarMode: String,
                dropbarAnchor: "jQuery",
                duration: Number
            },
            defaults: {
                dropdown: ".uk-navbar-nav > li",
                align: Lt ? "right" : "left",
                clsDrop: "uk-navbar-dropdown",
                mode: void 0,
                offset: void 0,
                delayShow: void 0,
                delayHide: void 0,
                boundaryAlign: void 0,
                flip: "x",
                boundary: !0,
                dropbar: !1,
                dropbarMode: "slide",
                dropbarAnchor: !1,
                duration: 200
            },
            init: function() {
                this.boundary = this.boundary === !0 || this.boundaryAlign ? this.$el : this.boundary, this.pos = "bottom-" + this.align
            },
            ready: function() {
                var t = this;
                this.$el.on(Jt, this.dropdown, function(e) {
                    var i = e.target,
                        n = t.getActive();
                    !n || a(i, n.toggle.$el) || n.isDelaying || n.hide(!1)
                }), this.dropbar && (this.dropbar = g(this.dropbar, this.$el) || Bt("<div></div>").insertAfter(this.dropbarAnchor || this.$el), e.navbarDropbar(this.dropbar, {
                    clsDrop: this.clsDrop,
                    mode: this.dropbarMode,
                    duration: this.duration,
                    navbar: this
                }))
            },
            update: function() {
                var i = this;
                Bt(this.dropdown, this.$el).each(function(n, o) {
                    var s = _("." + i.clsDrop, o);
                    !s || e.getComponent(s, "drop") || e.getComponent(s, "dropdown") || e.drop(s, t.extend({}, i))
                })
            },
            events: {
                beforeshow: function(t, e) {
                    var i = e.$el,
                        n = e.dir;
                    this.dropbar && "bottom" === n && !a(i, this.dropbar) && (i.appendTo(this.dropbar), this.dropbar.trigger("beforeshow", [{
                        $el: i
                    }]))
                }
            },
            methods: {
                getActive: function() {
                    var t = e.drop.getActive();
                    return t && "click" !== t.mode && a(t.toggle.$el, this.$el) && t
                }
            }
        }), e.component("navbar-dropbar", {
            mixins: [$e],
            defaults: {
                clsDrop: "",
                mode: "slide",
                navbar: null,
                duration: 200
            },
            init: function() {
                "slide" === this.mode && this.$el.addClass("uk-navbar-dropbar-slide")
            },
            events: {
                mouseleave: function() {
                    var t = this.navbar.getActive();
                    t && !this.$el.is(":hover") && t.hide()
                },
                beforeshow: function(t, e) {
                    var i = e.$el;
                    this.clsDrop && i.addClass(this.clsDrop + "-dropbar"), this.transitionTo(i.outerHeight(!0))
                },
                beforehide: function(t, e) {
                    var i = e.$el,
                        n = this.navbar.getActive();
                    if (this.$el.is(":hover") && n && n.$el.is(i)) return !1
                },
                hide: function(t, e) {
                    var i = e.$el,
                        n = this.navbar.getActive();
                    (!n || n && n.$el.is(i)) && this.transitionTo(0)
                }
            },
            methods: {
                transitionTo: function(t) {
                    var e = this;
                    return this.$el.height(this.$el[0].offsetHeight ? this.$el.height() : 0), Rt.cancel(this.$el).then(function() {
                        return Rt.start(e.$el, {
                            height: t
                        }, e.duration)
                    })
                }
            }
        })
    }

    function kt(t) {
        t.component("offcanvas", {
            mixins: [Ce],
            args: "mode",
            props: {
                mode: String,
                flip: Boolean,
                overlay: Boolean
            },
            defaults: {
                mode: "slide",
                flip: !1,
                overlay: !1,
                clsPage: "uk-offcanvas-page",
                clsPanel: "uk-offcanvas-bar",
                clsFlip: "uk-offcanvas-flip",
                clsPageAnimation: "uk-offcanvas-page-animation",
                clsSidebarAnimation: "uk-offcanvas-bar-animation",
                clsMode: "uk-offcanvas",
                clsOverlay: "uk-offcanvas-overlay",
                clsPageOverlay: "uk-offcanvas-page-overlay",
                selClose: ".uk-offcanvas-close"
            },
            init: function() {
                this.clsFlip = this.flip ? this.clsFlip : "", this.clsOverlay = this.overlay ? this.clsOverlay : "", this.clsPageOverlay = this.overlay ? this.clsPageOverlay : "", this.clsMode = this.clsMode + "-" + this.mode, "none" !== this.mode && "reveal" !== this.mode || (this.clsSidebarAnimation = ""), "push" !== this.mode && "reveal" !== this.mode && (this.clsPageAnimation = "")
            },
            update: {
                write: function() {
                    this.isActive() && Ft.width(window.innerWidth - this.getScrollbarWidth())
                },
                events: ["resize", "orientationchange"]
            },
            events: {
                beforeshow: function(t) {
                    this.$el.is(t.target) && (Ft.addClass(this.clsPage + " " + this.clsFlip + " " + this.clsPageAnimation + " " + this.clsPageOverlay), this.panel.addClass(this.clsSidebarAnimation + " " + this.clsMode), this.$el.addClass(this.clsOverlay).css("display", "block").height())
                },
                beforehide: function(t) {
                    this.$el.is(t.target) && (Ft.removeClass(this.clsPageAnimation), ("none" === this.mode || this.getActive() && this.getActive() !== this) && this.panel.trigger(te))
                },
                hide: function(t) {
                    this.$el.is(t.target) && (Ft.removeClass(this.clsPage + " " + this.clsFlip + " " + this.clsPageOverlay).width(""), this.panel.removeClass(this.clsSidebarAnimation + " " + this.clsMode), this.$el.removeClass(this.clsOverlay).css("display", ""))
                }
            }
        })
    }

    function Ct(t) {
        t.component("responsive", {
            props: ["width", "height"],
            init: function() {
                this.$el.addClass("uk-responsive-width")
            },
            update: {
                write: function() {
                    this.$el.is(":visible") && this.width && this.height && this.$el.height(Vt.fit({
                        height: this.height,
                        width: this.width
                    }, {
                        width: this.$el.parent().width(),
                        height: this.height || this.$el.height()
                    }).height)
                },
                events: ["load", "resize", "orientationchange"]
            }
        })
    }

    function St(t) {
        t.component("scroll", {
            props: {
                duration: Number,
                transition: String,
                offset: Number
            },
            defaults: {
                duration: 1e3,
                transition: "easeOutExpo",
                offset: 0
            },
            methods: {
                scrollToElement: function(t) {
                    var e = this;
                    t = Bt(t);
                    var i = t.offset().top - this.offset,
                        n = Mt.height(),
                        o = window.innerHeight;
                    i + o > n && (i = n - o), Bt("html,body").stop().animate({
                        scrollTop: parseInt(i, 10) || 1
                    }, this.duration, this.transition).promise().then(function() {
                        return e.$el.trigger("scrolled", [e])
                    })
                }
            },
            events: {
                click: function(t) {
                    t.isDefaultPrevented() || (t.preventDefault(), this.scrollToElement(Bt(this.$el[0].hash).length ? this.$el[0].hash : "body"))
                }
            }
        }), Bt.easing.easeOutExpo || (Bt.easing.easeOutExpo = function(t, e, i, n, o) {
            return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
        })
    }

    function Tt(t) {
        t.component("scrollspy", {
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number
            },
            defaults: {
                cls: "uk-scrollspy-inview",
                target: !1,
                hidden: !0,
                offsetTop: 0,
                offsetLeft: 0,
                repeat: !1,
                delay: 0,
                inViewClass: "uk-scrollspy-inview"
            },
            init: function() {
                this.$emit()
            },
            update: [{
                read: function() {
                    this.elements = this.target && Bt(this.target, this.$el) || this.$el
                },
                write: function() {
                    this.hidden && this.elements.filter(":not(." + this.inViewClass + ")").css("visibility", "hidden")
                }
            }, {
                read: function() {
                    var t = this;
                    this.elements.each(function(e, i) {
                        i._scrollspy || (i._scrollspy = {
                            toggles: (Bt(i).attr("uk-scrollspy-class") || t.cls).split(",")
                        }), i._scrollspy.show = u(i, t.offsetTop, t.offsetLeft)
                    })
                },
                write: function() {
                    var t = this,
                        e = 1 === this.elements.length ? 1 : 0;
                    this.elements.each(function(i, n) {
                        var o = Bt(n),
                            s = n._scrollspy;
                        s.show ? s.inview || s.timer || (s.timer = setTimeout(function() {
                            o.css("visibility", "").addClass(t.inViewClass).toggleClass(s.toggles[0]).trigger("inview"), s.inview = !0, delete s.timer
                        }, t.delay * e++)) : s.inview && t.repeat && (s.timer && (clearTimeout(s.timer), delete s.timer), o.removeClass(t.inViewClass).toggleClass(s.toggles[0]).css("visibility", t.hidden ? "hidden" : "").trigger("outview"), s.inview = !1), s.toggles.reverse()
                    })
                },
                events: ["scroll", "load", "resize", "orientationchange"]
            }]
        })
    }

    function Et(t) {
        t.component("scrollspy-nav", {
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            defaults: {
                cls: "uk-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            update: [{
                read: function() {
                    this.links = this.$el.find('a[href^="#"]').filter(function(t, e) {
                        return e.hash
                    }), this.elements = this.closest ? this.links.closest(this.closest) : this.links, this.targets = Bt(Bt.map(this.links, function(t) {
                        return t.hash
                    }).join(",")), this.scroll && t.scroll(this.links, {
                        offset: this.offset || 0
                    })
                }
            }, {
                read: function() {
                    var t = this,
                        e = jt.scrollTop() + this.offset,
                        i = document.documentElement.scrollHeight - window.innerHeight + this.offset;
                    this.active = !1, this.targets.each(function(n, o) {
                        o = Bt(o);
                        var s = o.offset(),
                            r = n + 1 === t.targets.length;
                        if (!t.overflow && (0 === n && s.top > e || r && s.top + o.outerHeight() < e)) return !1;
                        if (r || !(t.targets.eq(n + 1).offset().top <= e)) {
                            if (e >= i)
                                for (var a = t.targets.length; a > n; a--)
                                    if (u(t.targets.eq(a))) {
                                        o = t.targets.eq(a);
                                        break
                                    }
                            return !(t.active = _(t.links.filter('[href="#' + o.attr("id") + '"]')))
                        }
                    })
                },
                write: function() {
                    this.links.blur(), this.elements.removeClass(this.cls), this.active && this.$el.trigger("active", [this.active, (this.closest ? this.active.closest(this.closest) : this.active).addClass(this.cls)])
                },
                events: ["scroll", "load", "resize", "orientationchange"]
            }]
        })
    }

    function It(t) {
        t.component("spinner", t.components.icon.extend({
            name: "spinner",
            connected: function() {
                var t = this;
                this.height = this.width = this.$el.width(), this.svg.then(function(e) {
                    var i = e.find("circle"),
                        n = Math.floor(t.width / 2);
                    e[0].setAttribute("viewBox", "0 0 " + t.width + " " + t.width), i.attr({
                        cx: n,
                        cy: n,
                        r: n - parseFloat(i.css("stroke-width") || 0)
                    })
                })
            }
        }))
    }

    function At(e) {
        e.component("sticky", {
            mixins: [$e],
            props: {
                top: null,
                bottom: Boolean,
                offset: Number,
                animation: String,
                clsActive: String,
                clsInactive: String,
                widthElement: "jQuery",
                showOnUp: Boolean,
                media: "media",
                target: Number
            },
            defaults: {
                top: 0,
                bottom: !1,
                offset: 0,
                animation: "",
                clsActive: "uk-active",
                clsInactive: "",
                widthElement: !1,
                showOnUp: !1,
                media: !1,
                target: !1
            },
            init: function() {
                this.$el.addClass(this.clsInactive)
            },
            connected: function() {
                this.placeholder = Bt('<div class="uk-sticky-placeholder"></div>').insertAfter(this.$el).attr("hidden", !0), this._widthElement = this.widthElement || this.placeholder
            },
            ready: function() {
                var t = this;
                if (this.topProp = this.top, this.bottomProp = this.bottom, this.target && location.hash && jt.scrollTop() > 0) {
                    var e = g(location.hash);
                    e && Wt(function() {
                        var i = e.offset().top,
                            n = t.$el.offset().top,
                            o = t.$el.outerHeight(),
                            s = n + o;
                        s >= i && n <= i + e.outerHeight() && window.scrollTo(0, i - o - t.target - t.offset)
                    })
                }
            },
            update: [{
                write: function() {
                    var e, i = this,
                        n = this.$el.outerHeight(),
                        o = this.isActive();
                    this.placeholder.css("height", "absolute" !== this.$el.css("position") ? n : "").css(this.$el.css(["marginTop", "marginBottom", "marginLeft", "marginRight"])), this.width = this._widthElement.attr("hidden", null).outerWidth(), this._widthElement.attr("hidden", !o), this.topOffset = (o ? this.placeholder.offset() : this.$el.offset()).top, this.bottomOffset = this.topOffset + n, ["top", "bottom"].forEach(function(n) {
                        i[n] = i[n + "Prop"], i[n] && (t.isNumeric(i[n]) ? i[n] = i[n + "Offset"] + parseFloat(i[n]) : P(i[n]) && i[n].match(/^-?\d+vh$/) ? i[n] = window.innerHeight * parseFloat(i[n]) / 100 : (e = i[n] === !0 ? i.$el.parent() : g(i[n], i.$el), e && (i[n] = e.offset().top + e.outerHeight())))
                    }), this.top = Math.max(parseFloat(this.top), this.topOffset) - this.offset, this.bottom = this.bottom && this.bottom - n, this.inactive = this.media && !window.matchMedia(this.media).matches, o && this.update()
                },
                events: ["load", "resize", "orientationchange"]
            }, {
                write: function(t) {
                    var e = this;
                    void 0 === t && (t = {});
                    var i = t.dir,
                        n = this.isActive(),
                        o = jt.scrollTop();
                    if (!(o < 0 || !this.$el.is(":visible") || this.disabled))
                        if (this.inactive || o < this.top || this.showOnUp && ("up" !== i || "up" === i && !n && o <= this.bottomOffset)) {
                            if (!n) return;
                            n = !1, this.animation && this.bottomOffset < this.$el.offset().top ? Ut.cancel(this.$el).then(function() {
                                return Ut.out(e.$el, e.animation).then(function() {
                                    return e.hide()
                                })
                            }) : this.hide()
                        } else n ? this.update() : this.animation ? Ut.cancel(this.$el).then(function() {
                            e.show(), Ut.in(e.$el, e.animation)
                        }) : this.show()
                },
                events: ["scroll"]
            }],
            methods: {
                show: function() {
                    this.update(), this.$el.removeClass(this.clsInactive).addClass(this.clsActive).trigger("active"), this.placeholder.attr("hidden", null)
                },
                hide: function() {
                    this.$el.addClass(this.clsInactive).removeClass(this.clsActive).css({
                        position: "",
                        top: "",
                        width: ""
                    }).trigger("inactive"), this.placeholder.attr("hidden", !0)
                },
                update: function() {
                    var t = Math.max(0, this.offset),
                        e = jt.scrollTop();
                    this.bottom && e > this.bottom - this.offset && (t = this.bottom - e), this.$el.css({
                        position: "fixed",
                        top: t + "px",
                        width: this.width
                    })
                },
                isActive: function() {
                    return this.$el.hasClass(this.clsActive) && !(this.animation && this.$el.hasClass("uk-animation-leave"))
                }
            },
            disconnected: function() {
                this.placeholder.remove(), this.placeholder = null, this._widthElement = null
            }
        })
    }

    function Pt(t) {
        function e(t) {
            var e = i(t);
            if (!e) {
                if (t = t.clone().empty().attr({
                        "uk-no-boot": "",
                        style: t.attr("style") + ";display:block !important;"
                    }).appendTo(document.body), e = i(t), !e && "CANVAS" === t[0].tagName) {
                    var n = Bt(t[0].outerHTML.replace(/canvas/g, "span")).insertAfter(t);
                    e = i(n), n.remove()
                }
                t.remove()
            }
            return e && e.slice(4, -1).replace(/"/g, "")
        }

        function i(t) {
            var e = p(t[0], "backgroundImage", "::before");
            return "none" !== e && e
        }

        function n(e) {
            return Ie[e] || (Ie[e] = S(function(i, n) {
                if (0 === e.lastIndexOf("data:", 0)) i(o(decodeURIComponent(e.split(",")[1])));
                else {
                    var s = "" + t.data + t.version + "_" + e;
                    Ee[s] ? i(o(Ee[s])) : Bt.ajax(e, {
                        dataType: "html"
                    }).then(function(t) {
                        Ee[s] = t, i(o(t))
                    }, function() {
                        n("SVG not found.")
                    })
                }
            })), Ie[e]
        }

        function o(t) {
            return Ae.parseFromString(t, "image/svg+xml")
        }
        t.component("svg", {
            props: {
                id: String,
                icon: String,
                src: String,
                class: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number
            },
            defaults: {
                ratio: 1,
                id: !1,
                class: "",
                exclude: ["src"]
            },
            init: function() {
                this.class += " uk-svg"
            },
            connected: function() {
                var t = this;
                this.svg = S(function(e, i) {
                    t._resolver = e, t._rejecter = i
                }).catch(function() {}), this.$emitSync()
            },
            disconnected: function() {
                this.isSet = !1, f(this.$el) && this.$el.attr({
                    hidden: null,
                    id: this.id || null
                }), this.svg && (this.svg.then(function(t) {
                    return t && t.remove()
                }), this.svg = null)
            },
            update: {
                read: function() {
                    var t = this;
                    if (this.src || (this.src = e(this.$el)), this.src && !this.isSet) {
                        if (this.isSet = !0, !this.icon && ~this.src.indexOf("#")) {
                            var i = this.src.split("#");
                            i.length > 1 && (this.src = i[0], this.icon = i[1])
                        }
                        n(this.src).then(function(e) {
                            t._svg = e, t.$emit()
                        }, function(t) {
                            return console.log(t)
                        })
                    }
                },
                write: function() {
                    var t = this;
                    if (this._svg) {
                        var e, i, n = this._svg;
                        if (this._svg = null, this.icon)
                            if (e = n.getElementById(this.icon)) {
                                var o = e.outerHTML;
                                if (!o) {
                                    var s = document.createElement("div");
                                    s.appendChild(e.cloneNode(!0)), o = s.innerHTML
                                }
                                o = o.replace(/<symbol/g, "<svg" + (~o.indexOf("xmlns") ? "" : ' xmlns="http://www.w3.org/2000/svg"')).replace(/symbol>/g, "svg>"), i = Ae.parseFromString(o, "image/svg+xml").documentElement
                            } else n.querySelector("symbol") || (i = n.documentElement.cloneNode(!0));
                        else i = n.documentElement.cloneNode(!0);
                        if (!i) return void this._rejecter("SVG not found.");
                        var r = i.getAttribute("viewBox");
                        r && (r = r.split(" "), this.width = this.width || r[2], this.height = this.height || r[3]), i = Bt(i), this.width *= this.ratio, this.height *= this.ratio;
                        for (var a in t.$options.props) t[a] && !~t.exclude.indexOf(a) && i.attr(a, t[a]);
                        this.id || i.removeAttr("id"), this.width && !this.height && i.removeAttr("height"), this.height && !this.width && i.removeAttr("width"), f(this.$el) || "CANVAS" === this.$el[0].tagName ? (this.$el.attr({
                            hidden: !0,
                            id: null
                        }), i.insertAfter(this.$el)) : i.appendTo(this.$el), this._resolver(i)
                    }
                },
                events: ["load"]
            }
        });
        try {
            var s = t.data + "test";
            Ee[s] = 1, delete Ee[s]
        } catch (t) {
            Ee = {}
        }
    }

    function Ot(t) {
        t.component("switcher", {
            mixins: [ke],
            args: "connect",
            props: {
                connect: "jQuery",
                toggle: String,
                active: Number,
                swiping: Boolean
            },
            defaults: {
                connect: !1,
                toggle: " > *",
                active: 0,
                swiping: !0,
                cls: "uk-active",
                clsContainer: "uk-switcher",
                attrItem: "uk-switcher-item",
                queued: !0
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.toggle + ":not(.uk-disabled)"
                },
                handler: function(t) {
                    t.preventDefault(), this.show(t.currentTarget)
                }
            }],
            update: function() {
                var t = this;
                this.toggles = Bt(this.toggle, this.$el), this.connects = this.connect || Bt(this.$el.next("." + this.clsContainer));
                var e = "click." + this.$options.name;
                if (this.connects.off(e).on(e, "[" + this.attrItem + "],[data-" + this.attrItem + "]", function(e) {
                        e.preventDefault(), t.show(Bt(e.currentTarget)[e.currentTarget.hasAttribute(t.attrItem) ? "attr" : "data"](t.attrItem))
                    }), this.swiping) {
                    var i = "swipeRight." + this.$options.name + " swipeLeft." + this.$options.name;
                    this.connects.off(i).on(i, function(e) {
                        e.preventDefault(), window.getSelection().toString() || t.show("swipeLeft" == e.type ? "next" : "previous")
                    })
                }
                this.updateAria(this.connects.children()), this.show(_(this.toggles.filter("." + this.cls + ":first")) || _(this.toggles.eq(this.active)) || this.toggles.first())
            },
            methods: {
                show: function(t) {
                    var e = this;
                    this.toggles || this.$emitSync();
                    for (var i, n = this.toggles.length, o = this.connects.children("." + this.cls).index(), s = o >= 0, r = d(t, this.toggles, o), a = "previous" === t ? -1 : 1, l = 0; l < n; l++, r = (r + a + n) % n)
                        if (!e.toggles.eq(r).is(".uk-disabled, [disabled]")) {
                            i = e.toggles.eq(r);
                            break
                        }!i || o >= 0 && i.hasClass(this.cls) || o === r || (this.toggles.removeClass(this.cls).attr("aria-expanded", !1), i.addClass(this.cls).attr("aria-expanded", !0), s ? this.toggleElement(this.connects.children(":nth-child(" + (o + 1) + "),:nth-child(" + (r + 1) + ")")) : this.toggleNow(this.connects.children(":nth-child(" + (r + 1) + ")")))
                }
            }
        })
    }

    function Dt(t) {
        t.component("tab", t.components.switcher.extend({
            mixins: [$e],
            name: "tab",
            defaults: {
                media: 960,
                attrItem: "uk-tab-item"
            },
            init: function() {
                var e = this.$el.hasClass("uk-tab-left") && "uk-tab-left" || this.$el.hasClass("uk-tab-right") && "uk-tab-right";
                e && t.toggle(this.$el, {
                    cls: e,
                    mode: "media",
                    media: this.media
                })
            }
        }))
    }

    function Nt(t) {
        t.component("toggle", {
            mixins: [t.mixin.toggable],
            args: "target",
            props: {
                href: "jQuery",
                target: "jQuery",
                mode: String,
                media: "media"
            },
            defaults: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0,
                media: !1
            },
            events: [{
                name: Jt + " " + Zt,
                filter: function() {
                    return "hover" === this.mode
                },
                handler: function(t) {
                    X(t) || this.toggle(t.type === Jt ? "toggleShow" : "toggleHide")
                }
            }, {
                name: "click",
                filter: function() {
                    return "media" !== this.mode
                },
                handler: function(t) {
                    (Bt(t.target).closest('a[href="#"], button').length || Bt(t.target).closest("a[href]") && (this.cls || !this.target.is(":visible"))) && t.preventDefault(), this.toggle()
                }
            }],
            update: {
                write: function() {
                    if (this.target = this.target || this.href || this.$el, "media" === this.mode && this.media) {
                        var t = this.isToggled(this.target);
                        (window.matchMedia(this.media).matches ? !t : t) && this.toggle()
                    }
                },
                events: ["load", "resize", "orientationchange"]
            },
            methods: {
                toggle: function(t) {
                    var e = Bt.Event(t || "toggle");
                    this.target.triggerHandler(e, [this]), e.isDefaultPrevented() || this.toggleElement(this.target)
                }
            }
        })
    }

    function Ht(t) {
        function e(t) {
            return t ? "ms" === t.substr(-2) ? parseFloat(t) : 1e3 * parseFloat(t) : 0
        }
        var i, o, s, r = null,
            a = 0;
        jt.on("load", t.update).on("resize orientationchange", function(e) {
            s || (Wt(function() {
                t.update(e), s = !1
            }), s = !0)
        }).on("scroll", function(e) {
            null === r && (r = 0), i = r < window.pageYOffset, r = window.pageYOffset, o || (Wt(function() {
                e.dir = i ? "down" : "up", t.update(e), o = !1
            }), o = !0)
        }), n(document, "animationstart", function(t) {
            var i = t.target;
            ie.measure(function() {
                0 === (p(i, "animationName") || "").lastIndexOf("uk-", 0) && ie.mutate(function() {
                    a++, document.body.style.overflowX = "hidden", setTimeout(function() {
                        return ie.mutate(function() {
                            --a || (document.body.style.overflowX = "")
                        })
                    }, e(p(i, "animationDuration")))
                })
            })
        }, !0), t.use(at), t.use(lt), t.use(ct), t.use(ht), t.use(ut), t.use(dt), t.use(pt), t.use(mt), t.use(vt), t.use(bt), t.use(ft), t.use(gt), t.use(yt), t.use(xt), t.use($t), t.use(kt), t.use(Ct), t.use(St), t.use(Tt), t.use(Et), t.use(At), t.use(Pt), t.use(wt), t.use(It), t.use(Ot), t.use(Dt), t.use(Nt)
    }

    function _t(t) {
        function e() {
            o(document.body, t.connect), new zt(function(e) {
                return e.forEach(function(e) {
                    for (var i = 0; i < e.addedNodes.length; i++) o(e.addedNodes[i], t.connect);
                    for (i = 0; i < e.removedNodes.length; i++) o(e.removedNodes[i], t.disconnect);
                    t.update("update", e.target, !0)
                })
            }).observe(document.documentElement, {
                childList: !0,
                subtree: !0,
                characterData: !0,
                attributes: !0,
                attributeFilter: ["href"]
            })
        }

        function o(t, e) {
            if (t.nodeType === Node.ELEMENT_NODE && !t.hasAttribute("uk-no-boot"))
                for (e(t), t = t.firstChild; t;) {
                    var i = t.nextSibling;
                    o(t, e), t = i
                }
        }
        zt ? document.body ? e() : new zt(function() {
            document.body && (this.disconnect(), e())
        }).observe(document.documentElement, {
            childList: !0,
            subtree: !0
        }) : i(function() {
            o(document.body, t.connect), n(document.documentElement, "DOMNodeInserted", function(e) {
                return o(e.target, t.connect)
            }), n(document.documentElement, "DOMNodeRemoved", function(e) {
                return o(e.target, t.disconnect)
            })
        })
    }
    var Bt = "default" in t ? t.default : t,
        jt = Bt(window),
        Mt = Bt(document),
        Ft = Bt(document.documentElement),
        Lt = "rtl" === Bt("html").attr("dir"),
        Rt = {
            start: s,
            stop: function(t, e) {
                var i = Bt.Event(te || "transitionend");
                return Bt(t).triggerHandler(i, [e]), i.promise || S.resolve()
            },
            cancel: function(t) {
                return this.stop(t, !0)
            },
            inProgress: function(t) {
                return Bt(t).hasClass("uk-transition")
            }
        },
        Ut = { in : function(t, e, i, n) {
                return r(t, e, i, n, !1)
            }, out: function(t, e, i, n) {
                return r(t, e, i, n, !0)
            }, inProgress: function(t) {
                return Bt(t).hasClass("uk-animation-enter") || Bt(t).hasClass("uk-animation-leave")
            }, cancel: function(t) {
                var e = Bt.Event(ee || "animationend");
                return Bt(t).triggerHandler(e), e.promise || S.resolve()
            }
        },
        qt = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            menuitem: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },
        Vt = {
            ratio: function(t, e, i) {
                var n = "width" === e ? "height" : "width";
                return o = {}, o[n] = Math.round(i * t[n] / t[e]), o[e] = i, o;
                var o
            },
            fit: function(e, i) {
                var n = this;
                return e = t.extend({}, e), t.each(e, function(t) {
                    return e = e[t] > i[t] ? n.ratio(e, t, i[t]) : e
                }), e
            },
            cover: function(e, i) {
                var n = this;
                return e = this.fit(e, i), t.each(e, function(t) {
                    return e = e[t] < i[t] ? n.ratio(e, t, i[t]) : e
                }), e
            }
        },
        zt = window.MutationObserver || window.WebKitMutationObserver,
        Wt = window.requestAnimationFrame || function(t) {
            return setTimeout(t, 1e3 / 60)
        },
        Qt = window.cancelAnimationFrame || window.clearTimeout,
        Yt = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || navigator.msPointerEnabled && navigator.msMaxTouchPoints > 0 || navigator.pointerEnabled && navigator.maxTouchPoints > 0,
        Kt = Yt ? window.PointerEvent ? "pointerdown" : "touchstart" : "mousedown",
        Gt = Yt ? window.PointerEvent ? "pointermove" : "touchmove" : "mousemove",
        Xt = Yt ? window.PointerEvent ? "pointerup" : "touchend" : "mouseup",
        Jt = Yt && window.PointerEvent ? "pointerenter" : "mouseenter",
        Zt = Yt && window.PointerEvent ? "pointerleave" : "mouseleave",
        te = function() {
            var t, e = document.body || document.documentElement,
                i = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (t in i)
                if (void 0 !== e.style[t]) return i[t]
        }(),
        ee = function() {
            var t, e = document.body || document.documentElement,
                i = {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (t in i)
                if (void 0 !== e.style[t]) return i[t]
        }();
    v.prototype = {
        constructor: v,
        measure: function(t, e) {
            var i = e ? t.bind(e) : t;
            return this.reads.push(i), w(this), i
        },
        mutate: function(t, e) {
            var i = e ? t.bind(e) : t;
            return this.writes.push(i), w(this), i
        },
        clear: function(t) {
            return x(this.reads, t) || x(this.writes, t)
        },
        extend: function(t) {
            if ("object" != typeof t) throw new Error("expected object");
            var e = Object.create(this);
            return $(e, t), e.fastdom = this, e.initialize && e.initialize(), e
        },
        catch: null
    };
    var ie = new v,
        ne = Object.prototype.hasOwnProperty;
    S.resolve = function(t) {
        return S(function(e) {
            e(t)
        })
    }, S.reject = function(t) {
        return S(function(e, i) {
            i(t)
        })
    }, S.all = function(t) {
        return D(window.Promise) ? Bt.when.apply(Bt, t) : window.Promise.all(t)
    };
    var oe = /-(\w)/g,
        se = {
            "!": "closest",
            "+": "nextAll",
            "-": "prevAll"
        },
        re = {},
        ae = {};
    ae.args = ae.created = ae.events = ae.init = ae.ready = ae.connected = ae.disconnected = ae.destroy = function(e, i) {
        return e = e && !t.isArray(e) ? [e] : e, i ? e ? e.concat(i) : t.isArray(i) ? i : [i] : e
    }, ae.update = function(e, i) {
        return ae.args(e, t.isFunction(i) ? {
            write: i
        } : i)
    }, ae.props = function(e, i) {
        return t.isArray(i) && (i = i.reduce(function(t, e) {
            return t[e] = String, t
        }, {})), ae.methods(e, i)
    }, ae.defaults = ae.methods = function(e, i) {
        return i ? e ? t.extend(!0, {}, e, i) : i : e
    };
    var le, ce, he, ue, de, fe, ge = function(t, e) {
            return D(e) ? t : e
        },
        pe = {
            x: ["width", "left", "right"],
            y: ["height", "top", "bottom"]
        },
        me = {},
        ve = 750;
    i(function() {
        var t, e, i, n = 0,
            o = 0;
        "MSGesture" in window && (de = new MSGesture, de.target = document.body), document.addEventListener("click", function() {
            return fe = !0
        }, !0), Mt.on("MSGestureEnd gestureend", function(t) {
            var e = t.originalEvent.velocityX > 1 ? "Right" : t.originalEvent.velocityX < -1 ? "Left" : t.originalEvent.velocityY > 1 ? "Down" : t.originalEvent.velocityY < -1 ? "Up" : null;
            e && void 0 !== me.el && (me.el.trigger("swipe"), me.el.trigger("swipe" + e))
        }).on(Kt, function(n) {
            i = n.originalEvent.touches ? n.originalEvent.touches[0] : n, t = Date.now(), e = t - (me.last || t), me.el = Bt("tagName" in i.target ? i.target : i.target.parentNode), le && clearTimeout(le), me.x1 = i.pageX, me.y1 = i.pageY, e > 0 && e <= 250 && (me.isDoubleTap = !0), me.last = t, ue = setTimeout(Y, ve), !de || "pointerdown" != n.type && "touchstart" != n.type || de.addPointer(n.originalEvent.pointerId), fe = n.button > 0
        }).on(Gt, function(t) {
            i = t.originalEvent.touches ? t.originalEvent.touches[0] : t, K(), me.x2 = i.pageX, me.y2 = i.pageY, n += Math.abs(me.x1 - me.x2), o += Math.abs(me.y1 - me.y2)
        }).on(Xt, function() {
            K(), me.x2 && Math.abs(me.x1 - me.x2) > 30 || me.y2 && Math.abs(me.y1 - me.y2) > 30 ? he = setTimeout(function() {
                void 0 !== me.el && (me.el.trigger("swipe"), me.el.trigger("swipe" + Q(me.x1, me.x2, me.y1, me.y2))), me = {}
            }, 0) : "last" in me && (isNaN(n) || n < 30 && o < 30 ? ce = setTimeout(function() {
                var t = Bt.Event("tap");
                t.cancelTouch = G, void 0 !== me.el && me.el.trigger(t), me.isDoubleTap ? (void 0 !== me.el && me.el.trigger("doubleTap"), me = {}) : le = setTimeout(function() {
                    le = null, void 0 !== me.el && (me.el.trigger("singleTap"), fe || me.el.trigger("click")), me = {}
                }, 300)
            }) : me = {}, n = o = 0)
        }).on("touchcancel pointercancel", G), jt.on("scroll", G)
    });
    var we = !1;
    Mt.on({
        touchstart: function() {
            we = !0
        },
        click: function() {
            we = !1
        }
    });
    var be = Object.freeze({
            win: jt,
            doc: Mt,
            docElement: Ft,
            isRtl: Lt,
            isReady: e,
            ready: i,
            on: n,
            off: o,
            transition: s,
            Transition: Rt,
            animate: r,
            Animation: Ut,
            isWithin: a,
            attrFilter: l,
            removeClass: c,
            createEvent: h,
            isInView: u,
            getIndex: d,
            isVoidElement: f,
            Dimensions: Vt,
            query: g,
            Observer: zt,
            requestAnimationFrame: Wt,
            cancelAnimationFrame: Qt,
            hasTouch: Yt,
            pointerDown: Kt,
            pointerMove: Gt,
            pointerUp: Xt,
            pointerEnter: Jt,
            pointerLeave: Zt,
            transitionend: te,
            animationend: ee,
            getStyle: p,
            getCssVar: m,
            fastdom: ie,
            $: Bt,
            bind: k,
            hasOwn: C,
            promise: S,
            classify: T,
            hyphenate: E,
            camelize: I,
            isString: P,
            isNumber: O,
            isUndefined: D,
            isContextSelector: N,
            getContextSelectors: H,
            toJQuery: _,
            toBoolean: B,
            toNumber: j,
            toMedia: M,
            coerce: F,
            ajax: t.ajax,
            each: t.each,
            extend: t.extend,
            map: t.map,
            merge: t.merge,
            isArray: t.isArray,
            isNumeric: t.isNumeric,
            isFunction: t.isFunction,
            isPlainObject: t.isPlainObject,
            mergeOptions: L,
            position: R,
            getDimensions: U,
            flipPosition: W,
            isTouch: X
        }),
        ye = function(t) {
            this._init(t)
        };
    ye.util = be, ye.data = "__uikit__", ye.prefix = "uk-", ye.options = {}, ye.instances = {}, ye.elements = [], J(ye), it(ye), nt(ye), ot(ye);
    var xe, $e = {
            init: function() {
                this.$el.addClass(this.$name)
            }
        },
        ke = {
            props: {
                cls: Boolean,
                animation: Boolean,
                duration: Number,
                origin: String,
                transition: String,
                queued: Boolean
            },
            defaults: {
                cls: !1,
                animation: !1,
                duration: 200,
                origin: !1,
                transition: "linear",
                queued: !1,
                initProps: {
                    overflow: "",
                    height: "",
                    paddingTop: "",
                    paddingBottom: "",
                    marginTop: "",
                    marginBottom: ""
                },
                hideProps: {
                    overflow: "hidden",
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                }
            },
            ready: function() {
                P(this.animation) && (this.animation = this.animation.split(","), 1 === this.animation.length && (this.animation[1] = this.animation[0]), this.animation = this.animation.map(function(t) {
                    return t.trim()
                })), this.queued = this.queued && !!this.animation
            },
            methods: {
                toggleElement: function(t, e, i) {
                    var n, o = this,
                        s = document.body,
                        r = s.scrollTop,
                        a = function(t) {
                            return S.all(t.toArray().map(function(t) {
                                return o._toggleElement(t, e, i)
                            })).catch(function() {})
                        },
                        l = function(t) {
                            var e = a(t);
                            return o.queued = !0, s.scrollTop = r, e
                        };
                    return t = Bt(t), !this.queued || t.length < 2 ? a(t) : this.queued !== !0 ? l(t.not(this.queued)) : (this.queued = t.not(n = t.filter(function(t, e) {
                        return o.isToggled(e)
                    })), a(n).then(function() {
                        return o.queued !== !0 && l(o.queued)
                    }))
                },
                toggleNow: function(t, e) {
                    var i = this;
                    return S.all(Bt(t).toArray().map(function(t) {
                        return i._toggleElement(t, e, !1)
                    })).catch(function() {})
                },
                isToggled: function(t) {
                    return t = Bt(t), this.cls ? t.hasClass(this.cls.split(" ")[0]) : !t.attr("hidden")
                },
                updateAria: function(t) {
                    this.cls === !1 && t.attr("aria-hidden", !this.isToggled(t))
                },
                _toggleElement: function(t, e, i) {
                    var n = this;
                    if (t = Bt(t), Ut.inProgress(t)) return Ut.cancel(t).then(function() {
                        return n._toggleElement(t, e, i)
                    });
                    e = "boolean" == typeof e ? e : !this.isToggled(t);
                    var o = Bt.Event("before" + (e ? "show" : "hide"));
                    if (t.trigger(o, [this]), o.result === !1) return s.reject();
                    var s = (this.animation === !0 && i !== !1 ? this._toggleHeight : this.animation && i !== !1 ? this._toggleAnimation : this._toggleImmediate)(t, e);
                    return t.trigger(e ? "show" : "hide", [this]), s.then(function() {
                        return t.trigger(e ? "shown" : "hidden", [n])
                    })
                },
                _toggle: function(t, e) {
                    t = Bt(t), this.cls ? t.toggleClass(this.cls, ~this.cls.indexOf(" ") ? void 0 : e) : t.attr("hidden", !e), t.find("[autofocus]:visible").focus(), this.updateAria(t), UIkit.update(null, t)
                },
                _toggleImmediate: function(t, e) {
                    return this._toggle(t, e), S.resolve()
                },
                _toggleHeight: function(e, i) {
                    var n, o = this,
                        s = Rt.inProgress(e),
                        r = parseFloat(e.children().first().css("margin-top")) + parseFloat(e.children().last().css("margin-bottom")),
                        a = e[0].offsetHeight ? e.height() + (s ? 0 : r) : 0;
                    return Rt.cancel(e).then(function() {
                        return o.isToggled(e) || o._toggle(e, !0), e.css("height", ""), n = e.height() + (s ? 0 : r), e.height(a), i ? Rt.start(e, t.extend(o.initProps, {
                            overflow: "hidden",
                            height: n
                        }), Math.round(o.duration * (1 - a / n)), o.transition) : Rt.start(e, o.hideProps, Math.round(o.duration * (a / n)), o.transition).then(function() {
                            o._toggle(e, !1), e.css(o.initProps)
                        })
                    })
                },
                _toggleAnimation: function(t, e) {
                    var i = this;
                    return e ? (this._toggle(t, !0), Ut.in(t, this.animation[0], this.duration, this.origin)) : Ut.out(t, this.animation[1], this.duration, this.origin).then(function() {
                        return i._toggle(t, !1)
                    })
                }
            }
        };
    Mt.on({
        click: function(t) {
            xe && xe.bgClose && !t.isDefaultPrevented() && !a(t.target, xe.panel) && xe.hide()
        },
        keydown: function(t) {
            27 === t.keyCode && xe && xe.escClose && (t.preventDefault(), xe.hide())
        }
    });
    var Ce = {
            mixins: [$e, ke],
            props: {
                clsPanel: String,
                selClose: String,
                escClose: Boolean,
                bgClose: Boolean,
                stack: Boolean
            },
            defaults: {
                cls: "uk-open",
                escClose: !0,
                bgClose: !0,
                overlay: !0,
                stack: !1
            },
            ready: function() {
                this.body = Bt(document.body), this.panel = _("." + this.clsPanel, this.$el)
            },
            events: [{
                name: "click",
                delegate: function() {
                    return this.selClose
                },
                handler: function(t) {
                    t.preventDefault(), this.hide()
                }
            }, {
                name: "toggle",
                handler: function(t) {
                    t.preventDefault(), this.toggleNow(this.$el)
                }
            }, {
                name: "beforeshow",
                handler: function(t) {
                    var e = this,
                        i = t.target;
                    if (this.$el.is(i)) {
                        if (this.isActive()) return !1;
                        var n = xe && xe !== this && xe;
                        xe || this.body.css("overflow-y", this.getScrollbarWidth() && this.overlay ? "scroll" : ""), xe = this, n && (this.stack ? this.prev = n : n.hide()), this.panel.one(te, function() {
                            var t = Bt.Event("show");
                            t.isShown = !0, e.$el.trigger(t, [e])
                        })
                    }
                }
            }, {
                name: "show",
                handler: function(t) {
                    this.$el.is(t.target) && (t.isShown || t.stopImmediatePropagation())
                }
            }, {
                name: "beforehide",
                handler: function(t) {
                    var e = this;
                    if (this.$el.is(t.target)) {
                        xe = xe && xe !== this && xe || this.prev;
                        var i = function() {
                            var t = Bt.Event("hide");
                            t.isHidden = !0, e.$el.trigger(t, [e])
                        };
                        parseFloat(this.panel.css("transition-duration")) ? this.panel.one(te, i) : i()
                    }
                }
            }, {
                name: "hide",
                handler: function(t) {
                    if (this.$el.is(t.target)) return t.isHidden ? void(xe || this.body.css("overflow-y", "")) : void t.stopImmediatePropagation()
                }
            }],
            methods: {
                isActive: function() {
                    return this.$el.hasClass(this.cls)
                },
                toggle: function() {
                    return this.isActive() ? this.hide() : this.show()
                },
                show: function() {
                    var t = this;
                    return S(function(e) {
                        t.$el.one("show", e), t.toggleNow(t.$el, !0)
                    })
                },
                hide: function() {
                    var t = this;
                    return S(function(e) {
                        t.$el.one("hide", e), t.toggleNow(t.$el, !1)
                    })
                },
                getActive: function() {
                    return xe
                },
                getScrollbarWidth: function() {
                    var t = Ft[0].style.width;
                    Ft.css("width", "");
                    var e = window.innerWidth - Ft.outerWidth(!0);
                    return t && Ft.width(t), e
                }
            }
        },
        Se = {
            defaults: {
                positions: [],
                position: null
            },
            methods: {
                initMouseTracker: function() {
                    var t = this;
                    this.positions = [], this.position = null, this.mouseHandler = function(e) {
                        t.positions.push({
                            x: e.pageX,
                            y: e.pageY
                        }), t.positions.length > 5 && t.positions.shift()
                    }, Mt.on("mousemove", this.mouseHandler)
                },
                cancelMouseTracker: function() {
                    this.mouseHandler && Mt.off("mousemove", this.mouseHandler)
                },
                movesTo: function(t) {
                    var e = U(t),
                        i = [
                            [{
                                x: e.left,
                                y: e.top
                            }, {
                                x: e.right,
                                y: e.bottom
                            }],
                            [{
                                x: e.right,
                                y: e.top
                            }, {
                                x: e.left,
                                y: e.bottom
                            }]
                        ],
                        n = this.positions[this.positions.length - 1],
                        o = this.positions[0] || n;
                    if (!n) return !1;
                    e.right <= n.x || (e.left >= n.x ? (i[0].reverse(), i[1].reverse()) : e.bottom <= n.y ? i[0].reverse() : e.top >= n.y && i[1].reverse());
                    var s = n && !(this.position && n.x === this.position.x && n.y === this.position.y) && i.reduce(function(t, e) {
                        return t + (st(o, e[0]) < st(n, e[0]) && st(o, e[1]) > st(n, e[1]))
                    }, 0);
                    return this.position = s ? n : null, !!s
                }
            }
        },
        Te = {
            props: {
                pos: String,
                offset: null,
                flip: Boolean,
                clsPos: String
            },
            defaults: {
                pos: Lt ? "bottom-right" : "bottom-left",
                flip: !0,
                offset: !1,
                clsPos: ""
            },
            init: function() {
                this.pos = (this.pos + (~this.pos.indexOf("-") ? "" : "-center")).split("-"), this.dir = this.pos[0], this.align = this.pos[1]
            },
            methods: {
                positionAt: function(t, e, i) {
                    c(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?").css({
                        top: "",
                        left: ""
                    }), this.dir = this.pos[0], this.align = this.pos[1];
                    var n = j(this.offset) || 0,
                        o = this.getAxis(),
                        s = R(t, e, "x" === o ? W(this.dir) + " " + this.align : this.align + " " + W(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -1 * n : n) : " " + ("top" === this.dir ? -1 * n : n), null, this.flip, i);
                    this.dir = "x" === o ? s.target.x : s.target.y, this.align = "x" === o ? s.target.y : s.target.x, t.css("display", "").toggleClass(this.clsPos + "-" + this.dir + "-" + this.align, this.offset === !1)
                },
                getAxis: function() {
                    return "top" === this.pos[0] || "bottom" === this.pos[0] ? "y" : "x"
                }
            }
        },
        Ee = window.sessionStorage || {},
        Ie = {},
        Ae = new DOMParser;
    return ye.version = "3.0.0", rt(ye), Ht(ye), _t(ye), ye
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.UIkitLightbox = e()
}(this, function() {
    "use strict";

    function t(e) {
        if (!t.installed) {
            var i, n = e.util,
                o = n.$,
                s = n.doc,
                r = n.extend,
                a = n.Dimensions,
                l = n.getIndex,
                c = n.Transition;
            s.on({
                keydown: function(t) {
                    if (i) switch (t.keyCode) {
                        case 37:
                            i.show("previous");
                            break;
                        case 39:
                            i.show("next")
                    }
                }
            }), e.component("lightbox", {
                name: "lightbox",
                props: {
                    toggle: String,
                    duration: Number,
                    inverse: Boolean
                },
                defaults: {
                    toggle: "a",
                    duration: 400,
                    dark: !1,
                    attrItem: "uk-lightbox-item",
                    items: [],
                    index: 0
                },
                ready: function() {
                    var t = this;
                    this.toggles = o(this.toggle, this.$el).each(function(e, i) {
                        return t.items.push({
                            source: i.getAttribute("href"),
                            title: i.getAttribute("title"),
                            type: i.getAttribute("type")
                        })
                    })
                },
                events: [{
                    name: "click",
                    delegate: function() {
                        return this.toggle + ":not(.uk-disabled)"
                    },
                    handler: function(t) {
                        t.preventDefault(), this.show(this.toggles.index(t.currentTarget))
                    }
                }, {
                    name: "showitem",
                    handler: function(t) {
                        var e = this.getItem();
                        e.content && (this.$update(), t.stopImmediatePropagation())
                    }
                }],
                update: {
                    write: function() {
                        var t = this,
                            e = this.getItem();
                        if (this.modal && e.content) {
                            var i = this.modal.panel,
                                n = {
                                    width: i.width(),
                                    height: i.height()
                                },
                                s = {
                                    width: window.innerWidth - (i.outerWidth(!0) - n.width),
                                    height: window.innerHeight - (i.outerHeight(!0) - n.height)
                                },
                                r = a.fit({
                                    width: e.width,
                                    height: e.height
                                }, s);
                            c.stop(i), c.stop(this.modal.content), this.modal.content && this.modal.content.remove(), this.modal.content = o(e.content).css("opacity", 0).appendTo(i), i.css(n), c.start(i, r, this.duration).then(function() {
                                c.start(t.modal.content, {
                                    opacity: 1
                                }, 400).then(function() {
                                    i.find("[uk-transition-hide]").show(), i.find("[uk-transition-show]").hide()
                                })
                            })
                        }
                    },
                    events: ["resize", "orientationchange"]
                },
                methods: {
                    show: function(t) {
                        var n = this;
                        this.index = l(t, this.items, this.index), this.modal || (this.modal = e.modal.dialog('\n                    <button class="uk-modal-close-outside" uk-transition-hide type="button" uk-close></button>\n                    <span class="uk-position-center" uk-transition-show uk-icon="icon: trash"></span>\n                    ', {
                                center: !0
                            }), this.modal.$el.css("overflow", "hidden").addClass("uk-modal-lightbox"), this.modal.panel.css({
                                width: 200,
                                height: 200
                            }), this.modal.caption = o('<div class="uk-modal-caption" uk-transition-hide></div>').appendTo(this.modal.panel), this.items.length > 1 && o('<div class="' + (this.dark ? "uk-dark" : "uk-light") + '" uk-transition-hide>\n                            <a href="#" class="uk-position-center-left" uk-slidenav-previous uk-lightbox-item="previous"></a>\n                            <a href="#" class="uk-position-center-right" uk-slidenav-next uk-lightbox-item="next"></a>\n                        </div>\n                    ').appendTo(this.modal.panel.addClass("uk-slidenav-position")), this.modal.$el.on("hide", this.hide).on("click", "[" + this.attrItem + "]", function(t) {
                                t.preventDefault(), n.show(o(t.currentTarget).attr(n.attrItem))
                            }).on("swipeRight swipeLeft", function(t) {
                                t.preventDefault(), window.getSelection().toString() || n.show("swipeLeft" == t.type ? "next" : "previous")
                            })), i = this, this.modal.panel.find("[uk-transition-hide]").hide(), this.modal.panel.find("[uk-transition-show]").show(),
                            this.modal.content && this.modal.content.remove(), this.modal.caption.text(this.getItem().title);
                        var s = o.Event("showitem");
                        this.$el.trigger(s), s.isImmediatePropagationStopped() || this.setError(this.getItem())
                    },
                    hide: function() {
                        var t = this;
                        i = i && i !== this && i, this.modal.hide().then(function() {
                            t.modal.$destroy(!0), t.modal = null
                        })
                    },
                    getItem: function() {
                        return this.items[this.index] || {
                            source: "",
                            title: "",
                            type: ""
                        }
                    },
                    setItem: function(t, e, i, n) {
                        void 0 === i && (i = 200), void 0 === n && (n = 200), r(t, {
                            content: e,
                            width: i,
                            height: n
                        }), this.$update()
                    },
                    setError: function(t) {
                        this.setItem(t, '<div class="uk-position-cover uk-flex uk-flex-middle uk-flex-center"><strong>Loading resource failed!</strong></div>', 400, 300)
                    }
                }
            }), e.mixin({
                events: {
                    showitem: function(t) {
                        var e = this,
                            i = this.getItem();
                        if ("image" === i.type || !i.source || i.source.match(/\.(jp(e)?g|png|gif|svg)$/i)) {
                            var n = new Image;
                            n.onerror = function() {
                                return e.setError(i)
                            }, n.onload = function() {
                                return e.setItem(i, '<img class="uk-responsive-width" width="' + n.width + '" height="' + n.height + '" src ="' + i.source + '">', n.width, n.height)
                            }, n.src = i.source, t.stopImmediatePropagation()
                        }
                    }
                }
            }, "lightbox"), e.mixin({
                events: {
                    showitem: function(t) {
                        var e = this,
                            i = this.getItem();
                        if ("video" === i.type || !i.source || i.source.match(/\.(mp4|webm|ogv)$/i)) {
                            var n = o('<video class="uk-responsive-width" controls></video>').on("loadedmetadata", function() {
                                return e.setItem(i, n.attr({
                                    width: n[0].videoWidth,
                                    height: n[0].videoHeight
                                }), n[0].videoWidth, n[0].videoHeight)
                            }).attr("src", i.source);
                            t.stopImmediatePropagation()
                        }
                    }
                }
            }, "lightbox"), e.mixin({
                events: {
                    showitem: function(t) {
                        var e, i = this,
                            n = this.getItem();
                        if ((e = n.source.match(/\/\/.*?youtube\.[a-z]+\/watch\?v=([^&]+)&?(.*)/)) || n.source.match(/youtu\.be\/(.*)/)) {
                            var o = e[1],
                                s = new Image,
                                r = !1,
                                a = function(t, e) {
                                    return i.setItem(n, '<iframe src="//www.youtube.com/embed/' + o + '" width="' + t + '" height="' + e + '" style="max-width:100%;box-sizing:border-box;"></iframe>', t, e)
                                };
                            s.onerror = function() {
                                return a(640, 320)
                            }, s.onload = function() {
                                120 === s.width && 90 === s.height ? r ? a(640, 320) : (r = !0, s.src = "//img.youtube.com/vi/" + o + "/0.jpg") : a(s.width, s.height)
                            }, s.src = "//img.youtube.com/vi/" + o + "/maxresdefault.jpg", t.stopImmediatePropagation()
                        }
                    }
                }
            }, "lightbox"), e.mixin({
                events: {
                    showitem: function(t) {
                        var e, i = this,
                            n = this.getItem();
                        if (e = n.source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) {
                            var s = e[2],
                                r = function(t, e) {
                                    return i.setItem(n, '<iframe src="//player.vimeo.com/video/' + s + '" width="' + t + '" height="' + e + '" style="max-width:100%;box-sizing:border-box;"></iframe>', t, e)
                                };
                            o.ajax({
                                type: "GET",
                                url: "http://vimeo.com/api/oembed.json?url=" + encodeURI(n.source),
                                jsonp: "callback",
                                dataType: "jsonp"
                            }).then(function(t) {
                                return r(t.width, t.height)
                            }), t.stopImmediatePropagation()
                        }
                    }
                }
            }, "lightbox")
        }
    }
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.UIkitNotification = e()
}(this, function() {
    "use strict";

    function t(e) {
        if (!t.installed) {
            var i = e.util,
                n = i.$,
                o = i.each,
                s = i.pointerEnter,
                r = i.pointerLeave,
                a = i.Transition,
                l = {};
            e.component("notification", {
                functional: !0,
                args: ["message", "status"],
                defaults: {
                    message: "",
                    status: "",
                    timeout: 5e3,
                    group: null,
                    pos: "top-center",
                    onClose: null
                },
                created: function() {
                    l[this.pos] || (l[this.pos] = n('<div class="uk-notification uk-notification-' + this.pos + '"></div>').appendTo(e.container)), this.$mount(n('<div class="uk-notification-message' + (this.status ? " uk-notification-message-" + this.status : "") + '">\n                    <a href="#" class="uk-notification-close" data-uk-close></a>\n                    <div>' + this.message + "</div>\n                </div>").appendTo(l[this.pos].show()))
                },
                ready: function() {
                    var t = this,
                        e = parseInt(this.$el.css("margin-bottom"), 10);
                    a.start(this.$el.css({
                        opacity: 0,
                        marginTop: -1 * this.$el.outerHeight(),
                        marginBottom: 0
                    }), {
                        opacity: 1,
                        marginTop: 0,
                        marginBottom: e
                    }).then(function() {
                        t.timeout && (t.timer = setTimeout(t.close, t.timeout), t.$el.on(s, function() {
                            return clearTimeout(t.timer)
                        }).on(r, function() {
                            return t.timer = setTimeout(t.close, t.timeout)
                        }))
                    })
                },
                events: {
                    click: function(t) {
                        t.preventDefault(), this.close()
                    }
                },
                methods: {
                    close: function(t) {
                        var e = this,
                            i = function() {
                                e.onClose && e.onClose(), e.$el.trigger("close", [e]).remove(), l[e.pos].children().length || l[e.pos].hide()
                            };
                        this.timer && clearTimeout(this.timer), t ? i() : a.start(this.$el, {
                            opacity: 0,
                            marginTop: -1 * this.$el.outerHeight(),
                            marginBottom: 0
                        }).then(i)
                    }
                }
            }), e.notification.closeAll = function(t, i) {
                o(e.instances, function(e, n) {
                    "notification" !== n.$options.name || t && t !== n.group || n.close(i)
                })
            }
        }
    }
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.UIkitSortable = e()
}(this, function() {
    "use strict";

    function t(e) {
        function i(t) {
            return e.getComponent(t, "sortable") || t.parentNode && i(t.parentNode)
        }

        function n() {
            var t = setTimeout(function() {
                    return a.trigger("click")
                }, 0),
                e = function(i) {
                    i.preventDefault(), i.stopPropagation(), clearTimeout(t), u(a, "click", e, !0)
                };
            h(a, "click", e, !0)
        }
        if (!t.installed) {
            var o = e.mixin,
                s = e.util,
                r = s.$,
                a = s.docElement,
                l = s.extend,
                c = s.isWithin,
                h = s.on,
                u = s.off,
                d = s.pointerDown,
                f = s.pointerMove,
                g = s.pointerUp,
                p = s.win;
            e.component("sortable", {
                mixins: [o.class],
                props: {
                    group: String,
                    animation: Number,
                    threshold: Number,
                    clsItem: String,
                    clsPlaceholder: String,
                    clsDrag: String,
                    clsDragState: String,
                    clsBase: String,
                    clsNoDrag: String,
                    clsEmpty: String,
                    clsCustom: String,
                    handle: String
                },
                defaults: {
                    group: !1,
                    animation: 150,
                    threshold: 5,
                    clsItem: "uk-sortable-item",
                    clsPlaceholder: "uk-sortable-placeholder",
                    clsDrag: "uk-sortable-drag",
                    clsDragState: "uk-drag",
                    clsBase: "uk-sortable",
                    clsNoDrag: "uk-sortable-nodrag",
                    clsEmpty: "uk-sortable-empty",
                    clsCustom: "",
                    handle: !1
                },
                init: function() {
                    var t = this;
                    ["init", "start", "move", "end"].forEach(function(e) {
                        var i = t[e];
                        t[e] = function(e) {
                            e = e.originalEvent || e, t.scrollY = window.scrollY;
                            var n = e.touches && e.touches[0] || e,
                                o = n.pageX,
                                s = n.pageY;
                            t.pos = {
                                x: o,
                                y: s
                            }, i(e)
                        }
                    })
                },
                events: (m = {}, m[d] = "init", m),
                update: {
                    write: function() {
                        var t = this;
                        if (this.clsEmpty && this.$el.toggleClass(this.clsEmpty, !this.$el.children().length), this.drag) {
                            this.drag.offset({
                                top: this.pos.y + this.origin.top,
                                left: this.pos.x + this.origin.left
                            });
                            var e = this.drag.offset().top,
                                i = e + this.drag[0].offsetHeight;
                            e > 0 && e < this.scrollY ? setTimeout(function() {
                                return p.scrollTop(t.scrollY - 5)
                            }, 5) : i < a[0].offsetHeight && i > window.innerHeight + this.scrollY && setTimeout(function() {
                                return p.scrollTop(t.scrollY + 5)
                            }, 5)
                        }
                    }
                },
                methods: {
                    init: function(t) {
                        var e = r(t.target),
                            i = this.$el.children().filter(function(e, i) {
                                return c(t.target, i)
                            });
                        !i.length || e.is(":input") || this.handle && !c(e, this.handle) || t.button && 0 !== t.button || c(e, "." + this.clsNoDrag) || (t.preventDefault(), t.stopPropagation(), this.touched = [this], this.placeholder = i, this.origin = l({
                            target: e,
                            index: this.placeholder.index()
                        }, this.pos), a.on(f, this.move), a.on(g, this.end), p.on("scroll", this.scroll), this.threshold || this.start(t))
                    },
                    start: function(t) {
                        this.drag = r(this.placeholder[0].outerHTML.replace(/^<li/i, "<div").replace(/li>$/i, "div>")).attr("uk-no-boot", "").addClass(this.clsDrag + " " + this.clsCustom).css({
                            boxSizing: "border-box",
                            width: this.placeholder.outerWidth(),
                            height: this.placeholder.outerHeight()
                        }).css(this.placeholder.css(["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"])).appendTo(e.container), this.drag.children().first().height(this.placeholder.children().height());
                        var i = this.placeholder.offset(),
                            n = i.left,
                            o = i.top;
                        l(this.origin, {
                            left: n - this.pos.x,
                            top: o - this.pos.y
                        }), this.placeholder.addClass(this.clsPlaceholder), this.$el.children().addClass(this.clsItem), a.addClass(this.clsDragState), this.$el.trigger("start", [this, this.placeholder, this.drag]), this.move(t)
                    },
                    move: function t(e) {
                        if (!this.drag) return void((Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(e));
                        this.$emit();
                        var n = "mousemove" === e.type ? e.target : document.elementFromPoint(this.pos.x - document.body.scrollLeft, this.pos.y - document.body.scrollTop),
                            o = i(n),
                            s = i(this.placeholder[0]),
                            t = o !== s;
                        if (o && !c(n, this.placeholder) && (!t || o.group && o.group === s.group)) {
                            if (n = o.$el.is(n.parentNode) && r(n) || o.$el.children().has(n), t) s.remove(this.placeholder);
                            else if (!n.length) return;
                            o.insert(this.placeholder, n), ~this.touched.indexOf(o) || this.touched.push(o)
                        }
                    },
                    scroll: function t() {
                        var t = window.scrollY;
                        t !== this.scrollY && (this.pos.y += t - this.scrollY, this.scrollY = t, this.$emit())
                    },
                    end: function(t) {
                        if (a.off(f, this.move), a.off(g, this.end), p.off("scroll", this.scroll), !this.drag) return void("mouseup" !== t.type && c(t.target, "a[href]") && (location.href = r(t.target).closest("a[href]").attr("href")));
                        n();
                        var e = i(this.placeholder[0]);
                        this === e ? this.origin.index !== this.placeholder.index() && this.$el.trigger("change", [this, this.placeholder, "moved"]) : (e.$el.trigger("change", [e, this.placeholder, "added"]), this.$el.trigger("change", [this, this.placeholder, "removed"])), this.$el.trigger("stop", [this]), this.drag.remove(), this.drag = null, this.touched.forEach(function(t) {
                            return t.$el.children().removeClass(t.clsPlaceholder + " " + t.clsItem)
                        }), a.removeClass(this.clsDragState)
                    },
                    insert: function t(e, i) {
                        var n = this;
                        this.$el.children().addClass(this.clsItem);
                        var t = function() {
                            i.length ? !n.$el.has(e).length || e.prevAll().filter(i).length ? e.insertBefore(i) : e.insertAfter(i) : n.$el.append(e)
                        };
                        this.animation ? this.animate(t) : t()
                    },
                    remove: function(t) {
                        this.$el.has(t).length && (this.animation ? this.animate(function() {
                            return t.detach()
                        }) : t.detach())
                    },
                    animate: function(t) {
                        var e = this,
                            i = [],
                            n = this.$el.children().toArray().map(function(t) {
                                return t = r(t), i.push(l({
                                    position: "absolute",
                                    pointerEvents: "none",
                                    width: t.outerWidth(),
                                    height: t.outerHeight()
                                }, t.position())), t
                            }),
                            o = {
                                position: "",
                                width: "",
                                height: "",
                                pointerEvents: "",
                                top: "",
                                left: ""
                            };
                        t(), n.forEach(function(t) {
                            return t.stop()
                        }), this.$el.children().css(o), this.$updateSync("update", !0), this.$el.css("min-height", this.$el.height());
                        var s = n.map(function(t) {
                            return t.position()
                        });
                        r.when.apply(r, n.map(function(t, n) {
                            return t.css(i[n]).animate(s[n], e.animation).promise()
                        })).then(function() {
                            e.$el.css("min-height", "").children().css(o), e.$updateSync("update", !0)
                        })
                    }
                }
            });
            var m
        }
    }
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.UIkitTooltip = e()
}(this, function() {
    "use strict";

    function t(e) {
        if (!t.installed) {
            var i, n = e.util,
                o = e.mixin,
                s = n.$,
                r = n.doc,
                a = n.flipPosition,
                l = n.isTouch,
                c = n.isWithin,
                h = n.pointerDown,
                u = n.pointerEnter,
                d = n.pointerLeave;
            r.on("click", function(t) {
                i && !c(t.target, i.$el) && i.hide()
            }), e.component("tooltip", {
                mixins: [o.toggable, o.position],
                props: {
                    delay: Number
                },
                defaults: {
                    pos: "top",
                    delay: 0,
                    animation: "uk-animation-scale-up",
                    duration: 100,
                    cls: "uk-active",
                    clsPos: "uk-tooltip"
                },
                ready: function() {
                    this.content = this.$el.attr("title"), this.$el.removeAttr("title").attr("aria-expanded", !1)
                },
                methods: {
                    show: function() {
                        var t = this;
                        i !== this && (i && i.hide(), i = this, clearTimeout(this.showTimer), this.tooltip = s('<div class="' + this.clsPos + '" aria-hidden="true"><div class="' + this.clsPos + '-inner">' + this.content + "</div></div>").appendTo(e.container), this.$el.attr("aria-expanded", !0), this.positionAt(this.tooltip, this.$el), this.origin = "y" === this.getAxis() ? a(this.dir) + "-" + this.align : this.align + "-" + a(this.dir), this.showTimer = setTimeout(function() {
                            t.toggleElement(t.tooltip, !0), t.hideTimer = setInterval(function() {
                                t.$el.is(":visible") || t.hide()
                            }, 150)
                        }, this.delay))
                    },
                    hide: function() {
                        this.$el.is("input") && this.$el[0] === document.activeElement || (i = i !== this && i || !1, clearTimeout(this.showTimer), clearInterval(this.hideTimer), this.$el.attr("aria-expanded", !1), this.toggleElement(this.tooltip, !1), this.tooltip && this.tooltip.remove(), this.tooltip = !1)
                    }
                },
                events: (f = {
                    blur: "hide"
                }, f["focus " + u + " " + h] = function(t) {
                    t.type === h && l(t) || this.show()
                }, f[d] = function(t) {
                    l(t) || this.hide()
                }, f)
            });
            var f
        }
    }
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.UIkitUpload = e()
}(this, function() {
    "use strict";

    function t(e) {
        function i(t, e) {
            return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
        }

        function n(t, e) {
            for (var i = [], n = 0; n < t.length; n += e) {
                for (var o = [], s = 0; s < e; s++) o.push(t[n + s]);
                i.push(o)
            }
            return i
        }
        if (!t.installed) {
            var o = e.util,
                s = o.$,
                r = o.ajax,
                a = o.on;
            e.component("upload", {
                props: {
                    allow: String,
                    clsDragover: String,
                    concurrent: Number,
                    dataType: String,
                    mime: String,
                    msgInvalidMime: String,
                    msgInvalidName: String,
                    multiple: Boolean,
                    name: String,
                    params: Object,
                    type: String,
                    url: String
                },
                defaults: {
                    allow: !1,
                    clsDragover: "uk-dragover",
                    concurrent: 1,
                    dataType: void 0,
                    mime: !1,
                    msgInvalidMime: "Invalid File Type: %s",
                    msgInvalidName: "Invalid File Name: %s",
                    multiple: !1,
                    name: "files[]",
                    params: {},
                    type: "POST",
                    url: "",
                    abort: null,
                    beforeAll: null,
                    beforeSend: null,
                    complete: null,
                    completeAll: null,
                    error: null,
                    fail: function(t) {
                        alert(t)
                    },
                    load: null,
                    loadEnd: null,
                    loadStart: null,
                    progress: null
                },
                events: {
                    change: function(t) {
                        s(t.target).is('input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
                    },
                    drop: function(t) {
                        t.preventDefault(), t.stopPropagation();
                        var e = t.originalEvent.dataTransfer;
                        e && e.files && (this.$el.removeClass(this.clsDragover), this.upload(e.files))
                    },
                    dragenter: function(t) {
                        t.preventDefault(), t.stopPropagation()
                    },
                    dragover: function(t) {
                        t.preventDefault(), t.stopPropagation(), this.$el.addClass(this.clsDragover)
                    },
                    dragleave: function(t) {
                        t.preventDefault(), t.stopPropagation(), this.$el.removeClass(this.clsDragover)
                    }
                },
                methods: {
                    upload: function t(e) {
                        var o = this;
                        if (e.length) {
                            this.$el.trigger("upload", [e]);
                            for (var l = 0; l < e.length; l++) {
                                if (o.allow && !i(o.allow, e[l].name)) return void o.fail(o.msgInvalidName.replace(/%s/, o.allow));
                                if (o.mime && !i(o.mime, e[l].type)) return void o.fail(o.msgInvalidMime.replace(/%s/, o.mime))
                            }
                            this.multiple || (e = [e[0]]), this.beforeAll && this.beforeAll(this, e);
                            var c = n(e, this.concurrent),
                                t = function(e) {
                                    var i = new FormData;
                                    e.forEach(function(t) {
                                        return i.append(o.name, t)
                                    });
                                    for (var n in o.params) i.append(n, o.params[n]);
                                    r({
                                        data: i,
                                        url: o.url,
                                        type: o.type,
                                        dataType: o.dataType,
                                        beforeSend: o.beforeSend,
                                        complete: [o.complete, function(e, i) {
                                            c.length ? t(c.shift()) : o.completeAll && o.completeAll(e), "abort" === i && o.abort && o.abort(e)
                                        }],
                                        cache: !1,
                                        contentType: !1,
                                        processData: !1,
                                        xhr: function() {
                                            var t = s.ajaxSettings.xhr();
                                            return t.upload && o.progress && a(t.upload, "progress", o.progress), ["loadStart", "load", "loadEnd", "error", "abort"].forEach(function(e) {
                                                return o[e] && a(t, e.toLowerCase(), o[e])
                                            }), t
                                        }
                                    })
                                };
                            t(c.shift())
                        }
                    }
                }
            })
        }
    }
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(t), t
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
}(function(t) {
    "use strict";

    function e(i, n) {
        var o = t.noop,
            s = this,
            r = {
                ajaxSettings: {},
                autoSelectFirst: !1,
                appendTo: document.body,
                serviceUrl: null,
                lookup: null,
                onSelect: null,
                width: "auto",
                minChars: 1,
                maxHeight: 300,
                deferRequestBy: 0,
                params: {},
                formatResult: e.formatResult,
                formatGroup: e.formatGroup,
                delimiter: null,
                zIndex: 9999,
                type: "GET",
                noCache: !1,
                onSearchStart: o,
                onSearchComplete: o,
                onSearchError: o,
                preserveInput: !1,
                containerClass: "autocomplete-suggestions",
                tabDisabled: !1,
                dataType: "text",
                currentRequest: null,
                triggerSelectOnValidInput: !0,
                preventBadQueries: !0,
                lookupFilter: function(t, e, i) {
                    return t.value.toLowerCase().indexOf(i) !== -1
                },
                paramName: "query",
                transformResult: function(e) {
                    return "string" == typeof e ? t.parseJSON(e) : e
                },
                showNoSuggestionNotice: !1,
                noSuggestionNotice: "No results",
                orientation: "bottom",
                forceFixPosition: !1
            };
        s.element = i, s.el = t(i), s.suggestions = [], s.badQueries = [], s.selectedIndex = -1, s.currentValue = s.element.value, s.intervalId = 0, s.cachedResponse = {}, s.onChangeInterval = null, s.onChange = null, s.isLocal = !1, s.suggestionsContainer = null, s.noSuggestionsContainer = null, s.options = t.extend({}, r, n), s.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        }, s.hint = null, s.hintValue = "", s.selection = null, s.initialize(), s.setOptions(n)
    }
    var i = function() {
            return {
                escapeRegExChars: function(t) {
                    return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                },
                createNode: function(t) {
                    var e = document.createElement("div");
                    return e.className = t, e.style.position = "absolute", e.style.display = "none", e
                }
            }
        }(),
        n = {
            ESC: 27,
            TAB: 9,
            RETURN: 13,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        };
    e.utils = i, t.Autocomplete = e, e.formatResult = function(t, e) {
        if (!e) return t.value;
        var n = "(" + i.escapeRegExChars(e) + ")";
        return t.value.replace(new RegExp(n, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
    }, e.formatGroup = function(t, e) {
        return '<div class="autocomplete-group"><strong>' + e + "</strong></div>"
    }, e.prototype = {
        killerFn: null,
        initialize: function() {
            var i, n = this,
                o = "." + n.classes.suggestion,
                s = n.classes.selected,
                r = n.options;
            n.element.setAttribute("autocomplete", "off"), n.killerFn = function(e) {
                t(e.target).closest("." + n.options.containerClass).length || (n.killSuggestions(), n.disableKillerFn())
            }, n.noSuggestionsContainer = t('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), n.suggestionsContainer = e.utils.createNode(r.containerClass), i = t(n.suggestionsContainer), i.appendTo(r.appendTo), "auto" !== r.width && i.css("width", r.width), i.on("mouseover.autocomplete", o, function() {
                n.activate(t(this).data("index"))
            }), i.on("mouseout.autocomplete", function() {
                n.selectedIndex = -1, i.children("." + s).removeClass(s)
            }), i.on("click.autocomplete", o, function() {
                return n.select(t(this).data("index")), !1
            }), n.fixPositionCapture = function() {
                n.visible && n.fixPosition()
            }, t(window).on("resize.autocomplete", n.fixPositionCapture), n.el.on("keydown.autocomplete", function(t) {
                n.onKeyPress(t)
            }), n.el.on("keyup.autocomplete", function(t) {
                n.onKeyUp(t)
            }), n.el.on("blur.autocomplete", function() {
                n.onBlur()
            }), n.el.on("focus.autocomplete", function() {
                n.onFocus()
            }), n.el.on("change.autocomplete", function(t) {
                n.onKeyUp(t)
            }), n.el.on("input.autocomplete", function(t) {
                n.onKeyUp(t)
            })
        },
        onFocus: function() {
            var t = this;
            t.fixPosition(), t.el.val().length >= t.options.minChars && t.onValueChange()
        },
        onBlur: function() {
            this.enableKillerFn()
        },
        abortAjax: function() {
            var t = this;
            t.currentRequest && (t.currentRequest.abort(), t.currentRequest = null)
        },
        setOptions: function(e) {
            var i = this,
                n = i.options;
            t.extend(n, e), i.isLocal = t.isArray(n.lookup), i.isLocal && (n.lookup = i.verifySuggestionsFormat(n.lookup)), n.orientation = i.validateOrientation(n.orientation, "bottom"), t(i.suggestionsContainer).css({
                "max-height": n.maxHeight + "px",
                width: n.width + "px",
                "z-index": n.zIndex
            })
        },
        clearCache: function() {
            this.cachedResponse = {}, this.badQueries = []
        },
        clear: function() {
            this.clearCache(), this.currentValue = "", this.suggestions = []
        },
        disable: function() {
            var t = this;
            t.disabled = !0, clearInterval(t.onChangeInterval), t.abortAjax()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var e = this,
                i = t(e.suggestionsContainer),
                n = i.parent().get(0);
            if (n === document.body || e.options.forceFixPosition) {
                var o = e.options.orientation,
                    s = i.outerHeight(),
                    r = e.el.outerHeight(),
                    a = e.el.offset(),
                    l = {
                        top: a.top,
                        left: a.left
                    };
                if ("auto" === o) {
                    var c = t(window).height(),
                        h = t(window).scrollTop(),
                        u = -h + a.top - s,
                        d = h + c - (a.top + r + s);
                    o = Math.max(u, d) === u ? "top" : "bottom"
                }
                if ("top" === o ? l.top += -s : l.top += r, n !== document.body) {
                    var f, g = i.css("opacity");
                    e.visible || i.css("opacity", 0).show(), f = i.offsetParent().offset(), l.top -= f.top, l.left -= f.left, e.visible || i.css("opacity", g).hide()
                }
                "auto" === e.options.width && (l.width = e.el.outerWidth() + "px"), i.css(l)
            }
        },
        enableKillerFn: function() {
            var e = this;
            t(document).on("click.autocomplete", e.killerFn)
        },
        disableKillerFn: function() {
            var e = this;
            t(document).off("click.autocomplete", e.killerFn)
        },
        killSuggestions: function() {
            var t = this;
            t.stopKillSuggestions(), t.intervalId = window.setInterval(function() {
                t.visible && (t.options.preserveInput || t.el.val(t.currentValue), t.hide()), t.stopKillSuggestions()
            }, 50)
        },
        stopKillSuggestions: function() {
            window.clearInterval(this.intervalId)
        },
        isCursorAtEnd: function() {
            var t, e = this,
                i = e.el.val().length,
                n = e.element.selectionStart;
            return "number" == typeof n ? n === i : !document.selection || (t = document.selection.createRange(), t.moveStart("character", -i), i === t.text.length)
        },
        onKeyPress: function(t) {
            var e = this;
            if (!e.disabled && !e.visible && t.which === n.DOWN && e.currentValue) return void e.suggest();
            if (!e.disabled && e.visible) {
                switch (t.which) {
                    case n.ESC:
                        e.el.val(e.currentValue), e.hide();
                        break;
                    case n.RIGHT:
                        if (e.hint && e.options.onHint && e.isCursorAtEnd()) {
                            e.selectHint();
                            break
                        }
                        return;
                    case n.TAB:
                        if (e.hint && e.options.onHint) return void e.selectHint();
                        if (e.selectedIndex === -1) return void e.hide();
                        if (e.select(e.selectedIndex), e.options.tabDisabled === !1) return;
                        break;
                    case n.RETURN:
                        if (e.selectedIndex === -1) return void e.hide();
                        e.select(e.selectedIndex);
                        break;
                    case n.UP:
                        e.moveUp();
                        break;
                    case n.DOWN:
                        e.moveDown();
                        break;
                    default:
                        return
                }
                t.stopImmediatePropagation(), t.preventDefault()
            }
        },
        onKeyUp: function(t) {
            var e = this;
            if (!e.disabled) {
                switch (t.which) {
                    case n.UP:
                    case n.DOWN:
                        return
                }
                clearInterval(e.onChangeInterval), e.currentValue !== e.el.val() && (e.findBestHint(), e.options.deferRequestBy > 0 ? e.onChangeInterval = setInterval(function() {
                    e.onValueChange()
                }, e.options.deferRequestBy) : e.onValueChange())
            }
        },
        onValueChange: function() {
            var e = this,
                i = e.options,
                n = e.el.val(),
                o = e.getQuery(n);
            return e.selection && e.currentValue !== o && (e.selection = null, (i.onInvalidateSelection || t.noop).call(e.element)), clearInterval(e.onChangeInterval), e.currentValue = n, e.selectedIndex = -1, i.triggerSelectOnValidInput && e.isExactMatch(o) ? void e.select(0) : void(o.length < i.minChars ? e.hide() : e.getSuggestions(o))
        },
        isExactMatch: function(t) {
            var e = this.suggestions;
            return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase()
        },
        getQuery: function(e) {
            var i, n = this.options.delimiter;
            return n ? (i = e.split(n), t.trim(i[i.length - 1])) : e
        },
        getSuggestionsLocal: function(e) {
            var i, n = this,
                o = n.options,
                s = e.toLowerCase(),
                r = o.lookupFilter,
                a = parseInt(o.lookupLimit, 10);
            return i = {
                suggestions: t.grep(o.lookup, function(t) {
                    return r(t, e, s)
                })
            }, a && i.suggestions.length > a && (i.suggestions = i.suggestions.slice(0, a)), i
        },
        getSuggestions: function(e) {
            var i, n, o, s, r = this,
                a = r.options,
                l = a.serviceUrl;
            if (a.params[a.paramName] = e, n = a.ignoreParams ? null : a.params, a.onSearchStart.call(r.element, a.params) !== !1) {
                if (t.isFunction(a.lookup)) return void a.lookup(e, function(t) {
                    r.suggestions = t.suggestions, r.suggest(), a.onSearchComplete.call(r.element, e, t.suggestions)
                });
                r.isLocal ? i = r.getSuggestionsLocal(e) : (t.isFunction(l) && (l = l.call(r.element, e)), o = l + "?" + t.param(n || {}), i = r.cachedResponse[o]), i && t.isArray(i.suggestions) ? (r.suggestions = i.suggestions, r.suggest(), a.onSearchComplete.call(r.element, e, i.suggestions)) : r.isBadQuery(e) ? a.onSearchComplete.call(r.element, e, []) : (r.abortAjax(), s = {
                    url: l,
                    data: n,
                    type: a.type,
                    dataType: a.dataType
                }, t.extend(s, a.ajaxSettings), r.currentRequest = t.ajax(s).done(function(t) {
                    var i;
                    r.currentRequest = null, i = a.transformResult(t, e), r.processResponse(i, e, o), a.onSearchComplete.call(r.element, e, i.suggestions)
                }).fail(function(t, i, n) {
                    a.onSearchError.call(r.element, e, t, i, n)
                }))
            }
        },
        isBadQuery: function(t) {
            if (!this.options.preventBadQueries) return !1;
            for (var e = this.badQueries, i = e.length; i--;)
                if (0 === t.indexOf(e[i])) return !0;
            return !1
        },
        hide: function() {
            var e = this,
                i = t(e.suggestionsContainer);
            t.isFunction(e.options.onHide) && e.visible && e.options.onHide.call(e.element, i), e.visible = !1, e.selectedIndex = -1, clearInterval(e.onChangeInterval), t(e.suggestionsContainer).hide(), e.signalHint(null)
        },
        suggest: function() {
            if (!this.suggestions.length) return void(this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
            var e, i = this,
                n = i.options,
                o = n.groupBy,
                s = n.formatResult,
                r = i.getQuery(i.currentValue),
                a = i.classes.suggestion,
                l = i.classes.selected,
                c = t(i.suggestionsContainer),
                h = t(i.noSuggestionsContainer),
                u = n.beforeRender,
                d = "",
                f = function(t, i) {
                    var s = t.data[o];
                    return e === s ? "" : (e = s, n.formatGroup(t, e))
                };
            return n.triggerSelectOnValidInput && i.isExactMatch(r) ? void i.select(0) : (t.each(i.suggestions, function(t, e) {
                o && (d += f(e, r, t)), d += '<div class="' + a + '" data-index="' + t + '">' + s(e, r, t) + "</div>"
            }), this.adjustContainerWidth(), h.detach(), c.html(d), t.isFunction(u) && u.call(i.element, c, i.suggestions), i.fixPosition(), c.show(), n.autoSelectFirst && (i.selectedIndex = 0, c.scrollTop(0), c.children("." + a).first().addClass(l)), i.visible = !0, void i.findBestHint())
        },
        noSuggestions: function() {
            var e = this,
                i = t(e.suggestionsContainer),
                n = t(e.noSuggestionsContainer);
            this.adjustContainerWidth(), n.detach(), i.empty(), i.append(n), e.fixPosition(), i.show(), e.visible = !0
        },
        adjustContainerWidth: function() {
            var e, i = this,
                n = i.options,
                o = t(i.suggestionsContainer);
            "auto" === n.width ? (e = i.el.outerWidth(), o.css("width", e > 0 ? e : 300)) : "flex" === n.width && o.css("width", "")
        },
        findBestHint: function() {
            var e = this,
                i = e.el.val().toLowerCase(),
                n = null;
            i && (t.each(e.suggestions, function(t, e) {
                var o = 0 === e.value.toLowerCase().indexOf(i);
                return o && (n = e), !o
            }), e.signalHint(n))
        },
        signalHint: function(e) {
            var i = "",
                n = this;
            e && (i = n.currentValue + e.value.substr(n.currentValue.length)), n.hintValue !== i && (n.hintValue = i, n.hint = e, (this.options.onHint || t.noop)(i))
        },
        verifySuggestionsFormat: function(e) {
            return e.length && "string" == typeof e[0] ? t.map(e, function(t) {
                return {
                    value: t,
                    data: null
                }
            }) : e
        },
        validateOrientation: function(e, i) {
            return e = t.trim(e || "").toLowerCase(), t.inArray(e, ["auto", "bottom", "top"]) === -1 && (e = i), e
        },
        processResponse: function(t, e, i) {
            var n = this,
                o = n.options;
            t.suggestions = n.verifySuggestionsFormat(t.suggestions), o.noCache || (n.cachedResponse[i] = t, o.preventBadQueries && !t.suggestions.length && n.badQueries.push(e)), e === n.getQuery(n.currentValue) && (n.suggestions = t.suggestions, n.suggest())
        },
        activate: function(e) {
            var i, n = this,
                o = n.classes.selected,
                s = t(n.suggestionsContainer),
                r = s.find("." + n.classes.suggestion);
            return s.find("." + o).removeClass(o), n.selectedIndex = e, n.selectedIndex !== -1 && r.length > n.selectedIndex ? (i = r.get(n.selectedIndex), t(i).addClass(o), i) : null
        },
        selectHint: function() {
            var e = this,
                i = t.inArray(e.hint, e.suggestions);
            e.select(i)
        },
        select: function(t) {
            var e = this;
            e.hide(), e.onSelect(t), e.disableKillerFn()
        },
        moveUp: function() {
            var e = this;
            if (e.selectedIndex !== -1) return 0 === e.selectedIndex ? (t(e.suggestionsContainer).children().first().removeClass(e.classes.selected), e.selectedIndex = -1, e.el.val(e.currentValue), void e.findBestHint()) : void e.adjustScroll(e.selectedIndex - 1)
        },
        moveDown: function() {
            var t = this;
            t.selectedIndex !== t.suggestions.length - 1 && t.adjustScroll(t.selectedIndex + 1)
        },
        adjustScroll: function(e) {
            var i = this,
                n = i.activate(e);
            if (n) {
                var o, s, r, a = t(n).outerHeight();
                o = n.offsetTop, s = t(i.suggestionsContainer).scrollTop(), r = s + i.options.maxHeight - a, o < s ? t(i.suggestionsContainer).scrollTop(o) : o > r && t(i.suggestionsContainer).scrollTop(o - i.options.maxHeight + a), i.options.preserveInput || i.el.val(i.getValue(i.suggestions[e].value)), i.signalHint(null)
            }
        },
        onSelect: function(e) {
            var i = this,
                n = i.options.onSelect,
                o = i.suggestions[e];
            i.currentValue = i.getValue(o.value), i.currentValue === i.el.val() || i.options.preserveInput || i.el.val(i.currentValue), i.signalHint(null), i.suggestions = [], i.selection = o, t.isFunction(n) && n.call(i.element, o)
        },
        getValue: function(t) {
            var e, i, n = this,
                o = n.options.delimiter;
            return o ? (e = n.currentValue, i = e.split(o), 1 === i.length ? t : e.substr(0, e.length - i[i.length - 1].length) + t) : t
        },
        dispose: function() {
            var e = this;
            e.el.off(".autocomplete").removeData("autocomplete"), e.disableKillerFn(), t(window).off("resize.autocomplete", e.fixPositionCapture), t(e.suggestionsContainer).remove()
        }
    }, t.fn.autocomplete = t.fn.devbridgeAutocomplete = function(i, n) {
        var o = "autocomplete";
        return arguments.length ? this.each(function() {
            var s = t(this),
                r = s.data(o);
            "string" == typeof i ? r && "function" == typeof r[i] && r[i](n) : (r && r.dispose && r.dispose(), r = new e(this, i), s.data(o, r))
        }) : this.first().data(o)
    }
}), $(function() {
    $.ajax({
        url: "assets/content/countries.txt",
        dataType: "json"
    }).done(function(t) {
        var e = $.map(t, function(t, e) {
            return {
                value: t,
                data: e
            }
        });
        $.map(t, function(t) {
            return t
        });
        $("#autocomplete").autocomplete({
            lookup: e
        })
    }), $(".vote-thanks").hide(), $(".vote").click(function(t) {
        t.preventDefault();
        var e = $(".vote").outerHeight();
        $(".vote").fadeOut(function() {
            $(".vote-thanks").css("height", e).fadeIn()
        })
    })
});