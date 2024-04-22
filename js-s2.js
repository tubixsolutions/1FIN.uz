
function toggleArrow(n) {
  var t = n.currentTarget.querySelector(".toggle-arrow");
  t && t.classList.toggle("expand");
}

function htmlEncode(n) {
  return $("<div/>").text(n).html();
}

function copyToClipboard(n, t) {
  var i, r;
  window.clipboardData
    ? ((n = n.replace(/\r?\n/gi, "\r\n")),
      (n = n.trim() + "\n"),
      window.clipboardData.setData("Text", n))
    : ((i = document.createElement("textarea")),
      (i.value = n.trim() + "\n"),
      i.setAttribute("readonly", ""),
      (i.style = {
        position: "absolute",
        left: "-9999px",
      }),
      document.body.appendChild(i),
      i.select(),
      document.execCommand("copy"),
      document.body.removeChild(i),
      (r = $("<span class='copy-msg'>Copied successfully</span>")),
      $(t).focus().parent(".input-group-append, .listing-heading").append(r),
      $(r).attr("aria-live", "polite"),
      setTimeout(function () {
        $(r).remove();
      }, 3e3));
  $(t).focus();
}
(function () {
  "use strict";

  function n(r) {
    if (!r) throw new Error("No options passed to Waypoint constructor");
    if (!r.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!r.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + i;
    this.options = n.Adapter.extend({}, n.defaults, r);
    this.element = this.options.element;
    this.adapter = new n.Adapter(this.element);
    this.callback = r.handler;
    this.axis = this.options.horizontal ? "horizontal" : "vertical";
    this.enabled = this.options.enabled;
    this.triggerPoint = null;
    this.group = n.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis,
    });
    this.context = n.Context.findOrCreateByElement(this.options.context);
    n.offsetAliases[this.options.offset] &&
      (this.options.offset = n.offsetAliases[this.options.offset]);
    this.group.add(this);
    this.context.add(this);
    t[this.key] = this;
    i += 1;
  }
  var i = 0,
    t = {};
  n.prototype.queueTrigger = function (n) {
    this.group.queueTrigger(this, n);
  };
  n.prototype.trigger = function (n) {
    this.enabled && this.callback && this.callback.apply(this, n);
  };
  n.prototype.destroy = function () {
    this.context.remove(this);
    this.group.remove(this);
    delete t[this.key];
  };
  n.prototype.disable = function () {
    return (this.enabled = !1), this;
  };
  n.prototype.enable = function () {
    return this.context.refresh(), (this.enabled = !0), this;
  };
  n.prototype.next = function () {
    return this.group.next(this);
  };
  n.prototype.previous = function () {
    return this.group.previous(this);
  };
  n.invokeAll = function (n) {
    var r = [],
      u,
      i,
      f;
    for (u in t) r.push(t[u]);
    for (i = 0, f = r.length; i < f; i++) r[i][n]();
  };
  n.destroyAll = function () {
    n.invokeAll("destroy");
  };
  n.disableAll = function () {
    n.invokeAll("disable");
  };
  n.enableAll = function () {
    n.Context.refreshAll();
    for (var i in t) t[i].enabled = !0;
    return this;
  };
  n.refreshAll = function () {
    n.Context.refreshAll();
  };
  n.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  };
  n.viewportWidth = function () {
    return document.documentElement.clientWidth;
  };
  n.adapters = [];
  n.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0,
  };
  n.offsetAliases = {
    "bottom-in-view": function () {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    "right-in-view": function () {
      return this.context.innerWidth() - this.adapter.outerWidth();
    },
  };
  window.Waypoint = n;
})(),
  (function () {
    "use strict";

    function f(n) {
      window.setTimeout(n, 1e3 / 60);
    }

    function n(u) {
      this.element = u;
      this.Adapter = t.Adapter;
      this.adapter = new this.Adapter(u);
      this.key = "waypoint-context-" + r;
      this.didScroll = !1;
      this.didResize = !1;
      this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop(),
      };
      this.waypoints = {
        vertical: {},
        horizontal: {},
      };
      u.waypointContextKey = this.key;
      i[u.waypointContextKey] = this;
      r += 1;
      t.windowContext ||
        ((t.windowContext = !0), (t.windowContext = new n(window)));
      this.createThrottledScrollHandler();
      this.createThrottledResizeHandler();
    }
    var r = 0,
      i = {},
      t = window.Waypoint,
      u = window.onload;
    n.prototype.add = function (n) {
      var t = n.options.horizontal ? "horizontal" : "vertical";
      this.waypoints[t][n.key] = n;
      this.refresh();
    };
    n.prototype.checkEmpty = function () {
      var n = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        t = this.Adapter.isEmptyObject(this.waypoints.vertical),
        r = this.element == this.element.window;
      n && t && !r && (this.adapter.off(".waypoints"), delete i[this.key]);
    };
    n.prototype.createThrottledResizeHandler = function () {
      function i() {
        n.handleResize();
        n.didResize = !1;
      }
      var n = this;
      this.adapter.on("resize.waypoints", function () {
        n.didResize || ((n.didResize = !0), t.requestAnimationFrame(i));
      });
    };
    n.prototype.createThrottledScrollHandler = function () {
      function i() {
        n.handleScroll();
        n.didScroll = !1;
      }
      var n = this;
      this.adapter.on("scroll.waypoints", function () {
        (!n.didScroll || t.isTouch) &&
          ((n.didScroll = !0), t.requestAnimationFrame(i));
      });
    };
    n.prototype.handleResize = function () {
      t.Context.refreshAll();
    };
    n.prototype.handleScroll = function () {
      var u = {},
        i = {
          horizontal: {
            newScroll: this.adapter.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
          },
          vertical: {
            newScroll: this.adapter.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
          },
        },
        r,
        f,
        n,
        s;
      for (r in i) {
        var t = i[r],
          h = t.newScroll > t.oldScroll,
          c = h ? t.forward : t.backward;
        for (f in this.waypoints[r])
          if (((n = this.waypoints[r][f]), n.triggerPoint !== null)) {
            var e = t.oldScroll < n.triggerPoint,
              o = t.newScroll >= n.triggerPoint,
              l = e && o,
              a = !e && !o;
            (l || a) && (n.queueTrigger(c), (u[n.group.id] = n.group));
          }
      }
      for (s in u) u[s].flushTriggers();
      this.oldScroll = {
        x: i.horizontal.newScroll,
        y: i.vertical.newScroll,
      };
    };
    n.prototype.innerHeight = function () {
      return this.element == this.element.window
        ? t.viewportHeight()
        : this.adapter.innerHeight();
    };
    n.prototype.remove = function (n) {
      delete this.waypoints[n.axis][n.key];
      this.checkEmpty();
    };
    n.prototype.innerWidth = function () {
      return this.element == this.element.window
        ? t.viewportWidth()
        : this.adapter.innerWidth();
    };
    n.prototype.destroy = function () {
      var t = [],
        i,
        r,
        n,
        u;
      for (i in this.waypoints)
        for (r in this.waypoints[i]) t.push(this.waypoints[i][r]);
      for (n = 0, u = t.length; n < u; n++) t[n].destroy();
    };
    n.prototype.refresh = function () {
      var u = this.element == this.element.window,
        l = u ? undefined : this.adapter.offset(),
        f = {},
        o,
        e,
        i,
        a;
      this.handleScroll();
      o = {
        horizontal: {
          contextOffset: u ? 0 : l.left,
          contextScroll: u ? 0 : this.oldScroll.x,
          contextDimension: this.innerWidth(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left",
          offsetProp: "left",
        },
        vertical: {
          contextOffset: u ? 0 : l.top,
          contextScroll: u ? 0 : this.oldScroll.y,
          contextDimension: this.innerHeight(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up",
          offsetProp: "top",
        },
      };
      for (e in o) {
        i = o[e];
        for (a in this.waypoints[e]) {
          var n = this.waypoints[e][a],
            r = n.options.offset,
            v = n.triggerPoint,
            y = 0,
            s = v == null,
            p,
            h,
            c,
            w,
            b;
          n.element !== n.element.window &&
            (y = n.adapter.offset()[i.offsetProp]);
          typeof r == "function"
            ? (r = r.apply(n))
            : typeof r == "string" &&
              ((r = parseFloat(r)),
              n.options.offset.indexOf("%") > -1 &&
                (r = Math.ceil((i.contextDimension * r) / 100)));
          p = i.contextScroll - i.contextOffset;
          n.triggerPoint = Math.floor(y + p - r);
          h = v < i.oldScroll;
          c = n.triggerPoint >= i.oldScroll;
          w = h && c;
          b = !h && !c;
          !s && w
            ? (n.queueTrigger(i.backward), (f[n.group.id] = n.group))
            : !s && b
            ? (n.queueTrigger(i.forward), (f[n.group.id] = n.group))
            : s &&
              i.oldScroll >= n.triggerPoint &&
              (n.queueTrigger(i.forward), (f[n.group.id] = n.group));
        }
      }
      return (
        t.requestAnimationFrame(function () {
          for (var n in f) f[n].flushTriggers();
        }),
        this
      );
    };
    n.findOrCreateByElement = function (t) {
      return n.findByElement(t) || new n(t);
    };
    n.refreshAll = function () {
      for (var n in i) i[n].refresh();
    };
    n.findByElement = function (n) {
      return i[n.waypointContextKey];
    };
    window.onload = function () {
      u && u();
      n.refreshAll();
    };
    t.requestAnimationFrame = function (n) {
      var t =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        f;
      t.call(window, n);
    };
    t.Context = n;
  })(),
  (function () {
    "use strict";

    function i(n, t) {
      return n.triggerPoint - t.triggerPoint;
    }

    function u(n, t) {
      return t.triggerPoint - n.triggerPoint;
    }

    function n(n) {
      this.name = n.name;
      this.axis = n.axis;
      this.id = this.name + "-" + this.axis;
      this.waypoints = [];
      this.clearTriggerQueues();
      r[this.axis][this.name] = this;
    }
    var r = {
        vertical: {},
        horizontal: {},
      },
      t = window.Waypoint;
    n.prototype.add = function (n) {
      this.waypoints.push(n);
    };
    n.prototype.clearTriggerQueues = function () {
      this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: [],
      };
    };
    n.prototype.flushTriggers = function () {
      var n, t, e, r, o, f;
      for (n in this.triggerQueues)
        for (
          t = this.triggerQueues[n],
            e = n === "up" || n === "left",
            t.sort(e ? u : i),
            r = 0,
            o = t.length;
          r < o;
          r += 1
        )
          (f = t[r]),
            (f.options.continuous || r === t.length - 1) && f.trigger([n]);
      this.clearTriggerQueues();
    };
    n.prototype.next = function (n) {
      this.waypoints.sort(i);
      var r = t.Adapter.inArray(n, this.waypoints),
        u = r === this.waypoints.length - 1;
      return u ? null : this.waypoints[r + 1];
    };
    n.prototype.previous = function (n) {
      this.waypoints.sort(i);
      var r = t.Adapter.inArray(n, this.waypoints);
      return r ? this.waypoints[r - 1] : null;
    };
    n.prototype.queueTrigger = function (n, t) {
      this.triggerQueues[t].push(n);
    };
    n.prototype.remove = function (n) {
      var i = t.Adapter.inArray(n, this.waypoints);
      i > -1 && this.waypoints.splice(i, 1);
    };
    n.prototype.first = function () {
      return this.waypoints[0];
    };
    n.prototype.last = function () {
      return this.waypoints[this.waypoints.length - 1];
    };
    n.findOrCreate = function (t) {
      return r[t.axis][t.name] || new n(t);
    };
    t.Group = n;
  })(),
  (function () {
    "use strict";

    function t(t) {
      this.$element = n(t);
    }
    var n = window.jQuery,
      i = window.Waypoint;
    n.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (n, i) {
        t.prototype[i] = function () {
          var n = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, n);
        };
      }
    );
    n.each(["extend", "inArray", "isEmptyObject"], function (i, r) {
      t[r] = n[r];
    });
    i.adapters.push({
      name: "jquery",
      Adapter: t,
    });
    i.Adapter = t;
  })(),
  (function () {
    "use strict";

    function n(n) {
      return function () {
        var r = [],
          i = arguments[0];
        return (
          n.isFunction(arguments[0]) &&
            ((i = n.extend({}, arguments[1])), (i.handler = arguments[0])),
          this.each(function () {
            var u = n.extend({}, i, {
              element: this,
            });
            typeof u.context == "string" &&
              (u.context = n(this).closest(u.context)[0]);
            r.push(new t(u));
          }),
          r
        );
      };
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = n(window.jQuery));
    window.Zepto && (window.Zepto.fn.waypoint = n(window.Zepto));
  })();
