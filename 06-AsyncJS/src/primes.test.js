import assert from "node:assert";
import { describe, it } from "node:test";
import { isPrime, countPrimes } from "./primes.js";

describe("The isPrime function", () => {
    it("returns false for numbers below 2", () => {
        // AAA - Arrange, Act, Assert
        const candidate = 1;
        const result = isPrime(candidate);
        assert.equal(result, false);
    });

    it("returns true for 2", () => {
        // AAA - Arrange, Act, Assert
        const candidate = 2;
        const result = isPrime(candidate);
        assert.equal(result, true);
    })

    it("returns true for well known primes", () => {
        [3,5,7,11,13].forEach(num => {
            assert.equal(isPrime(num), true);
        })
    });

    it("returns false for even numbers", () => {
        let num = Math.floor(Math.random() * 10000) + 3;
        if (num % 2 === 1) num += 1;
        assert.equal(isPrime(num), false);
    })
})


describe('The countPrimes function', () => {
  it('should return 0 for max = 0', () => {
    assert.strictEqual(countPrimes(0), 0);
  });

  it('should return 0 for max = 1', () => {
    assert.strictEqual(countPrimes(1), 0);
  });

  it('should return 1 for max = 2', () => {
    assert.strictEqual(countPrimes(2), 1); // Nur 2 ist Primzahl
  });

  it('should return 4 for max = 10', () => {
    assert.strictEqual(countPrimes(10), 4); // 2, 3, 5, 7
  });

  it('should return 8 for max = 20', () => {
    assert.strictEqual(countPrimes(20), 8); // 2, 3, 5, 7, 11, 13, 17, 19
  });

  it('should return 168 for max 1000', () => {
    assert.strictEqual(countPrimes(1000), 168);
  });
});
