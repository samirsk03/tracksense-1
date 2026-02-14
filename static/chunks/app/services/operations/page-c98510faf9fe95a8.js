(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [750],
  {
    249: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => s });
      let s = {
        src: "/_next/static/media/expert-arrow.b8e44639.svg",
        height: 92,
        width: 51,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    269: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => s });
      let s = {
        src: "/_next/static/media/power-arrow.f8486380.svg",
        height: 92,
        width: 50,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    606: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      let s = {
        src: "/_next/static/media/BackOffice.5c82c4ee.png",
        height: 621,
        width: 414,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAATlBMVEVpWUaCak8cISCCg4GfnJb4+fni5eQnKytuY1W+wL0DCw4vO0Dw8fFlVj9GTEqjelmkpJ/W2Nh8XkPLxL2NfmSyjmhIR0G+q5uiinHJoHB++u2iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nAXBCQLAEBAAscGyjqIHLf//aBN8OPyFpHAmTHxuAev6h2rTgqHYTJzrzVT2cD8iFgGP0sMYowAAAABJRU5ErkJggg==",
        blurWidth: 5,
        blurHeight: 8,
      };
    },
    2255: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      let s = {
        src: "/_next/static/media/BackOffice-icon.07a29441.svg",
        height: 64,
        width: 64,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    7194: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => l });
      var s = a(5155);
      a(2115);
      var i = a(269),
        A = a(6766);
      let l = (e) => {
        let {
            chipText: t,
            chipBackgroundColor: a = "",
            headerText: l,
            subHeaderText: r,
            maxWidth: n = "lg:max-w-xl",
            headerTextSize: o = "text-6xl",
            subHeaderTextSize: c = "text-xl",
            chipTextColor: d = "text-black",
            headerTextColor: u = "text-black",
            subHeaderTextColor: g = "text-black",
            className: h = "",
            showArrow: m = !0,
            arrowPosition: x = "",
            arrowWidth: p = 0,
            arrowHeight: f = 0,
            arrowSrc: b = i.default,
            arrowAlt: w = "Arrow",
            arrowColor: y = "",
            arrowOverrideCx: v = "",
          } = e,
          C = () =>
            m
              ? (0, s.jsx)("div", {
                  className: "arrow hidden md:block  "
                    .concat(v, " ")
                    .concat(y && "text-[".concat(y, "]"), " ")
                    .concat(p ? "w-10 xl:w-[".concat(p, "px]") : "", " ")
                    .concat(f ? "h-10 xl:h-[".concat(f, "px]") : "", " ")
                    .concat(x),
                  children:
                    "string" == typeof b || (b && "src" in b)
                      ? (0, s.jsx)(A.default, {
                          src: b,
                          alt: w,
                          width: p,
                          height: f,
                        })
                      : b,
                })
              : null;
        return (0, s.jsx)("div", {
          className: "header-component flex justify-center ".concat(h),
          children: (0, s.jsxs)("div", {
            className:
              "flex flex-col items-center text-center w-full md:".concat(
                n,
                " gap-2"
              ),
            children: [
              (0, s.jsx)("div", {
                className:
                  "chip rounded-full max-w-content justify-center font-medium text-center text-sm px-3 py-1 xl:px-4 lg:px-2 lg:py-1 xl:py-2  ".concat(
                    d
                  ),
                style: { backgroundColor: a },
                children: t,
              }),
              (0, s.jsx)("div", {
                className: "header text-3xl lg:text-4xl xl:"
                  .concat(o, " font-bold ")
                  .concat(u),
                children: l,
              }),
              (0, s.jsx)("div", {
                className: "md:px-40",
                children: (() => {
                  let e = (0, s.jsx)("div", {
                    className: "sub-header p-4 md:p-0 text-sm lg:text-base xl:"
                      .concat(c, " w-full lg:max-w-xl font-normal lg:mt-6 ")
                      .concat(g),
                    children: r,
                  });
                  return "top" === x
                    ? (0, s.jsxs)("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [(0, s.jsx)(C, {}), e],
                      })
                    : "bottom" === x
                    ? (0, s.jsxs)("div", {
                        className:
                          "flex flex-col gap-2 justify-center items-center",
                        children: [e, (0, s.jsx)(C, {})],
                      })
                    : "left" === x
                    ? (0, s.jsxs)("div", {
                        className: "relative flex gap-0 px-10",
                        children: [
                          (0, s.jsx)("div", {
                            className: " ".concat(v || "pt-8 flex"),
                            children: (0, s.jsx)(C, {}),
                          }),
                          e,
                        ],
                      })
                    : (0, s.jsxs)("div", {
                        className: "flex lg:-mr-12",
                        children: [
                          e,
                          (0, s.jsx)("div", {
                            className: "pt-4  flex",
                            children: (0, s.jsx)(C, {}),
                          }),
                        ],
                      });
                })(),
              }),
            ],
          }),
        });
      };
    },
    7535: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 8266));
    },
    8266: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => E });
      var s = a(5155),
        i = a(2115);
      let A = {
        src: "/_next/static/media/ServiceOperations.73165f3d.svg",
        height: 690,
        width: 1440,
        blurWidth: 0,
        blurHeight: 0,
      };
      var l = a(2255),
        r = a(6464),
        n = a(1132),
        o = a(2012);
      let c = (e) => {
        var t, a;
        let {
          id: i,
          foregroundImage: A,
          foregroundImageAlt: l = "Foreground Image",
          consultingIcon: c,
          title: d,
          subtitle: u,
          description: g,
          backgroundImages: h,
        } = e;
        return (0, s.jsxs)("section", {
          className: "relative w-full bg-[#ffff]  h-screen overflow-hidden ",
          children: [
            (0, s.jsxs)("div", {
              className:
                "absolute inset-0 z-0 w-full h-full flex bg-[#2D2550] overflow-hidden pointer-events-none",
              children: [
                (0, s.jsx)("div", {
                  className: "absolute z-7 w-full h-full",
                  children: r.LU,
                }),
                (null == h ? void 0 : h.main) &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("img", {
                        src: h.main.src,
                        alt: "Background Main Image",
                        className: "w-full z-8 h-full absolute sm:block "
                          .concat(
                            "operations" === i
                              ? "opacity-40 object-cover top-20"
                              : "products" === i
                              ? "object-cover mix-blend-overlay opacity-25"
                              : "left-0 object-cover sm:object-contain",
                            " "
                          )
                          .concat(
                            "tech" === i &&
                              "hidden mix-blend-overlay opacity-50  md:left-20",
                            " object-left"
                          ),
                      }),
                      "tech" === i &&
                        h.mobileTech &&
                        (0, s.jsx)("img", {
                          src: h.mobileTech.src,
                          alt: "Tech Mobile Background",
                          className:
                            "w-full z-8 h-full absolute sm:hidden object-cover mix-blend-overlay opacity-50",
                        }),
                    ],
                  }),
                "tech" === i &&
                  (0, s.jsx)("div", {
                    className:
                      "absolute left-35 md:left-[35%] top-[28%] mix-blend-color-dodge opacity-60",
                    children: r.$t,
                  }),
                "products" === i
                  ? null == h || null == (t = h.extras)
                    ? void 0
                    : t.map((e, t) =>
                        (0, s.jsx)(
                          "img",
                          {
                            src: "string" == typeof e ? e : e.src,
                            alt: "Background Extra Image ".concat(t + 1),
                            className: "absolute left-0 -bottom-10",
                            style: { zIndex: 5 - t },
                          },
                          "bg-extra-".concat(t)
                        )
                      )
                  : null == h || null == (a = h.extras)
                  ? void 0
                  : a.map((e, t) =>
                      (0, s.jsx)(
                        "img",
                        {
                          src: "string" == typeof e ? e : e.src,
                          alt: "Background Extra Image ".concat(t + 1),
                          className:
                            "absolute w-full h-full top-20 object-cover opacity-10 mix-blend-overlay",
                          style: { zIndex: 5 - t },
                        },
                        "bg-extra-".concat(t)
                      )
                    ),
                (0, s.jsx)("div", {
                  className: "absolute z-4 w-full h-full",
                  children: "tech" === i ? r.hv : r.ro,
                }),
                (0, s.jsx)("div", {
                  className: "absolute z-3 w-full h-full",
                  children: r.y2,
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute z-2 w-full h-full flex items-center justify-center",
                  children: (0, s.jsx)("div", { children: r.ud }),
                }),
                (0, s.jsx)("div", {
                  className: "absolute z-1 w-full h-full opacity-20",
                  children: r.nB,
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className:
                "relative z-10 w-full h-full grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0",
              children: (0, s.jsxs)("div", {
                className:
                  "w-full h-full flex flex-col md:flex-row col-span-4 lg:col-span-10 col-start-1 justify-end pb-15 md:pb-0 gap-10 md:gap-0 lg:col-start-2",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "w-full sm:w-1/2  flex flex-col gap-5 md:gap-10 items-start justify-center ".concat(
                        "products" === i
                          ? "max-w-lg md:justify-end lg:pb-20"
                          : "md:justify-end",
                        " mt-10 md:mt-30 md:pb-5"
                      ),
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex justify-center items-center",
                        children: [
                          c &&
                            (0, s.jsx)("div", {
                              className:
                                "h-14 w-14 lg:h-20 lg:w-20 xl:h-28 xl:w-28 mr-3 lg:mr-8 bg-gradient-to-r from-[#5785DC] to-[#5F4793] rounded-2xl lg:rounded-3xl flex items-center justify-center",
                              children: (0, s.jsx)("img", {
                                src: c,
                                alt: "".concat(d, " Icon"),
                                className:
                                  "h-8 w-8 lg:h-12 lg:w-12 xl:h-16 xl:w-16",
                              }),
                            }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-2 md:gap-5",
                            children: [
                              (0, s.jsx)(o.A, {
                                className:
                                  "font-semibold text-3xl sm:text-3xl lg:text-4xl xl:text-6xl text-left whitespace-nowrap text-[#fff]",
                                tag: "p",
                                children: d,
                              }),
                              u &&
                                (0, s.jsx)(o.A, {
                                  className:
                                    "text-xl lg:text-2xl xl:text-3xl font-medium max-w-xl text-left text-[#FFBB00]",
                                  children: u,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-base xl:text-xl max-w-full text-start text-[#C5E1FF]",
                        dangerouslySetInnerHTML: { __html: g },
                      }),
                      "products" === i
                        ? (0, s.jsx)("div", {
                            className:
                              "text-[#FFBB00] flex justify-start w-20 md:w-[71px]",
                            children: n.u8,
                          })
                        : (0, s.jsx)("div", {
                            className:
                              "text-[#FFBB00] flex justify-center w-15 lg:w-15 xl:w-[71px] mx-auto sm:pb-10",
                            children: n.FI,
                          }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "w-full md:w-1/2 h-fit md:h-full flex justify-end",
                    children: (0, s.jsx)("div", {
                      className:
                        "relative w-full h-full flex items-end justify-end md:pb-0",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-[264px] lg:w-[65%] lg:h-[75%] xl:w-[430px] xl:h-[620px] relative rounded-[48px] md:rounded-b-none overflow-hidden",
                        children: [
                          (0, s.jsx)("img", {
                            src: A.src,
                            alt: l,
                            className:
                              "\n                    absolute inset-0 rounded-[48px] md:rounded-b-none object-cover w-full h-full \n                    ".concat(
                                "consultancy" === i
                                  ? "object-[center_20%]"
                                  : "",
                                "\n                  "
                              ),
                          }),
                          (0, s.jsx)("div", {
                            style: { mixBlendMode: "plus-lighter" },
                            className:
                              "absolute inset-0 bg-gradient-to-b from-[#190670] to-[#1B0A41] opacity-80 pointer-events-none",
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var d = a(606);
      let u = {
          src: "/_next/static/media/BgEffect.17456321.png",
          height: 850,
          width: 1440,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEUVAR4wFiR/KpdtAAAAAnRSTlMzMz0oyR4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAYSURBVHicY2CAAUYGRgYGRjCGALgMHAAAAWAADWr72okAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        g = () =>
          (0, s.jsx)(c, {
            id: "operations",
            consultingIcon: l.A.src,
            title: "Operations",
            subtitle: "Ops that Rock",
            description:
              "At EvolTech, our operations SMEs streamline your business with efficient, scalable solutions. From data management to admin support, we handle the details, so you can focus on growth and innovation.",
            foregroundImage: d.A,
            foregroundImageAlt: "Consulting Banner",
            backgroundImages: { main: A, extras: [u] },
          });
      var h = a(1420);
      let m = [
          {
            id: 1,
            title: "Extended Workforce",
            subtitle: "Your Seamless Extension",
            image: {
              src: "/_next/static/media/OperationsCard1.3a4dd5dd.jpg",
              height: 1e3,
              width: 1500,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAmAU//8QAHRAAAgIBBQAAAAAAAAAAAAAAAgMBEgAEBSFCwf/aAAgBAQABPwB2lTuKKsWAc1GQGIr28z//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIScf/aAAgBAgEBPwCDdVh//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEDMv/aAAgBAwEBPwCmmf/Z",
              blurWidth: 8,
              blurHeight: 5,
            },
            description: [
              "Our talented teams act as an integral part of your organization, blending seamlessly with your existing staff to provide unparalleled support.",
              "With expertise in areas like data processing, IT support, and administrative tasks, our professionals enhance your capabilities without the need for permanent hires. Whether you need to manage complex financial records or streamline retail operations, our extended workforce is equipped to deliver results that align with your business objectives.",
            ],
          },
          {
            id: 2,
            title: "Scalable Model",
            subtitle: "The Hybrid Captive Advantage",
            image: {
              src: "/_next/static/media/OperationsCard2.e10b551c.jpg",
              height: 1600,
              width: 1600,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAmIrH/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIRAAMUISL/2gAIAQEAAT8ARLWM7E9xAGq//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAMhMUL/2gAIAQIBAT8AZS4yf//EABcRAAMBAAAAAAAAAAAAAAAAAAACQnH/2gAIAQMBAT8AStP/2Q==",
              blurWidth: 8,
              blurHeight: 8,
            },
            description: [
              "Flexibility is key in today’s dynamic business environment. Our hybrid captive model combines the control and security of an in-house team with the cost-effectiveness and scalability of outsourcing.",
              "This approach allows you to scale operations up or down based on demand, ensuring you have the right resources at the right time. Whether you’re navigating a busy season or optimizing for efficiency, our model adapts to your needs, delivering cost savings and operational agility.",
            ],
          },
          {
            id: 3,
            title: "Customized Support",
            subtitle: "Tailored to Your Goals",
            image: {
              src: "/_next/static/media/OperationsCard3.c537d9d1.jpg",
              height: 1001,
              width: 1500,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oADAMBAAIQAxAAAACWCx3/xAAdEAAABQUAAAAAAAAAAAAAAAAAAgMREgQFFCLB/9oACAEBAAE/AKc0rqRNtsgq0uMP/8QAGREBAAIDAAAAAAAAAAAAAAAAAQADAhFT/9oACAECAQE/AKMRbt9Gf//EABgRAAIDAAAAAAAAAAAAAAAAAAABA0Ny/9oACAEDAQE/AJ6sI//Z",
              blurWidth: 8,
              blurHeight: 5,
            },
            description: [
              "Every business is unique, and so are its operational needs. At EvolTech, we work closely with you to understand your specific goals and challenges, crafting processes that align with your strategic objectives.",
              "From customizing workflows to ensuring compliance with industry regulations, our solutions are designed to fit your business like a glove. Whether you’re in Banking, FinTech, Retail, Insurance, or Healthcare, we tailor our support to address your industry’s unique demands, ensuring maximum impact.",
            ],
          },
          {
            id: 4,
            title: "Global Integration",
            subtitle: "24/7 Support, Diverse Expertise",
            image: {
              src: "/_next/static/media/OperationsCard4.9ecbd1b4.png",
              height: 553,
              width: 996,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUYFD0SEDMMDClDLoUsH2EgHUgkHk6SZ+nqUhIFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGNgYGVhZmFgZGJgZWNmZwYxGNmgIowMDKwMjExMAAZUAE+K7qOWAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 4,
            },
            description: [
              "With offices in the US and India, EvolTech offers global integration that keeps your operations running around the clock. Our teams provide 24/7 support, ensuring that your business never misses a beat.",
              "Beyond time zones, our global presence brings diverse perspectives and expertise, enabling us to deliver innovative and practical solutions. This cohesive approach ensures that your operations are synchronized and efficient, no matter where you are.",
            ],
          },
          {
            id: 5,
            title: "Talent That Transforms",
            subtitle: "Seamless Talent Training",
            image: {
              src: "/_next/static/media/OperationsCard5.81b24ff4.jpg",
              height: 1e3,
              width: 1500,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAACsM//EAB8QAAIBAgcAAAAAAAAAAAAAAAEDAgASBAURISIxQf/aAAgBAQABPwB6pZThmyUy6EUqjYQAOhy29Otf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECAyL/2gAIAQIBAT8Ar1BNn//EABgRAAIDAAAAAAAAAAAAAAAAAAACAREh/9oACAEDAQE/AGxpo//Z",
              blurWidth: 8,
              blurHeight: 5,
            },
            description: [
              "Training new talent by pulling your strategic and high end resources away from their core processes can be difficult and disrupt operations. Our services eliminate this challenge. With our zero attrition rate and Subject Matter Experts (SMEs) in every process, we can ensure stability and scalability.",
              "We are equipped to rapidly train new talent and adapt to your unique workflows without disrupting the operations of your strategic team, delivering consistent quality and empowering you to solely concentrate on driving business growth and success.",
            ],
          },
          {
            id: 6,
            title: "Operational Efficiency",
            subtitle: "Powered by Technology",
            image: {
              src: "/_next/static/media/OperationsCard6.afb6a885.jpg",
              height: 844,
              width: 1500,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAngv/xAAbEAEAAgIDAAAAAAAAAAAAAAABAgQDEQASIv/aAAgBAQABPwC9ezZKsey+dxAdAc//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8AiP/EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPwCs/9k=",
              blurWidth: 8,
              blurHeight: 5,
            },
            description: [
              "Efficiency is at the core of our back office operations. We leverage cutting-edge technologies, including automation tools and advanced analytics, to streamline processes and reduce errors.",
              "From robotic process automation (RPA) to workflow systems, we optimize your operations to enhance productivity and provide a competitive edge. Our commitment to continuous improvement means we’re always exploring new ways to innovate and drive your business success.",
            ],
          },
        ],
        x = [
          {
            iconSrc: {
              src: "/_next/static/media/Healthcare.b163dc05.svg",
              height: 32,
              width: 32,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Healthcare & Insurance verticals",
            subtitle: "Smart Support for Healthcare & Insurance Workflows.",
            description: [
              "We deliver robust operational and administrative support across the healthcare and insurance chain—from detailed claims adjudication and audit tracking to data validation, invoice processing, and pharmacy communication across high-volume workflows.",
              "Our quality control services enhance your manual and automated processes, catching errors early and slashing rework. With strong domain knowledge and system proficiency, we enable seamless coordination across payers, providers, and care teams.",
            ],
            label:
              "Let us manage the complexity, so you can focus on delivering care.",
          },
          {
            iconSrc: {
              src: "/_next/static/media/Strategic.54aa74f3.svg",
              height: 32,
              width: 32,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Strategic Sales Support",
            subtitle: "Your sales engine, fully equipped.",
            description: [
              "From proposal generation to real-time partner coordination, our Sales Support team empowers your frontlines with speed, accuracy, and insight.",
              "We streamline pricing & cost structures, manage CRM workflows, and handle end-to-end bid collection—so your sales teams can focus on closing deals, not chasing details. Trusted by clients in healthcare, insurance, and beyond, our support functions as a natural extension of your go-to-market engine.",
            ],
            label: "Scale your sales efforts with our seamless support.",
          },
          {
            iconSrc: {
              src: "/_next/static/media/Customer.84b55f0a.svg",
              height: 32,
              width: 32,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Customer Experience",
            subtitle: "Support That Reflects Your Brand.",
            description: [
              "Our customer experience services support seamless communication between clients, partners, and service providers. From managing inbound and outbound queries to issue resolution and documentation requests, we ensure consistent and accurate information exchange.",
              "With experience across complex workflows and multi-channel platforms, our team acts as an extension of your front office, enhancing service quality and reducing TAT. We provide seamless, US-aligned support that reflects your brand at its best.",
            ],
            label: "Elevate customer experiences. Enhance loyalty.",
          },
          {
            iconSrc: {
              src: "/_next/static/media/Operations.86db8638.svg",
              height: 32,
              width: 32,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Operations & Administrative Support",
            subtitle: "Ops that Rock.",
            description: [
              "At EvolTech, we believe that a robust back office is the backbone of any thriving business.",
              "Our Back Office Operations service is designed to power your organization with seamless, efficient, and scalable solutions. From data management to administrative support, we handle the details so you can focus on driving growth and innovation. With a commitment to excellence, we deliver operations that truly rock.",
            ],
            label: "Power your core with operation support that rocks.",
          },
          {
            iconSrc: {
              src: "/_next/static/media/Payroll.b1a2dfbd.svg",
              height: 32,
              width: 32,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "HR & Payroll Support",
            subtitle: "People-First HR Support, Built for Impact.",
            description: [
              "Our HR support services streamline employee lifecycle management from on-boarding and off-boarding to payroll coordination and compliance tracking.",
              "With experience across platforms like ADP, Employee Navigator, and ClearCheck, our team supports seamless data handling, system updates, and regulatory adherence. From recruitment assistance to day-to-day operational support, we ensure your HR and payroll processes run smoothly behind the scenes.",
            ],
            label:
              "Streamlined HR and payroll for effortless employee management.",
          },
          {
            iconSrc: {
              src: "/_next/static/media/Finance.f841deb7.svg",
              height: 32,
              width: 32,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Finance Support",
            subtitle: "Finance Operations You Can Count On.",
            description: [
              "Our finance support services cover operational accounting—from invoicing and journal entries to bank reconciliations and reporting.",
              "We manage corporate bank activity with precision and timeliness. With experience in budgeting, closures, and preparation of financial statements, we support both routine processes and strategic financial planning,\xa0 delivering reliable, scalable finance operations across functions.",
            ],
            label: "Finance that scales with you.",
          },
          {
            iconSrc: {
              src: "/_next/static/media/Dedicated.4f7354e9.svg",
              height: 32,
              width: 32,
              blurWidth: 0,
              blurHeight: 0,
            },
            title: "Dedicated Account Management",
            subtitle: "A partnership, not just a service.",
            description: [
              "Your engagement will be supported by a dedicated account manager who acts as the single point of contact between your managers and our team. ",
              "From on-boarding to daily coordination, we support in resource allocation planning, cross-functional workflows planning, and work closely across departments to swiftly resolve challenges and remove bottlenecks. Whether it’s daily operational support or long-term planning, we keep everything moving with proactive problem solving and accountability, so you can focus on outcomes not operations.",
            ],
            label:
              "Stay aligned, every step of the way with high touch Support",
          },
        ],
        p = () =>
          (0, s.jsx)("div", {
            className: "w-full",
            style: {
              backgroundImage:
                "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #ffff 40%)",
            },
            children: (0, s.jsx)("div", {
              className: "flex flex-col gap-10 py-20",
              children: m.map((e, t) =>
                (0, s.jsx)(
                  h.default,
                  {
                    index: t,
                    imageSrc: e.image.src,
                    altText: e.title,
                    title: e.title,
                    subtitle: e.subtitle,
                    description: e.description,
                    extraContent: null == e ? void 0 : e.extraContent,
                  },
                  e.id
                )
              ),
            }),
          });
      var f = a(7194);
      let b = { src: "/_next/static/media/HealthCare.39eb5856.svg" },
        w = (e) => {
          let {
            iconSrc: t,
            title: a,
            subtitle: i,
            description: A,
            label: l,
            extraDescription: r,
            lastItem: n = !1,
            firstItem: o = !1,
          } = e;
          return (0, s.jsxs)("div", {
            className:
              "flex flex-col md:flex-row p-6 gap-5 md:gap-15 justify-center items-center w-full h-full",
            children: [
              (0, s.jsxs)("div", {
                className: "flex md:w-1/4 mb-4 h-full md:mb-0 self-start",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "flex-shrink-0 mt-1 w-12 h-12 mr-3 lg:mr-8 bg-gradient-to-r from-[#5785DC] to-[#5F4793] rounded-2xl flex items-center justify-center",
                    children: (0, s.jsx)("img", {
                      src: t.src,
                      alt: "".concat(a, " Icon"),
                      className: "h-8 w-8",
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4 md:text-start max-w-xs",
                    children: [
                      (0, s.jsx)("h2", {
                        className:
                          "text-2xl md:text-3xl font-semibold text-[#000000]",
                        children: a,
                      }),
                      (0, s.jsx)("p", {
                        className: "text-lg font-medium text-[#000000]",
                        children: i,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "md:w-1/2 max-w-[629px] flex flex-col gap-5 text-[#444444]",
                children: [
                  A.map((e, t) =>
                    (0, s.jsx)(
                      "p",
                      { className: "text-base font-medium", children: e },
                      t
                    )
                  ),
                  (0, s.jsx)("div", {
                    className:
                      "flex w-fit px-6 border-l-3 border-l-[#4C96D7] bg-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.12)] p-2 items-center",
                    children: (0, s.jsx)("span", {
                      className:
                        "text-sm font-medium w-full text-start !text-[#212121]",
                      children: l,
                    }),
                  }),
                  r &&
                    (0, s.jsx)("p", {
                      className: "text-base font-medium",
                      children: r,
                    }),
                  o &&
                    (0, s.jsxs)("div", {
                      className:
                        "flex flex-col gap-5 md:gap-10 justify-center items-center w-full ",
                      children: [
                        (0, s.jsx)("h2", {
                          className:
                            "text-2xl md:text-3xl text-center lg:max-w-[450px] font-semibold text-[#000000]",
                          children:
                            "Our teams are experienced in working within TPA ecosystems",
                        }),
                        (0, s.jsx)("img", { src: b.src, alt: "HealthCare" }),
                      ],
                    }),
                  !n &&
                    (0, s.jsx)("div", {
                      className: "w-full mt-6 h-[2px] border-t-2 border-dotted",
                      style: { borderColor: "rgba(170, 170, 170, 1)" },
                    }),
                ],
              }),
            ],
          });
        };
      var y = a(249);
      let v = () =>
        (0, s.jsxs)("div", {
          className: "bg-[#F8F8F8] w-full h-full relative",
          children: [
            (0, s.jsxs)("div", {
              className: "absoulte w-full h-full z-0",
              children: [
                (0, s.jsx)("div", {
                  className: "absolute right-0 top-[10%]",
                  children: r.sV,
                }),
                (0, s.jsx)("div", {
                  className: "absolute -left-10 top-[50%]",
                  children: r.yH,
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "z-10 relative",
              children: [
                (0, s.jsx)(f.A, {
                  chipText: "The Excellence Core",
                  chipBackgroundColor: "#FFDEB7",
                  chipTextColor: "text-black",
                  headerText:
                    "Our Business Process Operational Excellence Support",
                  headerTextColor: "text-black lg:max-w-[600px]",
                  subHeaderText:
                    "Streamlining Your Success with Precision and Efficiency",
                  subHeaderTextColor: "text-black",
                  headerTextSize: "lg:text-[40px] max-w-2xl",
                  className: "py-5 pt-15 md:py-0 md:pb-16 md:pt-20",
                  arrowSrc: y.default,
                  maxWidth: "lg:max-xl",
                  arrowAlt: "Expert Arrow",
                  arrowPosition: "left",
                  arrowWidth: 70,
                  arrowHeight: 120,
                }),
                (0, s.jsx)("div", {
                  className:
                    "w-full h-full flex flex-col gap-5 justify-center pb-15",
                  children: x.map((e, t) =>
                    (0, s.jsx)(
                      w,
                      {
                        ...e,
                        firstItem: 0 === t,
                        lastItem: t === x.length - 1,
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      var C = a(208),
        j = a(588);
      let E = () => {
        let [e, t] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            t(!0);
          }, []),
          (0, s.jsxs)("main", {
            className: "overflow-hidden w-full h-full",
            children: [
              (0, s.jsx)(g, {}),
              (0, s.jsx)(p, {}),
              (0, s.jsx)(v, {}),
              (0, s.jsx)(C.default, {
                description: (0, s.jsx)(s.Fragment, {
                  children:
                    "Transform your back office operations with EvolTech’s innovative and efficient solutions. Let us handle the details so you can focus on what matters most—growing your business.\xa0",
                }),
              }),
              (0, s.jsx)(j.default, { type: "operations" }),
            ],
          })
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [858, 80, 766, 132, 125, 556, 441, 684, 358], () => t(7535)),
      (_N_E = e.O());
  },
]);
