import {calculateChange} from "../lib.js";

test.each([
    [50, 0, 20],
    [101, 0, 'Вы не можете вставить больше 100 рублей'],
    [30, 2, 'Вы ввели недостаточное количество средств']
    // ['single name', 'Александр (IT)', 'АI'],
])('should get change', (name, input, expected) => {
    // name -> full name,
    // input -> Александр Петров Иванович
    // expected -> АП
    const result = calculateChange(name, input);
    expect(result).toBe(expected);
});