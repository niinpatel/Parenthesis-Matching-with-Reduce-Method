function isMatched(expression) {

    expression = expression.replace(/[^\[({\])}]/g, '').split('');

    let reducedArray = expression.reduce((accumulator, currentValue) => {

        let openParenthesis = ['(', '[', '{'];
        let closeParenthesis = [')', ']', '}'];

        if(openParenthesis.indexOf(currentValue) !== -1){
            accumulator.push(currentValue)
        }
        else if (closeParenthesis.indexOf(currentValue) !== -1){
            if(closeParenthesis.indexOf(currentValue) === openParenthesis.indexOf(accumulator[accumulator.length - 1])){
                accumulator.pop();
            }
            else {
                accumulator.push("*")
            }
        }

        return accumulator;
    }, [])

    return reducedArray.length === 0;
}

console.log(isMatched('(one (two (three (four (five (six (seven (eight (nine (ten))))))))))'))  // true

console.log(isMatched('one + [five(])')) // false

console.log(isMatched('([]{{}})()')) // true