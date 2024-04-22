(function () {
  var w = ".mobile-fig-caption",
    t = document.querySelectorAll(".carousel")[0],
    r = !0,
    n,
    i,
    h,
    p,
    u,
    c,
    l,
    f,
    a,
    e,
    v,
    o;
  if (t) {
    n = t.querySelectorAll("figure");
    i = n.length;
    let d = 0;
    var s = t.querySelector(w),
      b = s.querySelector(".title"),
      k = s.querySelector(".body"),
      y = s.querySelector(".link");
    for (
      n[0].classList.add("card-center"),
        n[1].classList.add("card-next"),
        n[i - 1].classList.add("card-prev"),
        tt(0),
        nt(),
        h = document.createElement("div"),
        h.classList.add("indicator-group"),
        t.appendChild(h),
        p = t.querySelectorAll(".indicator-group")[0],
        u = t.querySelector(".controller"),
        u.classList.remove("hidden"),
        t.appendChild(u),
        c = u.querySelector("#play"),
        l = u.querySelector("#pause"),
        f = 0;
      f < n.length;
      f++
    )
      (a = n[f]),
        a.classList.add("card"),
        (e = document.createElement("button")),
        e.classList.add("indicator"),
        (e.dataset.slideId = f),
        (e.ariaLabel =
          "Jump to " +
          a.querySelector("figcaption .title").textContent.trim() +
          " slide"),
        f === 0 && e.classList.add("current"),
        p.append(e);
    v = t.querySelectorAll(".indicator");

    function g(t) {
      d = t;
      [].forEach.call(n, function (n) {
        n.classList.remove("card-center");
        n.classList.remove("card-prev");
        n.classList.remove("card-next");
      });
      [].forEach.call(v, function (n) {
        n.classList.remove("current");
      });
      n[d].classList.add("card-center");
      d < i - 1
        ? n[d + 1].classList.add("card-next")
        : n[0].classList.add("card-next");
      d > 0
        ? n[d - 1].classList.add("card-prev")
        : n[i - 1].classList.add("card-prev");
      [].forEach.call(n, function (n) {
        n.classList.contains("card-prev") ||
        n.classList.contains("card-center") ||
        n.classList.contains("card-next")
          ? n.querySelector("a").removeAttribute("tabindex")
          : n.querySelector("a").setAttribute("tabindex", "-1");
      });
      v[d].classList.add("current");
      tt(d);
    }

    function tt(t) {
      b.innerText = n[t].querySelector("figcaption .title").textContent.trim();
      k.innerText = n[t].querySelector("figcaption .body").textContent.trim();
      y.innerHTML = n[t].querySelector("figcaption .link").innerHTML;
      y.href = n[t].querySelector("figcaption .link").href;
    }

    function nt() {
      o = setInterval(() => (d < i - 1 ? g(d + 1) : g(0)), 8e3);
    }
    t.querySelector(".carousel-next").addEventListener(
      "click",
      function () {
        r && clearInterval(o);
        d < i - 1 ? g(d + 1) : g(0);
        r && nt();
      },
      !1
    );
    t.querySelector(".carousel-prev").addEventListener(
      "click",
      function () {
        r && clearInterval(o);
        d > 0 ? g(d - 1) : g(i - 1);
        r && nt();
      },
      !1
    );
    t.querySelectorAll(".indicator").forEach(function (n) {
      n.addEventListener("click", function (n) {
        n.preventDefault();
        g(parseInt(n.currentTarget.dataset.slideId));
      });
    });
    t.onkeydown = function (n) {
      n = n || window.event;
      n.keyCode === 37
        ? d > 0
          ? g(d - 1)
          : g(i - 1)
        : n.keyCode === 39 && (d < i - 1 ? g(d + 1) : g(0));
    };
    u.addEventListener("click", () => {
      (r = !r),
        r
          ? (l.classList.toggle("hidden"), c.classList.toggle("hidden"), nt())
          : (l.classList.toggle("hidden"),
            c.classList.toggle("hidden"),
            clearInterval(o));
    });
  }
})();
