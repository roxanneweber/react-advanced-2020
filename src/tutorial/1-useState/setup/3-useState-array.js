import React from 'react';
import { data } from '../../../data';
//* looking for the variable 'data', and showing the path where we can find it

const UseStateArray = () => {
	const [people, setPeople] = React.useState(data);

	//* we create a new variable to hold all the values that do NOT match the ID that is associated with the .filter command; then, set the People value to the NEW array just created
	const removeItem = (id) => {
		let newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};
	//! this is our 'people' data hook with 'data' as our default array values

	return (
		<>
			{
				// iterating over the entire array, and creating a function for what to return from the array
				people.map((person) => {
					const { id, name } = person;
					return (
						<div key={id} className='item'>
							<h4>{name}</h4>
							<button className='btn' onClick={() => removeItem(id)}>
								remove
							</button>
						</div>
					);
				})
			}
			<button
				className='btn'
				onClick={() => {
					setPeople([]);
				}}
			>
				clear items
			</button>
		</>
	);
};

export default UseStateArray;