/*!
 * jquery.counterup.js 2.1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Amended by Jeremy Paris, Ciro Mattia Gonano and others
 *
 * Date: Feb 24, 2017
 */
(function (n) {
  "use strict";
  n.fn.counterUp = function (t) {
    var i = n.extend(
        {
          time: 400,
          delay: 10,
          offset: 100,
          beginAt: 0,
          formatter: !1,
          context: "window",
          callback: function () {},
        },
        t
      ),
      r;
    return this.each(function () {
      var t = n(this),
        u = {
          time: n(this).data("counterup-time") || i.time,
          delay: n(this).data("counterup-delay") || i.delay,
          offset: n(this).data("counterup-offset") || i.offset,
          beginAt: n(this).data("counterup-beginat") || i.beginAt,
          context: n(this).data("counterup-context") || i.context,
        },
        f = function () {
          var p = [],
            s = u.time / u.delay,
            e = n(this).attr("data-num") ? n(this).attr("data-num") : t.text(),
            k = /[0-9]+,[0-9]+/.test(e),
            w,
            h,
            c,
            l,
            o,
            f,
            b;
          if (
            ((e = e.replace(/,/g, "")),
            (w = (e.split(".")[1] || []).length),
            u.beginAt > e && (u.beginAt = e),
            (h = /[0-9]+:[0-9]+:[0-9]+/.test(e)),
            h)
          )
            for (c = e.split(":"), l = 1, r = 0; c.length > 0; )
              (r += l * parseInt(c.pop(), 10)), (l *= 60);
          for (o = s; o >= (u.beginAt / e) * s; o--) {
            if (((f = parseFloat((e / s) * o).toFixed(w)), h)) {
              f = parseInt((r / s) * o);
              var a = parseInt(f / 3600) % 24,
                v = parseInt(f / 60) % 60,
                y = parseInt(f % 60, 10);
              f =
                (a < 10 ? "0" + a : a) +
                ":" +
                (v < 10 ? "0" + v : v) +
                ":" +
                (y < 10 ? "0" + y : y);
            }
            if (k)
              while (/(\d+)(\d{3})/.test(f.toString()))
                f = f.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            i.formatter && (f = i.formatter.call(this, f));
            p.unshift(f);
          }
          t.data("counterup-nums", p);
          t.text(u.beginAt);
          b = function () {
            if (!t.data("counterup-nums")) {
              i.callback.call(this);
              return;
            }
            t.html(t.data("counterup-nums").shift());
            t.data("counterup-nums").length
              ? setTimeout(t.data("counterup-func"), u.delay)
              : (t.data("counterup-nums", null),
                t.data("counterup-func", null),
                i.callback.call(this));
          };
          t.data("counterup-func", b);
          setTimeout(t.data("counterup-func"), u.delay);
        };
      t.waypoint(
        function () {
          f();
          this.destroy();
        },
        {
          offset: u.offset + "%",
          context: u.context,
        }
      );
    });
  };
})(jQuery);
/*!
 * Stickyfill – `position: sticky` polyfill
 * v. 2.1.0 | https://github.com/wilddeer/stickyfill
 * MIT License
 */
