const isPalindrome = require('../src/is_palindrome');

describe('isPalindrome()', () => {
  test('isPalindrome() is defined', () => {
    expect(isPalindrome).toBeDefined();
  });

  test('works with a palindrome with only lower case', () => {
    // Arrange
    const text = 'racecar';

    // Act
    const result = isPalindrome(text);
    // Assert
    expect(result).toBe(true);
  });

  test('fails with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act
    const result = isPalindrome(text);
    // Assert
    expect(result).toBe(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = ' '
    const text2 = ''
    // Act
    const result = isPalindrome(text)
    const result2 = isPalindrome(text2)
    // Assert
    expect(result).toBe(true)
    expect(result2).toBe(true)
  });

  test('palindrome with non-alphanumeric characters (spaces, punctuation, etc.) works', () => {
    // Arrange
    const text = '@, 890 !   098..(-)@';
    // Act
    const result = isPalindrome(text);
    // Assert
    expect(result).toBe(true);
  });


  // Write your own test case
  test('palindrome with capitalization works', () => {
    // Arrange
    const text = 'AAbbCCccBBaa'
    // Act
    const result = isPalindrome(text);
    // Assert
    expect(result).toBe(true);
  });
});
