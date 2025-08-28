'use strict';
var o = require('react'),
  jsxRuntime = require('react/jsx-runtime'),
  clsx = require('clsx');
function _interopDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var o__default = /*#__PURE__*/ _interopDefault(o);
var U = o.createContext(null),
  i = () => {
    let e = o.useContext(U);
    if (!e)
      throw new Error(
        'useGenerativeUI must be used within a GenerativeUIProvider'
      );
    return e;
  },
  b = ({ children: e }) => {
    let [, t] = o.useState({}),
      c = o.useRef({}),
      G = p => {
        let r = { ...c.current, [p.toolId]: p };
        (c.current = r), t(r);
      },
      C = p => {
        let {
            toolId: r,
            state: l,
            input: u,
            output: s,
            error: v,
            toolCallId: d
          } = p,
          n = c.current[r];
        if (!n)
          return o__default.default.createElement(
            'div',
            {
              key: d,
              className: 'p-4 border border-gray-200 rounded-lg bg-gray-50'
            },
            `Component not registered for tool: ${r}`
          );
        let a = `${d}-${l}`,
          m = f => R => {
            let g = { toolId: f, ...R };
            n.onUserAction?.(g);
          };
        switch (l) {
          case 'input-streaming':
          case 'input-available':
            return n.LoadingComponent
              ? o__default.default.createElement(n.LoadingComponent, {
                  key: a,
                  input: u,
                  onAction: m(r)
                })
              : null;
          case 'output-available':
            return s && typeof s == 'object' && 'error' in s
              ? n.ErrorComponent
                ? o__default.default.createElement(n.ErrorComponent, {
                    key: a,
                    error: String(s.error),
                    input: u,
                    onAction: m(r)
                  })
                : o__default.default.createElement(
                    'div',
                    { key: a, className: 'text-red-500 p-2 border rounded' },
                    `Error: ${String(s.error)}`
                  )
              : o__default.default.createElement(n.SuccessComponent, {
                  key: a,
                  output: s,
                  input: u,
                  onAction: m(r)
                });
          case 'output-error':
            return n.ErrorComponent
              ? o__default.default.createElement(n.ErrorComponent, {
                  key: a,
                  error: v || 'Unknown error occurred',
                  input: u,
                  onAction: m(r)
                })
              : o__default.default.createElement(
                  'div',
                  { key: a, className: 'text-red-500 p-2 border rounded' },
                  `Error: ${v || 'Unknown error occurred'}`
                );
          default:
            return console.warn(`Unknown state: ${l} for tool: ${r}`), null;
        }
      },
      y = o.useMemo(() => ({ registerComponent: G, renderComponent: C }), []);
    return jsxRuntime.jsx(U.Provider, { value: y, children: e });
  };
var $ = ({ components: e }) => {
    let { registerComponent: t } = i();
    return (
      o.useEffect(() => {
        e.forEach(c => {
          t(c);
        });
      }, [e, t]),
      null
    );
  },
  h = e => {
    let { registerComponent: t } = i();
    o.useEffect(() => {
      t(e);
    }, [e, t]);
  };
var k = e => {
    let { renderComponent: t } = i();
    return jsxRuntime.jsx(jsxRuntime.Fragment, { children: t(e) });
  },
  N = () => {
    let { renderComponent: e } = i();
    return e;
  };
function L(...e) {
  return clsx.clsx(...e);
}
exports.GenerativeUIProvider = b;
exports.GenerativeUIRegistry = $;
exports.GenerativeUIRenderer = k;
exports.cn = L;
exports.useGenerativeUI = i;
exports.useRegisterGenerativeComponent = h;
exports.useRenderGenerativeUI = N; //# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
