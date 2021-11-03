import React, { useState } from 'react';

// here we are passing in the object directly
const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: '24',
		message: 'random message',
	});
	console.log(person);
	const changeMessage = () => {};

	return (
		<>
			<h2>Use State Object</h2>
		</>
	);
};

export default UseStateObject;
