import { useEffect, useState } from 'react';
import { getPeopleData } from '../../services';

import Person from '../Person/Person';
import Button from '../common/Button/Button';

const People = () => {
	const [peopleData, setPeopleData] = useState([]);
	const [personOnDisplay, setPersonOnDisplay] = useState();
	const [sortButtonText, setSortButtonText] = useState('Sort Z to A');
	const [searchValue, setSearchValue] = useState('');
	const [filteredPeopleData, setFilteredPeopleData] = useState([]);
	const [searchButtonClick, setSearchButtonClick] = useState(false);
	useEffect(() => {
		getPeopleData().then((result) => {
			setPeopleData(result.people);
			setPersonOnDisplay(result.people[0]);
		});
	}, []);
	let previousChar = '';

	const handlePersonClick = (e) => {
		setPersonOnDisplay(
			peopleData.filter((person) => person.name === e.target.innerText)[0]
		);
	};

	const handleChangeOrderClick = (e) => {
		if (e.target.innerText === 'Sort Z to A') {
			setSortButtonText('Sort A to Z');
		} else setSortButtonText('Sort Z to A');
	};

	const handleSearchValueChange = (e) => {
		if (e.target.value === '') {
			setSearchButtonClick(false);
		}
		setSearchValue(e.target.value);
	};

	const handleSearchClick = () => {
		setFilteredPeopleData(
			peopleData.filter((person) =>
				person.name.toLowerCase().includes(searchValue.toLowerCase())
			)
		);
		setSearchButtonClick(true);
	};

	return (
		<div className='container'>
			<div className='peopleList'>
				<div className='searchBar'>
					<input
						name='searchValue'
						type='text'
						placeholder='Enter person name...'
						value={searchValue}
						onChange={handleSearchValueChange}
						className='inputBar'
					/>
					<Button
						type='button'
						buttonText='Search'
						onClick={handleSearchClick}
					/>
				</div>
				<div data-testid='people-list'>
					{(searchButtonClick ? filteredPeopleData : peopleData)
						.sort(
							sortButtonText === 'Sort Z to A'
								? (a, b) => a.name.localeCompare(b.name, 'en')
								: (a, b) => b.name.localeCompare(a.name, 'en')
						)
						.map((person, index) => {
							if (person.name.charAt(0) !== previousChar) {
								previousChar = person.name.charAt(0);
								return (
									<div key={index}>
										<div className='peopleListLetter'>
											{person.name.charAt(0)}
										</div>
										<div className='peopleListName' onClick={handlePersonClick}>
											{person.name}
										</div>
									</div>
								);
							} else {
								return (
									<div
										className='peopleListName'
										key={index}
										onClick={handlePersonClick}
									>
										{person.name}
									</div>
								);
							}
						})}
				</div>
				<Button
					type='button'
					buttonText={sortButtonText}
					onClick={handleChangeOrderClick}
				/>
			</div>

			{personOnDisplay && <Person {...personOnDisplay} />}
		</div>
	);
};

export default People;
