var Random = function() {};

Random.prototype.generate = function() {
    var sides = 6;
    return Math.ceil(Math.random()*sides);
};

 //valid game roll (2 dice) = round
 //player 1 wins
 //player 2 wins
 //best score from 10 rounds wins
