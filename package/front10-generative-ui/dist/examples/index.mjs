import { tool } from 'ai';
import {
  ClockIcon,
  StarIcon,
  ShoppingCartIcon,
  EyeIcon,
  HeartIcon,
  Image,
  Search,
  ZoomIn,
  Heart,
  Download,
  X as X$1,
  BarChart3,
  Clock,
  Lightbulb,
  CalendarIcon,
  PlusIcon,
  EditIcon,
  CheckIcon,
  XIcon,
  TrashIcon,
  Loader2,
  CheckCircle,
  AlertTriangle,
  Meh,
  Frown,
  Smile,
} from 'lucide-react';
import { clsx } from 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
var Et = Object.defineProperty;
var Dt = (r, e) => {
  for (var t in e) Et(r, t, { get: e[t], enumerable: true });
};
var p = {};
Dt(p, {
  BRAND: () => er,
  DIRTY: () => ee,
  EMPTY_PATH: () => Ot,
  INVALID: () => h,
  NEVER: () => Lr,
  OK: () => R,
  ParseStatus: () => O,
  Schema: () => _,
  ZodAny: () => X,
  ZodArray: () => Y,
  ZodBigInt: () => re,
  ZodBoolean: () => ae,
  ZodBranded: () => Ce,
  ZodCatch: () => fe,
  ZodDate: () => se,
  ZodDefault: () => pe,
  ZodDiscriminatedUnion: () => Ie,
  ZodEffects: () => L,
  ZodEnum: () => ue,
  ZodError: () => j,
  ZodFirstPartyTypeKind: () => g,
  ZodFunction: () => Oe,
  ZodIntersection: () => de,
  ZodIssueCode: () => d,
  ZodLazy: () => ce,
  ZodLiteral: () => le,
  ZodMap: () => _e,
  ZodNaN: () => Ne,
  ZodNativeEnum: () => me,
  ZodNever: () => V,
  ZodNull: () => ie,
  ZodNullable: () => q,
  ZodNumber: () => te,
  ZodObject: () => $,
  ZodOptional: () => P,
  ZodParsedType: () => m,
  ZodPipeline: () => Ee,
  ZodPromise: () => Q,
  ZodReadonly: () => he,
  ZodRecord: () => Ae,
  ZodSchema: () => _,
  ZodSet: () => we,
  ZodString: () => K,
  ZodSymbol: () => xe,
  ZodTransformer: () => L,
  ZodTuple: () => F,
  ZodType: () => _,
  ZodUndefined: () => ne,
  ZodUnion: () => oe,
  ZodUnknown: () => G,
  ZodVoid: () => be,
  addIssueToContext: () => u,
  any: () => cr,
  array: () => pr,
  bigint: () => sr,
  boolean: () => dt,
  coerce: () => zr,
  custom: () => nt,
  date: () => nr,
  datetimeRegex: () => at,
  defaultErrorMap: () => B,
  discriminatedUnion: () => vr,
  effect: () => Tr,
  enum: () => Cr,
  function: () => Nr,
  getErrorMap: () => ge,
  getParsedType: () => Z,
  instanceof: () => rr,
  intersection: () => yr,
  isAborted: () => De,
  isAsync: () => ve,
  isDirty: () => Te,
  isValid: () => J,
  late: () => tr,
  lazy: () => kr,
  literal: () => Sr,
  makeIssue: () => Se,
  map: () => _r,
  nan: () => ar,
  nativeEnum: () => Er,
  never: () => ur,
  null: () => dr,
  nullable: () => Ar,
  number: () => ot,
  object: () => fr,
  objectUtil: () => Ve,
  oboolean: () => Pr,
  onumber: () => $r,
  optional: () => Ir,
  ostring: () => jr,
  pipeline: () => Rr,
  preprocess: () => Or,
  promise: () => Dr,
  quotelessJson: () => Tt,
  record: () => br,
  set: () => wr,
  setErrorMap: () => At,
  strictObject: () => hr,
  string: () => it,
  symbol: () => ir,
  transformer: () => Tr,
  tuple: () => xr,
  undefined: () => or,
  union: () => gr,
  unknown: () => lr,
  util: () => k,
  void: () => mr,
});
var k;
(function (r) {
  r.assertEqual = (s) => {};
  function e(s) {}
  r.assertIs = e;
  function t(s) {
    throw new Error();
  }
  (r.assertNever = t),
    (r.arrayToEnum = (s) => {
      let n = {};
      for (let i of s) n[i] = i;
      return n;
    }),
    (r.getValidEnumValues = (s) => {
      let n = r.objectKeys(s).filter((o) => typeof s[s[o]] != 'number'),
        i = {};
      for (let o of n) i[o] = s[o];
      return r.objectValues(i);
    }),
    (r.objectValues = (s) =>
      r.objectKeys(s).map(function (n) {
        return s[n];
      })),
    (r.objectKeys =
      typeof Object.keys == 'function'
        ? (s) => Object.keys(s)
        : (s) => {
            let n = [];
            for (let i in s)
              Object.prototype.hasOwnProperty.call(s, i) && n.push(i);
            return n;
          }),
    (r.find = (s, n) => {
      for (let i of s) if (n(i)) return i;
    }),
    (r.isInteger =
      typeof Number.isInteger == 'function'
        ? (s) => Number.isInteger(s)
        : (s) =>
            typeof s == 'number' && Number.isFinite(s) && Math.floor(s) === s);
  function a(s, n = ' | ') {
    return s.map((i) => (typeof i == 'string' ? `'${i}'` : i)).join(n);
  }
  (r.joinValues = a),
    (r.jsonStringifyReplacer = (s, n) =>
      typeof n == 'bigint' ? n.toString() : n);
})(k || (k = {}));
var Ve;
(function (r) {
  r.mergeShapes = (e, t) => ({ ...e, ...t });
})(Ve || (Ve = {}));
var m = k.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  Z = (r) => {
    switch (typeof r) {
      case 'undefined':
        return m.undefined;
      case 'string':
        return m.string;
      case 'number':
        return Number.isNaN(r) ? m.nan : m.number;
      case 'boolean':
        return m.boolean;
      case 'function':
        return m.function;
      case 'bigint':
        return m.bigint;
      case 'symbol':
        return m.symbol;
      case 'object':
        return Array.isArray(r)
          ? m.array
          : r === null
            ? m.null
            : r.then &&
                typeof r.then == 'function' &&
                r.catch &&
                typeof r.catch == 'function'
              ? m.promise
              : typeof Map < 'u' && r instanceof Map
                ? m.map
                : typeof Set < 'u' && r instanceof Set
                  ? m.set
                  : typeof Date < 'u' && r instanceof Date
                    ? m.date
                    : m.object;
      default:
        return m.unknown;
    }
  };
var d = k.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]),
  Tt = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, '$1:'),
  j = class r extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      super(),
        (this.issues = []),
        (this.addIssue = (a) => {
          this.issues = [...this.issues, a];
        }),
        (this.addIssues = (a = []) => {
          this.issues = [...this.issues, ...a];
        });
      let t = new.target.prototype;
      Object.setPrototypeOf
        ? Object.setPrototypeOf(this, t)
        : (this.__proto__ = t),
        (this.name = 'ZodError'),
        (this.issues = e);
    }
    format(e) {
      let t =
          e ||
          function (n) {
            return n.message;
          },
        a = { _errors: [] },
        s = (n) => {
          for (let i of n.issues)
            if (i.code === 'invalid_union') i.unionErrors.map(s);
            else if (i.code === 'invalid_return_type') s(i.returnTypeError);
            else if (i.code === 'invalid_arguments') s(i.argumentsError);
            else if (i.path.length === 0) a._errors.push(t(i));
            else {
              let o = a,
                c = 0;
              for (; c < i.path.length; ) {
                let l = i.path[c];
                c === i.path.length - 1
                  ? ((o[l] = o[l] || { _errors: [] }), o[l]._errors.push(t(i)))
                  : (o[l] = o[l] || { _errors: [] }),
                  (o = o[l]),
                  c++;
              }
            }
        };
      return s(this), a;
    }
    static assert(e) {
      if (!(e instanceof r)) throw new Error(`Not a ZodError: ${e}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, k.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (t) => t.message) {
      let t = {},
        a = [];
      for (let s of this.issues)
        if (s.path.length > 0) {
          let n = s.path[0];
          (t[n] = t[n] || []), t[n].push(e(s));
        } else a.push(e(s));
      return { formErrors: a, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  };
j.create = (r) => new j(r);
var It = (r, e) => {
    let t;
    switch (r.code) {
      case d.invalid_type:
        r.received === m.undefined
          ? (t = 'Required')
          : (t = `Expected ${r.expected}, received ${r.received}`);
        break;
      case d.invalid_literal:
        t = `Invalid literal value, expected ${JSON.stringify(r.expected, k.jsonStringifyReplacer)}`;
        break;
      case d.unrecognized_keys:
        t = `Unrecognized key(s) in object: ${k.joinValues(r.keys, ', ')}`;
        break;
      case d.invalid_union:
        t = 'Invalid input';
        break;
      case d.invalid_union_discriminator:
        t = `Invalid discriminator value. Expected ${k.joinValues(r.options)}`;
        break;
      case d.invalid_enum_value:
        t = `Invalid enum value. Expected ${k.joinValues(r.options)}, received '${r.received}'`;
        break;
      case d.invalid_arguments:
        t = 'Invalid function arguments';
        break;
      case d.invalid_return_type:
        t = 'Invalid function return type';
        break;
      case d.invalid_date:
        t = 'Invalid date';
        break;
      case d.invalid_string:
        typeof r.validation == 'object'
          ? 'includes' in r.validation
            ? ((t = `Invalid input: must include "${r.validation.includes}"`),
              typeof r.validation.position == 'number' &&
                (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`))
            : 'startsWith' in r.validation
              ? (t = `Invalid input: must start with "${r.validation.startsWith}"`)
              : 'endsWith' in r.validation
                ? (t = `Invalid input: must end with "${r.validation.endsWith}"`)
                : k.assertNever(r.validation)
          : r.validation !== 'regex'
            ? (t = `Invalid ${r.validation}`)
            : (t = 'Invalid');
        break;
      case d.too_small:
        r.type === 'array'
          ? (t = `Array must contain ${r.exact ? 'exactly' : r.inclusive ? 'at least' : 'more than'} ${r.minimum} element(s)`)
          : r.type === 'string'
            ? (t = `String must contain ${r.exact ? 'exactly' : r.inclusive ? 'at least' : 'over'} ${r.minimum} character(s)`)
            : r.type === 'number'
              ? (t = `Number must be ${r.exact ? 'exactly equal to ' : r.inclusive ? 'greater than or equal to ' : 'greater than '}${r.minimum}`)
              : r.type === 'bigint'
                ? (t = `Number must be ${r.exact ? 'exactly equal to ' : r.inclusive ? 'greater than or equal to ' : 'greater than '}${r.minimum}`)
                : r.type === 'date'
                  ? (t = `Date must be ${r.exact ? 'exactly equal to ' : r.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(r.minimum))}`)
                  : (t = 'Invalid input');
        break;
      case d.too_big:
        r.type === 'array'
          ? (t = `Array must contain ${r.exact ? 'exactly' : r.inclusive ? 'at most' : 'less than'} ${r.maximum} element(s)`)
          : r.type === 'string'
            ? (t = `String must contain ${r.exact ? 'exactly' : r.inclusive ? 'at most' : 'under'} ${r.maximum} character(s)`)
            : r.type === 'number'
              ? (t = `Number must be ${r.exact ? 'exactly' : r.inclusive ? 'less than or equal to' : 'less than'} ${r.maximum}`)
              : r.type === 'bigint'
                ? (t = `BigInt must be ${r.exact ? 'exactly' : r.inclusive ? 'less than or equal to' : 'less than'} ${r.maximum}`)
                : r.type === 'date'
                  ? (t = `Date must be ${r.exact ? 'exactly' : r.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(r.maximum))}`)
                  : (t = 'Invalid input');
        break;
      case d.custom:
        t = 'Invalid input';
        break;
      case d.invalid_intersection_types:
        t = 'Intersection results could not be merged';
        break;
      case d.not_multiple_of:
        t = `Number must be a multiple of ${r.multipleOf}`;
        break;
      case d.not_finite:
        t = 'Number must be finite';
        break;
      default:
        (t = e.defaultError), k.assertNever(r);
    }
    return { message: t };
  },
  B = It;
var Xe = B;
function At(r) {
  Xe = r;
}
function ge() {
  return Xe;
}
var Se = (r) => {
    let { data: e, path: t, errorMaps: a, issueData: s } = r,
      n = [...t, ...(s.path || [])],
      i = { ...s, path: n };
    if (s.message !== void 0) return { ...s, path: n, message: s.message };
    let o = '',
      c = a
        .filter((l) => !!l)
        .slice()
        .reverse();
    for (let l of c) o = l(i, { data: e, defaultError: o }).message;
    return { ...s, path: n, message: o };
  },
  Ot = [];
function u(r, e) {
  let t = ge(),
    a = Se({
      issueData: e,
      data: r.data,
      path: r.path,
      errorMaps: [
        r.common.contextualErrorMap,
        r.schemaErrorMap,
        t,
        t === B ? void 0 : B,
      ].filter((s) => !!s),
    });
  r.common.issues.push(a);
}
var O = class r {
    constructor() {
      this.value = 'valid';
    }
    dirty() {
      this.value === 'valid' && (this.value = 'dirty');
    }
    abort() {
      this.value !== 'aborted' && (this.value = 'aborted');
    }
    static mergeArray(e, t) {
      let a = [];
      for (let s of t) {
        if (s.status === 'aborted') return h;
        s.status === 'dirty' && e.dirty(), a.push(s.value);
      }
      return { status: e.value, value: a };
    }
    static async mergeObjectAsync(e, t) {
      let a = [];
      for (let s of t) {
        let n = await s.key,
          i = await s.value;
        a.push({ key: n, value: i });
      }
      return r.mergeObjectSync(e, a);
    }
    static mergeObjectSync(e, t) {
      let a = {};
      for (let s of t) {
        let { key: n, value: i } = s;
        if (n.status === 'aborted' || i.status === 'aborted') return h;
        n.status === 'dirty' && e.dirty(),
          i.status === 'dirty' && e.dirty(),
          n.value !== '__proto__' &&
            (typeof i.value < 'u' || s.alwaysSet) &&
            (a[n.value] = i.value);
      }
      return { status: e.value, value: a };
    }
  },
  h = Object.freeze({ status: 'aborted' }),
  ee = (r) => ({ status: 'dirty', value: r }),
  R = (r) => ({ status: 'valid', value: r }),
  De = (r) => r.status === 'aborted',
  Te = (r) => r.status === 'dirty',
  J = (r) => r.status === 'valid',
  ve = (r) => typeof Promise < 'u' && r instanceof Promise;
