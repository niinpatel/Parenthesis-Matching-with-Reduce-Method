function isMatched(expression) {
    return expression.split('').reduce((accumulator, currentValue) => {
        if(currentValue === "(")
            return ++accumulator
        else if (currentValue === ")")
            return --accumulator
        return accumulator
    }, 0) === 0
}




/* Alternate Syntax */
function isMatched2(expression) {

    return [...expression].reduce((accumulator, currentValue) => {
        return currentValue === "(" && ++accumulator || currentValue === ")" && --accumulator
    }, 0) === 0

}


console.log(isMatched("(((())))"))