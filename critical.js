!(function (n) {
  var e = {};

  function r(t) {
    if (e[t]) return e[t].exports;
    var o = (e[t] = {
      i: t,
      l: !1,
      exports: {},
    });
    return n[t].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = n),
    (r.c = e),
    (r.d = function (n, e, t) {
      r.o(n, e) ||
        Object.defineProperty(n, e, {
          enumerable: !0,
          get: t,
        });
    }),
    (r.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(n, "__esModule", {
          value: !0,
        });
    }),
    (r.t = function (n, e) {
      if ((1 & e && (n = r(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var t = Object.create(null);
      if (
        (r.r(t),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            value: n,
          }),
          2 & e && "string" != typeof n)
      )
        for (var o in n)
          r.d(
            t,
            o,
            function (e) {
              return n[e];
            }.bind(null, o)
          );
      return t;
    }),
    (r.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
            return n.default;
          }
          : function () {
            return n;
          };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (r.p = "/"),
    r((r.s = 3));
})({
  3: function (n, e) {
    var r = [
      ["#FFDA7A", "#FF6969"],
      ["#F29FFF", "#7C99FF"],
      ["#6491D6", "#43F0C7"],
    ],
      t = function () {
        return r[Math.floor(Math.random() * r.length)];
      },
      o = function (n) {
        return "linear-gradient(90deg, "
          .concat(n[0], " 0%, ")
          .concat(n[1], " 100%)");
      },
      c = function (n) {
        return "background: ".concat(o(n), ";");
      };
    [].slice
      .call(document.querySelectorAll(".gg-symbol--gradient"))
      .forEach(function (n) {
        n.style.background = o(t());
      });
    var u = "font-size: 8px; ";
  },
});

document.addEventListener('DOMContentLoaded', () => {

  //------ Slider Begin
  const CaroS = document.querySelector('.Carousel-slider');
  const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
  const hammer = new Hammer(CaroS);
  const CaroSTimer = 2000;
  let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

  //------- Mouseenter Event
  CaroS.onmouseenter = function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + ' mouse detected');
  }

  //----- Mouseleave Event
  CaroS.onmouseleave = function (e) {
    clearInterval(CaroAutoplay);
    CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    console.log(e.type + ' mouse detected');
  }

  //----- Mouseclick Event
  CaroS.onclick = function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + ' mouse detected');
  }

  //------ Gesture Tap Event
  hammer.on('tap', function (e) {
    clearInterval(CaroAutoplay);
    console.log(e.type + ' gesture detected');
  });

  //----- Gesture Swipe Event
  hammer.on('swipe', function (e) {
    clearInterval(CaroAutoplay);
    CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    console.log(e.type + ' gesture detected');
  });

  let slideLink = document.querySelectorAll('.slider-item');
  if (slideLink && slideLink !== null && slideLink.length > 0) {
    slideLink.forEach(el => el.addEventListener('click', e => {
      e.preventDefault();
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target);
    }));
  }

  //---- Slider End

});