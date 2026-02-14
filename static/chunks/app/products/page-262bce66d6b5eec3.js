(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [571],
  {
    208: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => c });
      var i = s(5155),
        l = s(6464),
        a = s(1132),
        r = s(3989),
        o = s(2012),
        n = s(9265),
        A = s(5695);
      let c = (e) => {
        let { description: t, text: s, url: c } = e,
          d = (0, A.useRouter)();
        return (0, i.jsx)("div", {
          className: "w-full py-10 md:py-0 md:h-[38.5rem] overflow-hidden",
          style: {
            backgroundImage:
              "linear-gradient(to left, rgba(217, 229, 251, 1) 0%, #ffff 100%)",
          },
          children: (0, i.jsxs)("div", {
            className:
              "py-20 sm:p-44 p-10 flex items-center justify-center relative h-full",
            children: [
              (0, i.jsx)("div", {
                className: "absolute -top-10 -left-10 z-1 w-full h-full",
                children: l.yH,
              }),
              (0, i.jsx)("div", {
                className: "absolute right-0 bottom-0 z-1",
                children: l.AX,
              }),
              (0, i.jsxs)("div", {
                className:
                  "w-full flex items-center justify-center flex-col relative z-2",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "flex flex-col gap-4 items-center w-fit justify-center relative p-5 md:p-10",
                    children: [
                      (0, i.jsx)(o.A, {
                        className:
                          "font-semibold text-3xl sm:text-[56px] max-w-[30rem] text-black text-center",
                        tag: "p",
                        children: "Let’s Transform Business Together",
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "text-[#FFBB00] absolute  -right-2 bottom-0 lg:-right-5",
                        children: a.St,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "mt-4 flex flex-col gap-10 items-center justify-center",
                    children: [
                      (0, i.jsx)(o.A, {
                        className:
                          "font-normal sm:text-xl text-base text-center text-[#212121] max-w-sm  lg:max-w-xl",
                        tag: "p",
                        children: t,
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "w-full text-black mt-4 flex items-center justify-center",
                        children: (0, i.jsxs)(r.A, {
                          onClick: () => {
                            c
                              ? window.open(c, "_blank")
                              : d.push("/contact#contact-form");
                          },
                          className:
                            "cursor-pointer pt-1.5 w-fit gap-2 items-center justify-center sm:justify-start pr-2 pb-1.5 pl-4 flex bg-[#FFBB00] rounded-full text-sm",
                          children: [
                            (0, i.jsx)("span", {
                              className: "font-semibold",
                              children: null != s ? s : "Contact us",
                            }),
                            (0, i.jsx)("span", {
                              children: (0, i.jsx)(n.A, { size: 18 }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    401: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => y });
      var i = s(5155),
        l = s(1352),
        a = s(2115),
        r = s(1132),
        o = s(2012),
        n = s(5695);
      let A = (e) => {
        let { name: t, icon: s, title: l, subTitle: a } = e,
          A = (0, n.useRouter)();
        return (0, i.jsxs)("div", {
          className:
            "flex flex-col md:flex-row gap-10 w-full h-full items-center justify-center",
          children: [
            (0, i.jsx)("div", {
              className: "w-full h-[120px] md:w-[380px] ".concat(
                "fiveoak" === t && "px-20",
                " md:h-[193px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white flex items-center justify-center rounded-3xl"
              ),
              children: (0, i.jsx)("img", {
                src: s.src,
                alt: "icon-",
                className: "cursor-pointer",
                onClick: () => {
                  "fiveoak" === t
                    ? window.open("https://fiveoak.com/", "_blank")
                    : A.push("/contact#contact-form");
                },
              }),
            }),
            (0, i.jsxs)("div", {
              className: "md:max-w-[630px] flex flex-col justify-between",
              children: [
                (0, i.jsxs)(o.A, {
                  className: "text-3xl md:text-5xl font-bold",
                  children: [
                    l,
                    "reinnova" === t &&
                      (0, i.jsx)("span", {
                        className:
                          "inline-block align-middle w-10 ml-2 mr-2 h-10",
                        children: r.G1,
                      }),
                  ],
                }),
                (0, i.jsx)(o.A, {
                  className:
                    "text-lg md:text-xl font-medium w-full md:max-w-[630px]",
                  children: a,
                }),
              ],
            }),
          ],
        });
      };
      var c = s(7950);
      let d = [
          {
            id: 1,
            title: "Customers Can Find You",
            description: [
              "<strong>Standout on your customer's favorite map's search<strong>",
              "With Fiveoak, climb up the search ranks, boost your Google ads, and keep your business details spot-on. <br/> Let's make sure customers find you easily!",
            ],
            bgColor: "#E4EFF8",
          },
          {
            id: 2,
            title: "Better Reputation",
            description: [
              "<strong>Make your reputation shine online!</strong>",
              "Gather reviews, boost those star ratings, and let's show off your awesome reputation everywhere-",
            ],
            bgColor: "#EBE9F9",
          },
          {
            id: 3,
            title: "Faster Communication",
            description: [
              "<strong>Empower your customers with open conversations with SMS</strong>",
              "Go beyond reviews, with Fiveoak's dynamic SMS feature that bridges the gap between you and your customers. Seamlessly enjoy real-time conversations, nurturing relationships, and addressing concerns promptly, all within the comfort of a text",
            ],
            bgColor: "#E9F6E8",
          },
          {
            id: 4,
            title: "Review Automation",
            description: [
              "<strong>We automate your reviews so you can focus on your business.</strong>",
              "With Fiveoak, you can schedule, send, and manage review requests effort-lessly, no manual follow-ups needed. Our smart workflows help you collect consistent, authentic reviews that build trust and improve your online visibility, on autopilot.",
            ],
            bgColor: "#F8ECF9",
          },
          {
            id: 5,
            title: "Increase Revenue",
            description: [
              "<strong>Cultivating Growth Through Customer Experiences</strong>",
              "When you engage and connect, to really understand what it is about your business your customers love everything improves and growth follows.",
            ],
            bgColor: "#FAF3EB",
          },
        ],
        u = [
          {
            id: 1,
            title: "AI/ML for all retailers",
            description: [
              "Our AI-driven solution automates analysis with high efficiency and accuracy, cutting costs while continuously learning and adapting to new data.",
            ],
            bgColor: "#E4EFF8",
          },
          {
            id: 2,
            title: "Flexibility & Configuration",
            description: [
              "Our flexible technology evolves with future needs through simple configuration, eliminating the need for redevelopment.",
            ],
            bgColor: "#EBE9F9",
          },
          {
            id: 3,
            title: "Seamless Integration & Modest",
            description: [
              "Our mission is to deliver a seamless experience by integrating vast data for strategic decisions through customer profiling, market analysis, and wallet metrics to boost revenue.",
            ],
            bgColor: "#E9F6E8",
          },
          {
            id: 4,
            title: "Cloud Agnostic",
            description: [
              "A cloud infrastructure audit assesses security, performance, and cost by identifying misconfigurations, vulnerabilities, and threats. It scales based on the actual needs of the application or workload.",
            ],
            bgColor: "#F8ECF9",
          },
        ];
      r.b7, r.dz, r.ng, r.zF, r.oD;
      var m = s(6126);
      let x = {
          name: "fiveoak",
          icon: m.t3,
          title: "Where Your Success Takes Root.",
          subTitle:
            "Like the roots of an oak tree, fiveoak nurtures the foundation of your success by harnessing the power of customer connection.",
        },
        g = [
          {
            id: 1,
            icon: {
              src: "/_next/static/media/Logo1.922bd86c.svg",
              height: 36,
              width: 177,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            id: 2,
            icon: {
              src: "/_next/static/media/Logo2.8488b69a.svg",
              height: 56,
              width: 55,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            id: 3,
            icon: {
              src: "/_next/static/media/Logo3.56bb7964.svg",
              height: 55,
              width: 55,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            id: 4,
            icon: {
              src: "/_next/static/media/Logo4.c7eaca9d.svg",
              height: 56,
              width: 51,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            id: 5,
            icon: {
              src: "/_next/static/media/Logo5.fae23cad.svg",
              height: 46,
              width: 200,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
          {
            id: 6,
            icon: {
              src: "/_next/static/media/Logo6.dfc12681.svg",
              height: 70,
              width: 44,
              blurWidth: 0,
              blurHeight: 0,
            },
          },
        ],
        h = () =>
          (0, i.jsxs)("div", {
            className:
              "grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 ",
            children: [
              (0, i.jsx)("div", {
                className:
                  "col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 flex flex-col justify-center gap-10 md:gap-20",
                children: (0, i.jsx)(A, {
                  name: x.name,
                  icon: x.icon,
                  title: x.title,
                  subTitle: x.subTitle,
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 flex flex-col gap-10 lg:mt-20",
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "relative flex flex-col w-full justify-center items-center gap-4 mb-5",
                    children: [
                      (0, i.jsx)(o.A, {
                        className:
                          "whitespace-nowrap font-bold text-2xl sm:text-5xl text-black text-center",
                        children: "Why our business partners",
                      }),
                      (0, i.jsxs)(o.A, {
                        className:
                          "whitespace-nowrap font-bold text-2xl sm:text-5xl text-black text-center",
                        children: [
                          (0, i.jsx)("span", {
                            className:
                              "inline-block w-10 h-10 mx-2 align-middle",
                            children: r.it,
                          }),
                          "love Fiveoak",
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "absolute h-10 md:h-20 -left-[20%] top-22 md:top-20 w-full",
                        children: r.Ff,
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl",
                    children:
                      null == d
                        ? void 0
                        : d.map((e, t) => {
                            let s = "justify-self-start lg:justify-self-start";
                            return (
                              t % 3 == 1
                                ? (s =
                                    "justify-self-start lg:justify-self-center")
                                : t % 3 == 2 &&
                                  (s =
                                    "justify-self-start lg:justify-self-end"),
                              (0, i.jsx)(
                                "div",
                                {
                                  className: "pb-4  ".concat(s),
                                  children: (0, i.jsx)(c.A, {
                                    id: e.id,
                                    title: e.title,
                                    description: e.description,
                                    bgColor: e.bgColor,
                                    paragraphPadding:
                                      "!text-base font-medium max-w-full pl-1",
                                  }),
                                },
                                e.id
                              )
                            );
                          }),
                  }),
                  (0, i.jsx)("div", {
                    className: "w-full h-[2px] border-t-2 border-dotted",
                    style: { borderColor: "#AAAAAA" },
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 relative flex flex-col md:flex-row w-full items-start justify-start gap-5 md:gap-20 md:mt-5 mb-5",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "w-1/3 flex flex-col items-start h-full gap-4",
                        children: (0, i.jsx)(o.A, {
                          className:
                            "whitespace-nowrap font-bold text-3xl sm:text-5xl text-black",
                          children: "Why Fiveoak?",
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-col justify-start gap-4 w-fit",
                        children: [
                          (0, i.jsx)(o.A, {
                            className:
                              "md:max-w-2xl font-semibold text-xl sm:text-[28px] text-black text-start",
                            children:
                              "Seamless integration with the apps you love.",
                          }),
                          (0, i.jsx)(o.A, {
                            className:
                              "font-medium md:max-w-2xl text-base sm:text-lg text-black text-start",
                            children:
                              "With fiveoak at the root of your online pressence, watch your business grow on every platform.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "flex flex-wrap md:-mt-3 justify-center items-center md:flex-row gap-5 md:gap-20",
                    children: g.map((e, t) =>
                      (0, i.jsx)(
                        "div",
                        { children: (0, i.jsx)("img", { src: e.icon.src }) },
                        t
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
      s(1497), s(5881);
      var f = s(2416);
      let p = {
          name: "reinnova",
          icon: m.wF,
          title: "Solve auditing challenges with AI",
          subTitle:
            "Our comprehensive suite of tools helps you streamline operations, increase productivity, and drive growth.",
        },
        b = () =>
          (0, i.jsxs)("div", {
            className:
              "grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 ",
            children: [
              (0, i.jsx)("div", {
                className:
                  "col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 flex flex-col justify-center gap-20",
                children: (0, i.jsx)(A, {
                  name: p.name,
                  icon: p.icon,
                  title: p.title,
                  subTitle: p.subTitle,
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "col-span-4 col-start-1 lg:col-span-10 lg:col-start-2 flex flex-col gap-5 md:gap-10 lg:mt-20",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl",
                    children:
                      null == u
                        ? void 0
                        : u.map((e, t) => {
                            let s = "justify-self-start lg:justify-self-start";
                            return (
                              t % 3 == 1
                                ? (s =
                                    "justify-self-start lg:justify-self-center")
                                : t % 3 == 2 &&
                                  (s =
                                    "justify-self-start lg:justify-self-end"),
                              (0, i.jsx)(
                                "div",
                                {
                                  className: "pb-4  "
                                    .concat(s, " ")
                                    .concat(
                                      3 === t ? "lg:col-start-2 lg:mx-auto" : ""
                                    ),
                                  children: (0, i.jsx)(c.A, {
                                    id: e.id,
                                    title: e.title,
                                    description: e.description,
                                    bgColor: e.bgColor,
                                    paragraphPadding:
                                      "!text-base font-medium max-w-full pl-1",
                                  }),
                                },
                                e.id
                              )
                            );
                          }),
                  }),
                  (0, i.jsx)("div", {
                    className: "w-full h-[2px] border-t-2 border-dotted",
                    style: { borderColor: "rgba(170, 170, 170, 1)" },
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "flex flex-col md:mt-8 md:flex-row gap-10 w-full h-full items-center justify-center",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "w-full h-full md:w-[380px] md:h-[193px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white flex items-center justify-center rounded-3xl",
                        children: (0, i.jsx)("img", {
                          src: f.default.src,
                          className: "rounded-4xl",
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "md:max-w-[630px] flex flex-col gap-3 justify-between",
                        children: [
                          (0, i.jsx)(o.A, {
                            className:
                              "whitespace-nowrap font-bold text-3xl sm:text-5xl text-black",
                            children: "Why Reinnova?",
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "flex flex-col justify-start gap-4 w-fit",
                            children: [
                              (0, i.jsx)(o.A, {
                                className:
                                  "md:max-w-2xl font-semibold text-xl sm:text-[28px] text-black text-start",
                                children:
                                  "Innovative monitoring built to deliver clear, actionable, and business-ready solutions.",
                              }),
                              (0, i.jsx)(o.A, {
                                className:
                                  "font-medium md:max-w-2xl text-base sm:text-lg text-black text-start",
                                children:
                                  "We’re optimistic about your success through versatile, ML-based sales prediction. In a competitive retail landscape, we believe success lies in monetizing behavioral data with smart recommendations, upselling, and customer-centric experiences.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      var w = s(208);
      let v = [
          { id: 1, key: "fiveoak", label: "Fiveoak" },
          { id: 2, key: "reinnova", label: "Reinnova" },
        ],
        y = () => {
          let [e, t] = (0, a.useState)("fiveoak");
          return (0, i.jsxs)("section", {
            className: "w-full h-full",
            style: {
              backgroundImage:
                "linear-gradient(to bottom, #D9E5FB 0%, #FFFFFF 30%)",
            },
            children: [
              (0, i.jsxs)("div", {
                className:
                  "flex flex-col justify-center items-center p-5 md:p-10 md:pt-25",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "mt-4 md:mt-0 flex gap-[10px] max-w-[241px]  mb-10 bg-[#58619D] rounded-full p-1 shadow-md overflow-x-hidden",
                    children: v.map((s) =>
                      (0, i.jsx)(
                        l.K,
                        {
                          label: s.label,
                          tabKey: s.key,
                          activeTab: e,
                          onSelect: t,
                        },
                        s.id
                      )
                    ),
                  }),
                  "fiveoak" === e ? (0, i.jsx)(h, {}) : (0, i.jsx)(b, {}),
                ],
              }),
              (0, i.jsx)("div", {
                className: "mt-10",
                children:
                  "fiveoak" === e
                    ? (0, i.jsx)(w.default, {
                        description: (0, i.jsxs)(i.Fragment, {
                          children: [
                            "Sign up for Fiveoak today! Boost Online Reviews, Attract More",
                            (0, i.jsx)("br", {}),
                            "Clients and Rank Higher in Search Results.",
                          ],
                        }),
                        text: "Book a Demo",
                        url: "https://fiveoak.com/",
                      })
                    : (0, i.jsx)(w.default, {
                        description:
                          "Reach us to start powering your business today!",
                        text: "Book a Demo",
                      }),
              }),
            ],
          });
        };
    },
    1352: (e, t, s) => {
      "use strict";
      s.d(t, { K: () => l });
      var i = s(5155);
      s(2115);
      let l = (e) => {
        let { label: t, tabKey: s, activeTab: l, onSelect: a } = e,
          r = l === s;
        return (0, i.jsx)("button", {
          type: "button",
          onClick: () => a(s),
          className:
            "px-3 py-2 xl:px-6 xl:py-3 cursor-pointer rounded-full font-semibold text-sm lg:text-base transition-all duration-200\n        ".concat(
              r ? "bg-white text-[#0B0F2B] shadow" : "bg-transparent text-white"
            ),
          children: t,
        });
      };
    },
    1497: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/ProductBanner.8dc695b9.jpg",
        height: 2291,
        width: 3436,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oADAMBAAIQAxAAAACIPU//xAAcEAEAAQQDAAAAAAAAAAAAAAACAwABBRETIWH/2gAIAQEAAT8AjyDeHgdoyULcfi13tV//xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIy/9oACAECAQE/AL2z/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACEv/aAAgBAwEBPwCgYJ//2Q==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    2416: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/ReinnovaProductImg.8e53a9ae.png",
        height: 1333,
        width: 2e3,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEUxLTJISlaDlKQEAwmbcVyKbmP628qFd3OCY1esmZOPe3Khi39bV1oJCQ+Yh4AuJSYrHByykoCUaFZZREEzOENoZWxkeo7mxbRNNTDZrZtOZ4Crg23CoZPLxLA7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAXBCQKAEAAAwXUTUrpc/39nM6SoffUOXDDtuoFtf8UzxEFGyrC+jirzNNraHyXDAcFt2lWJAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    2596: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      let i = function () {
        for (var e, t, s = 0, i = "", l = arguments.length; s < l; s++)
          (e = arguments[s]) &&
            (t = (function e(t) {
              var s,
                i,
                l = "";
              if ("string" == typeof t || "number" == typeof t) l += t;
              else if ("object" == typeof t)
                if (Array.isArray(t)) {
                  var a = t.length;
                  for (s = 0; s < a; s++)
                    t[s] && (i = e(t[s])) && (l && (l += " "), (l += i));
                } else for (i in t) t[i] && (l && (l += " "), (l += i));
              return l;
            })(e)) &&
            (i && (i += " "), (i += t));
        return i;
      };
    },
    4996: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/ProductBgBanner.936f0814.svg",
        height: 832,
        width: 856,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    5198: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 401)),
        Promise.resolve().then(s.bind(s, 4996)),
        Promise.resolve().then(s.bind(s, 1497)),
        Promise.resolve().then(s.bind(s, 5881)),
        Promise.resolve().then(s.bind(s, 2416));
    },
    5695: (e, t, s) => {
      "use strict";
      var i = s(8999);
      s.o(i, "usePathname") &&
        s.d(t, {
          usePathname: function () {
            return i.usePathname;
          },
        }),
        s.o(i, "useRouter") &&
          s.d(t, {
            useRouter: function () {
              return i.useRouter;
            },
          });
    },
    5881: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/ProductBgEffect.e0cf397e.jpg",
        height: 2e3,
        width: 3e3,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAACQBy//xAAYEAACAwAAAAAAAAAAAAAAAAAAEQESE//aAAgBAQABPwDOKNn/xAAZEQABBQAAAAAAAAAAAAAAAAACAAESIUH/2gAIAQIBAT8AMBaNYv/EABgRAAIDAAAAAAAAAAAAAAAAAAABAiFx/9oACAEDAQE/AIt3p//Z",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    6126: (e, t, s) => {
      "use strict";
      s.d(t, {
        Io: () => c.A,
        wM: () => i,
        t3: () => o,
        Uu: () => A,
        u5: () => l,
        AK: () => a,
        wF: () => n,
        j0: () => d,
        Ut: () => r,
      });
      let i = {
          src: "/_next/static/media/FairBid.fb6d3134.svg",
          height: 54,
          width: 197,
          blurWidth: 0,
          blurHeight: 0,
        },
        l = {
          src: "/_next/static/media/Getredd.e6cb33b3.svg",
          height: 54,
          width: 196,
          blurWidth: 0,
          blurHeight: 0,
        },
        a = {
          src: "/_next/static/media/PointC.a37e590c.svg",
          height: 54,
          width: 197,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = {
          src: "/_next/static/media/Yoloh.e5176b3c.svg",
          height: 54,
          width: 197,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = {
          src: "/_next/static/media/Fiveoak.86ad9776.svg",
          height: 56,
          width: 207,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = {
          src: "/_next/static/media/Reinnova.5109d63c.svg",
          height: 56,
          width: 300,
          blurWidth: 0,
          blurHeight: 0,
        },
        A = {
          src: "/_next/static/media/Gapi.200abe1c.png",
          height: 196,
          width: 1100,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAADFBMVEUSEhIAAACMe6OlkLmk6sUFAAAABHRSTlMcBFnYTSSamgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAA5JREFUeJxjYGZiAAFGAAAwAAe8xPOnAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 1,
        };
      var c = s(7732);
      let d = {
        src: "/_next/static/media/Siia.f466a3e3.svg",
        height: 396,
        width: 640,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    7732: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      let i = {
        src: "/_next/static/media/Atea.2aed6729.png",
        height: 1256,
        width: 3601,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEUkLGEmHWFMaXEoIWMtlo8zMzMAAD8AAP9vims4kE7g0RTokxZ6JnLcAAAADHRSTlMXPgApJwUEAZNRMns8CZFxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nGPg5mJiZWdnY2fg4GRkZGZmZGBgYQABRgYABq0AV/3iGBYAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 3,
      };
    },
    7950: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => l });
      var i = s(5155);
      s(2115);
      let l = (e) => {
        let {
            id: t,
            title: s,
            description: l,
            bgColor: a,
            icon: r,
            paragraphPadding: o,
          } = e,
          n = Array.isArray(l) ? l : [l];
        return (0, i.jsxs)(
          "div",
          {
            className:
              "flex flex-col gap-4 max-w-[290px] lg:max-w-full xl:max-w-[231px] w-full",
            children: [
              (0, i.jsxs)("div", {
                className: " flex flex-row gap-1 lg:flex-col",
                children: [
                  r &&
                    (0, i.jsx)("div", {
                      className: "flex justify-start",
                      children: (0, i.jsx)("div", {
                        className: "w-12 h-12 flex items-center justify-center",
                        children: r,
                      }),
                    }),
                  (0, i.jsx)("div", {
                    className:
                      "p-1.5 w-fit px-3 flex rounded-full rounded-bl-none font-semibold text-black text-base",
                    style: { backgroundColor: a },
                    children: s,
                  }),
                ],
              }),
              n.map((e, t) =>
                (0, i.jsx)(
                  "p",
                  {
                    className:
                      "text-sm text-[#444444] font-medium max-w-[280px] ".concat(
                        o
                      ),
                    dangerouslySetInnerHTML: { __html: e },
                  },
                  t
                )
              ),
            ],
          },
          t
        );
      };
    },
    9265: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      let i = (0, s(9946).A)("circle-chevron-right", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }],
      ]);
    },
    9946: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => d });
      var i = s(2115);
      let l = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        a = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, s) =>
            s ? s.toUpperCase() : t.toLowerCase()
          ),
        r = (e) => {
          let t = a(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        o = function () {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          return t
            .filter((e, t, s) => !!e && "" !== e.trim() && s.indexOf(e) === t)
            .join(" ")
            .trim();
        },
        n = (e) => {
          for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
              return !0;
        };
      var A = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let c = (0, i.forwardRef)((e, t) => {
          let {
            color: s = "currentColor",
            size: l = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: r,
            className: c = "",
            children: d,
            iconNode: u,
            ...m
          } = e;
          return (0, i.createElement)(
            "svg",
            {
              ref: t,
              ...A,
              width: l,
              height: l,
              stroke: s,
              strokeWidth: r ? (24 * Number(a)) / Number(l) : a,
              className: o("lucide", c),
              ...(!d && !n(m) && { "aria-hidden": "true" }),
              ...m,
            },
            [
              ...u.map((e) => {
                let [t, s] = e;
                return (0, i.createElement)(t, s);
              }),
              ...(Array.isArray(d) ? d : [d]),
            ]
          );
        }),
        d = (e, t) => {
          let s = (0, i.forwardRef)((s, a) => {
            let { className: n, ...A } = s;
            return (0, i.createElement)(c, {
              ref: a,
              iconNode: t,
              className: o("lucide-".concat(l(r(e))), "lucide-".concat(e), n),
              ...A,
            });
          });
          return (s.displayName = r(e)), s;
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [132, 125, 441, 684, 358], () => t(5198)), (_N_E = e.O());
  },
]);
