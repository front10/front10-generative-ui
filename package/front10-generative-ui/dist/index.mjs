import o, {
  createContext,
  useContext,
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react';
import { jsx, Fragment } from 'react/jsx-runtime';
import { clsx } from 'clsx';
var U = createContext(null),
  i = () => {
    let e = useContext(U);
    if (!e)
      throw new Error(
        'useGenerativeUI must be used within a GenerativeUIProvider',
      );
    return e;
  },
  b = ({ children: e }) => {
    let [, t] = useState({}),
      c = useRef({}),
      G = (p) => {
        let r = { ...c.current, [p.toolId]: p };
        (c.current = r), t(r);
      },
      C = (p) => {
        let {
            toolId: r,
            state: l,
            input: u,
            output: s,
            error: v,
            toolCallId: d,
          } = p,
          n = c.current[r];
        if (!n)
          return o.createElement(
            'div',
            {
              key: d,
              className: 'p-4 border border-gray-200 rounded-lg bg-gray-50',
            },
            `Component not registered for tool: ${r}`,
          );
        let a = `${d}-${l}`,
          m = (f) => (R) => {
            let g = { toolId: f, ...R };
            n.onUserAction?.(g);
          };
        switch (l) {
          case 'input-streaming':
          case 'input-available':
            return n.LoadingComponent
              ? o.createElement(n.LoadingComponent, {
                  key: a,
                  input: u,
                  onAction: m(r),
                })
              : null;
          case 'output-available':
            return s && typeof s == 'object' && 'error' in s
              ? n.ErrorComponent
                ? o.createElement(n.ErrorComponent, {
                    key: a,
                    error: String(s.error),
                    input: u,
                    onAction: m(r),
                  })
                : o.createElement(
                    'div',
                    { key: a, className: 'text-red-500 p-2 border rounded' },
                    `Error: ${String(s.error)}`,
                  )
              : o.createElement(n.SuccessComponent, {
                  key: a,
                  output: s,
                  input: u,
                  onAction: m(r),
                });
          case 'output-error':
            return n.ErrorComponent
              ? o.createElement(n.ErrorComponent, {
                  key: a,
                  error: v || 'Unknown error occurred',
                  input: u,
                  onAction: m(r),
                })
              : o.createElement(
                  'div',
                  { key: a, className: 'text-red-500 p-2 border rounded' },
                  `Error: ${v || 'Unknown error occurred'}`,
                );
          default:
            return console.warn(`Unknown state: ${l} for tool: ${r}`), null;
        }
      },
      y = useMemo(() => ({ registerComponent: G, renderComponent: C }), []);
    return jsx(U.Provider, { value: y, children: e });
  };
var $ = ({ components: e }) => {
    let { registerComponent: t } = i();
    return (
      useEffect(() => {
        e.forEach((c) => {
          t(c);
        });
      }, [e, t]),
      null
    );
  },
  h = (e) => {
    let { registerComponent: t } = i();
    useEffect(() => {
      t(e);
    }, [e, t]);
  };
var k = (e) => {
    let { renderComponent: t } = i();
    return jsx(Fragment, { children: t(e) });
  },
  N = () => {
    let { renderComponent: e } = i();
    return e;
  };
function L(...e) {
  return clsx(...e);
}
export {
  b as GenerativeUIProvider,
  $ as GenerativeUIRegistry,
  k as GenerativeUIRenderer,
  L as cn,
  i as useGenerativeUI,
  h as useRegisterGenerativeComponent,
  N as useRenderGenerativeUI,
}; //# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
