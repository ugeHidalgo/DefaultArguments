describe('Kata', function() {
    var add;

    beforeEach(function() {  
      add = function(a,b) { return a+b; } 
      add2 = function(x,y) { return x+y; }
      addMore = function ( a,b,c,d,e ) { return a+b+c+d+e; }
      f1 = function (a,b,c) { return a - b*c; }
      f2 = function (b,a,c) { return a - b*c; }
      timesFive = function () { var five = 5; return function (a) { return five * x; }; }();
    });

    it('should be able to test', function() {
      expect(true).toBeTruthy();
    });

    it('add function should works', function() {
      expect(add(2,3)).toEqual(5);
    });

    it('defaultArguments should not default arguments when 0 arguments', function() {
      var newAddFunction = defaultArguments(add);      
      expect(newAddFunction(3,7)).toEqual(10);
    });

    it('defaultArguments should default argument b', function() {
      var newAddFunction = defaultArguments(add, {b:13});      
      expect(newAddFunction(3)).toEqual(16);
    });

    it('defaultArguments should default two arguments', function() {
      var newAddFunction = defaultArguments(add,{a:10, b:20});      
      expect(newAddFunction()).toEqual(30);
    });

    it('defaultArguments should pass kata examples 1', function() {
      var newAddFunction = defaultArguments(add,{b:9});      
      expect(newAddFunction(10)).toEqual(19);
      expect(newAddFunction(10,5)).toEqual(15);
    });

    it('defaultArguments should pass kata examples 2', function() {
      var newAddFunction = defaultArguments(add,{b:9});      
      var newAddFunction = defaultArguments(newAddFunction,{b:3});      
      expect(newAddFunction(10)).toEqual(13);
    });

    it('defaultArguments should pass kata examples for function add2', function() {
      var add2_ = defaultArguments(add2,{b:9});      
      expect(add2_(10)).toEqual(19);
    });
});