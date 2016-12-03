describe('Kata', function() {
    var add;

    beforeEach(function() {  
      add = function(a,b) { return a+b; } 
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

    it('defaultArguments should pass kata examples 3', function() {
      var newAddFunction = defaultArguments(add,{b:3,a:2});      
      expect(newAddFunction(10)).toEqual(13);
    });

});