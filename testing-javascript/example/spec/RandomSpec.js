describe("Rolling a single die", function() {
  describe("a fair six-sided die", function() {
    it("should not have a value greater than six", function() {
      expect(getRandomNumber() <= 6).toEqual(true);
    });
  });
});

describe("Rolling a pair of dice", function() {
  describe("a winning roll", function() {
    it("should have a total value of 7", function() {
      expect(isWinner()).toEqual(true);
    });
  });
});