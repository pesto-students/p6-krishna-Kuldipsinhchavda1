
import mathOperation from './Jest.js';


test("adding", () => {
    expect(mathOperation.sum(1, 2)).toBe(3);
})