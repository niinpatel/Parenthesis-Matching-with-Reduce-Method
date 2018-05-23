#Parenthesis Matching with Reduce Method

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
2. if *currentValue* matches close parenthesis, ie, ")", "]", "}", then we check if last element of accumulator is a matching open parenthesis. 
For example, if *currentValue* is ")", last element of accumulator should be "(". 
    * if that condition is satisfied we *pop()* from the accumulator array. 
    * if it is not satisfied, we push a random character in the accumulator array. 

With this logic, if the parenthesis match perfectly, we should get an empty array in the end. Because all the open parenthesis that are push into array get popped off by is corresponding closing parenthesis one by one. 
If the parenthesis are not matched or in incorrect order, we will get a non-empty array. 

So we will *return reducedArray.length === 0*