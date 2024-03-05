describe('Test for DEMO component', () => {
  test('This test should not fail', () => {
    // Arrange
    const message1 = 'Hello World';

    // Act
    const message2 = message1.trim();

    // Assert
    expect(message1).toBe(message2);
  });
});
