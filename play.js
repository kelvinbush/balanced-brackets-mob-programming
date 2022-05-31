/*Given a string of brackets check if the brackets are balanced*/
const balancedBrackets = (str) => {
  str = str.replace(/[^\[\]{}()]/g, '');
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (brackets[str[i]]) {
      stack.push(str[i]);
    } else if (brackets[stack.pop()] !== str[i]) {
      return false;
    }
  }
  return stack.length === 0;
};

module.exports = balancedBrackets
