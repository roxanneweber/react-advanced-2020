import React, { useState } from 'react';

// here we are passing in the object directly
const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'peter',
		age: '24',
		message: 'random message',
	});

	const [name, setName] = useState('peter');
	const [age, setAge] = useState(24);
	const [message, setMessage] = useState('original message');
	const reset = () => {
		setMessage('original message');
	};
	const changeMessage = () => {
		setMessage('hello world');
	};

	return (
		<>
			<h3>{name}</h3>
			<h3>{age}</h3>
			<h3>
				{message} |{' '}
				<button className='btn' onClick={changeMessage}>
					change message
				</button>
				<button className='btn' onClick={reset}>
					change message
				</button>
			</h3>
		</>
	);
};

export default UseStateObject;
