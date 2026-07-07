/**
 * JS Exercises - Devoir Maison (DM)
 * Neatly organized JavaScript Functions for:
 * 1. String Reversal
 * 2. Find Maximum in Array
 * 3. Factorial of a Number
 * 4. Prime Number Verification
 * 5. Fibonacci Sequence Generation
 */

// ==========================================
// 1. String Reversal
// ==========================================
function reverse(str) {
    if (typeof str !== 'string') return '';
    let ch = "";
    for (let i = str.length - 1; i >= 0; i--) {
        ch = ch + str[i];
    }
    return ch;
}

// ==========================================
// 2. Find Maximum in Array
// ==========================================
function Maxarry(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// ==========================================
// 3. Factorial of a Number
// ==========================================
function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) return null;
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// ==========================================
// 4. Prime Number Check
// ==========================================
function isPrime(n) {
    if (n <= 1 || !Number.isInteger(n)) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// ==========================================
// 5. Fibonacci Sequence
// ==========================================
function fibonacci(terms) {
    if (terms <= 0 || !Number.isInteger(terms)) return [];
    if (terms === 1) return [0];
    let seq = [0, 1];
    while (seq.length < terms) {
        seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    }
    return seq.slice(0, terms);
}
