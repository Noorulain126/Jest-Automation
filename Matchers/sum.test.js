const sum = require('./sum');

describe('Sum Function', () => {
  it('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });

  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

it('two plus two', () => {
	const value = 2 + 2;
	expect(value).toBeGreaterThan(3);
	expect(value).toBeGreaterThanOrEqual(3.5);
	expect(value).toBeLessThan(5);
	expect(value).toBeLessThanOrEqual(4.5);

	// toBe and toEqual are equivalent for numbers
	expect(value).toBe(4);
	expect(value).toEqual(4);
});

const shoppingList = [
	'diapers',
	'kleenex',
	'trash bags',
	'paper towels',
	'milk',
];

it('the shopping list has milk on it', () => {
	expect(shoppingList).toContain('milk');
	expect(new Set(shoppingList)).toContain('milk');
});

function compileAndroidCode() {
	throw new Error('you are using the wrong JDK');
}

it('compiling android goes as expected', () => {
	expect(() => compileAndroidCode()).toThrow();
	expect(() => compileAndroidCode()).toThrow(
		Error
	);

	// You can also use the exact error message or a regexp
	expect(() => compileAndroidCode()).toThrow(
		'you are using the wrong JDK'
	);
	expect(() => compileAndroidCode()).toThrow(
		/JDK/
	);
});