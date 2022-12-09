export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';

  let str = '';
  set.forEach((item) => {
    if (item && item.startsWith(startString)) {
      str += `${item.slice(startString.length)}-`;
    }
  });

  return str.slice(0, -1);
}
