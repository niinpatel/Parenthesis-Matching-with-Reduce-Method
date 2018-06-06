# Parenthesis-Matching-with-Reduce-Method

In this program we use javascript's *reduce* method to check if a given expression's parenthesis are balanced or not. 

Here's the rough explanation of how it is done. 

* Take the input as a string example "1 + ((2+3) * 5)"
* remove all characters that are not parenthesis and split it into an array. In this case, we'll get ["(", ")", "(",")"]. 
* Now, it's time to use the reduce method. 

Reduce method in javascript loops through the helps us reduce an array into a single value based on the function we provide. 

Here's we want to reduce our input array into another array which should be empty if the expression is balanced. 

We'll call this array *accumulator* and set its initial value to empty array. 

        let reducedArray = expression.reduce((accumulator, currentValue) => {
            //return something
        }, [])
        
Here *currentValue* is the value of current element of the array on which is used to perform the operation. 
Inside the callback function that we passed into reduce method we will have the following logic. 

1. if *currentValue* matches open parenthesis, ie, "(", "[", "{", then we push it to our *accumulator* array. 
2. if *currentValue* matches close parenthesis, ie, ")", "]", "}", then we check if last element of *accumulator* is a matching open parenthesis. 
For example, if *currentValue* is ")", last element of *accumulator* should be "(". 
    * if that condition is satisfied we *pop()* the last element from the *accumulator* array. 
    * if it is not satisfied, we push a random character in the *accumulator* array. 
    
Here's the visual representation of this algorithm. 

![alt parenthesis matching algo](https://image.slidesharecdn.com/stackdatastructure-120903115401-phpapp01/95/stack-data-structure-12-728.jpg?cb=1346673325)

With this logic, if the parenthesis match perfectly, we should get an empty array in the end. Because all the open parenthesis that are pushed into array get popped off by is corresponding closing parenthesis one by one. 
If the parenthesis are not matched or in incorrect order, we will get a non-empty array. 

So we will *return reducedArray.length === 0*


# ** Update - June 6 2018 **

The above method is surely not the best way to do this because we are essentially storing every element into stacks. 

I have created a new program *withoutStacks.js* which does the same job in much better way without storing elements of the array. 

Let's look at the code. 

    function isMatched(expression) {
        return expression.split('').reduce((accumulator, currentValue) => {
            if(currentValue === "(")
                return ++accumulator
            else if (currentValue === ")")
                return --accumulator
            return accumulator
        }, 0) === 0
    }


Here instead of having a stack, we're having an accumulator as a number, initially value of which is one. 

If we encounter an opening parenthesis, we will increment it, and if we encounter a closing parenthesis, we will decrement it. 

This way, the final result will be zero is the expression is balanced. 

To convert this output into boolean, we will put *=== 0* in the end. 

An alternative syntax, a more succinct way to write this program would be 

    /* Alternate Syntax */
    function isMatched2(expression) {
    
        return [...expression].reduce((accumulator, currentValue) => {
            return currentValue === "(" && ++accumulator || currentValue === ")" && --accumulator
        }, 0) === 0
    
    }

