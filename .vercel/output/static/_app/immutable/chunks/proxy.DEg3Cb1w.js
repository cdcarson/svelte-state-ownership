import {
  i as b,
  S as a,
  o as P,
  d as R,
  e as x,
  s as h,
  f as I,
  g as c,
  U as u,
  h as m,
  m as g,
  j as y,
  k as j,
  u as D,
  l as O
} from './runtime.B7m_t_lM.js';
function _(e, t = !0, s = null) {
  if (typeof e == 'object' && e != null && !b(e)) {
    if (a in e) {
      const n = e[a];
      if (n.t === e || n.p === e) return n.p;
    }
    const i = O(e);
    if (i === P || i === R) {
      const n = new Proxy(e, S);
      return (
        x(e, a, {
          value: { s: new Map(), v: h(0), a: I(e), i: t, p: n, t: e },
          writable: !0,
          enumerable: !1
        }),
        n
      );
    }
  }
  return e;
}
function w(e, t = 1) {
  c(e, e.v + t);
}
const S = {
  defineProperty(e, t, s) {
    if (s.value) {
      const i = e[a],
        n = i.s.get(t);
      n !== void 0 && c(n, _(s.value, i.i, i));
    }
    return Reflect.defineProperty(e, t, s);
  },
  deleteProperty(e, t) {
    const s = e[a],
      i = s.s.get(t),
      n = s.a,
      f = delete e[t];
    if (n && f) {
      const o = s.s.get('length'),
        l = e.length - 1;
      o !== void 0 && o.v !== l && c(o, l);
    }
    return i !== void 0 && c(i, u), f && w(s.v), f;
  },
  get(e, t, s) {
    var f;
    if (t === a) return Reflect.get(e, a);
    const i = e[a];
    let n = i.s.get(t);
    if (
      (n === void 0 &&
        (!(t in e) || ((f = m(e, t)) != null && f.writable)) &&
        ((n = (i.i ? h : g)(_(e[t], i.i, i))), i.s.set(t, n)),
      n !== void 0)
    ) {
      const o = y(n);
      return o === u ? void 0 : o;
    }
    return Reflect.get(e, t, s);
  },
  getOwnPropertyDescriptor(e, t) {
    const s = Reflect.getOwnPropertyDescriptor(e, t);
    if (s && 'value' in s) {
      const n = e[a].s.get(t);
      n && (s.value = y(n));
    }
    return s;
  },
  has(e, t) {
    var f;
    if (t === a) return !0;
    const s = e[a],
      i = Reflect.has(e, t);
    let n = s.s.get(t);
    return (n !== void 0 ||
      (j !== null && (!i || ((f = m(e, t)) != null && f.writable)))) &&
      (n === void 0 &&
        ((n = (s.i ? h : g)(i ? _(e[t], s.i, s) : u)), s.s.set(t, n)),
      y(n) === u)
      ? !1
      : i;
  },
  set(e, t, s, i) {
    const n = e[a];
    let f = n.s.get(t);
    f === void 0 && (D(() => i[t]), (f = n.s.get(t))),
      f !== void 0 && c(f, _(s, n.i, n));
    const o = n.a,
      l = !(t in e);
    if (o && t === 'length')
      for (let r = s; r < e.length; r += 1) {
        const d = n.s.get(r + '');
        d !== void 0 && c(d, u);
      }
    if (((e[t] = s), l)) {
      if (o) {
        const r = n.s.get('length'),
          d = e.length;
        r !== void 0 && r.v !== d && c(r, d);
      }
      w(n.v);
    }
    return !0;
  },
  ownKeys(e) {
    const t = e[a];
    return y(t.v), Reflect.ownKeys(e);
  }
};
export { _ as p };