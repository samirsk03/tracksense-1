(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    1830: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => u });
      var r = s(5155),
        l = s(6874),
        i = s.n(l),
        n = s(5695),
        o = s(2115),
        a = s(3308),
        c = s(4416),
        d = s(7863),
        h = s(6474),
        x = s(1132);
      let m = { src: "/_next/static/media/10Years.fab5a2d1.svg" };
      function u() {
        let e = (0, n.usePathname)(),
          [t, s] = (0, o.useState)(!1),
          [l, u] = (0, o.useState)(!1),
          [p, f] = (0, o.useState)(!1);
        (0, o.useEffect)(() => {
          let e = () => {
            s(window.scrollY > 10);
          };
          return (
            e(),
            window.addEventListener("scroll", e),
            document.addEventListener("visibilitychange", () => {
              "visible" === document.visibilityState && e();
            }),
            () => {
              window.removeEventListener("scroll", e),
                document.removeEventListener("visibilitychange", e);
            }
          );
        }, []);
        let v = () => {
          u(!l);
        };
        return (
          (0, o.useEffect)(
            () => (
              l
                ? document.body.classList.add("overflow-hidden")
                : document.body.classList.remove("overflow-hidden"),
              () => {
                document.body.classList.remove("overflow-hidden");
              }
            ),
            [l]
          ),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("header", {
                className:
                  "w-full fixed top-0 left-0 z-50 transition-all duration-300\n          "
                    .concat(
                      t ? "bg-[#181B2B] shadow-md" : "md:bg-transparent",
                      "\n          "
                    )
                    .concat(l ? "hidden" : "", "\n        "),
                children: (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto sm:px-10 py-4 xl:py-6 px-4 lg:px-0",
                  children: (0, r.jsxs)("div", {
                    className:
                      "w-full h-full flex col-span-4 sm:col-span-8 col-start-1 lg:col-span-8 xl:col-span-12 lg:col-start-2 xl:col-start-1 justify-between",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "relative flex items-center justify-center gap-4",
                        children: [
                          (0, r.jsx)(i(), {
                            href: "/",
                            className: "".concat(l ? "hidden" : ""),
                            children: (0, r.jsx)("img", {
                              src: a.default.src,
                              alt: "EvolTech Logo",
                              className: "h-8 w-auto cursor-pointer",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "absolute -top-2.5 -right-15 md:-top-4 md:-right-23",
                            children: (0, r.jsx)("img", {
                              src: m.src,
                              alt: "EvolTech Anniversary",
                              className: "h-15 md:h-20 w-auto ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("nav", {
                        className:
                          "hidden lg:flex flex-1 justify-center gap-5 sm:text-xs lg:text-sm xl:text-lg font-medium text-[#C7E5FF] items-center",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "relative group",
                            children: [
                              (0, r.jsx)("span", {
                                className: "cursor-pointer transition ".concat(
                                  e.startsWith("/services")
                                    ? "text-[#FFBB00]"
                                    : "text-[#C7E5FF]"
                                ),
                                children: "Services",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "absolute top-full -left-5 mt-3 lg:text-xs xl:text-sm bg-[#282D45] text-[#BBBBBB] rounded-full shadow-lg p-1 py-1\n                         opacity-0 invisible group-hover:opacity-100 group-hover:visible\n                         transition-opacity duration-200 z-50 flex gap-2 whitespace-nowrap",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "absolute -top-2 left-10 w-0 h-0 \n                            border-l-8 border-r-8 border-b-8 \n                            border-l-transparent border-r-transparent ".concat(
                                        t
                                          ? "border-b-[#282D45]"
                                          : "border-b-[#282d4570]"
                                      ),
                                  }),
                                  (0, r.jsx)(i(), {
                                    href: "/services/consulting",
                                    className:
                                      "p-2 px-3.5 rounded-full transition ".concat(
                                        "/services/consulting" === e
                                          ? "bg-white text-[#0B0F2B]"
                                          : "hover:bg-white hover:text-[#0B0F2B]"
                                      ),
                                    children: "Consulting",
                                  }),
                                  (0, r.jsx)(i(), {
                                    href: "/services/technology",
                                    className:
                                      "p-2 rounded-full transition ".concat(
                                        "/services/technology" === e
                                          ? "bg-white text-[#0B0F2B]"
                                          : "hover:bg-white hover:text-[#0B0F2B]"
                                      ),
                                    children: "Technology",
                                  }),
                                  (0, r.jsx)(i(), {
                                    href: "/services/operations",
                                    className:
                                      "p-2 rounded-full transition ".concat(
                                        "/services/operations" === e
                                          ? "bg-white text-[#0B0F2B]"
                                          : "hover:bg-white hover:text-[#0B0F2B]"
                                      ),
                                    children: "Operations",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsx)("span", {
                            className: "text-[#63A4DD]",
                            children: "/",
                          }),
                          (0, r.jsx)(i(), {
                            href: "/products",
                            className:
                              "hover:text-[#FFBB00] transition ".concat(
                                "/products" === e ? "text-[#FFBB00]" : ""
                              ),
                            children: "Products",
                          }),
                          (0, r.jsx)("span", {
                            className: "text-[#63A4DD]",
                            children: "/",
                          }),
                          (0, r.jsx)(i(), {
                            href: "/careers",
                            className:
                              "hover:text-[#FFBB00] transition ".concat(
                                "/careers" === e ? "text-[#FFBB00]" : ""
                              ),
                            children: "Careers",
                          }),
                          (0, r.jsx)("span", {
                            className: "text-[#63A4DD]",
                            children: "/",
                          }),
                          (0, r.jsx)(i(), {
                            href: "/about",
                            className:
                              "hover:text-[#FFBB00] transition ".concat(
                                "/about" === e ? "text-[#FFBB00]" : ""
                              ),
                            children: "Who we are",
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "hidden lg:flex",
                        children: (0, r.jsx)(i(), {
                          href: "/contact",
                          className:
                            "bg-transparent border border-yellow-400 text-[#FFBB00] px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#0B0F2B] transition",
                          children: "Contact us",
                        }),
                      }),
                      !l &&
                        (0, r.jsx)("div", {
                          className:
                            "lg:hidden border border-[#445767] px-2 py-1 rounded flex",
                          children: (0, r.jsxs)("button", {
                            onClick: v,
                            className: "text-white flex items-center gap-2",
                            children: [
                              (0, r.jsx)("span", {
                                className:
                                  " hidden sm:block text-sm font-normal",
                                children: "Menu",
                              }),
                              (0, r.jsx)("span", { children: x.hM }),
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              }),
              l &&
                (0, r.jsxs)("div", {
                  className:
                    "fixed inset-0 bg-[#000000FA] z-50 flex flex-col items-center pt-20 justify-start gap-6 text-white text-xl font-semibold lg:hidden",
                  children: [
                    (0, r.jsx)("button", {
                      onClick: v,
                      className:
                        "absolute top-5 right-5 text-white text-3xl border border-[#445767] rounded p-2",
                      children: (0, r.jsx)(c.A, {}),
                    }),
                    (0, r.jsx)("div", {
                      className: "py-4",
                      children: (0, r.jsx)(i(), {
                        href: "/",
                        onClick: v,
                        children: (0, r.jsx)("img", {
                          src: a.default.src,
                          alt: "EvolTech Logo",
                          className: "h-8 w-auto cursor-pointer",
                        }),
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "bg-[#222222] h-px w-full",
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col gap-10 items-center py-5 justify-center font-medium *:text-[#C7E5FF]",
                      children: [
                        (0, r.jsxs)("button", {
                          onClick: () => f(!p),
                          className: "flex items-center gap-2 ",
                          children: [
                            "Services",
                            (0, r.jsx)("span", {
                              className: "text-sm",
                              children: p
                                ? (0, r.jsx)(d.A, {})
                                : (0, r.jsx)(h.A, {}),
                            }),
                          ],
                        }),
                        p &&
                          (0, r.jsxs)("div", {
                            className:
                              "flex flex-col gap-4 items-center text-base font-normal",
                            children: [
                              (0, r.jsx)(i(), {
                                href: "/services/consulting",
                                onClick: v,
                                children: "Consulting",
                              }),
                              (0, r.jsx)(i(), {
                                href: "/services/technology",
                                onClick: v,
                                children: "Technology",
                              }),
                              (0, r.jsx)(i(), {
                                href: "/services/operations",
                                onClick: v,
                                children: "Operations",
                              }),
                            ],
                          }),
                        (0, r.jsx)(i(), {
                          href: "/products",
                          onClick: v,
                          children: "Products",
                        }),
                        (0, r.jsx)(i(), {
                          href: "/careers",
                          onClick: v,
                          children: "Careers",
                        }),
                        (0, r.jsx)(i(), {
                          href: "/about",
                          onClick: v,
                          children: "Who we are",
                        }),
                        (0, r.jsx)(i(), {
                          href: "/contact",
                          onClick: v,
                          className:
                            "bg-transparent border border-yellow-400 !text-[#FFBB00] px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-[#0B0F2B] transition",
                          children: "Contact us",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "bg-[#222222] h-px w-full",
                    }),
                  ],
                }),
            ],
          })
        );
      }
    },
    3308: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/logo.9ce0a9e7.svg",
        height: 32,
        width: 196,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    4820: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 6874, 23)),
        Promise.resolve().then(s.t.bind(s, 9243, 23)),
        Promise.resolve().then(s.t.bind(s, 4147, 23)),
        Promise.resolve().then(s.t.bind(s, 8489, 23)),
        Promise.resolve().then(s.bind(s, 4990)),
        Promise.resolve().then(s.bind(s, 5016)),
        Promise.resolve().then(s.bind(s, 3308)),
        Promise.resolve().then(s.bind(s, 1830)),
        Promise.resolve().then(s.t.bind(s, 5786, 23));
    },
    4990: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => i });
      var r = s(5155),
        l = s(2115);
      let i = () => (
        (0, l.useEffect)(() => {
          let e = document.createElement("script");
          return (
            (e.src = "https://chatwidget.fiveoak.com/embed.js"),
            (e.defer = !0),
            document.body.appendChild(e),
            (e.onload = () => {
              (window.focw = window.focw || []),
                window.focw.push({
                  apiKey: "a745cd4e-897f-4d36-8945-11ecb6784c4b",
                  popupMsg: "Hi there, have a question? Text us here.",
                  avatar:
                    "https://chatwidget.fiveoak.com/public/images/profile-image-1.png",
                  primaryColor: "#1761A0",
                });
            }),
            () => {
              document.body.removeChild(e);
            }
          );
        }, []),
        (0, r.jsx)("div", {})
      );
    },
    5016: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => i });
      var r = s(5695),
        l = s(2115);
      function i() {
        let e = (0, r.usePathname)();
        return (
          (0, l.useEffect)(() => {
            window.gtag &&
              window.gtag("config", "G-BT21FKPMCH", { page_path: e });
          }, [e]),
          null
        );
      }
    },
    5786: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [559, 874, 989, 132, 441, 684, 358], () => t(4820)), (_N_E = e.O());
  },
]);
