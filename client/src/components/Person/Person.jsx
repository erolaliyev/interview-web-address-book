import PropTypes from 'prop-types';

const Person = ({ name, imageURL, education, workExperience }) => {
	return (
		<div data-testid='person' className='personContainer'>
			<img src={imageURL} alt='' data-testid='imageURL' />
			<div data-testid='name' className='personName'>
				{name}
			</div>
			<div data-testid='education'>
				<p>Education</p>
				<div>
					{education.map((el, index) => {
						return (
							<div key={index} className='personDetails'>
								<div className='personDetailsYears'>
									{el.startYear}
									{` - `}
									{el.endYear ?? 'Present'}
								</div>
								<div>
									<div className='personDetailsInstitution'>
										{el.institution}
									</div>
									<div>{el.degree}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div data-testid='experience'>
				<p>Experience</p>
				<div>
					{workExperience.map((el, index) => {
						return (
							// <div key={index}>
							//   {el.startYear}
							//   {el.endYear ?? 'Present'}
							//   {el.institution}
							//   {el.title}
							// </div>
							<div key={index} className='personDetails'>
								<div className='personDetailsYears'>
									{el.startYear}
									{` - `}
									{el.endYear ?? 'Present'}
								</div>
								<div>
									<div className='personDetailsInstitution'>
										{el.institution}
									</div>
									<div>{el.title}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

Person.propTypes = {
	name: PropTypes.string.isRequired,
	imageURL: PropTypes.string.isRequired,
	education: PropTypes.array.isRequired,
	workExperience: PropTypes.array.isRequired,
};

export default Person;
