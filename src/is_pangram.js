const isPangram = function(text) {
  const require = 'abcdefghijklmnopqrstuvwxyz'
  const str = text.toLowerCase();
  let count = require.length

  for(let i = 0; i < str.length; i++) {
    if (require.includes(str[i])) {
      count -= 1;
    }
    if (count === 0) { return true; }
  }
   return false;
}


module.exports = isPangram;
