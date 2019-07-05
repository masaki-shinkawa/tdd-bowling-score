export const checkFizz = num => (num % 3 === 0 ? "Fizz" : null);
export const checkBuzz = num => (num % 5 === 0 ? "Buzz" : null);
export const checkFizzBuzz = num => (checkFizz(num) && checkBuzz(num) ? "FizzBuzz" : null);

export const run = () => {
	const nums = [];
	for (let num = 1; num < 101; num++) {
		nums.push(checkFizzBuzz(num) || checkFizz(num) || checkBuzz(num) || num);
	}
	return nums.join(", ");
};
