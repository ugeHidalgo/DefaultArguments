function defaultArguments(func) {
  var args = [];
  
  if (arguments.length > 1) {
    if (arguments[1].hasOwnProperty('a')) {
        args.push (arguments[1].a);
    }  
    if (arguments[1].hasOwnProperty('b')) {
        args.push (arguments[1].b);
    }
  }   

  return function() {
      var funcArgs = args.concat(Array.prototype.slice.call(arguments,0));
      return func.apply(this,funcArgs);
  }
}