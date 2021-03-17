const { checkNums, mean, median, mode } = require('./stats');

test('finds the mean', () => {
    expect(mean('8,10')).toEqual(9);
    expect(mean('3,5.4,3.4,5')).toEqual(4.2);
    expect(mean('10, 6, 8 ')).toEqual(8);
});

test('finds the median', () => {
    expect(median('8,10,6')).toEqual(8);
    expect(median('3,5.4,3.4,5')).toEqual(5);
    expect(median('10, 6, 8 , 200,50')).toEqual(10);
});

test('finds the mode', () => {
    expect(mode('8,10,6,8')).toEqual(8);
    expect(mode('3,5.4,3.4,5')).toEqual(3);
    expect(mode('10, 6, 8,200,50,8,6,6')).toEqual(6);
});