const isPalindrome = function (text) {
  const regex = /[^(),:;.?! _-]/g;
  const str = text.toLowerCase().match(regex);
  if (str == null) {return true;}
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - 1 - [i]]) {
      console.log(str[i], str[str.length - 1 - i])
      return false;
    }
  }
  return true;
};

module.exports = isPalindrome;

