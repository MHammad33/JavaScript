# javascript-course

## JavaScript Execution Context

- Global Execution context is created (this -> window)

- Function Execution context

- Eval Execution context

```javascript
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
	let total = num1 + num2;
	return total;
}

let res1 = addNum(val1, val2);
let res2 = addNum(11, 1);
```

### FLOW

1. JS creates Global excution context

2. Next it creates memory phase

3. Memory phase - In this phase,the variables are set to undefined until the execution phase(next phase) and the functions are set to their definitions.

4. Next it creates the execution phase

5. Execution phase - In this phase,the variables are initialized to given values and when the functions are called, it creates a memory phase and execution phase for the function just like the main one.

6. After execution, the execution context is deleted.

### Understand call stack with the help of live demo :

1. browser > inspect > Sources

2. Then create a snippet by clicking on the arrow(>>) next to workspace.

3. Then write down some functions in the created snippet, do save them by ctrl+S and create breakpoints.

Here is the code to visualize Call Stack

```javascript
function one() {
	console.log("One");
	two();
}

function two() {
	console.log("Two");
	three();
}

function three() {
	console.log("Three");
}

one();
two();
three();
```
