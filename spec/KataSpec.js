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
});