(function (n, t) {
  "use strict";

  function y(n, t) {
    if (!(n instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }

  function u(n, t) {
    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
  }

  function f(n) {
    return parseFloat(n) || 0;
  }

  function l(n) {
    for (var t = 0; n; ) (t += n.offsetTop), (n = n.offsetParent);
    return t;
  }

  function a() {
    function h() {
      n.pageXOffset != r.left
        ? ((r.top = n.pageYOffset), (r.left = n.pageXOffset), e.refreshAll())
        : n.pageYOffset != r.top &&
          ((r.top = n.pageYOffset),
          (r.left = n.pageXOffset),
          i.forEach(function (n) {
            return n._recalcPosition();
          }));
    }

    function s() {
      o = setInterval(function () {
        i.forEach(function (n) {
          return n._fastCheck();
        });
      }, 500);
    }

    function l() {
      clearInterval(o);
    }
    var o, u, f;
    c ||
      ((c = !0),
      h(),
      n.addEventListener("scroll", h),
      n.addEventListener("resize", e.refreshAll),
      n.addEventListener("orientationchange", e.refreshAll),
      (o = void 0),
      (u = void 0),
      (f = void 0),
      "hidden" in t
        ? ((u = "hidden"), (f = "visibilitychange"))
        : "webkitHidden" in t &&
          ((u = "webkitHidden"), (f = "webkitvisibilitychange")),
      f
        ? (t[u] || s(),
          t.addEventListener(f, function () {
            t[u] ? l() : s();
          }))
        : s());
  }
  var v = (function () {
      function n(n, t) {
        for (var i, r = 0; r < t.length; r++)
          (i = t[r]),
            (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(n, i.key, i);
      }
      return function (t, i, r) {
        return i && n(t.prototype, i), r && n(t, r), t;
      };
    })(),
    o = !1,
    h = typeof n != "undefined",
    s,
    e;
  h && n.getComputedStyle
    ? (function () {
        var n = t.createElement("div");
        ["", "-webkit-", "-moz-", "-ms-"].some(function (t) {
          try {
            n.style.position = t + "sticky";
          } catch (i) {}
          return n.style.position != "";
        }) && (o = !0);
      })()
    : (o = !0);
  var c = !1,
    p = typeof ShadowRoot != "undefined",
    r = {
      top: null,
      left: null,
    },
    i = [];
  s = (function () {
    function e(n) {
      if ((y(this, e), !(n instanceof HTMLElement)))
        throw new Error("First argument must be HTMLElement");
      if (
        i.some(function (t) {
          return t._node === n;
        })
      )
        throw new Error("Stickyfill is already applied to this node");
      this._node = n;
      this._stickyMode = null;
      this._active = !1;
      i.push(this);
      this.refresh();
    }
    return (
      v(e, [
        {
          key: "refresh",
          value: function () {
            var k, w, b, c;
            if (!o && !this._removed) {
              this._active && this._deactivate();
              var i = this._node,
                r = getComputedStyle(i),
                e = {
                  position: r.position,
                  top: r.top,
                  display: r.display,
                  marginTop: r.marginTop,
                  marginBottom: r.marginBottom,
                  marginLeft: r.marginLeft,
                  marginRight: r.marginRight,
                  cssFloat: r.cssFloat,
                };
              if (
                !isNaN(parseFloat(e.top)) &&
                e.display != "table-cell" &&
                e.display != "none"
              ) {
                this._active = !0;
                k = i.style.position;
                (r.position == "sticky" || r.position == "-webkit-sticky") &&
                  (i.style.position = "static");
                var v = i.parentNode,
                  h = p && v instanceof ShadowRoot ? v.host : v,
                  s = i.getBoundingClientRect(),
                  y = h.getBoundingClientRect(),
                  a = getComputedStyle(h);
                this._parent = {
                  node: h,
                  styles: {
                    position: h.style.position,
                  },
                  offsetHeight: h.offsetHeight,
                };
                this._offsetToWindow = {
                  left: s.left,
                  right: t.documentElement.clientWidth - s.right,
                };
                this._offsetToParent = {
                  top: s.top - y.top - f(a.borderTopWidth),
                  left: s.left - y.left - f(a.borderLeftWidth),
                  right: -s.right + y.right - f(a.borderRightWidth),
                };
                this._styles = {
                  position: k,
                  top: i.style.top,
                  bottom: i.style.bottom,
                  left: i.style.left,
                  right: i.style.right,
                  width: i.style.width,
                  marginTop: i.style.marginTop,
                  marginLeft: i.style.marginLeft,
                  marginRight: i.style.marginRight,
                };
                w = f(e.top);
                this._limits = {
                  start: s.top + n.pageYOffset - w,
                  end:
                    y.top +
                    n.pageYOffset +
                    h.offsetHeight -
                    f(a.borderBottomWidth) -
                    i.offsetHeight -
                    w -
                    f(e.marginBottom),
                };
                b = a.position;
                b != "absolute" &&
                  b != "relative" &&
                  (h.style.position = "relative");
                this._recalcPosition();
                c = this._clone = {};
                c.node = t.createElement("div");
                u(c.node.style, {
                  width: s.right - s.left + "px",
                  height: s.bottom - s.top + "px",
                  marginTop: e.marginTop,
                  marginBottom: e.marginBottom,
                  marginLeft: e.marginLeft,
                  marginRight: e.marginRight,
                  cssFloat: e.cssFloat,
                  padding: 0,
                  border: 0,
                  borderSpacing: 0,
                  fontSize: "1em",
                  position: "static",
                });
                v.insertBefore(c.node, i);
                c.docOffsetTop = l(c.node);
              }
            }
          },
        },
        {
          key: "_recalcPosition",
          value: function () {
            if (this._active && !this._removed) {
              var n =
                r.top <= this._limits.start
                  ? "start"
                  : r.top >= this._limits.end
                  ? "end"
                  : "middle";
              if (this._stickyMode != n) {
                switch (n) {
                  case "start":
                    u(this._node.style, {
                      position: "absolute",
                      left: this._offsetToParent.left + "px",
                      right: this._offsetToParent.right + "px",
                      top: this._offsetToParent.top + "px",
                      bottom: "auto",
                      width: "auto",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                    });
                    break;
                  case "middle":
                    u(this._node.style, {
                      position: "fixed",
                      left: this._offsetToWindow.left + "px",
                      right: this._offsetToWindow.right + "px",
                      top: this._styles.top,
                      bottom: "auto",
                      width: "auto",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                    });
                    break;
                  case "end":
                    u(this._node.style, {
                      position: "absolute",
                      left: this._offsetToParent.left + "px",
                      right: this._offsetToParent.right + "px",
                      top: "auto",
                      bottom: 0,
                      width: "auto",
                      marginLeft: 0,
                      marginRight: 0,
                    });
                }
                this._stickyMode = n;
              }
            }
          },
        },
        {
          key: "_fastCheck",
          value: function () {
            this._active &&
              !this._removed &&
              (Math.abs(l(this._clone.node) - this._clone.docOffsetTop) > 1 ||
                Math.abs(
                  this._parent.node.offsetHeight - this._parent.offsetHeight
                ) > 1) &&
              this.refresh();
          },
        },
        {
          key: "_deactivate",
          value: function () {
            var n = this;
            this._active &&
              !this._removed &&
              (this._clone.node.parentNode.removeChild(this._clone.node),
              delete this._clone,
              u(this._node.style, this._styles),
              delete this._styles,
              i.some(function (t) {
                return (
                  t !== n && t._parent && t._parent.node === n._parent.node
                );
              }) || u(this._parent.node.style, this._parent.styles),
              delete this._parent,
              (this._stickyMode = null),
              (this._active = !1),
              delete this._offsetToWindow,
              delete this._offsetToParent,
              delete this._limits);
          },
        },
        {
          key: "remove",
          value: function () {
            var n = this;
            this._deactivate();
            i.some(function (t, r) {
              if (t._node === n._node) return i.splice(r, 1), !0;
            });
            this._removed = !0;
          },
        },
      ]),
      e
    );
  })();
  e = {
    stickies: i,
    Sticky: s,
    forceSticky: function () {
      o = !1;
      a();
      this.refreshAll();
    },
    addOne: function (n) {
      if (!(n instanceof HTMLElement))
        if (n.length && n[0]) n = n[0];
        else return;
      for (var t = 0; t < i.length; t++) if (i[t]._node === n) return i[t];
      return new s(n);
    },
    add: function (n) {
      var t, u, r, f;
      if ((n instanceof HTMLElement && (n = [n]), n.length)) {
        for (
          t = [],
            u = function (r) {
              var u = n[r];
              if (!(u instanceof HTMLElement))
                return t.push(void 0), "continue";
              if (
                i.some(function (n) {
                  if (n._node === u) return t.push(n), !0;
                })
              )
                return "continue";
              t.push(new s(u));
            },
            r = 0;
          r < n.length;
          r++
        )
          (f = u(r)), f === "continue";
        return t;
      }
    },
    refreshAll: function () {
      i.forEach(function (n) {
        return n.refresh();
      });
    },
    removeOne: function (n) {
      if (!(n instanceof HTMLElement))
        if (n.length && n[0]) n = n[0];
        else return;
      i.some(function (t) {
        if (t._node === n) return t.remove(), !0;
      });
    },
    remove: function (n) {
      var r, t;
      if ((n instanceof HTMLElement && (n = [n]), n.length))
        for (
          r = function (t) {
            var r = n[t];
            i.some(function (n) {
              if (n._node === r) return n.remove(), !0;
            });
          },
            t = 0;
          t < n.length;
          t++
        )
          r(t);
    },
    removeAll: function () {
      while (i.length) i[0].remove();
    },
  };
  o || a();
  typeof module != "undefined" && module.exports
    ? (module.exports = e)
    : h && (n.Stickyfill = e);
})(window, document),
  (function (n, t) {
    var i = t(n, n.document, Date);
    n.lazySizes = i;
    typeof module == "object" && module.exports && (module.exports = i);
  })(typeof window != "undefined" ? window : {}, function (n, t, i) {
    "use strict";
    var e, r;
    if (
      ((function () {
        var t,
          i = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            fastLoadedClass: "ls-is-cached",
            iframeLoadMode: 0,
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125,
          };
        r = n.lazySizesConfig || n.lazysizesConfig || {};
        for (t in i) t in r || (r[t] = i[t]);
      })(),
      !t || !t.getElementsByClassName)
    )
      return {
        init: function () {},
        cfg: r,
        noSupport: !0,
      };
    var s = t.documentElement,
      ot = n.HTMLPictureElement,
      h = "addEventListener",
      u = "getAttribute",
      o = n[h].bind(n),
      f = n.setTimeout,
      it = n.requestAnimationFrame || f,
      k = n.requestIdleCallback,
      rt = /^picture$/i,
      st = ["load", "error", "lazyincluded", "_lazyloaded"],
      p = {},
      ht = Array.prototype.forEach,
      c = function (n, t) {
        return (
          p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
          p[t].test(n[u]("class") || "") && p[t]
        );
      },
      l = function (n, t) {
        c(n, t) ||
          n.setAttribute("class", (n[u]("class") || "").trim() + " " + t);
      },
      d = function (n, t) {
        var i;
        (i = c(n, t)) &&
          n.setAttribute("class", (n[u]("class") || "").replace(i, " "));
      },
      g = function (n, t, i) {
        var r = i ? h : "removeEventListener";
        i && g(n, t);
        st.forEach(function (i) {
          n[r](i, t);
        });
      },
      a = function (n, i, r, u, f) {
        var o = t.createEvent("Event");
        return (
          r || (r = {}),
          (r.instance = e),
          o.initEvent(i, !u, !f),
          (o.detail = r),
          n.dispatchEvent(o),
          o
        );
      },
      nt = function (t, i) {
        var f;
        !ot && (f = n.picturefill || r.pf)
          ? (i && i.src && !t[u]("srcset") && t.setAttribute("srcset", i.src),
            f({
              reevaluate: !0,
              elements: [t],
            }))
          : i && i.src && (t.src = i.src);
      },
      v = function (n, t) {
        return (getComputedStyle(n, null) || {})[t];
      },
      ut = function (n, t, i) {
        for (i = i || n.offsetWidth; i < r.minSize && t && !n._lazysizesWidth; )
          (i = t.offsetWidth), (t = t.parentNode);
        return i;
      },
      y = (function () {
        var n,
          i,
          r = [],
          s = [],
          u = r,
          e = function () {
            var t = u;
            for (u = r.length ? s : r, n = !0, i = !1; t.length; ) t.shift()();
            n = !1;
          },
          o = function (r, o) {
            n && !o
              ? r.apply(this, arguments)
              : (u.push(r), i || ((i = !0), (t.hidden ? f : it)(e)));
          };
        return (o._lsFlush = e), o;
      })(),
      w = function (n, t) {
        return t
          ? function () {
              y(n);
            }
          : function () {
              var t = this,
                i = arguments;
              y(function () {
                n.apply(t, i);
              });
            };
      },
      ct = function (n) {
        var u,
          e = 0,
          h = r.throttleDelay,
          t = r.ricTimeout,
          o = function () {
            u = !1;
            e = i.now();
            n();
          },
          s =
            k && t > 49
              ? function () {
                  k(o, {
                    timeout: t,
                  });
                  t !== r.ricTimeout && (t = r.ricTimeout);
                }
              : w(function () {
                  f(o);
                }, !0);
        return function (n) {
          var r;
          ((n = n === !0) && (t = 33), u) ||
            ((u = !0),
            (r = h - (i.now() - e)),
            r < 0 && (r = 0),
            n || r < 9 ? s() : f(s, r));
        };
      },
      ft = function (n) {
        var t,
          u,
          r = 99,
          e = function () {
            t = null;
            n();
          },
          o = function () {
            var n = i.now() - u;
            n < r ? f(o, r - n) : (k || e)(e);
          };
        return function () {
          u = i.now();
          t || (t = f(o, r));
        };
      },
      et = (function () {
        var pt,
          ut,
          kt,
          et,
          dt,
          gt,
          ni,
          ot,
          st,
          lt,
          at,
          wt,
          oi = /^img$/i,
          si = /^iframe$/i,
          hi = "onscroll" in n && !/(gle|ing)bot/.test(navigator.userAgent),
          ci = 0,
          vt = 0,
          b = 0,
          k = -1,
          ti = function (n) {
            b--;
            (!n || b < 0 || !n.target) && (b = 0);
          },
          ii = function (n) {
            return (
              wt == null && (wt = v(t.body, "visibility") == "hidden"),
              wt ||
                !(
                  v(n.parentNode, "visibility") == "hidden" &&
                  v(n, "visibility") == "hidden"
                )
            );
          },
          li = function (n, i) {
            var u,
              r = n,
              f = ii(n);
            for (
              ot -= i, at += i, st -= i, lt += i;
              f && (r = r.offsetParent) && r != t.body && r != s;

            )
              (f = (v(r, "opacity") || 1) > 0),
                f &&
                  v(r, "overflow") != "visible" &&
                  ((u = r.getBoundingClientRect()),
                  (f =
                    lt > u.left &&
                    st < u.right &&
                    at > u.top - 1 &&
                    ot < u.bottom + 1));
            return f;
          },
          ri = function () {
            var w,
              n,
              o,
              c,
              a,
              f,
              v,
              l,
              d,
              h,
              y,
              p,
              i = e.elements;
            if ((et = r.loadMode) && b < 8 && (w = i.length)) {
              for (n = 0, k++; n < w; n++)
                if (i[n] && !i[n]._lazyRace) {
                  if (!hi || (e.prematureUnveil && e.prematureUnveil(i[n]))) {
                    yt(i[n]);
                    continue;
                  }
                  if (
                    (((l = i[n][u]("data-expand")) && (f = l * 1)) || (f = vt),
                    h ||
                      ((h =
                        !r.expand || r.expand < 1
                          ? s.clientHeight > 500 && s.clientWidth > 500
                            ? 500
                            : 370
                          : r.expand),
                      (e._defEx = h),
                      (y = h * r.expFactor),
                      (p = r.hFac),
                      (wt = null),
                      vt < y && b < 1 && k > 2 && et > 2 && !t.hidden
                        ? ((vt = y), (k = 0))
                        : (vt = et > 1 && k > 1 && b < 6 ? h : ci)),
                    d !== f &&
                      ((gt = innerWidth + f * p),
                      (ni = innerHeight + f),
                      (v = f * -1),
                      (d = f)),
                    (o = i[n].getBoundingClientRect()),
                    (at = o.bottom) >= v &&
                      (ot = o.top) <= ni &&
                      (lt = o.right) >= v * p &&
                      (st = o.left) <= gt &&
                      (at || lt || st || ot) &&
                      (r.loadHidden || ii(i[n])) &&
                      ((ut && b < 3 && !l && (et < 3 || k < 4)) || li(i[n], f)))
                  ) {
                    if ((yt(i[n]), (a = !0), b > 9)) break;
                  } else
                    !a &&
                      ut &&
                      !c &&
                      b < 4 &&
                      k < 4 &&
                      et > 2 &&
                      (pt[0] || r.preloadAfterLoad) &&
                      (pt[0] ||
                        (!l &&
                          (at ||
                            lt ||
                            st ||
                            ot ||
                            i[n][u](r.sizesAttr) != "auto"))) &&
                      (c = pt[0] || i[n]);
                }
              c && !a && yt(c);
            }
          },
          p = ct(ri),
          ui = function (n) {
            var t = n.target;
            if (t._lazyCache) {
              delete t._lazyCache;
              return;
            }
            ti(n);
            l(t, r.loadedClass);
            d(t, r.loadingClass);
            g(t, fi);
            a(t, "lazyloaded");
          },
          ai = w(ui),
          fi = function (n) {
            ai({
              target: n.target,
            });
          },
          vi = function (n, t) {
            var i = n.getAttribute("data-load-mode") || r.iframeLoadMode;
            i == 0
              ? n.contentWindow.location.replace(t)
              : i == 1 && (n.src = t);
          },
          yi = function (n) {
            var t,
              i = n[u](r.srcsetAttr);
            (t = r.customMedia[n[u]("data-media") || n[u]("media")]) &&
              n.setAttribute("media", t);
            i && n.setAttribute("srcset", i);
          },
          pi = w(function (n, t, i, e, o) {
            var s, h, v, c, p, w;
            (p = a(n, "lazybeforeunveil", t)).defaultPrevented ||
              (e && (i ? l(n, r.autosizesClass) : n.setAttribute("sizes", e)),
              (h = n[u](r.srcsetAttr)),
              (s = n[u](r.srcAttr)),
              o && ((v = n.parentNode), (c = v && rt.test(v.nodeName || ""))),
              (w = t.firesLoad || ("src" in n && (h || s || c))),
              (p = {
                target: n,
              }),
              l(n, r.loadingClass),
              w && (clearTimeout(kt), (kt = f(ti, 2500)), g(n, fi, !0)),
              c && ht.call(v.getElementsByTagName("source"), yi),
              h
                ? n.setAttribute("srcset", h)
                : s && !c && (si.test(n.nodeName) ? vi(n, s) : (n.src = s)),
              o &&
                (h || c) &&
                nt(n, {
                  src: s,
                }));
            n._lazyRace && delete n._lazyRace;
            d(n, r.lazyClass);
            y(function () {
              var t = n.complete && n.naturalWidth > 1;
              (!w || t) &&
                (t && l(n, r.fastLoadedClass),
                ui(p),
                (n._lazyCache = !0),
                f(function () {
                  "_lazyCache" in n && delete n._lazyCache;
                }, 9));
              n.loading == "lazy" && b--;
            }, !0);
          }),
          yt = function (n) {
            if (!n._lazyRace) {
              var f,
                t = oi.test(n.nodeName),
                e = t && (n[u](r.sizesAttr) || n[u]("sizes")),
                i = e == "auto";
              ((i || !ut) &&
                t &&
                (n[u]("src") || n.srcset) &&
                !n.complete &&
                !c(n, r.errorClass) &&
                c(n, r.lazyClass)) ||
                ((f = a(n, "lazyunveilread").detail),
                i && tt.updateElem(n, !0, n.offsetWidth),
                (n._lazyRace = !0),
                b++,
                pi(n, f, i, e, t));
            }
          },
          wi = ft(function () {
            r.loadMode = 3;
            p();
          }),
          ei = function () {
            r.loadMode == 3 && (r.loadMode = 2);
            wi();
          },
          bt = function () {
            if (!ut) {
              if (i.now() - dt < 999) {
                f(bt, 999);
                return;
              }
              ut = !0;
              r.loadMode = 3;
              p();
              o("scroll", ei, !0);
            }
          };
        return {
          _: function () {
            dt = i.now();
            e.elements = t.getElementsByClassName(r.lazyClass);
            pt = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass);
            o("scroll", p, !0);
            o("resize", p, !0);
            o("pageshow", function (n) {
              if (n.persisted) {
                var i = t.querySelectorAll("." + r.loadingClass);
                i.length &&
                  i.forEach &&
                  it(function () {
                    i.forEach(function (n) {
                      n.complete && yt(n);
                    });
                  });
              }
            });
            n.MutationObserver
              ? new MutationObserver(p).observe(s, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0,
                })
              : (s[h]("DOMNodeInserted", p, !0),
                s[h]("DOMAttrModified", p, !0),
                setInterval(p, 999));
            o("hashchange", p, !0);
            [
              "focus",
              "mouseover",
              "click",
              "load",
              "transitionend",
              "animationend",
            ].forEach(function (n) {
              t[h](n, p, !0);
            });
            /d$|^c/.test(t.readyState)
              ? bt()
              : (o("load", bt), t[h]("DOMContentLoaded", p), f(bt, 2e4));
            e.elements.length ? (ri(), y._lsFlush()) : p();
          },
          checkElems: p,
          unveil: yt,
          _aLSL: ei,
        };
      })(),
      tt = (function () {
        var n,
          f = w(function (n, t, i, r) {
            var f, u, e;
            if (
              ((n._lazysizesWidth = r),
              (r += "px"),
              n.setAttribute("sizes", r),
              rt.test(t.nodeName || ""))
            )
              for (
                f = t.getElementsByTagName("source"), u = 0, e = f.length;
                u < e;
                u++
              )
                f[u].setAttribute("sizes", r);
            i.detail.dataAttr || nt(n, i.detail);
          }),
          i = function (n, t, i) {
            var r,
              u = n.parentNode;
            u &&
              ((i = ut(n, u, i)),
              (r = a(n, "lazybeforesizes", {
                width: i,
                dataAttr: !!t,
              })),
              r.defaultPrevented ||
                ((i = r.detail.width),
                i && i !== n._lazysizesWidth && f(n, u, r, i)));
          },
          e = function () {
            var t,
              r = n.length;
            if (r) for (t = 0; t < r; t++) i(n[t]);
          },
          u = ft(e);
        return {
          _: function () {
            n = t.getElementsByClassName(r.autosizesClass);
            o("resize", u);
          },
          checkElems: u,
          updateElem: i,
        };
      })(),
      b = function () {
        !b.i && t.getElementsByClassName && ((b.i = !0), tt._(), et._());
      };
    return (
      f(function () {
        r.init && b();
      }),
      (e = {
        cfg: r,
        autoSizer: tt,
        loader: et,
        init: b,
        uP: nt,
        aC: l,
        rC: d,
        hC: c,
        fire: a,
        gW: ut,
        rAF: y,
      })
    );
  }),
  (function (n, t) {
    var i = function () {
      t(n.lazySizes);
      n.removeEventListener("lazyunveilread", i, !0);
    };
    t = t.bind(null, n, n.document);
    typeof module == "object" && module.exports
      ? t(require("lazysizes"))
      : typeof define == "function" && define.amd
      ? define(["lazysizes"], t)
      : n.lazySizes
      ? i()
      : n.addEventListener("lazyunveilread", i, !0);
  })(window, function (n, t, i) {
    "use strict";

    function e(n, i, r) {
      if (!f[n]) {
        var u = t.createElement(i ? "link" : "script"),
          e = t.getElementsByTagName("script")[0];
        i
          ? ((u.rel = "stylesheet"), (u.href = n))
          : ((u.onload = function () {
              u.onerror = null;
              u.onload = null;
              r();
            }),
            (u.onerror = u.onload),
            (u.src = n));
        f[n] = !0;
        f[u.src || u.href] = !0;
        e.parentNode.insertBefore(u, e);
      }
    }
    var u,
      r,
      f = {};
    t.addEventListener &&
      ((r = /\(|\)|\s|'/),
      (u = function (n, i) {
        var r = t.createElement("img");
        r.onload = function () {
          r.onload = null;
          r.onerror = null;
          r = null;
          i();
        };
        r.onerror = r.onload;
        r.src = n;
        r && r.complete && r.onload && r.onload();
      }),
      addEventListener(
        "lazybeforeunveil",
        function (n) {
          var o, s, v, l, y, a, p, w, b, f, h, c;
          if (
            n.detail.instance == i &&
            ((w = getCookie("theme")),
            (b = t.querySelector(".toggler")),
            !n.defaultPrevented)
          ) {
            if (
              ((f = n.target),
              f.preload == "none" &&
                (f.preload = f.getAttribute("data-preload") || "auto"),
              f.getAttribute("data-autoplay") != null)
            )
              if (f.getAttribute("data-expand") && !f.autoplay)
                try {
                  f.play();
                } catch (k) {}
              else
                requestAnimationFrame(function () {
                  f.setAttribute("data-expand", "-10");
                  i.aC(f, i.cfg.lazyClass);
                });
            o = f.getAttribute("data-link");
            o && e(o, !0);
            y = f.getAttribute("data-src-light");
            a = f.getAttribute("data-src-dark");
            v = f.getAttribute("data-bg");
            l = f.getAttribute("data-bg-dark");

            function t(n, t = "imgSrc") {
              return t === "bgImg"
                ? n === "dark"
                  ? `url(${r.test(l) ? JSON.stringify(l) : l})`
                  : `url(${r.test(v) ? JSON.stringify(v) : v})`
                : n === "dark"
                ? r.test(a)
                  ? JSON.stringify(a)
                  : a
                : r.test(y)
                ? JSON.stringify(y)
                : y;
            }

            function k(n = "imgSrc") {
              b.addEventListener("click", function () {
                var i = getCookie("theme");
                n === "bgImg"
                  ? (f.style.backgroundImage = t(i, n))
                  : (f.src = t(i, "imgSrc"));
              });
            }
            o = f.getAttribute("data-script");
            o &&
              ((n.detail.firesLoad = !0),
              (s = function () {
                n.detail.firesLoad = !1;
                i.fire(f, "_lazyloaded", {}, !0, !0);
              }),
              e(o, null, s));
            o = f.getAttribute("data-require");
            o && (i.cfg.requireJs ? i.cfg.requireJs([o]) : e(o));
            h = null;
            v && l && k("bgImg");
            h = l && w === "dark" ? l : v;
            h &&
              ((n.detail.firesLoad = !0),
              (s = function () {
                f.style.backgroundImage =
                  "url(" + (r.test(h) ? JSON.stringify(h) : h) + ")";
                n.detail.firesLoad = !1;
                i.fire(f, "_lazyloaded", {}, !0, !0);
              }),
              u(h, s));
            c = null;
            y && a && k("imgSrc");
            c = a && w === "dark" ? a : y;
            c &&
              ((n.detail.firesLoad = !0),
              (s = function () {
                f.src = r.test(c) ? JSON.stringify(c) : c;
                n.detail.firesLoad = !1;
                i.fire(f, "_lazyloaded", {}, !0, !0);
              }),
              u(c, s));
            p = f.getAttribute("data-poster");
            p &&
              ((n.detail.firesLoad = !0),
              (s = function () {
                f.poster = p;
                n.detail.firesLoad = !1;
                i.fire(f, "_lazyloaded", {}, !0, !0);
              }),
              u(p, s));
          }
        },
        !1
      ));
  });
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: "hover focus",
    container: "body",
    title: function () {
      return $(this).attr("title");
    },
    html: !0,
  });
});
$(function () {
  $('.c-search input[type="search"]').removeAttr("data-original-title");
});
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2e3,
  });
});
$(function () {
  var n = $(".header-sticky");
  Stickyfill.add(n);
});
$(function () {
  $(".alert-dismissable-persistent .alertclose").click(function () {
    var t = $(this).data("identifier"),
      n;
    WcpConsent &&
      (((WcpConsent.siteConsent || {}).isConsentRequired &&
        WcpConsent.siteConsent.getConsentFor("Analytics")) ||
        !(WcpConsent.siteConsent || {}).isConsentRequired) &&
      ((n = Cookies.get("dismissed-alerts")),
      n === undefined && (n = "|"),
      Cookies.set("dismissed-alerts", n + t + "|", {
        expires: 30,
      }));
  });
});
$(function () {
  $(".usabilla-open").click(function () {
    var t = $(this).data("usabilla-trigger-name"),
      i = $(this).data("usabilla-analytics-id"),
      n = "usbl.71e348d38aa1.c." + i;
    if (window.usabilla_live !== undefined && localStorage.getItem(n) !== null)
      return (
        localStorage.removeItem(n),
        window.usabilla_live("virtualPageView"),
        window.usabilla_live("trigger", t),
        !1
      );
  });
});
$(function () {
  $("button.listing-action").click(function (n) {
    var t = $(n.target).closest(".listing").find("code").text();
    copyToClipboard(t, n.target);
  });
  $(".copy-button").click(function (n) {
    var t = $("#" + $(n.currentTarget).data("copy-from")),
      i = t.is("input") ? t.val() : t.text();
    copyToClipboard(i, n.currentTarget);
  });
});
$(function () {
  $(document).keyup(function (n) {
    n.which === 27 &&
      $('[data-toggle="tooltip"][aria-describedby]').tooltip("hide");
  });
});
$(function () {
  var t = navigator.userAgent,
    n = document.getElementsByClassName("alert-browser"),
    i = t.indexOf("MSIE") > -1 || t.indexOf("Trident/") > -1;
  if (i) $(n).css("display", "block");
  else if (typeof n !== undefined && !0 && typeof n != "undefined")
    n.length !== 0 && $(n).remove();
  else return !1;
}),
  (function () {
    "use strict";

    function r(n) {
      var r;
      if (appInsights) {
        var t = Cookies.get("exp_sessionid"),
          i = Cookies.get("exp_va"),
          u = {
            target: n,
          };
        appInsights &&
          t &&
          i &&
          ((r = {
            name: "ExP",
            properties: {
              randomizationUnitId: t,
              assignmentContext: i,
              eventReceivedTime: new Date().toISOString(),
              eventType: "Ms.Web.PageAction",
              content: u,
            },
          }),
          appInsights.trackEvent(r));
      }
    }

    function t(n) {
      var u;
      try {
        if (n > 1) return;
        if (appInsights) {
          var i = Cookies.get("exp_sessionid"),
            r = Cookies.get("exp_va");
          appInsights &&
            i &&
            r &&
            ((u = {
              name: "ExP",
              properties: {
                randomizationUnitId: i,
                assignmentContext: r,
                eventReceivedTime: new Date().toISOString(),
                eventType: "Ms.Web.PageView",
                content: {},
              },
            }),
            appInsights.trackEvent(u));
        }
      } catch (f) {
        setTimeout(function () {
          t(n + 1);
        }, 5e3);
      }
    }
    for (var i = document.querySelectorAll("a[href]"), n = 0; n < i.length; n++)
      i[n].addEventListener("click", function () {
        var n = this.getAttribute("href");
        n.indexOf(window.location.hostname) === -1 && r(n);
      });
    t(0);
  })();
