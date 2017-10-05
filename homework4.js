//Create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.
const starsNum = function(stars) {
	if (stars === 0) {
		return"";
	}
	    return "*" + starsNum(stars - 1);
};

const spacesNum = function(spaces) {
	if (spaces === 0) {
		return "";
	}
		return " " + spacesNum(spaces - 1);
};

const triangleStars = function(input) { 
	if (typeof(input) !== "number" || input < 0) {
		console.log("Try again, loser ;)");
		return;
	}
	if (input === 0) {
		return "";
	}
	console.log(spacesNum((num - input)) + (starsNum((2 * input) - 1)));
	return triangleStars(input - 1);
};
const num = 6;
const result = triangleStars(num);


/*Create a function called pow which takes two arguments, base and n.  
It should than return the result of multiplying the base times itself n time.*/

const pow = function (base, n) {
	if (base <= 1 || n <= 1 || typeof(base) !== "number" || typeof(n) !== "number") {
		return "Must be two positive integers greater than 1";
	}
	if (n === 2) {
		return base * base;
	}
	return base * pow(base, n - 1);
};
const answer = pow(2, 10); 
console.log(answer);


///Create a function called checkerboard which, given a size argument, will draw an n by n checkerboard on the screen.


const astxikner = function(qanak) {
	if (qanak === 0) {
		return "";
	}
	return  "* " + astxikner(qanak - 1);
};

const bacikner = function (bacqan) {
  if(bacqan === 0){
    return "";
  }
  return " *" + bacikner(bacqan - 1);
}

const help = function(inp, ad) {
  if(ad === 0) {
    return "";
  }
    console.log(astxikner(inp));
    console.log(bacikner(inp));
    return help(inp, ad - 1);
}

const checkerboard = function(inp) {
  if(inp % 2 === 0){
    return help(inp, inp/2)
  }
  if(inp % 2 !== 0){
    help(inp, (inp - 1)/2);
    console.log(astxikner(inp));
    return "";
  }
};
console.log(checkerboard(9));



/*Write a function that reverses a string with recursion.*/


const reverse = function(string) {
	const len = string.length;

	const myReverse = function(string, num) {		
		if (num <= 0) {
			return "";
		}
		return string[num - 1] + myReverse(string, num - 1);
	};

	return myReverse (string, len);
};

const myString = "American University of Armenia";
console.log("Reverse of AUA is: " + reverse(myString));
