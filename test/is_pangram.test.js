const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(true);
  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwyz';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(false);
  });

  test('empty sentence', () => {
    // Arrange
    const text = ' '
    // Act
    const result = isPangram(text)
    // Assert
    expect(result).toBe(false)
  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange
    const text = 'the_quick_brown_fox_jumps_over_the_lazy_dog';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(true);
  });

  test('pangram with numbers', () => {
    // Arrange
    const text = 'the 8th quick brown fox jumps over the 1st lazy dog 10 times';
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(true);
  });

  // Write your own test case
  test('pangram with capitalization', () => {
    // Arrange
    const text = 'AbCdeFghiJklmnopqrstuvWXYZ'
    // Act
    const result = isPangram(text);
    // Assert
    expect(result).toBe(true);
  });
});