window.lightningjs ||
  (function (n) {
    function i(i, r) {
      return (
        r && (r += (/\?/.test(r) ? "&" : "?") + "lv=1"),
        n[i] ||
          (function () {
            var e = window,
              u = document,
              f = i,
              s = u.location.protocol,
              o = "load",
              h = 0;
            (function () {
              function c() {
                i.P(o);
                i.w = 1;
                n[f]("_load");
              }
              var i, l;
              n[f] = function () {
                function r() {
                  return (r.id = t), n[f].apply(r, arguments);
                }
                var u,
                  t = ++h;
                return (
                  (u = this && this != e ? this.id || 0 : 0),
                  (i.s = i.s || []).push([t, u, arguments]),
                  (r.then = function (n, u, f) {
                    var e = (i.fh[t] = i.fh[t] || []),
                      o = (i.eh[t] = i.eh[t] || []),
                      s = (i.ph[t] = i.ph[t] || []);
                    return n && e.push(n), u && o.push(u), f && s.push(f), r;
                  }),
                  r
                );
              };
              i = n[f]._ = {};
              i.fh = {};
              i.eh = {};
              i.ph = {};
              i.l = r
                ? r.replace(/^\/\//, (s == "https:" ? s : "http:") + "//")
                : r;
              i.p = {
                0: +new Date(),
              };
              i.P = function (n) {
                i.p[n] = new Date() - i.p[0];
              };
              i.w && c();
              e.addEventListener
                ? e.addEventListener(o, c, !1)
                : e.attachEvent("on" + o, c);
              l = function () {
                function p() {
                  return [
                    "<head></head><",
                    s,
                    ' onload="var d=',
                    o,
                    ";d.getElementsByTagName('head')[0].",
                    c,
                    "(d.",
                    r,
                    "('script')).",
                    e,
                    "='",
                    i.l,
                    "'\"></",
                    s,
                    ">",
                  ].join("");
                }
                var s = "body",
                  h = u[s],
                  y;
                if (!h) return setTimeout(l, 100);
                i.P(1);
                var c = "appendChild",
                  r = "createElement",
                  e = "src",
                  a = u[r]("div"),
                  w = a[c](u[r]("div")),
                  n = u[r]("iframe"),
                  o = "document",
                  v;
                a.style.display = "none";
                h.insertBefore(a, h.firstChild).id = t + "-" + f;
                n.frameBorder = "0";
                n.id = t + "-frame-" + f;
                /MSIE[ ]+6/.test(navigator.userAgent) &&
                  (n[e] = "javascript:false");
                n.allowTransparency = "true";
                w[c](n);
                try {
                  n.contentWindow[o].open();
                } catch (b) {
                  i.domain = u.domain;
                  v =
                    "javascript:var d=" +
                    o +
                    ".open();d.domain='" +
                    u.domain +
                    "';";
                  n[e] = v + "void(0);";
                }
                try {
                  y = n.contentWindow[o];
                  y.write(p());
                  y.close();
                } catch (k) {
                  n[e] =
                    v +
                    'd.write("' +
                    p().replace(/"/g, String.fromCharCode(92) + '"') +
                    '");d.close();';
                }
                i.P(2);
              };
              i.l && setTimeout(l, 0);
            })();
          })(),
        (n[i].lv = "1"),
        n[i]
      );
    }
    var t = "lightningjs",
      r = (window[t] = i(t));
    r.require = i;
    r.modules = n;
  })({});
(window.usabilla_live =
  !navigator.userAgent.match(
    /Android|BlackBerry|BB10|iPhone|iPad|iPod|Opera Mini|IEMobile/i
  ) && window.innerWidth > 640
    ? lightningjs.require("usabilla_live", "//w.usabilla.com/71e348d38aa1.js")
    : lightningjs.require("usabilla_live", "//w.usabilla.com/044150ab04dd.js")),
  (function () {
    window.usabilla_live("hide");
    document
      .querySelector(".feedback-btn")
      .addEventListener("click", function () {
        window.usabilla_live("click");
      });
  })();