var f;
(function (r) {
  (r.errToObj = (e) => (typeof e == 'string' ? { message: e } : e || {})),
    (r.toString = (e) => (typeof e == 'string' ? e : e?.message));
})(f || (f = {}));
var z = class {
    constructor(e, t, a, s) {
      (this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = a),
        (this._key = s);
    }
    get path() {
      return (
        this._cachedPath.length ||
          (Array.isArray(this._key)
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  Qe = (r, e) => {
    if (J(e)) return { success: true, data: e.value };
    if (!r.common.issues.length)
      throw new Error('Validation failed but no issues detected.');
    return {
      success: false,
      get error() {
        if (this._error) return this._error;
        let t = new j(r.common.issues);
        return (this._error = t), this._error;
      },
    };
  };
function y(r) {
  if (!r) return {};
  let {
    errorMap: e,
    invalid_type_error: t,
    required_error: a,
    description: s,
  } = r;
  if (e && (t || a))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return e
    ? { errorMap: e, description: s }
    : {
        errorMap: (i, o) => {
          let { message: c } = r;
          return i.code === 'invalid_enum_value'
            ? { message: c ?? o.defaultError }
            : typeof o.data > 'u'
              ? { message: c ?? a ?? o.defaultError }
              : i.code !== 'invalid_type'
                ? { message: o.defaultError }
                : { message: c ?? t ?? o.defaultError };
        },
        description: s,
      };
}
var _ = class {
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return Z(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: Z(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new O(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: Z(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (ve(t)) throw new Error('Synchronous parse encountered promise.');
      return t;
    }
    _parseAsync(e) {
      let t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      let a = this.safeParse(e, t);
      if (a.success) return a.data;
      throw a.error;
    }
    safeParse(e, t) {
      let a = {
          common: {
            issues: [],
            async: t?.async ?? false,
            contextualErrorMap: t?.errorMap,
          },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: Z(e),
        },
        s = this._parseSync({ data: e, path: a.path, parent: a });
      return Qe(a, s);
    }
    '~validate'(e) {
      let t = {
        common: { issues: [], async: !!this['~standard'].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Z(e),
      };
      if (!this['~standard'].async)
        try {
          let a = this._parseSync({ data: e, path: [], parent: t });
          return J(a) ? { value: a.value } : { issues: t.common.issues };
        } catch (a) {
          a?.message?.toLowerCase()?.includes('encountered') &&
            (this['~standard'].async = true),
            (t.common = { issues: [], async: true });
        }
      return this._parseAsync({ data: e, path: [], parent: t }).then((a) =>
        J(a) ? { value: a.value } : { issues: t.common.issues },
      );
    }
    async parseAsync(e, t) {
      let a = await this.safeParseAsync(e, t);
      if (a.success) return a.data;
      throw a.error;
    }
    async safeParseAsync(e, t) {
      let a = {
          common: { issues: [], contextualErrorMap: t?.errorMap, async: true },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: Z(e),
        },
        s = this._parse({ data: e, path: a.path, parent: a }),
        n = await (ve(s) ? s : Promise.resolve(s));
      return Qe(a, n);
    }
    refine(e, t) {
      let a = (s) =>
        typeof t == 'string' || typeof t > 'u'
          ? { message: t }
          : typeof t == 'function'
            ? t(s)
            : t;
      return this._refinement((s, n) => {
        let i = e(s),
          o = () => n.addIssue({ code: d.custom, ...a(s) });
        return typeof Promise < 'u' && i instanceof Promise
          ? i.then((c) => (c ? true : (o(), false)))
          : i
            ? true
            : (o(), false);
      });
    }
    refinement(e, t) {
      return this._refinement((a, s) =>
        e(a) ? true : (s.addIssue(typeof t == 'function' ? t(a, s) : t), false),
      );
    }
    _refinement(e) {
      return new L({
        schema: this,
        typeName: g.ZodEffects,
        effect: { type: 'refinement', refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    constructor(e) {
      (this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this['~standard'] = {
          version: 1,
          vendor: 'zod',
          validate: (t) => this['~validate'](t),
        });
    }
    optional() {
      return P.create(this, this._def);
    }
    nullable() {
      return q.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return Y.create(this);
    }
    promise() {
      return Q.create(this, this._def);
    }
    or(e) {
      return oe.create([this, e], this._def);
    }
    and(e) {
      return de.create(this, e, this._def);
    }
    transform(e) {
      return new L({
        ...y(this._def),
        schema: this,
        typeName: g.ZodEffects,
        effect: { type: 'transform', transform: e },
      });
    }
    default(e) {
      let t = typeof e == 'function' ? e : () => e;
      return new pe({
        ...y(this._def),
        innerType: this,
        defaultValue: t,
        typeName: g.ZodDefault,
      });
    }
    brand() {
      return new Ce({ typeName: g.ZodBranded, type: this, ...y(this._def) });
    }
    catch(e) {
      let t = typeof e == 'function' ? e : () => e;
      return new fe({
        ...y(this._def),
        innerType: this,
        catchValue: t,
        typeName: g.ZodCatch,
      });
    }
    describe(e) {
      let t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return Ee.create(this, e);
    }
    readonly() {
      return he.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  Rt = /^c[^\s-]{8,}$/i,
  jt = /^[0-9a-z]+$/,
  $t = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Pt =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  zt = /^[a-z0-9_-]{21}$/i,
  Lt = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Mt =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Vt =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Ut = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$',
  Ue,
  Zt =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Ft =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  qt =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  Bt =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Wt = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Gt = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  tt =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  Yt = new RegExp(`^${tt}$`);
function rt(r) {
  let e = '[0-5]\\d';
  r.precision
    ? (e = `${e}\\.\\d{${r.precision}}`)
    : r.precision == null && (e = `${e}(\\.\\d+)?`);
  let t = r.precision ? '+' : '?';
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${t}`;
}
function Ht(r) {
  return new RegExp(`^${rt(r)}$`);
}
function at(r) {
  let e = `${tt}T${rt(r)}`,
    t = [];
  return (
    t.push(r.local ? 'Z?' : 'Z'),
    r.offset && t.push('([+-]\\d{2}:?\\d{2})'),
    (e = `${e}(${t.join('|')})`),
    new RegExp(`^${e}$`)
  );
}
function Jt(r, e) {
  return !!(
    ((e === 'v4' || !e) && Zt.test(r)) ||
    ((e === 'v6' || !e) && qt.test(r))
  );
}
function Kt(r, e) {
  if (!Lt.test(r)) return false;
  try {
    let [t] = r.split('.');
    if (!t) return !1;
    let a = t
        .replace(/-/g, '+')
        .replace(/_/g, '/')
        .padEnd(t.length + ((4 - (t.length % 4)) % 4), '='),
      s = JSON.parse(atob(a));
    return !(
      typeof s != 'object' ||
      s === null ||
      ('typ' in s && s?.typ !== 'JWT') ||
      !s.alg ||
      (e && s.alg !== e)
    );
  } catch {
    return false;
  }
}
function Xt(r, e) {
  return !!(
    ((e === 'v4' || !e) && Ft.test(r)) ||
    ((e === 'v6' || !e) && Bt.test(r))
  );
}
var K = class r extends _ {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== m.string)
    ) {
      let n = this._getOrReturnCtx(e);
      return (
        u(n, {
          code: d.invalid_type,
          expected: m.string,
          received: n.parsedType,
        }),
        h
      );
    }
    let a = new O(),
      s;
    for (let n of this._def.checks)
      if (n.kind === 'min')
        e.data.length < n.value &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: d.too_small,
            minimum: n.value,
            type: 'string',
            inclusive: true,
            exact: false,
            message: n.message,
          }),
          a.dirty());
      else if (n.kind === 'max')
        e.data.length > n.value &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: d.too_big,
            maximum: n.value,
            type: 'string',
            inclusive: true,
            exact: false,
            message: n.message,
          }),
          a.dirty());
      else if (n.kind === 'length') {
        let i = e.data.length > n.value,
          o = e.data.length < n.value;
        (i || o) &&
          ((s = this._getOrReturnCtx(e, s)),
          i
            ? u(s, {
                code: d.too_big,
                maximum: n.value,
                type: 'string',
                inclusive: true,
                exact: true,
                message: n.message,
              })
            : o &&
              u(s, {
                code: d.too_small,
                minimum: n.value,
                type: 'string',
                inclusive: true,
                exact: true,
                message: n.message,
              }),
          a.dirty());
      } else if (n.kind === 'email')
        Vt.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            validation: 'email',
            code: d.invalid_string,
            message: n.message,
          }),
          a.dirty());
      else if (n.kind === 'emoji')
        Ue || (Ue = new RegExp(Ut, 'u')),
          Ue.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            u(s, {
              validation: 'emoji',
              code: d.invalid_string,
              message: n.message,
            }),
            a.dirty());
      else if (n.kind === 'uuid')
        Pt.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            validation: 'uuid',
            code: d.invalid_string,
            message: n.message,
          }),
          a.dirty());
      else if (n.kind === 'nanoid')
        zt.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            validation: 'nanoid',
            code: d.invalid_string,
            message: n.message,
          }),
          a.dirty());
      else if (n.kind === 'cuid')
        Rt.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            validation: 'cuid',
            code: d.invalid_string,
            message: n.message,
          }),
          a.dirty());
      else if (n.kind === 'cuid2')
        jt.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            validation: 'cuid2',
            code: d.invalid_string,
            message: n.message,
          }),
          a.dirty());
      else if (n.kind === 'ulid')
        $t.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            validation: 'ulid',
            code: d.invalid_string,
            message: n.message,
          }),
          a.dirty());
      else if (n.kind === 'url')
        try {
          new URL(e.data);
        } catch {
          (s = this._getOrReturnCtx(e, s)),
            u(s, {
              validation: 'url',
              code: d.invalid_string,
              message: n.message,
            }),
            a.dirty();
        }
      else
        n.kind === 'regex'
          ? ((n.regex.lastIndex = 0),
            n.regex.test(e.data) ||
              ((s = this._getOrReturnCtx(e, s)),
              u(s, {
                validation: 'regex',
                code: d.invalid_string,
                message: n.message,
              }),
              a.dirty()))
          : n.kind === 'trim'
            ? (e.data = e.data.trim())
            : n.kind === 'includes'
              ? e.data.includes(n.value, n.position) ||
                ((s = this._getOrReturnCtx(e, s)),
                u(s, {
                  code: d.invalid_string,
                  validation: { includes: n.value, position: n.position },
                  message: n.message,
                }),
                a.dirty())
              : n.kind === 'toLowerCase'
                ? (e.data = e.data.toLowerCase())
                : n.kind === 'toUpperCase'
                  ? (e.data = e.data.toUpperCase())
                  : n.kind === 'startsWith'
                    ? e.data.startsWith(n.value) ||
                      ((s = this._getOrReturnCtx(e, s)),
                      u(s, {
                        code: d.invalid_string,
                        validation: { startsWith: n.value },
                        message: n.message,
                      }),
                      a.dirty())
                    : n.kind === 'endsWith'
                      ? e.data.endsWith(n.value) ||
                        ((s = this._getOrReturnCtx(e, s)),
                        u(s, {
                          code: d.invalid_string,
                          validation: { endsWith: n.value },
                          message: n.message,
                        }),
                        a.dirty())
                      : n.kind === 'datetime'
                        ? at(n).test(e.data) ||
                          ((s = this._getOrReturnCtx(e, s)),
                          u(s, {
                            code: d.invalid_string,
                            validation: 'datetime',
                            message: n.message,
                          }),
                          a.dirty())
                        : n.kind === 'date'
                          ? Yt.test(e.data) ||
                            ((s = this._getOrReturnCtx(e, s)),
                            u(s, {
                              code: d.invalid_string,
                              validation: 'date',
                              message: n.message,
                            }),
                            a.dirty())
                          : n.kind === 'time'
                            ? Ht(n).test(e.data) ||
                              ((s = this._getOrReturnCtx(e, s)),
                              u(s, {
                                code: d.invalid_string,
                                validation: 'time',
                                message: n.message,
                              }),
                              a.dirty())
                            : n.kind === 'duration'
                              ? Mt.test(e.data) ||
                                ((s = this._getOrReturnCtx(e, s)),
                                u(s, {
                                  validation: 'duration',
                                  code: d.invalid_string,
                                  message: n.message,
                                }),
                                a.dirty())
                              : n.kind === 'ip'
                                ? Jt(e.data, n.version) ||
                                  ((s = this._getOrReturnCtx(e, s)),
                                  u(s, {
                                    validation: 'ip',
                                    code: d.invalid_string,
                                    message: n.message,
                                  }),
                                  a.dirty())
                                : n.kind === 'jwt'
                                  ? Kt(e.data, n.alg) ||
                                    ((s = this._getOrReturnCtx(e, s)),
                                    u(s, {
                                      validation: 'jwt',
                                      code: d.invalid_string,
                                      message: n.message,
                                    }),
                                    a.dirty())
                                  : n.kind === 'cidr'
                                    ? Xt(e.data, n.version) ||
                                      ((s = this._getOrReturnCtx(e, s)),
                                      u(s, {
                                        validation: 'cidr',
                                        code: d.invalid_string,
                                        message: n.message,
                                      }),
                                      a.dirty())
                                    : n.kind === 'base64'
                                      ? Wt.test(e.data) ||
                                        ((s = this._getOrReturnCtx(e, s)),
                                        u(s, {
                                          validation: 'base64',
                                          code: d.invalid_string,
                                          message: n.message,
                                        }),
                                        a.dirty())
                                      : n.kind === 'base64url'
                                        ? Gt.test(e.data) ||
                                          ((s = this._getOrReturnCtx(e, s)),
                                          u(s, {
                                            validation: 'base64url',
                                            code: d.invalid_string,
                                            message: n.message,
                                          }),
                                          a.dirty())
                                        : k.assertNever(n);
    return { status: a.value, value: e.data };
  }
  _regex(e, t, a) {
    return this.refinement((s) => e.test(s), {
      validation: t,
      code: d.invalid_string,
      ...f.errToObj(a),
    });
  }
  _addCheck(e) {
    return new r({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: 'email', ...f.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: 'url', ...f.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: 'emoji', ...f.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: 'uuid', ...f.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: 'nanoid', ...f.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: 'cuid', ...f.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: 'cuid2', ...f.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: 'ulid', ...f.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: 'base64', ...f.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: 'base64url', ...f.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: 'jwt', ...f.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: 'ip', ...f.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: 'cidr', ...f.errToObj(e) });
  }
  datetime(e) {
    return typeof e == 'string'
      ? this._addCheck({
          kind: 'datetime',
          precision: null,
          offset: false,
          local: false,
          message: e,
        })
      : this._addCheck({
          kind: 'datetime',
          precision: typeof e?.precision > 'u' ? null : e?.precision,
          offset: e?.offset ?? false,
          local: e?.local ?? false,
          ...f.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: 'date', message: e });
  }
  time(e) {
    return typeof e == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: e })
      : this._addCheck({
          kind: 'time',
          precision: typeof e?.precision > 'u' ? null : e?.precision,
          ...f.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: 'duration', ...f.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: 'regex', regex: e, ...f.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: 'includes',
      value: e,
      position: t?.position,
      ...f.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: 'startsWith', value: e, ...f.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: 'endsWith', value: e, ...f.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: 'min', value: e, ...f.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: 'max', value: e, ...f.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: 'length', value: e, ...f.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, f.errToObj(e));
  }
  trim() {
    return new r({
      ...this._def,
      checks: [...this._def.checks, { kind: 'trim' }],
    });
  }
  toLowerCase() {
    return new r({
      ...this._def,
      checks: [...this._def.checks, { kind: 'toLowerCase' }],
    });
  }
  toUpperCase() {
    return new r({
      ...this._def,
      checks: [...this._def.checks, { kind: 'toUpperCase' }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === 'ip');
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === 'cidr');
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === 'base64');
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === 'base64url');
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
K.create = (r) =>
  new K({
    checks: [],
    typeName: g.ZodString,
    coerce: r?.coerce ?? false,
    ...y(r),
  });
function Qt(r, e) {
  let t = (r.toString().split('.')[1] || '').length,
    a = (e.toString().split('.')[1] || '').length,
    s = t > a ? t : a,
    n = Number.parseInt(r.toFixed(s).replace('.', '')),
    i = Number.parseInt(e.toFixed(s).replace('.', ''));
  return (n % i) / 10 ** s;
}
var te = class r extends _ {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== m.number)
    ) {
      let n = this._getOrReturnCtx(e);
      return (
        u(n, {
          code: d.invalid_type,
          expected: m.number,
          received: n.parsedType,
        }),
        h
      );
    }
    let a,
      s = new O();
    for (let n of this._def.checks)
      n.kind === 'int'
        ? k.isInteger(e.data) ||
          ((a = this._getOrReturnCtx(e, a)),
          u(a, {
            code: d.invalid_type,
            expected: 'integer',
            received: 'float',
            message: n.message,
          }),
          s.dirty())
        : n.kind === 'min'
          ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
            ((a = this._getOrReturnCtx(e, a)),
            u(a, {
              code: d.too_small,
              minimum: n.value,
              type: 'number',
              inclusive: n.inclusive,
              exact: false,
              message: n.message,
            }),
            s.dirty())
          : n.kind === 'max'
            ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
              ((a = this._getOrReturnCtx(e, a)),
              u(a, {
                code: d.too_big,
                maximum: n.value,
                type: 'number',
                inclusive: n.inclusive,
                exact: false,
                message: n.message,
              }),
              s.dirty())
            : n.kind === 'multipleOf'
              ? Qt(e.data, n.value) !== 0 &&
                ((a = this._getOrReturnCtx(e, a)),
                u(a, {
                  code: d.not_multiple_of,
                  multipleOf: n.value,
                  message: n.message,
                }),
                s.dirty())
              : n.kind === 'finite'
                ? Number.isFinite(e.data) ||
                  ((a = this._getOrReturnCtx(e, a)),
                  u(a, { code: d.not_finite, message: n.message }),
                  s.dirty())
                : k.assertNever(n);
    return { status: s.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit('min', e, true, f.toString(t));
  }
  gt(e, t) {
    return this.setLimit('min', e, false, f.toString(t));
  }
  lte(e, t) {
    return this.setLimit('max', e, true, f.toString(t));
  }
  lt(e, t) {
    return this.setLimit('max', e, false, f.toString(t));
  }
  setLimit(e, t, a, s) {
    return new r({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: a, message: f.toString(s) },
      ],
    });
  }
  _addCheck(e) {
    return new r({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: 'int', message: f.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: false,
      message: f.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: false,
      message: f.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: 'max',
      value: 0,
      inclusive: true,
      message: f.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: 'min',
      value: 0,
      inclusive: true,
      message: f.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: 'multipleOf',
      value: e,
      message: f.toString(t),
    });
  }
  finite(e) {
    return this._addCheck({ kind: 'finite', message: f.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: 'min',
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: f.toString(e),
    })._addCheck({
      kind: 'max',
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: f.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === 'int' || (e.kind === 'multipleOf' && k.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let a of this._def.checks) {
      if (a.kind === 'finite' || a.kind === 'int' || a.kind === 'multipleOf')
        return true;
      a.kind === 'min'
        ? (t === null || a.value > t) && (t = a.value)
        : a.kind === 'max' && (e === null || a.value < e) && (e = a.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
te.create = (r) =>
  new te({
    checks: [],
    typeName: g.ZodNumber,
    coerce: r?.coerce || false,
    ...y(r),
  });
var re = class r extends _ {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== m.bigint) return this._getInvalidInput(e);
    let a,
      s = new O();
    for (let n of this._def.checks)
      n.kind === 'min'
        ? (n.inclusive ? e.data < n.value : e.data <= n.value) &&
          ((a = this._getOrReturnCtx(e, a)),
          u(a, {
            code: d.too_small,
            type: 'bigint',
            minimum: n.value,
            inclusive: n.inclusive,
            message: n.message,
          }),
          s.dirty())
        : n.kind === 'max'
          ? (n.inclusive ? e.data > n.value : e.data >= n.value) &&
            ((a = this._getOrReturnCtx(e, a)),
            u(a, {
              code: d.too_big,
              type: 'bigint',
              maximum: n.value,
              inclusive: n.inclusive,
              message: n.message,
            }),
            s.dirty())
          : n.kind === 'multipleOf'
            ? e.data % n.value !== BigInt(0) &&
              ((a = this._getOrReturnCtx(e, a)),
              u(a, {
                code: d.not_multiple_of,
                multipleOf: n.value,
                message: n.message,
              }),
              s.dirty())
            : k.assertNever(n);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return (
      u(t, {
        code: d.invalid_type,
        expected: m.bigint,
        received: t.parsedType,
      }),
      h
    );
  }
  gte(e, t) {
    return this.setLimit('min', e, true, f.toString(t));
  }
  gt(e, t) {
    return this.setLimit('min', e, false, f.toString(t));
  }
  lte(e, t) {
    return this.setLimit('max', e, true, f.toString(t));
  }
  lt(e, t) {
    return this.setLimit('max', e, false, f.toString(t));
  }
  setLimit(e, t, a, s) {
    return new r({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: t, inclusive: a, message: f.toString(s) },
      ],
    });
  }
  _addCheck(e) {
    return new r({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: false,
      message: f.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: false,
      message: f.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: 'max',
      value: BigInt(0),
      inclusive: true,
      message: f.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: 'min',
      value: BigInt(0),
      inclusive: true,
      message: f.toString(e),
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: 'multipleOf',
      value: e,
      message: f.toString(t),
    });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
re.create = (r) =>
  new re({
    checks: [],
    typeName: g.ZodBigInt,
    coerce: r?.coerce ?? false,
    ...y(r),
  });
var ae = class extends _ {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== m.boolean)
    ) {
      let a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: d.invalid_type,
          expected: m.boolean,
          received: a.parsedType,
        }),
        h
      );
    }
    return R(e.data);
  }
};
ae.create = (r) =>
  new ae({ typeName: g.ZodBoolean, coerce: r?.coerce || false, ...y(r) });
var se = class r extends _ {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== m.date)
    ) {
      let n = this._getOrReturnCtx(e);
      return (
        u(n, {
          code: d.invalid_type,
          expected: m.date,
          received: n.parsedType,
        }),
        h
      );
    }
    if (Number.isNaN(e.data.getTime())) {
      let n = this._getOrReturnCtx(e);
      return u(n, { code: d.invalid_date }), h;
    }
    let a = new O(),
      s;
    for (let n of this._def.checks)
      n.kind === 'min'
        ? e.data.getTime() < n.value &&
          ((s = this._getOrReturnCtx(e, s)),
          u(s, {
            code: d.too_small,
            message: n.message,
            inclusive: true,
            exact: false,
            minimum: n.value,
            type: 'date',
          }),
          a.dirty())
        : n.kind === 'max'
          ? e.data.getTime() > n.value &&
            ((s = this._getOrReturnCtx(e, s)),
            u(s, {
              code: d.too_big,
              message: n.message,
              inclusive: true,
              exact: false,
              maximum: n.value,
              type: 'date',
            }),
            a.dirty())
          : k.assertNever(n);
    return { status: a.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new r({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({
      kind: 'min',
      value: e.getTime(),
      message: f.toString(t),
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: 'max',
      value: e.getTime(),
      message: f.toString(t),
    });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
};
se.create = (r) =>
  new se({
    checks: [],
    coerce: r?.coerce || false,
    typeName: g.ZodDate,
    ...y(r),
  });
var xe = class extends _ {
  _parse(e) {
    if (this._getType(e) !== m.symbol) {
      let a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: d.invalid_type,
          expected: m.symbol,
          received: a.parsedType,
        }),
        h
      );
    }
    return R(e.data);
  }
};
xe.create = (r) => new xe({ typeName: g.ZodSymbol, ...y(r) });
var ne = class extends _ {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      let a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: d.invalid_type,
          expected: m.undefined,
          received: a.parsedType,
        }),
        h
      );
    }
    return R(e.data);
  }
};
ne.create = (r) => new ne({ typeName: g.ZodUndefined, ...y(r) });
var ie = class extends _ {
  _parse(e) {
    if (this._getType(e) !== m.null) {
      let a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: d.invalid_type,
          expected: m.null,
          received: a.parsedType,
        }),
        h
      );
    }
    return R(e.data);
  }
};
ie.create = (r) => new ie({ typeName: g.ZodNull, ...y(r) });
var X = class extends _ {
  constructor() {
    super(...arguments), (this._any = true);
  }
  _parse(e) {
    return R(e.data);
  }
};
X.create = (r) => new X({ typeName: g.ZodAny, ...y(r) });
var G = class extends _ {
  constructor() {
    super(...arguments), (this._unknown = true);
  }
  _parse(e) {
    return R(e.data);
  }
};
G.create = (r) => new G({ typeName: g.ZodUnknown, ...y(r) });
var V = class extends _ {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return (
      u(t, { code: d.invalid_type, expected: m.never, received: t.parsedType }),
      h
    );
  }
};
V.create = (r) => new V({ typeName: g.ZodNever, ...y(r) });
var be = class extends _ {
  _parse(e) {
    if (this._getType(e) !== m.undefined) {
      let a = this._getOrReturnCtx(e);
      return (
        u(a, {
          code: d.invalid_type,
          expected: m.void,
          received: a.parsedType,
        }),
        h
      );
    }
    return R(e.data);
  }
};
be.create = (r) => new be({ typeName: g.ZodVoid, ...y(r) });
var Y = class r extends _ {
  _parse(e) {
    let { ctx: t, status: a } = this._processInputParams(e),
      s = this._def;
    if (t.parsedType !== m.array)
      return (
        u(t, {
          code: d.invalid_type,
          expected: m.array,
          received: t.parsedType,
        }),
        h
      );
    if (s.exactLength !== null) {
      let i = t.data.length > s.exactLength.value,
        o = t.data.length < s.exactLength.value;
      (i || o) &&
        (u(t, {
          code: i ? d.too_big : d.too_small,
          minimum: o ? s.exactLength.value : void 0,
          maximum: i ? s.exactLength.value : void 0,
          type: 'array',
          inclusive: true,
          exact: true,
          message: s.exactLength.message,
        }),
        a.dirty());
    }
    if (
      (s.minLength !== null &&
        t.data.length < s.minLength.value &&
        (u(t, {
          code: d.too_small,
          minimum: s.minLength.value,
          type: 'array',
          inclusive: true,
          exact: false,
          message: s.minLength.message,
        }),
        a.dirty()),
      s.maxLength !== null &&
        t.data.length > s.maxLength.value &&
        (u(t, {
          code: d.too_big,
          maximum: s.maxLength.value,
          type: 'array',
          inclusive: true,
          exact: false,
          message: s.maxLength.message,
        }),
        a.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((i, o) => s.type._parseAsync(new z(t, i, t.path, o))),
      ).then((i) => O.mergeArray(a, i));
    let n = [...t.data].map((i, o) =>
      s.type._parseSync(new z(t, i, t.path, o)),
    );
    return O.mergeArray(a, n);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new r({
      ...this._def,
      minLength: { value: e, message: f.toString(t) },
    });
  }
  max(e, t) {
    return new r({
      ...this._def,
      maxLength: { value: e, message: f.toString(t) },
    });
  }
  length(e, t) {
    return new r({
      ...this._def,
      exactLength: { value: e, message: f.toString(t) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
Y.create = (r, e) =>
  new Y({
    type: r,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: g.ZodArray,
    ...y(e),
  });
function ye(r) {
  if (r instanceof $) {
    let e = {};
    for (let t in r.shape) {
      let a = r.shape[t];
      e[t] = P.create(ye(a));
    }
    return new $({ ...r._def, shape: () => e });
  } else
    return r instanceof Y
      ? new Y({ ...r._def, type: ye(r.element) })
      : r instanceof P
        ? P.create(ye(r.unwrap()))
        : r instanceof q
          ? q.create(ye(r.unwrap()))
          : r instanceof F
            ? F.create(r.items.map((e) => ye(e)))
            : r;
}
var $ = class r extends _ {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      t = k.objectKeys(e);
    return (this._cached = { shape: e, keys: t }), this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== m.object) {
      let l = this._getOrReturnCtx(e);
      return (
        u(l, {
          code: d.invalid_type,
          expected: m.object,
          received: l.parsedType,
        }),
        h
      );
    }
    let { status: a, ctx: s } = this._processInputParams(e),
      { shape: n, keys: i } = this._getCached(),
      o = [];
    if (!(this._def.catchall instanceof V && this._def.unknownKeys === 'strip'))
      for (let l in s.data) i.includes(l) || o.push(l);
    let c = [];
    for (let l of i) {
      let v = n[l],
        A = s.data[l];
      c.push({
        key: { status: 'valid', value: l },
        value: v._parse(new z(s, A, s.path, l)),
        alwaysSet: l in s.data,
      });
    }
    if (this._def.catchall instanceof V) {
      let l = this._def.unknownKeys;
      if (l === 'passthrough')
        for (let v of o)
          c.push({
            key: { status: 'valid', value: v },
            value: { status: 'valid', value: s.data[v] },
          });
      else if (l === 'strict')
        o.length > 0 &&
          (u(s, { code: d.unrecognized_keys, keys: o }), a.dirty());
      else if (l !== 'strip')
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
    } else {
      let l = this._def.catchall;
      for (let v of o) {
        let A = s.data[v];
        c.push({
          key: { status: 'valid', value: v },
          value: l._parse(new z(s, A, s.path, v)),
          alwaysSet: v in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            let l = [];
            for (let v of c) {
              let A = await v.key,
                M = await v.value;
              l.push({ key: A, value: M, alwaysSet: v.alwaysSet });
            }
            return l;
          })
          .then((l) => O.mergeObjectSync(a, l))
      : O.mergeObjectSync(a, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      f.errToObj,
      new r({
        ...this._def,
        unknownKeys: 'strict',
        ...(e !== void 0
          ? {
              errorMap: (t, a) => {
                let s = this._def.errorMap?.(t, a).message ?? a.defaultError;
                return t.code === 'unrecognized_keys'
                  ? { message: f.errToObj(e).message ?? s }
                  : { message: s };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new r({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new r({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(e) {
    return new r({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new r({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: g.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new r({ ...this._def, catchall: e });
  }
  pick(e) {
    let t = {};
    for (let a of k.objectKeys(e))
      e[a] && this.shape[a] && (t[a] = this.shape[a]);
    return new r({ ...this._def, shape: () => t });
  }
  omit(e) {
    let t = {};
    for (let a of k.objectKeys(this.shape)) e[a] || (t[a] = this.shape[a]);
    return new r({ ...this._def, shape: () => t });
  }
  deepPartial() {
    return ye(this);
  }
  partial(e) {
    let t = {};
    for (let a of k.objectKeys(this.shape)) {
      let s = this.shape[a];
      e && !e[a] ? (t[a] = s) : (t[a] = s.optional());
    }
    return new r({ ...this._def, shape: () => t });
  }
  required(e) {
    let t = {};
    for (let a of k.objectKeys(this.shape))
      if (e && !e[a]) t[a] = this.shape[a];
      else {
        let n = this.shape[a];
        for (; n instanceof P; ) n = n._def.innerType;
        t[a] = n;
      }
    return new r({ ...this._def, shape: () => t });
  }
  keyof() {
    return st(k.objectKeys(this.shape));
  }
};
$.create = (r, e) =>
  new $({
    shape: () => r,
    unknownKeys: 'strip',
    catchall: V.create(),
    typeName: g.ZodObject,
    ...y(e),
  });
$.strictCreate = (r, e) =>
  new $({
    shape: () => r,
    unknownKeys: 'strict',
    catchall: V.create(),
    typeName: g.ZodObject,
    ...y(e),
  });
$.lazycreate = (r, e) =>
  new $({
    shape: r,
    unknownKeys: 'strip',
    catchall: V.create(),
    typeName: g.ZodObject,
    ...y(e),
  });
var oe = class extends _ {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      a = this._def.options;
    function s(n) {
      for (let o of n) if (o.result.status === 'valid') return o.result;
      for (let o of n)
        if (o.result.status === 'dirty')
          return t.common.issues.push(...o.ctx.common.issues), o.result;
      let i = n.map((o) => new j(o.ctx.common.issues));
      return u(t, { code: d.invalid_union, unionErrors: i }), h;
    }
    if (t.common.async)
      return Promise.all(
        a.map(async (n) => {
          let i = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return {
            result: await n._parseAsync({
              data: t.data,
              path: t.path,
              parent: i,
            }),
            ctx: i,
          };
        }),
      ).then(s);
    {
      let n,
        i = [];
      for (let c of a) {
        let l = { ...t, common: { ...t.common, issues: [] }, parent: null },
          v = c._parseSync({ data: t.data, path: t.path, parent: l });
        if (v.status === 'valid') return v;
        v.status === 'dirty' && !n && (n = { result: v, ctx: l }),
          l.common.issues.length && i.push(l.common.issues);
      }
      if (n) return t.common.issues.push(...n.ctx.common.issues), n.result;
      let o = i.map((c) => new j(c));
      return u(t, { code: d.invalid_union, unionErrors: o }), h;
    }
  }
  get options() {
    return this._def.options;
  }
};
oe.create = (r, e) => new oe({ options: r, typeName: g.ZodUnion, ...y(e) });
var W = (r) =>
    r instanceof ce
      ? W(r.schema)
      : r instanceof L
        ? W(r.innerType())
        : r instanceof le
          ? [r.value]
          : r instanceof ue
            ? r.options
            : r instanceof me
              ? k.objectValues(r.enum)
              : r instanceof pe
                ? W(r._def.innerType)
                : r instanceof ne
                  ? [void 0]
                  : r instanceof ie
                    ? [null]
                    : r instanceof P
                      ? [void 0, ...W(r.unwrap())]
                      : r instanceof q
                        ? [null, ...W(r.unwrap())]
                        : r instanceof Ce || r instanceof he
                          ? W(r.unwrap())
                          : r instanceof fe
                            ? W(r._def.innerType)
                            : [],
  Ie = class r extends _ {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== m.object)
        return (
          u(t, {
            code: d.invalid_type,
            expected: m.object,
            received: t.parsedType,
          }),
          h
        );
      let a = this.discriminator,
        s = t.data[a],
        n = this.optionsMap.get(s);
      return n
        ? t.common.async
          ? n._parseAsync({ data: t.data, path: t.path, parent: t })
          : n._parseSync({ data: t.data, path: t.path, parent: t })
        : (u(t, {
            code: d.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [a],
          }),
          h);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(e, t, a) {
      let s = new Map();
      for (let n of t) {
        let i = W(n.shape[e]);
        if (!i.length)
          throw new Error(
            `A discriminator value for key \`${e}\` could not be extracted from all schema options`,
          );
        for (let o of i) {
          if (s.has(o))
            throw new Error(
              `Discriminator property ${String(e)} has duplicate value ${String(o)}`,
            );
          s.set(o, n);
        }
      }
      return new r({
        typeName: g.ZodDiscriminatedUnion,
        discriminator: e,
        options: t,
        optionsMap: s,
        ...y(a),
      });
    }
  };
function Ze(r, e) {
  let t = Z(r),
    a = Z(e);
  if (r === e) return { valid: true, data: r };
  if (t === m.object && a === m.object) {
    let s = k.objectKeys(e),
      n = k.objectKeys(r).filter((o) => s.indexOf(o) !== -1),
      i = { ...r, ...e };
    for (let o of n) {
      let c = Ze(r[o], e[o]);
      if (!c.valid) return { valid: false };
      i[o] = c.data;
    }
    return { valid: true, data: i };
  } else if (t === m.array && a === m.array) {
    if (r.length !== e.length) return { valid: false };
    let s = [];
    for (let n = 0; n < r.length; n++) {
      let i = r[n],
        o = e[n],
        c = Ze(i, o);
      if (!c.valid) return { valid: false };
      s.push(c.data);
    }
    return { valid: true, data: s };
  } else
    return t === m.date && a === m.date && +r == +e
      ? { valid: true, data: r }
      : { valid: false };
}
var de = class extends _ {
  _parse(e) {
    let { status: t, ctx: a } = this._processInputParams(e),
      s = (n, i) => {
        if (De(n) || De(i)) return h;
        let o = Ze(n.value, i.value);
        return o.valid
          ? ((Te(n) || Te(i)) && t.dirty(), { status: t.value, value: o.data })
          : (u(a, { code: d.invalid_intersection_types }), h);
      };
    return a.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseAsync({
            data: a.data,
            path: a.path,
            parent: a,
          }),
        ]).then(([n, i]) => s(n, i))
      : s(
          this._def.left._parseSync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseSync({ data: a.data, path: a.path, parent: a }),
        );
  }
};
de.create = (r, e, t) =>
  new de({ left: r, right: e, typeName: g.ZodIntersection, ...y(t) });
var F = class r extends _ {
  _parse(e) {
    let { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.array)
      return (
        u(a, {
          code: d.invalid_type,
          expected: m.array,
          received: a.parsedType,
        }),
        h
      );
    if (a.data.length < this._def.items.length)
      return (
        u(a, {
          code: d.too_small,
          minimum: this._def.items.length,
          inclusive: true,
          exact: false,
          type: 'array',
        }),
        h
      );
    !this._def.rest &&
      a.data.length > this._def.items.length &&
      (u(a, {
        code: d.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: 'array',
      }),
      t.dirty());
    let n = [...a.data]
      .map((i, o) => {
        let c = this._def.items[o] || this._def.rest;
        return c ? c._parse(new z(a, i, a.path, o)) : null;
      })
      .filter((i) => !!i);
    return a.common.async
      ? Promise.all(n).then((i) => O.mergeArray(t, i))
      : O.mergeArray(t, n);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new r({ ...this._def, rest: e });
  }
};
F.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  return new F({ items: r, typeName: g.ZodTuple, rest: null, ...y(e) });
};
var Ae = class r extends _ {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: a } = this._processInputParams(e);
      if (a.parsedType !== m.object)
        return (
          u(a, {
            code: d.invalid_type,
            expected: m.object,
            received: a.parsedType,
          }),
          h
        );
      let s = [],
        n = this._def.keyType,
        i = this._def.valueType;
      for (let o in a.data)
        s.push({
          key: n._parse(new z(a, o, a.path, o)),
          value: i._parse(new z(a, a.data[o], a.path, o)),
          alwaysSet: o in a.data,
        });
      return a.common.async
        ? O.mergeObjectAsync(t, s)
        : O.mergeObjectSync(t, s);
    }
    get element() {
      return this._def.valueType;
    }
    static create(e, t, a) {
      return t instanceof _
        ? new r({ keyType: e, valueType: t, typeName: g.ZodRecord, ...y(a) })
        : new r({
            keyType: K.create(),
            valueType: e,
            typeName: g.ZodRecord,
            ...y(t),
          });
    }
  },
  _e = class extends _ {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: a } = this._processInputParams(e);
      if (a.parsedType !== m.map)
        return (
          u(a, {
            code: d.invalid_type,
            expected: m.map,
            received: a.parsedType,
          }),
          h
        );
      let s = this._def.keyType,
        n = this._def.valueType,
        i = [...a.data.entries()].map(([o, c], l) => ({
          key: s._parse(new z(a, o, a.path, [l, 'key'])),
          value: n._parse(new z(a, c, a.path, [l, 'value'])),
        }));
      if (a.common.async) {
        let o = new Map();
        return Promise.resolve().then(async () => {
          for (let c of i) {
            let l = await c.key,
              v = await c.value;
            if (l.status === 'aborted' || v.status === 'aborted') return h;
            (l.status === 'dirty' || v.status === 'dirty') && t.dirty(),
              o.set(l.value, v.value);
          }
          return { status: t.value, value: o };
        });
      } else {
        let o = new Map();
        for (let c of i) {
          let l = c.key,
            v = c.value;
          if (l.status === 'aborted' || v.status === 'aborted') return h;
          (l.status === 'dirty' || v.status === 'dirty') && t.dirty(),
            o.set(l.value, v.value);
        }
        return { status: t.value, value: o };
      }
    }
  };
_e.create = (r, e, t) =>
  new _e({ valueType: e, keyType: r, typeName: g.ZodMap, ...y(t) });
var we = class r extends _ {
  _parse(e) {
    let { status: t, ctx: a } = this._processInputParams(e);
    if (a.parsedType !== m.set)
      return (
        u(a, { code: d.invalid_type, expected: m.set, received: a.parsedType }),
        h
      );
    let s = this._def;
    s.minSize !== null &&
      a.data.size < s.minSize.value &&
      (u(a, {
        code: d.too_small,
        minimum: s.minSize.value,
        type: 'set',
        inclusive: true,
        exact: false,
        message: s.minSize.message,
      }),
      t.dirty()),
      s.maxSize !== null &&
        a.data.size > s.maxSize.value &&
        (u(a, {
          code: d.too_big,
          maximum: s.maxSize.value,
          type: 'set',
          inclusive: true,
          exact: false,
          message: s.maxSize.message,
        }),
        t.dirty());
    let n = this._def.valueType;
    function i(c) {
      let l = new Set();
      for (let v of c) {
        if (v.status === 'aborted') return h;
        v.status === 'dirty' && t.dirty(), l.add(v.value);
      }
      return { status: t.value, value: l };
    }
    let o = [...a.data.values()].map((c, l) =>
      n._parse(new z(a, c, a.path, l)),
    );
    return a.common.async ? Promise.all(o).then((c) => i(c)) : i(o);
  }
  min(e, t) {
    return new r({
      ...this._def,
      minSize: { value: e, message: f.toString(t) },
    });
  }
  max(e, t) {
    return new r({
      ...this._def,
      maxSize: { value: e, message: f.toString(t) },
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
we.create = (r, e) =>
  new we({
    valueType: r,
    minSize: null,
    maxSize: null,
    typeName: g.ZodSet,
    ...y(e),
  });
var Oe = class r extends _ {
    constructor() {
      super(...arguments), (this.validate = this.implement);
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== m.function)
        return (
          u(t, {
            code: d.invalid_type,
            expected: m.function,
            received: t.parsedType,
          }),
          h
        );
      function a(o, c) {
        return Se({
          data: o,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            ge(),
            B,
          ].filter((l) => !!l),
          issueData: { code: d.invalid_arguments, argumentsError: c },
        });
      }
      function s(o, c) {
        return Se({
          data: o,
          path: t.path,
          errorMaps: [
            t.common.contextualErrorMap,
            t.schemaErrorMap,
            ge(),
            B,
          ].filter((l) => !!l),
          issueData: { code: d.invalid_return_type, returnTypeError: c },
        });
      }
      let n = { errorMap: t.common.contextualErrorMap },
        i = t.data;
      if (this._def.returns instanceof Q) {
        let o = this;
        return R(async function (...c) {
          let l = new j([]),
            v = await o._def.args.parseAsync(c, n).catch((I) => {
              throw (l.addIssue(a(c, I)), l);
            }),
            A = await Reflect.apply(i, this, v);
          return await o._def.returns._def.type.parseAsync(A, n).catch((I) => {
            throw (l.addIssue(s(A, I)), l);
          });
        });
      } else {
        let o = this;
        return R(function (...c) {
          let l = o._def.args.safeParse(c, n);
          if (!l.success) throw new j([a(c, l.error)]);
          let v = Reflect.apply(i, this, l.data),
            A = o._def.returns.safeParse(v, n);
          if (!A.success) throw new j([s(v, A.error)]);
          return A.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...e) {
      return new r({ ...this._def, args: F.create(e).rest(G.create()) });
    }
    returns(e) {
      return new r({ ...this._def, returns: e });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(e, t, a) {
      return new r({
        args: e || F.create([]).rest(G.create()),
        returns: t || G.create(),
        typeName: g.ZodFunction,
        ...y(a),
      });
    }
  },
  ce = class extends _ {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      return this._def
        .getter()
        ._parse({ data: t.data, path: t.path, parent: t });
    }
  };
ce.create = (r, e) => new ce({ getter: r, typeName: g.ZodLazy, ...y(e) });
var le = class extends _ {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return (
        u(t, {
          received: t.data,
          code: d.invalid_literal,
          expected: this._def.value,
        }),
        h
      );
    }
    return { status: 'valid', value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
le.create = (r, e) => new le({ value: r, typeName: g.ZodLiteral, ...y(e) });
function st(r, e) {
  return new ue({ values: r, typeName: g.ZodEnum, ...y(e) });
}
var ue = class r extends _ {
  _parse(e) {
    if (typeof e.data != 'string') {
      let t = this._getOrReturnCtx(e),
        a = this._def.values;
      return (
        u(t, {
          expected: k.joinValues(a),
          received: t.parsedType,
          code: d.invalid_type,
        }),
        h
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(e.data))
    ) {
      let t = this._getOrReturnCtx(e),
        a = this._def.values;
      return (
        u(t, { received: t.data, code: d.invalid_enum_value, options: a }), h
      );
    }
    return R(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return r.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return r.create(
      this.options.filter((a) => !e.includes(a)),
      { ...this._def, ...t },
    );
  }
};
ue.create = st;
var me = class extends _ {
  _parse(e) {
    let t = k.getValidEnumValues(this._def.values),
      a = this._getOrReturnCtx(e);
    if (a.parsedType !== m.string && a.parsedType !== m.number) {
      let s = k.objectValues(t);
      return (
        u(a, {
          expected: k.joinValues(s),
          received: a.parsedType,
          code: d.invalid_type,
        }),
        h
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(k.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      let s = k.objectValues(t);
      return (
        u(a, { received: a.data, code: d.invalid_enum_value, options: s }), h
      );
    }
    return R(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
me.create = (r, e) => new me({ values: r, typeName: g.ZodNativeEnum, ...y(e) });
var Q = class extends _ {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== m.promise && t.common.async === false)
      return (
        u(t, {
          code: d.invalid_type,
          expected: m.promise,
          received: t.parsedType,
        }),
        h
      );
    let a = t.parsedType === m.promise ? t.data : Promise.resolve(t.data);
    return R(
      a.then((s) =>
        this._def.type.parseAsync(s, {
          path: t.path,
          errorMap: t.common.contextualErrorMap,
        }),
      ),
    );
  }
};
Q.create = (r, e) => new Q({ type: r, typeName: g.ZodPromise, ...y(e) });
var L = class extends _ {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === g.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: a } = this._processInputParams(e),
      s = this._def.effect || null,
      n = {
        addIssue: (i) => {
          u(a, i), i.fatal ? t.abort() : t.dirty();
        },
        get path() {
          return a.path;
        },
      };
    if (((n.addIssue = n.addIssue.bind(n)), s.type === 'preprocess')) {
      let i = s.transform(a.data, n);
      if (a.common.async)
        return Promise.resolve(i).then(async (o) => {
          if (t.value === 'aborted') return h;
          let c = await this._def.schema._parseAsync({
            data: o,
            path: a.path,
            parent: a,
          });
          return c.status === 'aborted'
            ? h
            : c.status === 'dirty'
              ? ee(c.value)
              : t.value === 'dirty'
                ? ee(c.value)
                : c;
        });
      {
        if (t.value === 'aborted') return h;
        let o = this._def.schema._parseSync({
          data: i,
          path: a.path,
          parent: a,
        });
        return o.status === 'aborted'
          ? h
          : o.status === 'dirty'
            ? ee(o.value)
            : t.value === 'dirty'
              ? ee(o.value)
              : o;
      }
    }
    if (s.type === 'refinement') {
      let i = (o) => {
        let c = s.refinement(o, n);
        if (a.common.async) return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error(
            'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return o;
      };
      if (a.common.async === false) {
        let o = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        return o.status === 'aborted'
          ? h
          : (o.status === 'dirty' && t.dirty(),
            i(o.value),
            { status: t.value, value: o.value });
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((o) =>
            o.status === 'aborted'
              ? h
              : (o.status === 'dirty' && t.dirty(),
                i(o.value).then(() => ({ status: t.value, value: o.value }))),
          );
    }
    if (s.type === 'transform')
      if (a.common.async === false) {
        let i = this._def.schema._parseSync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        if (!J(i)) return h;
        let o = s.transform(i.value, n);
        if (o instanceof Promise)
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        return { status: t.value, value: o };
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((i) =>
            J(i)
              ? Promise.resolve(s.transform(i.value, n)).then((o) => ({
                  status: t.value,
                  value: o,
                }))
              : h,
          );
    k.assertNever(s);
  }
};
L.create = (r, e, t) =>
  new L({ schema: r, typeName: g.ZodEffects, effect: e, ...y(t) });
L.createWithPreprocess = (r, e, t) =>
  new L({
    schema: e,
    effect: { type: 'preprocess', transform: r },
    typeName: g.ZodEffects,
    ...y(t),
  });
var P = class extends _ {
  _parse(e) {
    return this._getType(e) === m.undefined
      ? R(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
P.create = (r, e) => new P({ innerType: r, typeName: g.ZodOptional, ...y(e) });
var q = class extends _ {
  _parse(e) {
    return this._getType(e) === m.null
      ? R(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
q.create = (r, e) => new q({ innerType: r, typeName: g.ZodNullable, ...y(e) });
var pe = class extends _ {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      a = t.data;
    return (
      t.parsedType === m.undefined && (a = this._def.defaultValue()),
      this._def.innerType._parse({ data: a, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
pe.create = (r, e) =>
  new pe({
    innerType: r,
    typeName: g.ZodDefault,
    defaultValue: typeof e.default == 'function' ? e.default : () => e.default,
    ...y(e),
  });
var fe = class extends _ {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      a = { ...t, common: { ...t.common, issues: [] } },
      s = this._def.innerType._parse({
        data: a.data,
        path: a.path,
        parent: { ...a },
      });
    return ve(s)
      ? s.then((n) => ({
          status: 'valid',
          value:
            n.status === 'valid'
              ? n.value
              : this._def.catchValue({
                  get error() {
                    return new j(a.common.issues);
                  },
                  input: a.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            s.status === 'valid'
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new j(a.common.issues);
                  },
                  input: a.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
fe.create = (r, e) =>
  new fe({
    innerType: r,
    typeName: g.ZodCatch,
    catchValue: typeof e.catch == 'function' ? e.catch : () => e.catch,
    ...y(e),
  });
var Ne = class extends _ {
  _parse(e) {
    if (this._getType(e) !== m.nan) {
      let a = this._getOrReturnCtx(e);
      return (
        u(a, { code: d.invalid_type, expected: m.nan, received: a.parsedType }),
        h
      );
    }
    return { status: 'valid', value: e.data };
  }
};
Ne.create = (r) => new Ne({ typeName: g.ZodNaN, ...y(r) });
var er = Symbol('zod_brand'),
  Ce = class extends _ {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e),
        a = t.data;
      return this._def.type._parse({ data: a, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  Ee = class r extends _ {
    _parse(e) {
      let { status: t, ctx: a } = this._processInputParams(e);
      if (a.common.async)
        return (async () => {
          let n = await this._def.in._parseAsync({
            data: a.data,
            path: a.path,
            parent: a,
          });
          return n.status === 'aborted'
            ? h
            : n.status === 'dirty'
              ? (t.dirty(), ee(n.value))
              : this._def.out._parseAsync({
                  data: n.value,
                  path: a.path,
                  parent: a,
                });
        })();
      {
        let s = this._def.in._parseSync({
          data: a.data,
          path: a.path,
          parent: a,
        });
        return s.status === 'aborted'
          ? h
          : s.status === 'dirty'
            ? (t.dirty(), { status: 'dirty', value: s.value })
            : this._def.out._parseSync({
                data: s.value,
                path: a.path,
                parent: a,
              });
      }
    }
    static create(e, t) {
      return new r({ in: e, out: t, typeName: g.ZodPipeline });
    }
  },
  he = class extends _ {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        a = (s) => (J(s) && (s.value = Object.freeze(s.value)), s);
      return ve(t) ? t.then((s) => a(s)) : a(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
he.create = (r, e) =>
  new he({ innerType: r, typeName: g.ZodReadonly, ...y(e) });
function et(r, e) {
  let t =
    typeof r == 'function' ? r(e) : typeof r == 'string' ? { message: r } : r;
  return typeof t == 'string' ? { message: t } : t;
}
function nt(r, e = {}, t) {
  return r
    ? X.create().superRefine((a, s) => {
        let n = r(a);
        if (n instanceof Promise)
          return n.then((i) => {
            if (!i) {
              let o = et(e, a),
                c = o.fatal ?? t ?? true;
              s.addIssue({ code: 'custom', ...o, fatal: c });
            }
          });
        if (!n) {
          let i = et(e, a),
            o = i.fatal ?? t ?? true;
          s.addIssue({ code: 'custom', ...i, fatal: o });
        }
      })
    : X.create();
}
var tr = { object: $.lazycreate },
  g;
(function (r) {
  (r.ZodString = 'ZodString'),
    (r.ZodNumber = 'ZodNumber'),
    (r.ZodNaN = 'ZodNaN'),
    (r.ZodBigInt = 'ZodBigInt'),
    (r.ZodBoolean = 'ZodBoolean'),
    (r.ZodDate = 'ZodDate'),
    (r.ZodSymbol = 'ZodSymbol'),
    (r.ZodUndefined = 'ZodUndefined'),
    (r.ZodNull = 'ZodNull'),
    (r.ZodAny = 'ZodAny'),
    (r.ZodUnknown = 'ZodUnknown'),
    (r.ZodNever = 'ZodNever'),
    (r.ZodVoid = 'ZodVoid'),
    (r.ZodArray = 'ZodArray'),
    (r.ZodObject = 'ZodObject'),
    (r.ZodUnion = 'ZodUnion'),
    (r.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (r.ZodIntersection = 'ZodIntersection'),
    (r.ZodTuple = 'ZodTuple'),
    (r.ZodRecord = 'ZodRecord'),
    (r.ZodMap = 'ZodMap'),
    (r.ZodSet = 'ZodSet'),
    (r.ZodFunction = 'ZodFunction'),
    (r.ZodLazy = 'ZodLazy'),
    (r.ZodLiteral = 'ZodLiteral'),
    (r.ZodEnum = 'ZodEnum'),
    (r.ZodEffects = 'ZodEffects'),
    (r.ZodNativeEnum = 'ZodNativeEnum'),
    (r.ZodOptional = 'ZodOptional'),
    (r.ZodNullable = 'ZodNullable'),
    (r.ZodDefault = 'ZodDefault'),
    (r.ZodCatch = 'ZodCatch'),
    (r.ZodPromise = 'ZodPromise'),
    (r.ZodBranded = 'ZodBranded'),
    (r.ZodPipeline = 'ZodPipeline'),
    (r.ZodReadonly = 'ZodReadonly');
})(g || (g = {}));
var rr = (r, e = { message: `Input not instance of ${r.name}` }) =>
    nt((t) => t instanceof r, e),
  it = K.create,
  ot = te.create,
  ar = Ne.create,
  sr = re.create,
  dt = ae.create,
  nr = se.create,
  ir = xe.create,
  or = ne.create,
  dr = ie.create,
  cr = X.create,
  lr = G.create,
  ur = V.create,
  mr = be.create,
  pr = Y.create,
  fr = $.create,
  hr = $.strictCreate,
  gr = oe.create,
  vr = Ie.create,
  yr = de.create,
  xr = F.create,
  br = Ae.create,
  _r = _e.create,
  wr = we.create,
  Nr = Oe.create,
  kr = ce.create,
  Sr = le.create,
  Cr = ue.create,
  Er = me.create,
  Dr = Q.create,
  Tr = L.create,
  Ir = P.create,
  Ar = q.create,
  Or = L.createWithPreprocess,
  Rr = Ee.create,
  jr = () => it().optional(),
  $r = () => ot().optional(),
  Pr = () => dt().optional(),
  zr = {
    string: (r) => K.create({ ...r, coerce: true }),
    number: (r) => te.create({ ...r, coerce: true }),
    boolean: (r) => ae.create({ ...r, coerce: true }),
    bigint: (r) => re.create({ ...r, coerce: true }),
    date: (r) => se.create({ ...r, coerce: true }),
  };
var Lr = h;
var Vr = {
    'laptop-001': {
      id: 'laptop-001',
      name: 'MacBook Pro 14 M3',
      price: 1999,
      currency: 'USD',
      category: 'Electronics',
      brand: 'Apple',
      rating: 4.8,
      reviews: 1247,
      inStock: true,
      description:
        'Powerful laptop with M3 chip, 14-inch Liquid Retina XDR display, and up to 22 hours of battery life.',
      features: [
        'M3 Chip',
        '14" Liquid Retina XDR',
        'Up to 22h battery',
        '8-core GPU',
      ],
      images: [
        'https://example.com/macbook-pro-1.jpg',
        'https://example.com/macbook-pro-2.jpg',
      ],
    },
    'phone-001': {
      id: 'phone-001',
      name: 'iPhone 15 Pro',
      price: 999,
      currency: 'USD',
      category: 'Electronics',
      brand: 'Apple',
      rating: 4.7,
      reviews: 2156,
      inStock: true,
      description:
        'Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.',
      features: ['A17 Pro Chip', 'Titanium Design', '48MP Camera', 'USB-C'],
      images: [
        'https://example.com/iphone-15-pro-1.jpg',
        'https://example.com/iphone-15-pro-2.jpg',
      ],
    },
    'headphones-001': {
      id: 'headphones-001',
      name: 'Sony WH-1000XM5',
      price: 399,
      currency: 'USD',
      category: 'Electronics',
      brand: 'Sony',
      rating: 4.6,
      reviews: 892,
      inStock: false,
      description:
        'Industry-leading noise canceling headphones with exceptional sound quality.',
      features: [
        'Noise Canceling',
        '30h Battery',
        'Touch Controls',
        'Quick Charge',
      ],
      images: ['https://example.com/sony-wh1000xm5-1.jpg'],
    },
  },
  ct = tool({
    description:
      'Get detailed information about a product including price, reviews, features, and availability',
    inputSchema: p.object({
      name: p.string().describe('The commercial name of the product'),
    }),
    execute: async ({ name: r }) => {
      await new Promise((t) => setTimeout(t, 1500));
      let e = Object.values(Vr).find((t) =>
        t.name.toLowerCase().includes(r.toLowerCase()),
      );
      if (!e) throw new Error(`Product with name ${r} not found`);
      return {
        product: e,
        timestamp: new Date().toISOString(),
        source: 'product-database',
      };
    },
  });
function ke(...r) {
  return clsx(...r);
}
var lt = ({ input: r, onAction: e }) =>
    jsxs('div', {
      className: 'animate-pulse bg-white rounded-lg shadow-md p-6 max-w-sm',
      children: [
        jsxs('div', {
          className: 'flex items-center space-x-4 mb-4',
          children: [
            jsx('div', { className: 'bg-gray-200 rounded-lg size-16' }),
            jsxs('div', {
              className: 'flex-1',
              children: [
                jsx('div', { className: 'h-4 bg-gray-200 rounded w-3/4 mb-2' }),
                jsx('div', { className: 'h-3 bg-gray-200 rounded w-1/2' }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className: 'space-y-3',
          children: [
            jsx('div', { className: 'h-3 bg-gray-200 rounded' }),
            jsx('div', { className: 'h-3 bg-gray-200 rounded w-5/6' }),
            jsx('div', { className: 'h-3 bg-gray-200 rounded w-4/6' }),
          ],
        }),
        jsxs('div', {
          className: 'mt-4 flex items-center space-x-2',
          children: [
            jsx(ClockIcon, { className: 'size-4 text-gray-400' }),
            jsx('span', {
              className: 'text-sm text-gray-500',
              children: 'Loading product info...',
            }),
          ],
        }),
      ],
    }),
  ut = ({ output: r, input: e, onAction: t }) => {
    let { product: a } = r,
      s = () => {
        t?.({
          action: 'add_to_cart',
          data: {
            productId: a.id,
            productName: a.name,
            price: a.price,
            currency: a.currency,
          },
          context: { timestamp: Date.now() },
        });
      },
      n = () => {
        t?.({
          action: 'view_details',
          data: { productId: a.id, productName: a.name },
        });
      },
      i = () => {
        t?.({
          action: 'add_to_wishlist',
          data: { productId: a.id, productName: a.name },
        });
      },
      o = () => {
        t?.({
          action: 'share_product',
          data: {
            productId: a.id,
            productName: a.name,
            url: window.location.href,
          },
        });
      };
    return jsxs('div', {
      className:
        'bg-white rounded-lg shadow-md p-6 max-w-sm border border-gray-200 hover:shadow-lg transition-shadow',
      children: [
        jsxs('div', {
          className: 'flex items-start justify-between mb-4',
          children: [
            jsxs('div', {
              className: 'flex-1',
              children: [
                jsx('h3', {
                  className: 'text-lg font-semibold text-gray-900 mb-1',
                  children: a.name,
                }),
                jsx('p', {
                  className: 'text-sm text-gray-500',
                  children: a.brand,
                }),
              ],
            }),
            jsx('span', {
              className:
                'text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full',
              children: a.category,
            }),
          ],
        }),
        jsx('div', {
          className: 'mb-4',
          children: jsxs('span', {
            className: 'text-2xl font-bold text-gray-900',
            children: [a.currency, ' ', a.price.toLocaleString()],
          }),
        }),
        jsxs('div', {
          className: 'flex items-center space-x-2 mb-4',
          children: [
            jsx('div', {
              className: 'flex items-center',
              children: [...Array(5)].map((c, l) =>
                jsx(
                  StarIcon,
                  {
                    className: ke(
                      'w-4 h-4',
                      l < Math.floor(a.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300',
                    ),
                  },
                  `star-${crypto.randomUUID()}`,
                ),
              ),
            }),
            jsxs('span', {
              className: 'text-sm text-gray-600',
              children: [a.rating, ' (', a.reviews, ' reviews)'],
            }),
          ],
        }),
        jsx('div', {
          className: 'mb-4',
          children: jsx('span', {
            className: ke(
              'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
              a.inStock
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800',
            ),
            children: a.inStock ? 'In Stock' : 'Out of Stock',
          }),
        }),
        jsx('p', {
          className: 'text-sm text-gray-600 mb-4',
          children: a.description,
        }),
        jsxs('div', {
          className: 'mb-4',
          children: [
            jsx('h4', {
              className: 'text-sm font-medium text-gray-900 mb-2',
              children: 'Features',
            }),
            jsx('div', {
              className: 'flex flex-wrap gap-1',
              children: a.features.map((c, l) =>
                jsx(
                  'span',
                  {
                    className:
                      'inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800',
                    children: c,
                  },
                  `feature-${crypto.randomUUID()}`,
                ),
              ),
            }),
          ],
        }),
        jsxs('div', {
          className: 'mb-4 space-y-2',
          children: [
            jsxs('button', {
              type: 'button',
              onClick: s,
              disabled: !a.inStock,
              className: ke(
                'w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors',
                a.inStock
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed',
              ),
              children: [
                jsx(ShoppingCartIcon, { className: 'w-4 h-4' }),
                a.inStock ? 'Add to Cart' : 'Out of Stock',
              ],
            }),
            jsxs('div', {
              className: 'grid grid-cols-3 gap-2',
              children: [
                jsxs('button', {
                  type: 'button',
                  onClick: n,
                  className:
                    'flex items-center justify-center gap-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors',
                  children: [jsx(EyeIcon, { className: 'w-4 h-4' }), 'Details'],
                }),
                jsxs('button', {
                  type: 'button',
                  onClick: i,
                  className:
                    'flex items-center justify-center gap-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors',
                  children: [
                    jsx(HeartIcon, { className: 'w-4 h-4' }),
                    'Wishlist',
                  ],
                }),
                jsxs('button', {
                  type: 'button',
                  onClick: o,
                  className:
                    'flex items-center justify-center gap-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors',
                  children: [
                    jsx('span', {
                      className: 'text-sm',
                      children: '\u{1F4E4}',
                    }),
                    'Share',
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className:
            'flex items-center justify-between text-xs text-gray-500 border-t pt-4',
          children: [
            jsxs('span', { children: ['Source: ', r.source] }),
            jsx('span', { children: new Date(r.timestamp).toLocaleString() }),
          ],
        }),
      ],
    });
  },
  mt = ({ error: r, input: e, onAction: t }) => {
    let a = () => {
        t?.({ action: 'retry_load', data: { productId: e?.productId } });
      },
      s = () => {
        t?.({
          action: 'report_error',
          data: { productId: e?.productId, error: r },
        });
      };
    return jsxs('div', {
      className: 'bg-red-50 border border-red-200 rounded-lg p-6 max-w-sm',
      children: [
        jsxs('div', {
          className: 'flex items-center space-x-3 mb-4',
          children: [
            jsx('div', {
              className:
                'bg-red-100 rounded-lg size-12 flex items-center justify-center',
              children: jsx('span', {
                className: 'text-red-600 text-xl',
                children: '\u26A0\uFE0F',
              }),
            }),
            jsxs('div', {
              children: [
                jsx('h3', {
                  className: 'font-semibold text-red-800',
                  children: 'Error Loading Product',
                }),
                jsx('p', { className: 'text-red-600 text-sm', children: r }),
                e &&
                  jsxs('p', {
                    className: 'text-red-500 text-xs mt-1',
                    children: ['Product ID: ', e.productId],
                  }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className: 'flex gap-2',
          children: [
            jsx('button', {
              type: 'button',
              onClick: a,
              className:
                'flex-1 px-3 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors',
              children: 'Retry',
            }),
            jsx('button', {
              type: 'button',
              onClick: s,
              className:
                'flex-1 px-3 py-2 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors',
              children: 'Report Error',
            }),
          ],
        }),
      ],
    });
  };
var pt = process.env.UNSPLASH_ACCESS_KEY,
  ft = 'https://api.unsplash.com',
  Fe = class {
    constructor() {
      this.cache = new Map();
      this.CACHE_DURATION = 1440 * 60 * 1e3;
    }
    generateKey(e, t, a, s) {
      return `${e.toLowerCase().trim()}-${t}-${a || 'any'}-${s || 'free'}`;
    }
    get(e) {
      let t = this.cache.get(e);
      return t
        ? Date.now() > t.expiresAt
          ? (console.log(`Cache entry expired for key: "${e}"`),
            this.cache.delete(e),
            null)
          : t.data
        : null;
    }
    set(e, t) {
      let a = Date.now();
      this.cache.set(e, {
        data: t,
        timestamp: a,
        expiresAt: a + this.CACHE_DURATION,
      });
    }
    clear() {
      this.cache.clear();
    }
    getStats() {
      let e = Date.now(),
        t = 0;
      for (let [a, s] of this.cache.entries())
        e > s.expiresAt ? this.cache.delete(a) : t++;
      return {
        size: this.cache.size,
        keys: Array.from(this.cache.keys()),
        validEntries: t,
      };
    }
    hasValidEntry(e) {
      let t = this.cache.get(e);
      return t
        ? Date.now() > t.expiresAt
          ? (this.cache.delete(e), false)
          : true
        : false;
    }
  },
  Re = new Fe(),
  ht = tool({
    description:
      'Search for high-quality images based on a description or keywords',
    inputSchema: p.object({
      query: p
        .string()
        .describe('Search query or description of the image you want to find'),
      count: p
        .number()
        .optional()
        .default(8)
        .describe('Number of images to return (1-10)'),
      orientation: p
        .enum(['landscape', 'portrait', 'square'])
        .optional()
        .describe('Preferred image orientation'),
      license: p
        .enum(['free', 'commercial', 'any'])
        .optional()
        .default('free')
        .describe('License type preference'),
    }),
    execute: async ({ query: r, count: e = 8, orientation: t, license: a }) => {
      if (!pt)
        throw new Error(
          'Unsplash API key not configured. Please set UNSPLASH_ACCESS_KEY environment variable.',
        );
      let s = Re.generateKey(r, e, t, a);
      console.log(`Generated cache key: "${s}"`);
      let n = Re.get(s);
      if (n)
        return (
          console.log(`\u2705 Cache HIT for query: "${r}" with key: "${s}"`), n
        );
      console.log(`\u274C Cache MISS for query: "${r}" with key: "${s}"`);
      let i = Re.getStats();
      console.log(
        `Cache stats: ${i.validEntries}/${i.size} valid entries. Keys:`,
        i.keys,
      );
      try {
        console.log(`Fetching from API for query: "${r}"`);
        let o = new URLSearchParams({ query: r, client_id: pt });
        t && o.append('orientation', t),
          console.log(`API URL: ${ft}/search/photos?${o.toString()}`);
        let c = await fetch(`${ft}/search/photos?${o}`);
        if (!c.ok)
          throw new Error(`Unsplash API error: ${c.status} ${c.statusText}`);
        let l = await c.json();
        console.log(`API Response: Found ${l.results?.length || 0} images`);
        let A = (l.results.slice(0, e) || []).map((I) => ({
            id: I.id,
            url: I.urls.regular,
            alt: I.alt_description || I.description || `Image for ${r}`,
            title: I.description || `Photo by ${I.user.name}`,
            photographer: I.user.name,
            tags: I.tags?.map((Me) => Me.title) || [],
            width: I.width,
            height: I.height,
            license: 'free',
            downloadUrl: I.links.download,
          })),
          M = {
            query: r,
            results: A,
            totalFound: l.total || A.length,
            searchTime: new Date().toISOString(),
            filters: { count: e, orientation: t, license: a },
          };
        return (
          Re.set(s, M),
          console.log(`\u{1F4BE} Cached result for key: "${s}"`),
          M
        );
      } catch (o) {
        throw (
          (console.error('Error fetching from Unsplash API:', o),
          new Error(
            `Failed to search images: ${o instanceof Error ? o.message : 'Unknown error'}`,
          ))
        );
      }
    },
  });
var vt = ({ input: r }) =>
    jsxs('div', {
      className: 'animate-pulse bg-white rounded-lg shadow-md p-6',
      children: [
        jsxs('div', {
          className: 'flex items-center space-x-3 mb-4',
          children: [
            jsx('div', {
              className:
                'bg-blue-100 rounded-lg size-12 flex items-center justify-center',
              children: jsx(Image, { className: 'size-6 text-blue-600' }),
            }),
            jsxs('div', {
              className: 'flex-1',
              children: [
                jsx('div', { className: 'h-4 bg-gray-200 rounded w-3/4 mb-2' }),
                jsx('div', { className: 'h-3 bg-gray-200 rounded w-1/2' }),
              ],
            }),
          ],
        }),
        jsx('div', {
          className: 'grid grid-cols-2 md:grid-cols-4 gap-4',
          children: [...Array(4)].map((e, t) =>
            jsxs(
              'div',
              {
                className: 'space-y-2',
                children: [
                  jsx('div', {
                    className: 'bg-gray-200 rounded-lg aspect-square',
                  }),
                  jsx('div', { className: 'h-3 bg-gray-200 rounded w-3/4' }),
                  jsx('div', { className: 'h-2 bg-gray-200 rounded w-1/2' }),
                ],
              },
              `skeleton-${crypto.randomUUID()}`,
            ),
          ),
        }),
        jsxs('div', {
          className: 'mt-4 flex items-center space-x-2',
          children: [
            jsx(Search, { className: 'size-4 text-gray-400' }),
            jsxs('span', {
              className: 'text-sm text-gray-500',
              children: ['Searching for \u201C', r?.query, '\u201D...'],
            }),
          ],
        }),
      ],
    }),
  yt = ({ output: r, input: e }) => {
    let [t, a] = useState(null);
    return jsxs(Fragment, {
      children: [
        jsxs('div', {
          className: 'bg-white rounded-lg shadow-md p-6',
          children: [
            jsxs('div', {
              className: 'flex items-center space-x-3 mb-4',
              children: [
                jsx('div', {
                  className:
                    'bg-blue-100 rounded-lg size-12 flex items-center justify-center',
                  children: jsx(Image, { className: 'size-6 text-blue-600' }),
                }),
                jsxs('div', {
                  className: 'flex-1',
                  children: [
                    jsx('h3', {
                      className: 'font-semibold text-lg',
                      children: 'Image Search Results',
                    }),
                    jsxs('p', {
                      className: 'text-gray-600 text-sm',
                      children: [
                        'Found ',
                        r.totalFound,
                        ' images for \u201C',
                        r.query,
                        '\u201D',
                      ],
                    }),
                  ],
                }),
              ],
            }),
            jsx('div', {
              className: 'grid grid-cols-2 md:grid-cols-4 gap-4 mb-4',
              children: r.results.map((s) =>
                jsxs(
                  'div',
                  {
                    className: 'group relative',
                    children: [
                      jsxs('div', {
                        className:
                          'relative overflow-hidden rounded-lg bg-gray-100',
                        children: [
                          jsx('img', {
                            src: s.url,
                            alt: s.alt,
                            className:
                              'w-full h-32 object-cover transition-transform duration-200 group-hover:scale-105',
                          }),
                          jsx('div', {
                            className:
                              'absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200',
                          }),
                          jsx('div', {
                            className:
                              'absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200',
                            children: jsxs('div', {
                              className: 'flex space-x-2',
                              children: [
                                jsx('button', {
                                  type: 'button',
                                  onClick: () => a(s),
                                  className:
                                    'bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors',
                                  title: 'View full size',
                                  children: jsx(ZoomIn, {
                                    className: 'size-4 text-gray-600',
                                  }),
                                }),
                                jsx('button', {
                                  type: 'button',
                                  className:
                                    'bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors',
                                  children: jsx(Heart, {
                                    className: 'size-4 text-gray-600',
                                  }),
                                }),
                                jsx('a', {
                                  href: s.downloadUrl,
                                  target: '_blank',
                                  rel: 'noopener noreferrer',
                                  className:
                                    'bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors',
                                  children: jsx(Download, {
                                    className: 'size-4 text-gray-600',
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      jsxs('div', {
                        className: 'mt-2 space-y-1',
                        children: [
                          jsx('h4', {
                            className: 'font-medium text-sm truncate',
                            children: s.title,
                          }),
                          jsxs('p', {
                            className: 'text-xs text-gray-500',
                            children: ['by ', s.photographer],
                          }),
                          jsx('div', {
                            className: 'flex flex-wrap gap-1',
                            children: s.tags
                              .slice(0, 2)
                              .map((n, i) =>
                                jsx(
                                  'span',
                                  {
                                    className:
                                      'px-1.5 py-0.5 bg-gray-100 rounded text-xs text-gray-600',
                                    children: n,
                                  },
                                  `${s.id}-tag-${i}`,
                                ),
                              ),
                          }),
                        ],
                      }),
                    ],
                  },
                  s.id,
                ),
              ),
            }),
            jsxs('div', {
              className:
                'flex items-center justify-between text-xs text-gray-500 border-t pt-4',
              children: [
                jsxs('div', {
                  className: 'flex items-center space-x-4',
                  children: [
                    jsxs('span', {
                      children: [
                        'Resolution: ',
                        r.results[0]?.width,
                        'x',
                        r.results[0]?.height,
                      ],
                    }),
                    jsxs('span', {
                      children: ['License: ', r.filters.license],
                    }),
                    r.filters.orientation &&
                      jsxs('span', {
                        children: ['Orientation: ', r.filters.orientation],
                      }),
                  ],
                }),
                jsxs('span', {
                  children: [
                    'Search time: ',
                    new Date(r.searchTime).toLocaleTimeString(),
                  ],
                }),
              ],
            }),
          ],
        }),
        t &&
          jsx('div', {
            className:
              'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4',
            children: jsxs('div', {
              className: 'relative max-w-4xl max-h-full',
              children: [
                jsx('button', {
                  type: 'button',
                  onClick: () => a(null),
                  className:
                    'absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10',
                  children: jsx(X$1, { className: 'size-8' }),
                }),
                jsxs('div', {
                  className: 'relative',
                  children: [
                    jsx('img', {
                      src: t.url,
                      alt: t.alt,
                      className:
                        'max-w-full max-h-[80vh] object-contain rounded-lg',
                    }),
                    jsxs('div', {
                      className:
                        'absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg',
                      children: [
                        jsx('h3', {
                          className: 'text-white font-semibold text-lg mb-1',
                          children: t.title,
                        }),
                        jsxs('p', {
                          className: 'text-gray-200 text-sm mb-2',
                          children: ['by ', t.photographer],
                        }),
                        jsx('div', {
                          className: 'flex flex-wrap gap-1 mb-3',
                          children: t.tags
                            .slice(0, 4)
                            .map((s) =>
                              jsx(
                                'span',
                                {
                                  className:
                                    'px-2 py-1 bg-white/20 text-white rounded text-xs',
                                  children: s,
                                },
                                `modal-tag-${crypto.randomUUID()}`,
                              ),
                            ),
                        }),
                        jsxs('div', {
                          className:
                            'flex items-center space-x-4 text-white text-sm',
                          children: [
                            jsxs('span', {
                              children: [t.width, ' \xD7 ', t.height],
                            }),
                            jsxs('a', {
                              href: t.downloadUrl,
                              target: '_blank',
                              rel: 'noopener noreferrer',
                              className:
                                'flex items-center space-x-1 hover:text-blue-300 transition-colors',
                              children: [
                                jsx(Download, { className: 'size-4' }),
                                jsx('span', { children: 'Download' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  xt = ({ error: r, input: e }) =>
    jsx('div', {
      className: 'bg-red-50 border border-red-200 rounded-lg p-6',
      children: jsxs('div', {
        className: 'flex items-center space-x-3',
        children: [
          jsx('div', {
            className:
              'bg-red-100 rounded-lg size-12 flex items-center justify-center',
            children: jsx(Image, { className: 'size-6 text-red-600' }),
          }),
          jsxs('div', {
            children: [
              jsx('h3', {
                className: 'font-semibold text-red-800',
                children: 'Image Search Failed',
              }),
              jsx('p', { className: 'text-red-600 text-sm', children: r }),
              e &&
                jsxs('p', {
                  className: 'text-red-500 text-xs mt-1',
                  children: ['Query: \u201C', e.query, '\u201D'],
                }),
            ],
          }),
        ],
      }),
    });
var ta = (r) => {
    let e = [
        'good',
        'great',
        'excellent',
        'amazing',
        'wonderful',
        'love',
        'happy',
        'fantastic',
        'perfect',
        'beautiful',
      ],
      t = [
        'bad',
        'terrible',
        'awful',
        'hate',
        'disappointing',
        'worst',
        'horrible',
        'sad',
        'angry',
        'frustrated',
      ],
      a = [
        'okay',
        'fine',
        'normal',
        'average',
        'regular',
        'standard',
        'usual',
        'typical',
      ],
      s = r.toLowerCase().split(/\s+/),
      n = 0,
      i = 0,
      o = 0;
    s.forEach((M) => {
      e.some((I) => M.includes(I))
        ? n++
        : t.some((I) => M.includes(I))
          ? i++
          : a.some((I) => M.includes(I)) && o++;
    });
    let c = n + i + o;
    if (c === 0)
      return {
        sentiment: 'neutral',
        confidence: 0.5,
        score: 0,
        breakdown: { positive: 0, negative: 0, neutral: 1 },
      };
    let l = (n - i) / c,
      v,
      A;
    return (
      l > 0.2
        ? ((v = 'positive'), (A = Math.min(0.9, 0.5 + Math.abs(l) * 0.4)))
        : l < -0.2
          ? ((v = 'negative'), (A = Math.min(0.9, 0.5 + Math.abs(l) * 0.4)))
          : ((v = 'neutral'),
            (A = Math.min(0.9, 0.5 + (1 - Math.abs(l)) * 0.4))),
      {
        sentiment: v,
        confidence: A,
        score: l,
        breakdown: { positive: n / c, negative: i / c, neutral: o / c },
      }
    );
  },
  bt = tool({
    description:
      'Analyze the sentiment of text to determine if it is positive, negative, or neutral',
    inputSchema: p.object({
      text: p.string().describe('The text to analyze for sentiment'),
      language: p
        .string()
        .optional()
        .default('en')
        .describe('Language of the text (ISO code)'),
      detailed: p
        .boolean()
        .optional()
        .default(true)
        .describe('Whether to return detailed analysis'),
    }),
    execute: async ({ text: r, language: e = 'en', detailed: t = true }) => {
      if (
        (await new Promise((o) => setTimeout(o, 1500)),
        !r || r.trim().length === 0)
      )
        throw new Error('Text cannot be empty');
      let a = ta(r),
        s = [];
      Object.entries({
        joy: ['happy', 'joy', 'excited', 'thrilled', 'delighted'],
        sadness: ['sad', 'depressed', 'melancholy', 'sorrow', 'grief'],
        anger: ['angry', 'furious', 'mad', 'irritated', 'annoyed'],
        fear: ['afraid', 'scared', 'terrified', 'worried', 'anxious'],
        surprise: ['surprised', 'shocked', 'amazed', 'astonished', 'stunned'],
        love: ['love', 'adore', 'cherish', 'affection', 'passion'],
        disgust: ['disgusted', 'revolted', 'repulsed', 'sickened', 'appalled'],
      }).forEach(([o, c]) => {
        let l = c.filter((v) => r.toLowerCase().includes(v)).length;
        l > 0 && s.push({ emotion: o, intensity: l / c.length });
      }),
        s.sort((o, c) => c.intensity - o.intensity);
      let i = {
        text: r.substring(0, 100) + (r.length > 100 ? '...' : ''),
        language: e,
        sentiment: a.sentiment,
        confidence: a.confidence,
        score: a.score,
        wordCount: r.split(/\s+/).length,
        characterCount: r.length,
        analysisTime: new Date().toISOString(),
      };
      return t
        ? {
            ...i,
            breakdown: a.breakdown,
            emotions: s.slice(0, 3),
            suggestions: ra(a.sentiment, a.score),
          }
        : i;
    },
  });
function ra(r, e) {
  let t = [];
  return (
    r === 'positive' && e > 0.7
      ? (t.push('This text shows strong positive sentiment'),
        t.push('Consider using this for testimonials or reviews'))
      : r === 'negative' && e < -0.7
        ? (t.push('This text shows strong negative sentiment'),
          t.push('Consider addressing concerns or providing support'))
        : r === 'neutral' &&
          (t.push('This text is neutral in tone'),
          t.push('Consider adding more emotional context if needed')),
    Math.abs(e) < 0.3 &&
      t.push('Sentiment is mixed - consider clarifying the message'),
    t
  );
}
var _t = ({ input: r }) =>
    jsxs('div', {
      className: 'animate-pulse bg-white rounded-lg shadow-md p-6',
      children: [
        jsxs('div', {
          className: 'flex items-center space-x-3 mb-4',
          children: [
            jsx('div', {
              className:
                'bg-purple-100 rounded-lg size-12 flex items-center justify-center',
              children: jsx(BarChart3, { className: 'size-6 text-purple-600' }),
            }),
            jsxs('div', {
              className: 'flex-1',
              children: [
                jsx('div', { className: 'h-4 bg-gray-200 rounded w-3/4 mb-2' }),
                jsx('div', { className: 'h-3 bg-gray-200 rounded w-1/2' }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className: 'space-y-4',
          children: [
            jsx('div', { className: 'h-20 bg-gray-200 rounded' }),
            jsxs('div', {
              className: 'flex space-x-4',
              children: [
                jsx('div', { className: 'flex-1 h-8 bg-gray-200 rounded' }),
                jsx('div', { className: 'flex-1 h-8 bg-gray-200 rounded' }),
                jsx('div', { className: 'flex-1 h-8 bg-gray-200 rounded' }),
              ],
            }),
            jsxs('div', {
              className: 'space-y-2',
              children: [
                jsx('div', { className: 'h-3 bg-gray-200 rounded w-5/6' }),
                jsx('div', { className: 'h-3 bg-gray-200 rounded w-4/6' }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className: 'mt-4 flex items-center space-x-2',
          children: [
            jsx(Clock, { className: 'size-4 text-gray-400' }),
            jsx('span', {
              className: 'text-sm text-gray-500',
              children: 'Analyzing sentiment...',
            }),
          ],
        }),
      ],
    }),
  wt = ({ output: r, input: e }) => {
    let t = (n) => {
        switch (n) {
          case 'positive':
            return jsx(Smile, { className: 'size-6 text-green-600' });
          case 'negative':
            return jsx(Frown, { className: 'size-6 text-red-600' });
          default:
            return jsx(Meh, { className: 'size-6 text-gray-600' });
        }
      },
      a = (n) => {
        switch (n) {
          case 'positive':
            return 'text-green-600 bg-green-100';
          case 'negative':
            return 'text-red-600 bg-red-100';
          default:
            return 'text-gray-600 bg-gray-100';
        }
      },
      s = (n) =>
        n > 0.8
          ? 'text-green-600'
          : n > 0.6
            ? 'text-yellow-600'
            : 'text-red-600';
    return jsxs('div', {
      className: 'bg-white rounded-lg shadow-md p-6',
      children: [
        jsxs('div', {
          className: 'flex items-center space-x-3 mb-4',
          children: [
            jsx('div', {
              className:
                'bg-purple-100 rounded-lg size-12 flex items-center justify-center',
              children: jsx(BarChart3, { className: 'size-6 text-purple-600' }),
            }),
            jsxs('div', {
              className: 'flex-1',
              children: [
                jsx('h3', {
                  className: 'font-semibold text-lg',
                  children: 'Sentiment Analysis',
                }),
                jsxs('p', {
                  className: 'text-gray-600 text-sm',
                  children: [
                    r.wordCount,
                    ' words \u2022 ',
                    r.characterCount,
                    ' characters',
                  ],
                }),
              ],
            }),
          ],
        }),
        jsx('div', {
          className: 'mb-4 p-3 bg-gray-50 rounded-lg',
          children: jsxs('p', {
            className: 'text-sm text-gray-700 italic',
            children: ['\u201C', r.text, '\u201D'],
          }),
        }),
        jsxs('div', {
          className: 'flex items-center justify-between mb-4',
          children: [
            jsxs('div', {
              className: 'flex items-center space-x-3',
              children: [
                t(r.sentiment),
                jsx('div', {
                  children: jsx('span', {
                    className: `px-3 py-1 rounded-full text-sm font-medium ${a(r.sentiment)}`,
                    children:
                      r.sentiment.charAt(0).toUpperCase() +
                      r.sentiment.slice(1),
                  }),
                }),
              ],
            }),
            jsxs('div', {
              className: 'text-right',
              children: [
                jsxs('div', {
                  className: `text-lg font-bold ${s(r.confidence)}`,
                  children: [(r.confidence * 100).toFixed(0), '%'],
                }),
                jsx('div', {
                  className: 'text-xs text-gray-500',
                  children: 'Confidence',
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className: 'mb-4',
          children: [
            jsxs('div', {
              className: 'flex justify-between text-xs text-gray-500 mb-1',
              children: [
                jsx('span', { children: 'Negative' }),
                jsx('span', { children: 'Neutral' }),
                jsx('span', { children: 'Positive' }),
              ],
            }),
            jsx('div', {
              className: 'w-full bg-gray-200 rounded-full h-2',
              children: jsx('div', {
                className:
                  'bg-gradient-to-r from-red-500 via-gray-400 to-green-500 h-2 rounded-full',
                style: {
                  background: `linear-gradient(to right, 
                #ef4444 0%, #ef4444 ${Math.max(0, -r.score) * 50}%, 
                #9ca3af ${Math.max(0, -r.score) * 50}%, #9ca3af ${Math.max(0, -r.score) * 50 + 20}%, 
                #22c55e ${Math.max(0, -r.score) * 50 + 20}%, #22c55e 100%)`,
                },
              }),
            }),
            jsxs('div', {
              className: 'text-center text-xs text-gray-500 mt-1',
              children: ['Score: ', r.score.toFixed(2)],
            }),
          ],
        }),
        jsxs('div', {
          className: 'grid grid-cols-3 gap-4 mb-4',
          children: [
            jsxs('div', {
              className: 'text-center',
              children: [
                jsxs('div', {
                  className: 'text-lg font-bold text-green-600',
                  children: [(r.breakdown.positive * 100).toFixed(0), '%'],
                }),
                jsx('div', {
                  className: 'text-xs text-gray-500',
                  children: 'Positive',
                }),
              ],
            }),
            jsxs('div', {
              className: 'text-center',
              children: [
                jsxs('div', {
                  className: 'text-lg font-bold text-gray-600',
                  children: [(r.breakdown.neutral * 100).toFixed(0), '%'],
                }),
                jsx('div', {
                  className: 'text-xs text-gray-500',
                  children: 'Neutral',
                }),
              ],
            }),
            jsxs('div', {
              className: 'text-center',
              children: [
                jsxs('div', {
                  className: 'text-lg font-bold text-red-600',
                  children: [(r.breakdown.negative * 100).toFixed(0), '%'],
                }),
                jsx('div', {
                  className: 'text-xs text-gray-500',
                  children: 'Negative',
                }),
              ],
            }),
          ],
        }),
        r.emotions.length > 0 &&
          jsxs('div', {
            className: 'mb-4',
            children: [
              jsx('h4', {
                className: 'font-medium text-sm mb-2',
                children: 'Detected Emotions',
              }),
              jsx('div', {
                className: 'flex flex-wrap gap-2',
                children: r.emotions.map((n, i) =>
                  jsxs(
                    'span',
                    {
                      className:
                        'px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs',
                      children: [
                        n.emotion,
                        ' (',
                        (n.intensity * 100).toFixed(0),
                        '%)',
                      ],
                    },
                    `${n.emotion}-${i}`,
                  ),
                ),
              }),
            ],
          }),
        r.suggestions.length > 0 &&
          jsxs('div', {
            className: 'border-t pt-4',
            children: [
              jsxs('div', {
                className: 'flex items-center space-x-2 mb-2',
                children: [
                  jsx(Lightbulb, { className: 'size-4 text-yellow-500' }),
                  jsx('h4', {
                    className: 'font-medium text-sm',
                    children: 'Suggestions',
                  }),
                ],
              }),
              jsx('ul', {
                className: 'space-y-1',
                children: r.suggestions.map((n, i) =>
                  jsxs(
                    'li',
                    {
                      className:
                        'text-sm text-gray-600 flex items-start space-x-2',
                      children: [
                        jsx('span', {
                          className: 'text-yellow-500 mt-1',
                          children: '\u2022',
                        }),
                        jsx('span', { children: n }),
                      ],
                    },
                    `suggestion-${crypto.randomUUID()}`,
                  ),
                ),
              }),
            ],
          }),
        jsxs('div', {
          className: 'text-xs text-gray-500 mt-4',
          children: [
            'Language: ',
            r.language.toUpperCase(),
            ' \u2022',
            ' ',
            new Date(r.analysisTime).toLocaleTimeString(),
          ],
        }),
      ],
    });
  },
  Nt = ({ error: r, input: e }) =>
    jsx('div', {
      className: 'bg-red-50 border border-red-200 rounded-lg p-6',
      children: jsxs('div', {
        className: 'flex items-center space-x-3',
        children: [
          jsx('div', {
            className:
              'bg-red-100 rounded-lg size-12 flex items-center justify-center',
            children: jsx(BarChart3, { className: 'size-6 text-red-600' }),
          }),
          jsxs('div', {
            children: [
              jsx('h3', {
                className: 'font-semibold text-red-800',
                children: 'Sentiment Analysis Failed',
              }),
              jsx('p', { className: 'text-red-600 text-sm', children: r }),
              e &&
                jsxs('p', {
                  className: 'text-red-500 text-xs mt-1',
                  children: [
                    'Text: \u201C',
                    e.text.substring(0, 50),
                    '...\u201D',
                  ],
                }),
            ],
          }),
        ],
      }),
    });
var la = [
  {
    id: '1',
    title: 'Reuni\xF3n de equipo',
    description: 'Revisi\xF3n semanal del proyecto',
    startDate: new Date(Date.now() + 1440 * 60 * 1e3).toISOString(),
    endDate: new Date(Date.now() + 1440 * 60 * 1e3 + 3600 * 1e3).toISOString(),
    allDay: false,
    location: 'Sala de conferencias A',
    attendees: ['john@example.com', 'jane@example.com'],
    color: 'blue',
    priority: 'high',
    status: 'confirmed',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Cumplea\xF1os de Mar\xEDa',
    description: 'Celebraci\xF3n del cumplea\xF1os',
    startDate: new Date(Date.now() + 2880 * 60 * 1e3).toISOString(),
    endDate: new Date(Date.now() + 2880 * 60 * 1e3).toISOString(),
    allDay: true,
    color: 'green',
    priority: 'medium',
    status: 'confirmed',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Standup diario',
    description: 'Reuni\xF3n diaria del equipo',
    startDate: new Date(Date.now() + 4320 * 60 * 1e3).toISOString(),
    endDate: new Date(Date.now() + 4320 * 60 * 1e3 + 1800 * 1e3).toISOString(),
    allDay: false,
    color: 'purple',
    priority: 'low',
    status: 'confirmed',
    recurring: { type: 'daily', interval: 1, endAfter: 5 },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
create()(
  devtools(
    (r, e) => ({
      currentView: {
        type: 'month',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 720 * 60 * 60 * 1e3).toISOString(),
        events: la,
      },
      selectedEvent: void 0,
      filters: {},
      isLoading: false,
      error: void 0,
      actions: [],
      setCurrentView: (t) =>
        r((a) => ({ currentView: { ...t, events: a.currentView.events } })),
      setSelectedEvent: (t) => r({ selectedEvent: t }),
      setFilters: (t) => r({ filters: t }),
      setLoading: (t) => r({ isLoading: t }),
      setError: (t) => r({ error: t }),
      addEvent: (t) =>
        r((a) => ({
          currentView: {
            ...a.currentView,
            events: [...a.currentView.events, t],
          },
        })),
      updateEvent: (t, a) =>
        r((s) => ({
          currentView: {
            ...s.currentView,
            events: s.currentView.events.map((n) =>
              n.id === t
                ? { ...n, ...a, updatedAt: new Date().toISOString() }
                : n,
            ),
          },
          selectedEvent:
            s.selectedEvent?.id === t
              ? {
                  ...s.selectedEvent,
                  ...a,
                  updatedAt: new Date().toISOString(),
                }
              : s.selectedEvent,
        })),
      deleteEvent: (t) =>
        r((a) => ({
          currentView: {
            ...a.currentView,
            events: a.currentView.events.filter((s) => s.id !== t),
          },
          selectedEvent: a.selectedEvent?.id === t ? void 0 : a.selectedEvent,
        })),
      replaceEvents: (t) =>
        r((a) => ({ currentView: { ...a.currentView, events: t } })),
      addAction: (t) => r((a) => ({ actions: [...a.actions, t] })),
      clearActions: () => r({ actions: [] }),
      getEventsForDate: (t) => {
        let a = e(),
          s = new Date(t);
        return a.currentView.events.filter((n) => {
          let i = new Date(n.startDate),
            o = new Date(n.endDate);
          return i <= s && o >= s;
        });
      },
      getEventsForRange: (t, a) => {
        let s = e(),
          n = new Date(t),
          i = new Date(a);
        return s.currentView.events.filter((o) => {
          let c = new Date(o.startDate),
            l = new Date(o.endDate);
          return c <= i && l >= n;
        });
      },
    }),
    { name: 'calendar-store' },
  ),
);
var je = tool({
  description:
    'Get calendar events for a specific date range with optional filters',
  inputSchema: p.object({
    startDate: p
      .string()
      .optional()
      .describe('Start date in ISO format (YYYY-MM-DD)'),
    endDate: p
      .string()
      .optional()
      .describe('End date in ISO format (YYYY-MM-DD)'),
    filters: p
      .object({
        search: p
          .string()
          .optional()
          .describe('Search term to filter events by title or description'),
        status: p
          .enum(['pending', 'confirmed', 'cancelled'])
          .optional()
          .describe('Filter by event status'),
        priority: p
          .enum(['low', 'medium', 'high'])
          .optional()
          .describe('Filter by event priority'),
        color: p
          .enum(['blue', 'green', 'red', 'yellow', 'purple', 'orange'])
          .optional()
          .describe('Filter by event color'),
      })
      .optional()
      .describe('Additional filters to apply'),
  }),
  execute: async (r) => {
    try {
      await new Promise((n) => setTimeout(n, 500));
      let t = [
        {
          id: '1',
          title: 'Reuni\xF3n de equipo',
          description: 'Revisi\xF3n semanal del proyecto',
          startDate: new Date(Date.now() + 1440 * 60 * 1e3).toISOString(),
          endDate: new Date(
            Date.now() + 1440 * 60 * 1e3 + 3600 * 1e3,
          ).toISOString(),
          allDay: !1,
          location: 'Sala de conferencias A',
          attendees: ['john@example.com', 'jane@example.com'],
          color: 'blue',
          priority: 'high',
          status: 'confirmed',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Cumplea\xF1os de Mar\xEDa',
          description: 'Celebraci\xF3n del cumplea\xF1os',
          startDate: new Date(Date.now() + 2880 * 60 * 1e3).toISOString(),
          endDate: new Date(Date.now() + 2880 * 60 * 1e3).toISOString(),
          allDay: !0,
          color: 'green',
          priority: 'medium',
          status: 'confirmed',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: '3',
          title: 'Standup diario',
          description: 'Reuni\xF3n diaria del equipo',
          startDate: new Date(Date.now() + 4320 * 60 * 1e3).toISOString(),
          endDate: new Date(
            Date.now() + 4320 * 60 * 1e3 + 1800 * 1e3,
          ).toISOString(),
          allDay: !1,
          color: 'purple',
          priority: 'low',
          status: 'confirmed',
          recurring: { type: 'daily', interval: 1, endAfter: 5 },
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      if (r.filters?.search) {
        let n = r.filters.search.toLowerCase();
        t = t.filter(
          (i) =>
            i.title.toLowerCase().includes(n) ||
            i.description?.toLowerCase().includes(n),
        );
      }
      let a = r.filters;
      if (
        (a?.status && (t = t.filter((n) => n.status === a.status)),
        a?.priority && (t = t.filter((n) => n.priority === a.priority)),
        a?.color && (t = t.filter((n) => n.color === a.color)),
        r.startDate || r.endDate)
      ) {
        let n = r.startDate ? new Date(r.startDate) : new Date(0),
          i = r.endDate
            ? new Date(r.endDate)
            : new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3);
        t = t.filter((o) => {
          let c = new Date(o.startDate),
            l = new Date(o.endDate);
          return c <= i && l >= n;
        });
      }
      let s = {
        type: 'month',
        startDate: r.startDate || new Date().toISOString(),
        endDate:
          r.endDate || new Date(Date.now() + 720 * 60 * 60 * 1e3).toISOString(),
        events: t,
      };
      return { events: t, total: t.length, view: s };
    } catch (e) {
      throw new Error(
        `Failed to get events: ${e instanceof Error ? e.message : 'Unknown error'}`,
      );
    }
  },
});
var We = tool({
  description:
    'Create a new calendar event with optional recurring configuration',
  inputSchema: p.object({
    title: p.string().describe('Title of the event'),
    description: p.string().optional().describe('Description of the event'),
    startDate: p.string().describe('Start date and time in ISO format'),
    endDate: p
      .string()
      .optional()
      .describe(
        'End date and time in ISO format. If not provided, will be set to startDate + 1 hour',
      ),
    allDay: p
      .boolean()
      .optional()
      .default(false)
      .describe('Whether the event is an all-day event'),
    location: p.string().optional().describe('Location of the event'),
    attendees: p
      .array(p.string().email())
      .optional()
      .describe('List of attendee email addresses'),
    color: p
      .enum(['blue', 'green', 'red', 'yellow', 'purple', 'orange'])
      .optional()
      .describe('Color theme for the event'),
    priority: p
      .enum(['low', 'medium', 'high'])
      .optional()
      .default('medium')
      .describe('Priority level of the event'),
    recurring: p
      .object({
        type: p
          .enum(['daily', 'weekly', 'monthly', 'yearly'])
          .describe('Type of recurrence'),
        interval: p.number().min(1).describe('Interval between occurrences'),
        endAfter: p
          .number()
          .optional()
          .describe('Number of occurrences before ending'),
        endDate: p
          .string()
          .optional()
          .describe('End date for recurring events'),
      })
      .optional()
      .describe('Recurring event configuration'),
  }),
  execute: async (r) => {
    try {
      await new Promise((n) => setTimeout(n, 800));
      let e = new Date(r.startDate),
        t = r.endDate
          ? new Date(r.endDate)
          : new Date(e.getTime() + 3600 * 1e3);
      if (e >= t) throw new Error('Start date must be before end date');
      let s = {
        id: `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        title: r.title,
        description: r.description,
        startDate: r.startDate,
        endDate: t.toISOString(),
        allDay: r.allDay || !1,
        location: r.location,
        attendees: r.attendees || [],
        color: r.color || 'blue',
        priority: r.priority || 'medium',
        status: 'confirmed',
        recurring: r.recurring,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return (
        console.log('Creating event:', s),
        {
          event: s,
          message: `Event "${r.title}" created successfully for ${new Date(r.startDate).toLocaleDateString()}`,
        }
      );
    } catch (e) {
      throw new Error(
        `Failed to create event: ${e instanceof Error ? e.message : 'Unknown error'}`,
      );
    }
  },
});
var Ge = tool({
  description: 'Update an existing calendar event with new information',
  inputSchema: p.object({
    eventId: p.string().describe('ID of the event to update'),
    updates: p
      .object({
        title: p.string().optional().describe('New title for the event'),
        description: p
          .string()
          .optional()
          .describe('New description for the event'),
        startDate: p
          .string()
          .optional()
          .describe('New start date and time in ISO format'),
        endDate: p
          .string()
          .optional()
          .describe('New end date and time in ISO format'),
        allDay: p
          .boolean()
          .optional()
          .describe('Whether the event is an all-day event'),
        location: p.string().optional().describe('New location for the event'),
        attendees: p
          .array(p.string().email())
          .optional()
          .describe('New list of attendee email addresses'),
        color: p
          .enum(['blue', 'green', 'red', 'yellow', 'purple', 'orange'])
          .optional()
          .describe('New color theme for the event'),
        priority: p
          .enum(['low', 'medium', 'high'])
          .optional()
          .describe('New priority level of the event'),
        status: p
          .enum(['pending', 'confirmed', 'cancelled'])
          .optional()
          .describe('New status of the event'),
        recurring: p
          .object({
            type: p
              .enum(['daily', 'weekly', 'monthly', 'yearly'])
              .describe('Type of recurrence'),
            interval: p
              .number()
              .min(1)
              .describe('Interval between occurrences'),
            endAfter: p
              .number()
              .optional()
              .describe('Number of occurrences before ending'),
            endDate: p
              .string()
              .optional()
              .describe('End date for recurring events'),
          })
          .optional()
          .describe('New recurring event configuration'),
      })
      .describe('Updates to apply to the event'),
  }),
  execute: async (r) => {
    try {
      await new Promise((a) => setTimeout(a, 600));
      let e = {
        id: r.eventId,
        title: 'Existing Event',
        description: 'This is an existing event',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 3600 * 1e3).toISOString(),
        allDay: !1,
        location: 'Default Location',
        attendees: [],
        color: 'blue',
        priority: 'medium',
        status: 'confirmed',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      if (r.updates.startDate || r.updates.endDate) {
        let a = r.updates.startDate
            ? new Date(r.updates.startDate)
            : new Date(e.startDate),
          s = r.updates.endDate
            ? new Date(r.updates.endDate)
            : new Date(e.endDate);
        if (a >= s) throw new Error('Start date must be before end date');
      }
      let t = { ...e, ...r.updates, updatedAt: new Date().toISOString() };
      return (
        console.log('Updating event:', t),
        { event: t, message: `Event "${t.title}" updated successfully` }
      );
    } catch (e) {
      throw new Error(
        `Failed to update event: ${e instanceof Error ? e.message : 'Unknown error'}`,
      );
    }
  },
});
var Ye = tool({
  description:
    'Delete a calendar event, optionally including all recurring instances',
  inputSchema: p.object({
    eventId: p.string().describe('ID of the event to delete'),
    deleteRecurring: p
      .boolean()
      .optional()
      .default(false)
      .describe('If true, delete all recurring instances of this event'),
  }),
  execute: async (r) => {
    try {
      await new Promise((t) => setTimeout(t, 400));
      let e = {
        id: r.eventId,
        title: 'Event to Delete',
        description: 'This event will be deleted',
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 3600 * 1e3).toISOString(),
        allDay: !1,
        location: 'Some Location',
        attendees: [],
        color: 'red',
        priority: 'medium',
        status: 'confirmed',
        recurring: { type: 'weekly', interval: 1, endAfter: 10 },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      return (
        console.log('Deleting event:', e),
        console.log('Delete recurring instances:', r.deleteRecurring),
        {
          deletedEvent: e,
          message: r.deleteRecurring
            ? `Event "${e.title}" and all recurring instances deleted successfully`
            : `Event "${e.title}" deleted successfully`,
        }
      );
    } catch (e) {
      throw new Error(
        `Failed to delete event: ${e instanceof Error ? e.message : 'Unknown error'}`,
      );
    }
  },
});
var He = ({ input: r, onAction: e }) =>
    jsxs('div', {
      className: 'animate-pulse bg-white rounded-lg shadow-md p-6 max-w-2xl',
      children: [
        jsxs('div', {
          className: 'flex items-center space-x-3 mb-6',
          children: [
            jsx('div', { className: 'bg-gray-200 rounded-lg size-10' }),
            jsxs('div', {
              className: 'flex-1',
              children: [
                jsx('div', { className: 'h-5 bg-gray-200 rounded w-1/3 mb-2' }),
                jsx('div', { className: 'h-3 bg-gray-200 rounded w-1/2' }),
              ],
            }),
          ],
        }),
        jsx('div', {
          className: 'space-y-4',
          children: Array.from({ length: 3 }, () =>
            jsxs(
              'div',
              {
                className: 'border border-gray-200 rounded-lg p-4',
                children: [
                  jsx('div', {
                    className: 'h-4 bg-gray-200 rounded w-3/4 mb-2',
                  }),
                  jsx('div', { className: 'h-3 bg-gray-200 rounded w-1/2' }),
                ],
              },
              `skeleton-${Math.random()}`,
            ),
          ),
        }),
      ],
    }),
  Je = ({ output: r, input: e, onAction: t }) => {
    let { events: a, totalEvents: s, nextEvent: n } = r;
    console.log('event length', a.length), console.log('totalEvents', s);
    let [i, o] = useState(null),
      c = () => {
        t?.({
          action: 'create_event',
          data: {
            userId: e?.userId,
            date: e?.date || new Date().toISOString().split('T')[0],
          },
        });
      },
      l = (w) => {
        t?.({
          action: 'edit_event',
          data: { eventId: w.id, eventTitle: w.title, currentData: w },
        });
      },
      v = (w) => {
        t?.({
          action: 'delete_event',
          data: { eventId: w.id, eventTitle: w.title },
        });
      },
      A = (w) => {
        t?.({
          action: 'confirm_event',
          data: { eventId: w.id, eventTitle: w.title },
        });
      },
      M = (w) => {
        t?.({
          action: 'cancel_event',
          data: { eventId: w.id, eventTitle: w.title },
        });
      },
      I = (w) => {
        o(w),
          t?.({
            action: 'view_event_details',
            data: { eventId: w.id, eventTitle: w.title },
          });
      },
      Me = (w) => {
        t?.({
          action: 'share_event',
          data: {
            eventId: w.id,
            eventTitle: w.title,
            eventUrl: `${window.location.origin}/event/${w.id}`,
          },
        });
      };
    return jsxs('div', {
      className: 'bg-white rounded-lg shadow-md p-6 max-w-2xl',
      children: [
        jsxs('div', {
          className: 'flex items-center justify-between mb-6',
          children: [
            jsxs('div', {
              className: 'flex items-center space-x-3',
              children: [
                jsx('div', {
                  className: 'bg-blue-100 rounded-lg p-2',
                  children: jsx(CalendarIcon, {
                    className: 'w-6 h-6 text-blue-600',
                  }),
                }),
                jsxs('div', {
                  children: [
                    jsx('h3', {
                      className: 'text-lg font-semibold text-gray-900',
                      children: 'Calendar Events',
                    }),
                    jsxs('p', {
                      className: 'text-sm text-gray-500',
                      children: [s, ' events found'],
                    }),
                  ],
                }),
              ],
            }),
            jsxs('button', {
              type: 'button',
              onClick: c,
              className:
                'flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors',
              children: [jsx(PlusIcon, { className: 'w-4 h-4' }), 'New Event'],
            }),
          ],
        }),
        n &&
          jsxs('div', {
            className: 'mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg',
            children: [
              jsx('h4', {
                className: 'font-medium text-blue-900 mb-2',
                children: 'Next Event',
              }),
              jsxs('div', {
                className: 'flex items-center justify-between',
                children: [
                  jsxs('div', {
                    children: [
                      jsx('p', {
                        className: 'font-medium text-blue-800',
                        children: n.title,
                      }),
                      jsxs('p', {
                        className: 'text-sm text-blue-600',
                        children: [
                          new Date(n.startDate).toLocaleDateString(),
                          ' at',
                          ' ',
                          n.startDate.split('T')[1],
                        ],
                      }),
                    ],
                  }),
                  jsx('button', {
                    type: 'button',
                    onClick: () => I(n),
                    className:
                      'text-blue-600 hover:text-blue-800 text-sm font-medium',
                    children: 'View Details',
                  }),
                ],
              }),
            ],
          }),
        jsx('div', {
          className: 'space-y-4',
          children: a.map((w) =>
            jsx(
              'div',
              {
                className:
                  'border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow',
                children: jsxs('div', {
                  className: 'flex items-start justify-between',
                  children: [
                    jsxs('div', {
                      className: 'flex-1',
                      children: [
                        jsxs('div', {
                          className: 'flex items-center gap-2 mb-2',
                          children: [
                            jsx('h4', {
                              className: 'font-medium text-gray-900',
                              children: w.title,
                            }),
                            jsx('span', {
                              className: ke(
                                'px-2 py-1 rounded-full text-xs font-medium',
                                {
                                  'bg-yellow-100 text-yellow-800':
                                    w.status === 'pending',
                                  'bg-green-100 text-green-800':
                                    w.status === 'confirmed',
                                  'bg-red-100 text-red-800':
                                    w.status === 'cancelled',
                                },
                              ),
                              children: w.status,
                            }),
                          ],
                        }),
                        jsx('p', {
                          className: 'text-sm text-gray-600 mb-2',
                          children: w.description,
                        }),
                        jsxs('div', {
                          className: 'text-xs text-gray-500',
                          children: [
                            jsxs('p', {
                              children: [
                                new Date(w.startDate).toLocaleDateString(),
                                ' -',
                                ' ',
                                new Date(w.endDate).toLocaleDateString(),
                              ],
                            }),
                            w.location &&
                              jsxs('p', {
                                children: ['\u{1F4CD} ', w.location],
                              }),
                          ],
                        }),
                      ],
                    }),
                    jsxs('div', {
                      className: 'flex items-center gap-1 ml-4',
                      children: [
                        jsx('button', {
                          type: 'button',
                          onClick: () => I(w),
                          className:
                            'p-1 text-gray-400 hover:text-gray-600 transition-colors',
                          title: 'View Details',
                          children: jsx(EyeIcon, { className: 'w-4 h-4' }),
                        }),
                        jsx('button', {
                          type: 'button',
                          onClick: () => l(w),
                          className:
                            'p-1 text-gray-400 hover:text-blue-600 transition-colors',
                          title: 'Edit Event',
                          children: jsx(EditIcon, { className: 'w-4 h-4' }),
                        }),
                        jsx('button', {
                          type: 'button',
                          onClick: () => Me(w),
                          className:
                            'p-1 text-gray-400 hover:text-green-600 transition-colors',
                          title: 'Share Event',
                          children: jsx('span', {
                            className: 'text-sm',
                            children: '\u{1F4E4}',
                          }),
                        }),
                        w.status === 'pending' &&
                          jsxs(Fragment, {
                            children: [
                              jsx('button', {
                                type: 'button',
                                onClick: () => A(w),
                                className:
                                  'p-1 text-gray-400 hover:text-green-600 transition-colors',
                                title: 'Confirm Event',
                                children: jsx(CheckIcon, {
                                  className: 'w-4 h-4',
                                }),
                              }),
                              jsx('button', {
                                type: 'button',
                                onClick: () => M(w),
                                className:
                                  'p-1 text-gray-400 hover:text-red-600 transition-colors',
                                title: 'Cancel Event',
                                children: jsx(XIcon, { className: 'w-4 h-4' }),
                              }),
                            ],
                          }),
                        jsx('button', {
                          type: 'button',
                          onClick: () => v(w),
                          className:
                            'p-1 text-gray-400 hover:text-red-600 transition-colors',
                          title: 'Delete Event',
                          children: jsx(TrashIcon, { className: 'w-4 h-4' }),
                        }),
                      ],
                    }),
                  ],
                }),
              },
              w.id,
            ),
          ),
        }),
        i &&
          jsx('div', {
            className:
              'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
            children: jsxs('div', {
              className: 'bg-white rounded-lg p-6 max-w-md w-full mx-4',
              children: [
                jsx('h3', {
                  className: 'text-lg font-semibold mb-4',
                  children: i.title,
                }),
                jsx('p', {
                  className: 'text-gray-600 mb-4',
                  children: i.description,
                }),
                jsxs('div', {
                  className: 'space-y-2 text-sm text-gray-500 mb-4',
                  children: [
                    jsxs('p', {
                      children: [
                        'Start: ',
                        new Date(i.startDate).toLocaleString(),
                      ],
                    }),
                    jsxs('p', {
                      children: ['End: ', new Date(i.endDate).toLocaleString()],
                    }),
                    i.location &&
                      jsxs('p', { children: ['Location: ', i.location] }),
                    i.attendees &&
                      jsxs('p', {
                        children: ['Attendees: ', i.attendees.join(', ')],
                      }),
                  ],
                }),
                jsxs('div', {
                  className: 'flex gap-2',
                  children: [
                    jsx('button', {
                      type: 'button',
                      onClick: () => o(null),
                      className:
                        'flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors',
                      children: 'Close',
                    }),
                    jsx('button', {
                      type: 'button',
                      onClick: () => {
                        l(i), o(null);
                      },
                      className:
                        'flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors',
                      children: 'Edit',
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  Ke = ({ error: r, input: e, onAction: t }) =>
    jsxs('div', {
      className: 'bg-red-50 border border-red-200 rounded-lg p-6 max-w-2xl',
      children: [
        jsxs('div', {
          className: 'flex items-center space-x-3 mb-4',
          children: [
            jsx('div', {
              className: 'bg-red-100 rounded-lg p-2',
              children: jsx(CalendarIcon, {
                className: 'w-6 h-6 text-red-600',
              }),
            }),
            jsxs('div', {
              children: [
                jsx('h3', {
                  className: 'font-semibold text-red-800',
                  children: 'Error Loading Calendar',
                }),
                jsx('p', { className: 'text-red-600 text-sm', children: r }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className: 'flex gap-2',
          children: [
            jsx('button', {
              type: 'button',
              onClick: () => {
                t?.({
                  action: 'retry_load_events',
                  data: { userId: e?.userId, date: e?.date },
                });
              },
              className:
                'flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors',
              children: 'Retry',
            }),
            jsx('button', {
              type: 'button',
              onClick: () => {
                t?.({
                  action: 'refresh_calendar',
                  data: { userId: e?.userId },
                });
              },
              className:
                'flex-1 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors',
              children: 'Refresh',
            }),
          ],
        }),
      ],
    });
var St = {
    toolId: 'getEvents',
    tool: je,
    components: {
      LoadingComponent: He,
      SuccessComponent: Je,
      ErrorComponent: Ke,
    },
  },
  ka = { getEvents: je, createEvent: We, updateEvent: Ge, deleteEvent: Ye };
var $e = tool({
  description: 'A test tool that generates errors for testing error handling',
  inputSchema: p.object({
    errorType: p
      .enum(['throw', 'return-error', 'success'])
      .describe('Type of error to generate'),
    message: p.string().optional().describe('Custom error message'),
  }),
  execute: async ({ errorType: r, message: e }) => {
    switch ((await new Promise((t) => setTimeout(t, 500)), r)) {
      case 'throw':
        throw new Error(e || 'This is a thrown error');
      case 'return-error':
        return {
          error: e || 'This is a returned error',
          timestamp: new Date().toISOString(),
        };
      case 'success':
        return {
          success: true,
          message: e || 'Operation completed successfully',
          timestamp: new Date().toISOString(),
        };
      default:
        throw new Error('Unknown error type');
    }
  },
});
var Pe = ({ input: r }) =>
    jsx('div', {
      className:
        'animate-pulse bg-white rounded-lg shadow-md p-4 border-l-4 border-yellow-400',
      children: jsxs('div', {
        className: 'flex items-center space-x-3',
        children: [
          jsx(Loader2, { className: 'size-5 text-yellow-500 animate-spin' }),
          jsxs('div', {
            children: [
              jsx('h3', {
                className: 'font-medium text-gray-900',
                children: 'Testing Error Handling',
              }),
              jsxs('p', {
                className: 'text-sm text-gray-500',
                children: [
                  r?.errorType === 'throw' && 'Preparing to throw an error...',
                  r?.errorType === 'return-error' &&
                    'Preparing to return an error...',
                  r?.errorType === 'success' && 'Preparing for success...',
                  !r?.errorType && 'Loading...',
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  ze = ({ output: r, input: e }) =>
    jsx('div', {
      className:
        'bg-white rounded-lg shadow-md p-4 border-l-4 border-green-400',
      children: jsxs('div', {
        className: 'flex items-center space-x-3',
        children: [
          jsx(CheckCircle, { className: 'size-5 text-green-500' }),
          jsxs('div', {
            children: [
              jsx('h3', {
                className: 'font-medium text-gray-900',
                children: 'Test Completed Successfully',
              }),
              jsx('p', {
                className: 'text-sm text-gray-600',
                children: r.message,
              }),
              jsxs('p', {
                className: 'text-xs text-gray-400 mt-1',
                children: [
                  'Test type: ',
                  e?.errorType || 'unknown',
                  ' \u2022',
                  ' ',
                  new Date(r.timestamp).toLocaleTimeString(),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Le = ({ error: r, input: e }) =>
    jsx('div', {
      className: 'bg-white rounded-lg shadow-md p-4 border-l-4 border-red-400',
      children: jsxs('div', {
        className: 'flex items-center space-x-3',
        children: [
          jsx(AlertTriangle, { className: 'size-5 text-red-500' }),
          jsxs('div', {
            children: [
              jsx('h3', {
                className: 'font-medium text-gray-900',
                children: 'Test Error Generated',
              }),
              jsx('p', { className: 'text-sm text-red-600', children: r }),
              jsxs('p', {
                className: 'text-xs text-gray-400 mt-1',
                children: [
                  'Test type: ',
                  e?.errorType || 'unknown',
                  ' \u2022',
                  ' ',
                  new Date().toLocaleTimeString(),
                ],
              }),
            ],
          }),
        ],
      }),
    });
var Ct = {
  toolId: 'errorTool',
  tool: $e,
  components: {
    LoadingComponent: Pe,
    SuccessComponent: ze,
    ErrorComponent: Le,
  },
};
var Ta = {
    toolId: 'getProductInfo',
    tool: ct,
    components: {
      LoadingComponent: lt,
      SuccessComponent: ut,
      ErrorComponent: mt,
    },
  },
  Ia = {
    toolId: 'searchImages',
    tool: ht,
    components: {
      LoadingComponent: vt,
      SuccessComponent: yt,
      ErrorComponent: xt,
    },
  },
  Aa = {
    toolId: 'analyzeSentimentTool',
    tool: bt,
    components: {
      LoadingComponent: _t,
      SuccessComponent: wt,
      ErrorComponent: Nt,
    },
  },
  _n = [Ta, Ia, Aa, St, Ct];
export {
  Je as CalendarComponent,
  Ke as CalendarError,
  He as CalendarLoading,
  Le as ErrorTestError,
  Pe as ErrorTestLoading,
  ze as ErrorTestSuccess,
  yt as ImageGallery,
  xt as ImageGalleryError,
  vt as ImageGalleryLoading,
  ut as ProductCard,
  mt as ProductCardError,
  lt as ProductCardLoading,
  wt as SentimentAnalyzer,
  Nt as SentimentAnalyzerError,
  _t as SentimentAnalyzerLoading,
  bt as analyzeSentimentTool,
  St as calendarEventsExample,
  ka as calendarTools,
  We as createEvent,
  Ye as deleteEvent,
  Ct as errorTestExample,
  $e as errorTool,
  _n as examples,
  je as getEvents,
  ct as getProductInfo,
  Ia as imageGalleryExample,
  Ta as productCardExample,
  ht as searchImages,
  Aa as sentimentAnalyzerExample,
  Ge as updateEvent,
}; //# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
