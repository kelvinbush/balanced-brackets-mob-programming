function balancedBrackets(string) {
 // ignore non brackets
  string = string.replace(/[^\[\]\{\}\(\)]/g, '');
  // check if string is empty
  if (string.length === 0) {
    return true;
  }
  // check if string is balanced
  if (string.length % 2 !== 0) {
    return false;
  }
  // check if string is balanced
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      stack.push(string[i]);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let last = stack.pop();
      if (last === '(' && string[i] !== ')') {
        return false;
      }
      if (last === '[' && string[i] !== ']') {
        return false;
      }
      if (last === '{' && string[i] !== '}') {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
