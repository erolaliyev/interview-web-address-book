import Person from '../Person';
import mockData from '../../../mockData';
import { screen, render } from '@testing-library/react';

beforeEach(() => {
	// eslint-disable-next-line testing-library/no-render-in-setup
	render(<Person {...mockData.people[0]} />);
});

test('should render name', () => {
	const element = screen.getByTestId('name');
	expect(element).toBeInTheDocument();
});

test('should render image', () => {
	const element = screen.getByTestId('imageURL');
	expect(element).toBeInTheDocument();
});

test('should render education', () => {
	const element = screen.getByTestId('education');
	expect(element).toBeInTheDocument();
});

test('should render experience', () => {
	const element = screen.getByTestId('experience');
	expect(element).toBeInTheDocument();
});
