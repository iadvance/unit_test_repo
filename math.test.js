const { add } = require ( './math_file' );

test ( 'add 2 + 3 to equals 5', () => {
    expect (add( 2, 3 )).toBe (5);
} );