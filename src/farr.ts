import f from './f';

export default function farr(len: any) {
  var o = [];
  if (typeof len === "number") {
    for (let i = 0; i < len; i++) {
      o.push(f(i));
    }
  } else if (typeof len === "string") {
    for (let i = 0; i < Number(len); i++) {
      o.push(f(i));
    }
  }

  return o;
}