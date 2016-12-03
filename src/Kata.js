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
      var funcArgs = [];
      switch (arguments.length) {
          case 0:
                return func.apply(this,args);
    
          case 1:
                funcArgs.push(args[0]);
                funcArgs.push(arguments[0]);
                return func.apply(this,funcArgs);

          default:
                return func.apply(this,arguments);
      }
  }
}