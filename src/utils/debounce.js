export default function(fn,time) {
  let timer = null;
  return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args)
      },time)
  }
}