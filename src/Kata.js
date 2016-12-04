function defaultArguments(func) {
  var defaultArgs = [];
  
  if (arguments.length > 1) {
    if (arguments[1].hasOwnProperty('a')) {
        defaultArgs.push (arguments[1].a);
    }  
    if (arguments[1].hasOwnProperty('b')) {
        defaultArgs.push (arguments[1].b);
    }
  }   

  return function() {
      var funcArgs = [];
      switch (arguments.length) {
          case 0:
                return func.apply(this,defaultArgs);
    
          case 1:
                funcArgs.push(arguments[0]);
                (defaultArgs.length===1) 
                    ? funcArgs.push(defaultArgs[0])
                    : funcArgs.push(defaultArgs[1]);
                return func.apply(this,funcArgs);

          default:
                return func.apply(this,arguments);
      }
  }
}