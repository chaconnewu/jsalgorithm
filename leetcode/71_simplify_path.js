/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var splitedPath = path.split('/');
  var stack = [];

  for (var i = 0; i < splitedPath.length; i += 1) {
    var curr = splitedPath[i];
    switch(curr) {
      case '':
        continue;
      case '.':
        continue;
      case '..':
        if (stack.length > 0) {
          stack.pop();
        }
        break;
      default:
        stack.push(curr);
    }
  }

  return '/'+stack.join('/');
};


console.log(simplifyPath("/a/./b/../../c/"));
