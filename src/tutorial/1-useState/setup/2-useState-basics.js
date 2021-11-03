import React, { useState } from 'react';
//* useState function required

//! hooks ALWAYS start with 'use' prefix
//! components where we involve these hooks MUST start with UPPER case (i.e., UseStateBasics)
//! the 'hook' must be in the component body (between the first and last {} )
//! cannot call the hook conditionally (using if...then, if...else, etc.)

const UseStateBasics = () => {
	// console.log(useState);
	// console.log(useState('hello world'));
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	// console.log(value, handler);

	//! items that we need to go back to the web page go UNDER the return; here we will now be in 'JS land'
	//**  below: 'text' tells it the value name
	//* 'setText' informs it that this will be a changing variable with a default value; 'setText' also defines this as a function
	//* using setText in our return will allow us to access the 'new' value by creating a function in the background to change the default value
	//* 'useState' then defines this default value

	//* to create a click handler event
	//* 1) create the variable that defines a) the name of the variable and b) 'set' followed by the name of the variable (camelCase)
	//* 2) create a variable for the handler; we will create this as a anonymous function to keep it from running immediately, this anonymous function then has the information needed to 'handle' the variable (e.g., if the text = 'a' then setText, or change, the variable to 'b', etc.);
	//?using an 'if .. else' here can make the handler behave like a 'toggle' between two value
	//* 3) finally you have to add this click action in the return; below we added 'handleClick' to the onClick element; whenever a person clicks this element (button) then it will 'run' the clickHandler function

	const [text, setText] = useState('random title');
	console.log(setText);
	console.log(text);

	const handleClick = () => {
		if (text === 'random title') {
			setText('hello world');
		} else {
			setText('random title');
		}
	};
	return (
		<>
			<h2>{text}</h2>
			<button className='btn' onClick={handleClick}>
				change title
			</button>
		</>
	);
};

export default UseStateBasics;

//console.log(useState('hello world')); // this shows how useState is a function which returns an array
// const value = useState(1)[0];
// const handler = useState(1)[1]; // this const is the function that will control the value we have in our state
//console.log(value, handler);
// when we invoke useState (with the wrapped parens) useState needs to have something to invoke; array/ object/ boleon etc.
