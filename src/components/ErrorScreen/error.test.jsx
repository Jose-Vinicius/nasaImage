import { render, screen } from '@testing-library/react';
import {expect, it} from 'vitest';
import { ErrorScreen } from '.';

describe('Error Screen', () => {
    it('Deve conter src="./not-found.jpg" e alt="Not Found"', () => {
        render(<ErrorScreen/>)
        const errorImg = screen.getByRole('img');
        expect(errorImg).toHaveAttribute('src', '/not-found.jpg');
        expect(errorImg).toHaveAttribute('alt', 'Not Found');
    });
    it('Deve conter o texto Data superior como titulo', () => {
        render(<ErrorScreen/>)
        const errorMsg = screen.getByText(/Data superior a atual/i);
        expect(errorMsg).toBeInTheDocument();
    })
});