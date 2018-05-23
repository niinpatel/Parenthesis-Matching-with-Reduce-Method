function processData(input) {
    //Enter your code here

    input = input.split('\n');

    for(line of input){

        line = line.split('');

        let result = line.reduce((accumulator, currentValue) => {

            let openParenthesis = ['(', '[', '{', '<'];
            let closeParenthesis = [')', ']', '}', '>'];

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

        if(result.length === 0){
            console.log("YES")
        } else console.log("NO");

    }

}

let testvar =
    "((((((((([[[<>]]])))))))))\n" +
    "[[[[]]()]]\n" +
    "((({<()>}[])))\n" +
    "(())[<[>]])\n";

processData(testvar);