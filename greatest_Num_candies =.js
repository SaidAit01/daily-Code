/**

* @param {number[]} candies

* @param {number} extraCandies

* @return {boolean[]}

*/

  

var kidsWithCandies = function(candies, extraCandies) {

var result = [];

const maxCandies = Math.max(...candies);

//Those 3 dots are called the spread operator. The Math.max()function doesn’t work directly on arrays.

  

for ( var i =0; i<candies.length; i++ ){

var total_Candies = candies[i]+extraCandies;

if (total_Candies>=maxCandies){

result.push(true);

}

else {

result.push(false);

}

}

return result;

};