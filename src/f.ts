export default function f(n: any) {
  if (typeof n === "number") {
    if (n <= 1) return 1;
    return f(n - 2) + f(n - 1);
  } else if (typeof n === "string") {
    if (Number(n) <= 1) return 1;
    return f(Number(n) - 2) + f(Number(n) - 1);
  }
}