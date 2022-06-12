import People from '../People';
import { getPeopleData } from '../../../services';
import { server, rest } from '../../../testServer';
import { fireEvent, screen, render } from '@testing-library/react';

beforeEach(() => {
	// eslint-disable-next-line testing-library/no-render-in-setup
	render(<People />);
});

test('should render people data', async () => {
	const element = await screen.findByText(/Joe Machio/i);
	expect(element).toBeInTheDocument();
});

test('should handle errors', async () => {
	server.use(
		rest.get('http://localhost:8080/api/people', (req, res, ctx) => {
			return res(ctx.status(404));
		})
	);
	await expect(getPeopleData()).rejects.toThrow('404');
});

test('should display button for sort order', () => {
	const element = screen.getByRole('button', { name: 'Sort Z to A' });
	expect(element).toBeInTheDocument();
});

describe('Search input', () => {
	test('should display input for search', () => {
		const element = screen.getByPlaceholderText('Enter person name...');
		expect(element).toBeInTheDocument();
	});

	test('should display button for search', () => {
		const element = screen.getByRole('button', { name: 'Search' });
		expect(element).toBeInTheDocument();
	});

	test('search should change according to user input', () => {
		const element = screen.getByPlaceholderText('Enter person name...');
		fireEvent.change(element, { target: { value: 'Adam' } });
		expect(element.value).toBe('Adam');
	});

	test('should display only searched name in people list', async () => {
		const input = screen.getByPlaceholderText('Enter person name...');
		fireEvent.change(input, { target: { value: 'Zack' } });
		const joe = screen.queryByText('Joe');
		const zack = await screen.findByText(/Zack/i);
		expect(joe).not.toBeInTheDocument();
		expect(zack).toBeInTheDocument();
	});

	test('should display no person', () => {
		const input = screen.getByPlaceholderText('Enter person name...');
		fireEvent.change(input, { target: { value: 'aaaaaaa' } });
		const adam = screen.queryByText('Adam');
		const joe = screen.queryByText('Joe');
		const zack = screen.queryByText('Zack');

		expect(adam).not.toBeInTheDocument();
		expect(joe).not.toBeInTheDocument();
		expect(zack).not.toBeInTheDocument();
	});
});

test('should render person component', async () => {
	const person = await screen.findByTestId('person');
	expect(person).toBeInTheDocument();
});
