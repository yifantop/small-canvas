let obj = {
  'cursor-arrow': true,
  'cursor-aim-point': false,
  'cursor-scale': false,
  'cursor-text': false,
};
function iterateToFalse(obj, num) {
  let len = Object.getOwnPropertyNames(obj).length;
  for (let i = 0; i < len; i++) {
    obj[obj[i]] = i === num;
  }
}
iterateToFalse(obj, 2);
console.log(obj);