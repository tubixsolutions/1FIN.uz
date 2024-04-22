(function (n, t) {
  "use strict";
  typeof module == "object" && typeof module.exports == "object"
    ? (module.exports = n.document
        ? t(n, !0)
        : function (n) {
            if (!n.document)
              throw new Error("jQuery requires a window with a document");
            return t(n);
          })
    : t(n);
})(typeof window != "undefined" ? window : this, function (n, t) {
  "use strict";

  function wr(n, t, i) {
    i = i || f;
    var r,
      e,
      u = i.createElement("script");
    if (((u.text = n), t))
      for (r in ue)
        (e = t[r] || (t.getAttribute && t.getAttribute(r))),
          e && u.setAttribute(r, e);
    i.head.appendChild(u).parentNode.removeChild(u);
  }

  function rt(n) {
    return n == null
      ? n + ""
      : typeof n == "object" || typeof n == "function"
      ? ti[yr.call(n)] || "object"
      : typeof n;
  }

  function ai(n) {
    var t = !!n && "length" in n && n.length,
      i = rt(n);
    return u(n) || it(n)
      ? !1
      : i === "array" ||
          t === 0 ||
          (typeof t == "number" && t > 0 && t - 1 in n);
  }

  function l(n, t) {
    return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase();
  }

  function yi(n, t, r) {
    return u(t)
      ? i.grep(n, function (n, i) {
          return !!t.call(n, i, n) !== r;
        })
      : t.nodeType
      ? i.grep(n, function (n) {
          return (n === t) !== r;
        })
      : typeof t != "string"
      ? i.grep(n, function (n) {
          return ni.call(t, n) > -1 !== r;
        })
      : i.filter(t, n, r);
  }

  function uu(n, t) {
    while ((n = n[t]) && n.nodeType !== 1);
    return n;
  }

  function fe(n) {
    var t = {};
    return (
      i.each(n.match(a) || [], function (n, i) {
        t[i] = !0;
      }),
      t
    );
  }

  function ft(n) {
    return n;
  }

  function ri(n) {
    throw n;
  }

  function fu(n, t, i, r) {
    var f;
    try {
      n && u((f = n.promise))
        ? f.call(n).done(t).fail(i)
        : n && u((f = n.then))
        ? f.call(n, t, i)
        : t.apply(undefined, [n].slice(r));
    } catch (n) {
      i.apply(undefined, [n]);
    }
  }

  function fi() {
    f.removeEventListener("DOMContentLoaded", fi);
    n.removeEventListener("load", fi);
    i.ready();
  }

  function se(n, t) {
    return t.toUpperCase();
  }

  function y(n) {
    return n.replace(ee, "ms-").replace(oe, se);
  }

  function pt() {
    this.expando = i.expando + pt.uid++;
  }

  function le(n) {
    return n === "true"
      ? !0
      : n === "false"
      ? !1
      : n === "null"
      ? null
      : n === +n + ""
      ? +n
      : he.test(n)
      ? JSON.parse(n)
      : n;
  }

  function ou(n, t, i) {
    var r;
    if (i === undefined && n.nodeType === 1)
      if (
        ((r = "data-" + t.replace(ce, "-$&").toLowerCase()),
        (i = n.getAttribute(r)),
        typeof i == "string")
      ) {
        try {
          i = le(i);
        } catch (u) {}
        o.set(n, t, i);
      } else i = undefined;
    return i;
  }

  function hu(n, t, r, u) {
    var s,
      h,
      c = 20,
      l = u
        ? function () {
            return u.cur();
          }
        : function () {
            return i.css(n, t, "");
          },
      o = l(),
      e = (r && r[3]) || (i.cssNumber[t] ? "" : "px"),
      f =
        n.nodeType &&
        (i.cssNumber[t] || (e !== "px" && +o)) &&
        wt.exec(i.css(n, t));
    if (f && f[3] !== e) {
      for (o = o / 2, e = e || f[3], f = +o || 1; c--; )
        i.style(n, t, f + e),
          (1 - h) * (1 - (h = l() / o || 0.5)) <= 0 && (c = 0),
          (f = f / h);
      f = f * 2;
      i.style(n, t, f + e);
      r = r || [];
    }
    return (
      r &&
        ((f = +f || +o || 0),
        (s = r[1] ? f + (r[1] + 1) * r[2] : +r[2]),
        u && ((u.unit = e), (u.start = f), (u.end = s))),
      s
    );
  }

  function ve(n) {
    var r,
      f = n.ownerDocument,
      u = n.nodeName,
      t = pi[u];
    return t
      ? t
      : ((r = f.body.appendChild(f.createElement(u))),
        (t = i.css(r, "display")),
        r.parentNode.removeChild(r),
        t === "none" && (t = "block"),
        (pi[u] = t),
        t);
  }

  function st(n, t) {
    for (var e, u, f = [], i = 0, o = n.length; i < o; i++)
      ((u = n[i]), u.style) &&
        ((e = u.style.display),
        t
          ? (e === "none" &&
              ((f[i] = r.get(u, "display") || null),
              f[i] || (u.style.display = "")),
            u.style.display === "" && bt(u) && (f[i] = ve(u)))
          : e !== "none" && ((f[i] = "none"), r.set(u, "display", e)));
    for (i = 0; i < o; i++) f[i] != null && (n[i].style.display = f[i]);
    return n;
  }

  function s(n, t) {
    var r;
    return ((r =
      typeof n.getElementsByTagName != "undefined"
        ? n.getElementsByTagName(t || "*")
        : typeof n.querySelectorAll != "undefined"
        ? n.querySelectorAll(t || "*")
        : []),
    t === undefined || (t && l(n, t)))
      ? i.merge([n], r)
      : r;
  }

  function wi(n, t) {
    for (var i = 0, u = n.length; i < u; i++)
      r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"));
  }

  function vu(n, t, r, u, f) {
    for (
      var e,
        o,
        p,
        a,
        w,
        v,
        h = t.createDocumentFragment(),
        y = [],
        l = 0,
        b = n.length;
      l < b;
      l++
    )
      if (((e = n[l]), e || e === 0))
        if (rt(e) === "object") i.merge(y, e.nodeType ? [e] : e);
        else if (au.test(e)) {
          for (
            o = o || h.appendChild(t.createElement("div")),
              p = (cu.exec(e) || ["", ""])[1].toLowerCase(),
              a = c[p] || c._default,
              o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2],
              v = a[0];
            v--;

          )
            o = o.lastChild;
          i.merge(y, o.childNodes);
          o = h.firstChild;
          o.textContent = "";
        } else y.push(t.createTextNode(e));
    for (h.textContent = "", l = 0; (e = y[l++]); ) {
      if (u && i.inArray(e, u) > -1) {
        f && f.push(e);
        continue;
      }
      if (((w = ot(e)), (o = s(h.appendChild(e), "script")), w && wi(o), r))
        for (v = 0; (e = o[v++]); ) lu.test(e.type || "") && r.push(e);
    }
    return h;
  }

  function ht() {
    return !0;
  }

  function ct() {
    return !1;
  }

  function ye(n, t) {
    return (n === pe()) == (t === "focus");
  }

  function pe() {
    try {
      return f.activeElement;
    } catch (n) {}
  }

  function ki(n, t, r, u, f, e) {
    var o, s;
    if (typeof t == "object") {
      typeof r != "string" && ((u = u || r), (r = undefined));
      for (s in t) ki(n, s, r, u, t[s], e);
      return n;
    }
    if (
      (u == null && f == null
        ? ((f = r), (u = r = undefined))
        : f == null &&
          (typeof r == "string"
            ? ((f = u), (u = undefined))
            : ((f = u), (u = r), (r = undefined))),
      f === !1)
    )
      f = ct;
    else if (!f) return n;
    return (
      e === 1 &&
        ((o = f),
        (f = function (n) {
          return i().off(n), o.apply(this, arguments);
        }),
        (f.guid = o.guid || (o.guid = i.guid++))),
      n.each(function () {
        i.event.add(this, t, f, u, r);
      })
    );
  }

  function ei(n, t, u) {
    if (!u) {
      r.get(n, t) === undefined && i.event.add(n, t, ht);
      return;
    }
    r.set(n, t, !1);
    i.event.add(n, t, {
      namespace: !1,
      handler: function (n) {
        var o,
          e,
          f = r.get(this, t);
        if (n.isTrigger & 1 && this[t]) {
          if (f.length)
            (i.event.special[t] || {}).delegateType && n.stopPropagation();
          else if (
            ((f = k.call(arguments)),
            r.set(this, t, f),
            (o = u(this, t)),
            this[t](),
            (e = r.get(this, t)),
            f !== e || o ? r.set(this, t, !1) : (e = {}),
            f !== e)
          )
            return (
              n.stopImmediatePropagation(), n.preventDefault(), e && e.value
            );
        } else
          f.length &&
            (r.set(this, t, {
              value: i.event.trigger(
                i.extend(f[0], i.Event.prototype),
                f.slice(1),
                this
              ),
            }),
            n.stopImmediatePropagation());
      },
    });
  }

  function yu(n, t) {
    return l(n, "table") && l(t.nodeType !== 11 ? t : t.firstChild, "tr")
      ? i(n).children("tbody")[0] || n
      : n;
  }

  function de(n) {
    return (n.type = (n.getAttribute("type") !== null) + "/" + n.type), n;
  }

  function ge(n) {
    return (
      (n.type || "").slice(0, 5) === "true/"
        ? (n.type = n.type.slice(5))
        : n.removeAttribute("type"),
      n
    );
  }

  function pu(n, t) {
    var f, s, e, h, c, l, u;
    if (t.nodeType === 1) {
      if (r.hasData(n) && ((h = r.get(n)), (u = h.events), u)) {
        r.remove(t, "handle events");
        for (e in u)
          for (f = 0, s = u[e].length; f < s; f++) i.event.add(t, e, u[e][f]);
      }
      o.hasData(n) && ((c = o.access(n)), (l = i.extend({}, c)), o.set(t, l));
    }
  }

  function no(n, t) {
    var i = t.nodeName.toLowerCase();
    i === "input" && kt.test(n.type)
      ? (t.checked = n.checked)
      : (i === "input" || i === "textarea") &&
        (t.defaultValue = n.defaultValue);
  }

  function lt(n, t, f, o) {
    t = vr(t);
    var a,
      b,
      l,
      v,
      h,
      y,
      c = 0,
      p = n.length,
      d = p - 1,
      w = t[0],
      k = u(w);
    if (k || (p > 1 && typeof w == "string" && !e.checkClone && be.test(w)))
      return n.each(function (i) {
        var r = n.eq(i);
        k && (t[0] = w.call(this, i, r.html()));
        lt(r, t, f, o);
      });
    if (
      p &&
      ((a = vu(t, n[0].ownerDocument, !1, n, o)),
      (b = a.firstChild),
      a.childNodes.length === 1 && (a = b),
      b || o)
    ) {
      for (l = i.map(s(a, "script"), de), v = l.length; c < p; c++)
        (h = a),
          c !== d &&
            ((h = i.clone(h, !0, !0)), v && i.merge(l, s(h, "script"))),
          f.call(n[c], h, c);
      if (v)
        for (y = l[l.length - 1].ownerDocument, i.map(l, ge), c = 0; c < v; c++)
          (h = l[c]),
            lu.test(h.type || "") &&
              !r.access(h, "globalEval") &&
              i.contains(y, h) &&
              (h.src && (h.type || "").toLowerCase() !== "module"
                ? i._evalUrl &&
                  !h.noModule &&
                  i._evalUrl(
                    h.src,
                    {
                      nonce: h.nonce || h.getAttribute("nonce"),
                    },
                    y
                  )
                : wr(h.textContent.replace(ke, ""), h, y));
    }
    return n;
  }

  function wu(n, t, r) {
    for (var u, e = t ? i.filter(t, n) : n, f = 0; (u = e[f]) != null; f++)
      r || u.nodeType !== 1 || i.cleanData(s(u)),
        u.parentNode &&
          (r && ot(u) && wi(s(u, "script")), u.parentNode.removeChild(u));
    return n;
  }

  function dt(n, t, r) {
    var o,
      s,
      h,
      u,
      c = gi.test(t),
      f = n.style;
    return (
      (r = r || oi(n)),
      r &&
        ((u = r.getPropertyValue(t) || r[t]),
        c && (u = u.replace(io, "$1")),
        u !== "" || ot(n) || (u = i.style(n, t)),
        !e.pixelBoxStyles() &&
          di.test(u) &&
          to.test(t) &&
          ((o = f.width),
          (s = f.minWidth),
          (h = f.maxWidth),
          (f.minWidth = f.maxWidth = f.width = u),
          (u = r.width),
          (f.width = o),
          (f.minWidth = s),
          (f.maxWidth = h))),
      u !== undefined ? u + "" : u
    );
  }

  function du(n, t) {
    return {
      get: function () {
        if (n()) {
          delete this.get;
          return;
        }
        return (this.get = t).apply(this, arguments);
      },
    };
  }

  function ro(n) {
    for (var i = n[0].toUpperCase() + n.slice(1), t = gu.length; t--; )
      if (((n = gu[t] + i), n in nf)) return n;
  }

  function nr(n) {
    var t = i.cssProps[n] || tf[n];
    return t ? t : n in nf ? n : (tf[n] = ro(n) || n);
  }

  function uf(n, t, i) {
    var r = wt.exec(t);
    return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t;
  }

  function tr(n, t, r, u, f, e) {
    var o = t === "width" ? 1 : 0,
      h = 0,
      s = 0;
    if (r === (u ? "border" : "content")) return 0;
    for (; o < 4; o += 2)
      r === "margin" && (s += i.css(n, r + b[o], !0, f)),
        u
          ? (r === "content" && (s -= i.css(n, "padding" + b[o], !0, f)),
            r !== "margin" && (s -= i.css(n, "border" + b[o] + "Width", !0, f)))
          : ((s += i.css(n, "padding" + b[o], !0, f)),
            r !== "padding"
              ? (s += i.css(n, "border" + b[o] + "Width", !0, f))
              : (h += i.css(n, "border" + b[o] + "Width", !0, f)));
    return (
      !u &&
        e >= 0 &&
        (s +=
          Math.max(
            0,
            Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - 0.5
            )
          ) || 0),
      s
    );
  }

  function ff(n, t, r) {
    var f = oi(n),
      c = !e.boxSizingReliable() || r,
      o = c && i.css(n, "boxSizing", !1, f) === "border-box",
      s = o,
      u = dt(n, t, f),
      h = "offset" + t[0].toUpperCase() + t.slice(1);
    if (di.test(u)) {
      if (!r) return u;
      u = "auto";
    }
    return (
      ((!e.boxSizingReliable() && o) ||
        (!e.reliableTrDimensions() && l(n, "tr")) ||
        u === "auto" ||
        (!parseFloat(u) && i.css(n, "display", !1, f) === "inline")) &&
        n.getClientRects().length &&
        ((o = i.css(n, "boxSizing", !1, f) === "border-box"),
        (s = h in n),
        s && (u = n[h])),
      (u = parseFloat(u) || 0),
      u + tr(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    );
  }

  function h(n, t, i, r, u) {
    return new h.prototype.init(n, t, i, r, u);
  }

  function ir() {
    si &&
      (f.hidden === !1 && n.requestAnimationFrame
        ? n.requestAnimationFrame(ir)
        : n.setTimeout(ir, i.fx.interval),
      i.fx.tick());
  }

  function sf() {
    return (
      n.setTimeout(function () {
        at = undefined;
      }),
      (at = Date.now())
    );
  }

  function hi(n, t) {
    var r,
      u = 0,
      i = {
        height: n,
      };
    for (t = t ? 1 : 0; u < 4; u += 2 - t)
      (r = b[u]), (i["margin" + r] = i["padding" + r] = n);
    return t && (i.opacity = i.width = n), i;
  }

  function hf(n, t, i) {
    for (
      var u,
        f = (v.tweeners[t] || []).concat(v.tweeners["*"]),
        r = 0,
        e = f.length;
      r < e;
      r++
    )
      if ((u = f[r].call(i, t, n))) return u;
  }

  function eo(n, t, u) {
    var f,
      y,
      w,
      c,
      b,
      s,
      o,
      l,
      k = "width" in t || "height" in t,
      v = this,
      p = {},
      h = n.style,
      a = n.nodeType && bt(n),
      e = r.get(n, "fxshow");
    u.queue ||
      ((c = i._queueHooks(n, "fx")),
      c.unqueued == null &&
        ((c.unqueued = 0),
        (b = c.empty.fire),
        (c.empty.fire = function () {
          c.unqueued || b();
        })),
      c.unqueued++,
      v.always(function () {
        v.always(function () {
          c.unqueued--;
          i.queue(n, "fx").length || c.empty.fire();
        });
      }));
    for (f in t)
      if (((y = t[f]), ef.test(y))) {
        if (
          (delete t[f], (w = w || y === "toggle"), y === (a ? "hide" : "show"))
        )
          if (y === "show" && e && e[f] !== undefined) a = !0;
          else continue;
        p[f] = (e && e[f]) || i.style(n, f);
      }
    if (((s = !i.isEmptyObject(t)), s || !i.isEmptyObject(p))) {
      k &&
        n.nodeType === 1 &&
        ((u.overflow = [h.overflow, h.overflowX, h.overflowY]),
        (o = e && e.display),
        o == null && (o = r.get(n, "display")),
        (l = i.css(n, "display")),
        l === "none" &&
          (o
            ? (l = o)
            : (st([n], !0),
              (o = n.style.display || o),
              (l = i.css(n, "display")),
              st([n]))),
        (l === "inline" || (l === "inline-block" && o != null)) &&
          i.css(n, "float") === "none" &&
          (s ||
            (v.done(function () {
              h.display = o;
            }),
            o == null && ((l = h.display), (o = l === "none" ? "" : l))),
          (h.display = "inline-block")));
      u.overflow &&
        ((h.overflow = "hidden"),
        v.always(function () {
          h.overflow = u.overflow[0];
          h.overflowX = u.overflow[1];
          h.overflowY = u.overflow[2];
        }));
      s = !1;
      for (f in p)
        s ||
          (e
            ? "hidden" in e && (a = e.hidden)
            : (e = r.access(n, "fxshow", {
                display: o,
              })),
          w && (e.hidden = !a),
          a && st([n], !0),
          v.done(function () {
            a || st([n]);
            r.remove(n, "fxshow");
            for (f in p) i.style(n, f, p[f]);
          })),
          (s = hf(a ? e[f] : 0, f, v)),
          f in e || ((e[f] = s.start), a && ((s.end = s.start), (s.start = 0)));
    }
  }

  function oo(n, t) {
    var r, f, e, u, o;
    for (r in n)
      if (
        ((f = y(r)),
        (e = t[f]),
        (u = n[r]),
        Array.isArray(u) && ((e = u[1]), (u = n[r] = u[0])),
        r !== f && ((n[f] = u), delete n[r]),
        (o = i.cssHooks[f]),
        o && "expand" in o)
      ) {
        u = o.expand(u);
        delete n[f];
        for (r in u) r in n || ((n[r] = u[r]), (t[r] = e));
      } else t[f] = e;
  }

  function v(n, t, r) {
    var o,
      s,
      h = 0,
      a = v.prefilters.length,
      e = i.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (s) return !1;
        for (
          var o = at || sf(),
            t = Math.max(0, f.startTime + f.duration - o),
            h = t / f.duration || 0,
            i = 1 - h,
            r = 0,
            u = f.tweens.length;
          r < u;
          r++
        )
          f.tweens[r].run(i);
        return (e.notifyWith(n, [f, i, t]), i < 1 && u)
          ? t
          : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1);
      },
      f = e.promise({
        elem: n,
        props: i.extend({}, t),
        opts: i.extend(
          !0,
          {
            specialEasing: {},
            easing: i.easing._default,
          },
          r
        ),
        originalProperties: t,
        originalOptions: r,
        startTime: at || sf(),
        duration: r.duration,
        tweens: [],
        createTween: function (t, r) {
          var u = i.Tween(
            n,
            f.opts,
            t,
            r,
            f.opts.specialEasing[t] || f.opts.easing
          );
          return f.tweens.push(u), u;
        },
        stop: function (t) {
          var i = 0,
            r = t ? f.tweens.length : 0;
          if (s) return this;
          for (s = !0; i < r; i++) f.tweens[i].run(1);
          return (
            t
              ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t]))
              : e.rejectWith(n, [f, t]),
            this
          );
        },
      }),
      c = f.props;
    for (oo(c, f.opts.specialEasing); h < a; h++)
      if (((o = v.prefilters[h].call(f, n, c, f.opts)), o))
        return (
          u(o.stop) &&
            (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)),
          o
        );
    return (
      i.map(c, hf, f),
      u(f.opts.start) && f.opts.start.call(n, f),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always),
      i.fx.timer(
        i.extend(l, {
          elem: n,
          anim: f,
          queue: f.opts.queue,
        })
      ),
      f
    );
  }

  function nt(n) {
    var t = n.match(a) || [];
    return t.join(" ");
  }

  function tt(n) {
    return (n.getAttribute && n.getAttribute("class")) || "";
  }

  function rr(n) {
    return Array.isArray(n) ? n : typeof n == "string" ? n.match(a) || [] : [];
  }

  function or(n, t, r, u) {
    var f;
    if (Array.isArray(t))
      i.each(t, function (t, i) {
        r || so.test(n)
          ? u(n, i)
          : or(
              n + "[" + (typeof i == "object" && i != null ? t : "") + "]",
              i,
              r,
              u
            );
      });
    else if (r || rt(t) !== "object") u(n, t);
    else for (f in t) or(n + "[" + f + "]", t[f], r, u);
  }

  function kf(n) {
    return function (t, i) {
      typeof t != "string" && ((i = t), (t = "*"));
      var r,
        f = 0,
        e = t.toLowerCase().match(a) || [];
      if (u(i))
        while ((r = e[f++]))
          r[0] === "+"
            ? ((r = r.slice(1) || "*"), (n[r] = n[r] || []).unshift(i))
            : (n[r] = n[r] || []).push(i);
    };
  }

  function df(n, t, r, u) {
    function e(s) {
      var h;
      return (
        (f[s] = !0),
        i.each(n[s] || [], function (n, i) {
          var s = i(t, r, u);
          if (typeof s != "string" || o || f[s]) {
            if (o) return !(h = s);
          } else return t.dataTypes.unshift(s), e(s), !1;
        }),
        h
      );
    }
    var f = {},
      o = n === sr;
    return e(t.dataTypes[0]) || (!f["*"] && e("*"));
  }

  function cr(n, t) {
    var r,
      u,
      f = i.ajaxSettings.flatOptions || {};
    for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
    return u && i.extend(!0, n, u), n;
  }

  function bo(n, t, i) {
    for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*"; )
      r.shift(),
        e === undefined &&
          (e = n.mimeType || t.getResponseHeader("Content-Type"));
    if (e)
      for (u in s)
        if (s[u] && s[u].test(e)) {
          r.unshift(u);
          break;
        }
    if (r[0] in i) f = r[0];
    else {
      for (u in i) {
        if (!r[0] || n.converters[u + " " + r[0]]) {
          f = u;
          break;
        }
        o || (o = u);
      }
      f = f || o;
    }
    if (f) return f !== r[0] && r.unshift(f), i[f];
  }

  function ko(n, t, i, r) {
    var h,
      u,
      f,
      s,
      e,
      o = {},
      c = n.dataTypes.slice();
    if (c[1]) for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
    for (u = c.shift(); u; )
      if (
        (n.responseFields[u] && (i[n.responseFields[u]] = t),
        !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)),
        (e = u),
        (u = c.shift()),
        u)
      )
        if (u === "*") u = e;
        else if (e !== "*" && e !== u) {
          if (((f = o[e + " " + u] || o["* " + u]), !f))
            for (h in o)
              if (
                ((s = h.split(" ")),
                s[1] === u && ((f = o[e + " " + s[0]] || o["* " + s[0]]), f))
              ) {
                f === !0
                  ? (f = o[h])
                  : o[h] !== !0 && ((u = s[0]), c.unshift(s[1]));
                break;
              }
          if (f !== !0)
            if (f && n.throws) t = f(t);
            else
              try {
                t = f(t);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: f ? l : "No conversion from " + e + " to " + u,
                };
              }
        }
    return {
      state: "success",
      data: t,
    };
  }
  var p = [],
    ar = Object.getPrototypeOf,
    k = p.slice,
    vr = p.flat
      ? function (n) {
          return p.flat.call(n);
        }
      : function (n) {
          return p.concat.apply([], n);
        },
    li = p.push,
    ni = p.indexOf,
    ti = {},
    yr = ti.toString,
    ii = ti.hasOwnProperty,
    pr = ii.toString,
    re = pr.call(Object),
    e = {},
    u = function (n) {
      return (
        typeof n == "function" &&
        typeof n.nodeType != "number" &&
        typeof n.item != "function"
      );
    },
    it = function (n) {
      return n != null && n === n.window;
    },
    f = n.document,
    ue = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0,
    },
    br = "3.6.1",
    i = function (n, t) {
      return new i.fn.init(n, t);
    },
    d,
    vi,
    gr,
    nu,
    tu,
    iu,
    ru,
    a,
    eu,
    ui,
    et,
    bt,
    pi,
    c,
    au,
    bi,
    at,
    si,
    ef,
    of,
    cf,
    vt,
    lf,
    af,
    vf,
    ur,
    fr,
    gf,
    yt,
    lr,
    ci,
    ne,
    te,
    ie;
  i.fn = i.prototype = {
    jquery: br,
    constructor: i,
    length: 0,
    toArray: function () {
      return k.call(this);
    },
    get: function (n) {
      return n == null ? k.call(this) : n < 0 ? this[n + this.length] : this[n];
    },
    pushStack: function (n) {
      var t = i.merge(this.constructor(), n);
      return (t.prevObject = this), t;
    },
    each: function (n) {
      return i.each(this, n);
    },
    map: function (n) {
      return this.pushStack(
        i.map(this, function (t, i) {
          return n.call(t, i, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(k.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(
        i.grep(this, function (n, t) {
          return (t + 1) % 2;
        })
      );
    },
    odd: function () {
      return this.pushStack(
        i.grep(this, function (n, t) {
          return t % 2;
        })
      );
    },
    eq: function (n) {
      var i = this.length,
        t = +n + (n < 0 ? i : 0);
      return this.pushStack(t >= 0 && t < i ? [this[t]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: li,
    sort: p.sort,
    splice: p.splice,
  };
  i.extend = i.fn.extend = function () {
    var s,
      f,
      e,
      t,
      o,
      c,
      n = arguments[0] || {},
      r = 1,
      l = arguments.length,
      h = !1;
    for (
      typeof n == "boolean" && ((h = n), (n = arguments[r] || {}), r++),
        typeof n == "object" || u(n) || (n = {}),
        r === l && ((n = this), r--);
      r < l;
      r++
    )
      if ((s = arguments[r]) != null)
        for (f in s)
          ((t = s[f]), f !== "__proto__" && n !== t) &&
            (h && t && (i.isPlainObject(t) || (o = Array.isArray(t)))
              ? ((e = n[f]),
                (c =
                  o && !Array.isArray(e)
                    ? []
                    : o || i.isPlainObject(e)
                    ? e
                    : {}),
                (o = !1),
                (n[f] = i.extend(h, c, t)))
              : t !== undefined && (n[f] = t));
    return n;
  };
  i.extend({
    expando: "jQuery" + (br + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (n) {
      throw new Error(n);
    },
    noop: function () {},
    isPlainObject: function (n) {
      var t, i;
      return !n || yr.call(n) !== "[object Object]"
        ? !1
        : ((t = ar(n)), !t)
        ? !0
        : ((i = ii.call(t, "constructor") && t.constructor),
          typeof i == "function" && pr.call(i) === re);
    },
    isEmptyObject: function (n) {
      for (var t in n) return !1;
      return !0;
    },
    globalEval: function (n, t, i) {
      wr(
        n,
        {
          nonce: t && t.nonce,
        },
        i
      );
    },
    each: function (n, t) {
      var r,
        i = 0;
      if (ai(n)) {
        for (r = n.length; i < r; i++) if (t.call(n[i], i, n[i]) === !1) break;
      } else for (i in n) if (t.call(n[i], i, n[i]) === !1) break;
      return n;
    },
    makeArray: function (n, t) {
      var r = t || [];
      return (
        n != null &&
          (ai(Object(n))
            ? i.merge(r, typeof n == "string" ? [n] : n)
            : li.call(r, n)),
        r
      );
    },
    inArray: function (n, t, i) {
      return t == null ? -1 : ni.call(t, n, i);
    },
    merge: function (n, t) {
      for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
      return (n.length = r), n;
    },
    grep: function (n, t, i) {
      for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++)
        (u = !t(n[r], r)), u !== o && f.push(n[r]);
      return f;
    },
    map: function (n, t, i) {
      var e,
        u,
        r = 0,
        f = [];
      if (ai(n))
        for (e = n.length; r < e; r++)
          (u = t(n[r], r, i)), u != null && f.push(u);
      else for (r in n) (u = t(n[r], r, i)), u != null && f.push(u);
      return vr(f);
    },
    guid: 1,
    support: e,
  });
  typeof Symbol == "function" && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
  i.each(
    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
      " "
    ),
    function (n, t) {
      ti["[object " + t + "]"] = t.toLowerCase();
    }
  );
  d = (function (n) {
    function u(n, t, r, u) {
      var s,
        p,
        c,
        l,
        w,
        y,
        d,
        v = t && t.ownerDocument,
        a = t ? t.nodeType : 9;
      if (
        ((r = r || []),
        typeof n != "string" || !n || (a !== 1 && a !== 9 && a !== 11))
      )
        return r;
      if (!u && (b(t), (t = t || i), h)) {
        if (a !== 11 && (w = ar.exec(n)))
          if ((s = w[1])) {
            if (a === 9)
              if ((c = t.getElementById(s))) {
                if (c.id === s) return r.push(c), r;
              } else return r;
            else if (v && (c = v.getElementById(s)) && et(t, c) && c.id === s)
              return r.push(c), r;
          } else {
            if (w[2]) return k.apply(r, t.getElementsByTagName(n)), r;
            if (
              (s = w[3]) &&
              f.getElementsByClassName &&
              t.getElementsByClassName
            )
              return k.apply(r, t.getElementsByClassName(s)), r;
          }
        if (
          f.qsa &&
          !lt[n + " "] &&
          (!o || !o.test(n)) &&
          (a !== 1 || t.nodeName.toLowerCase() !== "object")
        ) {
          if (((d = n), (v = t), a === 1 && (er.test(n) || yi.test(n)))) {
            for (
              v = (ti.test(n) && ri(t.parentNode)) || t,
                (v === t && f.scope) ||
                  ((l = t.getAttribute("id"))
                    ? (l = l.replace(pi, wi))
                    : t.setAttribute("id", (l = e))),
                y = ft(n),
                p = y.length;
              p--;

            )
              y[p] = (l ? "#" + l : ":scope") + " " + pt(y[p]);
            d = y.join(",");
          }
          try {
            return k.apply(r, v.querySelectorAll(d)), r;
          } catch (g) {
            lt(n, !0);
          } finally {
            l === e && t.removeAttribute("id");
          }
        }
      }
      return si(n.replace(at, "$1"), t, r, u);
    }

    function yt() {
      function n(r, u) {
        return (
          i.push(r + " ") > t.cacheLength && delete n[i.shift()],
          (n[r + " "] = u)
        );
      }
      var i = [];
      return n;
    }

    function l(n) {
      return (n[e] = !0), n;
    }

    function a(n) {
      var t = i.createElement("fieldset");
      try {
        return !!n(t);
      } catch (r) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
        t = null;
      }
    }

    function ii(n, i) {
      for (var r = n.split("|"), u = r.length; u--; ) t.attrHandle[r[u]] = i;
    }

    function ki(n, t) {
      var i = t && n,
        r =
          i &&
          n.nodeType === 1 &&
          t.nodeType === 1 &&
          n.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (i) while ((i = i.nextSibling)) if (i === t) return -1;
      return n ? 1 : -1;
    }

    function yr(n) {
      return function (t) {
        var i = t.nodeName.toLowerCase();
        return i === "input" && t.type === n;
      };
    }

    function pr(n) {
      return function (t) {
        var i = t.nodeName.toLowerCase();
        return (i === "input" || i === "button") && t.type === n;
      };
    }

    function di(n) {
      return function (t) {
        return "form" in t
          ? t.parentNode && t.disabled === !1
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === n
                : t.disabled === n
              : t.isDisabled === n || (t.isDisabled !== !n && vr(t) === n)
            : t.disabled === n
          : "label" in t
          ? t.disabled === n
          : !1;
      };
    }

    function it(n) {
      return l(function (t) {
        return (
          (t = +t),
          l(function (i, r) {
            for (var u, f = n([], i.length, t), e = f.length; e--; )
              i[(u = f[e])] && (i[u] = !(r[u] = i[u]));
          })
        );
      });
    }

    function ri(n) {
      return n && typeof n.getElementsByTagName != "undefined" && n;
    }

    function gi() {}

    function pt(n) {
      for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
      return i;
    }

    function wt(n, t, i) {
      var r = t.dir,
        u = t.next,
        f = u || r,
        o = i && f === "parentNode",
        s = nr++;
      return t.first
        ? function (t, i, u) {
            while ((t = t[r])) if (t.nodeType === 1 || o) return n(t, i, u);
            return !1;
          }
        : function (t, i, h) {
            var c,
              l,
              a,
              y = [v, s];
            if (h) {
              while ((t = t[r]))
                if ((t.nodeType === 1 || o) && n(t, i, h)) return !0;
            } else
              while ((t = t[r]))
                if (t.nodeType === 1 || o)
                  if (
                    ((a = t[e] || (t[e] = {})),
                    (l = a[t.uniqueID] || (a[t.uniqueID] = {})),
                    u && u === t.nodeName.toLowerCase())
                  )
                    t = t[r] || t;
                  else {
                    if ((c = l[f]) && c[0] === v && c[1] === s)
                      return (y[2] = c[2]);
                    if (((l[f] = y), (y[2] = n(t, i, h)))) return !0;
                  }
            return !1;
          };
    }

    function ui(n) {
      return n.length > 1
        ? function (t, i, r) {
            for (var u = n.length; u--; ) if (!n[u](t, i, r)) return !1;
            return !0;
          }
        : n[0];
    }

    function wr(n, t, i) {
      for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
      return i;
    }

    function bt(n, t, i, r, u) {
      for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)
        (e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
      return o;
    }

    function fi(n, t, i, r, u, f) {
      return (
        r && !r[e] && (r = fi(r)),
        u && !u[e] && (u = fi(u, f)),
        l(function (f, e, o, s) {
          var l,
            c,
            a,
            p = [],
            y = [],
            w = e.length,
            b = f || wr(t || "*", o.nodeType ? [o] : o, []),
            v = n && (f || !t) ? bt(b, p, n, o, s) : b,
            h = i ? (u || (f ? n : w || r) ? [] : e) : v;
          if ((i && i(v, h, o, s), r))
            for (l = bt(h, y), r(l, [], o, s), c = l.length; c--; )
              (a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
          if (f) {
            if (u || n) {
              if (u) {
                for (l = [], c = h.length; c--; )
                  (a = h[c]) && l.push((v[c] = a));
                u(null, (h = []), l, s);
              }
              for (c = h.length; c--; )
                (a = h[c]) &&
                  (l = u ? nt(f, a) : p[c]) > -1 &&
                  (f[l] = !(e[l] = a));
            }
          } else (h = bt(h === e ? h.splice(w, h.length) : h)), u ? u(null, e, h, s) : k.apply(e, h);
        })
      );
    }

    function ei(n) {
      for (
        var o,
          u,
          r,
          s = n.length,
          h = t.relative[n[0].type],
          c = h || t.relative[" "],
          i = h ? 1 : 0,
          l = wt(
            function (n) {
              return n === o;
            },
            c,
            !0
          ),
          a = wt(
            function (n) {
              return nt(o, n) > -1;
            },
            c,
            !0
          ),
          f = [
            function (n, t, i) {
              var r =
                (!h && (i || t !== ht)) ||
                ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
              return (o = null), r;
            },
          ];
        i < s;
        i++
      )
        if ((u = t.relative[n[i].type])) f = [wt(ui(f), u)];
        else {
          if (((u = t.filter[n[i].type].apply(null, n[i].matches)), u[e])) {
            for (r = ++i; r < s; r++) if (t.relative[n[r].type]) break;
            return fi(
              i > 1 && ui(f),
              i > 1 &&
                pt(
                  n.slice(0, i - 1).concat({
                    value: n[i - 2].type === " " ? "*" : "",
                  })
                ).replace(at, "$1"),
              u,
              i < r && ei(n.slice(i, r)),
              r < s && ei((n = n.slice(r))),
              r < s && pt(n)
            );
          }
          f.push(u);
        }
      return ui(f);
    }

    function br(n, r) {
      var f = r.length > 0,
        e = n.length > 0,
        o = function (o, s, c, l, a) {
          var y,
            nt,
            d,
            g = 0,
            p = "0",
            tt = o && [],
            w = [],
            it = ht,
            rt = o || (e && t.find.TAG("*", a)),
            ut = (v += it == null ? 1 : Math.random() || 0.1),
            ft = rt.length;
          for (
            a && (ht = s == i || s || a);
            p !== ft && (y = rt[p]) != null;
            p++
          ) {
            if (e && y) {
              for (
                nt = 0, s || y.ownerDocument == i || (b(y), (c = !h));
                (d = n[nt++]);

              )
                if (d(y, s || i, c)) {
                  l.push(y);
                  break;
                }
              a && (v = ut);
            }
            f && ((y = !d && y) && g--, o && tt.push(y));
          }
          if (((g += p), f && p !== g)) {
            for (nt = 0; (d = r[nt++]); ) d(tt, w, s, c);
            if (o) {
              if (g > 0) while (p--) tt[p] || w[p] || (w[p] = ir.call(l));
              w = bt(w);
            }
            k.apply(l, w);
            a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l);
          }
          return a && ((v = ut), (ht = it)), tt;
        };
      return f ? l(o) : o;
    }
    var rt,
      f,
      t,
      st,
      oi,
      ft,
      kt,
      si,
      ht,
      w,
      ut,
      b,
      i,
      s,
      h,
      o,
      d,
      ct,
      et,
      e = "sizzle" + 1 * new Date(),
      c = n.document,
      v = 0,
      nr = 0,
      hi = yt(),
      ci = yt(),
      li = yt(),
      lt = yt(),
      dt = function (n, t) {
        return n === t && (ut = !0), 0;
      },
      tr = {}.hasOwnProperty,
      g = [],
      ir = g.pop,
      rr = g.push,
      k = g.push,
      ai = g.slice,
      nt = function (n, t) {
        for (var i = 0, r = n.length; i < r; i++) if (n[i] === t) return i;
        return -1;
      },
      gt =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      r = "[\\x20\\t\\r\\n\\f]",
      tt =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        r +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      vi =
        "\\[" +
        r +
        "*(" +
        tt +
        ")(?:" +
        r +
        "*([*^$|!~]?=)" +
        r +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        tt +
        "))|)" +
        r +
        "*\\]",
      ni =
        ":(" +
        tt +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        vi +
        ")*)|.*)\\)|)",
      ur = new RegExp(r + "+", "g"),
      at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
      fr = new RegExp("^" + r + "*," + r + "*"),
      yi = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
      er = new RegExp(r + "|>"),
      or = new RegExp(ni),
      sr = new RegExp("^" + tt + "$"),
      vt = {
        ID: new RegExp("^#(" + tt + ")"),
        CLASS: new RegExp("^\\.(" + tt + ")"),
        TAG: new RegExp("^(" + tt + "|[*])"),
        ATTR: new RegExp("^" + vi),
        PSEUDO: new RegExp("^" + ni),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            r +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            r +
            "*(?:([+-]|)" +
            r +
            "*(\\d+)|))" +
            r +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + gt + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            r +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            r +
            "*((?:-\\d)?\\d*)" +
            r +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      hr = /HTML$/i,
      cr = /^(?:input|select|textarea|button)$/i,
      lr = /^h\d$/i,
      ot = /^[^{]+\{\s*\[native \w/,
      ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ti = /[+~]/,
      y = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"),
      p = function (n, t) {
        var i = "0x" + n.slice(1) - 65536;
        return t
          ? t
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (i & 1023) | 56320);
      },
      pi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      wi = function (n, t) {
        return t
          ? n === "\0"
            ? "�"
            : n.slice(0, -1) +
              "\\" +
              n.charCodeAt(n.length - 1).toString(16) +
              " "
          : "\\" + n;
      },
      bi = function () {
        b();
      },
      vr = wt(
        function (n) {
          return n.disabled === !0 && n.nodeName.toLowerCase() === "fieldset";
        },
        {
          dir: "parentNode",
          next: "legend",
        }
      );
    try {
      k.apply((g = ai.call(c.childNodes)), c.childNodes);
      g[c.childNodes.length].nodeType;
    } catch (kr) {
      k = {
        apply: g.length
          ? function (n, t) {
              rr.apply(n, ai.call(t));
            }
          : function (n, t) {
              for (var i = n.length, r = 0; (n[i++] = t[r++]); );
              n.length = i - 1;
            },
      };
    }
    f = u.support = {};
    oi = u.isXML = function (n) {
      var i = n && n.namespaceURI,
        t = n && (n.ownerDocument || n).documentElement;
      return !hr.test(i || (t && t.nodeName) || "HTML");
    };
    b = u.setDocument = function (n) {
      var v,
        u,
        l = n ? n.ownerDocument || n : c;
      return l == i || l.nodeType !== 9 || !l.documentElement
        ? i
        : ((i = l),
          (s = i.documentElement),
          (h = !oi(i)),
          c != i &&
            (u = i.defaultView) &&
            u.top !== u &&
            (u.addEventListener
              ? u.addEventListener("unload", bi, !1)
              : u.attachEvent && u.attachEvent("onunload", bi)),
          (f.scope = a(function (n) {
            return (
              s.appendChild(n).appendChild(i.createElement("div")),
              typeof n.querySelectorAll != "undefined" &&
                !n.querySelectorAll(":scope fieldset div").length
            );
          })),
          (f.attributes = a(function (n) {
            return (n.className = "i"), !n.getAttribute("className");
          })),
          (f.getElementsByTagName = a(function (n) {
            return (
              n.appendChild(i.createComment("")),
              !n.getElementsByTagName("*").length
            );
          })),
          (f.getElementsByClassName = ot.test(i.getElementsByClassName)),
          (f.getById = a(function (n) {
            return (
              (s.appendChild(n).id = e),
              !i.getElementsByName || !i.getElementsByName(e).length
            );
          })),
          f.getById
            ? ((t.filter.ID = function (n) {
                var t = n.replace(y, p);
                return function (n) {
                  return n.getAttribute("id") === t;
                };
              }),
              (t.find.ID = function (n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                  var i = t.getElementById(n);
                  return i ? [i] : [];
                }
              }))
            : ((t.filter.ID = function (n) {
                var t = n.replace(y, p);
                return function (n) {
                  var i =
                    typeof n.getAttributeNode != "undefined" &&
                    n.getAttributeNode("id");
                  return i && i.value === t;
                };
              }),
              (t.find.ID = function (n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                  var i,
                    u,
                    f,
                    r = t.getElementById(n);
                  if (r) {
                    if (((i = r.getAttributeNode("id")), i && i.value === n))
                      return [r];
                    for (f = t.getElementsByName(n), u = 0; (r = f[u++]); )
                      if (((i = r.getAttributeNode("id")), i && i.value === n))
                        return [r];
                  }
                  return [];
                }
              })),
          (t.find.TAG = f.getElementsByTagName
            ? function (n, t) {
                return typeof t.getElementsByTagName != "undefined"
                  ? t.getElementsByTagName(n)
                  : f.qsa
                  ? t.querySelectorAll(n)
                  : void 0;
              }
            : function (n, t) {
                var i,
                  r = [],
                  f = 0,
                  u = t.getElementsByTagName(n);
                if (n === "*") {
                  while ((i = u[f++])) i.nodeType === 1 && r.push(i);
                  return r;
                }
                return u;
              }),
          (t.find.CLASS =
            f.getElementsByClassName &&
            function (n, t) {
              if (typeof t.getElementsByClassName != "undefined" && h)
                return t.getElementsByClassName(n);
            }),
          (d = []),
          (o = []),
          (f.qsa = ot.test(i.querySelectorAll)) &&
            (a(function (n) {
              var t;
              s.appendChild(n).innerHTML =
                "<a id='" +
                e +
                "'></a><select id='" +
                e +
                "-\r\\' msallowcapture=''><option selected=''></option></select>";
              n.querySelectorAll("[msallowcapture^='']").length &&
                o.push("[*^$]=" + r + "*(?:''|\"\")");
              n.querySelectorAll("[selected]").length ||
                o.push("\\[" + r + "*(?:value|" + gt + ")");
              n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
              t = i.createElement("input");
              t.setAttribute("name", "");
              n.appendChild(t);
              n.querySelectorAll("[name='']").length ||
                o.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")");
              n.querySelectorAll(":checked").length || o.push(":checked");
              n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]");
              n.querySelectorAll("\\\f");
              o.push("[\\r\\n\\f]");
            }),
            a(function (n) {
              n.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = i.createElement("input");
              t.setAttribute("type", "hidden");
              n.appendChild(t).setAttribute("name", "D");
              n.querySelectorAll("[name=d]").length &&
                o.push("name" + r + "*[*^$|!~]?=");
              n.querySelectorAll(":enabled").length !== 2 &&
                o.push(":enabled", ":disabled");
              s.appendChild(n).disabled = !0;
              n.querySelectorAll(":disabled").length !== 2 &&
                o.push(":enabled", ":disabled");
              n.querySelectorAll("*,:x");
              o.push(",.*:");
            })),
          (f.matchesSelector = ot.test(
            (ct =
              s.matches ||
              s.webkitMatchesSelector ||
              s.mozMatchesSelector ||
              s.oMatchesSelector ||
              s.msMatchesSelector)
          )) &&
            a(function (n) {
              f.disconnectedMatch = ct.call(n, "*");
              ct.call(n, "[s!='']:x");
              d.push("!=", ni);
            }),
          (o = o.length && new RegExp(o.join("|"))),
          (d = d.length && new RegExp(d.join("|"))),
          (v = ot.test(s.compareDocumentPosition)),
          (et =
            v || ot.test(s.contains)
              ? function (n, t) {
                  var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                  return (
                    n === i ||
                    !!(
                      i &&
                      i.nodeType === 1 &&
                      (r.contains
                        ? r.contains(i)
                        : n.compareDocumentPosition &&
                          n.compareDocumentPosition(i) & 16)
                    )
                  );
                }
              : function (n, t) {
                  if (t) while ((t = t.parentNode)) if (t === n) return !0;
                  return !1;
                }),
          (dt = v
            ? function (n, t) {
                if (n === t) return (ut = !0), 0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r
                  ? r
                  : ((r =
                      (n.ownerDocument || n) == (t.ownerDocument || t)
                        ? n.compareDocumentPosition(t)
                        : 1),
                    r & 1 ||
                      (!f.sortDetached && t.compareDocumentPosition(n) === r))
                  ? n == i || (n.ownerDocument == c && et(c, n))
                    ? -1
                    : t == i || (t.ownerDocument == c && et(c, t))
                    ? 1
                    : w
                    ? nt(w, n) - nt(w, t)
                    : 0
                  : r & 4
                  ? -1
                  : 1;
              }
            : function (n, t) {
                if (n === t) return (ut = !0), 0;
                var r,
                  u = 0,
                  o = n.parentNode,
                  s = t.parentNode,
                  f = [n],
                  e = [t];
                if (o && s) {
                  if (o === s) return ki(n, t);
                } else
                  return n == i
                    ? -1
                    : t == i
                    ? 1
                    : o
                    ? -1
                    : s
                    ? 1
                    : w
                    ? nt(w, n) - nt(w, t)
                    : 0;
                for (r = n; (r = r.parentNode); ) f.unshift(r);
                for (r = t; (r = r.parentNode); ) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? ki(f[u], e[u]) : f[u] == c ? -1 : e[u] == c ? 1 : 0;
              }),
          i);
    };
    u.matches = function (n, t) {
      return u(n, null, null, t);
    };
    u.matchesSelector = function (n, t) {
      if (
        (b(n),
        f.matchesSelector &&
          h &&
          !lt[t + " "] &&
          (!d || !d.test(t)) &&
          (!o || !o.test(t)))
      )
        try {
          var r = ct.call(n, t);
          if (
            r ||
            f.disconnectedMatch ||
            (n.document && n.document.nodeType !== 11)
          )
            return r;
        } catch (e) {
          lt(t, !0);
        }
      return u(t, i, null, [n]).length > 0;
    };
    u.contains = function (n, t) {
      return (n.ownerDocument || n) != i && b(n), et(n, t);
    };
    u.attr = function (n, r) {
      (n.ownerDocument || n) != i && b(n);
      var e = t.attrHandle[r.toLowerCase()],
        u =
          e && tr.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : undefined;
      return u !== undefined
        ? u
        : f.attributes || !h
        ? n.getAttribute(r)
        : (u = n.getAttributeNode(r)) && u.specified
        ? u.value
        : null;
    };
    u.escape = function (n) {
      return (n + "").replace(pi, wi);
    };
    u.error = function (n) {
      throw new Error("Syntax error, unrecognized expression: " + n);
    };
    u.uniqueSort = function (n) {
      var r,
        u = [],
        t = 0,
        i = 0;
      if (
        ((ut = !f.detectDuplicates),
        (w = !f.sortStable && n.slice(0)),
        n.sort(dt),
        ut)
      ) {
        while ((r = n[i++])) r === n[i] && (t = u.push(i));
        while (t--) n.splice(u[t], 1);
      }
      return (w = null), n;
    };
    st = u.getText = function (n) {
      var r,
        i = "",
        u = 0,
        t = n.nodeType;
      if (t) {
        if (t === 1 || t === 9 || t === 11) {
          if (typeof n.textContent == "string") return n.textContent;
          for (n = n.firstChild; n; n = n.nextSibling) i += st(n);
        } else if (t === 3 || t === 4) return n.nodeValue;
      } else while ((r = n[u++])) i += st(r);
      return i;
    };
    t = u.selectors = {
      cacheLength: 50,
      createPseudo: l,
      match: vt,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0,
        },
        " ": {
          dir: "parentNode",
        },
        "+": {
          dir: "previousSibling",
          first: !0,
        },
        "~": {
          dir: "previousSibling",
        },
      },
      preFilter: {
        ATTR: function (n) {
          return (
            (n[1] = n[1].replace(y, p)),
            (n[3] = (n[3] || n[4] || n[5] || "").replace(y, p)),
            n[2] === "~=" && (n[3] = " " + n[3] + " "),
            n.slice(0, 4)
          );
        },
        CHILD: function (n) {
          return (
            (n[1] = n[1].toLowerCase()),
            n[1].slice(0, 3) === "nth"
              ? (n[3] || u.error(n[0]),
                (n[4] = +(n[4]
                  ? n[5] + (n[6] || 1)
                  : 2 * (n[3] === "even" || n[3] === "odd"))),
                (n[5] = +(n[7] + n[8] || n[3] === "odd")))
              : n[3] && u.error(n[0]),
            n
          );
        },
        PSEUDO: function (n) {
          var i,
            t = !n[6] && n[2];
          return vt.CHILD.test(n[0])
            ? null
            : (n[3]
                ? (n[2] = n[4] || n[5] || "")
                : t &&
                  or.test(t) &&
                  (i = ft(t, !0)) &&
                  (i = t.indexOf(")", t.length - i) - t.length) &&
                  ((n[0] = n[0].slice(0, i)), (n[2] = t.slice(0, i))),
              n.slice(0, 3));
        },
      },
      filter: {
        TAG: function (n) {
          var t = n.replace(y, p).toLowerCase();
          return n === "*"
            ? function () {
                return !0;
              }
            : function (n) {
                return n.nodeName && n.nodeName.toLowerCase() === t;
              };
        },
        CLASS: function (n) {
          var t = hi[n + " "];
          return (
            t ||
            ((t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) &&
              hi(n, function (n) {
                return t.test(
                  (typeof n.className == "string" && n.className) ||
                    (typeof n.getAttribute != "undefined" &&
                      n.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function (n, t, i) {
          return function (r) {
            var f = u.attr(r, n);
            return f == null
              ? t === "!="
              : t
              ? ((f += ""),
                t === "="
                  ? f === i
                  : t === "!="
                  ? f !== i
                  : t === "^="
                  ? i && f.indexOf(i) === 0
                  : t === "*="
                  ? i && f.indexOf(i) > -1
                  : t === "$="
                  ? i && f.slice(-i.length) === i
                  : t === "~="
                  ? (" " + f.replace(ur, " ") + " ").indexOf(i) > -1
                  : t === "|="
                  ? f === i || f.slice(0, i.length + 1) === i + "-"
                  : !1)
              : !0;
          };
        },
        CHILD: function (n, t, i, r, u) {
          var s = n.slice(0, 3) !== "nth",
            o = n.slice(-4) !== "last",
            f = t === "of-type";
          return r === 1 && u === 0
            ? function (n) {
                return !!n.parentNode;
              }
            : function (t, i, h) {
                var p,
                  w,
                  y,
                  c,
                  a,
                  b,
                  k = s !== o ? "nextSibling" : "previousSibling",
                  d = t.parentNode,
                  nt = f && t.nodeName.toLowerCase(),
                  g = !h && !f,
                  l = !1;
                if (d) {
                  if (s) {
                    while (k) {
                      for (c = t; (c = c[k]); )
                        if (
                          f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1
                        )
                          return !1;
                      b = k = n === "only" && !b && "nextSibling";
                    }
                    return !0;
                  }
                  if (((b = [o ? d.firstChild : d.lastChild]), o && g)) {
                    for (
                      c = d,
                        y = c[e] || (c[e] = {}),
                        w = y[c.uniqueID] || (y[c.uniqueID] = {}),
                        p = w[n] || [],
                        a = p[0] === v && p[1],
                        l = a && p[2],
                        c = a && d.childNodes[a];
                      (c = (++a && c && c[k]) || (l = a = 0) || b.pop());

                    )
                      if (c.nodeType === 1 && ++l && c === t) {
                        w[n] = [v, a, l];
                        break;
                      }
                  } else if (
                    (g &&
                      ((c = t),
                      (y = c[e] || (c[e] = {})),
                      (w = y[c.uniqueID] || (y[c.uniqueID] = {})),
                      (p = w[n] || []),
                      (a = p[0] === v && p[1]),
                      (l = a)),
                    l === !1)
                  )
                    while ((c = (++a && c && c[k]) || (l = a = 0) || b.pop()))
                      if (
                        (f
                          ? c.nodeName.toLowerCase() === nt
                          : c.nodeType === 1) &&
                        ++l &&
                        (g &&
                          ((y = c[e] || (c[e] = {})),
                          (w = y[c.uniqueID] || (y[c.uniqueID] = {})),
                          (w[n] = [v, l])),
                        c === t)
                      )
                        break;
                  return (l -= u), l === r || (l % r == 0 && l / r >= 0);
                }
              };
        },
        PSEUDO: function (n, i) {
          var f,
            r =
              t.pseudos[n] ||
              t.setFilters[n.toLowerCase()] ||
              u.error("unsupported pseudo: " + n);
          return r[e]
            ? r(i)
            : r.length > 1
            ? ((f = [n, n, "", i]),
              t.setFilters.hasOwnProperty(n.toLowerCase())
                ? l(function (n, t) {
                    for (var u, f = r(n, i), e = f.length; e--; )
                      (u = nt(n, f[e])), (n[u] = !(t[u] = f[e]));
                  })
                : function (n) {
                    return r(n, 0, f);
                  })
            : r;
        },
      },
      pseudos: {
        not: l(function (n) {
          var t = [],
            r = [],
            i = kt(n.replace(at, "$1"));
          return i[e]
            ? l(function (n, t, r, u) {
                for (var e, o = i(n, null, u, []), f = n.length; f--; )
                  (e = o[f]) && (n[f] = !(t[f] = e));
              })
            : function (n, u, f) {
                return (t[0] = n), i(t, null, f, r), (t[0] = null), !r.pop();
              };
        }),
        has: l(function (n) {
          return function (t) {
            return u(n, t).length > 0;
          };
        }),
        contains: l(function (n) {
          return (
            (n = n.replace(y, p)),
            function (t) {
              return (t.textContent || st(t)).indexOf(n) > -1;
            }
          );
        }),
        lang: l(function (n) {
          return (
            sr.test(n || "") || u.error("unsupported lang: " + n),
            (n = n.replace(y, p).toLowerCase()),
            function (t) {
              var i;
              do
                if (
                  (i = h
                    ? t.lang
                    : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                )
                  return (
                    (i = i.toLowerCase()), i === n || i.indexOf(n + "-") === 0
                  );
              while ((t = t.parentNode) && t.nodeType === 1);
              return !1;
            }
          );
        }),
        target: function (t) {
          var i = n.location && n.location.hash;
          return i && i.slice(1) === t.id;
        },
        root: function (n) {
          return n === s;
        },
        focus: function (n) {
          return (
            n === i.activeElement &&
            (!i.hasFocus || i.hasFocus()) &&
            !!(n.type || n.href || ~n.tabIndex)
          );
        },
        enabled: di(!1),
        disabled: di(!0),
        checked: function (n) {
          var t = n.nodeName.toLowerCase();
          return (
            (t === "input" && !!n.checked) || (t === "option" && !!n.selected)
          );
        },
        selected: function (n) {
          return n.parentNode && n.parentNode.selectedIndex, n.selected === !0;
        },
        empty: function (n) {
          for (n = n.firstChild; n; n = n.nextSibling)
            if (n.nodeType < 6) return !1;
          return !0;
        },
        parent: function (n) {
          return !t.pseudos.empty(n);
        },
        header: function (n) {
          return lr.test(n.nodeName);
        },
        input: function (n) {
          return cr.test(n.nodeName);
        },
        button: function (n) {
          var t = n.nodeName.toLowerCase();
          return (t === "input" && n.type === "button") || t === "button";
        },
        text: function (n) {
          var t;
          return (
            n.nodeName.toLowerCase() === "input" &&
            n.type === "text" &&
            ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
          );
        },
        first: it(function () {
          return [0];
        }),
        last: it(function (n, t) {
          return [t - 1];
        }),
        eq: it(function (n, t, i) {
          return [i < 0 ? i + t : i];
        }),
        even: it(function (n, t) {
          for (var i = 0; i < t; i += 2) n.push(i);
          return n;
        }),
        odd: it(function (n, t) {
          for (var i = 1; i < t; i += 2) n.push(i);
          return n;
        }),
        lt: it(function (n, t, i) {
          for (var r = i < 0 ? i + t : i > t ? t : i; --r >= 0; ) n.push(r);
          return n;
        }),
        gt: it(function (n, t, i) {
          for (var r = i < 0 ? i + t : i; ++r < t; ) n.push(r);
          return n;
        }),
      },
    };
    t.pseudos.nth = t.pseudos.eq;
    for (rt in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    })
      t.pseudos[rt] = yr(rt);
    for (rt in {
      submit: !0,
      reset: !0,
    })
      t.pseudos[rt] = pr(rt);
    return (
      (gi.prototype = t.filters = t.pseudos),
      (t.setFilters = new gi()),
      (ft = u.tokenize =
        function (n, i) {
          var e,
            f,
            s,
            o,
            r,
            h,
            c,
            l = ci[n + " "];
          if (l) return i ? 0 : l.slice(0);
          for (r = n, h = [], c = t.preFilter; r; ) {
            (!e || (f = fr.exec(r))) &&
              (f && (r = r.slice(f[0].length) || r), h.push((s = [])));
            e = !1;
            (f = yi.exec(r)) &&
              ((e = f.shift()),
              s.push({
                value: e,
                type: f[0].replace(at, " "),
              }),
              (r = r.slice(e.length)));
            for (o in t.filter)
              (f = vt[o].exec(r)) &&
                (!c[o] || (f = c[o](f))) &&
                ((e = f.shift()),
                s.push({
                  value: e,
                  type: o,
                  matches: f,
                }),
                (r = r.slice(e.length)));
            if (!e) break;
          }
          return i ? r.length : r ? u.error(n) : ci(n, h).slice(0);
        }),
      (kt = u.compile =
        function (n, t) {
          var r,
            u = [],
            f = [],
            i = li[n + " "];
          if (!i) {
            for (t || (t = ft(n)), r = t.length; r--; )
              (i = ei(t[r])), i[e] ? u.push(i) : f.push(i);
            i = li(n, br(f, u));
            i.selector = n;
          }
          return i;
        }),
      (si = u.select =
        function (n, i, r, u) {
          var o,
            f,
            e,
            l,
            a,
            c = typeof n == "function" && n,
            s = !u && ft((n = c.selector || n));
          if (((r = r || []), s.length === 1)) {
            if (
              ((f = s[0] = s[0].slice(0)),
              f.length > 2 &&
                (e = f[0]).type === "ID" &&
                i.nodeType === 9 &&
                h &&
                t.relative[f[1].type])
            ) {
              if (
                ((i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0]), i)
              )
                c && (i = i.parentNode);
              else return r;
              n = n.slice(f.shift().value.length);
            }
            for (o = vt.needsContext.test(n) ? 0 : f.length; o--; ) {
              if (((e = f[o]), t.relative[(l = e.type)])) break;
              if (
                (a = t.find[l]) &&
                (u = a(
                  e.matches[0].replace(y, p),
                  (ti.test(f[0].type) && ri(i.parentNode)) || i
                ))
              ) {
                if ((f.splice(o, 1), (n = u.length && pt(f)), !n))
                  return k.apply(r, u), r;
                break;
              }
            }
          }
          return (
            (c || kt(n, s))(
              u,
              i,
              !h,
              r,
              !i || (ti.test(n) && ri(i.parentNode)) || i
            ),
            r
          );
        }),
      (f.sortStable = e.split("").sort(dt).join("") === e),
      (f.detectDuplicates = !!ut),
      b(),
      (f.sortDetached = a(function (n) {
        return n.compareDocumentPosition(i.createElement("fieldset")) & 1;
      })),
      a(function (n) {
        return (
          (n.innerHTML = "<a href='#'></a>"),
          n.firstChild.getAttribute("href") === "#"
        );
      }) ||
        ii("type|href|height|width", function (n, t, i) {
          if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2);
        }),
      (f.attributes &&
        a(function (n) {
          return (
            (n.innerHTML = "<input/>"),
            n.firstChild.setAttribute("value", ""),
            n.firstChild.getAttribute("value") === ""
          );
        })) ||
        ii("value", function (n, t, i) {
          if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue;
        }),
      a(function (n) {
        return n.getAttribute("disabled") == null;
      }) ||
        ii(gt, function (n, t, i) {
          var r;
          if (!i)
            return n[t] === !0
              ? t.toLowerCase()
              : (r = n.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      u
    );
  })(n);
  i.find = d;
  i.expr = d.selectors;
  i.expr[":"] = i.expr.pseudos;
  i.uniqueSort = i.unique = d.uniqueSort;
  i.text = d.getText;
  i.isXMLDoc = d.isXML;
  i.contains = d.contains;
  i.escapeSelector = d.escape;
  var ut = function (n, t, r) {
      for (var u = [], f = r !== undefined; (n = n[t]) && n.nodeType !== 9; )
        if (n.nodeType === 1) {
          if (f && i(n).is(r)) break;
          u.push(n);
        }
      return u;
    },
    kr = function (n, t) {
      for (var i = []; n; n = n.nextSibling)
        n.nodeType === 1 && n !== t && i.push(n);
      return i;
    },
    dr = i.expr.match.needsContext;
  vi = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  i.filter = function (n, t, r) {
    var u = t[0];
    return (r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1)
      ? i.find.matchesSelector(u, n)
        ? [u]
        : []
      : i.find.matches(
          n,
          i.grep(t, function (n) {
            return n.nodeType === 1;
          })
        );
  };
  i.fn.extend({
    find: function (n) {
      var t,
        r,
        u = this.length,
        f = this;
      if (typeof n != "string")
        return this.pushStack(
          i(n).filter(function () {
            for (t = 0; t < u; t++) if (i.contains(f[t], this)) return !0;
          })
        );
      for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
      return u > 1 ? i.uniqueSort(r) : r;
    },
    filter: function (n) {
      return this.pushStack(yi(this, n || [], !1));
    },
    not: function (n) {
      return this.pushStack(yi(this, n || [], !0));
    },
    is: function (n) {
      return !!yi(this, typeof n == "string" && dr.test(n) ? i(n) : n || [], !1)
        .length;
    },
  });
  nu = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  tu = i.fn.init = function (n, t, r) {
    var e, o;
    if (!n) return this;
    if (((r = r || gr), typeof n == "string")) {
      if (
        ((e =
          n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3
            ? [null, n, null]
            : nu.exec(n)),
        e && (e[1] || !t))
      ) {
        if (e[1]) {
          if (
            ((t = t instanceof i ? t[0] : t),
            i.merge(
              this,
              i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)
            ),
            vi.test(e[1]) && i.isPlainObject(t))
          )
            for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
          return this;
        }
        return (
          (o = f.getElementById(e[2])),
          o && ((this[0] = o), (this.length = 1)),
          this
        );
      }
      return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
    }
    return n.nodeType
      ? ((this[0] = n), (this.length = 1), this)
      : u(n)
      ? r.ready !== undefined
        ? r.ready(n)
        : n(i)
      : i.makeArray(n, this);
  };
  tu.prototype = i.fn;
  gr = i(f);
  iu = /^(?:parents|prev(?:Until|All))/;
  ru = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0,
  };
  i.fn.extend({
    has: function (n) {
      var t = i(n, this),
        r = t.length;
      return this.filter(function () {
        for (var n = 0; n < r; n++) if (i.contains(this, t[n])) return !0;
      });
    },
    closest: function (n, t) {
      var r,
        f = 0,
        o = this.length,
        u = [],
        e = typeof n != "string" && i(n);
      if (!dr.test(n))
        for (; f < o; f++)
          for (r = this[f]; r && r !== t; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (e
                ? e.index(r) > -1
                : r.nodeType === 1 && i.find.matchesSelector(r, n))
            ) {
              u.push(r);
              break;
            }
      return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
    },
    index: function (n) {
      return n
        ? typeof n == "string"
          ? ni.call(i(n), this[0])
          : ni.call(this, n.jquery ? n[0] : n)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (n, t) {
      return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))));
    },
    addBack: function (n) {
      return this.add(n == null ? this.prevObject : this.prevObject.filter(n));
    },
  });
  i.each(
    {
      parent: function (n) {
        var t = n.parentNode;
        return t && t.nodeType !== 11 ? t : null;
      },
      parents: function (n) {
        return ut(n, "parentNode");
      },
      parentsUntil: function (n, t, i) {
        return ut(n, "parentNode", i);
      },
      next: function (n) {
        return uu(n, "nextSibling");
      },
      prev: function (n) {
        return uu(n, "previousSibling");
      },
      nextAll: function (n) {
        return ut(n, "nextSibling");
      },
      prevAll: function (n) {
        return ut(n, "previousSibling");
      },
      nextUntil: function (n, t, i) {
        return ut(n, "nextSibling", i);
      },
      prevUntil: function (n, t, i) {
        return ut(n, "previousSibling", i);
      },
      siblings: function (n) {
        return kr((n.parentNode || {}).firstChild, n);
      },
      children: function (n) {
        return kr(n.firstChild);
      },
      contents: function (n) {
        return n.contentDocument != null && ar(n.contentDocument)
          ? n.contentDocument
          : (l(n, "template") && (n = n.content || n),
            i.merge([], n.childNodes));
      },
    },
    function (n, t) {
      i.fn[n] = function (r, u) {
        var f = i.map(this, t, r);
        return (
          n.slice(-5) !== "Until" && (u = r),
          u && typeof u == "string" && (f = i.filter(u, f)),
          this.length > 1 &&
            (ru[n] || i.uniqueSort(f), iu.test(n) && f.reverse()),
          this.pushStack(f)
        );
      };
    }
  );
  a = /[^\x20\t\r\n\f]+/g;
  i.Callbacks = function (n) {
    n = typeof n == "string" ? fe(n) : i.extend({}, n);
    var o,
      r,
      c,
      f,
      t = [],
      s = [],
      e = -1,
      l = function () {
        for (f = f || n.once, c = o = !0; s.length; e = -1)
          for (r = s.shift(); ++e < t.length; )
            t[e].apply(r[0], r[1]) === !1 &&
              n.stopOnFalse &&
              ((e = t.length), (r = !1));
        n.memory || (r = !1);
        o = !1;
        f && (t = r ? [] : "");
      },
      h = {
        add: function () {
          return (
            t &&
              (r && !o && ((e = t.length - 1), s.push(r)),
              (function f(r) {
                i.each(r, function (i, r) {
                  u(r)
                    ? (n.unique && h.has(r)) || t.push(r)
                    : r && r.length && rt(r) !== "string" && f(r);
                });
              })(arguments),
              r && !o && l()),
            this
          );
        },
        remove: function () {
          return (
            i.each(arguments, function (n, r) {
              for (var u; (u = i.inArray(r, t, u)) > -1; )
                t.splice(u, 1), u <= e && e--;
            }),
            this
          );
        },
        has: function (n) {
          return n ? i.inArray(n, t) > -1 : t.length > 0;
        },
        empty: function () {
          return t && (t = []), this;
        },
        disable: function () {
          return (f = s = []), (t = r = ""), this;
        },
        disabled: function () {
          return !t;
        },
        lock: function () {
          return (f = s = []), r || o || (t = r = ""), this;
        },
        locked: function () {
          return !!f;
        },
        fireWith: function (n, t) {
          return (
            f ||
              ((t = t || []),
              (t = [n, t.slice ? t.slice() : t]),
              s.push(t),
              o || l()),
            this
          );
        },
        fire: function () {
          return h.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return h;
  };
  i.extend({
    Deferred: function (t) {
      var f = [
          [
            "notify",
            "progress",
            i.Callbacks("memory"),
            i.Callbacks("memory"),
            2,
          ],
          [
            "resolve",
            "done",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            0,
            "resolved",
          ],
          [
            "reject",
            "fail",
            i.Callbacks("once memory"),
            i.Callbacks("once memory"),
            1,
            "rejected",
          ],
        ],
        o = "pending",
        e = {
          state: function () {
            return o;
          },
          always: function () {
            return r.done(arguments).fail(arguments), this;
          },
          catch: function (n) {
            return e.then(null, n);
          },
          pipe: function () {
            var n = arguments;
            return i
              .Deferred(function (t) {
                i.each(f, function (i, f) {
                  var e = u(n[f[4]]) && n[f[4]];
                  r[f[1]](function () {
                    var n = e && e.apply(this, arguments);
                    n && u(n.promise)
                      ? n
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[f[0] + "With"](this, e ? [n] : arguments);
                  });
                });
                n = null;
              })
              .promise();
          },
          then: function (t, r, e) {
            function s(t, r, f, e) {
              return function () {
                var h = this,
                  c = arguments,
                  a = function () {
                    var n, i;
                    if (!(t < o)) {
                      if (((n = f.apply(h, c)), n === r.promise()))
                        throw new TypeError("Thenable self-resolution");
                      i =
                        n &&
                        (typeof n == "object" || typeof n == "function") &&
                        n.then;
                      u(i)
                        ? e
                          ? i.call(n, s(o, r, ft, e), s(o, r, ri, e))
                          : (o++,
                            i.call(
                              n,
                              s(o, r, ft, e),
                              s(o, r, ri, e),
                              s(o, r, ft, r.notifyWith)
                            ))
                        : (f !== ft && ((h = undefined), (c = [n])),
                          (e || r.resolveWith)(h, c));
                    }
                  },
                  l = e
                    ? a
                    : function () {
                        try {
                          a();
                        } catch (n) {
                          i.Deferred.exceptionHook &&
                            i.Deferred.exceptionHook(n, l.stackTrace);
                          t + 1 >= o &&
                            (f !== ri && ((h = undefined), (c = [n])),
                            r.rejectWith(h, c));
                        }
                      };
                t
                  ? l()
                  : (i.Deferred.getStackHook &&
                      (l.stackTrace = i.Deferred.getStackHook()),
                    n.setTimeout(l));
              };
            }
            var o = 0;
            return i
              .Deferred(function (n) {
                f[0][3].add(s(0, n, u(e) ? e : ft, n.notifyWith));
                f[1][3].add(s(0, n, u(t) ? t : ft));
                f[2][3].add(s(0, n, u(r) ? r : ri));
              })
              .promise();
          },
          promise: function (n) {
            return n != null ? i.extend(n, e) : e;
          },
        },
        r = {};
      return (
        i.each(f, function (n, t) {
          var i = t[2],
            u = t[5];
          e[t[1]] = i.add;
          u &&
            i.add(
              function () {
                o = u;
              },
              f[3 - n][2].disable,
              f[3 - n][3].disable,
              f[0][2].lock,
              f[0][3].lock
            );
          i.add(t[3].fire);
          r[t[0]] = function () {
            return (
              r[t[0] + "With"](this === r ? undefined : this, arguments), this
            );
          };
          r[t[0] + "With"] = i.fireWith;
        }),
        e.promise(r),
        t && t.call(r, r),
        r
      );
    },
    when: function (n) {
      var e = arguments.length,
        t = e,
        o = Array(t),
        f = k.call(arguments),
        r = i.Deferred(),
        s = function (n) {
          return function (t) {
            o[n] = this;
            f[n] = arguments.length > 1 ? k.call(arguments) : t;
            --e || r.resolveWith(o, f);
          };
        };
      if (
        e <= 1 &&
        (fu(n, r.done(s(t)).resolve, r.reject, !e),
        r.state() === "pending" || u(f[t] && f[t].then))
      )
        return r.then();
      while (t--) fu(f[t], s(t), r.reject);
      return r.promise();
    },
  });
  eu = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  i.Deferred.exceptionHook = function (t, i) {
    n.console &&
      n.console.warn &&
      t &&
      eu.test(t.name) &&
      n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
  };
  i.readyException = function (t) {
    n.setTimeout(function () {
      throw t;
    });
  };
  ui = i.Deferred();
  i.fn.ready = function (n) {
    return (
      ui.then(n).catch(function (n) {
        i.readyException(n);
      }),
      this
    );
  };
  i.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (n) {
      (n === !0 ? --i.readyWait : i.isReady) ||
        ((i.isReady = !0), n !== !0 && --i.readyWait > 0) ||
        ui.resolveWith(f, [i]);
    },
  });
  i.ready.then = ui.then;
  f.readyState !== "complete" &&
  (f.readyState === "loading" || f.documentElement.doScroll)
    ? (f.addEventListener("DOMContentLoaded", fi),
      n.addEventListener("load", fi))
    : n.setTimeout(i.ready);
  var w = function (n, t, r, f, e, o, s) {
      var h = 0,
        l = n.length,
        c = r == null;
      if (rt(r) === "object") {
        e = !0;
        for (h in r) w(n, t, h, r[h], !0, o, s);
      } else if (
        f !== undefined &&
        ((e = !0),
        u(f) || (s = !0),
        c &&
          (s
            ? (t.call(n, f), (t = null))
            : ((c = t),
              (t = function (n, t, r) {
                return c.call(i(n), r);
              }))),
        t)
      )
        for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
      return e ? n : c ? t.call(n) : l ? t(n[0], r) : o;
    },
    ee = /^-ms-/,
    oe = /-([a-z])/g;
  et = function (n) {
    return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType;
  };
  pt.uid = 1;
  pt.prototype = {
    cache: function (n) {
      var t = n[this.expando];
      return (
        t ||
          ((t = {}),
          et(n) &&
            (n.nodeType
              ? (n[this.expando] = t)
              : Object.defineProperty(n, this.expando, {
                  value: t,
                  configurable: !0,
                }))),
        t
      );
    },
    set: function (n, t, i) {
      var r,
        u = this.cache(n);
      if (typeof t == "string") u[y(t)] = i;
      else for (r in t) u[y(r)] = t[r];
      return u;
    },
    get: function (n, t) {
      return t === undefined
        ? this.cache(n)
        : n[this.expando] && n[this.expando][y(t)];
    },
    access: function (n, t, i) {
      return t === undefined || (t && typeof t == "string" && i === undefined)
        ? this.get(n, t)
        : (this.set(n, t, i), i !== undefined ? i : t);
    },
    remove: function (n, t) {
      var u,
        r = n[this.expando];
      if (r !== undefined) {
        if (t !== undefined)
          for (
            Array.isArray(t)
              ? (t = t.map(y))
              : ((t = y(t)), (t = (t in r) ? [t] : t.match(a) || [])),
              u = t.length;
            u--;

          )
            delete r[t[u]];
        (t === undefined || i.isEmptyObject(r)) &&
          (n.nodeType ? (n[this.expando] = undefined) : delete n[this.expando]);
      }
    },
    hasData: function (n) {
      var t = n[this.expando];
      return t !== undefined && !i.isEmptyObject(t);
    },
  };
  var r = new pt(),
    o = new pt(),
    he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ce = /[A-Z]/g;
  i.extend({
    hasData: function (n) {
      return o.hasData(n) || r.hasData(n);
    },
    data: function (n, t, i) {
      return o.access(n, t, i);
    },
    removeData: function (n, t) {
      o.remove(n, t);
    },
    _data: function (n, t, i) {
      return r.access(n, t, i);
    },
    _removeData: function (n, t) {
      r.remove(n, t);
    },
  });
  i.fn.extend({
    data: function (n, t) {
      var f,
        u,
        e,
        i = this[0],
        s = i && i.attributes;
      if (n === undefined) {
        if (
          this.length &&
          ((e = o.get(i)), i.nodeType === 1 && !r.get(i, "hasDataAttrs"))
        ) {
          for (f = s.length; f--; )
            s[f] &&
              ((u = s[f].name),
              u.indexOf("data-") === 0 &&
                ((u = y(u.slice(5))), ou(i, u, e[u])));
          r.set(i, "hasDataAttrs", !0);
        }
        return e;
      }
      return typeof n == "object"
        ? this.each(function () {
            o.set(this, n);
          })
        : w(
            this,
            function (t) {
              var r;
              if (i && t === undefined)
                return ((r = o.get(i, n)), r !== undefined)
                  ? r
                  : ((r = ou(i, n)), r !== undefined)
                  ? r
                  : void 0;
              this.each(function () {
                o.set(this, n, t);
              });
            },
            null,
            t,
            arguments.length > 1,
            null,
            !0
          );
    },
    removeData: function (n) {
      return this.each(function () {
        o.remove(this, n);
      });
    },
  });
  i.extend({
    queue: function (n, t, u) {
      var f;
      if (n)
        return (
          (t = (t || "fx") + "queue"),
          (f = r.get(n, t)),
          u &&
            (!f || Array.isArray(u)
              ? (f = r.access(n, t, i.makeArray(u)))
              : f.push(u)),
          f || []
        );
    },
    dequeue: function (n, t) {
      t = t || "fx";
      var r = i.queue(n, t),
        e = r.length,
        u = r.shift(),
        f = i._queueHooks(n, t),
        o = function () {
          i.dequeue(n, t);
        };
      u === "inprogress" && ((u = r.shift()), e--);
      u &&
        (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
      !e && f && f.empty.fire();
    },
    _queueHooks: function (n, t) {
      var u = t + "queueHooks";
      return (
        r.get(n, u) ||
        r.access(n, u, {
          empty: i.Callbacks("once memory").add(function () {
            r.remove(n, [t + "queue", u]);
          }),
        })
      );
    },
  });
  i.fn.extend({
    queue: function (n, t) {
      var r = 2;
      return (typeof n != "string" && ((t = n), (n = "fx"), r--),
      arguments.length < r)
        ? i.queue(this[0], n)
        : t === undefined
        ? this
        : this.each(function () {
            var r = i.queue(this, n, t);
            i._queueHooks(this, n);
            n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n);
          });
    },
    dequeue: function (n) {
      return this.each(function () {
        i.dequeue(this, n);
      });
    },
    clearQueue: function (n) {
      return this.queue(n || "fx", []);
    },
    promise: function (n, t) {
      var u,
        e = 1,
        o = i.Deferred(),
        f = this,
        s = this.length,
        h = function () {
          --e || o.resolveWith(f, [f]);
        };
      for (
        typeof n != "string" && ((t = n), (n = undefined)), n = n || "fx";
        s--;

      )
        (u = r.get(f[s], n + "queueHooks")),
          u && u.empty && (e++, u.empty.add(h));
      return h(), o.promise(t);
    },
  });
  var su = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    wt = new RegExp("^(?:([+-])=|)(" + su + ")([a-z%]*)$", "i"),
    b = ["Top", "Right", "Bottom", "Left"],
    g = f.documentElement,
    ot = function (n) {
      return i.contains(n.ownerDocument, n);
    },
    ae = {
      composed: !0,
    };
  g.getRootNode &&
    (ot = function (n) {
      return (
        i.contains(n.ownerDocument, n) || n.getRootNode(ae) === n.ownerDocument
      );
    });
  bt = function (n, t) {
    return (
      (n = t || n),
      n.style.display === "none" ||
        (n.style.display === "" && ot(n) && i.css(n, "display") === "none")
    );
  };
  pi = {};
  i.fn.extend({
    show: function () {
      return st(this, !0);
    },
    hide: function () {
      return st(this);
    },
    toggle: function (n) {
      return typeof n == "boolean"
        ? n
          ? this.show()
          : this.hide()
        : this.each(function () {
            bt(this) ? i(this).show() : i(this).hide();
          });
    },
  });
  var kt = /^(?:checkbox|radio)$/i,
    cu = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    lu = /^$|^module$|\/(?:java|ecma)script/i;
  (function () {
    var i = f.createDocumentFragment(),
      n = i.appendChild(f.createElement("div")),
      t = f.createElement("input");
    t.setAttribute("type", "radio");
    t.setAttribute("checked", "checked");
    t.setAttribute("name", "t");
    n.appendChild(t);
    e.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
    n.innerHTML = "<textarea>x</textarea>";
    e.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue;
    n.innerHTML = "<option></option>";
    e.option = !!n.lastChild;
  })();
  c = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
  c.th = c.td;
  e.option ||
    (c.optgroup = c.option = [1, "<select multiple='multiple'>", "</select>"]);
  au = /<|&#?\w+;/;
  bi = /^([^.]*)(?:\.(.+)|)/;
  i.event = {
    global: {},
    add: function (n, t, u, f, e) {
      var l,
        v,
        w,
        y,
        b,
        h,
        s,
        c,
        o,
        k,
        d,
        p = r.get(n);
      if (et(n))
        for (
          u.handler && ((l = u), (u = l.handler), (e = l.selector)),
            e && i.find.matchesSelector(g, e),
            u.guid || (u.guid = i.guid++),
            (y = p.events) || (y = p.events = Object.create(null)),
            (v = p.handle) ||
              (v = p.handle =
                function (t) {
                  return typeof i != "undefined" && i.event.triggered !== t.type
                    ? i.event.dispatch.apply(n, arguments)
                    : undefined;
                }),
            t = (t || "").match(a) || [""],
            b = t.length;
          b--;

        )
          ((w = bi.exec(t[b]) || []),
          (o = d = w[1]),
          (k = (w[2] || "").split(".").sort()),
          o) &&
            ((s = i.event.special[o] || {}),
            (o = (e ? s.delegateType : s.bindType) || o),
            (s = i.event.special[o] || {}),
            (h = i.extend(
              {
                type: o,
                origType: d,
                data: f,
                handler: u,
                guid: u.guid,
                selector: e,
                needsContext: e && i.expr.match.needsContext.test(e),
                namespace: k.join("."),
              },
              l
            )),
            (c = y[o]) ||
              ((c = y[o] = []),
              (c.delegateCount = 0),
              (s.setup && s.setup.call(n, f, k, v) !== !1) ||
                (n.addEventListener && n.addEventListener(o, v))),
            s.add &&
              (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)),
            e ? c.splice(c.delegateCount++, 0, h) : c.push(h),
            (i.event.global[o] = !0));
    },
    remove: function (n, t, u, f, e) {
      var y,
        k,
        h,
        v,
        p,
        s,
        c,
        l,
        o,
        b,
        d,
        w = r.hasData(n) && r.get(n);
      if (w && (v = w.events)) {
        for (t = (t || "").match(a) || [""], p = t.length; p--; ) {
          if (
            ((h = bi.exec(t[p]) || []),
            (o = d = h[1]),
            (b = (h[2] || "").split(".").sort()),
            !o)
          ) {
            for (o in v) i.event.remove(n, o + t[p], u, f, !0);
            continue;
          }
          for (
            c = i.event.special[o] || {},
              o = (f ? c.delegateType : c.bindType) || o,
              l = v[o] || [],
              h =
                h[2] &&
                new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"),
              k = y = l.length;
            y--;

          )
            (s = l[y]),
              (e || d === s.origType) &&
                (!u || u.guid === s.guid) &&
                (!h || h.test(s.namespace)) &&
                (!f || f === s.selector || (f === "**" && s.selector)) &&
                (l.splice(y, 1),
                s.selector && l.delegateCount--,
                c.remove && c.remove.call(n, s));
          k &&
            !l.length &&
            ((c.teardown && c.teardown.call(n, b, w.handle) !== !1) ||
              i.removeEvent(n, o, w.handle),
            delete v[o]);
        }
        i.isEmptyObject(v) && r.remove(n, "handle events");
      }
    },
    dispatch: function (n) {
      var u,
        c,
        s,
        e,
        f,
        l,
        h = new Array(arguments.length),
        t = i.event.fix(n),
        a = (r.get(this, "events") || Object.create(null))[t.type] || [],
        o = i.event.special[t.type] || {};
      for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
      if (
        ((t.delegateTarget = this),
        !o.preDispatch || o.preDispatch.call(this, t) !== !1)
      ) {
        for (
          l = i.event.handlers.call(this, t, a), u = 0;
          (e = l[u++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = e.elem, c = 0;
            (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();

          )
            (!t.rnamespace ||
              f.namespace === !1 ||
              t.rnamespace.test(f.namespace)) &&
              ((t.handleObj = f),
              (t.data = f.data),
              (s = (
                (i.event.special[f.origType] || {}).handle || f.handler
              ).apply(e.elem, h)),
              s !== undefined &&
                (t.result = s) === !1 &&
                (t.preventDefault(), t.stopPropagation()));
        return o.postDispatch && o.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (n, t) {
      var f,
        e,
        u,
        o,
        s,
        c = [],
        h = t.delegateCount,
        r = n.target;
      if (h && r.nodeType && !(n.type === "click" && n.button >= 1))
        for (; r !== this; r = r.parentNode || this)
          if (r.nodeType === 1 && !(n.type === "click" && r.disabled === !0)) {
            for (o = [], s = {}, f = 0; f < h; f++)
              (e = t[f]),
                (u = e.selector + " "),
                s[u] === undefined &&
                  (s[u] = e.needsContext
                    ? i(u, this).index(r) > -1
                    : i.find(u, this, null, [r]).length),
                s[u] && o.push(e);
            o.length &&
              c.push({
                elem: r,
                handlers: o,
              });
          }
      return (
        (r = this),
        h < t.length &&
          c.push({
            elem: r,
            handlers: t.slice(h),
          }),
        c
      );
    },
    addProp: function (n, t) {
      Object.defineProperty(i.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: u(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[n];
            },
        set: function (t) {
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (n) {
      return n[i.expando] ? n : new i.Event(n);
    },
    special: {
      load: {
        noBubble: !0,
      },
      click: {
        setup: function (n) {
          var t = this || n;
          return (
            kt.test(t.type) && t.click && l(t, "input") && ei(t, "click", ht),
            !1
          );
        },
        trigger: function (n) {
          var t = this || n;
          return (
            kt.test(t.type) && t.click && l(t, "input") && ei(t, "click"), !0
          );
        },
        _default: function (n) {
          var t = n.target;
          return (
            (kt.test(t.type) &&
              t.click &&
              l(t, "input") &&
              r.get(t, "click")) ||
            l(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (n) {
          n.result !== undefined &&
            n.originalEvent &&
            (n.originalEvent.returnValue = n.result);
        },
      },
    },
  };
  i.removeEvent = function (n, t, i) {
    n.removeEventListener && n.removeEventListener(t, i);
  };
  i.Event = function (n, t) {
    if (!(this instanceof i.Event)) return new i.Event(n, t);
    n && n.type
      ? ((this.originalEvent = n),
        (this.type = n.type),
        (this.isDefaultPrevented =
          n.defaultPrevented ||
          (n.defaultPrevented === undefined && n.returnValue === !1)
            ? ht
            : ct),
        (this.target =
          n.target && n.target.nodeType === 3 ? n.target.parentNode : n.target),
        (this.currentTarget = n.currentTarget),
        (this.relatedTarget = n.relatedTarget))
      : (this.type = n);
    t && i.extend(this, t);
    this.timeStamp = (n && n.timeStamp) || Date.now();
    this[i.expando] = !0;
  };
  i.Event.prototype = {
    constructor: i.Event,
    isDefaultPrevented: ct,
    isPropagationStopped: ct,
    isImmediatePropagationStopped: ct,
    isSimulated: !1,
    preventDefault: function () {
      var n = this.originalEvent;
      this.isDefaultPrevented = ht;
      n && !this.isSimulated && n.preventDefault();
    },
    stopPropagation: function () {
      var n = this.originalEvent;
      this.isPropagationStopped = ht;
      n && !this.isSimulated && n.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var n = this.originalEvent;
      this.isImmediatePropagationStopped = ht;
      n && !this.isSimulated && n.stopImmediatePropagation();
      this.stopPropagation();
    },
  };
  i.each(
    {
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      char: !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: !0,
    },
    i.event.addProp
  );
  i.each(
    {
      focus: "focusin",
      blur: "focusout",
    },
    function (n, t) {
      i.event.special[n] = {
        setup: function () {
          return ei(this, n, ye), !1;
        },
        trigger: function () {
          return ei(this, n), !0;
        },
        _default: function (t) {
          return r.get(t.target, n);
        },
        delegateType: t,
      };
    }
  );
  i.each(
    {
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout",
    },
    function (n, t) {
      i.event.special[n] = {
        delegateType: t,
        bindType: t,
        handle: function (n) {
          var u,
            f = this,
            r = n.relatedTarget,
            e = n.handleObj;
          return (
            (r && (r === f || i.contains(f, r))) ||
              ((n.type = e.origType),
              (u = e.handler.apply(this, arguments)),
              (n.type = t)),
            u
          );
        },
      };
    }
  );
  i.fn.extend({
    on: function (n, t, i, r) {
      return ki(this, n, t, i, r);
    },
    one: function (n, t, i, r) {
      return ki(this, n, t, i, r, 1);
    },
    off: function (n, t, r) {
      var u, f;
      if (n && n.preventDefault && n.handleObj)
        return (
          (u = n.handleObj),
          i(n.delegateTarget).off(
            u.namespace ? u.origType + "." + u.namespace : u.origType,
            u.selector,
            u.handler
          ),
          this
        );
      if (typeof n == "object") {
        for (f in n) this.off(f, t, n[f]);
        return this;
      }
      return (
        (t === !1 || typeof t == "function") && ((r = t), (t = undefined)),
        r === !1 && (r = ct),
        this.each(function () {
          i.event.remove(this, n, r, t);
        })
      );
    },
  });
  var we = /<script|<style|<link/i,
    be = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ke = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  i.extend({
    htmlPrefilter: function (n) {
      return n;
    },
    clone: function (n, t, r) {
      var u,
        c,
        o,
        f,
        h = n.cloneNode(!0),
        l = ot(n);
      if (
        !e.noCloneChecked &&
        (n.nodeType === 1 || n.nodeType === 11) &&
        !i.isXMLDoc(n)
      )
        for (f = s(h), o = s(n), u = 0, c = o.length; u < c; u++)
          no(o[u], f[u]);
      if (t)
        if (r)
          for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++)
            pu(o[u], f[u]);
        else pu(n, h);
      return (
        (f = s(h, "script")), f.length > 0 && wi(f, !l && s(n, "script")), h
      );
    },
    cleanData: function (n) {
      for (
        var u, t, f, s = i.event.special, e = 0;
        (t = n[e]) !== undefined;
        e++
      )
        if (et(t)) {
          if ((u = t[r.expando])) {
            if (u.events)
              for (f in u.events)
                s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
            t[r.expando] = undefined;
          }
          t[o.expando] && (t[o.expando] = undefined);
        }
    },
  });
  i.fn.extend({
    detach: function (n) {
      return wu(this, n, !0);
    },
    remove: function (n) {
      return wu(this, n);
    },
    text: function (n) {
      return w(
        this,
        function (n) {
          return n === undefined
            ? i.text(this)
            : this.empty().each(function () {
                (this.nodeType === 1 ||
                  this.nodeType === 11 ||
                  this.nodeType === 9) &&
                  (this.textContent = n);
              });
        },
        null,
        n,
        arguments.length
      );
    },
    append: function () {
      return lt(this, arguments, function (n) {
        if (
          this.nodeType === 1 ||
          this.nodeType === 11 ||
          this.nodeType === 9
        ) {
          var t = yu(this, n);
          t.appendChild(n);
        }
      });
    },
    prepend: function () {
      return lt(this, arguments, function (n) {
        if (
          this.nodeType === 1 ||
          this.nodeType === 11 ||
          this.nodeType === 9
        ) {
          var t = yu(this, n);
          t.insertBefore(n, t.firstChild);
        }
      });
    },
    before: function () {
      return lt(this, arguments, function (n) {
        this.parentNode && this.parentNode.insertBefore(n, this);
      });
    },
    after: function () {
      return lt(this, arguments, function (n) {
        this.parentNode && this.parentNode.insertBefore(n, this.nextSibling);
      });
    },
    empty: function () {
      for (var n, t = 0; (n = this[t]) != null; t++)
        n.nodeType === 1 && (i.cleanData(s(n, !1)), (n.textContent = ""));
      return this;
    },
    clone: function (n, t) {
      return (
        (n = n == null ? !1 : n),
        (t = t == null ? n : t),
        this.map(function () {
          return i.clone(this, n, t);
        })
      );
    },
    html: function (n) {
      return w(
        this,
        function (n) {
          var t = this[0] || {},
            r = 0,
            u = this.length;
          if (n === undefined && t.nodeType === 1) return t.innerHTML;
          if (
            typeof n == "string" &&
            !we.test(n) &&
            !c[(cu.exec(n) || ["", ""])[1].toLowerCase()]
          ) {
            n = i.htmlPrefilter(n);
            try {
              for (; r < u; r++)
                (t = this[r] || {}),
                  t.nodeType === 1 &&
                    (i.cleanData(s(t, !1)), (t.innerHTML = n));
              t = 0;
            } catch (f) {}
          }
          t && this.empty().append(n);
        },
        null,
        n,
        arguments.length
      );
    },
    replaceWith: function () {
      var n = [];
      return lt(
        this,
        arguments,
        function (t) {
          var r = this.parentNode;
          i.inArray(this, n) < 0 &&
            (i.cleanData(s(this)), r && r.replaceChild(t, this));
        },
        n
      );
    },
  });
  i.each(
    {
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith",
    },
    function (n, t) {
      i.fn[n] = function (n) {
        for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++)
          (u = r === o ? this : this.clone(!0)),
            i(e[r])[t](u),
            li.apply(f, u.get());
        return this.pushStack(f);
      };
    }
  );
  var di = new RegExp("^(" + su + ")(?!px)[a-z%]+$", "i"),
    gi = /^--/,
    oi = function (t) {
      var i = t.ownerDocument.defaultView;
      return (i && i.opener) || (i = n), i.getComputedStyle(t);
    },
    bu = function (n, t, i) {
      var u,
        r,
        f = {};
      for (r in t) (f[r] = n.style[r]), (n.style[r] = t[r]);
      u = i.call(n);
      for (r in t) n.style[r] = f[r];
      return u;
    },
    to = new RegExp(b.join("|"), "i"),
    ku = "[\\x20\\t\\r\\n\\f]",
    io = new RegExp("^" + ku + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ku + "+$", "g");
  (function () {
    function r() {
      if (t) {
        s.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        t.style.cssText =
          "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        g.appendChild(s).appendChild(t);
        var i = n.getComputedStyle(t);
        h = i.top !== "1%";
        v = u(i.marginLeft) === 12;
        t.style.right = "60%";
        a = u(i.right) === 36;
        c = u(i.width) === 36;
        t.style.position = "absolute";
        l = u(t.offsetWidth / 3) === 12;
        g.removeChild(s);
        t = null;
      }
    }

    function u(n) {
      return Math.round(parseFloat(n));
    }
    var h,
      c,
      l,
      a,
      o,
      v,
      s = f.createElement("div"),
      t = f.createElement("div");
    t.style &&
      ((t.style.backgroundClip = "content-box"),
      (t.cloneNode(!0).style.backgroundClip = ""),
      (e.clearCloneStyle = t.style.backgroundClip === "content-box"),
      i.extend(e, {
        boxSizingReliable: function () {
          return r(), c;
        },
        pixelBoxStyles: function () {
          return r(), a;
        },
        pixelPosition: function () {
          return r(), h;
        },
        reliableMarginLeft: function () {
          return r(), v;
        },
        scrollboxSize: function () {
          return r(), l;
        },
        reliableTrDimensions: function () {
          var i, t, r, u;
          return (
            o == null &&
              ((i = f.createElement("table")),
              (t = f.createElement("tr")),
              (r = f.createElement("div")),
              (i.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (r.style.height = "9px"),
              (r.style.display = "block"),
              g.appendChild(i).appendChild(t).appendChild(r),
              (u = n.getComputedStyle(t)),
              (o =
                parseInt(u.height, 10) +
                  parseInt(u.borderTopWidth, 10) +
                  parseInt(u.borderBottomWidth, 10) ===
                t.offsetHeight),
              g.removeChild(i)),
            o
          );
        },
      }));
  })();
  var gu = ["Webkit", "Moz", "ms"],
    nf = f.createElement("div").style,
    tf = {};
  var uo = /^(none|table(?!-c[ea]).+)/,
    fo = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    rf = {
      letterSpacing: "0",
      fontWeight: "400",
    };
  i.extend({
    cssHooks: {
      opacity: {
        get: function (n, t) {
          if (t) {
            var i = dt(n, "opacity");
            return i === "" ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (n, t, r, u) {
      if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
        var f,
          s,
          o,
          c = y(t),
          l = gi.test(t),
          h = n.style;
        if (
          (l || (t = nr(c)),
          (o = i.cssHooks[t] || i.cssHooks[c]),
          r !== undefined)
        ) {
          if (
            ((s = typeof r),
            s === "string" &&
              (f = wt.exec(r)) &&
              f[1] &&
              ((r = hu(n, t, f)), (s = "number")),
            r == null || r !== r)
          )
            return;
          s !== "number" ||
            l ||
            (r += (f && f[3]) || (i.cssNumber[c] ? "" : "px"));
          e.clearCloneStyle ||
            r !== "" ||
            t.indexOf("background") !== 0 ||
            (h[t] = "inherit");
          (o && "set" in o && (r = o.set(n, r, u)) === undefined) ||
            (l ? h.setProperty(t, r) : (h[t] = r));
        } else
          return o && "get" in o && (f = o.get(n, !1, u)) !== undefined
            ? f
            : h[t];
      }
    },
    css: function (n, t, r, u) {
      var f,
        o,
        e,
        s = y(t),
        h = gi.test(t);
      return (h || (t = nr(s)),
      (e = i.cssHooks[t] || i.cssHooks[s]),
      e && "get" in e && (f = e.get(n, !0, r)),
      f === undefined && (f = dt(n, t, u)),
      f === "normal" && t in rf && (f = rf[t]),
      r === "" || r)
        ? ((o = parseFloat(f)), r === !0 || isFinite(o) ? o || 0 : f)
        : f;
    },
  });
  i.each(["height", "width"], function (n, t) {
    i.cssHooks[t] = {
      get: function (n, r, u) {
        if (r)
          return uo.test(i.css(n, "display")) &&
            (!n.getClientRects().length || !n.getBoundingClientRect().width)
            ? bu(n, fo, function () {
                return ff(n, t, u);
              })
            : ff(n, t, u);
      },
      set: function (n, r, u) {
        var s,
          f = oi(n),
          h = !e.scrollboxSize() && f.position === "absolute",
          l = h || u,
          c = l && i.css(n, "boxSizing", !1, f) === "border-box",
          o = u ? tr(n, t, u, c, f) : 0;
        return (
          c &&
            h &&
            (o -= Math.ceil(
              n["offset" + t[0].toUpperCase() + t.slice(1)] -
                parseFloat(f[t]) -
                tr(n, t, "border", !1, f) -
                0.5
            )),
          o &&
            (s = wt.exec(r)) &&
            (s[3] || "px") !== "px" &&
            ((n.style[t] = r), (r = i.css(n, t))),
          uf(n, r, o)
        );
      },
    };
  });
  i.cssHooks.marginLeft = du(e.reliableMarginLeft, function (n, t) {
    if (t)
      return (
        (parseFloat(dt(n, "marginLeft")) ||
          n.getBoundingClientRect().left -
            bu(
              n,
              {
                marginLeft: 0,
              },
              function () {
                return n.getBoundingClientRect().left;
              }
            )) + "px"
      );
  });
  i.each(
    {
      margin: "",
      padding: "",
      border: "Width",
    },
    function (n, t) {
      i.cssHooks[n + t] = {
        expand: function (i) {
          for (
            var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i];
            r < 4;
            r++
          )
            f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
          return f;
        },
      };
      n !== "margin" && (i.cssHooks[n + t].set = uf);
    }
  );
  i.fn.extend({
    css: function (n, t) {
      return w(
        this,
        function (n, t, r) {
          var f,
            e,
            o = {},
            u = 0;
          if (Array.isArray(t)) {
            for (f = oi(n), e = t.length; u < e; u++)
              o[t[u]] = i.css(n, t[u], !1, f);
            return o;
          }
          return r !== undefined ? i.style(n, t, r) : i.css(n, t);
        },
        n,
        t,
        arguments.length > 1
      );
    },
  });
  i.Tween = h;
  h.prototype = {
    constructor: h,
    init: function (n, t, r, u, f, e) {
      this.elem = n;
      this.prop = r;
      this.easing = f || i.easing._default;
      this.options = t;
      this.start = this.now = this.cur();
      this.end = u;
      this.unit = e || (i.cssNumber[r] ? "" : "px");
    },
    cur: function () {
      var n = h.propHooks[this.prop];
      return n && n.get ? n.get(this) : h.propHooks._default.get(this);
    },
    run: function (n) {
      var t,
        r = h.propHooks[this.prop];
      return (
        (this.pos = this.options.duration
          ? (t = i.easing[this.easing](
              n,
              this.options.duration * n,
              0,
              1,
              this.options.duration
            ))
          : (t = n)),
        (this.now = (this.end - this.start) * t + this.start),
        this.options.step && this.options.step.call(this.elem, this.now, this),
        r && r.set ? r.set(this) : h.propHooks._default.set(this),
        this
      );
    },
  };
  h.prototype.init.prototype = h.prototype;
  h.propHooks = {
    _default: {
      get: function (n) {
        var t;
        return n.elem.nodeType !== 1 ||
          (n.elem[n.prop] != null && n.elem.style[n.prop] == null)
          ? n.elem[n.prop]
          : ((t = i.css(n.elem, n.prop, "")), !t || t === "auto" ? 0 : t);
      },
      set: function (n) {
        i.fx.step[n.prop]
          ? i.fx.step[n.prop](n)
          : n.elem.nodeType === 1 &&
            (i.cssHooks[n.prop] || n.elem.style[nr(n.prop)] != null)
          ? i.style(n.elem, n.prop, n.now + n.unit)
          : (n.elem[n.prop] = n.now);
      },
    },
  };
  h.propHooks.scrollTop = h.propHooks.scrollLeft = {
    set: function (n) {
      n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now);
    },
  };
  i.easing = {
    linear: function (n) {
      return n;
    },
    swing: function (n) {
      return 0.5 - Math.cos(n * Math.PI) / 2;
    },
    _default: "swing",
  };
  i.fx = h.prototype.init;
  i.fx.step = {};
  ef = /^(?:toggle|show|hide)$/;
  of = /queueHooks$/;
  i.Animation = i.extend(v, {
    tweeners: {
      "*": [
        function (n, t) {
          var i = this.createTween(n, t);
          return hu(i.elem, n, wt.exec(t), i), i;
        },
      ],
    },
    tweener: function (n, t) {
      u(n) ? ((t = n), (n = ["*"])) : (n = n.match(a));
      for (var i, r = 0, f = n.length; r < f; r++)
        (i = n[r]),
          (v.tweeners[i] = v.tweeners[i] || []),
          v.tweeners[i].unshift(t);
    },
    prefilters: [eo],
    prefilter: function (n, t) {
      t ? v.prefilters.unshift(n) : v.prefilters.push(n);
    },
  });
  i.speed = function (n, t, r) {
    var f =
      n && typeof n == "object"
        ? i.extend({}, n)
        : {
            complete: r || (!r && t) || (u(n) && n),
            duration: n,
            easing: (r && t) || (t && !u(t) && t),
          };
    return (
      i.fx.off
        ? (f.duration = 0)
        : typeof f.duration != "number" &&
          (f.duration =
            f.duration in i.fx.speeds
              ? i.fx.speeds[f.duration]
              : i.fx.speeds._default),
      (f.queue == null || f.queue === !0) && (f.queue = "fx"),
      (f.old = f.complete),
      (f.complete = function () {
        u(f.old) && f.old.call(this);
        f.queue && i.dequeue(this, f.queue);
      }),
      f
    );
  };
  i.fn.extend({
    fadeTo: function (n, t, i, r) {
      return this.filter(bt).css("opacity", 0).show().end().animate(
        {
          opacity: t,
        },
        n,
        i,
        r
      );
    },
    animate: function (n, t, u, f) {
      var s = i.isEmptyObject(n),
        o = i.speed(t, u, f),
        e = function () {
          var t = v(this, i.extend({}, n), o);
          (s || r.get(this, "finish")) && t.stop(!0);
        };
      return (
        (e.finish = e),
        s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
      );
    },
    stop: function (n, t, u) {
      var f = function (n) {
        var t = n.stop;
        delete n.stop;
        t(u);
      };
      return (
        typeof n != "string" && ((u = t), (t = n), (n = undefined)),
        t && this.queue(n || "fx", []),
        this.each(function () {
          var s = !0,
            t = n != null && n + "queueHooks",
            o = i.timers,
            e = r.get(this);
          if (t) e[t] && e[t].stop && f(e[t]);
          else for (t in e) e[t] && e[t].stop && of.test(t) && f(e[t]);
          for (t = o.length; t--; )
            o[t].elem === this &&
              (n == null || o[t].queue === n) &&
              (o[t].anim.stop(u), (s = !1), o.splice(t, 1));
          (s || !u) && i.dequeue(this, n);
        })
      );
    },
    finish: function (n) {
      return (
        n !== !1 && (n = n || "fx"),
        this.each(function () {
          var t,
            e = r.get(this),
            u = e[n + "queue"],
            o = e[n + "queueHooks"],
            f = i.timers,
            s = u ? u.length : 0;
          for (
            e.finish = !0,
              i.queue(this, n, []),
              o && o.stop && o.stop.call(this, !0),
              t = f.length;
            t--;

          )
            f[t].elem === this &&
              f[t].queue === n &&
              (f[t].anim.stop(!0), f.splice(t, 1));
          for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
          delete e.finish;
        })
      );
    },
  });
  i.each(["toggle", "show", "hide"], function (n, t) {
    var r = i.fn[t];
    i.fn[t] = function (n, i, u) {
      return n == null || typeof n == "boolean"
        ? r.apply(this, arguments)
        : this.animate(hi(t, !0), n, i, u);
    };
  });
  i.each(
    {
      slideDown: hi("show"),
      slideUp: hi("hide"),
      slideToggle: hi("toggle"),
      fadeIn: {
        opacity: "show",
      },
      fadeOut: {
        opacity: "hide",
      },
      fadeToggle: {
        opacity: "toggle",
      },
    },
    function (n, t) {
      i.fn[n] = function (n, i, r) {
        return this.animate(t, n, i, r);
      };
    }
  );
  i.timers = [];
  i.fx.tick = function () {
    var r,
      n = 0,
      t = i.timers;
    for (at = Date.now(); n < t.length; n++)
      (r = t[n]), r() || t[n] !== r || t.splice(n--, 1);
    t.length || i.fx.stop();
    at = undefined;
  };
  i.fx.timer = function (n) {
    i.timers.push(n);
    i.fx.start();
  };
  i.fx.interval = 13;
  i.fx.start = function () {
    si || ((si = !0), ir());
  };
  i.fx.stop = function () {
    si = null;
  };
  i.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400,
  };
  (i.fn.delay = function (t, r) {
    return (
      (t = i.fx ? i.fx.speeds[t] || t : t),
      (r = r || "fx"),
      this.queue(r, function (i, r) {
        var u = n.setTimeout(i, t);
        r.stop = function () {
          n.clearTimeout(u);
        };
      })
    );
  }),
    (function () {
      var n = f.createElement("input"),
        t = f.createElement("select"),
        i = t.appendChild(f.createElement("option"));
      n.type = "checkbox";
      e.checkOn = n.value !== "";
      e.optSelected = i.selected;
      n = f.createElement("input");
      n.value = "t";
      n.type = "radio";
      e.radioValue = n.value === "t";
    })();
  vt = i.expr.attrHandle;
  i.fn.extend({
    attr: function (n, t) {
      return w(this, i.attr, n, t, arguments.length > 1);
    },
    removeAttr: function (n) {
      return this.each(function () {
        i.removeAttr(this, n);
      });
    },
  });
  i.extend({
    attr: function (n, t, r) {
      var u,
        f,
        e = n.nodeType;
      if (e !== 3 && e !== 8 && e !== 2) {
        if (typeof n.getAttribute == "undefined") return i.prop(n, t, r);
        if (
          ((e === 1 && i.isXMLDoc(n)) ||
            (f =
              i.attrHooks[t.toLowerCase()] ||
              (i.expr.match.bool.test(t) ? cf : undefined)),
          r !== undefined)
        ) {
          if (r === null) {
            i.removeAttr(n, t);
            return;
          }
          return f && "set" in f && (u = f.set(n, r, t)) !== undefined
            ? u
            : (n.setAttribute(t, r + ""), r);
        }
        return f && "get" in f && (u = f.get(n, t)) !== null
          ? u
          : ((u = i.find.attr(n, t)), u == null ? undefined : u);
      }
    },
    attrHooks: {
      type: {
        set: function (n, t) {
          if (!e.radioValue && t === "radio" && l(n, "input")) {
            var i = n.value;
            return n.setAttribute("type", t), i && (n.value = i), t;
          }
        },
      },
    },
    removeAttr: function (n, t) {
      var i,
        u = 0,
        r = t && t.match(a);
      if (r && n.nodeType === 1) while ((i = r[u++])) n.removeAttribute(i);
    },
  });
  cf = {
    set: function (n, t, r) {
      return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r;
    },
  };
  i.each(i.expr.match.bool.source.match(/\w+/g), function (n, t) {
    var r = vt[t] || i.find.attr;
    vt[t] = function (n, t, i) {
      var f,
        e,
        u = t.toLowerCase();
      return (
        i ||
          ((e = vt[u]),
          (vt[u] = f),
          (f = r(n, t, i) != null ? u : null),
          (vt[u] = e)),
        f
      );
    };
  });
  lf = /^(?:input|select|textarea|button)$/i;
  af = /^(?:a|area)$/i;
  i.fn.extend({
    prop: function (n, t) {
      return w(this, i.prop, n, t, arguments.length > 1);
    },
    removeProp: function (n) {
      return this.each(function () {
        delete this[i.propFix[n] || n];
      });
    },
  });
  i.extend({
    prop: function (n, t, r) {
      var f,
        u,
        e = n.nodeType;
      if (e !== 3 && e !== 8 && e !== 2)
        return ((e === 1 && i.isXMLDoc(n)) ||
          ((t = i.propFix[t] || t), (u = i.propHooks[t])),
        r !== undefined)
          ? u && "set" in u && (f = u.set(n, r, t)) !== undefined
            ? f
            : (n[t] = r)
          : u && "get" in u && (f = u.get(n, t)) !== null
          ? f
          : n[t];
    },
    propHooks: {
      tabIndex: {
        get: function (n) {
          var t = i.find.attr(n, "tabindex");
          return t
            ? parseInt(t, 10)
            : lf.test(n.nodeName) || (af.test(n.nodeName) && n.href)
            ? 0
            : -1;
        },
      },
    },
    propFix: {
      for: "htmlFor",
      class: "className",
    },
  });
  e.optSelected ||
    (i.propHooks.selected = {
      get: function (n) {
        var t = n.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function (n) {
        var t = n.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      },
    });
  i.each(
    [
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable",
    ],
    function () {
      i.propFix[this.toLowerCase()] = this;
    }
  );
  i.fn.extend({
    addClass: function (n) {
      var r, t, e, o, f, s;
      return u(n)
        ? this.each(function (t) {
            i(this).addClass(n.call(this, t, tt(this)));
          })
        : ((r = rr(n)), r.length)
        ? this.each(function () {
            if (
              ((e = tt(this)),
              (t = this.nodeType === 1 && " " + nt(e) + " "),
              t)
            ) {
              for (f = 0; f < r.length; f++)
                (o = r[f]), t.indexOf(" " + o + " ") < 0 && (t += o + " ");
              s = nt(t);
              e !== s && this.setAttribute("class", s);
            }
          })
        : this;
    },
    removeClass: function (n) {
      var r, t, e, o, f, s;
      return u(n)
        ? this.each(function (t) {
            i(this).removeClass(n.call(this, t, tt(this)));
          })
        : arguments.length
        ? ((r = rr(n)), r.length)
          ? this.each(function () {
              if (
                ((e = tt(this)),
                (t = this.nodeType === 1 && " " + nt(e) + " "),
                t)
              ) {
                for (f = 0; f < r.length; f++)
                  for (o = r[f]; t.indexOf(" " + o + " ") > -1; )
                    t = t.replace(" " + o + " ", " ");
                s = nt(t);
                e !== s && this.setAttribute("class", s);
              }
            })
          : this
        : this.attr("class", "");
    },
    toggleClass: function (n, t) {
      var s,
        f,
        e,
        o,
        h = typeof n,
        c = h === "string" || Array.isArray(n);
      return u(n)
        ? this.each(function (r) {
            i(this).toggleClass(n.call(this, r, tt(this), t), t);
          })
        : typeof t == "boolean" && c
        ? t
          ? this.addClass(n)
          : this.removeClass(n)
        : ((s = rr(n)),
          this.each(function () {
            if (c)
              for (o = i(this), e = 0; e < s.length; e++)
                (f = s[e]), o.hasClass(f) ? o.removeClass(f) : o.addClass(f);
            else
              (n === undefined || h === "boolean") &&
                ((f = tt(this)),
                f && r.set(this, "__className__", f),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    f || n === !1 ? "" : r.get(this, "__className__") || ""
                  ));
          }));
    },
    hasClass: function (n) {
      for (var t, r = 0, i = " " + n + " "; (t = this[r++]); )
        if (t.nodeType === 1 && (" " + nt(tt(t)) + " ").indexOf(i) > -1)
          return !0;
      return !1;
    },
  });
  vf = /\r/g;
  i.fn.extend({
    val: function (n) {
      var t,
        r,
        e,
        f = this[0];
      return arguments.length
        ? ((e = u(n)),
          this.each(function (r) {
            var u;
            this.nodeType === 1 &&
              ((u = e ? n.call(this, r, i(this).val()) : n),
              u == null
                ? (u = "")
                : typeof u == "number"
                ? (u += "")
                : Array.isArray(u) &&
                  (u = i.map(u, function (n) {
                    return n == null ? "" : n + "";
                  })),
              (t =
                i.valHooks[this.type] ||
                i.valHooks[this.nodeName.toLowerCase()]),
              (t && "set" in t && t.set(this, u, "value") !== undefined) ||
                (this.value = u));
          }))
        : f
        ? ((t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]),
          t && "get" in t && (r = t.get(f, "value")) !== undefined)
          ? r
          : ((r = f.value), typeof r == "string")
          ? r.replace(vf, "")
          : r == null
          ? ""
          : r
        : void 0;
    },
  });
  i.extend({
    valHooks: {
      option: {
        get: function (n) {
          var t = i.find.attr(n, "value");
          return t != null ? t : nt(i.text(n));
        },
      },
      select: {
        get: function (n) {
          for (
            var e,
              t,
              o = n.options,
              u = n.selectedIndex,
              f = n.type === "select-one",
              s = f ? null : [],
              h = f ? u + 1 : o.length,
              r = u < 0 ? h : f ? u : 0;
            r < h;
            r++
          )
            if (
              ((t = o[r]),
              (t.selected || r === u) &&
                !t.disabled &&
                (!t.parentNode.disabled || !l(t.parentNode, "optgroup")))
            ) {
              if (((e = i(t).val()), f)) return e;
              s.push(e);
            }
          return s;
        },
        set: function (n, t) {
          for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--; )
            (r = f[o]),
              (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) &&
                (u = !0);
          return u || (n.selectedIndex = -1), e;
        },
      },
    },
  });
  i.each(["radio", "checkbox"], function () {
    i.valHooks[this] = {
      set: function (n, t) {
        if (Array.isArray(t))
          return (n.checked = i.inArray(i(n).val(), t) > -1);
      },
    };
    e.checkOn ||
      (i.valHooks[this].get = function (n) {
        return n.getAttribute("value") === null ? "on" : n.value;
      });
  });
  e.focusin = "onfocusin" in n;
  ur = /^(?:focusinfocus|focusoutblur)$/;
  fr = function (n) {
    n.stopPropagation();
  };
  i.extend(i.event, {
    trigger: function (t, e, o, s) {
      var k,
        c,
        l,
        d,
        v,
        y,
        a,
        w,
        b = [o || f],
        h = ii.call(t, "type") ? t.type : t,
        p = ii.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((c = w = l = o = o || f), o.nodeType !== 3 && o.nodeType !== 8) &&
        !ur.test(h + i.event.triggered) &&
        (h.indexOf(".") > -1 && ((p = h.split(".")), (h = p.shift()), p.sort()),
        (v = h.indexOf(":") < 0 && "on" + h),
        (t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t)),
        (t.isTrigger = s ? 2 : 3),
        (t.namespace = p.join(".")),
        (t.rnamespace = t.namespace
          ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
          : null),
        (t.result = undefined),
        t.target || (t.target = o),
        (e = e == null ? [t] : i.makeArray(e, [t])),
        (a = i.event.special[h] || {}),
        s || !a.trigger || a.trigger.apply(o, e) !== !1)
      ) {
        if (!s && !a.noBubble && !it(o)) {
          for (
            d = a.delegateType || h, ur.test(d + h) || (c = c.parentNode);
            c;
            c = c.parentNode
          )
            b.push(c), (l = c);
          l === (o.ownerDocument || f) &&
            b.push(l.defaultView || l.parentWindow || n);
        }
        for (k = 0; (c = b[k++]) && !t.isPropagationStopped(); )
          (w = c),
            (t.type = k > 1 ? d : a.bindType || h),
            (y =
              (r.get(c, "events") || Object.create(null))[t.type] &&
              r.get(c, "handle")),
            y && y.apply(c, e),
            (y = v && c[v]),
            y &&
              y.apply &&
              et(c) &&
              ((t.result = y.apply(c, e)),
              t.result === !1 && t.preventDefault());
        return (
          (t.type = h),
          s ||
            t.isDefaultPrevented() ||
            ((!a._default || a._default.apply(b.pop(), e) === !1) &&
              et(o) &&
              v &&
              u(o[h]) &&
              !it(o) &&
              ((l = o[v]),
              l && (o[v] = null),
              (i.event.triggered = h),
              t.isPropagationStopped() && w.addEventListener(h, fr),
              o[h](),
              t.isPropagationStopped() && w.removeEventListener(h, fr),
              (i.event.triggered = undefined),
              l && (o[v] = l))),
          t.result
        );
      }
    },
    simulate: function (n, t, r) {
      var u = i.extend(new i.Event(), r, {
        type: n,
        isSimulated: !0,
      });
      i.event.trigger(u, null, t);
    },
  });
  i.fn.extend({
    trigger: function (n, t) {
      return this.each(function () {
        i.event.trigger(n, t, this);
      });
    },
    triggerHandler: function (n, t) {
      var r = this[0];
      if (r) return i.event.trigger(n, t, r, !0);
    },
  });
  e.focusin ||
    i.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (n, t) {
        var u = function (n) {
          i.event.simulate(t, n.target, i.event.fix(n));
        };
        i.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              f = r.access(i, t);
            f || i.addEventListener(n, u, !0);
            r.access(i, t, (f || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              f = r.access(i, t) - 1;
            f
              ? r.access(i, t, f)
              : (i.removeEventListener(n, u, !0), r.remove(i, t));
          },
        };
      }
    );
  var gt = n.location,
    yf = {
      guid: Date.now(),
    },
    er = /\?/;
  i.parseXML = function (t) {
    var r, u;
    if (!t || typeof t != "string") return null;
    try {
      r = new n.DOMParser().parseFromString(t, "text/xml");
    } catch (f) {}
    return (
      (u = r && r.getElementsByTagName("parsererror")[0]),
      (!r || u) &&
        i.error(
          "Invalid XML: " +
            (u
              ? i
                  .map(u.childNodes, function (n) {
                    return n.textContent;
                  })
                  .join("\n")
              : t)
        ),
      r
    );
  };
  var so = /\[\]$/,
    pf = /\r?\n/g,
    ho = /^(?:submit|button|image|reset|file)$/i,
    co = /^(?:input|select|textarea|keygen)/i;
  i.param = function (n, t) {
    var r,
      f = [],
      e = function (n, t) {
        var i = u(t) ? t() : t;
        f[f.length] =
          encodeURIComponent(n) + "=" + encodeURIComponent(i == null ? "" : i);
      };
    if (n == null) return "";
    if (Array.isArray(n) || (n.jquery && !i.isPlainObject(n)))
      i.each(n, function () {
        e(this.name, this.value);
      });
    else for (r in n) or(r, n[r], t, e);
    return f.join("&");
  };
  i.fn.extend({
    serialize: function () {
      return i.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var n = i.prop(this, "elements");
        return n ? i.makeArray(n) : this;
      })
        .filter(function () {
          var n = this.type;
          return (
            this.name &&
            !i(this).is(":disabled") &&
            co.test(this.nodeName) &&
            !ho.test(n) &&
            (this.checked || !kt.test(n))
          );
        })
        .map(function (n, t) {
          var r = i(this).val();
          return r == null
            ? null
            : Array.isArray(r)
            ? i.map(r, function (n) {
                return {
                  name: t.name,
                  value: n.replace(pf, "\r\n"),
                };
              })
            : {
                name: t.name,
                value: r.replace(pf, "\r\n"),
              };
        })
        .get();
    },
  });
  var lo = /%20/g,
    ao = /#.*$/,
    vo = /([?&])_=[^&]*/,
    yo = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    po = /^(?:GET|HEAD)$/,
    wo = /^\/\//,
    wf = {},
    sr = {},
    bf = "*/".concat("*"),
    hr = f.createElement("a");
  return (
    (hr.href = gt.href),
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: gt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            gt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": bf,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": i.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (n, t) {
        return t ? cr(cr(n, i.ajaxSettings), t) : cr(i.ajaxSettings, n);
      },
      ajaxPrefilter: kf(wf),
      ajaxTransport: kf(sr),
      ajax: function (t, r) {
        function b(t, r, f, l) {
          var v,
            rt,
            g,
            p,
            b,
            a = r;
          s ||
            ((s = !0),
            d && n.clearTimeout(d),
            (c = undefined),
            (k = l || ""),
            (e.readyState = t > 0 ? 4 : 0),
            (v = (t >= 200 && t < 300) || t === 304),
            f && (p = bo(u, e, f)),
            !v &&
              i.inArray("script", u.dataTypes) > -1 &&
              i.inArray("json", u.dataTypes) < 0 &&
              (u.converters["text script"] = function () {}),
            (p = ko(u, p, e, v)),
            v
              ? (u.ifModified &&
                  ((b = e.getResponseHeader("Last-Modified")),
                  b && (i.lastModified[o] = b),
                  (b = e.getResponseHeader("etag")),
                  b && (i.etag[o] = b)),
                t === 204 || u.type === "HEAD"
                  ? (a = "nocontent")
                  : t === 304
                  ? (a = "notmodified")
                  : ((a = p.state), (rt = p.data), (g = p.error), (v = !g)))
              : ((g = a), (t || !a) && ((a = "error"), t < 0 && (t = 0))),
            (e.status = t),
            (e.statusText = (r || a) + ""),
            v ? tt.resolveWith(h, [rt, a, e]) : tt.rejectWith(h, [e, a, g]),
            e.statusCode(w),
            (w = undefined),
            y &&
              nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : g]),
            it.fireWith(h, [e, a]),
            y &&
              (nt.trigger("ajaxComplete", [e, u]),
              --i.active || i.event.trigger("ajaxStop")));
        }
        typeof t == "object" && ((r = t), (t = undefined));
        r = r || {};
        var c,
          o,
          k,
          v,
          d,
          l,
          s,
          y,
          g,
          p,
          u = i.ajaxSetup({}, r),
          h = u.context || u,
          nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
          tt = i.Deferred(),
          it = i.Callbacks("once memory"),
          w = u.statusCode || {},
          rt = {},
          ut = {},
          ft = "canceled",
          e = {
            readyState: 0,
            getResponseHeader: function (n) {
              var t;
              if (s) {
                if (!v)
                  for (v = {}; (t = yo.exec(k)); )
                    v[t[1].toLowerCase() + " "] = (
                      v[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = v[n.toLowerCase() + " "];
              }
              return t == null ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return s ? k : null;
            },
            setRequestHeader: function (n, t) {
              return (
                s == null &&
                  ((n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n),
                  (rt[n] = t)),
                this
              );
            },
            overrideMimeType: function (n) {
              return s == null && (u.mimeType = n), this;
            },
            statusCode: function (n) {
              var t;
              if (n)
                if (s) e.always(n[e.status]);
                else for (t in n) w[t] = [w[t], n[t]];
              return this;
            },
            abort: function (n) {
              var t = n || ft;
              return c && c.abort(t), b(0, t), this;
            },
          };
        if (
          (tt.promise(e),
          (u.url = ((t || u.url || gt.href) + "").replace(
            wo,
            gt.protocol + "//"
          )),
          (u.type = r.method || r.type || u.method || u.type),
          (u.dataTypes = (u.dataType || "*").toLowerCase().match(a) || [""]),
          u.crossDomain == null)
        ) {
          l = f.createElement("a");
          try {
            l.href = u.url;
            l.href = l.href;
            u.crossDomain =
              hr.protocol + "//" + hr.host != l.protocol + "//" + l.host;
          } catch (et) {
            u.crossDomain = !0;
          }
        }
        if (
          (u.data &&
            u.processData &&
            typeof u.data != "string" &&
            (u.data = i.param(u.data, u.traditional)),
          df(wf, u, r, e),
          s)
        )
          return e;
        y = i.event && u.global;
        y && i.active++ == 0 && i.event.trigger("ajaxStart");
        u.type = u.type.toUpperCase();
        u.hasContent = !po.test(u.type);
        o = u.url.replace(ao, "");
        u.hasContent
          ? u.data &&
            u.processData &&
            (u.contentType || "").indexOf(
              "application/x-www-form-urlencoded"
            ) === 0 &&
            (u.data = u.data.replace(lo, "+"))
          : ((p = u.url.slice(o.length)),
            u.data &&
              (u.processData || typeof u.data == "string") &&
              ((o += (er.test(o) ? "&" : "?") + u.data), delete u.data),
            u.cache === !1 &&
              ((o = o.replace(vo, "$1")),
              (p = (er.test(o) ? "&" : "?") + "_=" + yf.guid++ + p)),
            (u.url = o + p));
        u.ifModified &&
          (i.lastModified[o] &&
            e.setRequestHeader("If-Modified-Since", i.lastModified[o]),
          i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
        ((u.data && u.hasContent && u.contentType !== !1) || r.contentType) &&
          e.setRequestHeader("Content-Type", u.contentType);
        e.setRequestHeader(
          "Accept",
          u.dataTypes[0] && u.accepts[u.dataTypes[0]]
            ? u.accepts[u.dataTypes[0]] +
                (u.dataTypes[0] !== "*" ? ", " + bf + "; q=0.01" : "")
            : u.accepts["*"]
        );
        for (g in u.headers) e.setRequestHeader(g, u.headers[g]);
        if (u.beforeSend && (u.beforeSend.call(h, e, u) === !1 || s))
          return e.abort();
        if (
          ((ft = "abort"),
          it.add(u.complete),
          e.done(u.success),
          e.fail(u.error),
          (c = df(sr, u, r, e)),
          c)
        ) {
          if (((e.readyState = 1), y && nt.trigger("ajaxSend", [e, u]), s))
            return e;
          u.async &&
            u.timeout > 0 &&
            (d = n.setTimeout(function () {
              e.abort("timeout");
            }, u.timeout));
          try {
            s = !1;
            c.send(rt, b);
          } catch (et) {
            if (s) throw et;
            b(-1, et);
          }
        } else b(-1, "No Transport");
        return e;
      },
      getJSON: function (n, t, r) {
        return i.get(n, t, r, "json");
      },
      getScript: function (n, t) {
        return i.get(n, undefined, t, "script");
      },
    }),
    i.each(["get", "post"], function (n, t) {
      i[t] = function (n, r, f, e) {
        return (
          u(r) && ((e = e || f), (f = r), (r = undefined)),
          i.ajax(
            i.extend(
              {
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f,
              },
              i.isPlainObject(n) && n
            )
          )
        );
      };
    }),
    i.ajaxPrefilter(function (n) {
      for (var t in n.headers)
        t.toLowerCase() === "content-type" &&
          (n.contentType = n.headers[t] || "");
    }),
    (i._evalUrl = function (n, t, r) {
      return i.ajax({
        url: n,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {},
        },
        dataFilter: function (n) {
          i.globalEval(n, t, r);
        },
      });
    }),
    i.fn.extend({
      wrapAll: function (n) {
        var t;
        return (
          this[0] &&
            (u(n) && (n = n.call(this[0])),
            (t = i(n, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var n = this; n.firstElementChild; )
                  n = n.firstElementChild;
                return n;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return u(n)
          ? this.each(function (t) {
              i(this).wrapInner(n.call(this, t));
            })
          : this.each(function () {
              var t = i(this),
                r = t.contents();
              r.length ? r.wrapAll(n) : t.append(n);
            });
      },
      wrap: function (n) {
        var t = u(n);
        return this.each(function (r) {
          i(this).wrapAll(t ? n.call(this, r) : n);
        });
      },
      unwrap: function (n) {
        return (
          this.parent(n)
            .not("body")
            .each(function () {
              i(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (i.expr.pseudos.hidden = function (n) {
      return !i.expr.pseudos.visible(n);
    }),
    (i.expr.pseudos.visible = function (n) {
      return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length);
    }),
    (i.ajaxSettings.xhr = function () {
      try {
        return new n.XMLHttpRequest();
      } catch (t) {}
    }),
    (gf = {
      0: 200,
      1223: 204,
    }),
    (yt = i.ajaxSettings.xhr()),
    (e.cors = !!yt && "withCredentials" in yt),
    (e.ajax = yt = !!yt),
    i.ajaxTransport(function (t) {
      var i, r;
      if (e.cors || (yt && !t.crossDomain))
        return {
          send: function (u, f) {
            var o,
              e = t.xhr();
            if (
              (e.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (o in t.xhrFields) e[o] = t.xhrFields[o];
            t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
            t.crossDomain ||
              u["X-Requested-With"] ||
              (u["X-Requested-With"] = "XMLHttpRequest");
            for (o in u) e.setRequestHeader(o, u[o]);
            i = function (n) {
              return function () {
                i &&
                  ((i =
                    r =
                    e.onload =
                    e.onerror =
                    e.onabort =
                    e.ontimeout =
                    e.onreadystatechange =
                      null),
                  n === "abort"
                    ? e.abort()
                    : n === "error"
                    ? typeof e.status != "number"
                      ? f(0, "error")
                      : f(e.status, e.statusText)
                    : f(
                        gf[e.status] || e.status,
                        e.statusText,
                        (e.responseType || "text") !== "text" ||
                          typeof e.responseText != "string"
                          ? {
                              binary: e.response,
                            }
                          : {
                              text: e.responseText,
                            },
                        e.getAllResponseHeaders()
                      ));
              };
            };
            e.onload = i();
            r = e.onerror = e.ontimeout = i("error");
            e.onabort !== undefined
              ? (e.onabort = r)
              : (e.onreadystatechange = function () {
                  e.readyState === 4 &&
                    n.setTimeout(function () {
                      i && r();
                    });
                });
            i = i("abort");
            try {
              e.send((t.hasContent && t.data) || null);
            } catch (s) {
              if (i) throw s;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    i.ajaxPrefilter(function (n) {
      n.crossDomain && (n.contents.script = !1);
    }),
    i.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (n) {
          return i.globalEval(n), n;
        },
      },
    }),
    i.ajaxPrefilter("script", function (n) {
      n.cache === undefined && (n.cache = !1);
      n.crossDomain && (n.type = "GET");
    }),
    i.ajaxTransport("script", function (n) {
      if (n.crossDomain || n.scriptAttrs) {
        var r, t;
        return {
          send: function (u, e) {
            r = i("<script>")
              .attr(n.scriptAttrs || {})
              .prop({
                charset: n.scriptCharset,
                src: n.url,
              })
              .on(
                "load error",
                (t = function (n) {
                  r.remove();
                  t = null;
                  n && e(n.type === "error" ? 404 : 200, n.type);
                })
              );
            f.head.appendChild(r[0]);
          },
          abort: function () {
            t && t();
          },
        };
      }
    }),
    (lr = []),
    (ci = /(=)\?(?=&|$)|\?\?/),
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var n = lr.pop() || i.expando + "_" + yf.guid++;
        return (this[n] = !0), n;
      },
    }),
    i.ajaxPrefilter("json jsonp", function (t, r, f) {
      var e,
        o,
        s,
        h =
          t.jsonp !== !1 &&
          (ci.test(t.url)
            ? "url"
            : typeof t.data == "string" &&
              (t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) === 0 &&
              ci.test(t.data) &&
              "data");
      if (h || t.dataTypes[0] === "jsonp")
        return (
          (e = t.jsonpCallback =
            u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          h
            ? (t[h] = t[h].replace(ci, "$1" + e))
            : t.jsonp !== !1 &&
              (t.url += (er.test(t.url) ? "&" : "?") + t.jsonp + "=" + e),
          (t.converters["script json"] = function () {
            return s || i.error(e + " was not called"), s[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = n[e]),
          (n[e] = function () {
            s = arguments;
          }),
          f.always(function () {
            o === undefined ? i(n).removeProp(e) : (n[e] = o);
            t[e] && ((t.jsonpCallback = r.jsonpCallback), lr.push(e));
            s && u(o) && o(s[0]);
            s = o = undefined;
          }),
          "script"
        );
    }),
    (e.createHTMLDocument = (function () {
      var n = f.implementation.createHTMLDocument("").body;
      return (
        (n.innerHTML = "<form></form><form></form>"), n.childNodes.length === 2
      );
    })()),
    (i.parseHTML = function (n, t, r) {
      if (typeof n != "string") return [];
      typeof t == "boolean" && ((r = t), (t = !1));
      var s, u, o;
      return (t ||
        (e.createHTMLDocument
          ? ((t = f.implementation.createHTMLDocument("")),
            (s = t.createElement("base")),
            (s.href = f.location.href),
            t.head.appendChild(s))
          : (t = f)),
      (u = vi.exec(n)),
      (o = !r && []),
      u)
        ? [t.createElement(u[1])]
        : ((u = vu([n], t, o)),
          o && o.length && i(o).remove(),
          i.merge([], u.childNodes));
    }),
    (i.fn.load = function (n, t, r) {
      var f,
        s,
        h,
        e = this,
        o = n.indexOf(" ");
      return (
        o > -1 && ((f = nt(n.slice(o))), (n = n.slice(0, o))),
        u(t)
          ? ((r = t), (t = undefined))
          : t && typeof t == "object" && (s = "POST"),
        e.length > 0 &&
          i
            .ajax({
              url: n,
              type: s || "GET",
              dataType: "html",
              data: t,
            })
            .done(function (n) {
              h = arguments;
              e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n);
            })
            .always(
              r &&
                function (n, t) {
                  e.each(function () {
                    r.apply(this, h || [n.responseText, t, n]);
                  });
                }
            ),
        this
      );
    }),
    (i.expr.pseudos.animated = function (n) {
      return i.grep(i.timers, function (t) {
        return n === t.elem;
      }).length;
    }),
    (i.offset = {
      setOffset: function (n, t, r) {
        var o,
          s,
          h,
          c,
          f,
          l,
          y,
          a = i.css(n, "position"),
          v = i(n),
          e = {};
        a === "static" && (n.style.position = "relative");
        f = v.offset();
        h = i.css(n, "top");
        l = i.css(n, "left");
        y = (a === "absolute" || a === "fixed") && (h + l).indexOf("auto") > -1;
        y
          ? ((o = v.position()), (c = o.top), (s = o.left))
          : ((c = parseFloat(h) || 0), (s = parseFloat(l) || 0));
        u(t) && (t = t.call(n, r, i.extend({}, f)));
        t.top != null && (e.top = t.top - f.top + c);
        t.left != null && (e.left = t.left - f.left + s);
        "using" in t ? t.using.call(n, e) : v.css(e);
      },
    }),
    i.fn.extend({
      offset: function (n) {
        if (arguments.length)
          return n === undefined
            ? this
            : this.each(function (t) {
                i.offset.setOffset(this, n, t);
              });
        var r,
          u,
          t = this[0];
        if (t)
          return t.getClientRects().length
            ? ((r = t.getBoundingClientRect()),
              (u = t.ownerDocument.defaultView),
              {
                top: r.top + u.pageYOffset,
                left: r.left + u.pageXOffset,
              })
            : {
                top: 0,
                left: 0,
              };
      },
      position: function () {
        if (this[0]) {
          var n,
            u,
            f,
            t = this[0],
            r = {
              top: 0,
              left: 0,
            };
          if (i.css(t, "position") === "fixed") u = t.getBoundingClientRect();
          else {
            for (
              u = this.offset(),
                f = t.ownerDocument,
                n = t.offsetParent || f.documentElement;
              n &&
              (n === f.body || n === f.documentElement) &&
              i.css(n, "position") === "static";

            )
              n = n.parentNode;
            n &&
              n !== t &&
              n.nodeType === 1 &&
              ((r = i(n).offset()),
              (r.top += i.css(n, "borderTopWidth", !0)),
              (r.left += i.css(n, "borderLeftWidth", !0)));
          }
          return {
            top: u.top - r.top - i.css(t, "marginTop", !0),
            left: u.left - r.left - i.css(t, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var n = this.offsetParent;
            n && i.css(n, "position") === "static";

          )
            n = n.offsetParent;
          return n || g;
        });
      },
    }),
    i.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function (i) {
          return w(
            this,
            function (n, i, u) {
              var f;
              if (
                (it(n) ? (f = n) : n.nodeType === 9 && (f = n.defaultView),
                u === undefined)
              )
                return f ? f[t] : n[i];
              f
                ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset)
                : (n[i] = u);
            },
            n,
            i,
            arguments.length
          );
        };
      }
    ),
    i.each(["top", "left"], function (n, t) {
      i.cssHooks[t] = du(e.pixelPosition, function (n, r) {
        if (r)
          return (r = dt(n, t)), di.test(r) ? i(n).position()[t] + "px" : r;
      });
    }),
    i.each(
      {
        Height: "height",
        Width: "width",
      },
      function (n, t) {
        i.each(
          {
            padding: "inner" + n,
            content: t,
            "": "outer" + n,
          },
          function (r, u) {
            i.fn[u] = function (f, e) {
              var o = arguments.length && (r || typeof f != "boolean"),
                s = r || (f === !0 || e === !0 ? "margin" : "border");
              return w(
                this,
                function (t, r, f) {
                  var e;
                  return it(t)
                    ? u.indexOf("outer") === 0
                      ? t["inner" + n]
                      : t.document.documentElement["client" + n]
                    : t.nodeType === 9
                    ? ((e = t.documentElement),
                      Math.max(
                        t.body["scroll" + n],
                        e["scroll" + n],
                        t.body["offset" + n],
                        e["offset" + n],
                        e["client" + n]
                      ))
                    : f === undefined
                    ? i.css(t, r, s)
                    : i.style(t, r, f, s);
                },
                t,
                o ? f : undefined,
                o
              );
            };
          }
        );
      }
    ),
    i.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (n, t) {
        i.fn[t] = function (n) {
          return this.on(t, n);
        };
      }
    ),
    i.fn.extend({
      bind: function (n, t, i) {
        return this.on(n, null, t, i);
      },
      unbind: function (n, t) {
        return this.off(n, null, t);
      },
      delegate: function (n, t, i, r) {
        return this.on(t, n, i, r);
      },
      undelegate: function (n, t, i) {
        return arguments.length === 1
          ? this.off(n, "**")
          : this.off(t, n || "**", i);
      },
      hover: function (n, t) {
        return this.mouseenter(n).mouseleave(t || n);
      },
    }),
    i.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (n, t) {
        i.fn[t] = function (n, i) {
          return arguments.length > 0
            ? this.on(t, null, n, i)
            : this.trigger(t);
        };
      }
    ),
    (ne = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g),
    (i.proxy = function (n, t) {
      var f, e, r;
      return (typeof t == "string" && ((f = n[t]), (t = n), (n = f)), !u(n))
        ? undefined
        : ((e = k.call(arguments, 2)),
          (r = function () {
            return n.apply(t || this, e.concat(k.call(arguments)));
          }),
          (r.guid = n.guid = n.guid || i.guid++),
          r);
    }),
    (i.holdReady = function (n) {
      n ? i.readyWait++ : i.ready(!0);
    }),
    (i.isArray = Array.isArray),
    (i.parseJSON = JSON.parse),
    (i.nodeName = l),
    (i.isFunction = u),
    (i.isWindow = it),
    (i.camelCase = y),
    (i.type = rt),
    (i.now = Date.now),
    (i.isNumeric = function (n) {
      var t = i.type(n);
      return (t === "number" || t === "string") && !isNaN(n - parseFloat(n));
    }),
    (i.trim = function (n) {
      return n == null ? "" : (n + "").replace(ne, "$1");
    }),
    typeof define == "function" &&
      define.amd &&
      define("jquery", [], function () {
        return i;
      }),
    (te = n.jQuery),
    (ie = n.$),
    (i.noConflict = function (t) {
      return n.$ === i && (n.$ = ie), t && n.jQuery === i && (n.jQuery = te), i;
    }),
    typeof t == "undefined" && (n.jQuery = n.$ = i),
    i
  );
});
/*!
 * Bootstrap v4.6.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
(function (n, t) {
  typeof exports == "object" && typeof module != "undefined"
    ? t(exports, require("jquery"))
    : typeof define == "function" && define.amd
    ? define(["exports", "jquery"], t)
    : ((n = typeof globalThis != "undefined" ? globalThis : n || self),
      t((n.bootstrap = {}), n.jQuery));
})(this, function (n, t) {
  "use strict";

  function cs(n) {
    return n && typeof n == "object" && "default" in n
      ? n
      : {
          default: n,
        };
  }

  function af(n, t) {
    for (var i, r = 0; r < t.length; r++)
      (i = t[r]),
        (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(n, i.key, i);
  }

  function s(n, t, i) {
    return (
      t && af(n.prototype, t),
      i && af(n, i),
      Object.defineProperty(n, "prototype", {
        writable: !1,
      }),
      n
    );
  }

  function u() {
    return (
      (u = Object.assign
        ? Object.assign.bind()
        : function (n) {
            for (var i, r, t = 1; t < arguments.length; t++) {
              i = arguments[t];
              for (r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
            }
            return n;
          }),
      u.apply(this, arguments)
    );
  }

  function ls(n, t) {
    n.prototype = Object.create(t.prototype);
    n.prototype.constructor = n;
    fu(n, t);
  }

  function fu(n, t) {
    return (
      (fu = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, t) {
            return (n.__proto__ = t), n;
          }),
      fu(n, t)
    );
  }

  function ys(n) {
    return n === null || typeof n == "undefined"
      ? "" + n
      : {}.toString
          .call(n)
          .match(/\s([a-z]+)/i)[1]
          .toLowerCase();
  }

  function ps() {
    return {
      bindType: gi,
      delegateType: gi,
      handle: function (n) {
        return i["default"](n.target).is(this)
          ? n.handleObj.handler.apply(this, arguments)
          : undefined;
      },
    };
  }

  function ws(n) {
    var u = this,
      t = !1;
    i["default"](this).one(r.TRANSITION_END, function () {
      t = !0;
    });
    return (
      setTimeout(function () {
        t || r.triggerTransitionEnd(u);
      }, n),
      this
    );
  }

  function bs() {
    i["default"].fn.emulateTransitionEnd = ws;
    i["default"].event.special[r.TRANSITION_END] = ps();
  }

  function kl(n) {
    var t = !1;
    return function () {
      t ||
        ((t = !0),
        window.Promise.resolve().then(function () {
          t = !1;
          n();
        }));
    };
  }

  function dl(n) {
    var t = !1;
    return function () {
      t ||
        ((t = !0),
        setTimeout(function () {
          t = !1;
          n();
        }, gf));
    };
  }

  function ie(n) {
    return n && {}.toString.call(n) === "[object Function]";
  }

  function d(n, t) {
    if (n.nodeType !== 1) return [];
    var r = n.ownerDocument.defaultView,
      i = r.getComputedStyle(n, null);
    return t ? i[t] : i;
  }

  function lu(n) {
    return n.nodeName === "HTML" ? n : n.parentNode || n.host;
  }

  function ri(n) {
    if (!n) return document.body;
    switch (n.nodeName) {
      case "HTML":
      case "BODY":
        return n.ownerDocument.body;
      case "#document":
        return n.body;
    }
    var t = d(n),
      i = t.overflow,
      r = t.overflowX,
      u = t.overflowY;
    return /(auto|scroll|overlay)/.test(i + u + r) ? n : ri(lu(n));
  }

  function re(n) {
    return n && n.referenceNode ? n.referenceNode : n;
  }

  function st(n) {
    return n === 11 ? au : n === 10 ? vu : au || vu;
  }

  function ht(n) {
    var r, t, i;
    if (!n) return document.documentElement;
    for (
      r = st(10) ? document.body : null, t = n.offsetParent || null;
      t === r && n.nextElementSibling;

    )
      t = (n = n.nextElementSibling).offsetParent;
    return ((i = t && t.nodeName), !i || i === "BODY" || i === "HTML")
      ? n
        ? n.ownerDocument.documentElement
        : document.documentElement
      : ["TH", "TD", "TABLE"].indexOf(t.nodeName) !== -1 &&
        d(t, "position") === "static"
      ? ht(t)
      : t;
  }

  function gl(n) {
    var t = n.nodeName;
    return t === "BODY" ? !1 : t === "HTML" || ht(n.firstElementChild) === n;
  }

  function yu(n) {
    return n.parentNode !== null ? yu(n.parentNode) : n;
  }

  function sr(n, t) {
    var i, u;
    if (!n || !n.nodeType || !t || !t.nodeType) return document.documentElement;
    var f = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      e = f ? n : t,
      o = f ? t : n,
      r = document.createRange();
    return (r.setStart(e, 0),
    r.setEnd(o, 0),
    (i = r.commonAncestorContainer),
    (n !== i && t !== i) || e.contains(o))
      ? gl(i)
        ? i
        : ht(i)
      : ((u = yu(n)), u.host ? sr(u.host, t) : sr(n, yu(t).host));
  }

  function ct(n) {
    var f =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : "top",
      t = f === "top" ? "scrollTop" : "scrollLeft",
      i = n.nodeName,
      r,
      u;
    return i === "BODY" || i === "HTML"
      ? ((r = n.ownerDocument.documentElement),
        (u = n.ownerDocument.scrollingElement || r),
        u[t])
      : n[t];
  }

  function na(n, t) {
    var f =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1,
      r = ct(t, "top"),
      u = ct(t, "left"),
      i = f ? -1 : 1;
    return (
      (n.top += r * i),
      (n.bottom += r * i),
      (n.left += u * i),
      (n.right += u * i),
      n
    );
  }

  function ue(n, t) {
    var i = t === "x" ? "Left" : "Top",
      r = i === "Left" ? "Right" : "Bottom";
    return (
      parseFloat(n["border" + i + "Width"]) +
      parseFloat(n["border" + r + "Width"])
    );
  }

  function fe(n, t, i, r) {
    return Math.max(
      t["offset" + n],
      t["scroll" + n],
      i["client" + n],
      i["offset" + n],
      i["scroll" + n],
      st(10)
        ? parseInt(i["offset" + n]) +
            parseInt(r["margin" + (n === "Height" ? "Top" : "Left")]) +
            parseInt(r["margin" + (n === "Height" ? "Bottom" : "Right")])
        : 0
    );
  }

  function ee(n) {
    var i = n.body,
      t = n.documentElement,
      r = st(10) && getComputedStyle(t);
    return {
      height: fe("Height", i, t, r),
      width: fe("Width", i, t, r),
    };
  }

  function y(n) {
    return o({}, n, {
      right: n.left + n.width,
      bottom: n.top + n.height,
    });
  }

  function pu(n) {
    var t = {},
      r,
      u,
      o;
    try {
      st(10)
        ? ((t = n.getBoundingClientRect()),
          (r = ct(n, "top")),
          (u = ct(n, "left")),
          (t.top += r),
          (t.left += u),
          (t.bottom += r),
          (t.right += u))
        : (t = n.getBoundingClientRect());
    } catch (l) {}
    var i = {
        left: t.left,
        top: t.top,
        width: t.right - t.left,
        height: t.bottom - t.top,
      },
      s = n.nodeName === "HTML" ? ee(n.ownerDocument) : {},
      h = s.width || n.clientWidth || i.width,
      c = s.height || n.clientHeight || i.height,
      f = n.offsetWidth - h,
      e = n.offsetHeight - c;
    return (
      (f || e) &&
        ((o = d(n)),
        (f -= ue(o, "x")),
        (e -= ue(o, "y")),
        (i.width -= f),
        (i.height -= e)),
      y(i)
    );
  }

  function wu(n, t) {
    var l =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1,
      a = st(10),
      v = t.nodeName === "HTML",
      u = pu(n),
      r = pu(t),
      s = ri(n),
      f = d(t),
      h = parseFloat(f.borderTopWidth),
      c = parseFloat(f.borderLeftWidth),
      i,
      e,
      o;
    return (
      l && v && ((r.top = Math.max(r.top, 0)), (r.left = Math.max(r.left, 0))),
      (i = y({
        top: u.top - r.top - h,
        left: u.left - r.left - c,
        width: u.width,
        height: u.height,
      })),
      (i.marginTop = 0),
      (i.marginLeft = 0),
      !a &&
        v &&
        ((e = parseFloat(f.marginTop)),
        (o = parseFloat(f.marginLeft)),
        (i.top -= h - e),
        (i.bottom -= h - e),
        (i.left -= c - o),
        (i.right -= c - o),
        (i.marginTop = e),
        (i.marginLeft = o)),
      (a && !l ? t.contains(s) : t === s && s.nodeName !== "BODY") &&
        (i = na(i, t)),
      i
    );
  }

  function ra(n) {
    var r =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1,
      t = n.ownerDocument.documentElement,
      i = wu(n, t),
      u = Math.max(t.clientWidth, window.innerWidth || 0),
      f = Math.max(t.clientHeight, window.innerHeight || 0),
      e = r ? 0 : ct(t),
      o = r ? 0 : ct(t, "left"),
      s = {
        top: e - i.top + i.marginTop,
        left: o - i.left + i.marginLeft,
        width: u,
        height: f,
      };
    return y(s);
  }

  function oe(n) {
    var i = n.nodeName,
      t;
    return i === "BODY" || i === "HTML"
      ? !1
      : d(n, "position") === "fixed"
      ? !0
      : ((t = lu(n)), !t)
      ? !1
      : oe(t);
  }

  function se(n) {
    if (!n || !n.parentElement || st()) return document.documentElement;
    for (var t = n.parentElement; t && d(t, "transform") === "none"; )
      t = t.parentElement;
    return t || document.documentElement;
  }

  function bu(n, t, i, r) {
    var s =
        arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !1,
      u = {
        top: 0,
        left: 0,
      },
      h = s ? se(n) : sr(n, re(t)),
      e,
      f,
      o;
    if (r === "viewport") u = ra(h, s);
    else if (
      ((e = void 0),
      r === "scrollParent"
        ? ((e = ri(lu(t))),
          e.nodeName === "BODY" && (e = n.ownerDocument.documentElement))
        : (e = r === "window" ? n.ownerDocument.documentElement : r),
      (f = wu(e, h, s)),
      e.nodeName !== "HTML" || oe(h))
    )
      u = f;
    else {
      var c = ee(n.ownerDocument),
        l = c.height,
        a = c.width;
      u.top += f.top - f.marginTop;
      u.bottom = l + f.top;
      u.left += f.left - f.marginLeft;
      u.right = a + f.left;
    }
    return (
      (i = i || 0),
      (o = typeof i == "number"),
      (u.left += o ? i : i.left || 0),
      (u.top += o ? i : i.top || 0),
      (u.right -= o ? i : i.right || 0),
      (u.bottom -= o ? i : i.bottom || 0),
      u
    );
  }

  function ua(n) {
    var t = n.width,
      i = n.height;
    return t * i;
  }

  function he(n, t, i, r, u) {
    var l =
      arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    if (n.indexOf("auto") === -1) return n;
    var f = bu(i, r, l, u),
      e = {
        top: {
          width: f.width,
          height: t.top - f.top,
        },
        right: {
          width: f.right - t.right,
          height: f.height,
        },
        bottom: {
          width: f.width,
          height: f.bottom - t.bottom,
        },
        left: {
          width: t.left - f.left,
          height: f.height,
        },
      },
      s = Object.keys(e)
        .map(function (n) {
          return o(
            {
              key: n,
            },
            e[n],
            {
              area: ua(e[n]),
            }
          );
        })
        .sort(function (n, t) {
          return t.area - n.area;
        }),
      h = s.filter(function (n) {
        var t = n.width,
          r = n.height;
        return t >= i.clientWidth && r >= i.clientHeight;
      }),
      a = h.length > 0 ? h[0].key : s[0].key,
      c = n.split("-")[1];
    return a + (c ? "-" + c : "");
  }

  function ce(n, t, i) {
    var r =
        arguments.length > 3 && arguments[3] !== undefined
          ? arguments[3]
          : null,
      u = r ? se(t) : sr(t, re(i));
    return wu(i, u, r);
  }

  function le(n) {
    var i = n.ownerDocument.defaultView,
      t = i.getComputedStyle(n),
      r = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
      u = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
    return {
      width: n.offsetWidth + u,
      height: n.offsetHeight + r,
    };
  }

  function hr(n) {
    var t = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom",
    };
    return n.replace(/left|right|bottom|top/g, function (n) {
      return t[n];
    });
  }

  function ae(n, t, i) {
    i = i.split("-")[0];
    var r = le(n),
      e = {
        width: r.width,
        height: r.height,
      },
      u = ["right", "left"].indexOf(i) !== -1,
      o = u ? "top" : "left",
      f = u ? "left" : "top",
      s = u ? "height" : "width",
      h = u ? "width" : "height";
    return (
      (e[o] = t[o] + t[s] / 2 - r[s] / 2),
      (e[f] = i === f ? t[f] - r[h] : t[hr(f)]),
      e
    );
  }

  function ui(n, t) {
    return Array.prototype.find ? n.find(t) : n.filter(t)[0];
  }

  function fa(n, t, i) {
    if (Array.prototype.findIndex)
      return n.findIndex(function (n) {
        return n[t] === i;
      });
    var r = ui(n, function (n) {
      return n[t] === i;
    });
    return n.indexOf(r);
  }

  function ve(n, t, i) {
    var r = i === undefined ? n : n.slice(0, fa(n, "name", i));
    return (
      r.forEach(function (n) {
        n["function"] &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var i = n["function"] || n.fn;
        n.enabled &&
          ie(i) &&
          ((t.offsets.popper = y(t.offsets.popper)),
          (t.offsets.reference = y(t.offsets.reference)),
          (t = i(t, n)));
      }),
      t
    );
  }

  function ea() {
    if (!this.state.isDestroyed) {
      var n = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      if (
        ((n.offsets.reference = ce(
          this.state,
          this.popper,
          this.reference,
          this.options.positionFixed
        )),
        (n.placement = he(
          this.options.placement,
          n.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (n.originalPlacement = n.placement),
        (n.positionFixed = this.options.positionFixed),
        (n.offsets.popper = ae(this.popper, n.offsets.reference, n.placement)),
        (n.offsets.popper.position = this.options.positionFixed
          ? "fixed"
          : "absolute"),
        (n = ve(this.modifiers, n)),
        this.state.isCreated)
      )
        this.options.onUpdate(n);
      else {
        this.state.isCreated = !0;
        this.options.onCreate(n);
      }
    }
  }

  function ye(n, t) {
    return n.some(function (n) {
      var i = n.name,
        r = n.enabled;
      return r && i === t;
    });
  }

  function ku(n) {
    for (
      var i,
        r,
        u = [!1, "ms", "Webkit", "Moz", "O"],
        f = n.charAt(0).toUpperCase() + n.slice(1),
        t = 0;
      t < u.length;
      t++
    )
      if (
        ((i = u[t]),
        (r = i ? "" + i + f : n),
        typeof document.body.style[r] != "undefined")
      )
        return r;
    return null;
  }

  function oa() {
    return (
      (this.state.isDestroyed = !0),
      ye(this.modifiers, "applyStyle") &&
        (this.popper.removeAttribute("x-placement"),
        (this.popper.style.position = ""),
        (this.popper.style.top = ""),
        (this.popper.style.left = ""),
        (this.popper.style.right = ""),
        (this.popper.style.bottom = ""),
        (this.popper.style.willChange = ""),
        (this.popper.style[ku("transform")] = "")),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }

  function pe(n) {
    var t = n.ownerDocument;
    return t ? t.defaultView : window;
  }

  function we(n, t, i, r) {
    var f = n.nodeName === "BODY",
      u = f ? n.ownerDocument.defaultView : n;
    u.addEventListener(t, i, {
      passive: !0,
    });
    f || we(ri(u.parentNode), t, i, r);
    r.push(u);
  }

  function sa(n, t, i, r) {
    i.updateBound = r;
    pe(n).addEventListener("resize", i.updateBound, {
      passive: !0,
    });
    var u = ri(n);
    return (
      we(u, "scroll", i.updateBound, i.scrollParents),
      (i.scrollElement = u),
      (i.eventsEnabled = !0),
      i
    );
  }

  function ha() {
    this.state.eventsEnabled ||
      (this.state = sa(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }

  function ca(n, t) {
    return (
      pe(n).removeEventListener("resize", t.updateBound),
      t.scrollParents.forEach(function (n) {
        n.removeEventListener("scroll", t.updateBound);
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    );
  }

  function la() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = ca(this.reference, this.state)));
  }

  function du(n) {
    return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
  }

  function gu(n, t) {
    Object.keys(t).forEach(function (i) {
      var r = "";
      ["width", "height", "top", "right", "bottom", "left"].indexOf(i) !== -1 &&
        du(t[i]) &&
        (r = "px");
      n.style[i] = t[i] + r;
    });
  }

  function aa(n, t) {
    Object.keys(t).forEach(function (i) {
      var r = t[i];
      r !== !1 ? n.setAttribute(i, t[i]) : n.removeAttribute(i);
    });
  }

  function va(n) {
    return (
      gu(n.instance.popper, n.styles),
      aa(n.instance.popper, n.attributes),
      n.arrowElement &&
        Object.keys(n.arrowStyles).length &&
        gu(n.arrowElement, n.arrowStyles),
      n
    );
  }

  function ya(n, t, i, r, u) {
    var f = ce(u, t, n, i.positionFixed),
      e = he(
        i.placement,
        f,
        t,
        n,
        i.modifiers.flip.boundariesElement,
        i.modifiers.flip.padding
      );
    return (
      t.setAttribute("x-placement", e),
      gu(t, {
        position: i.positionFixed ? "fixed" : "absolute",
      }),
      i
    );
  }

  function pa(n, t) {
    var u = n.offsets,
      i = u.popper,
      l = u.reference,
      r = Math.round,
      a = Math.floor,
      f = function (n) {
        return n;
      },
      e = r(l.width),
      o = r(i.width),
      v = ["left", "right"].indexOf(n.placement) !== -1,
      s = n.placement.indexOf("-") !== -1,
      y = e % 2 == o % 2,
      p = e % 2 == 1 && o % 2 == 1,
      h = t ? (v || s || y ? r : a) : f,
      c = t ? r : f;
    return {
      left: h(p && !s && t ? i.left - 1 : i.left),
      top: c(i.top),
      bottom: c(i.bottom),
      right: h(i.right),
    };
  }

  function wa(n, t) {
    var w = t.x,
      b = t.y,
      k = n.offsets.popper,
      s = ui(n.instance.modifiers, function (n) {
        return n.name === "applyStyle";
      }).gpuAcceleration,
      v,
      y,
      p;
    s !== undefined &&
      console.warn(
        "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
      );
    var d = s !== undefined ? s : t.gpuAcceleration,
      u = ht(n.instance.popper),
      l = pu(u),
      i = {
        position: k.position,
      },
      r = pa(n, window.devicePixelRatio < 2 || !be),
      f = w === "bottom" ? "top" : "bottom",
      e = b === "right" ? "left" : "right",
      a = ku("transform"),
      h = void 0,
      c = void 0;
    return (
      (c =
        f === "bottom"
          ? u.nodeName === "HTML"
            ? -u.clientHeight + r.bottom
            : -l.height + r.bottom
          : r.top),
      (h =
        e === "right"
          ? u.nodeName === "HTML"
            ? -u.clientWidth + r.right
            : -l.width + r.right
          : r.left),
      d && a
        ? ((i[a] = "translate3d(" + h + "px, " + c + "px, 0)"),
          (i[f] = 0),
          (i[e] = 0),
          (i.willChange = "transform"))
        : ((v = f === "bottom" ? -1 : 1),
          (y = e === "right" ? -1 : 1),
          (i[f] = c * v),
          (i[e] = h * y),
          (i.willChange = f + ", " + e)),
      (p = {
        "x-placement": n.placement,
      }),
      (n.attributes = o({}, p, n.attributes)),
      (n.styles = o({}, i, n.styles)),
      (n.arrowStyles = o({}, n.offsets.arrow, n.arrowStyles)),
      n
    );
  }

  function ke(n, t, i) {
    var u = ui(n, function (n) {
        var i = n.name;
        return i === t;
      }),
      f =
        !!u &&
        n.some(function (n) {
          return n.name === i && n.enabled && n.order < u.order;
        }),
      r,
      e;
    return (
      f ||
        ((r = "`" + t + "`"),
        (e = "`" + i + "`"),
        console.warn(
          e +
            " modifier is required by " +
            r +
            " modifier in order to work, be sure to include it before " +
            r +
            "!"
        )),
      f
    );
  }

  function ba(n, t) {
    var o, r;
    if (!ke(n.instance.modifiers, "arrow", "keepTogether")) return n;
    if (((r = t.element), typeof r == "string")) {
      if (((r = n.instance.popper.querySelector(r)), !r)) return n;
    } else if (!n.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), n;
    var w = n.placement.split("-")[0],
      v = n.offsets,
      e = v.popper,
      u = v.reference,
      s = ["left", "right"].indexOf(w) !== -1,
      c = s ? "height" : "width",
      l = s ? "Top" : "Left",
      i = l.toLowerCase(),
      b = s ? "left" : "top",
      h = s ? "bottom" : "right",
      f = le(r)[c];
    u[h] - f < e[i] && (n.offsets.popper[i] -= e[i] - (u[h] - f));
    u[i] + f > e[h] && (n.offsets.popper[i] += u[i] + f - e[h]);
    n.offsets.popper = y(n.offsets.popper);
    var k = u[i] + u[c] / 2 - f / 2,
      p = d(n.instance.popper),
      g = parseFloat(p["margin" + l]),
      nt = parseFloat(p["border" + l + "Width"]),
      a = k - n.offsets.popper[i] - g - nt;
    return (
      (a = Math.max(Math.min(e[c] - f, a), 0)),
      (n.arrowElement = r),
      (n.offsets.arrow = ((o = {}), lt(o, i, Math.round(a)), lt(o, b, ""), o)),
      n
    );
  }

  function ka(n) {
    return n === "end" ? "start" : n === "start" ? "end" : n;
  }

  function de(n) {
    var r =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1,
      t = cr.indexOf(n),
      i = cr.slice(t + 1).concat(cr.slice(0, t));
    return r ? i.reverse() : i;
  }

  function da(n, t) {
    if (
      ye(n.instance.modifiers, "inner") ||
      (n.flipped && n.placement === n.originalPlacement)
    )
      return n;
    var f = bu(
        n.instance.popper,
        n.instance.reference,
        t.padding,
        t.boundariesElement,
        n.positionFixed
      ),
      i = n.placement.split("-")[0],
      e = hr(i),
      r = n.placement.split("-")[1] || "",
      u = [];
    switch (t.behavior) {
      case lr.FLIP:
        u = [i, e];
        break;
      case lr.CLOCKWISE:
        u = de(i);
        break;
      case lr.COUNTERCLOCKWISE:
        u = de(i, !0);
        break;
      default:
        u = t.behavior;
    }
    return (
      u.forEach(function (s, h) {
        if (i !== s || u.length === h + 1) return n;
        i = n.placement.split("-")[0];
        e = hr(i);
        var l = n.offsets.popper,
          v = n.offsets.reference,
          c = Math.floor,
          k =
            (i === "left" && c(l.right) > c(v.left)) ||
            (i === "right" && c(l.left) < c(v.right)) ||
            (i === "top" && c(l.bottom) > c(v.top)) ||
            (i === "bottom" && c(l.top) < c(v.bottom)),
          y = c(l.left) < c(f.left),
          p = c(l.right) > c(f.right),
          w = c(l.top) < c(f.top),
          b = c(l.bottom) > c(f.bottom),
          d =
            (i === "left" && y) ||
            (i === "right" && p) ||
            (i === "top" && w) ||
            (i === "bottom" && b),
          a = ["top", "bottom"].indexOf(i) !== -1,
          nt =
            !!t.flipVariations &&
            ((a && r === "start" && y) ||
              (a && r === "end" && p) ||
              (!a && r === "start" && w) ||
              (!a && r === "end" && b)),
          tt =
            !!t.flipVariationsByContent &&
            ((a && r === "start" && p) ||
              (a && r === "end" && y) ||
              (!a && r === "start" && b) ||
              (!a && r === "end" && w)),
          g = nt || tt;
        (k || d || g) &&
          ((n.flipped = !0),
          (k || d) && (i = u[h + 1]),
          g && (r = ka(r)),
          (n.placement = i + (r ? "-" + r : "")),
          (n.offsets.popper = o(
            {},
            n.offsets.popper,
            ae(n.instance.popper, n.offsets.reference, n.placement)
          )),
          (n = ve(n.instance.modifiers, n, "flip")));
      }),
      n
    );
  }

  function ga(n) {
    var o = n.offsets,
      u = o.popper,
      i = o.reference,
      s = n.placement.split("-")[0],
      r = Math.floor,
      f = ["top", "bottom"].indexOf(s) !== -1,
      e = f ? "right" : "bottom",
      t = f ? "left" : "top",
      h = f ? "width" : "height";
    return (
      u[e] < r(i[t]) && (n.offsets.popper[t] = r(i[t]) - u[h]),
      u[t] > r(i[e]) && (n.offsets.popper[t] = r(i[e])),
      n
    );
  }

  function nv(n, t, i, r) {
    var s = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      f = +s[1],
      u = s[2],
      e,
      h,
      o;
    if (!f) return n;
    if (u.indexOf("%") === 0) {
      e = void 0;
      switch (u) {
        case "%p":
          e = i;
          break;
        case "%":
        case "%r":
        default:
          e = r;
      }
      return (h = y(e)), (h[t] / 100) * f;
    }
    return u === "vh" || u === "vw"
      ? ((o = void 0),
        (o =
          u === "vh"
            ? Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              )
            : Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              )),
        (o / 100) * f)
      : f;
  }

  function tv(n, t, i, r) {
    var s = [0, 0],
      h = ["right", "left"].indexOf(r) !== -1,
      u = n.split(/(\+|\-)/).map(function (n) {
        return n.trim();
      }),
      f = u.indexOf(
        ui(u, function (n) {
          return n.search(/,|\s/) !== -1;
        })
      ),
      o,
      e;
    return (
      u[f] &&
        u[f].indexOf(",") === -1 &&
        console.warn(
          "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
        ),
      (o = /\s*,\s*|\s+/),
      (e =
        f !== -1
          ? [
              u.slice(0, f).concat([u[f].split(o)[0]]),
              [u[f].split(o)[1]].concat(u.slice(f + 1)),
            ]
          : [u]),
      (e = e.map(function (n, r) {
        var f = (r === 1 ? !h : h) ? "height" : "width",
          u = !1;
        return n
          .reduce(function (n, t) {
            return n[n.length - 1] === "" && ["+", "-"].indexOf(t) !== -1
              ? ((n[n.length - 1] = t), (u = !0), n)
              : u
              ? ((n[n.length - 1] += t), (u = !1), n)
              : n.concat(t);
          }, [])
          .map(function (n) {
            return nv(n, f, t, i);
          });
      })),
      e.forEach(function (n, t) {
        n.forEach(function (i, r) {
          du(i) && (s[t] += i * (n[r - 1] === "-" ? -1 : 1));
        });
      }),
      s
    );
  }

  function iv(n, t) {
    var f = t.offset,
      o = n.placement,
      e = n.offsets,
      i = e.popper,
      s = e.reference,
      u = o.split("-")[0],
      r = void 0;
    return (
      (r = du(+f) ? [+f, 0] : tv(f, i, s, u)),
      u === "left"
        ? ((i.top += r[0]), (i.left -= r[1]))
        : u === "right"
        ? ((i.top += r[0]), (i.left += r[1]))
        : u === "top"
        ? ((i.left += r[0]), (i.top -= r[1]))
        : u === "bottom" && ((i.left += r[0]), (i.top += r[1])),
      (n.popper = i),
      n
    );
  }

  function rv(n, t) {
    var f = t.boundariesElement || ht(n.instance.popper),
      u;
    n.instance.reference === f && (f = ht(f));
    var e = ku("transform"),
      r = n.instance.popper.style,
      s = r.top,
      h = r.left,
      c = r[e];
    r.top = "";
    r.left = "";
    r[e] = "";
    u = bu(
      n.instance.popper,
      n.instance.reference,
      t.padding,
      f,
      n.positionFixed
    );
    r.top = s;
    r.left = h;
    r[e] = c;
    t.boundaries = u;
    var l = t.priority,
      i = n.offsets.popper,
      a = {
        primary: function (n) {
          var r = i[n];
          return (
            i[n] < u[n] && !t.escapeWithReference && (r = Math.max(i[n], u[n])),
            lt({}, n, r)
          );
        },
        secondary: function (n) {
          var r = n === "right" ? "left" : "top",
            f = i[r];
          return (
            i[n] > u[n] &&
              !t.escapeWithReference &&
              (f = Math.min(i[r], u[n] - (n === "right" ? i.width : i.height))),
            lt({}, r, f)
          );
        },
      };
    return (
      l.forEach(function (n) {
        var t = ["left", "top"].indexOf(n) !== -1 ? "primary" : "secondary";
        i = o({}, i, a[t](n));
      }),
      (n.offsets.popper = i),
      n
    );
  }

  function uv(n) {
    var r = n.placement,
      c = r.split("-")[0],
      u = r.split("-")[1];
    if (u) {
      var f = n.offsets,
        i = f.reference,
        e = f.popper,
        s = ["bottom", "top"].indexOf(c) !== -1,
        t = s ? "left" : "top",
        h = s ? "width" : "height",
        l = {
          start: lt({}, t, i[t]),
          end: lt({}, t, i[t] + i[h] - e[h]),
        };
      n.offsets.popper = o({}, e, l[u]);
    }
    return n;
  }

  function fv(n) {
    if (!ke(n.instance.modifiers, "hide", "preventOverflow")) return n;
    var t = n.offsets.reference,
      i = ui(n.instance.modifiers, function (n) {
        return n.name === "preventOverflow";
      }).boundaries;
    if (
      t.bottom < i.top ||
      t.left > i.right ||
      t.top > i.bottom ||
      t.right < i.left
    ) {
      if (n.hide === !0) return n;
      n.hide = !0;
      n.attributes["x-out-of-boundaries"] = "";
    } else {
      if (n.hide === !1) return n;
      n.hide = !1;
      n.attributes["x-out-of-boundaries"] = !1;
    }
    return n;
  }

  function ev(n) {
    var r = n.placement,
      t = r.split("-")[0],
      u = n.offsets,
      i = u.popper,
      e = u.reference,
      f = ["left", "right"].indexOf(t) !== -1,
      o = ["top", "left"].indexOf(t) === -1;
    return (
      (i[f ? "left" : "top"] = e[t] - (o ? i[f ? "width" : "height"] : 0)),
      (n.placement = hr(r)),
      (n.offsets.popper = y(i)),
      n
    );
  }

  function ep(n, t) {
    var r = n.nodeName.toLowerCase(),
      u,
      i,
      f;
    if (t.indexOf(r) !== -1)
      return rp.indexOf(r) !== -1
        ? Boolean(up.test(n.nodeValue) || fp.test(n.nodeValue))
        : !0;
    for (
      u = t.filter(function (n) {
        return n instanceof RegExp;
      }),
        i = 0,
        f = u.length;
      i < f;
      i++
    )
      if (u[i].test(r)) return !0;
    return !1;
  }

  function po(n, t, i) {
    var r, e, o;
    if (n.length === 0) return n;
    if (i && typeof i == "function") return i(n);
    var s = new window.DOMParser(),
      u = s.parseFromString(n, "text/html"),
      h = Object.keys(t),
      f = [].slice.call(u.body.querySelectorAll("*")),
      c = function (n) {
        var i = f[n],
          e = i.nodeName.toLowerCase(),
          r,
          u;
        if (h.indexOf(i.nodeName.toLowerCase()) === -1)
          return i.parentNode.removeChild(i), "continue";
        r = [].slice.call(i.attributes);
        u = [].concat(t["*"] || [], t[e] || []);
        r.forEach(function (n) {
          ep(n, u) || i.removeAttribute(n.nodeName);
        });
      };
    for (r = 0, e = f.length; r < e; r++) (o = c(r)), o === "continue";
    return u.body.innerHTML;
  }
  var i = cs(t),
    gi = "transitionend",
    as = 1e6,
    vs = 1e3,
    r = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function (n) {
        do n += ~~(Math.random() * as);
        while (document.getElementById(n));
        return n;
      },
      getSelectorFromElement: function (n) {
        var t = n.getAttribute("data-target"),
          i;
        (t && t !== "#") ||
          ((i = n.getAttribute("href")), (t = i && i !== "#" ? i.trim() : ""));
        try {
          return document.querySelector(t) ? t : null;
        } catch (r) {
          return null;
        }
      },
      getTransitionDurationFromElement: function (n) {
        if (!n) return 0;
        var t = i["default"](n).css("transition-duration"),
          r = i["default"](n).css("transition-delay"),
          u = parseFloat(t),
          f = parseFloat(r);
        return !u && !f
          ? 0
          : ((t = t.split(",")[0]),
            (r = r.split(",")[0]),
            (parseFloat(t) + parseFloat(r)) * vs);
      },
      reflow: function (n) {
        return n.offsetHeight;
      },
      triggerTransitionEnd: function (n) {
        i["default"](n).trigger(gi);
      },
      supportsTransitionEnd: function () {
        return Boolean(gi);
      },
      isElement: function (n) {
        return (n[0] || n).nodeType;
      },
      typeCheckConfig: function (n, t, i) {
        for (var u in i)
          if (Object.prototype.hasOwnProperty.call(i, u)) {
            var e = i[u],
              f = t[u],
              o = f && r.isElement(f) ? "element" : ys(f);
            if (!new RegExp(e).test(o))
              throw new Error(
                n.toUpperCase() +
                  ": " +
                  ('Option "' + u + '" provided type "' + o + '" ') +
                  ('but expected type "' + e + '".')
              );
          }
      },
      findShadowRoot: function (n) {
        if (!document.documentElement.attachShadow) return null;
        if (typeof n.getRootNode == "function") {
          var t = n.getRootNode();
          return t instanceof ShadowRoot ? t : null;
        }
        return n instanceof ShadowRoot
          ? n
          : n.parentNode
          ? r.findShadowRoot(n.parentNode)
          : null;
      },
      jQueryDetection: function () {
        if (typeof i["default"] == "undefined")
          throw new TypeError(
            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
          );
        var n = i["default"].fn.jquery.split(" ")[0].split("."),
          t = 9;
        if (
          (n[0] < 2 && n[1] < t) ||
          (n[0] === 1 && n[1] === t && n[2] < 1) ||
          n[0] >= 4
        )
          throw new Error(
            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
          );
      },
    },
    ot,
    gf,
    ne,
    te,
    au,
    vu,
    be,
    nf,
    cr,
    lr;
  r.jQueryDetection();
  bs();
  var bt = "alert",
    ks = "4.6.2",
    nr = "bs.alert",
    eu = "." + nr,
    ds = i["default"].fn[bt],
    gs = "alert",
    nh = "fade",
    th = "show",
    ih = "close" + eu,
    rh = "closed" + eu,
    uh = "click" + eu + ".data-api",
    rt = (function () {
      function n(n) {
        this._element = n;
      }
      var t = n.prototype;
      return (
        (t.close = function (n) {
          var t = this._element,
            i;
          (n && (t = this._getRootElement(n)),
          (i = this._triggerCloseEvent(t)),
          i.isDefaultPrevented()) || this._removeElement(t);
        }),
        (t.dispose = function () {
          i["default"].removeData(this._element, nr);
          this._element = null;
        }),
        (t._getRootElement = function (n) {
          var u = r.getSelectorFromElement(n),
            t = !1;
          return (
            u && (t = document.querySelector(u)),
            t || (t = i["default"](n).closest("." + gs)[0]),
            t
          );
        }),
        (t._triggerCloseEvent = function (n) {
          var t = i["default"].Event(ih);
          return i["default"](n).trigger(t), t;
        }),
        (t._removeElement = function (n) {
          var u = this,
            t;
          if (
            (i["default"](n).removeClass(th), !i["default"](n).hasClass(nh))
          ) {
            this._destroyElement(n);
            return;
          }
          t = r.getTransitionDurationFromElement(n);
          i["default"](n)
            .one(r.TRANSITION_END, function (t) {
              return u._destroyElement(n, t);
            })
            .emulateTransitionEnd(t);
        }),
        (t._destroyElement = function (n) {
          i["default"](n).detach().trigger(rh).remove();
        }),
        (n._jQueryInterface = function (t) {
          return this.each(function () {
            var u = i["default"](this),
              r = u.data(nr);
            r || ((r = new n(this)), u.data(nr, r));
            t === "close" && r[t](this);
          });
        }),
        (n._handleDismiss = function (n) {
          return function (t) {
            t && t.preventDefault();
            n.close(this);
          };
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return ks;
            },
          },
        ]),
        n
      );
    })();
  i["default"](document).on(
    uh,
    '[data-dismiss="alert"]',
    rt._handleDismiss(new rt())
  );
  i["default"].fn[bt] = rt._jQueryInterface;
  i["default"].fn[bt].Constructor = rt;
  i["default"].fn[bt].noConflict = function () {
    return (i["default"].fn[bt] = ds), rt._jQueryInterface;
  };
  var kt = "button",
    fh = "4.6.2",
    tr = "bs.button",
    ir = "." + tr,
    rr = ".data-api",
    eh = i["default"].fn[kt],
    a = "active",
    oh = "btn",
    sh = "focus",
    hh = "click" + ir + rr,
    ch = "focus" + ir + rr + " " + ("blur" + ir + rr),
    lh = "load" + ir + rr,
    vf = '[data-toggle^="button"]',
    ah = '[data-toggle="buttons"]',
    vh = '[data-toggle="button"]',
    yh = '[data-toggle="buttons"] .btn',
    ou = 'input:not([type="hidden"])',
    ph = ".active",
    yf = ".btn",
    dt = (function () {
      function n(n) {
        this._element = n;
        this.shouldAvoidTriggerChange = !1;
      }
      var t = n.prototype;
      return (
        (t.toggle = function () {
          var t = !0,
            u = !0,
            f = i["default"](this._element).closest(ah)[0],
            n,
            r;
          f &&
            ((n = this._element.querySelector(ou)),
            n &&
              (n.type === "radio" &&
                (n.checked && this._element.classList.contains(a)
                  ? (t = !1)
                  : ((r = f.querySelector(ph)),
                    r && i["default"](r).removeClass(a))),
              t &&
                ((n.type === "checkbox" || n.type === "radio") &&
                  (n.checked = !this._element.classList.contains(a)),
                this.shouldAvoidTriggerChange ||
                  i["default"](n).trigger("change")),
              n.focus(),
              (u = !1)));
          this._element.hasAttribute("disabled") ||
            this._element.classList.contains("disabled") ||
            (u &&
              this._element.setAttribute(
                "aria-pressed",
                !this._element.classList.contains(a)
              ),
            t && i["default"](this._element).toggleClass(a));
        }),
        (t.dispose = function () {
          i["default"].removeData(this._element, tr);
          this._element = null;
        }),
        (n._jQueryInterface = function (t, r) {
          return this.each(function () {
            var f = i["default"](this),
              u = f.data(tr);
            u || ((u = new n(this)), f.data(tr, u));
            u.shouldAvoidTriggerChange = r;
            t === "toggle" && u[t]();
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return fh;
            },
          },
        ]),
        n
      );
    })();
  i["default"](document)
    .on(hh, vf, function (n) {
      var t = n.target,
        u = t,
        r;
      if (
        (i["default"](t).hasClass(oh) || (t = i["default"](t).closest(yf)[0]),
        !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))
      )
        n.preventDefault();
      else {
        if (
          ((r = t.querySelector(ou)),
          r && (r.hasAttribute("disabled") || r.classList.contains("disabled")))
        ) {
          n.preventDefault();
          return;
        }
        (u.tagName === "INPUT" || t.tagName !== "LABEL") &&
          dt._jQueryInterface.call(
            i["default"](t),
            "toggle",
            u.tagName === "INPUT"
          );
      }
    })
    .on(ch, vf, function (n) {
      var t = i["default"](n.target).closest(yf)[0];
      i["default"](t).toggleClass(sh, /^focus(in)?$/.test(n.type));
    });
  i["default"](window).on(lh, function () {
    for (
      var t,
        f,
        i,
        e,
        r,
        n = [].slice.call(document.querySelectorAll(yh)),
        u = 0,
        o = n.length;
      u < o;
      u++
    )
      (t = n[u]),
        (f = t.querySelector(ou)),
        f.checked || f.hasAttribute("checked")
          ? t.classList.add(a)
          : t.classList.remove(a);
    for (
      n = [].slice.call(document.querySelectorAll(vh)), i = 0, e = n.length;
      i < e;
      i++
    )
      (r = n[i]),
        r.getAttribute("aria-pressed") === "true"
          ? r.classList.add(a)
          : r.classList.remove(a);
  });
  i["default"].fn[kt] = dt._jQueryInterface;
  i["default"].fn[kt].Constructor = dt;
  i["default"].fn[kt].noConflict = function () {
    return (i["default"].fn[kt] = eh), dt._jQueryInterface;
  };
  var ut = "carousel",
    wh = "4.6.2",
    gt = "bs.carousel",
    f = "." + gt,
    pf = ".data-api",
    bh = i["default"].fn[ut],
    kh = 37,
    dh = 39,
    gh = 500,
    nc = 40,
    tc = "carousel",
    w = "active",
    ic = "slide",
    rc = "carousel-item-right",
    uc = "carousel-item-left",
    fc = "carousel-item-next",
    ec = "carousel-item-prev",
    oc = "pointer-event",
    ur = "next",
    fr = "prev",
    sc = "left",
    hc = "right",
    cc = "slide" + f,
    wf = "slid" + f,
    lc = "keydown" + f,
    ac = "mouseenter" + f,
    vc = "mouseleave" + f,
    yc = "touchstart" + f,
    pc = "touchmove" + f,
    wc = "touchend" + f,
    bc = "pointerdown" + f,
    kc = "pointerup" + f,
    dc = "dragstart" + f,
    gc = "load" + f + pf,
    nl = "click" + f + pf,
    tl = ".active",
    er = ".active.carousel-item",
    il = ".carousel-item",
    rl = ".carousel-item img",
    ul = ".carousel-item-next, .carousel-item-prev",
    fl = ".carousel-indicators",
    el = '[data-ride="carousel"]',
    su = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    ol = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    bf = {
      TOUCH: "touch",
      PEN: "pen",
    },
    ft = (function () {
      function t(n, t) {
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = !1;
        this._isSliding = !1;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(t);
        this._element = n;
        this._indicatorsElement = this._element.querySelector(fl);
        this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(
          window.PointerEvent || window.MSPointerEvent
        );
        this._addEventListeners();
      }
      var n = t.prototype;
      return (
        (n.next = function () {
          this._isSliding || this._slide(ur);
        }),
        (n.nextWhenVisible = function () {
          var n = i["default"](this._element);
          !document.hidden &&
            n.is(":visible") &&
            n.css("visibility") !== "hidden" &&
            this.next();
        }),
        (n.prev = function () {
          this._isSliding || this._slide(fr);
        }),
        (n.pause = function (n) {
          n || (this._isPaused = !0);
          this._element.querySelector(ul) &&
            (r.triggerTransitionEnd(this._element), this.cycle(!0));
          clearInterval(this._interval);
          this._interval = null;
        }),
        (n.cycle = function (n) {
          n || (this._isPaused = !1);
          this._interval &&
            (clearInterval(this._interval), (this._interval = null));
          this._config.interval &&
            !this._isPaused &&
            (this._updateInterval(),
            (this._interval = setInterval(
              (document.visibilityState
                ? this.nextWhenVisible
                : this.next
              ).bind(this),
              this._config.interval
            )));
        }),
        (n.to = function (n) {
          var u = this,
            t,
            r;
          if (
            ((this._activeElement = this._element.querySelector(er)),
            (t = this._getItemIndex(this._activeElement)),
            !(n > this._items.length - 1) && !(n < 0))
          ) {
            if (this._isSliding) {
              i["default"](this._element).one(wf, function () {
                return u.to(n);
              });
              return;
            }
            if (t === n) {
              this.pause();
              this.cycle();
              return;
            }
            r = n > t ? ur : fr;
            this._slide(r, this._items[n]);
          }
        }),
        (n.dispose = function () {
          i["default"](this._element).off(f);
          i["default"].removeData(this._element, gt);
          this._items = null;
          this._config = null;
          this._element = null;
          this._interval = null;
          this._isPaused = null;
          this._isSliding = null;
          this._activeElement = null;
          this._indicatorsElement = null;
        }),
        (n._getConfig = function (n) {
          return (n = u({}, su, n)), r.typeCheckConfig(ut, n, ol), n;
        }),
        (n._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX),
            n;
          t <= nc ||
            ((n = t / this.touchDeltaX),
            (this.touchDeltaX = 0),
            n > 0 && this.prev(),
            n < 0 && this.next());
        }),
        (n._addEventListeners = function () {
          var n = this;
          if (this._config.keyboard)
            i["default"](this._element).on(lc, function (t) {
              return n._keydown(t);
            });
          if (this._config.pause === "hover")
            i["default"](this._element)
              .on(ac, function (t) {
                return n.pause(t);
              })
              .on(vc, function (t) {
                return n.cycle(t);
              });
          this._config.touch && this._addTouchEventListeners();
        }),
        (n._addTouchEventListeners = function () {
          var n = this;
          if (this._touchSupported) {
            var t = function (t) {
                n._pointerEvent && bf[t.originalEvent.pointerType.toUpperCase()]
                  ? (n.touchStartX = t.originalEvent.clientX)
                  : n._pointerEvent ||
                    (n.touchStartX = t.originalEvent.touches[0].clientX);
              },
              u = function (t) {
                n.touchDeltaX =
                  t.originalEvent.touches && t.originalEvent.touches.length > 1
                    ? 0
                    : t.originalEvent.touches[0].clientX - n.touchStartX;
              },
              r = function (t) {
                n._pointerEvent &&
                  bf[t.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX);
                n._handleSwipe();
                n._config.pause === "hover" &&
                  (n.pause(),
                  n.touchTimeout && clearTimeout(n.touchTimeout),
                  (n.touchTimeout = setTimeout(function (t) {
                    return n.cycle(t);
                  }, gh + n._config.interval)));
              };
            i["default"](this._element.querySelectorAll(rl)).on(
              dc,
              function (n) {
                return n.preventDefault();
              }
            );
            if (this._pointerEvent) {
              i["default"](this._element).on(bc, function (n) {
                return t(n);
              });
              i["default"](this._element).on(kc, function (n) {
                return r(n);
              });
              this._element.classList.add(oc);
            } else {
              i["default"](this._element).on(yc, function (n) {
                return t(n);
              });
              i["default"](this._element).on(pc, function (n) {
                return u(n);
              });
              i["default"](this._element).on(wc, function (n) {
                return r(n);
              });
            }
          }
        }),
        (n._keydown = function (n) {
          if (!/input|textarea/i.test(n.target.tagName))
            switch (n.which) {
              case kh:
                n.preventDefault();
                this.prev();
                break;
              case dh:
                n.preventDefault();
                this.next();
            }
        }),
        (n._getItemIndex = function (n) {
          return (
            (this._items =
              n && n.parentNode
                ? [].slice.call(n.parentNode.querySelectorAll(il))
                : []),
            this._items.indexOf(n)
          );
        }),
        (n._getItemByDirection = function (n, t) {
          var f = n === ur,
            e = n === fr,
            i = this._getItemIndex(t),
            o = this._items.length - 1,
            s = (e && i === 0) || (f && i === o),
            u,
            r;
          return s && !this._config.wrap
            ? t
            : ((u = n === fr ? -1 : 1),
              (r = (i + u) % this._items.length),
              r === -1 ? this._items[this._items.length - 1] : this._items[r]);
        }),
        (n._triggerSlideEvent = function (n, t) {
          var u = this._getItemIndex(n),
            f = this._getItemIndex(this._element.querySelector(er)),
            r = i["default"].Event(cc, {
              relatedTarget: n,
              direction: t,
              from: f,
              to: u,
            });
          return i["default"](this._element).trigger(r), r;
        }),
        (n._setActiveIndicatorElement = function (n) {
          var r, t;
          this._indicatorsElement &&
            ((r = [].slice.call(this._indicatorsElement.querySelectorAll(tl))),
            i["default"](r).removeClass(w),
            (t = this._indicatorsElement.children[this._getItemIndex(n)]),
            t && i["default"](t).addClass(w));
        }),
        (n._updateInterval = function () {
          var t = this._activeElement || this._element.querySelector(er),
            n;
          t &&
            ((n = parseInt(t.getAttribute("data-interval"), 10)),
            n
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval || this._config.interval),
                (this._config.interval = n))
              : (this._config.interval =
                  this._config.defaultInterval || this._config.interval));
        }),
        (n._slide = function (n, t) {
          var c = this,
            f = this._element.querySelector(er),
            y = this._getItemIndex(f),
            u = t || (f && this._getItemByDirection(n, f)),
            p = this._getItemIndex(u),
            l = Boolean(this._interval),
            e,
            o,
            s,
            a,
            h,
            v;
          if (
            (n === ur
              ? ((e = uc), (o = fc), (s = sc))
              : ((e = rc), (o = ec), (s = hc)),
            u && i["default"](u).hasClass(w))
          ) {
            this._isSliding = !1;
            return;
          }
          ((a = this._triggerSlideEvent(u, s)), a.isDefaultPrevented()) ||
            (f &&
              u &&
              ((this._isSliding = !0),
              l && this.pause(),
              this._setActiveIndicatorElement(u),
              (this._activeElement = u),
              (h = i["default"].Event(wf, {
                relatedTarget: u,
                direction: s,
                from: y,
                to: p,
              })),
              i["default"](this._element).hasClass(ic)
                ? (i["default"](u).addClass(o),
                  r.reflow(u),
                  i["default"](f).addClass(e),
                  i["default"](u).addClass(e),
                  (v = r.getTransitionDurationFromElement(f)),
                  i["default"](f)
                    .one(r.TRANSITION_END, function () {
                      i["default"](u)
                        .removeClass(e + " " + o)
                        .addClass(w);
                      i["default"](f).removeClass(w + " " + o + " " + e);
                      c._isSliding = !1;
                      setTimeout(function () {
                        return i["default"](c._element).trigger(h);
                      }, 0);
                    })
                    .emulateTransitionEnd(v))
                : (i["default"](f).removeClass(w),
                  i["default"](u).addClass(w),
                  (this._isSliding = !1),
                  i["default"](this._element).trigger(h)),
              l && this.cycle()));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var r = i["default"](this).data(gt),
              f = u({}, su, i["default"](this).data()),
              e;
            if (
              (typeof n == "object" && (f = u({}, f, n)),
              (e = typeof n == "string" ? n : f.slide),
              r || ((r = new t(this, f)), i["default"](this).data(gt, r)),
              typeof n == "number")
            )
              r.to(n);
            else if (typeof e == "string") {
              if (typeof r[e] == "undefined")
                throw new TypeError('No method named "' + e + '"');
              r[e]();
            } else f.interval && f.ride && (r.pause(), r.cycle());
          });
        }),
        (t._dataApiClickHandler = function (n) {
          var s = r.getSelectorFromElement(this),
            f,
            o,
            e;
          s &&
            ((f = i["default"](s)[0]), f && i["default"](f).hasClass(tc)) &&
            ((o = u({}, i["default"](f).data(), i["default"](this).data())),
            (e = this.getAttribute("data-slide-to")),
            e && (o.interval = !1),
            t._jQueryInterface.call(i["default"](f), o),
            e && i["default"](f).data(gt).to(e),
            n.preventDefault());
        }),
        s(t, null, [
          {
            key: "VERSION",
            get: function () {
              return wh;
            },
          },
          {
            key: "Default",
            get: function () {
              return su;
            },
          },
        ]),
        t
      );
    })();
  i["default"](document).on(
    nl,
    "[data-slide], [data-slide-to]",
    ft._dataApiClickHandler
  );
  i["default"](window).on(gc, function () {
    for (
      var t,
        r = [].slice.call(document.querySelectorAll(el)),
        n = 0,
        u = r.length;
      n < u;
      n++
    )
      (t = i["default"](r[n])), ft._jQueryInterface.call(t, t.data());
  });
  i["default"].fn[ut] = ft._jQueryInterface;
  i["default"].fn[ut].Constructor = ft;
  i["default"].fn[ut].noConflict = function () {
    return (i["default"].fn[ut] = bh), ft._jQueryInterface;
  };
  var et = "collapse",
    sl = "4.6.2",
    b = "bs.collapse",
    ni = "." + b,
    hl = i["default"].fn[et],
    k = "show",
    ti = "collapse",
    or = "collapsing",
    hu = "collapsed",
    kf = "width",
    cl = "height",
    ll = "show" + ni,
    al = "shown" + ni,
    vl = "hide" + ni,
    yl = "hidden" + ni,
    pl = "click" + ni + ".data-api",
    wl = ".show, .collapsing",
    df = '[data-toggle="collapse"]',
    cu = {
      toggle: !0,
      parent: "",
    },
    bl = {
      toggle: "boolean",
      parent: "(string|element)",
    },
    ii = (function () {
      function t(n, t) {
        var u, i, e;
        for (
          this._isTransitioning = !1,
            this._element = n,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(
              document.querySelectorAll(
                '[data-toggle="collapse"][href="#' +
                  n.id +
                  '"],' +
                  ('[data-toggle="collapse"][data-target="#' + n.id + '"]')
              )
            ),
            u = [].slice.call(document.querySelectorAll(df)),
            i = 0,
            e = u.length;
          i < e;
          i++
        ) {
          var o = u[i],
            f = r.getSelectorFromElement(o),
            s = [].slice
              .call(document.querySelectorAll(f))
              .filter(function (t) {
                return t === n;
              });
          f !== null &&
            s.length > 0 &&
            ((this._selector = f), this._triggerArray.push(o));
        }
        this._parent = this._config.parent ? this._getParent() : null;
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray);
        this._config.toggle && this.toggle();
      }
      var n = t.prototype;
      return (
        (n.toggle = function () {
          i["default"](this._element).hasClass(k) ? this.hide() : this.show();
        }),
        (n.show = function () {
          var u = this,
            n,
            e,
            o,
            f;
          if (
            !this._isTransitioning &&
            !i["default"](this._element).hasClass(k) &&
            (this._parent &&
              ((n = [].slice
                .call(this._parent.querySelectorAll(wl))
                .filter(function (n) {
                  return typeof u._config.parent == "string"
                    ? n.getAttribute("data-parent") === u._config.parent
                    : n.classList.contains(ti);
                })),
              n.length === 0 && (n = null)),
            !n ||
              ((e = i["default"](n).not(this._selector).data(b)),
              !e || !e._isTransitioning)) &&
            ((o = i["default"].Event(ll)),
            i["default"](this._element).trigger(o),
            !o.isDefaultPrevented())
          ) {
            n &&
              (t._jQueryInterface.call(
                i["default"](n).not(this._selector),
                "hide"
              ),
              e || i["default"](n).data(b, null));
            f = this._getDimension();
            i["default"](this._element).removeClass(ti).addClass(or);
            this._element.style[f] = 0;
            this._triggerArray.length &&
              i["default"](this._triggerArray)
                .removeClass(hu)
                .attr("aria-expanded", !0);
            this.setTransitioning(!0);
            var s = function () {
                i["default"](u._element)
                  .removeClass(or)
                  .addClass(ti + " " + k);
                u._element.style[f] = "";
                u.setTransitioning(!1);
                i["default"](u._element).trigger(al);
              },
              h = f[0].toUpperCase() + f.slice(1),
              c = "scroll" + h,
              l = r.getTransitionDurationFromElement(this._element);
            i["default"](this._element)
              .one(r.TRANSITION_END, s)
              .emulateTransitionEnd(l);
            this._element.style[f] = this._element[c] + "px";
          }
        }),
        (n.hide = function () {
          var s = this,
            u,
            n,
            f,
            t,
            e,
            o,
            h,
            c,
            l;
          if (
            !this._isTransitioning &&
            i["default"](this._element).hasClass(k) &&
            ((u = i["default"].Event(vl)),
            i["default"](this._element).trigger(u),
            !u.isDefaultPrevented())
          ) {
            if (
              ((n = this._getDimension()),
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + "px"),
              r.reflow(this._element),
              i["default"](this._element)
                .addClass(or)
                .removeClass(ti + " " + k),
              (f = this._triggerArray.length),
              f > 0)
            )
              for (t = 0; t < f; t++)
                (e = this._triggerArray[t]),
                  (o = r.getSelectorFromElement(e)),
                  o !== null &&
                    ((h = i["default"](
                      [].slice.call(document.querySelectorAll(o))
                    )),
                    h.hasClass(k) ||
                      i["default"](e).addClass(hu).attr("aria-expanded", !1));
            this.setTransitioning(!0);
            c = function () {
              s.setTransitioning(!1);
              i["default"](s._element).removeClass(or).addClass(ti).trigger(yl);
            };
            this._element.style[n] = "";
            l = r.getTransitionDurationFromElement(this._element);
            i["default"](this._element)
              .one(r.TRANSITION_END, c)
              .emulateTransitionEnd(l);
          }
        }),
        (n.setTransitioning = function (n) {
          this._isTransitioning = n;
        }),
        (n.dispose = function () {
          i["default"].removeData(this._element, b);
          this._config = null;
          this._parent = null;
          this._element = null;
          this._triggerArray = null;
          this._isTransitioning = null;
        }),
        (n._getConfig = function (n) {
          return (
            (n = u({}, cu, n)),
            (n.toggle = Boolean(n.toggle)),
            r.typeCheckConfig(et, n, bl),
            n
          );
        }),
        (n._getDimension = function () {
          var n = i["default"](this._element).hasClass(kf);
          return n ? kf : cl;
        }),
        (n._getParent = function () {
          var e = this,
            n,
            u,
            f;
          return (
            r.isElement(this._config.parent)
              ? ((n = this._config.parent),
                typeof this._config.parent.jquery != "undefined" &&
                  (n = this._config.parent[0]))
              : (n = document.querySelector(this._config.parent)),
            (u =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]'),
            (f = [].slice.call(n.querySelectorAll(u))),
            i["default"](f).each(function (n, i) {
              e._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            n
          );
        }),
        (n._addAriaAndCollapsedClass = function (n, t) {
          var r = i["default"](n).hasClass(k);
          t.length &&
            i["default"](t).toggleClass(hu, !r).attr("aria-expanded", r);
        }),
        (t._getTargetFromElement = function (n) {
          var t = r.getSelectorFromElement(n);
          return t ? document.querySelector(t) : null;
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var f = i["default"](this),
              r = f.data(b),
              e = u({}, cu, f.data(), typeof n == "object" && n ? n : {});
            if (
              (!r &&
                e.toggle &&
                typeof n == "string" &&
                /show|hide/.test(n) &&
                (e.toggle = !1),
              r || ((r = new t(this, e)), f.data(b, r)),
              typeof n == "string")
            ) {
              if (typeof r[n] == "undefined")
                throw new TypeError('No method named "' + n + '"');
              r[n]();
            }
          });
        }),
        s(t, null, [
          {
            key: "VERSION",
            get: function () {
              return sl;
            },
          },
          {
            key: "Default",
            get: function () {
              return cu;
            },
          },
        ]),
        t
      );
    })();
  i["default"](document).on(pl, df, function (n) {
    n.currentTarget.tagName === "A" && n.preventDefault();
    var t = i["default"](this),
      u = r.getSelectorFromElement(this),
      f = [].slice.call(document.querySelectorAll(u));
    i["default"](f).each(function () {
      var n = i["default"](this),
        r = n.data(b),
        u = r ? "toggle" : t.data();
      ii._jQueryInterface.call(n, u);
    });
  });
  i["default"].fn[et] = ii._jQueryInterface;
  i["default"].fn[et].Constructor = ii;
  i["default"].fn[et].noConflict = function () {
    return (i["default"].fn[et] = hl), ii._jQueryInterface;
  };
  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  ot =
    typeof window != "undefined" &&
    typeof document != "undefined" &&
    typeof navigator != "undefined";
  gf = (function () {
    for (var t = ["Edge", "Trident", "Firefox"], n = 0; n < t.length; n += 1)
      if (ot && navigator.userAgent.indexOf(t[n]) >= 0) return 1;
    return 0;
  })();
  ne = ot && window.Promise;
  te = ne ? kl : dl;
  au = ot && !!(window.MSInputMethodContext && document.documentMode);
  vu = ot && /MSIE 10/.test(navigator.userAgent);
  var ta = function (n, t) {
      if (!(n instanceof t))
        throw new TypeError("Cannot call a class as a function");
    },
    ia = (function () {
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
    lt = function (n, t, i) {
      return (
        t in n
          ? Object.defineProperty(n, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[t] = i),
        n
      );
    },
    o =
      Object.assign ||
      function (n) {
        for (var i, r, t = 1; t < arguments.length; t++) {
          i = arguments[t];
          for (r in i)
            Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
        }
        return n;
      };
  be = ot && /Firefox/i.test(navigator.userAgent);
  nf = [
    "auto-start",
    "auto",
    "auto-end",
    "top-start",
    "top",
    "top-end",
    "right-start",
    "right",
    "right-end",
    "bottom-end",
    "bottom",
    "bottom-start",
    "left-end",
    "left",
    "left-start",
  ];
  cr = nf.slice(3);
  lr = {
    FLIP: "flip",
    CLOCKWISE: "clockwise",
    COUNTERCLOCKWISE: "counterclockwise",
  };
  var ov = {
      shift: {
        order: 100,
        enabled: !0,
        fn: uv,
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: iv,
        offset: 0,
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: rv,
        priority: ["left", "right", "top", "bottom"],
        padding: 5,
        boundariesElement: "scrollParent",
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: ga,
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: ba,
        element: "[x-arrow]",
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: da,
        behavior: "flip",
        padding: 5,
        boundariesElement: "viewport",
        flipVariations: !1,
        flipVariationsByContent: !1,
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: ev,
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: fv,
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: wa,
        gpuAcceleration: !0,
        x: "bottom",
        y: "right",
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: va,
        onLoad: ya,
        gpuAcceleration: undefined,
      },
    },
    sv = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: ov,
    },
    ar = (function () {
      function n(t, i) {
        var r = this,
          u =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : {},
          f;
        ta(this, n);
        this.scheduleUpdate = function () {
          return requestAnimationFrame(r.update);
        };
        this.update = te(this.update.bind(this));
        this.options = o({}, n.Defaults, u);
        this.state = {
          isDestroyed: !1,
          isCreated: !1,
          scrollParents: [],
        };
        this.reference = t && t.jquery ? t[0] : t;
        this.popper = i && i.jquery ? i[0] : i;
        this.options.modifiers = {};
        Object.keys(o({}, n.Defaults.modifiers, u.modifiers)).forEach(function (
          t
        ) {
          r.options.modifiers[t] = o(
            {},
            n.Defaults.modifiers[t] || {},
            u.modifiers ? u.modifiers[t] : {}
          );
        });
        this.modifiers = Object.keys(this.options.modifiers)
          .map(function (n) {
            return o(
              {
                name: n,
              },
              r.options.modifiers[n]
            );
          })
          .sort(function (n, t) {
            return n.order - t.order;
          });
        this.modifiers.forEach(function (n) {
          if (n.enabled && ie(n.onLoad))
            n.onLoad(r.reference, r.popper, r.options, n, r.state);
        });
        this.update();
        f = this.options.eventsEnabled;
        f && this.enableEventListeners();
        this.state.eventsEnabled = f;
      }
      return (
        ia(n, [
          {
            key: "update",
            value: function () {
              return ea.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return oa.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return ha.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return la.call(this);
            },
          },
        ]),
        n
      );
    })();
  ar.Utils = (typeof window != "undefined" ? window : global).PopperUtils;
  ar.placements = nf;
  ar.Defaults = sv;
  var vr = ar,
    at = "dropdown",
    hv = "4.6.2",
    fi = "bs.dropdown",
    v = "." + fi,
    tf = ".data-api",
    cv = i["default"].fn[at],
    ei = 27,
    ge = 32,
    no = 9,
    rf = 38,
    uf = 40,
    lv = 3,
    av = new RegExp(rf + "|" + uf + "|" + ei),
    yr = "disabled",
    h = "show",
    vv = "dropup",
    yv = "dropright",
    pv = "dropleft",
    to = "dropdown-menu-right",
    wv = "position-static",
    io = "hide" + v,
    ro = "hidden" + v,
    bv = "show" + v,
    kv = "shown" + v,
    dv = "click" + v,
    ff = "click" + v + tf,
    uo = "keydown" + v + tf,
    gv = "keyup" + v + tf,
    pr = '[data-toggle="dropdown"]',
    ef = ".dropdown-menu",
    ny = ".navbar-nav",
    ty = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    iy = "top-start",
    ry = "top-end",
    uy = "bottom-start",
    fy = "bottom-end",
    ey = "right-start",
    oy = "left-start",
    sy = {
      offset: 0,
      flip: !0,
      boundary: "scrollParent",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
    },
    hy = {
      offset: "(number|string|function)",
      flip: "boolean",
      boundary: "(string|element)",
      reference: "(string|element)",
      display: "string",
      popperConfig: "(null|object)",
    },
    p = (function () {
      function n(n, t) {
        this._element = n;
        this._popper = null;
        this._config = this._getConfig(t);
        this._menu = this._getMenuElement();
        this._inNavbar = this._detectNavbar();
        this._addEventListeners();
      }
      var t = n.prototype;
      return (
        (t.toggle = function () {
          if (
            !this._element.disabled &&
            !i["default"](this._element).hasClass(yr)
          ) {
            var t = i["default"](this._menu).hasClass(h);
            (n._clearMenus(), t) || this.show(!0);
          }
        }),
        (t.show = function (t) {
          var f;
          if (
            (t === void 0 && (t = !1),
            !this._element.disabled &&
              !i["default"](this._element).hasClass(yr) &&
              !i["default"](this._menu).hasClass(h))
          ) {
            var e = {
                relatedTarget: this._element,
              },
              o = i["default"].Event(bv, e),
              u = n._getParentFromElement(this._element);
            if ((i["default"](u).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && t) {
                if (typeof vr == "undefined")
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                  );
                f = this._element;
                this._config.reference === "parent"
                  ? (f = u)
                  : r.isElement(this._config.reference) &&
                    ((f = this._config.reference),
                    typeof this._config.reference.jquery != "undefined" &&
                      (f = this._config.reference[0]));
                this._config.boundary !== "scrollParent" &&
                  i["default"](u).addClass(wv);
                this._popper = new vr(f, this._menu, this._getPopperConfig());
              }
              if (
                "ontouchstart" in document.documentElement &&
                i["default"](u).closest(ny).length === 0
              )
                i["default"](document.body)
                  .children()
                  .on("mouseover", null, i["default"].noop);
              this._element.focus();
              this._element.setAttribute("aria-expanded", !0);
              i["default"](this._menu).toggleClass(h);
              i["default"](u).toggleClass(h).trigger(i["default"].Event(kv, e));
            }
          }
        }),
        (t.hide = function () {
          if (
            !this._element.disabled &&
            !i["default"](this._element).hasClass(yr) &&
            i["default"](this._menu).hasClass(h)
          ) {
            var t = {
                relatedTarget: this._element,
              },
              r = i["default"].Event(io, t),
              u = n._getParentFromElement(this._element);
            (i["default"](u).trigger(r), r.isDefaultPrevented()) ||
              (this._popper && this._popper.destroy(),
              i["default"](this._menu).toggleClass(h),
              i["default"](u)
                .toggleClass(h)
                .trigger(i["default"].Event(ro, t)));
          }
        }),
        (t.dispose = function () {
          i["default"].removeData(this._element, fi);
          i["default"](this._element).off(v);
          this._element = null;
          this._menu = null;
          this._popper !== null &&
            (this._popper.destroy(), (this._popper = null));
        }),
        (t.update = function () {
          this._inNavbar = this._detectNavbar();
          this._popper !== null && this._popper.scheduleUpdate();
        }),
        (t._addEventListeners = function () {
          var n = this;
          i["default"](this._element).on(dv, function (t) {
            t.preventDefault();
            t.stopPropagation();
            n.toggle();
          });
        }),
        (t._getConfig = function (n) {
          return (
            (n = u(
              {},
              this.constructor.Default,
              i["default"](this._element).data(),
              n
            )),
            r.typeCheckConfig(at, n, this.constructor.DefaultType),
            n
          );
        }),
        (t._getMenuElement = function () {
          if (!this._menu) {
            var t = n._getParentFromElement(this._element);
            t && (this._menu = t.querySelector(ef));
          }
          return this._menu;
        }),
        (t._getPlacement = function () {
          var t = i["default"](this._element.parentNode),
            n = uy;
          return (
            t.hasClass(vv)
              ? (n = i["default"](this._menu).hasClass(to) ? ry : iy)
              : t.hasClass(yv)
              ? (n = ey)
              : t.hasClass(pv)
              ? (n = oy)
              : i["default"](this._menu).hasClass(to) && (n = fy),
            n
          );
        }),
        (t._detectNavbar = function () {
          return i["default"](this._element).closest(".navbar").length > 0;
        }),
        (t._getOffset = function () {
          var t = this,
            n = {};
          return (
            typeof this._config.offset == "function"
              ? (n.fn = function (n) {
                  return (
                    (n.offsets = u(
                      {},
                      n.offsets,
                      t._config.offset(n.offsets, t._element)
                    )),
                    n
                  );
                })
              : (n.offset = this._config.offset),
            n
          );
        }),
        (t._getPopperConfig = function () {
          var n = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: {
                enabled: this._config.flip,
              },
              preventOverflow: {
                boundariesElement: this._config.boundary,
              },
            },
          };
          return (
            this._config.display === "static" &&
              (n.modifiers.applyStyle = {
                enabled: !1,
              }),
            u({}, n, this._config.popperConfig)
          );
        }),
        (n._jQueryInterface = function (t) {
          return this.each(function () {
            var r = i["default"](this).data(fi),
              u = typeof t == "object" ? t : null;
            if (
              (r || ((r = new n(this, u)), i["default"](this).data(fi, r)),
              typeof t == "string")
            ) {
              if (typeof r[t] == "undefined")
                throw new TypeError('No method named "' + t + '"');
              r[t]();
            }
          });
        }),
        (n._clearMenus = function (t) {
          var u, r, c, l, s;
          if (!t || (t.which !== lv && (t.type !== "keyup" || t.which === no)))
            for (
              u = [].slice.call(document.querySelectorAll(pr)),
                r = 0,
                c = u.length;
              r < c;
              r++
            ) {
              var f = n._getParentFromElement(u[r]),
                e = i["default"](u[r]).data(fi),
                o = {
                  relatedTarget: u[r],
                };
              (t && t.type === "click" && (o.clickEvent = t), e) &&
                ((l = e._menu), i["default"](f).hasClass(h)) &&
                ((t &&
                  ((t.type === "click" &&
                    /input|textarea/i.test(t.target.tagName)) ||
                    (t.type === "keyup" && t.which === no)) &&
                  i["default"].contains(f, t.target)) ||
                  ((s = i["default"].Event(io, o)),
                  i["default"](f).trigger(s),
                  s.isDefaultPrevented()) ||
                  ("ontouchstart" in document.documentElement &&
                    i["default"](document.body)
                      .children()
                      .off("mouseover", null, i["default"].noop),
                  u[r].setAttribute("aria-expanded", "false"),
                  e._popper && e._popper.destroy(),
                  i["default"](l).removeClass(h),
                  i["default"](f)
                    .removeClass(h)
                    .trigger(i["default"].Event(ro, o))));
            }
        }),
        (n._getParentFromElement = function (n) {
          var t,
            i = r.getSelectorFromElement(n);
          return i && (t = document.querySelector(i)), t || n.parentNode;
        }),
        (n._dataApiKeydownHandler = function (t) {
          var f, e, u, r;
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? t.which !== ge &&
                (t.which === ei ||
                  ((t.which === uf || t.which === rf) &&
                    !i["default"](t.target).closest(ef).length))
              : av.test(t.which)) &&
            !this.disabled &&
            !i["default"](this).hasClass(yr) &&
            ((f = n._getParentFromElement(this)),
            (e = i["default"](f).hasClass(h)),
            e || t.which !== ei)
          ) {
            if (
              (t.preventDefault(),
              t.stopPropagation(),
              !e || t.which === ei || t.which === ge)
            ) {
              t.which === ei &&
                i["default"](f.querySelector(pr)).trigger("focus");
              i["default"](this).trigger("click");
              return;
            }
            ((u = [].slice.call(f.querySelectorAll(ty)).filter(function (n) {
              return i["default"](n).is(":visible");
            })),
            u.length !== 0) &&
              ((r = u.indexOf(t.target)),
              t.which === rf && r > 0 && r--,
              t.which === uf && r < u.length - 1 && r++,
              r < 0 && (r = 0),
              u[r].focus());
          }
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return hv;
            },
          },
          {
            key: "Default",
            get: function () {
              return sy;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return hy;
            },
          },
        ]),
        n
      );
    })();
  i["default"](document)
    .on(uo, pr, p._dataApiKeydownHandler)
    .on(uo, ef, p._dataApiKeydownHandler)
    .on(ff + " " + gv, p._clearMenus)
    .on(ff, pr, function (n) {
      n.preventDefault();
      n.stopPropagation();
      p._jQueryInterface.call(i["default"](this), "toggle");
    })
    .on(ff, ".dropdown form", function (n) {
      n.stopPropagation();
    });
  i["default"].fn[at] = p._jQueryInterface;
  i["default"].fn[at].Constructor = p;
  i["default"].fn[at].noConflict = function () {
    return (i["default"].fn[at] = cv), p._jQueryInterface;
  };
  var vt = "modal",
    cy = "4.6.2",
    oi = "bs.modal",
    e = "." + oi,
    ly = i["default"].fn[vt],
    fo = 27,
    ay = "modal-dialog-scrollable",
    vy = "modal-scrollbar-measure",
    yy = "modal-backdrop",
    eo = "modal-open",
    yt = "fade",
    wr = "show",
    oo = "modal-static",
    py = "hide" + e,
    wy = "hidePrevented" + e,
    so = "hidden" + e,
    ho = "show" + e,
    by = "shown" + e,
    br = "focusin" + e,
    co = "resize" + e,
    of = "click.dismiss" + e,
    lo = "keydown.dismiss" + e,
    ky = "mouseup.dismiss" + e,
    ao = "mousedown.dismiss" + e,
    dy = "click" + e + ".data-api",
    gy = ".modal-dialog",
    np = ".modal-body",
    tp = '[data-dismiss="modal"]',
    vo = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    yo = ".sticky-top",
    sf = {
      backdrop: !0,
      keyboard: !0,
      focus: !0,
      show: !0,
    },
    ip = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
      show: "boolean",
    },
    si = (function () {
      function t(n, t) {
        this._config = this._getConfig(t);
        this._element = n;
        this._dialog = n.querySelector(gy);
        this._backdrop = null;
        this._isShown = !1;
        this._isBodyOverflowing = !1;
        this._ignoreBackdropClick = !1;
        this._isTransitioning = !1;
        this._scrollbarWidth = 0;
      }
      var n = t.prototype;
      return (
        (n.toggle = function (n) {
          return this._isShown ? this.hide() : this.show(n);
        }),
        (n.show = function (n) {
          var t = this,
            r;
          if (
            !this._isShown &&
            !this._isTransitioning &&
            ((r = i["default"].Event(ho, {
              relatedTarget: n,
            })),
            i["default"](this._element).trigger(r),
            !r.isDefaultPrevented())
          ) {
            this._isShown = !0;
            i["default"](this._element).hasClass(yt) &&
              (this._isTransitioning = !0);
            this._checkScrollbar();
            this._setScrollbar();
            this._adjustDialog();
            this._setEscapeEvent();
            this._setResizeEvent();
            i["default"](this._element).on(of, tp, function (n) {
              return t.hide(n);
            });
            i["default"](this._dialog).on(ao, function () {
              i["default"](t._element).one(ky, function (n) {
                i["default"](n.target).is(t._element) &&
                  (t._ignoreBackdropClick = !0);
              });
            });
            this._showBackdrop(function () {
              return t._showElement(n);
            });
          }
        }),
        (n.hide = function (n) {
          var e = this,
            t,
            u,
            f;
          (n && n.preventDefault(), this._isShown && !this._isTransitioning) &&
            ((t = i["default"].Event(py)),
            i["default"](this._element).trigger(t),
            this._isShown && !t.isDefaultPrevented()) &&
            ((this._isShown = !1),
            (u = i["default"](this._element).hasClass(yt)),
            u && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            i["default"](document).off(br),
            i["default"](this._element).removeClass(wr),
            i["default"](this._element).off(of),
            i["default"](this._dialog).off(ao),
            u
              ? ((f = r.getTransitionDurationFromElement(this._element)),
                i["default"](this._element)
                  .one(r.TRANSITION_END, function (n) {
                    return e._hideModal(n);
                  })
                  .emulateTransitionEnd(f))
              : this._hideModal());
        }),
        (n.dispose = function () {
          [window, this._element, this._dialog].forEach(function (n) {
            return i["default"](n).off(e);
          });
          i["default"](document).off(br);
          i["default"].removeData(this._element, oi);
          this._config = null;
          this._element = null;
          this._dialog = null;
          this._backdrop = null;
          this._isShown = null;
          this._isBodyOverflowing = null;
          this._ignoreBackdropClick = null;
          this._isTransitioning = null;
          this._scrollbarWidth = null;
        }),
        (n.handleUpdate = function () {
          this._adjustDialog();
        }),
        (n._getConfig = function (n) {
          return (n = u({}, sf, n)), r.typeCheckConfig(vt, n, ip), n;
        }),
        (n._triggerBackdropTransition = function () {
          var n = this,
            f = i["default"].Event(wy),
            t,
            u;
          (i["default"](this._element).trigger(f), f.isDefaultPrevented()) ||
            ((t =
              this._element.scrollHeight >
              document.documentElement.clientHeight),
            t || (this._element.style.overflowY = "hidden"),
            this._element.classList.add(oo),
            (u = r.getTransitionDurationFromElement(this._dialog)),
            i["default"](this._element).off(r.TRANSITION_END),
            i["default"](this._element)
              .one(r.TRANSITION_END, function () {
                n._element.classList.remove(oo);
                t ||
                  i["default"](n._element)
                    .one(r.TRANSITION_END, function () {
                      n._element.style.overflowY = "";
                    })
                    .emulateTransitionEnd(n._element, u);
              })
              .emulateTransitionEnd(u),
            this._element.focus());
        }),
        (n._showElement = function (n) {
          var t = this,
            f = i["default"](this._element).hasClass(yt),
            e = this._dialog ? this._dialog.querySelector(np) : null,
            o,
            u,
            s;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element);
          this._element.style.display = "block";
          this._element.removeAttribute("aria-hidden");
          this._element.setAttribute("aria-modal", !0);
          this._element.setAttribute("role", "dialog");
          i["default"](this._dialog).hasClass(ay) && e
            ? (e.scrollTop = 0)
            : (this._element.scrollTop = 0);
          f && r.reflow(this._element);
          i["default"](this._element).addClass(wr);
          this._config.focus && this._enforceFocus();
          o = i["default"].Event(by, {
            relatedTarget: n,
          });
          u = function () {
            t._config.focus && t._element.focus();
            t._isTransitioning = !1;
            i["default"](t._element).trigger(o);
          };
          f
            ? ((s = r.getTransitionDurationFromElement(this._dialog)),
              i["default"](this._dialog)
                .one(r.TRANSITION_END, u)
                .emulateTransitionEnd(s))
            : u();
        }),
        (n._enforceFocus = function () {
          var n = this;
          i["default"](document)
            .off(br)
            .on(br, function (t) {
              document !== t.target &&
                n._element !== t.target &&
                i["default"](n._element).has(t.target).length === 0 &&
                n._element.focus();
            });
        }),
        (n._setEscapeEvent = function () {
          var n = this;
          if (this._isShown)
            i["default"](this._element).on(lo, function (t) {
              n._config.keyboard && t.which === fo
                ? (t.preventDefault(), n.hide())
                : n._config.keyboard ||
                  t.which !== fo ||
                  n._triggerBackdropTransition();
            });
          else this._isShown || i["default"](this._element).off(lo);
        }),
        (n._setResizeEvent = function () {
          var n = this;
          if (this._isShown)
            i["default"](window).on(co, function (t) {
              return n.handleUpdate(t);
            });
          else i["default"](window).off(co);
        }),
        (n._hideModal = function () {
          var n = this;
          this._element.style.display = "none";
          this._element.setAttribute("aria-hidden", !0);
          this._element.removeAttribute("aria-modal");
          this._element.removeAttribute("role");
          this._isTransitioning = !1;
          this._showBackdrop(function () {
            i["default"](document.body).removeClass(eo);
            n._resetAdjustments();
            n._resetScrollbar();
            i["default"](n._element).trigger(so);
          });
        }),
        (n._removeBackdrop = function () {
          this._backdrop &&
            (i["default"](this._backdrop).remove(), (this._backdrop = null));
        }),
        (n._showBackdrop = function (n) {
          var t = this,
            u = i["default"](this._element).hasClass(yt) ? yt : "",
            e,
            f,
            o;
          if (this._isShown && this._config.backdrop) {
            this._backdrop = document.createElement("div");
            this._backdrop.className = yy;
            u && this._backdrop.classList.add(u);
            i["default"](this._backdrop).appendTo(document.body);
            i["default"](this._element).on(of, function (n) {
              if (t._ignoreBackdropClick) {
                t._ignoreBackdropClick = !1;
                return;
              }
              n.target === n.currentTarget &&
                (t._config.backdrop === "static"
                  ? t._triggerBackdropTransition()
                  : t.hide());
            });
            if (
              (u && r.reflow(this._backdrop),
              i["default"](this._backdrop).addClass(wr),
              !n)
            )
              return;
            if (!u) {
              n();
              return;
            }
            e = r.getTransitionDurationFromElement(this._backdrop);
            i["default"](this._backdrop)
              .one(r.TRANSITION_END, n)
              .emulateTransitionEnd(e);
          } else
            !this._isShown && this._backdrop
              ? (i["default"](this._backdrop).removeClass(wr),
                (f = function () {
                  t._removeBackdrop();
                  n && n();
                }),
                i["default"](this._element).hasClass(yt)
                  ? ((o = r.getTransitionDurationFromElement(this._backdrop)),
                    i["default"](this._backdrop)
                      .one(r.TRANSITION_END, f)
                      .emulateTransitionEnd(o))
                  : f())
              : n && n();
        }),
        (n._adjustDialog = function () {
          var n =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            n &&
            (this._element.style.paddingLeft = this._scrollbarWidth + "px");
          this._isBodyOverflowing &&
            !n &&
            (this._element.style.paddingRight = this._scrollbarWidth + "px");
        }),
        (n._resetAdjustments = function () {
          this._element.style.paddingLeft = "";
          this._element.style.paddingRight = "";
        }),
        (n._checkScrollbar = function () {
          var n = document.body.getBoundingClientRect();
          this._isBodyOverflowing =
            Math.round(n.left + n.right) < window.innerWidth;
          this._scrollbarWidth = this._getScrollbarWidth();
        }),
        (n._setScrollbar = function () {
          var n = this,
            t,
            r,
            u,
            f;
          this._isBodyOverflowing &&
            ((t = [].slice.call(document.querySelectorAll(vo))),
            (r = [].slice.call(document.querySelectorAll(yo))),
            i["default"](t).each(function (t, r) {
              var u = r.style.paddingRight,
                f = i["default"](r).css("padding-right");
              i["default"](r)
                .data("padding-right", u)
                .css("padding-right", parseFloat(f) + n._scrollbarWidth + "px");
            }),
            i["default"](r).each(function (t, r) {
              var u = r.style.marginRight,
                f = i["default"](r).css("margin-right");
              i["default"](r)
                .data("margin-right", u)
                .css("margin-right", parseFloat(f) - n._scrollbarWidth + "px");
            }),
            (u = document.body.style.paddingRight),
            (f = i["default"](document.body).css("padding-right")),
            i["default"](document.body)
              .data("padding-right", u)
              .css(
                "padding-right",
                parseFloat(f) + this._scrollbarWidth + "px"
              ));
          i["default"](document.body).addClass(eo);
        }),
        (n._resetScrollbar = function () {
          var r = [].slice.call(document.querySelectorAll(vo)),
            t,
            n;
          i["default"](r).each(function (n, t) {
            var r = i["default"](t).data("padding-right");
            i["default"](t).removeData("padding-right");
            t.style.paddingRight = r ? r : "";
          });
          t = [].slice.call(document.querySelectorAll("" + yo));
          i["default"](t).each(function (n, t) {
            var r = i["default"](t).data("margin-right");
            typeof r != "undefined" &&
              i["default"](t).css("margin-right", r).removeData("margin-right");
          });
          n = i["default"](document.body).data("padding-right");
          i["default"](document.body).removeData("padding-right");
          document.body.style.paddingRight = n ? n : "";
        }),
        (n._getScrollbarWidth = function () {
          var n = document.createElement("div"),
            t;
          return (
            (n.className = vy),
            document.body.appendChild(n),
            (t = n.getBoundingClientRect().width - n.clientWidth),
            document.body.removeChild(n),
            t
          );
        }),
        (t._jQueryInterface = function (n, r) {
          return this.each(function () {
            var f = i["default"](this).data(oi),
              e = u(
                {},
                sf,
                i["default"](this).data(),
                typeof n == "object" && n ? n : {}
              );
            if (
              (f || ((f = new t(this, e)), i["default"](this).data(oi, f)),
              typeof n == "string")
            ) {
              if (typeof f[n] == "undefined")
                throw new TypeError('No method named "' + n + '"');
              f[n](r);
            } else e.show && f.show(r);
          });
        }),
        s(t, null, [
          {
            key: "VERSION",
            get: function () {
              return cy;
            },
          },
          {
            key: "Default",
            get: function () {
              return sf;
            },
          },
        ]),
        t
      );
    })();
  i["default"](document).on(dy, '[data-toggle="modal"]', function (n) {
    var f = this,
      t,
      e = r.getSelectorFromElement(this),
      o,
      s;
    e && (t = document.querySelector(e));
    o = i["default"](t).data(oi)
      ? "toggle"
      : u({}, i["default"](t).data(), i["default"](this).data());
    (this.tagName === "A" || this.tagName === "AREA") && n.preventDefault();
    s = i["default"](t).one(ho, function (n) {
      if (!n.isDefaultPrevented())
        s.one(so, function () {
          i["default"](f).is(":visible") && f.focus();
        });
    });
    si._jQueryInterface.call(i["default"](t), o, this);
  });
  i["default"].fn[vt] = si._jQueryInterface;
  i["default"].fn[vt].Constructor = si;
  i["default"].fn[vt].noConflict = function () {
    return (i["default"].fn[vt] = ly), si._jQueryInterface;
  };
  var rp = [
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ],
    up = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    fp =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  var g = "tooltip",
    op = "4.6.2",
    kr = "bs.tooltip",
    c = "." + kr,
    sp = i["default"].fn[g],
    wo = "bs-tooltip",
    hp = new RegExp("(^|\\s)" + wo + "\\S+", "g"),
    cp = ["sanitize", "whiteList", "sanitizeFn"],
    hi = "fade",
    ci = "show",
    li = "show",
    hf = "out",
    lp = ".tooltip-inner",
    ap = ".arrow",
    ai = "hover",
    cf = "focus",
    vp = "click",
    yp = "manual",
    pp = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left",
    },
    wp = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: 0,
      container: !1,
      fallbackPlacement: "flip",
      boundary: "scrollParent",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    bp = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      whiteList: "object",
      popperConfig: "(null|object)",
    },
    kp = {
      HIDE: "hide" + c,
      HIDDEN: "hidden" + c,
      SHOW: "show" + c,
      SHOWN: "shown" + c,
      INSERTED: "inserted" + c,
      CLICK: "click" + c,
      FOCUSIN: "focusin" + c,
      FOCUSOUT: "focusout" + c,
      MOUSEENTER: "mouseenter" + c,
      MOUSELEAVE: "mouseleave" + c,
    },
    nt = (function () {
      function t(n, t) {
        if (typeof vr == "undefined")
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        this._isEnabled = !0;
        this._timeout = 0;
        this._hoverState = "";
        this._activeTrigger = {};
        this._popper = null;
        this.element = n;
        this.config = this._getConfig(t);
        this.tip = null;
        this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.enable = function () {
          this._isEnabled = !0;
        }),
        (n.disable = function () {
          this._isEnabled = !1;
        }),
        (n.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (n.toggle = function (n) {
          if (this._isEnabled)
            if (n) {
              var r = this.constructor.DATA_KEY,
                t = i["default"](n.currentTarget).data(r);
              t ||
                ((t = new this.constructor(
                  n.currentTarget,
                  this._getDelegateConfig()
                )),
                i["default"](n.currentTarget).data(r, t));
              t._activeTrigger.click = !t._activeTrigger.click;
              t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
            } else {
              if (i["default"](this.getTipElement()).hasClass(ci)) {
                this._leave(null, this);
                return;
              }
              this._enter(null, this);
            }
        }),
        (n.dispose = function () {
          clearTimeout(this._timeout);
          i["default"].removeData(this.element, this.constructor.DATA_KEY);
          i["default"](this.element).off(this.constructor.EVENT_KEY);
          i["default"](this.element)
            .closest(".modal")
            .off("hide.bs.modal", this._hideModalHandler);
          this.tip && i["default"](this.tip).remove();
          this._isEnabled = null;
          this._timeout = null;
          this._hoverState = null;
          this._activeTrigger = null;
          this._popper && this._popper.destroy();
          this._popper = null;
          this.element = null;
          this.config = null;
          this.tip = null;
        }),
        (n.show = function () {
          var t = this,
            u,
            f,
            h,
            n,
            e,
            c,
            o,
            l,
            s,
            a;
          if (i["default"](this.element).css("display") === "none")
            throw new Error("Please use show on visible elements");
          if (
            ((u = i["default"].Event(this.constructor.Event.SHOW)),
            this.isWithContent() && this._isEnabled)
          ) {
            if (
              (i["default"](this.element).trigger(u),
              (f = r.findShadowRoot(this.element)),
              (h = i["default"].contains(
                f !== null ? f : this.element.ownerDocument.documentElement,
                this.element
              )),
              u.isDefaultPrevented() || !h)
            )
              return;
            if (
              ((n = this.getTipElement()),
              (e = r.getUID(this.constructor.NAME)),
              n.setAttribute("id", e),
              this.element.setAttribute("aria-describedby", e),
              this.setContent(),
              this.config.animation && i["default"](n).addClass(hi),
              (c =
                typeof this.config.placement == "function"
                  ? this.config.placement.call(this, n, this.element)
                  : this.config.placement),
              (o = this._getAttachment(c)),
              this.addAttachmentClass(o),
              (l = this._getContainer()),
              i["default"](n).data(this.constructor.DATA_KEY, this),
              i["default"].contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || i["default"](n).appendTo(l),
              i["default"](this.element).trigger(
                this.constructor.Event.INSERTED
              ),
              (this._popper = new vr(
                this.element,
                n,
                this._getPopperConfig(o)
              )),
              i["default"](n).addClass(ci),
              i["default"](n).addClass(this.config.customClass),
              "ontouchstart" in document.documentElement)
            )
              i["default"](document.body)
                .children()
                .on("mouseover", null, i["default"].noop);
            s = function () {
              t.config.animation && t._fixTransition();
              var n = t._hoverState;
              t._hoverState = null;
              i["default"](t.element).trigger(t.constructor.Event.SHOWN);
              n === hf && t._leave(null, t);
            };
            i["default"](this.tip).hasClass(hi)
              ? ((a = r.getTransitionDurationFromElement(this.tip)),
                i["default"](this.tip)
                  .one(r.TRANSITION_END, s)
                  .emulateTransitionEnd(a))
              : s();
          }
        }),
        (n.hide = function (n) {
          var t = this,
            u = this.getTipElement(),
            f = i["default"].Event(this.constructor.Event.HIDE),
            e = function () {
              t._hoverState !== li &&
                u.parentNode &&
                u.parentNode.removeChild(u);
              t._cleanTipClass();
              t.element.removeAttribute("aria-describedby");
              i["default"](t.element).trigger(t.constructor.Event.HIDDEN);
              t._popper !== null && t._popper.destroy();
              n && n();
            },
            o;
          (i["default"](this.element).trigger(f), f.isDefaultPrevented()) ||
            (i["default"](u).removeClass(ci),
            "ontouchstart" in document.documentElement &&
              i["default"](document.body)
                .children()
                .off("mouseover", null, i["default"].noop),
            (this._activeTrigger[vp] = !1),
            (this._activeTrigger[cf] = !1),
            (this._activeTrigger[ai] = !1),
            i["default"](this.tip).hasClass(hi)
              ? ((o = r.getTransitionDurationFromElement(u)),
                i["default"](u)
                  .one(r.TRANSITION_END, e)
                  .emulateTransitionEnd(o))
              : e(),
            (this._hoverState = ""));
        }),
        (n.update = function () {
          this._popper !== null && this._popper.scheduleUpdate();
        }),
        (n.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (n.addAttachmentClass = function (n) {
          i["default"](this.getTipElement()).addClass(wo + "-" + n);
        }),
        (n.getTipElement = function () {
          return (
            (this.tip = this.tip || i["default"](this.config.template)[0]),
            this.tip
          );
        }),
        (n.setContent = function () {
          var n = this.getTipElement();
          this.setElementContent(
            i["default"](n.querySelectorAll(lp)),
            this.getTitle()
          );
          i["default"](n).removeClass(hi + " " + ci);
        }),
        (n.setElementContent = function (n, t) {
          if (typeof t == "object" && (t.nodeType || t.jquery)) {
            this.config.html
              ? i["default"](t).parent().is(n) || n.empty().append(t)
              : n.text(i["default"](t).text());
            return;
          }
          this.config.html
            ? (this.config.sanitize &&
                (t = po(t, this.config.whiteList, this.config.sanitizeFn)),
              n.html(t))
            : n.text(t);
        }),
        (n.getTitle = function () {
          var n = this.element.getAttribute("data-original-title");
          return (
            n ||
              (n =
                typeof this.config.title == "function"
                  ? this.config.title.call(this.element)
                  : this.config.title),
            n
          );
        }),
        (n._getPopperConfig = function (n) {
          var t = this,
            i = {
              placement: n,
              modifiers: {
                offset: this._getOffset(),
                flip: {
                  behavior: this.config.fallbackPlacement,
                },
                arrow: {
                  element: ap,
                },
                preventOverflow: {
                  boundariesElement: this.config.boundary,
                },
              },
              onCreate: function (n) {
                n.originalPlacement !== n.placement &&
                  t._handlePopperPlacementChange(n);
              },
              onUpdate: function (n) {
                return t._handlePopperPlacementChange(n);
              },
            };
          return u({}, i, this.config.popperConfig);
        }),
        (n._getOffset = function () {
          var t = this,
            n = {};
          return (
            typeof this.config.offset == "function"
              ? (n.fn = function (n) {
                  return (
                    (n.offsets = u(
                      {},
                      n.offsets,
                      t.config.offset(n.offsets, t.element)
                    )),
                    n
                  );
                })
              : (n.offset = this.config.offset),
            n
          );
        }),
        (n._getContainer = function () {
          return this.config.container === !1
            ? document.body
            : r.isElement(this.config.container)
            ? i["default"](this.config.container)
            : i["default"](document).find(this.config.container);
        }),
        (n._getAttachment = function (n) {
          return pp[n.toUpperCase()];
        }),
        (n._setListeners = function () {
          var n = this,
            t = this.config.trigger.split(" ");
          t.forEach(function (t) {
            if (t === "click")
              i["default"](n.element).on(
                n.constructor.Event.CLICK,
                n.config.selector,
                function (t) {
                  return n.toggle(t);
                }
              );
            else if (t !== yp) {
              var r =
                  t === ai
                    ? n.constructor.Event.MOUSEENTER
                    : n.constructor.Event.FOCUSIN,
                u =
                  t === ai
                    ? n.constructor.Event.MOUSELEAVE
                    : n.constructor.Event.FOCUSOUT;
              i["default"](n.element)
                .on(r, n.config.selector, function (t) {
                  return n._enter(t);
                })
                .on(u, n.config.selector, function (t) {
                  return n._leave(t);
                });
            }
          });
          this._hideModalHandler = function () {
            n.element && n.hide();
          };
          i["default"](this.element)
            .closest(".modal")
            .on("hide.bs.modal", this._hideModalHandler);
          this.config.selector
            ? (this.config = u({}, this.config, {
                trigger: "manual",
                selector: "",
              }))
            : this._fixTitle();
        }),
        (n._fixTitle = function () {
          var n = typeof this.element.getAttribute("data-original-title");
          (this.element.getAttribute("title") || n !== "string") &&
            (this.element.setAttribute(
              "data-original-title",
              this.element.getAttribute("title") || ""
            ),
            this.element.setAttribute("title", ""));
        }),
        (n._enter = function (n, t) {
          var r = this.constructor.DATA_KEY;
          if (
            ((t = t || i["default"](n.currentTarget).data(r)),
            t ||
              ((t = new this.constructor(
                n.currentTarget,
                this._getDelegateConfig()
              )),
              i["default"](n.currentTarget).data(r, t)),
            n && (t._activeTrigger[n.type === "focusin" ? cf : ai] = !0),
            i["default"](t.getTipElement()).hasClass(ci) ||
              t._hoverState === li)
          ) {
            t._hoverState = li;
            return;
          }
          if (
            (clearTimeout(t._timeout),
            (t._hoverState = li),
            !t.config.delay || !t.config.delay.show)
          ) {
            t.show();
            return;
          }
          t._timeout = setTimeout(function () {
            t._hoverState === li && t.show();
          }, t.config.delay.show);
        }),
        (n._leave = function (n, t) {
          var r = this.constructor.DATA_KEY;
          if (
            ((t = t || i["default"](n.currentTarget).data(r)),
            t ||
              ((t = new this.constructor(
                n.currentTarget,
                this._getDelegateConfig()
              )),
              i["default"](n.currentTarget).data(r, t)),
            n && (t._activeTrigger[n.type === "focusout" ? cf : ai] = !1),
            !t._isWithActiveTrigger())
          ) {
            if (
              (clearTimeout(t._timeout),
              (t._hoverState = hf),
              !t.config.delay || !t.config.delay.hide)
            ) {
              t.hide();
              return;
            }
            t._timeout = setTimeout(function () {
              t._hoverState === hf && t.hide();
            }, t.config.delay.hide);
          }
        }),
        (n._isWithActiveTrigger = function () {
          for (var n in this._activeTrigger)
            if (this._activeTrigger[n]) return !0;
          return !1;
        }),
        (n._getConfig = function (n) {
          var t = i["default"](this.element).data();
          return (
            Object.keys(t).forEach(function (n) {
              cp.indexOf(n) !== -1 && delete t[n];
            }),
            (n = u(
              {},
              this.constructor.Default,
              t,
              typeof n == "object" && n ? n : {}
            )),
            typeof n.delay == "number" &&
              (n.delay = {
                show: n.delay,
                hide: n.delay,
              }),
            typeof n.title == "number" && (n.title = n.title.toString()),
            typeof n.content == "number" && (n.content = n.content.toString()),
            r.typeCheckConfig(g, n, this.constructor.DefaultType),
            n.sanitize &&
              (n.template = po(n.template, n.whiteList, n.sanitizeFn)),
            n
          );
        }),
        (n._getDelegateConfig = function () {
          var t = {},
            n;
          if (this.config)
            for (n in this.config)
              this.constructor.Default[n] !== this.config[n] &&
                (t[n] = this.config[n]);
          return t;
        }),
        (n._cleanTipClass = function () {
          var t = i["default"](this.getTipElement()),
            n = t.attr("class").match(hp);
          n !== null && n.length && t.removeClass(n.join(""));
        }),
        (n._handlePopperPlacementChange = function (n) {
          this.tip = n.instance.popper;
          this._cleanTipClass();
          this.addAttachmentClass(this._getAttachment(n.placement));
        }),
        (n._fixTransition = function () {
          var n = this.getTipElement(),
            t = this.config.animation;
          n.getAttribute("x-placement") === null &&
            (i["default"](n).removeClass(hi),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = t));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var u = i["default"](this),
              r = u.data(kr),
              f = typeof n == "object" && n;
            if (
              (r || !/dispose|hide/.test(n)) &&
              (r || ((r = new t(this, f)), u.data(kr, r)), typeof n == "string")
            ) {
              if (typeof r[n] == "undefined")
                throw new TypeError('No method named "' + n + '"');
              r[n]();
            }
          });
        }),
        s(t, null, [
          {
            key: "VERSION",
            get: function () {
              return op;
            },
          },
          {
            key: "Default",
            get: function () {
              return wp;
            },
          },
          {
            key: "NAME",
            get: function () {
              return g;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return kr;
            },
          },
          {
            key: "Event",
            get: function () {
              return kp;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return c;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return bp;
            },
          },
        ]),
        t
      );
    })();
  i["default"].fn[g] = nt._jQueryInterface;
  i["default"].fn[g].Constructor = nt;
  i["default"].fn[g].noConflict = function () {
    return (i["default"].fn[g] = sp), nt._jQueryInterface;
  };
  var pt = "popover",
    dp = "4.6.2",
    dr = "bs.popover",
    l = "." + dr,
    gp = i["default"].fn[pt],
    bo = "bs-popover",
    nw = new RegExp("(^|\\s)" + bo + "\\S+", "g"),
    tw = "fade",
    iw = "show",
    rw = ".popover-header",
    uw = ".popover-body",
    fw = u({}, nt.Default, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    ew = u({}, nt.DefaultType, {
      content: "(string|element|function)",
    }),
    ow = {
      HIDE: "hide" + l,
      HIDDEN: "hidden" + l,
      SHOW: "show" + l,
      SHOWN: "shown" + l,
      INSERTED: "inserted" + l,
      CLICK: "click" + l,
      FOCUSIN: "focusin" + l,
      FOCUSOUT: "focusout" + l,
      MOUSEENTER: "mouseenter" + l,
      MOUSELEAVE: "mouseleave" + l,
    },
    gr = (function (n) {
      function t() {
        return n.apply(this, arguments) || this;
      }
      ls(t, n);
      var r = t.prototype;
      return (
        (r.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (r.addAttachmentClass = function (n) {
          i["default"](this.getTipElement()).addClass(bo + "-" + n);
        }),
        (r.getTipElement = function () {
          return (
            (this.tip = this.tip || i["default"](this.config.template)[0]),
            this.tip
          );
        }),
        (r.setContent = function () {
          var t = i["default"](this.getTipElement()),
            n;
          this.setElementContent(t.find(rw), this.getTitle());
          n = this._getContent();
          typeof n == "function" && (n = n.call(this.element));
          this.setElementContent(t.find(uw), n);
          t.removeClass(tw + " " + iw);
        }),
        (r._getContent = function () {
          return (
            this.element.getAttribute("data-content") || this.config.content
          );
        }),
        (r._cleanTipClass = function () {
          var t = i["default"](this.getTipElement()),
            n = t.attr("class").match(nw);
          n !== null && n.length > 0 && t.removeClass(n.join(""));
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var r = i["default"](this).data(dr),
              u = typeof n == "object" ? n : null;
            if (
              (r || !/dispose|hide/.test(n)) &&
              (r || ((r = new t(this, u)), i["default"](this).data(dr, r)),
              typeof n == "string")
            ) {
              if (typeof r[n] == "undefined")
                throw new TypeError('No method named "' + n + '"');
              r[n]();
            }
          });
        }),
        s(t, null, [
          {
            key: "VERSION",
            get: function () {
              return dp;
            },
          },
          {
            key: "Default",
            get: function () {
              return fw;
            },
          },
          {
            key: "NAME",
            get: function () {
              return pt;
            },
          },
          {
            key: "DATA_KEY",
            get: function () {
              return dr;
            },
          },
          {
            key: "Event",
            get: function () {
              return ow;
            },
          },
          {
            key: "EVENT_KEY",
            get: function () {
              return l;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return ew;
            },
          },
        ]),
        t
      );
    })(nt);
  i["default"].fn[pt] = gr._jQueryInterface;
  i["default"].fn[pt].Constructor = gr;
  i["default"].fn[pt].noConflict = function () {
    return (i["default"].fn[pt] = gp), gr._jQueryInterface;
  };
  var tt = "scrollspy",
    sw = "4.6.2",
    nu = "bs.scrollspy",
    tu = "." + nu,
    hw = i["default"].fn[tt],
    cw = "dropdown-item",
    it = "active",
    lw = "activate" + tu,
    aw = "scroll" + tu,
    vw = "load" + tu + ".data-api",
    yw = "offset",
    ko = "position",
    pw = '[data-spy="scroll"]',
    go = ".nav, .list-group",
    lf = ".nav-link",
    ww = ".nav-item",
    ns = ".list-group-item",
    bw = ".dropdown",
    kw = ".dropdown-item",
    dw = ".dropdown-toggle",
    ts = {
      offset: 10,
      method: "auto",
      target: "",
    },
    gw = {
      offset: "number",
      method: "string",
      target: "(string|element)",
    },
    vi = (function () {
      function t(n, t) {
        var r = this;
        this._element = n;
        this._scrollElement = n.tagName === "BODY" ? window : n;
        this._config = this._getConfig(t);
        this._selector =
          this._config.target +
          " " +
          lf +
          "," +
          (this._config.target + " " + ns + ",") +
          (this._config.target + " " + kw);
        this._offsets = [];
        this._targets = [];
        this._activeTarget = null;
        this._scrollHeight = 0;
        i["default"](this._scrollElement).on(aw, function (n) {
          return r._process(n);
        });
        this.refresh();
        this._process();
      }
      var n = t.prototype;
      return (
        (n.refresh = function () {
          var n = this,
            f = this._scrollElement === this._scrollElement.window ? yw : ko,
            t = this._config.method === "auto" ? f : this._config.method,
            e = t === ko ? this._getScrollTop() : 0,
            u;
          this._offsets = [];
          this._targets = [];
          this._scrollHeight = this._getScrollHeight();
          u = [].slice.call(document.querySelectorAll(this._selector));
          u.map(function (n) {
            var u,
              f = r.getSelectorFromElement(n),
              o;
            return (f && (u = document.querySelector(f)),
            u && ((o = u.getBoundingClientRect()), o.width || o.height))
              ? [i["default"](u)[t]().top + e, f]
              : null;
          })
            .filter(Boolean)
            .sort(function (n, t) {
              return n[0] - t[0];
            })
            .forEach(function (t) {
              n._offsets.push(t[0]);
              n._targets.push(t[1]);
            });
        }),
        (n.dispose = function () {
          i["default"].removeData(this._element, nu);
          i["default"](this._scrollElement).off(tu);
          this._element = null;
          this._scrollElement = null;
          this._config = null;
          this._selector = null;
          this._offsets = null;
          this._targets = null;
          this._activeTarget = null;
          this._scrollHeight = null;
        }),
        (n._getConfig = function (n) {
          if (
            ((n = u({}, ts, typeof n == "object" && n ? n : {})),
            typeof n.target != "string" && r.isElement(n.target))
          ) {
            var t = i["default"](n.target).attr("id");
            t || ((t = r.getUID(tt)), i["default"](n.target).attr("id", t));
            n.target = "#" + t;
          }
          return r.typeCheckConfig(tt, n, gw), n;
        }),
        (n._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (n._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (n._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (n._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            r = this._getScrollHeight(),
            f = this._config.offset + r - this._getOffsetHeight(),
            i,
            n,
            u;
          if ((this._scrollHeight !== r && this.refresh(), t >= f)) {
            i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
            return;
          }
          if (
            this._activeTarget &&
            t < this._offsets[0] &&
            this._offsets[0] > 0
          ) {
            this._activeTarget = null;
            this._clear();
            return;
          }
          for (n = this._offsets.length; n--; )
            (u =
              this._activeTarget !== this._targets[n] &&
              t >= this._offsets[n] &&
              (typeof this._offsets[n + 1] == "undefined" ||
                t < this._offsets[n + 1])),
              u && this._activate(this._targets[n]);
        }),
        (n._activate = function (n) {
          this._activeTarget = n;
          this._clear();
          var r = this._selector.split(",").map(function (t) {
              return (
                t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]'
              );
            }),
            t = i["default"](
              [].slice.call(document.querySelectorAll(r.join(",")))
            );
          t.hasClass(cw)
            ? (t.closest(bw).find(dw).addClass(it), t.addClass(it))
            : (t.addClass(it),
              t
                .parents(go)
                .prev(lf + ", " + ns)
                .addClass(it),
              t.parents(go).prev(ww).children(lf).addClass(it));
          i["default"](this._scrollElement).trigger(lw, {
            relatedTarget: n,
          });
        }),
        (n._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (n) {
              return n.classList.contains(it);
            })
            .forEach(function (n) {
              return n.classList.remove(it);
            });
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var r = i["default"](this).data(nu),
              u = typeof n == "object" && n;
            if (
              (r || ((r = new t(this, u)), i["default"](this).data(nu, r)),
              typeof n == "string")
            ) {
              if (typeof r[n] == "undefined")
                throw new TypeError('No method named "' + n + '"');
              r[n]();
            }
          });
        }),
        s(t, null, [
          {
            key: "VERSION",
            get: function () {
              return sw;
            },
          },
          {
            key: "Default",
            get: function () {
              return ts;
            },
          },
        ]),
        t
      );
    })();
  i["default"](window).on(vw, function () {
    for (
      var n,
        t = [].slice.call(document.querySelectorAll(pw)),
        u = t.length,
        r = u;
      r--;

    )
      (n = i["default"](t[r])), vi._jQueryInterface.call(n, n.data());
  });
  i["default"].fn[tt] = vi._jQueryInterface;
  i["default"].fn[tt].Constructor = vi;
  i["default"].fn[tt].noConflict = function () {
    return (i["default"].fn[tt] = hw), vi._jQueryInterface;
  };
  var yi = "tab",
    nb = "4.6.2",
    iu = "bs.tab",
    pi = "." + iu,
    tb = i["default"].fn[yi],
    ib = "dropdown-menu",
    wi = "active",
    rb = "disabled",
    is = "fade",
    rs = "show",
    ub = "hide" + pi,
    fb = "hidden" + pi,
    eb = "show" + pi,
    ob = "shown" + pi,
    sb = "click" + pi + ".data-api",
    hb = ".dropdown",
    cb = ".nav, .list-group",
    us = ".active",
    fs = "> li > .active",
    lb = ".dropdown-toggle",
    ab = "> .dropdown-menu .active",
    bi = (function () {
      function n(n) {
        this._element = n;
      }
      var t = n.prototype;
      return (
        (t.show = function () {
          var h = this,
            u,
            n,
            t,
            f,
            c,
            e,
            o,
            s;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
            i["default"](this._element).hasClass(wi)) ||
            i["default"](this._element).hasClass(rb) ||
            this._element.hasAttribute("disabled") ||
            ((t = i["default"](this._element).closest(cb)[0]),
            (f = r.getSelectorFromElement(this._element)),
            t &&
              ((c = t.nodeName === "UL" || t.nodeName === "OL" ? fs : us),
              (n = i["default"].makeArray(i["default"](t).find(c))),
              (n = n[n.length - 1])),
            (e = i["default"].Event(ub, {
              relatedTarget: this._element,
            })),
            (o = i["default"].Event(eb, {
              relatedTarget: n,
            })),
            n && i["default"](n).trigger(e),
            i["default"](this._element).trigger(o),
            o.isDefaultPrevented() || e.isDefaultPrevented()) ||
            (f && (u = document.querySelector(f)),
            this._activate(this._element, t),
            (s = function () {
              var t = i["default"].Event(fb, {
                  relatedTarget: h._element,
                }),
                r = i["default"].Event(ob, {
                  relatedTarget: n,
                });
              i["default"](n).trigger(t);
              i["default"](h._element).trigger(r);
            }),
            u ? this._activate(u, u.parentNode, s) : s());
        }),
        (t.dispose = function () {
          i["default"].removeData(this._element, iu);
          this._element = null;
        }),
        (t._activate = function (n, t, u) {
          var s = this,
            h =
              t && (t.nodeName === "UL" || t.nodeName === "OL")
                ? i["default"](t).find(fs)
                : i["default"](t).children(us),
            f = h[0],
            c = u && f && i["default"](f).hasClass(is),
            e = function () {
              return s._transitionComplete(n, f, u);
            },
            o;
          f && c
            ? ((o = r.getTransitionDurationFromElement(f)),
              i["default"](f)
                .removeClass(rs)
                .one(r.TRANSITION_END, e)
                .emulateTransitionEnd(o))
            : e();
        }),
        (t._transitionComplete = function (n, t, u) {
          var e, f, o, s;
          t &&
            (i["default"](t).removeClass(wi),
            (e = i["default"](t.parentNode).find(ab)[0]),
            e && i["default"](e).removeClass(wi),
            t.getAttribute("role") === "tab" &&
              t.setAttribute("aria-selected", !1));
          i["default"](n).addClass(wi);
          n.getAttribute("role") === "tab" &&
            n.setAttribute("aria-selected", !0);
          r.reflow(n);
          n.classList.contains(is) && n.classList.add(rs);
          f = n.parentNode;
          f && f.nodeName === "LI" && (f = f.parentNode);
          f &&
            i["default"](f).hasClass(ib) &&
            ((o = i["default"](n).closest(hb)[0]),
            o &&
              ((s = [].slice.call(o.querySelectorAll(lb))),
              i["default"](s).addClass(wi)),
            n.setAttribute("aria-expanded", !0));
          u && u();
        }),
        (n._jQueryInterface = function (t) {
          return this.each(function () {
            var u = i["default"](this),
              r = u.data(iu);
            if (
              (r || ((r = new n(this)), u.data(iu, r)), typeof t == "string")
            ) {
              if (typeof r[t] == "undefined")
                throw new TypeError('No method named "' + t + '"');
              r[t]();
            }
          });
        }),
        s(n, null, [
          {
            key: "VERSION",
            get: function () {
              return nb;
            },
          },
        ]),
        n
      );
    })();
  i["default"](document).on(
    sb,
    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    function (n) {
      n.preventDefault();
      bi._jQueryInterface.call(i["default"](this), "show");
    }
  );
  i["default"].fn[yi] = bi._jQueryInterface;
  i["default"].fn[yi].Constructor = bi;
  i["default"].fn[yi].noConflict = function () {
    return (i["default"].fn[yi] = tb), bi._jQueryInterface;
  };
  var wt = "toast",
    vb = "4.6.2",
    ru = "bs.toast",
    ki = "." + ru,
    yb = i["default"].fn[wt],
    pb = "fade",
    es = "hide",
    di = "show",
    os = "showing",
    ss = "click.dismiss" + ki,
    wb = "hide" + ki,
    bb = "hidden" + ki,
    kb = "show" + ki,
    db = "shown" + ki,
    gb = '[data-dismiss="toast"]',
    hs = {
      animation: !0,
      autohide: !0,
      delay: 500,
    },
    nk = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number",
    },
    uu = (function () {
      function t(n, t) {
        this._element = n;
        this._config = this._getConfig(t);
        this._timeout = null;
        this._setListeners();
      }
      var n = t.prototype;
      return (
        (n.show = function () {
          var n = this,
            u = i["default"].Event(kb),
            t,
            f;
          (i["default"](this._element).trigger(u), u.isDefaultPrevented()) ||
            (this._clearTimeout(),
            this._config.animation && this._element.classList.add(pb),
            (t = function () {
              n._element.classList.remove(os);
              n._element.classList.add(di);
              i["default"](n._element).trigger(db);
              n._config.autohide &&
                (n._timeout = setTimeout(function () {
                  n.hide();
                }, n._config.delay));
            }),
            this._element.classList.remove(es),
            r.reflow(this._element),
            this._element.classList.add(os),
            this._config.animation
              ? ((f = r.getTransitionDurationFromElement(this._element)),
                i["default"](this._element)
                  .one(r.TRANSITION_END, t)
                  .emulateTransitionEnd(f))
              : t());
        }),
        (n.hide = function () {
          if (this._element.classList.contains(di)) {
            var n = i["default"].Event(wb);
            (i["default"](this._element).trigger(n), n.isDefaultPrevented()) ||
              this._close();
          }
        }),
        (n.dispose = function () {
          this._clearTimeout();
          this._element.classList.contains(di) &&
            this._element.classList.remove(di);
          i["default"](this._element).off(ss);
          i["default"].removeData(this._element, ru);
          this._element = null;
          this._config = null;
        }),
        (n._getConfig = function (n) {
          return (
            (n = u(
              {},
              hs,
              i["default"](this._element).data(),
              typeof n == "object" && n ? n : {}
            )),
            r.typeCheckConfig(wt, n, this.constructor.DefaultType),
            n
          );
        }),
        (n._setListeners = function () {
          var n = this;
          i["default"](this._element).on(ss, gb, function () {
            return n.hide();
          });
        }),
        (n._close = function () {
          var n = this,
            t = function () {
              n._element.classList.add(es);
              i["default"](n._element).trigger(bb);
            },
            u;
          this._element.classList.remove(di);
          this._config.animation
            ? ((u = r.getTransitionDurationFromElement(this._element)),
              i["default"](this._element)
                .one(r.TRANSITION_END, t)
                .emulateTransitionEnd(u))
            : t();
        }),
        (n._clearTimeout = function () {
          clearTimeout(this._timeout);
          this._timeout = null;
        }),
        (t._jQueryInterface = function (n) {
          return this.each(function () {
            var u = i["default"](this),
              r = u.data(ru),
              f = typeof n == "object" && n;
            if (
              (r || ((r = new t(this, f)), u.data(ru, r)), typeof n == "string")
            ) {
              if (typeof r[n] == "undefined")
                throw new TypeError('No method named "' + n + '"');
              r[n](this);
            }
          });
        }),
        s(t, null, [
          {
            key: "VERSION",
            get: function () {
              return vb;
            },
          },
          {
            key: "DefaultType",
            get: function () {
              return nk;
            },
          },
          {
            key: "Default",
            get: function () {
              return hs;
            },
          },
        ]),
        t
      );
    })();
  i["default"].fn[wt] = uu._jQueryInterface;
  i["default"].fn[wt].Constructor = uu;
  i["default"].fn[wt].noConflict = function () {
    return (i["default"].fn[wt] = yb), uu._jQueryInterface;
  };
  n.Alert = rt;
  n.Button = dt;
  n.Carousel = ft;
  n.Collapse = ii;
  n.Dropdown = p;
  n.Modal = si;
  n.Popover = gr;
  n.Scrollspy = vi;
  n.Tab = bi;
  n.Toast = uu;
  n.Tooltip = nt;
  n.Util = r;
  Object.defineProperty(n, "__esModule", {
    value: !0,
  });
});
/*! js-cookie v3.0.1 | MIT */
(function (n, t) {
  typeof exports == "object" && typeof module != "undefined"
    ? (module.exports = t())
    : typeof define == "function" && define.amd
    ? define(t)
    : ((n = n || self),
      (function () {
        var r = n.Cookies,
          i = (n.Cookies = t());
        i.noConflict = function () {
          return (n.Cookies = r), i;
        };
      })());
})(this, function () {
  "use strict";

  function n(n) {
    for (var i, r, t = 1; t < arguments.length; t++) {
      i = arguments[t];
      for (r in i) n[r] = i[r];
    }
    return n;
  }

  function t(i, r) {
    function u(t, u, f) {
      var o, e;
      if (typeof document != "undefined") {
        f = n({}, r, f);
        typeof f.expires == "number" &&
          (f.expires = new Date(Date.now() + f.expires * 864e5));
        f.expires && (f.expires = f.expires.toUTCString());
        t = encodeURIComponent(t)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape);
        o = "";
        for (e in f)
          f[e] &&
            ((o += "; " + e), f[e] !== !0) &&
            (o += "=" + f[e].split(";")[0]);
        return (document.cookie = t + "=" + i.write(u, t) + o);
      }
    }

    function f(n) {
      var f, t, r, e, o, u;
      if (typeof document != "undefined" && (!arguments.length || n)) {
        for (
          f = document.cookie ? document.cookie.split("; ") : [], t = {}, r = 0;
          r < f.length;
          r++
        ) {
          e = f[r].split("=");
          o = e.slice(1).join("=");
          try {
            if (
              ((u = decodeURIComponent(e[0])), (t[u] = i.read(o, u)), n === u)
            )
              break;
          } catch (s) {}
        }
        return n ? t[n] : t;
      }
    }
    return Object.create(
      {
        set: u,
        get: f,
        remove: function (t, i) {
          u(
            t,
            "",
            n({}, i, {
              expires: -1,
            })
          );
        },
        withAttributes: function (i) {
          return t(this.converter, n({}, this.attributes, i));
        },
        withConverter: function (i) {
          return t(n({}, this.converter, i), this.attributes);
        },
      },
      {
        attributes: {
          value: Object.freeze(r),
        },
        converter: {
          value: Object.freeze(i),
        },
      }
    );
  }
  var i = {
    read: function (n) {
      return (
        n[0] === '"' && (n = n.slice(1, -1)),
        n.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
      );
    },
    write: function (n) {
      return encodeURIComponent(n).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      );
    },
  };
  return t(i, {
    path: "/",
  });
});
