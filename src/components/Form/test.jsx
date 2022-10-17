import { render, screen } from '@testing-library/react';
import {expect, it, test} from 'vitest';
import { Form } from '.';
import { DateProvider } from '../../context/DateContext';
import { getDate } from '../GetDate'
import { InputField } from './InputField';

describe('Formulario da aplicação', () => {
    it('Botão do formulario com o texto "Buscar Imagem"', () => {
        render(
            <DateProvider>
                <Form>
                   
                </Form>
            </DateProvider>
        )

        const button = screen.getByText(/Buscar Imagem/i)
        
        expect(button).toBeInTheDocument();
    })
    it('Formulario com o value na data do dia do teste', () => {
        render(
            <DateProvider>
                <Form>
                   <InputField dateValue="2022-10-17"/>
                </Form>
            </DateProvider>
        )
        const form = screen.getByDisplayValue(getDate())

        expect(form).toBeInTheDocument();
    })
})