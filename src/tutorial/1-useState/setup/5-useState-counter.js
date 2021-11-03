import React, { useState } from 'react';

const UseStateCounter = () => {
	const [value, setValue] = useState(0);
	const reset = () => {
		setValue(0);
	};

	const complexIncrease = () => {
		setTimeout(() => {
			//	setValue(value + 1); // this way only allows the 'click' to register once in 2 seconds
			setValue((prevValue) => {
				// this way allows the process to 'save' the value and then, after 2 seconds, register how many clicks and the value based on that
				return prevValue + 1;
			});
		}, 2000);
	};

	return (
		<>
			<section style={{ margin: '4rem 0' }}>
				<h2>regular counter</h2>
				<h1>{value}</h1>
				<button
					className='btn'
					onClick={() => {
						setValue(value + 1);
					}}
				>
					increase
				</button>
				<button
					className='btn'
					onClick={() => {
						setValue(value - 1);
					}}
				>
					decrease
				</button>
				<button className='btn' onClick={reset}>
					reset
				</button>
			</section>

			<section style={{ margin: '4rem 0' }}>
				<h2>more complex counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={complexIncrease}>
					increase later
				</button>
			</section>
		</>
	);
};

export default UseStateCounter;
