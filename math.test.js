const { add } = require ( './math_file' );

test ( 'add 2 + 3 to equals 5', () => {
    expect (add( 2, 3 )).toBe (5);
} );

test ( ' divide 100 / 2 to equal 50', () => {
    expect (returnDivide (100 , 5)).toBe(20);
});