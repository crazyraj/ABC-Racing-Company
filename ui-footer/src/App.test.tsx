import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App Component', () => {
	render(<App />);
	expect(screen).toBeTruthy();
});
