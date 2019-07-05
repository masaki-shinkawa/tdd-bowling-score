import * as FizzBuzz from "@/fizzbuzz";

const fullFizzBuzz =
  "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz, 31, 32, Fizz, 34, Buzz, Fizz, 37, 38, Fizz, Buzz, 41, Fizz, 43, 44, FizzBuzz, 46, 47, Fizz, 49, Buzz, Fizz, 52, 53, Fizz, Buzz, 56, Fizz, 58, 59, FizzBuzz, 61, 62, Fizz, 64, Buzz, Fizz, 67, 68, Fizz, Buzz, 71, Fizz, 73, 74, FizzBuzz, 76, 77, Fizz, 79, Buzz, Fizz, 82, 83, Fizz, Buzz, 86, Fizz, 88, 89, FizzBuzz, 91, 92, Fizz, 94, Buzz, Fizz, 97, 98, Fizz, Buzz";

describe("fizzbuzz.js", () => {
  // Fizz, Buzz, FizzBuzz に一致しない最小の値
  it("1を入れるとnullが返る", () => expect(FizzBuzz.checkFizz(1)).toBe(null));
  it("1を入れるとnullが返る", () => expect(FizzBuzz.checkBuzz(1)).toBe(null));
  it("1を入れるとnullが返る", () => expect(FizzBuzz.checkFizzBuzz(1)).toBe(null));

  // Fizz, Buzz, FizzBuzz に一致しない最大の値
  it("98を入れるとnullが返る", () => expect(FizzBuzz.checkFizz(98)).toBe(null));
  it("98を入れるとnullが返る", () => expect(FizzBuzz.checkBuzz(98)).toBe(null));
  it("98を入れるとnullが返る", () => expect(FizzBuzz.checkFizzBuzz(98)).toBe(null));

  // Fizz, Buzz, FizzBuzz に一致する最小の値
  it("3を入れるとFizzが返る", () => expect(FizzBuzz.checkFizz(3)).toBe("Fizz"));
  it("5を入れるとBuzzが返る", () => expect(FizzBuzz.checkBuzz(5)).toBe("Buzz"));
  it("15を入れるとFizzBuzzが返る", () => expect(FizzBuzz.checkFizzBuzz(15)).toBe("FizzBuzz"));

  // Fizz, Buzz, FizzBuzz に一致する最大の値
  it("99を入れるとFizzが返る", () => expect(FizzBuzz.checkFizz(99)).toBe("Fizz"));
  it("100を入れるとBuzzが返る", () => expect(FizzBuzz.checkBuzz(100)).toBe("Buzz"));
  it("90を入れるとFizz Buzzが返る", () => expect(FizzBuzz.checkFizzBuzz(90)).toBe("FizzBuzz"));

  // Fizz, Buzz, FizzBuzz の処理後の結果
  it("runを実行すると1〜100のFizzBuzz結果が返る", () => expect(FizzBuzz.run()).toBe(fullFizzBuzz));
});
