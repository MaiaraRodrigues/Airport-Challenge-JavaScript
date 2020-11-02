describe('Airport', function(){

  var airport;

  beforeEach(function(){
    airport = new Airport(5);
  });

  describe('new airport', function(){
    it('has no planes when created', () => {
      expect(airport.spaces).toEqual([]);
    });

    it('has capacity of 5', () => {
      expect(airport.capacity).toEqual(5);
    });

  });

});