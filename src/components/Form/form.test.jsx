import { render, screen } from '@testing-library/react';
import {expect, it} from 'vitest';
import { Form } from '.';
import { DateProvider } from '../../context/DateContext';


describe('Formulario da aplicação', () => {
    it('Botão do formulario com o texto "Buscar Imagem"', () => {
        render(
            <DateProvider>
                <Form></Form>
            </DateProvider>
        )

        const button = screen.getByText(/Buscar Imagem/i)
        
        expect(button).toBeInTheDocument();
    })
})