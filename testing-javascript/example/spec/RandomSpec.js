describe("A fair six-side die", function() {
  describe("a valid roll", function() {
    it("should have a maximum value of six", function() {
      expect(new Random().generate()).toBeLessThan(7);
    });
    it("should have a minimum value of one", function() {
      expect(new Random().generate()).toBeGreaterThan(0);
    });
  });
});

