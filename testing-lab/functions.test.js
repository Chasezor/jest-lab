const {greeting, add, returnTwo, multiply, divide, subtract,} = require('./functions')


test('returns 2', () =>{
    expect(returnTwo()).toBe(2);
})

// modules.exports.returnTwo = () => {
//     return 2
// }

test('Will return a greeting with name', () =>{
    expect(greeting('jack')).toBe('Hello, jack');
})

// modules.exports.greeting =(name) =>{
//     return message = `Hello, ${name}`
// }

describe('Math Functions', ()=>{
    test('add two numbers', () =>{
        expect(add(5,5)).toBe(10);
    })
    
    test('multiply two numbers', () =>{
        expect(multiply(5,5)).toBe(25);
    })
    
    test('subtract two numbers', () =>{
        expect(subtract(5,5)).toBe(0);
    })
    test('divide two numbers', () =>{
        expect(divide(20,5)).toBe(4);
    })
});


// modules.exports.add = (num1, num2) =>{
//     return result = num1 + num2
// }
